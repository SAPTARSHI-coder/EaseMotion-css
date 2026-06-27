const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

// Read contributor list
const contributorsPath = 'C:/Users/SAPTARSHI SADHU/.gemini/antigravity/brain/20b4d745-b0b5-4d75-99ec-c1d4060aa83f/scratch/contributors_emails.json';
const contributors = JSON.parse(fs.readFileSync(contributorsPath, 'utf8'));

console.log(`Total contributors to email: ${contributors.length}`);

// Email content
const emailSubject = '🚀 EaseMotion CSS: React & SCSS Integration — New Issues Available! [GSSoC-26]';

const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { font-family: 'Segoe UI', system-ui, -apple-system, sans-serif; background: #0f0b1f; color: #f3f1f7; margin: 0; padding: 0; }
    .container { max-width: 640px; margin: 0 auto; padding: 40px 24px; }
    .header { text-align: center; margin-bottom: 40px; }
    .badge { display: inline-block; background: linear-gradient(135deg, #7c3aed, #d946ef); color: white; padding: 6px 16px; border-radius: 999px; font-size: 13px; font-weight: 600; margin-bottom: 16px; }
    h1 { font-size: 28px; margin: 8px 0; color: #f3f1f7; }
    h1 span { background: linear-gradient(135deg, #7c3aed, #d946ef); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    .card { background: rgba(255,255,255,0.05); border: 1px solid rgba(168,85,247,0.2); border-radius: 16px; padding: 24px; margin: 20px 0; }
    .card h3 { color: #a855f7; margin: 0 0 8px 0; font-size: 18px; }
    .card p { color: #a39cb4; margin: 0; line-height: 1.6; }
    .issue-row { display: flex; align-items: center; padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.07); color: #f3f1f7; font-size: 14px; }
    .level { display: inline-block; padding: 2px 8px; border-radius: 999px; font-size: 11px; font-weight: 600; margin-left: 8px; white-space: nowrap; }
    .beginner { background: rgba(34,197,94,0.2); color: #22c55e; }
    .intermediate { background: rgba(234,179,8,0.2); color: #eab308; }
    .advanced { background: rgba(239,68,68,0.2); color: #ef4444; }
    .btn { display: inline-block; background: linear-gradient(135deg, #7c3aed, #d946ef); color: white; text-decoration: none; padding: 14px 28px; border-radius: 10px; font-weight: 700; font-size: 16px; margin: 24px 0; }
    .footer { text-align: center; color: #6b6280; font-size: 12px; margin-top: 40px; }
    a { color: #a855f7; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="badge">📢 GSSoC-26 Announcement</div>
      <h1>EaseMotion CSS <span>React & SCSS</span><br>Integration Initiative</h1>
      <p style="color:#a39cb4; font-size:15px; margin-top:8px;">Big news from the EaseMotion CSS team 🎉</p>
    </div>

    <div class="card">
      <h3>⚛️ React Integration is here!</h3>
      <p>We've bootstrapped a complete <strong>React + Vite showcase</strong> at <code>examples/react-vite/</code> with an <code>Animate</code> wrapper component that makes using EaseMotion CSS in React effortless. We're now opening <strong>100+ new issues</strong> for contributors to build React components, hooks, Next.js templates, and more.</p>
    </div>

    <div class="card">
      <h3>💅 SCSS Modularization Tracks</h3>
      <p>The SCSS architecture at <code>scss/</code> is being expanded into a fully modular, token-driven system. We now have <strong>100+ SCSS issues</strong> covering component partials, design token maps, mixin libraries, and CI/CD improvements — from beginner to advanced level.</p>
    </div>

    <div class="card">
      <h3>🔥 200 New GSSoC-26 Issues — Grab Yours!</h3>
      <p>Issues are labeled with:</p>
      <div style="margin-top:12px">
        <span class="level beginner">level:beginner</span>
        <span class="level intermediate" style="margin-left:6px">level:intermediate</span>
        <span class="level advanced" style="margin-left:6px">level:advanced</span>
      </div>
      <p style="margin-top:12px">All new issues are tagged <code>react</code> or <code>scss</code> + <code>GSSoC-26</code> for easy discovery.</p>
    </div>

    <div style="text-align:center">
      <a href="https://github.com/SAPTARSHI-coder/EaseMotion-css/issues?q=is:open+label:react+label:GSSoC-26" class="btn">Browse React Issues →</a><br>
      <a href="https://github.com/SAPTARSHI-coder/EaseMotion-css/issues?q=is:open+label:scss+label:GSSoC-26" class="btn" style="margin-top:12px;">Browse SCSS Issues →</a>
    </div>

    <div class="card">
      <h3>📋 Quick Start</h3>
      <p>1. Find an open issue you'd like to work on.<br>
         2. Comment <strong>"I'd like to work on this"</strong> to get it assigned.<br>
         3. Fork → Branch → Code → PR.<br>
         4. Make sure your submission passes all CI checks.<br><br>
         Questions? Join our <a href="https://discord.gg/hWSdGrccBU">Discord community</a> or post on the issue thread.</p>
    </div>

    <div class="footer">
      <p>You're receiving this email because you have contributed to <a href="https://github.com/SAPTARSHI-coder/EaseMotion-css">EaseMotion CSS</a>.<br>
      This is a no-reply notification email sent from the EaseMotion CSS maintainer team.</p>
    </div>
  </div>
</body>
</html>
`;

const emailText = `
EaseMotion CSS — React & SCSS Integration Initiative (GSSoC-26)
===============================================================

Big news from the EaseMotion CSS team!

⚛️ React Integration is here!
We've bootstrapped a complete React + Vite showcase at examples/react-vite/ with an Animate wrapper component.
We're opening 100+ new issues for React components, hooks, Next.js templates, and more!

💅 SCSS Modularization tracks
The SCSS architecture is being expanded into a modular token-driven system with 100+ new issues covering component partials, design token maps, and mixin libraries.

🔥 200 New GSSoC-26 Issues — Grab Yours!
Browse React Issues: https://github.com/SAPTARSHI-coder/EaseMotion-css/issues?q=is:open+label:react+label:GSSoC-26
Browse SCSS Issues:  https://github.com/SAPTARSHI-coder/EaseMotion-css/issues?q=is:open+label:scss+label:GSSoC-26

Issues are labeled level:beginner, level:intermediate, or level:advanced.

Quick Start:
1. Find an open issue you'd like to work on.
2. Comment "I'd like to work on this" to get it assigned.
3. Fork → Branch → Code → PR.
4. Make sure your submission passes all CI checks.

Join Discord: https://discord.gg/hWSdGrccBU
`;

async function sendEmails() {
  // Using Nodemailer with Gmail
  // Requires Gmail App Password set via env or hardcoded
  const gmailUser = process.env.GMAIL_USER || 'saptarshisadhuofficial@gmail.com';
  const gmailPass = process.env.GMAIL_PASS || '';
  
  if (!gmailPass) {
    console.error('❌ No GMAIL_PASS env var set. Cannot send emails.');
    console.log('\nTo send emails, run:');
    console.log('  $env:GMAIL_PASS="your-gmail-app-password"; node send_contributor_emails.js');
    console.log('\nAlternatively, copy the BCC list from:');
    console.log('  C:/Users/SAPTARSHI SADHU/.gemini/antigravity/brain/20b4d745-b0b5-4d75-99ec-c1d4060aa83f/scratch/contributors_bcc.txt');
    console.log('And paste it into your email client manually.');
    
    // Still output some useful info
    console.log(`\n📊 Email Stats:`);
    console.log(`  Total recipients: ${contributors.length}`);
    console.log(`  Subject: ${emailSubject}`);
    return;
  }
  
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: gmailUser, pass: gmailPass }
  });
  
  let sent = 0;
  let failed = 0;
  
  // Send in batches of 50 to avoid rate limits
  const BATCH_SIZE = 50;
  for (let i = 0; i < contributors.length; i += BATCH_SIZE) {
    const batch = contributors.slice(i, i + BATCH_SIZE);
    const bccList = batch.map(c => `${c.name} <${c.email}>`).join(', ');
    
    try {
      await transporter.sendMail({
        from: `EaseMotion CSS Team <${gmailUser}>`,
        bcc: bccList,
        subject: emailSubject,
        text: emailText,
        html: emailHtml
      });
      sent += batch.length;
      console.log(`✅ Batch ${Math.floor(i/BATCH_SIZE)+1}: Sent to ${batch.length} recipients (total: ${sent})`);
    } catch (err) {
      failed += batch.length;
      console.error(`❌ Batch ${Math.floor(i/BATCH_SIZE)+1} failed: ${err.message}`);
    }
    
    // Wait 2 seconds between batches
    await new Promise(r => setTimeout(r, 2000));
  }
  
  console.log(`\n=== Email Campaign Complete ===`);
  console.log(`Sent: ${sent} | Failed: ${failed}`);
}

sendEmails().catch(console.error);
