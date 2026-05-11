# AIAdoptor: инструкция внедрения форм, CRM, email и Zoom

Цель первой версии: быстро превратить лендинг в рабочую воронку без собственной backend-разработки.

Рекомендуемая архитектура:

- Calendly: запись на бесплатное 20-минутное AI Workflow Review.
- Tally: формы регистрации на AI Starter Workshop и webinar / waitlist.
- Google Sheets: первая CRM-база заявок.
- Brevo: контакты, сегменты, автоматические письма и рассылки.
- Make: автоматизация между Tally, Google Sheets, Brevo и внутренними уведомлениями.
- Zoom: встречи через Calendly + Zoom; вебинары сначала через Zoom Meeting, позже через Zoom Webinars.

## Этап 0. Подготовить аккаунты и решения

Создать или проверить аккаунты:

1. Google account для Google Sheets.
2. Tally account.
3. Calendly account.
4. Zoom account.
5. Brevo account.
6. Make account.

Принять решения:

1. Основной email для уведомлений: `aiadoptor@gmail.com`.
2. Языки коммуникации: English, Russian, Ukrainian.
3. Главные типы лидов:
   - Free 20-Min AI Workflow Review.
   - AI Starter Workshop.
   - AI Workflow Audit.
   - AI Workflow Sprint.
   - Webinar registration / interest.
4. Первичная CRM: Google Sheets, не отдельная CRM-система.

## Этап 1. Создать Google Sheets как первую CRM

Создать файл:

```text
AIAdoptor CRM
```

Рекомендуемые вкладки:

1. `Leads`
2. `Consultations`
3. `Workshops_Webinars`
4. `Email_Log`
5. `Settings`

Минимальные колонки для `Leads`:

```text
created_at
source
source_page
language
form_type
name
email
phone_whatsapp
company
role
city_country
preferred_language
topic
service_interest
message
consent_followup
consent_newsletter
utm_source
utm_medium
utm_campaign
status
notes
calendly_event_url
zoom_join_url
```

Рекомендуемые статусы:

```text
new
contacted
booked
attended
proposal_sent
won
lost
nurture
```

## Этап 2. Настроить Calendly для 20-minute review

Создать event type:

```text
Free 20-Min AI Workflow Review
```

Настройки:

1. Duration: 20 minutes.
2. Location: Zoom.
3. Availability: только реальные рабочие окна.
4. Buffer before/after: 10 minutes.
5. Minimum scheduling notice: 12-24 hours.
6. Invitee questions:
   - Name.
   - Email.
   - Phone / WhatsApp.
   - Preferred language: English / Russian / Ukrainian.
   - What do you want AI to help with?
   - Are you an individual professional or a business owner?
7. Confirmation page: Calendly default first, later custom `/thank-you/`.
8. Notifications:
   - Confirmation email.
   - Reminder 24 hours before.
   - Reminder 1 hour before.

Connect Zoom:

1. Calendly -> Integrations & apps.
2. Select Zoom.
3. Connect Zoom account.
4. In event type, set location to Zoom.
5. Create a test booking and confirm that Zoom details appear in the calendar invite.

What to send Codex after this step:

```text
Calendly public booking link
```

Then the site CTA `Book Free 20-Min AI Workflow Review` can be replaced with the Calendly URL.

## Этап 3. Создать Tally forms

Создать минимум две формы.

### Form 1: AI Starter Workshop Registration

Fields:

```text
Name
Email
Phone / WhatsApp
Preferred language
Professional role
What do you want to learn or automate?
Consent to receive workshop-related emails
Optional consent to receive future AIAdoptor updates
```

### Form 2: AI Webinar Registration / Waitlist

Fields:

```text
Name
Email
Phone / WhatsApp
Preferred language
Main AI workflow pain
Business / professional context
Consent to receive webinar-related emails
Optional consent to receive future AIAdoptor updates
```

### Optional Form 3: AI Workflow Audit / Sprint Inquiry

Fields:

```text
Name
Email
Phone / WhatsApp
Company
Website
Team size
What repetitive work do you want to automate?
Current tools
Budget range
Preferred language
Consent to follow up
```

Tally settings:

1. Turn on email notifications to `aiadoptor@gmail.com`.
2. Connect each form to Google Sheets.
3. Use one shared Google Sheet or separate tabs.
4. Add hidden fields if available:
   - `source_page`
   - `language`
   - `utm_source`
   - `utm_medium`
   - `utm_campaign`
5. Add thank-you text after submission.

What to send Codex after this step:

```text
Tally workshop form link
Tally webinar form link
Tally audit/sprint form link, if created
```

Then the site buttons can be replaced with real form links or embedded Tally forms.

## Этап 4. Настроить Brevo

Status on 2026-05-10:

- Contact attributes created: `PHONE`, `PREFERRED_LANGUAGE`, `LEAD_TYPE`, `TOPIC`, `SOURCE_PAGE`, `CONSENT_NEWSLETTER`, `CONSENT_FOLLOWUP`.
- Existing default attribute confirmed: `FIRSTNAME`.
- Sender confirmed as verified: `AIAdoptor Studio <aiadoptor@gmail.com>`.
- Lists created in `Your First Folder`:
  - `AIAdoptor - All Leads` — ID `3`
  - `AIAdoptor - Review Requests` — ID `4`
  - `AIAdoptor - Workshop Registrants` — ID `5`
  - `AIAdoptor - Webinar Registrants` — ID `6`
  - `AIAdoptor - Audit Sprint Leads` — ID `7`
  - `AIAdoptor - Newsletter Opt-in` — ID `8`
- Native visual templates in the Brevo editor are optional backlog. Current launch confirmations are implemented through Make HTTP + Brevo transactional API, with copy stored in `BREVO_EMAIL_TEMPLATES.md`.
- Make connection created: `My Brevo connection`.
- Native Make `Brevo > Create a Contact` was tested but not saved into the live scenario: Make's editor rejected the dynamic Tally email formula as `Value is not a valid email address`. The working Tally -> Google Sheets scenario was preserved by discarding the failed module edits.
- A separate Make scenario now syncs new Google Sheets CRM rows to Brevo:
  `AIAdoptor Sheets to Brevo Sync`.
- The sync uses `HTTP > Make a request` with the saved `Brevo API Key` credential and Brevo endpoint `POST /v3/contacts`.
- Contacts are created or updated with `updateEnabled: true` and added to Brevo list `AIAdoptor - All Leads` (ID `3`).
- Successful sync test passed at `2026-05-10 19:51:54 Europe/Vienna`: Make history status `Success`, 3 operations.
- The sync scenario is active and scheduled every 15 minutes.
- Make mapping note: use live mapper tokens from Google Sheets, for example `email (G)` and `name (F)`. Typed placeholders such as `{{1.email}}` or `{{1.G}}` look valid in the editor but resolve to empty values in the HTTP request.
- Internal notification module added: Brevo transactional email API sends a notification to `aiadoptor@gmail.com` after a new CRM row is synced to Brevo.
- Brevo list router added after the notification module.
- Active list routes:
  - `form_type = audit_sprint` -> `AIAdoptor - Audit Sprint Leads` (ID `7`)
  - `form_type = AI Webinar Registration / Waitlist` -> `AIAdoptor - Webinar Registrants` (ID `6`)
  - `form_type = AI Starter Workshop Registration` -> `AIAdoptor - Workshop Registrants` (ID `5`)
  - `form_type = review` -> `AIAdoptor - Review Requests` (ID `4`)
- Fresh Google Sheets route test passed on `2026-05-10 21:33-21:34 Europe/Vienna`:
  - `review` route reached Brevo list ID `4`
  - `workshop` route reached Brevo list ID `5`
  - `webinar` route reached Brevo list ID `6`
  - `audit_sprint` route reached Brevo list ID `7`
- Test note: keep the `Leads` sheet continuous. An empty row between old and new leads can stop the Google Sheets watcher from seeing rows below it.
- Zoom Meeting created for workshop/webinar:
  - Event: `AI for Life & Work in Austria`
  - Time: `15 May 2026, 18:00 Europe/Vienna`
  - Join link: `https://us06web.zoom.us/j/82657817294?pwd=gIHhx7i3Fsrm9pVbQhnnlpMhtD8kd2.1`
  - Meeting ID: `826 5781 7294`
  - Passcode: `930990`
- Workshop and webinar confirmation emails are connected in the Make scenario through Brevo transactional API `POST /v3/smtp/email`:
  - workshop route after Brevo list ID `5` sends `Your AIAdoptor workshop registration is received`.
  - webinar route after Brevo list ID `6` sends `Your AIAdoptor webinar registration is received`.
- Both confirmation modules use sender `AIAdoptor Studio <aiadoptor@gmail.com>` and live Google Sheets mapper token `email (G)` as recipient.
- Make confirmation emails for workshop and webinar were updated with the live Zoom details on `2026-05-10`.
- Post-publication fix on `2026-05-11`: live public Tally forms write full form names into `form_type (E)`, not the earlier canonical test values `workshop` / `webinar`. The Make filters were updated to the active list route values above.
- Fresh production confirmation delivery test passed on `2026-05-11 16:52 Europe/Vienna`:
  - Tally workshop submission `aiadoptor+fixed-workshop-20260511@gmail.com` reached Make run `ed89febe9b484d3b896c38a1b3389027`, passed `Workshop leads`, and Gmail received `Your AIAdoptor workshop registration is received`.
  - Tally webinar submission `aiadoptor+fixed-webinar-20260511@gmail.com` reached the same Make run, passed `Webinar leads`, and Gmail received `Your AIAdoptor webinar registration is received`.
  - Both emails included the live Zoom link for `AI for Life & Work in Austria`, `15 May 2026, 18:00 Europe/Vienna`.
- Confirmation delivery test passed on `2026-05-10 22:33 Europe/Vienna`:
  - workshop test row reached Gmail at `aiadoptor+confirm-workshop-20260510@gmail.com`.
  - webinar test row reached Gmail at `aiadoptor+confirm-webinar-20260510@gmail.com`.
- Live Zoom details delivery test passed on `2026-05-11`:
  - workshop test row reached Gmail at `aiadoptor+zoom-workshop-20260511@gmail.com` with the Zoom link, Meeting ID `826 5781 7294`, and passcode `930990`.
  - webinar test row reached Gmail at `aiadoptor+zoom-webinar-20260511@gmail.com` with the Zoom link, Meeting ID `826 5781 7294`, and passcode `930990`.
- Confirmation email copy is stored in `BREVO_EMAIL_TEMPLATES.md`.
- Brevo scheduled email campaigns added on `2026-05-11` for workshop/webinar registrants:
  - `AIAdoptor Workshop Webinar Reminder 24h - 15 May 2026` -> lists ID `5` and `6`, scheduled for `14 May 2026, 18:00 Europe/Vienna`.
  - `AIAdoptor Workshop Webinar Reminder 1h - 15 May 2026` -> lists ID `5` and `6`, scheduled for `15 May 2026, 17:00 Europe/Vienna`.
  - `AIAdoptor Workshop Webinar Follow-up - 16 May 2026` -> lists ID `5` and `6`, scheduled for `16 May 2026, 10:00 Europe/Vienna`.
- Tally budget cleanup added on `2026-05-11`: in the live `Integration Webhooks` scenario, Google Sheets `notes (V)` maps known audit/sprint budget option ID `81fbff34-ab1f-4d46-b625-18af6ec9c957` to `1001 - 3000 USD`; unknown values fall back to the original Tally value.
- Remaining integration backlog:
  - clean up the workshop Tally -> Sheets mapping so the newsletter checkbox writes directly to `consent_newsletter (Q)` instead of relying on the current `topic (M)` fallback.
  - optional: run one live submission through each public Tally form after the site launch.

Audit on 2026-05-11:

- Core launch flow is complete and tested: public Tally forms, Google Sheets CRM, Brevo sync, list routing by `form_type`, internal notification, workshop/webinar confirmation emails, and live Zoom details delivery.
- The `Newsletter Opt-in` list exists and the Make route is configured. It accepts `consent_newsletter (Q) = TRUE` and, for the current workshop form, the working fallback `topic (M) = TRUE`.
- Fresh end-to-end newsletter opt-in test passed on `2026-05-11`: Tally submission `aiadoptor+newsletter-id8-pass-1778490438344@gmail.com` -> `Integration Webhooks` run `de8c89a2b9bf44f9a65d694f8809115c` at `11:09:55` -> `AIAdoptor Sheets to Brevo Sync` run `2debaedd13dc47abb1c0b1050d35022d` at `11:09:58`.
- In the successful sync run, route `5th Newsletter opt-in` executed HTTP module `13`: `POST https://api.brevo.com/v3/contacts/lists/8/contacts/add`, body `{"ids":[16]}`, response status `201`.
- Mapping caveat: the workshop form currently writes the newsletter checkbox correctly into `topic (M)`; `consent_newsletter (Q)` still needs a later cleanup because the previous typed formula produced text instead of a live Make mapper token.
- Reminder/follow-up emails are scheduled in Brevo for the 15 May 2026 event: 24-hour reminder, 1-hour reminder, and post-event follow-up.
- Budget mapping caveat resolved for the known audit/sprint option ID: `81fbff34-ab1f-4d46-b625-18af6ec9c957` -> `1001 - 3000 USD`.

Create contact attributes:

```text
FIRSTNAME
PHONE
PREFERRED_LANGUAGE
LEAD_TYPE
TOPIC
SOURCE_PAGE
CONSENT_NEWSLETTER
CONSENT_FOLLOWUP
```

Create lists:

```text
AIAdoptor - All Leads
AIAdoptor - Review Requests
AIAdoptor - Workshop Registrants
AIAdoptor - Webinar Registrants
AIAdoptor - Audit Sprint Leads
AIAdoptor - Newsletter Opt-in
```

Sender setup:

1. Add sender name: `AIAdoptor`.
2. Add sender email.
3. If using domain email later, verify domain DNS for SPF/DKIM.
4. Keep marketing emails separate from transactional emails.

Email templates:

1. Consultation request received.
2. Workshop registration confirmation.
3. Webinar registration confirmation.
4. Webinar reminder 24 hours before.
5. Webinar reminder 1 hour before.
6. Post-webinar follow-up.
7. Post-consultation follow-up.

Automation rules:

1. If lead type is `review`, add to Review Requests and send internal notification / confirmation.
2. If lead type is `workshop`, add to Workshop Registrants and send workshop confirmation.
3. If lead type is `webinar`, add to Webinar Registrants and send webinar confirmation.
4. If `CONSENT_NEWSLETTER` is true, add to Newsletter Opt-in.

Important:

- For EU/GDPR safety, include explicit consent checkboxes in Tally.
- Use double opt-in for newsletter-style communication where possible.
- Transactional confirmations are separate from marketing newsletters.

## Этап 5. Настроить Make automation

Status on 2026-05-10:

- Scenario created: `Integration Webhooks`.
- Scenario is active and runs `Immediately as data arrives`.
- Custom webhook created: `AIAdoptor Tally Lead Intake`.
- Webhook URL: `https://hook.eu1.make.com/9zovvqu4rmil24kddcqjnn03z12ctaq3`.
- Google Sheets module is connected to `/ AIAdoptor CRM`, sheet `Leads`.
- Test webhook submission was accepted by Make and processed into Google Sheets module successfully.
- Real Tally audit/sprint submission test passed at `2026-05-10 16:41:40 Europe/Vienna`: Make run `53cbbbd5d3614fc7aed0e5adcd823fe0` finished with `Success`, 2 operations, and inserted row `3` into Google Sheets.
- Confirmed mapped fields in the successful run: `created_at`, `source`, `source_page`, `form_type`, `name`, `email`, `phone_whatsapp`, `company`, `preferred_language`, `topic`, `service_interest`, `message`, `consent_followup`, `status`.
- Mapping note: Tally dropdown fields can return selected option IDs. The known audit/sprint `Budget range` option ID `81fbff34-ab1f-4d46-b625-18af6ec9c957` is now mapped in `notes (V)` to the visible text `1001 - 3000 USD`; unknown values remain unchanged.
- A duplicate Google Sheets module remains on the canvas, but it is blocked by the filter `Stop duplicate Google Sheets module`, so it does not create a second row.
- Tally webhooks connected and enabled for:
  - `AI Workflow Audit / Sprint Inquiry` — `https://tally.so/r/lbKdrk`
  - `AI Starter Workshop Registration` — `https://tally.so/r/J9XApR`
  - `AI Webinar Registration / Waitlist` — `https://tally.so/r/aQKYeb`
- Scenario created and activated: `AIAdoptor Sheets to Brevo Sync`.
- `AIAdoptor Sheets to Brevo Sync` runs every 15 minutes:
  `Google Sheets - Watch New Rows` -> `HTTP - Make a request`.
- Successful Brevo sync test passed at `2026-05-10 19:51:54 Europe/Vienna`: Make history status `Success`, 3 operations, 2.7 KB data transfer.
- Internal notification email added through Brevo transactional email API to `aiadoptor@gmail.com`.
- Brevo list assignment router added:
  - audit/sprint route to Brevo list ID `7`
  - webinar route to Brevo list ID `6`
  - workshop route to Brevo list ID `5`
  - review route to Brevo list ID `4`
- Brevo transactional confirmation emails added:
  - workshop confirmation after the workshop route.
  - webinar / waitlist confirmation after the webinar route.
- Confirmation email delivery verified in Gmail on `2026-05-10 22:33 Europe/Vienna` for both plus-address test recipients.
- Live Zoom details verified in Gmail on `2026-05-11` for fresh workshop and webinar plus-address test recipients.
- Fresh Google Sheets route test passed on `2026-05-10 21:33-21:34 Europe/Vienna`.
- Newsletter opt-in route added and verified on `2026-05-11`: `consent_newsletter (Q) = TRUE` or workshop fallback `topic (M) = TRUE` -> Brevo list ID `8`.
- Fresh public Tally opt-in test passed at `2026-05-11 11:09:55-11:09:58 Europe/Vienna`; Make HTTP module `13` posted to Brevo list ID `8` and returned status `201`.
- Remaining Make subtasks: clean up the workshop newsletter checkbox mapping into `consent_newsletter (Q)`.
- The `Phone / WhatsApp` field issue is resolved for the audit/sprint form: it now accepts the international test value `+436606061110`.

Minimum scenario:

```text
Tally: Watch New Responses
-> Google Sheets: Add a Row
-> Brevo: Create or Update Contact
-> Brevo: Add Contact to List
-> Email/Gmail: Send internal notification to aiadoptor@gmail.com
```

Recommended routers in Make:

```text
If form_type = review
  -> Brevo list: Review Requests

If form_type = workshop
  -> Brevo list: Workshop Registrants

If form_type = webinar
  -> Brevo list: Webinar Registrants

If form_type = audit_sprint
  -> Brevo list: Audit Sprint Leads
```

Testing:

1. Submit one test response in each Tally form.
2. Check that a row appears in Google Sheets.
3. Check that contact appears in Brevo.
4. Check that the correct Brevo list is assigned.
5. Check that internal notification arrives.
6. Check that duplicate email updates the existing contact, not creates chaos.

Important implementation choice:

- If Tally already writes directly to Google Sheets, do not also add the same row through Make unless you intentionally want a second table.
- Cleanest version: use Make as the main router and let Make write to Sheets + Brevo.
- Simplest version: Tally writes to Sheets directly; Make only syncs to Brevo and sends internal notifications.

## Этап 6. Zoom setup

Status on 2026-05-10:

- Zoom Meeting created:
  - `AI for Life & Work in Austria`
  - `15 May 2026, 18:00 Europe/Vienna`
  - `https://us06web.zoom.us/j/82657817294?pwd=gIHhx7i3Fsrm9pVbQhnnlpMhtD8kd2.1`
  - Meeting ID `826 5781 7294`, passcode `930990`.
- The live Zoom details are now included in the Make/Brevo confirmation emails for workshop and webinar.

First version:

1. Use Zoom Meeting, not Zoom Webinar.
2. Calendly creates Zoom links for 20-minute reviews.
3. For webinar/workshop, create a Zoom Meeting manually.
4. Put the Zoom join link in Brevo confirmation/reminder emails.
5. Registration happens through Tally, not Zoom.

Advanced version later:

1. Buy/use Zoom Webinars add-on.
2. Create webinar in Zoom with registration enabled.
3. Sync Zoom registrants to Brevo / Google Sheets through Make or export.
4. Use Zoom registration reports after the event.

## Этап 7. Update website

Status on 2026-05-10:

- CTA links checked in all language entry pages:
  - review buttons point to Calendly.
  - workshop buttons point to Tally workshop form.
  - audit/sprint offer buttons point to Tally audit/sprint form.
- Privacy Policy page added at `/privacy/` with English, German, Russian and Ukrainian sections.
- Footer privacy links added to all landing page languages and to the presentation card.
- Sitemap updated with `/privacy/`.

After receiving live links, update:

1. Hero CTA `Book Free 20-Min AI Workflow Review` -> Calendly link.
2. Hero CTA `Join AI Starter Workshop` -> Tally workshop form.
3. Offer card `Join workshop` -> Tally workshop form.
4. Offer card `Book audit` -> Tally audit/sprint form or Calendly.
5. Offer card `Discuss sprint` -> Tally audit/sprint form or Calendly.
6. Final booking form:
   - Option A: replace current mailto form with embedded Tally form.
   - Option B: replace it with a clean CTA button to Calendly and Tally.
7. Add privacy policy link and consent language before collecting leads.

What Codex needs from the user:

```text
Calendly booking URL
Tally workshop URL
Tally webinar URL
Tally audit/sprint URL, if created
Brevo list names or IDs, if Make automation is implemented
Zoom meeting/webinar URL for the first event
Preferred final behavior: embedded form or external form links
```

Current active URLs:

```text
Calendly booking URL: https://calendly.com/aiadoptor/free-20-min-ai-workflow-review
Tally workshop URL: https://tally.so/r/J9XApR
Tally webinar URL: https://tally.so/r/aQKYeb
Tally audit/sprint URL: https://tally.so/r/lbKdrk
```

## Recommended launch order

1. Calendly + Zoom for 20-minute reviews.
2. Tally workshop/webinar forms.
3. Google Sheets CRM sync.
4. Replace CTA links on the website.
5. Brevo lists and confirmation templates.
6. Make automation.
7. Privacy policy page and consent polish.
8. Final test with real email addresses.

This sequence keeps the landing operational quickly and avoids overbuilding before the first leads arrive.
