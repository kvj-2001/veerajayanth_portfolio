# EmailJS Setup Instructions

Your contact form is now ready to send real emails! Follow these simple steps to configure EmailJS:

## Step 1: Create EmailJS Account
1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a FREE account (200 emails/month)
3. Verify your email address

## Step 2: Add Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** (since you're using veerajayanth07@gmail.com)
4. Click **Connect Account** and authorize your Gmail
5. Copy the **Service ID** (something like `service_xxxxxxx`)

## Step 3: Create Email Template
1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template content:

```
From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}
```

4. Set the template name/ID (example: `template_xxxxxxx`)
5. In **Settings**, set:
   - **To Email**: veerajayanth07@gmail.com
   - **Subject**: New Portfolio Contact: {{subject}}
6. Save the template and copy the **Template ID**

## Step 4: Get Public Key
1. Go to **Account** → **General**
2. Find your **Public Key** (looks like: `xxxxxxxxx`)

## Step 5: Update Your Code
Open `src/components/Contact.jsx` and replace these lines (around line 51-53):

```javascript
const serviceID = 'YOUR_SERVICE_ID';      // Replace with your Service ID
const templateID = 'YOUR_TEMPLATE_ID';    // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY';      // Replace with your Public Key
```

With your actual values:
```javascript
const serviceID = 'service_abc123';       // Your actual Service ID
const templateID = 'template_xyz789';     // Your actual Template ID
const publicKey = 'your_public_key_here'; // Your actual Public Key
```

## Step 6: Test It!
1. Start your development server: `npm start`
2. Fill out the contact form
3. Click "Send Message"
4. Check your email at veerajayanth07@gmail.com

## 🎉 Done!
You'll now receive emails from your portfolio contact form!

## Troubleshooting
- **Not receiving emails?** Check EmailJS dashboard logs
- **Error 403?** Verify your Public Key is correct
- **Service not found?** Double-check Service ID and Template ID
- **Still issues?** Visit [EmailJS Documentation](https://www.emailjs.com/docs/)

## Email Format You'll Receive
```
From: [Visitor Name]
Email: [visitor@email.com]
Subject: [Their Subject]

Message:
[Their message content]
```

---
**Note**: Keep your EmailJS credentials private. Don't commit them to public repositories!
