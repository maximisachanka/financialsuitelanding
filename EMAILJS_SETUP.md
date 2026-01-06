# EmailJS Setup Instructions

## Overview
This project uses EmailJS to send form submissions from:
- **HomePage** (Demo Request Form)
- **PartnerPage** (Partner Contact Form)
- **Footer** (Partner CTA Form)

All forms send emails to: **prodbykarlmann@gmail.com**

## Setup Steps

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Add Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Connect your email account
5. Copy the **Service ID** - you'll need this later

### 3. Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. **IMPORTANT**: In template settings, set **"To Email"** to: `prodbykarlmann@gmail.com`
4. Use this template structure:

**Subject:**
```
🔔 New {{form_type}} from FinancialSuite
```

**Body:**
```
You have received a new {{form_type}} from FinancialSuite website.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 CONTACT INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 Name: {{from_name}}
📧 Email: {{from_email}}
🏢 Company: {{company}}
📱 Phone: {{phone}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💬 MESSAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📌 REQUEST TYPE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Form Type: {{form_type}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This message was sent automatically from the FinancialSuite contact form.
Please respond to {{from_email}} to continue the conversation.
```

5. Copy the **Template ID** - you'll need this later

### 4. Get Public Key
1. Go to **Account** > **API Keys**
2. Copy your **Public Key**

### 5. Configure Environment Variables
1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your values:
   ```
   REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
   REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
   REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```

3. **Important**: Add `.env` to `.gitignore` (already done if using create-react-app)

### 6. Restart Development Server
```bash
npm start
```

## Template Variables Used

The forms send these variables to EmailJS:

### Demo Form (HomePage)
- `to_email`: prodbykarlmann@gmail.com
- `from_name`: User's name
- `from_email`: User's email
- `company`: User's company
- `form_type`: "Demo Request"
- `message`: Auto-generated message

### Partner Form (PartnerPage)
- `to_email`: prodbykarlmann@gmail.com
- `from_name`: User's name
- `from_email`: User's email
- `company`: User's company
- `phone`: User's phone (optional)
- `message`: User's message
- `form_type`: "Partner Request"

### Footer Form
- Same as Partner Form

## Testing

1. Fill out any form on the website
2. Click submit
3. Check the email inbox at prodbykarlmann@gmail.com
4. You should receive an email with all the form data formatted nicely

## Troubleshooting

### Forms not sending?
- Check browser console for errors
- Verify environment variables are set correctly
- Make sure you restarted the dev server after adding .env
- Check EmailJS dashboard for usage limits (free tier has limits)

### Wrong recipient email?
- Update `to_email` in `src/services/emailService.ts`

### Want to change email format?
- Edit the template in EmailJS dashboard
- Template variables are defined in `emailService.ts`

## Free Tier Limits
- 200 emails/month
- If you need more, upgrade to a paid plan at EmailJS

## Support
For EmailJS support, visit: https://www.emailjs.com/docs/
