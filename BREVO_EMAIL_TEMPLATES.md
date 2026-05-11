# AIAdoptor Brevo Email Templates

Status: workshop and webinar confirmation copy is connected in Make through Brevo transactional API. Delivery to Gmail plus-address test recipients was verified on 2026-05-10 at 22:33 Europe/Vienna. The live Zoom details were added to the Make confirmation emails on 2026-05-10 and re-tested on 2026-05-11 with fresh workshop/webinar rows. HTML versions remain draft copy for future Brevo template editor setup.
Sender: `AIAdoptor Studio <aiadoptor@gmail.com>`

## Live Zoom Setup

Event:

```text
AI for Life & Work in Austria
```

Date and time:

```text
15 May 2026, 18:00 Europe/Vienna
```

Zoom:

```text
https://us06web.zoom.us/j/82657817294?pwd=gIHhx7i3Fsrm9pVbQhnnlpMhtD8kd2.1
Meeting ID: 826 5781 7294
Passcode: 930990
```

## Workshop Registration Confirmation

Subject:

```text
Your AIAdoptor workshop registration is received
```

Plain text:

```text
Hi {{ contact.FIRSTNAME | default: "there" }},

Your AIAdoptor workshop registration is confirmed.

AI for Life & Work in Austria
15 May 2026, 18:00 Europe/Vienna
Zoom: https://us06web.zoom.us/j/82657817294?pwd=gIHhx7i3Fsrm9pVbQhnnlpMhtD8kd2.1
Meeting ID: 826 5781 7294
Passcode: 930990

Best regards,
Pavel
AIAdoptor Studio
Vienna
```

HTML:

```html
<p>Hi {{ contact.FIRSTNAME | default: "there" }},</p>
<p>Your AIAdoptor workshop registration is confirmed.</p>
<p><strong>AI for Life & Work in Austria</strong><br>15 May 2026, 18:00 Europe/Vienna</p>
<p>Zoom: <a href="https://us06web.zoom.us/j/82657817294?pwd=gIHhx7i3Fsrm9pVbQhnnlpMhtD8kd2.1">Join Zoom meeting</a><br>Meeting ID: 826 5781 7294<br>Passcode: 930990</p>
<p>Best regards,<br>Pavel<br>AIAdoptor Studio<br>Vienna</p>
```

## Webinar Registration Confirmation

Subject:

```text
Your AIAdoptor webinar registration is received
```

Plain text:

```text
Hi {{ contact.FIRSTNAME | default: "there" }},

Your AIAdoptor webinar / waitlist registration is confirmed.

AI for Life & Work in Austria
15 May 2026, 18:00 Europe/Vienna
Zoom: https://us06web.zoom.us/j/82657817294?pwd=gIHhx7i3Fsrm9pVbQhnnlpMhtD8kd2.1
Meeting ID: 826 5781 7294
Passcode: 930990

Best regards,
Pavel
AIAdoptor Studio
Vienna
```

HTML:

```html
<p>Hi {{ contact.FIRSTNAME | default: "there" }},</p>
<p>Your AIAdoptor webinar / waitlist registration is confirmed.</p>
<p><strong>AI for Life & Work in Austria</strong><br>15 May 2026, 18:00 Europe/Vienna</p>
<p>Zoom: <a href="https://us06web.zoom.us/j/82657817294?pwd=gIHhx7i3Fsrm9pVbQhnnlpMhtD8kd2.1">Join Zoom meeting</a><br>Meeting ID: 826 5781 7294<br>Passcode: 930990</p>
<p>Best regards,<br>Pavel<br>AIAdoptor Studio<br>Vienna</p>
```

## Scheduled Reminder And Follow-up Campaigns

Status: created as Brevo scheduled email campaigns on 2026-05-11. Audience for all three campaigns is:

- `AIAdoptor - Workshop Registrants` — ID `5`
- `AIAdoptor - Webinar Registrants` — ID `6`

### 24-hour reminder

Campaign: `AIAdoptor Workshop Webinar Reminder 24h - 15 May 2026`

Scheduled send: `14 May 2026, 18:00 Europe/Vienna`

Subject:

```text
Reminder AI for Life and Work in Austria is tomorrow
```

Plain text:

```text
Hi,

Reminder: AI for Life and Work in Austria starts tomorrow.

15 May 2026, 18:00 Europe/Vienna.
Zoom: https://us06web.zoom.us/j/82657817294?pwd=gIHhx7i3Fsrm9pVbQhnnlpMhtD8kd2.1
Meeting ID: 826 5781 7294
Passcode: 930990

See you there,
Pavlo
AIAdoptor Studio
```

### 1-hour reminder

Campaign: `AIAdoptor Workshop Webinar Reminder 1h - 15 May 2026`

Scheduled send: `15 May 2026, 17:00 Europe/Vienna`

Subject:

```text
Starting in 1 hour AI for Life and Work in Austria
```

Plain text:

```text
Hi,

We start in 1 hour.

AI for Life and Work in Austria
Today, 15 May 2026, 18:00 Europe/Vienna.
Zoom: https://us06web.zoom.us/j/82657817294?pwd=gIHhx7i3Fsrm9pVbQhnnlpMhtD8kd2.1
Meeting ID: 826 5781 7294
Passcode: 930990

See you soon,
Pavlo
AIAdoptor Studio
```

### Post-event follow-up

Campaign: `AIAdoptor Workshop Webinar Follow-up - 16 May 2026`

Scheduled send: `16 May 2026, 10:00 Europe/Vienna`

Subject:

```text
Thank you for joining AI for Life and Work in Austria
```

Plain text:

```text
Hi,

Thank you for registering for AI for Life and Work in Austria.

I hope the session helped you see where practical AI workflows can save time in your work, documents, emails, German learning, job search or small business operations.

Book a free 20 minute AI Workflow Review:
https://calendly.com/aiadoptor/free-20-min-ai-workflow-review

You can also reply with one routine task you want to automate first.

Best regards,
Pavlo
AIAdoptor Studio
```

## Previous Reminder Draft

```text
Reminder: AIAdoptor session starts tomorrow

Hi {{ contact.FIRSTNAME | default: "there" }},

This is a quick reminder about the upcoming AIAdoptor session.

Event:
AI for Life & Work in Austria

Zoom:
https://us06web.zoom.us/j/82657817294?pwd=gIHhx7i3Fsrm9pVbQhnnlpMhtD8kd2.1

See you soon,
Pavel
AIAdoptor Studio
```
