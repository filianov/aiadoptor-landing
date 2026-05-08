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
