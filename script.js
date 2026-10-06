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
});

/**
 * 1. Multilingual Support (English, Spanish, Japanese)
 */
function initLanguage() {
  const langSelect = document.getElementById('languageSelect');
  // Auto-detect saved preference or browser language
  let initialLang = localStorage.getItem('portfolio_lang');

  if (!initialLang) {
    const browserLang = navigator.language || navigator.userLanguage || 'en';
    if (browserLang.startsWith('es')) initialLang = 'es';
    else if (browserLang.startsWith('ja')) initialLang = 'ja';
    else initialLang = 'en';
  }

  if (langSelect) {
    langSelect.value = initialLang;
    applyLanguage(initialLang);

    langSelect.addEventListener('change', (e) => {
      const chosenLang = e.target.value;
      localStorage.setItem('portfolio_lang', chosenLang);
      applyLanguage(chosenLang);
    });
  }
}

function applyLanguage(lang) {
  if (typeof translations === 'undefined' || !translations[lang]) return;

  document.documentElement.setAttribute('lang', lang);

  // Update text and inner HTML for elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update input placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key] !== undefined) {
      el.placeholder = translations[lang][key];
    }
  });
}

/**
 * 2. Theme Management (Light / Dark)
 */
function initTheme() {
  const themeToggle = document.getElementById('themeToggle');
  const html = document.documentElement;
  
  // Check localStorage or system preference
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
  html.setAttribute('data-theme', initialTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = html.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      html.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
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
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
          card.style.opacity = '0';
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
  // Base64 decodes to: angelschafer2002@gmail.com
  const getRecipient = () => atob('YW5nZWxzY2hhZmVyMjAwMkBnbWFpbC5jb20=');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('senderName')?.value.trim();
    const email = document.getElementById('senderEmail')?.value.trim();
    const subject = document.getElementById('messageSubject')?.value.trim();
    const message = document.getElementById('messageBody')?.value.trim();

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

    // Prepare message payload
    const recipient = getRecipient();
    const formattedSubject = `[Portfolio Contact] ${subject} - from ${name}`;
    const formattedBody = `Name: ${name}\nEmail: ${email}\nPurpose: ${subject}\n\nMessage:\n${message}\n\n---\nSent from puasec portfolio`;

    // Construct URI encoded mailto link
    const mailtoUri = `mailto:${recipient}?subject=${encodeURIComponent(formattedSubject)}&body=${encodeURIComponent(formattedBody)}`;

    // Visual feedback
    submitBtn.disabled = true;
    submitBtn.classList.add('loading');
    submitBtn.innerHTML = '<span>Opening Mail Client...</span>';

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
      submitBtn.innerHTML = `
        <span>Send Message</span>
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="22" y1="2" x2="11" y2="13"></line>
          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </svg>
      `;

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
