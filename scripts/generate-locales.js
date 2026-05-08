const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const indexPath = path.join(root, "index.html");
const appPath = path.join(root, "app.js");

const localeConfig = {
  en: {
    dir: root,
    url: "https://aiadoptor.com/",
    ogLocale: "en_US",
  },
  de: {
    dir: path.join(root, "de"),
    url: "https://aiadoptor.com/de/",
    ogLocale: "de_AT",
  },
  ru: {
    dir: path.join(root, "ru"),
    url: "https://aiadoptor.com/ru/",
    ogLocale: "ru_RU",
  },
  uk: {
    dir: path.join(root, "uk"),
    url: "https://aiadoptor.com/uk/",
    ogLocale: "uk_UA",
  },
};

function extractTranslations(appSource) {
  const start = appSource.indexOf("const translations = ");
  const end = appSource.indexOf("\n\nfunction detectInitialLanguage", start);
  if (start === -1 || end === -1) {
    throw new Error("Could not find translations object in app.js");
  }

  const objectSource = appSource.slice(start, end).replace("const translations = ", "").replace(/;\s*$/, "");
  return vm.runInNewContext(`(${objectSource})`);
}

function replaceAttribute(tag, attribute, value) {
  const escaped = String(value).replace(/"/g, "&quot;");
  const pattern = new RegExp(`${attribute}="[^"]*"`);
  if (pattern.test(tag)) {
    return tag.replace(pattern, `${attribute}="${escaped}"`);
  }

  return tag.replace(/>$/, ` ${attribute}="${escaped}">`);
}

function applyI18n(html, dictionary) {
  let rendered = html;

  rendered = rendered.replace(/(<[^>]+data-i18n-attr="([^"]+)"[^>]*>)/g, (tag, fullTag, spec) => {
    return spec.split(",").reduce((updatedTag, pair) => {
      const parts = pair.split(":").map((value) => value.trim());
      return replaceAttribute(updatedTag, parts[0], dictionary[parts[1]] || "");
    }, fullTag);
  });

  rendered = rendered.replace(
    /(<([a-z0-9]+)\b[^>]*data-i18n="([^"]+)"[^>]*>)([\s\S]*?)(<\/\2>)/gi,
    (match, openTag, tagName, key, currentContent, closeTag) => {
      if (!Object.prototype.hasOwnProperty.call(dictionary, key)) return match;
      return `${openTag}${dictionary[key]}${closeTag}`;
    }
  );

  return rendered;
}

function addHreflang(html) {
  const alternateLinks = `
    <link rel="alternate" hreflang="en" href="https://aiadoptor.com/" />
    <link rel="alternate" hreflang="de" href="https://aiadoptor.com/de/" />
    <link rel="alternate" hreflang="ru" href="https://aiadoptor.com/ru/" />
    <link rel="alternate" hreflang="uk" href="https://aiadoptor.com/uk/" />
    <link rel="alternate" hreflang="x-default" href="https://aiadoptor.com/" />`;

  let rendered = html.replace(/\n\s*<link rel="alternate" hreflang="[^"]+" href="[^"]+" \/>/g, "");
  rendered = rendered.replace(/(<link rel="canonical" href="[^"]+" \/>)/, `$1${alternateLinks}`);
  return rendered;
}

function absolutizeAssets(html) {
  return html
    .replace(/href="assets\//g, 'href="/assets/')
    .replace(/src="assets\//g, 'src="/assets/')
    .replace(/href="styles\.css"/g, 'href="/styles.css"')
    .replace(/src="app\.js"/g, 'src="/app.js"');
}

function localizeHead(html, lang, dictionary) {
  const config = localeConfig[lang];
  let rendered = html;
  rendered = rendered.replace(/<html lang="[^"]+"/, `<html lang="${lang}"`);
  rendered = rendered.replace(/<link rel="canonical" href="[^"]+" \/>/, `<link rel="canonical" href="${config.url}" />`);
  rendered = rendered.replace(/<meta property="og:url" content="[^"]+" \/>/, `<meta property="og:url" content="${config.url}" />`);
  rendered = rendered.replace(/<meta property="og:locale" content="[^"]+" \/>/, `<meta property="og:locale" content="${config.ogLocale}" />`);
  rendered = rendered.replace(/<meta property="og:title" content="[^"]+" \/>/, `<meta property="og:title" content="${dictionary["meta.title"]}" />`);
  rendered = rendered.replace(/<meta name="twitter:title" content="[^"]+" \/>/, `<meta name="twitter:title" content="${dictionary["meta.title"]}" />`);
  rendered = rendered.replace(
    /<meta property="og:description"[\s\S]*?\/>/,
    `<meta property="og:description" content="${dictionary["meta.description"]}" />`
  );
  rendered = rendered.replace(
    /<meta name="twitter:description"[\s\S]*?\/>/,
    `<meta name="twitter:description" content="${dictionary["meta.description"]}" />`
  );
  rendered = rendered.replace(/<title[^>]*>[\s\S]*?<\/title>/, `<title data-i18n="meta.title">${dictionary["meta.title"]}</title>`);
  return rendered;
}

function localizeJsonLd(html, lang, dictionary) {
  const config = localeConfig[lang];
  return html
    .replace(/"url": "https:\/\/aiadoptor\.com\/[^"]*"/g, `"url": "${config.url}"`)
    .replace(
      /"description": "AI workflow studio in Vienna helping international business professionals and small businesses save time and automate repetitive work with practical AI workflows, ChatGPT, AI agents and quality checks\."/,
      `"description": "${dictionary["meta.description"]}"`
    );
}

const appSource = fs.readFileSync(appPath, "utf8");
const translations = extractTranslations(appSource);
const baseTemplate = absolutizeAssets(addHreflang(fs.readFileSync(indexPath, "utf8")));

Object.keys(localeConfig).forEach((lang) => {
  const config = localeConfig[lang];
  const dictionary = translations[lang];
  const output = localizeJsonLd(localizeHead(applyI18n(baseTemplate, dictionary), lang, dictionary), lang, dictionary);
  fs.mkdirSync(config.dir, { recursive: true });
  fs.writeFileSync(path.join(config.dir, "index.html"), output);
});

console.log("Generated localized pages: /, /de/, /ru/, /uk/");
