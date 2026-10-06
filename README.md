# Paula Villegas — Cybersecurity & DFIR Portfolio

A professional, high-performance, and minimalistic portfolio website designed for **Paula Villegas** (`pua.sec`), showcasing specialized SOC experience, Digital Forensics & Incident Response (DFIR) expertise, engineering education, Ekoparty speaking engagements, community leadership, and cybersecurity content creation.

---

## 🌐 Multilingual Support (EN, ES, JA)

The website features client-side internationalization with a dropdown menu located in the **top-left corner of the navigation bar**:
- **English (EN)** — Default international profile
- **Español (ES)** — Native Latin American Spanish
- **日本語 (JA)** — Professional Japanese cybersecurity terminology (JLPT N5 aligned)

Language preferences are automatically persisted in `localStorage` and synchronize dynamically across all sections, timeline items, project cards, filter buttons, and contact form labels without requiring a page reload. All translation keys are modularly managed in [`translations.js`](file:///g:/Projects/Personal-website/translations.js).

---

## 🎨 Theme & Aesthetic

- **Theme Palette**: Modern Deep Obsidian & Violet with dual-tone electric lilac accents (`#a855f7`, `#c084fc`, `#818cf8`).
- **Typography**: `Inter` for crisp body presentation and `JetBrains Mono` for cybersecurity/technical data points.
- **Theme Modes**: Built-in Dark Mode (default) and Light Mode (crisp lilac & slate) toggle with `localStorage` memory and OS system preference sync.

---

## 📂 Content Architecture

### 1. Section 01: "About Me" (`#about`)
- **Professional Narrative**: 3.5+ years of international SOC experience, Human-AI collaboration, and DFIR passion.
- **Academic Credentials**: Computer Engineering (GPA 3.7 &bull; 18 subjects passed) and Programmer Analyst intermediate degree at Universidad Nacional Arturo Jauretche (UNAJ).
- **Languages**: Native Spanish, Advanced English (B2), Basic Japanese (JLPT N5).
- **Technical Arsenal**:
  - SIEM / SOAR (Splunk, OSSIM, FortiSIEM, Cortex)
  - EDR / XDR (Cortex XDR, Microsoft Defender, Trend Micro)
  - DFIR & OSINT (Nessus, Maltego, Network traffic analysis)
  - Dev & Databases (Python, SQL, NoSQL, Java, C#, JavaScript)
- **Career Trajectory Timeline**:
  - **Cybersecurity Analyst** at CYBER42 (Oct 2025 – Present)
  - **Security Delivery Associate** at Accenture AR Global (Jan 2024 – Oct 2025)
  - **Cybersecurity Analyst (CSIRT)** at Ministry of Security of Argentine Nation (Jun 2023 – Jan 2024)
- **Verified Certifications**:
  - Blue Team Level 1 (BTL1) &bull; Security Blue Team
  - Cortex XDR: Features &bull; Palo Alto Networks
  - Investigation Theory &bull; Applied Network Defense
  - Networking Basics &bull; Cisco Networking Academy
  - FCF & FCA Certifications &bull; Fortinet Training Institute
  - Microsoft Learn &bull; Verified Profile Badges &amp; Modules ([Achievements](https://learn.microsoft.com/es-es/users/paulavillegas-3482/achievements#badges-section))

### 2. Section 02: "Technical Projects" (`#projects`)
- **Public GitHub Showcase**: Direct link to Paula's open-source repositories and security tooling at [github.com/PuaBlue](https://github.com/PuaBlue).
- **Featured Technical Highlights**:
  - **Human-AI Collaboration in SOC Incident Response**: Applied AI agent workflows in live SOC environments for accelerated triage and IOC extraction while preserving forensic integrity.
  - **Multi-Platform SIEM Alert Correlation & Threat Intel**: Cross-platform detection and correlation pipelines across Splunk SIEM, Splunk SOAR, FortiSIEM, and OSSIM.
  - **Programmer Analyst Foundations & Automation**: Defensive scripts, automation tools, and investigative utilities built with Python, Java, C#, and SQL/NoSQL databases.

### 3. Section 03: "Community & Initiatives" (`#community`)
- **Featured Community Highlights**:
  - **Ekoparty 2025 Speaker**: *"Press Play: Level One of the Professional World"* ([LinkedIn Post](https://www.linkedin.com/feed/update/urn:li:activity:7388341030212845568/)) featuring official conference photo.
  - **Bug Bounty Girls Club & Women Hacks Panel**: Active volunteer; participating in the **Women Hacks panel at Ekoparty 2026** representing the club, alongside mentoring via the BlueOps Girls initiative ([Official Site](https://bugbountygirlsclub.com) &bull; [Panel Announcement](https://lnkd.in/p/dBmYWEFE)).
  - **SteamGirls Community**: Active member empowering women in STEAM and cybersecurity with Ekoparty collaboration ([SteamGirls Post](https://www.linkedin.com/posts/steam-girls_steamgirs-ekoparty-ciberseguridad-activity-7512514166461603840-HRvJ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADTnCesBZ3woyqNZpo2OZoYNKh3xgOTPno8)).
  - **Cybersecurity Content Creation (@pua.blue)**: Creator of [@pua.blue](https://www.instagram.com/pua.blue/) on Instagram sharing blue teaming, SOC operations, DFIR fundamentals, and mentoring newcomers.

### 4. Section 04: "Contact & Communications" (`#contact`)
- **Verified Channels**:
  - GitHub: [github.com/PuaBlue](https://github.com/PuaBlue)
  - Microsoft Learn: [paulavillegas-3482 Badges & Achievements](https://learn.microsoft.com/es-es/users/paulavillegas-3482/achievements#badges-section)
  - LinkedIn: [linkedin.com/in/puasec/](https://www.linkedin.com/in/puasec/)
  - Instagram: [@pua.blue](https://www.instagram.com/pua.blue/)
- **Anti-Scraping Interactive Form**: User inquiries route directly to Paula's inbox with recipient obfuscation in the static markup, protecting her personal email against malicious crawler harvesting.

---

## 🛡️ Security Audit & Hardening Summary

This portfolio has undergone comprehensive static site security review and hardening:
1. **Reverse Tabnabbing Protection**: All external links (`target="_blank"`) strictly enforce `rel="noopener noreferrer"`.
2. **Strict Content Security Policy (CSP)**: `default-src 'self'` with zero `'unsafe-inline'` styles or scripts, zero `'unsafe-eval'`, and `object-src 'none'`.
3. **DOM Injection & XSS Defense**: Dynamic JavaScript features utilize safe DOM APIs (`textContent`, `setAttribute`, CSS classes instead of inline style mutations) and frozen translation dictionaries to eliminate prototype tampering.
4. **Email & Header Injection Mitigation**: Contact form inputs sanitize CRLF sequences (`\r`, `\n`) before `mailto:` link generation; personal email address is protected against automated crawler harvesting.
5. **Cross-Origin Isolation**: Configured `Cross-Origin-Opener-Policy: same-origin` and `Cross-Origin-Resource-Policy: same-origin`.
6. **RFC 9116 Compliant Vulnerability Disclosure**: Public security contact file published at `/.well-known/security.txt`.
7. **Deployment Hardening**: `.vercelignore` blocks internal documentation, configuration, and repository metadata from public static web exposure.
8. **Hardened HTTP Security Headers**: Pre-configured in `vercel.json` (Vercel) and `_headers` (Cloudflare Pages / Netlify) enforcing:
   - `Content-Security-Policy (CSP)`
   - `Strict-Transport-Security (HSTS)`
   - `X-Frame-Options: DENY` (Anti-Clickjacking)
   - `X-Content-Type-Options: nosniff` (Anti-MIME Sniffing)
   - `Referrer-Policy: strict-origin-when-cross-origin`
   - `Permissions-Policy` (Disabling camera, microphone, geolocation, payment, sensors)

---

## 🚀 Local Run & Deployment

### Run Locally
```powershell
python -m http.server 8000
```
Open `http://localhost:8000` in your browser.

### Deploy
- **Cloudflare Pages / Netlify / Vercel**: Connect the repository for instant, zero-build deployment. The included `_headers` and `vercel.json` files apply the production security headers automatically.
- **GitHub Pages**: Push to repository and enable GitHub Pages under settings.
