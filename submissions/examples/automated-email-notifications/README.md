# Automated Student Email Notifications Simulator

This submission demonstrates the design and interactive simulation of the **Automated Email Notifications to Students for Application Status Updates** feature, styled using the **EaseMotion CSS** animation framework.

---

## 📋 Problem Statement

When a training and placement officer (Admin) updates a student's recruitment status (e.g. shortlists, schedules an interview, or rejects), the student receives no real-time update. The student has to log in repeatedly and manually check the dashboard. 

By integrating **Nodemailer** on the backend, the portal can dynamically dispatch SMTP-based HTML emails to keep students instantly notified of their application status updates.

---

## ⚡ Simulation Features

To present this feature cleanly within a CSS/animations framework context, we built a self-contained interactive dashboard containing:
1. **Placement Officer Panel (Admin View)**: A clean table of student candidates with live status badges. Buttons trigger status modifications and showcase loading states.
2. **Student Email Inbox Simulator (Client View)**: A mock email client receiving push messages. Includes:
   - Real-time unread email count updates.
   - Dual-tone chime alerts synthesized natively via the browser's **Web Audio API**.
   - Stylized responsive HTML email templates styled with proper success (green) or danger (red) themes.
3. **Interactive Code Reference**: Built-in block explaining how Nodemailer is configured on the backend using secure environment variables.

---

## 🎨 EaseMotion CSS Integration

This example showcases how easily **EaseMotion CSS** handles dashboard layouts, states, and micro-animations:

- **Layout Structure**: Utilizes `.ease-card`, `.ease-card-header`, `.ease-card-body`, and `.ease-card-footer` components to define clean dashboard panes.
- **Form Controls & Triggers**: Uses `.ease-btn`, `.ease-btn-success`, and `.ease-btn-danger` with the hover helper `.ease-btn-hover` for interactive admin buttons.
- **Asynchronous Indicators**: Employs `.ease-btn-loading` inside the action buttons during the simulated SMTP connection latency.
- **Animations & Transitions**:
  - `.ease-fade-in` and `.ease-slide-up` are used to animate dashboard items on initial page load.
  - `.ease-slide-in-right` handles the entry of the SMTP status notification toast.
  - `.ease-kf-blur-to-focus` transitions the detail pane when an email is selected.
  - `.email-inbox-counter-ping` triggers a scale-up bounce on the badge when a new email arrives.
- **Design Tokens**: Direct usage of EaseMotion CSS variables like `--ease-color-primary`, `--ease-speed-medium`, `--ease-space-*`, and `--ease-radius-*` to maintain system alignment.

---

## 🔧 Backend Nodemailer Setup

The underlying backend service (`backend/utils/emailService.js`) uses Nodemailer to configure an SMTP connection:

```javascript
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail', // Or custom SMTP details
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

export const sendStatusEmail = async (studentEmail, studentName, jobTitle, company, status) => {
  const isShortlisted = status === 'shortlisted';
  
  const mailOptions = {
    from: `"Placement Portal" <${process.env.EMAIL_USER}>`,
    to: studentEmail,
    subject: `Application Update: ${jobTitle} at ${company}`,
    html: `
      <div style="font-family: sans-serif; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
        <h2>Hello ${studentName},</h2>
        <p>There is an update on your application for <strong>${jobTitle}</strong> at <strong>${company}</strong>.</p>
        <div style="padding: 15px; margin: 15px 0; border-radius: 6px; font-weight: bold; text-align: center; font-size: 18px; 
                    background-color: ${isShortlisted ? '#d1fae5' : '#fee2e2'}; 
                    color: ${isShortlisted ? '#065f46' : '#991b1b'};">
          Status: ${status.toUpperCase()}
        </div>
        ${isShortlisted 
          ? '<p>Congratulations! Please check the dashboard regularly for your online test/interview links and details.</p>'
          : '<p>Thank you for your effort. We encourage you to apply for other matching positions on the portal.</p>'}
        <br/>
        <p>Best Regards,</p>
        <p><strong>Training & Placement Cell</strong></p>
      </div>
    `
  };

  return transporter.sendMail(mailOptions);
};
```

---

## 🚀 How to Run the Demo

1. Simply double-click or open `demo.html` in any web browser.
2. Click **Shortlist** or **Reject** on any of the candidates in the left panel.
3. Observe the loading state, notification banner, chime alert, and unread counter increment.
4. Click on the newly received email inside the Inbox Simulator to view the stylized status letter.
