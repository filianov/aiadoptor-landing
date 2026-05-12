# AIAdoptor Integrations Plan

The landing page is currently a static GitHub Pages-ready website.
Static hosting cannot store form submissions or send automated email by itself, so lead capture should be connected to external services.

## Recommended affordable stack

### 1. Lead forms and database

Use Tally for:

- 20-minute AI Workflow Review form
- AI Starter Workshop registration form
- Webinar interest / registration form
- Google Sheets sync as the first lightweight database

Suggested fields:

- Name
- Email
- Phone or WhatsApp
- Preferred language
- Request type: review, workshop, sprint, webinar
- Main workflow pain
- Consent checkbox for follow-up emails

### 2. Booking

Use Calendly for the 20-minute review.

Recommended flow:

1. Visitor clicks `Book Free 20-Min AI Workflow Review`.
2. Visitor selects a slot in Calendly.
3. Calendly creates a Zoom link automatically.
4. Calendly sends confirmation and reminders.
5. Optional: Make sends the lead to Google Sheets and Brevo.

### 3. Email marketing and follow-up

Use Brevo for:

- contact list
- welcome email
- workshop reminder sequence
- post-consultation follow-up
- webinar reminders

Suggested segments:

- Review requested
- Workshop interested
- Small business audit
- Workflow sprint lead
- Webinar registered

Created Brevo lists:

- `AIAdoptor - All Leads` — ID `3`
- `AIAdoptor - Review Requests` — ID `4`
- `AIAdoptor - Workshop Registrants` — ID `5`
- `AIAdoptor - Webinar Registrants` — ID `6`
- `AIAdoptor - Audit Sprint Leads` — ID `7`
- `AIAdoptor - Newsletter Opt-in` — ID `8`

Created Brevo contact attributes:

- `FIRSTNAME` exists by default
- `PHONE`
- `PREFERRED_LANGUAGE`
- `LEAD_TYPE`
- `TOPIC`
- `SOURCE_PAGE`
- `CONSENT_NEWSLETTER`
- `CONSENT_FOLLOWUP`

### 4. Automation glue

Use Make for:

- Tally submission -> Google Sheets row
- Tally submission -> Brevo contact
- Tally submission -> internal email notification
- Workshop/webinar registration -> confirmation email
- Optional Zoom/Calendly event data sync

Current Make status on 2026-05-10:

- Scenario `Integration Webhooks` is created and active.
- Webhook `AIAdoptor Tally Lead Intake`:
  `https://hook.eu1.make.com/9zovvqu4rmil24kddcqjnn03z12ctaq3`
- Google Sheets `AIAdoptor CRM` / `Leads` receives mapped lead fields from webhook test data and from a real Tally audit/sprint submission.
- Duplicate Sheets module is stopped by filter `Stop duplicate Google Sheets module`.
- Tally webhook is connected to all three published forms: audit/sprint, workshop, webinar/waitlist.
- Real audit/sprint test passed at `2026-05-10 16:41:40 Europe/Vienna`: Make run `53cbbbd5d3614fc7aed0e5adcd823fe0`, 2 operations, Google Sheets row `3`.
- Brevo connection `My Brevo connection` is created in Make Credentials.
- Native `Brevo > Create a Contact` was tested but not saved because Make rejected the dynamic Tally email formula in the editor.
- Scenario `AIAdoptor Sheets to Brevo Sync` is created and active.
- `AIAdoptor Sheets to Brevo Sync` runs every 15 minutes:
  `Google Sheets - Watch New Rows` -> `HTTP - Make a request`.
- The HTTP module posts to Brevo `POST /v3/contacts` through the saved `Brevo API Key` credential, uses `updateEnabled: true`, and adds contacts to Brevo list `AIAdoptor - All Leads` (ID `3`).
- Successful Brevo sync test passed at `2026-05-10 19:51:54 Europe/Vienna`: 3 operations, 2.7 KB data transfer, Make history status `Success`.
- Important implementation note: Make must insert Google Sheets values into the HTTP JSON body as live mapper tokens such as `email (G)`, not typed placeholders like `{{1.email}}` or `{{1.G}}`; typed placeholders resolve to empty strings.
- Internal notification module added after Brevo contact sync: Brevo transactional email API `POST /v3/smtp/email` sends a notification to `aiadoptor@gmail.com` with a link to the CRM sheet.
- Router added after the internal notification module for Brevo list distribution.
- Brevo list route added: `form_type = audit_sprint` -> list `AIAdoptor - Audit Sprint Leads` (ID `7`).
- Brevo list route added: `form_type = AI Webinar Registration / Waitlist` -> list `AIAdoptor - Webinar Registrants` (ID `6`).
- Brevo list route added: `form_type = AI Starter Workshop Registration` -> list `AIAdoptor - Workshop Registrants` (ID `5`).
- Brevo list route added: `form_type = review` -> list `AIAdoptor - Review Requests` (ID `4`).
- Fresh Google Sheets route test passed on `2026-05-10 21:33-21:34 Europe/Vienna`:
  - `review` -> list `AIAdoptor - Review Requests` (ID `4`)
  - `workshop` -> list `AIAdoptor - Workshop Registrants` (ID `5`)
  - `webinar` -> list `AIAdoptor - Webinar Registrants` (ID `6`)
  - `audit_sprint` -> list `AIAdoptor - Audit Sprint Leads` (ID `7`)
- Test note: the first attempt was blocked by an empty row in the CRM sheet. Google Sheets watch modules need a continuous table without blank rows between leads.
- Zoom Meeting created for workshop/webinar:
  - Event: `AI for Life & Work in Austria`
  - Time: `15 May 2026, 18:00 Europe/Vienna`
  - Join link: `https://us06web.zoom.us/j/82657817294?pwd=gIHhx7i3Fsrm9pVbQhnnlpMhtD8kd2.1`
  - Meeting ID: `826 5781 7294`
  - Passcode: `930990`
- Brevo transactional confirmation emails are connected in Make:
  - `form_type = AI Starter Workshop Registration` -> workshop confirmation email after Brevo list ID `5`.
  - `form_type = AI Webinar Registration / Waitlist` -> webinar / waitlist confirmation email after Brevo list ID `6`.
- Confirmation emails use Brevo transactional API `POST /v3/smtp/email`, sender `AIAdoptor Studio <aiadoptor@gmail.com>`, and the live Google Sheets mapper token `email (G)` as recipient.
- Make confirmation emails for workshop and webinar were updated with the live Zoom details on `2026-05-10`.
- Post-publication confirmation delivery was repaired and verified on `2026-05-11`: the public Tally forms send full form names in `form_type (E)`, so the Make route filters were updated from the old test values `workshop` / `webinar` to the live values above.
- Fresh test run `ed89febe9b484d3b896c38a1b3389027` at `2026-05-11 16:52 Europe/Vienna` processed one workshop and one webinar submission, passed both routes, added both newsletter opt-ins, and delivered both participant confirmation emails in Gmail.
- Confirmation delivery test passed on `2026-05-10 22:33 Europe/Vienna`:
  - workshop test row -> `aiadoptor+confirm-workshop-20260510@gmail.com`, Gmail search returned `1-1 of 1`.
  - webinar test row -> `aiadoptor+confirm-webinar-20260510@gmail.com`, Gmail search returned `1-1 of 1`.
- Live Zoom details delivery test passed on `2026-05-11`:
  - workshop test row -> `aiadoptor+zoom-workshop-20260511@gmail.com`, latest email contains Zoom link, Meeting ID `826 5781 7294`, and passcode `930990`.
  - webinar test row -> `aiadoptor+zoom-webinar-20260511@gmail.com`, latest email contains Zoom link, Meeting ID `826 5781 7294`, and passcode `930990`.
- Confirmation email copy is stored in `BREVO_EMAIL_TEMPLATES.md`.
- Brevo scheduled campaigns were added on `2026-05-11` for workshop/webinar registrants:
  - 24-hour reminder: `AIAdoptor Workshop Webinar Reminder 24h - 15 May 2026`, lists ID `5` and `6`, scheduled `14 May 2026, 18:00 Europe/Vienna`.
  - 1-hour reminder: `AIAdoptor Workshop Webinar Reminder 1h - 15 May 2026`, lists ID `5` and `6`, scheduled `15 May 2026, 17:00 Europe/Vienna`.
  - Post-event follow-up: `AIAdoptor Workshop Webinar Follow-up - 16 May 2026`, lists ID `5` and `6`, scheduled `16 May 2026, 10:00 Europe/Vienna`.
- Tally budget cleanup was added in the live `Integration Webhooks` scenario on `2026-05-11`: Google Sheets `notes (V)` now maps known audit/sprint budget option ID `81fbff34-ab1f-4d46-b625-18af6ec9c957` to visible text `1001 - 3000 USD`; unknown values fall back to the original Tally value.
- Remaining integration backlog:
  - optionally run final live submissions through each public Tally form after site launch.

Audit on 2026-05-11:

- Core launch flow is complete: public forms, Google Sheets CRM, Brevo contact sync, Brevo list routing by `form_type`, internal notification, workshop/webinar confirmation emails, and live Zoom link delivery are all configured and tested.
- The `Newsletter Opt-in` route is configured and verified in Make: `consent_newsletter (Q) = TRUE` -> Brevo list ID `8`. The previous workshop fallback via `topic (M)` was removed on `2026-05-12`.
- Fresh end-to-end test passed on `2026-05-11`: Tally submission `aiadoptor+newsletter-id8-pass-1778490438344@gmail.com` -> `Integration Webhooks` run `de8c89a2b9bf44f9a65d694f8809115c` at `11:09:55` -> `AIAdoptor Sheets to Brevo Sync` run `2debaedd13dc47abb1c0b1050d35022d` at `11:09:58`.
- The successful sync run executed HTTP module `13`: `POST https://api.brevo.com/v3/contacts/lists/8/contacts/add`, body `{"ids":[16]}`, response status `201`.
- Newsletter mapping cleanup passed on `2026-05-12`: workshop submission `aiadoptor+qsheet20260512@gmail.com` reached `Integration Webhooks` run `4dfcd030df3745bb8f655351c02fbd2b` at `10:29:20`; `consent_newsletter (Q)` is populated by `=INDIRECT("M"&ROW())`. The sync run `85986be26814493c9795b03da36eec54` at `10:37:15` posted contact ID `27` to Brevo list ID `8` and returned status `201`.
- Reminder/follow-up emails are implemented as Brevo scheduled campaigns for the 15 May 2026 workshop/webinar event.
- Budget mapping caveat resolved for the known audit/sprint option ID: `81fbff34-ab1f-4d46-b625-18af6ec9c957` -> `1001 - 3000 USD`.
- Website CTA links point to the live Calendly and Tally destinations. The old direct contact form is not present in the HTML pages.

### 5. Webinar registration

Low-cost first version:

- Tally registration form
- Google Sheets as registrant database
- Brevo confirmation/reminder emails
- Zoom Meeting link or Zoom Webinar registration link

More advanced version:

- Zoom Webinars registration
- Brevo/Make sync
- registration reports from Zoom

## Site changes needed after accounts are created

Current website status on 2026-05-10:

- Review CTAs point to Calendly.
- Workshop CTAs point to Tally workshop form.
- Audit and sprint CTAs point to Tally audit/sprint form.
- Privacy Policy page is available at `https://aiadoptor.com/privacy/` with English, German, Russian and Ukrainian sections.
- Footer privacy links are added on all language landing pages and the presentation card.
- Sitemap includes `/privacy/`.

Replace the current static `mailto` form with one of these:

1. Embedded Tally form inside the booking section.
2. Direct CTA links to Tally and Calendly.
3. A custom endpoint via Formspree, Basin, Netlify Forms or a small serverless function.

Recommended first implementation:

- Main CTA: Calendly booking link
- Workshop CTA: Tally workshop form
- Contact form: Tally embedded form synced to Google Sheets and Brevo

## Active URLs

- Review booking: `https://calendly.com/aiadoptor/free-20-min-ai-workflow-review`
- Workshop registration: `https://tally.so/r/J9XApR`
- Webinar registration / waitlist: `https://tally.so/r/aQKYeb`
- Audit / sprint inquiry: `https://tally.so/r/lbKdrk`

## Data privacy notes

Privacy Policy page added before collecting personal data through the public launch flow.
Keep explicit consent for email follow-up and newsletter-style communication in Tally forms.
Use double opt-in in Brevo for marketing emails when possible.
