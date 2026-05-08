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

### 4. Automation glue

Use Make for:

- Tally submission -> Google Sheets row
- Tally submission -> Brevo contact
- Tally submission -> internal email notification
- Workshop/webinar registration -> confirmation email
- Optional Zoom/Calendly event data sync

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

Replace the current static `mailto` form with one of these:

1. Embedded Tally form inside the booking section.
2. Direct CTA links to Tally and Calendly.
3. A custom endpoint via Formspree, Basin, Netlify Forms or a small serverless function.

Recommended first implementation:

- Main CTA: Calendly booking link
- Workshop CTA: Tally workshop form
- Contact form: Tally embedded form synced to Google Sheets and Brevo

## Data privacy notes

Add a privacy policy before collecting personal data.
Add explicit consent for email follow-up and newsletter-style communication.
Use double opt-in in Brevo for marketing emails when possible.
