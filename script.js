// ==========================================================================
// CYBERSECURITY CAREER PORTFOLIO - JAVASCRIPT LOGIC
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initTheme();
  initFooterYear();
  initProjectFilters();
  initPgpCopy();
  initScrollSpy();
  initContactForm();
  initAsciiEye();
  initThmBadgeHelper();
});

/**
 * Safe LocalStorage Wrappers with Quota / Exception Handling
 */
function safeGetStorage(key) {
  try {
    return localStorage.getItem(key);
  } catch (e) {
    return null;
  }
}

function safeSetStorage(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    // Gracefully handle quota / storage blocked exceptions
  }
}

/**
 * 1. Multilingual Support (English, Spanish, Japanese)
 */
const VALID_LANGUAGES = Object.freeze(['en', 'es', 'ja']);
const DEFAULT_LANG = 'en';

function isValidLanguage(lang) {
  return typeof lang === 'string' && VALID_LANGUAGES.includes(lang);
}

function initLanguage() {
  const langSelect = document.getElementById('languageSelect');
  // Auto-detect saved preference or browser language
  let initialLang = safeGetStorage('portfolio_lang');

  if (!isValidLanguage(initialLang)) {
    const browserLang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
    if (browserLang.startsWith('es')) initialLang = 'es';
    else if (browserLang.startsWith('ja')) initialLang = 'ja';
    else initialLang = 'en';
  }

  if (langSelect) {
    langSelect.value = initialLang;
    applyLanguage(initialLang);

    langSelect.addEventListener('change', (e) => {
      const chosenLang = e.target.value;
      if (isValidLanguage(chosenLang)) {
        safeSetStorage('portfolio_lang', chosenLang);
        applyLanguage(chosenLang);
      }
    });
  }
}

function applyLanguage(lang) {
  if (!isValidLanguage(lang)) {
    lang = DEFAULT_LANG;
  }
  if (typeof translations === 'undefined' || !translations || !Object.prototype.hasOwnProperty.call(translations, lang)) return;

  document.documentElement.setAttribute('lang', lang);

  // Update text and inner HTML for elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (key && Object.prototype.hasOwnProperty.call(translations[lang], key)) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update input placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (key && Object.prototype.hasOwnProperty.call(translations[lang], key)) {
      el.placeholder = translations[lang][key];
    }
  });
}

/**
 * 2. Theme Management (Light / Dark)
 */
const VALID_THEMES = Object.freeze(['light', 'dark']);
const DEFAULT_THEME = 'dark';

function initTheme() {
  const themeToggle = document.getElementById('themeToggle');
  const html = document.documentElement;
  
  // Check localStorage or system preference
  const savedTheme = safeGetStorage('theme');
  let initialTheme = DEFAULT_THEME;

  if (VALID_THEMES.includes(savedTheme)) {
    initialTheme = savedTheme;
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    initialTheme = 'light';
  }

  html.setAttribute('data-theme', initialTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = html.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      html.setAttribute('data-theme', newTheme);
      safeSetStorage('theme', newTheme);
    });
  }
}

/**
 * 3. Dynamic Footer Year
 */
function initFooterYear() {
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/**
 * 4. Project & Community Category Filter
 */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.classList.remove('is-hidden');
        } else {
          card.classList.add('is-hidden');
        }
      });
    });
  });
}

/**
 * 5. PGP Key & Sensitive Data Copy to Clipboard
 */
function initPgpCopy() {
  const copyBtns = document.querySelectorAll('.copy-pgp-btn');
  const toast = document.getElementById('toastNotification');
  let toastTimeout = null;

  copyBtns.forEach(btn => {
    btn.addEventListener('click', async () => {
      const pgpText = btn.getAttribute('data-pgp') || btn.innerText;

      try {
        await navigator.clipboard.writeText(pgpText);
        showToast('PGP Fingerprint copied to clipboard!');
      } catch (err) {
        const textarea = document.createElement('textarea');
        textarea.value = pgpText;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('PGP Fingerprint copied!');
      }
    });
  });

  window.showToast = function(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.remove('hidden');

    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.add('hidden');
    }, 2800);
  };
}

/**
 * 6. ScrollSpy to Highlight Navigation
 */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links .nav-item');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 140;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });
}

/**
 * 7. Interactive Contact Form Handler (Bot-Protected Dispatch)
 */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');
  const submitBtn = document.getElementById('submitBtn');

  if (!form) return;

  // Obfuscated recipient to prevent automated bot scrapers from harvesting plaintext in HTML
  const getRecipient = () => atob('YW5nZWxzY2hhZmVyMjAwMkBnbWFpbC5jb20=');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = (document.getElementById('senderName')?.value || '').trim();
    const email = (document.getElementById('senderEmail')?.value || '').trim();
    const subject = (document.getElementById('messageSubject')?.value || '').trim();
    const message = (document.getElementById('messageBody')?.value || '').trim();

    if (!name || !email || !message) {
      showFeedback('Please fill out all required fields before sending.', 'error');
      return;
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showFeedback('Please enter a valid email address.', 'error');
      return;
    }

    // Sanitize CRLF from single-line headers to prevent email header injection
    const cleanName = name.replace(/[\r\n]+/g, ' ');
    const cleanEmail = email.replace(/[\r\n]+/g, ' ');
    const cleanSubject = subject.replace(/[\r\n]+/g, ' ');

    // Prepare message payload
    const recipient = getRecipient();
    const formattedSubject = `[Portfolio Contact] ${cleanSubject} - from ${cleanName}`;
    const formattedBody = `Name: ${cleanName}\nEmail: ${cleanEmail}\nPurpose: ${cleanSubject}\n\nMessage:\n${message}\n\n---\nSent from puasec portfolio`;

    // Construct URI encoded mailto link
    const mailtoUri = `mailto:${recipient}?subject=${encodeURIComponent(formattedSubject)}&body=${encodeURIComponent(formattedBody)}`;

    // Verify safe mailto scheme
    if (!mailtoUri.startsWith('mailto:')) {
      showFeedback('Invalid dispatch scheme detected.', 'error');
      return;
    }

    // Visual feedback without destroying inner SVG markup
    submitBtn.disabled = true;
    submitBtn.classList.add('loading');
    const btnSpan = submitBtn.querySelector('span');
    if (btnSpan) btnSpan.textContent = 'Opening Mail Client...';

    // Attempt to copy content to clipboard as a helpful fallback for webmail users (Gmail/Outlook web)
    if (navigator.clipboard) {
      navigator.clipboard.writeText(formattedBody).catch(() => {});
    }

    setTimeout(() => {
      // Trigger default email client safely
      window.location.href = mailtoUri;

      showFeedback(
        'Opening your email app with your message pre-filled. If it did not open automatically, message details have also been copied to your clipboard!',
        'success'
      );

      submitBtn.disabled = false;
      submitBtn.classList.remove('loading');
      if (btnSpan) {
        const currentLang = document.documentElement.getAttribute('lang') || 'en';
        btnSpan.textContent = (typeof translations !== 'undefined' && translations[currentLang]?.form_btn_send) || 'Send Message';
      }

      form.reset();
    }, 600);
  });

  function showFeedback(msg, type) {
    if (!feedback) return;
    feedback.textContent = msg;
    feedback.className = `form-feedback ${type}`;
    feedback.classList.remove('hidden');

    setTimeout(() => {
      feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
  }
}

/**
 * 8. Interactive ASCII Eye Cursor Tracker
 */
function initAsciiEye() {
  const eyeElement = document.getElementById('asciiEye');
  const coordsElement = document.getElementById('asciiEyeCoords');
  if (!eyeElement) return;

  const EYE_BG = [
    '             .-------------------.             ',
    '         .--\'                     \'--.         ',
    '      .-\'                             \'-.      ',
    '    .\'                                   \'.    ',
    '   /                                       \\   ',
    '  ;                                         ;  ',
    '  |                                         |  ',
    '  ;                                         ;  ',
    '   \\                                       /   ',
    '    \'.                                   .\'    ',
    '      \'-.                             .-\'      ',
    '         \'--.                     .--\'         ',
    '             \'-------------------\'             '
  ];

  const PUPIL = [
    '   .---.   ',
    '  /  o  \\  ',
    ' | <(@)> | ',
    '  \\  o  /  ',
    '   \'---\'   '
  ];

  const BLINK = [
    '             .-------------------.             ',
    '         .--\'                     \'--.         ',
    '      .-\'                             \'-.      ',
    '    .\'                                   \'.    ',
    '    .-------------------------------------.    ',
    '   /---------------------------------------\\   ',
    '  |=========================================|  ',
    '   \\---------------------------------------/   ',
    '    \'-------------------------------------\'    ',
    '    \'.                                   .\'    ',
    '      \'-.                             .-\'      ',
    '         \'--.                     .--\'         ',
    '             \'-------------------\'             '
  ];

  const CENTER_R = 6;
  const CENTER_C = 23;
  const MAX_COL_OFFSET = 8;
  const MAX_ROW_OFFSET = 2;

  let currentTargetR = CENTER_R;
  let currentTargetC = CENTER_C;
  let isBlinking = false;
  let idleTimer = null;
  let rafPending = false;

  function renderFrame(rCenter, cCenter) {
    if (isBlinking) {
      eyeElement.textContent = BLINK.join('\n');
      return;
    }

    const grid = EYE_BG.map(row => row.split(''));
    const prOffset = Math.floor(PUPIL.length / 2);
    const pcOffset = Math.floor(PUPIL[0].length / 2);

    for (let pr = 0; pr < PUPIL.length; pr++) {
      for (let pc = 0; pc < PUPIL[0].length; pc++) {
        const char = PUPIL[pr][pc];
        if (char !== ' ') {
          const targetR = rCenter - prOffset + pr;
          const targetC = cCenter - pcOffset + pc;
          if (targetR >= 0 && targetR < grid.length && targetC >= 0 && targetC < grid[targetR].length) {
            if (grid[targetR][targetC] === ' ') {
              grid[targetR][targetC] = char;
            }
          }
        }
      }
    }

    eyeElement.textContent = grid.map(row => row.join('')).join('\n');
  }

  // Initial draw at center
  renderFrame(CENTER_R, CENTER_C);

  // Smooth mouse move listener using requestAnimationFrame
  window.addEventListener('mousemove', (e) => {
    if (rafPending) return;
    rafPending = true;

    requestAnimationFrame(() => {
      rafPending = false;
      clearTimeout(idleTimer);

      const rect = eyeElement.getBoundingClientRect();
      const eyeCenterX = rect.left + rect.width / 2;
      const eyeCenterY = rect.top + rect.height / 2;

      const dx = e.clientX - eyeCenterX;
      const dy = e.clientY - eyeCenterY;
      const dist = Math.hypot(dx, dy);
      const maxDist = 550;
      const normDist = Math.min(1, dist / maxDist);
      const angle = Math.atan2(dy, dx);

      const colOffset = Math.round(Math.cos(angle) * MAX_COL_OFFSET * normDist);
      const rowOffset = Math.round(Math.sin(angle) * MAX_ROW_OFFSET * normDist);

      currentTargetR = CENTER_R + rowOffset;
      currentTargetC = CENTER_C + colOffset;

      renderFrame(currentTargetR, currentTargetC);

      if (coordsElement) {
        const normX = (colOffset / MAX_COL_OFFSET).toFixed(2);
        const normY = (rowOffset / MAX_ROW_OFFSET).toFixed(2);
        coordsElement.textContent = `X: ${colOffset >= 0 ? '+' : ''}${normX} • Y: ${rowOffset >= 0 ? '+' : ''}${normY}`;
      }

      idleTimer = setTimeout(() => {
        currentTargetR = CENTER_R;
        currentTargetC = CENTER_C;
        renderFrame(CENTER_R, CENTER_C);
        if (coordsElement) coordsElement.textContent = 'RADAR: IDLE // SCANNING';
      }, 4000);
    });
  }, { passive: true });

  // Natural blinking loop
  function scheduleBlink() {
    const delay = 4000 + Math.random() * 3500;
    setTimeout(() => {
      isBlinking = true;
      renderFrame(currentTargetR, currentTargetC);
      setTimeout(() => {
        isBlinking = false;
        renderFrame(currentTargetR, currentTargetC);
        scheduleBlink();
      }, 130);
    }, delay);
  }

  scheduleBlink();
}

/**
 * 9. TryHackMe Badge Protocol Helper
 * TryHackMe badge embeds require an HTTP/HTTPS origin and display an error card on local file:/// URLs.
 */
function initThmBadgeHelper() {
  if (window.location.protocol === 'file:') {
    const container = document.querySelector('.thm-badge-container');
    if (container && !document.getElementById('thmProtocolNotice')) {
      const notice = document.createElement('div');
      notice.id = 'thmProtocolNotice';
      notice.className = 'thm-protocol-warning';
      notice.textContent = 'ℹ️ Note: TryHackMe restricts automated badge embedding on local file:/// paths for security. Run a local server (python -m http.server 8000) or deploy to Vercel to display live stats.';
      container.appendChild(notice);
    }
  }
}
