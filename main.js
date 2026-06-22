/* ═══════════════════════════════════════
   ADDA — We Love Foods  |  main.js
═══════════════════════════════════════ */

/* ── Prevent browser from restoring mid-page scroll on refresh ── */
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
window.scrollTo(0, 0);

/* ── Navbar scroll ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

/* ── Mobile nav overlay (body-level element, not inside navbar) ── */
const hamburger  = document.getElementById('hamburger');
const mobileNav  = document.getElementById('mobile-nav');
const mobileClose= document.getElementById('mobile-close');

function openMobileNav() {
  mobileNav.classList.add('open');
  mobileNav.setAttribute('aria-hidden', 'false');
  hamburger.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeMobileNav() {
  mobileNav.classList.remove('open');
  mobileNav.setAttribute('aria-hidden', 'true');
  hamburger.classList.remove('open');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', () => {
  mobileNav.classList.contains('open') ? closeMobileNav() : openMobileNav();
});
mobileClose.addEventListener('click', closeMobileNav);
mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMobileNav));

/* ── Particle generator ── */
(function createParticles() {
  const container = document.getElementById('particles');
  const emojis = ['☕','🍕','🍜','🌮','🍔','🥗','🍣','🧆','🍛','🥐','🍰','🍹'];
  for (let i = 0; i < 28; i++) {
    const el = document.createElement('div');
    el.style.cssText = `
      position:absolute;
      left:${Math.random()*100}%;
      bottom:${-10 - Math.random()*20}%;
      font-size:${14 + Math.random()*18}px;
      opacity:0;
      pointer-events:none;
      user-select:none;
      animation: floatUp ${5 + Math.random()*8}s ${Math.random()*10}s infinite ease-in;
    `;
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.background = 'none';
    el.style.width = 'auto';
    el.style.height = 'auto';
    el.style.borderRadius = '0';
    el.classList.add('particle');
    el.style.setProperty('--dur',   `${5 + Math.random()*8}s`);
    el.style.setProperty('--delay', `${Math.random()*10}s`);
    container.appendChild(el);
  }
})();

/* ── Scroll-reveal (lightweight AOS) ── */
const aosObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('[data-aos]').forEach(el => aosObserver.observe(el));

/* ── Menu data (sourced from PDF slides 7–11) ── */
const menuData = {

  beverages: [
    { emoji:'🍵', name:'Kullad Chai',        desc:'Signature chai served in an earthy clay kullad — warm, milky & aromatic', price:'₹30',  veg:true,  badge:'Bestseller' },
    { emoji:'☕', name:'Hot Cappuccino',      desc:'Freshly brewed espresso topped with thick velvety froth', price:'₹70',  veg:true  },
    { emoji:'🥤', name:'Cold Coffee',         desc:'Chilled coffee blended smooth with a creamy froth crown', price:'₹80',  veg:true  },
    { emoji:'🍫', name:'Chocolate Shake',     desc:'Rich, thick chocolate milkshake — indulgent and ice-cold', price:'₹90',  veg:true,  badge:'Popular' },
    { emoji:'🧁', name:'Oreo Shake',          desc:'Crushed Oreo blended into a creamy milkshake with chocolate drizzle', price:'₹100', veg:true  },
    { emoji:'🥭', name:'Mango Lassi',         desc:'Thick, sweet alphonso mango blended with chilled yoghurt', price:'₹75',  veg:true  },
    { emoji:'🌹', name:'Rose Cooler',         desc:'Chilled rose sherbet with basil seeds — refreshing & floral', price:'₹70',  veg:true  },
    { emoji:'🧉', name:'Masala Shot',         desc:'Bold spiced shot — Adda\'s secret recipe to kick-start your day', price:'₹40',  veg:true,  badge:'New' },
    { emoji:'🍋', name:'Fresh Lime Soda',     desc:'Zesty lime, black salt & soda — light and energising', price:'₹50',  veg:true  },
  ],

  mains: [
    { emoji:'🍜', name:'Hakka Noodles',       desc:'Wok-tossed noodles with crunchy vegetables & Adda\'s signature sauce', price:'₹120', veg:true,  badge:'Bestseller' },
    { emoji:'🍝', name:'Penne Arrabbiata',    desc:'Al dente penne pasta in a spiced tomato base with fresh herbs', price:'₹140', veg:true  },
    { emoji:'🌯', name:'Bombay Wrap',         desc:'Grilled wrap stuffed with tangy fillings & fresh pomegranate seeds', price:'₹110', veg:true  },
    { emoji:'🥐', name:'Panini Melt',         desc:'Toasted panini with melted cheese, veggies & chipotle sauce', price:'₹130', veg:true  },
  ],

  sandwiches: [
    { emoji:'🥪', name:'Club Sandwich',       desc:'Triple-decker toasted sandwich with veggies, cheese & coleslaw', price:'₹120', veg:true,  badge:'Popular' },
    { emoji:'🧀', name:'Grilled Cheese Toast',desc:'Buttery toasted bread loaded with melted cheese — simple perfection', price:'₹80',  veg:true  },
    { emoji:'🌶️', name:'Spicy Crunch Toast',  desc:'Toasted with a spiced filling, served with a side of ketchup', price:'₹90',  veg:true  },
    { emoji:'🥗', name:'Veg Club + Fries',    desc:'Classic club sandwich with golden French fries on the side', price:'₹150', veg:true  },
  ],

  indian: [
    { emoji:'🫓', name:'Butter Paratha',      desc:'Flaky, golden paratha served with a cube of butter & mango pickle', price:'₹60',  veg:true,  badge:'Bestseller' },
    { emoji:'🍜', name:'Masala Maggi',        desc:'Street-style elevated Maggi — spiced, soupy and utterly nostalgic', price:'₹55',  veg:true,  badge:'Popular' },
    { emoji:'🍛', name:'Paneer Curry + Rice', desc:'Soft paneer in a rich curry gravy, served with steamed rice & salad', price:'₹150', veg:true  },
    { emoji:'🫔', name:'Samosa',              desc:'Crispy golden pastry shell with a spiced potato & pea filling, ketchup', price:'₹30',  veg:true  },
    { emoji:'🥣', name:'Dal Makhani + Roti',  desc:'Slow-cooked black lentils in a creamy tomato base with tandoor roti', price:'₹140', veg:true  },
    { emoji:'🥘', name:'Aloo Tikki Chaat',    desc:'Crispy potato patties with tangy chutneys, yoghurt & sev', price:'₹65',  veg:true  },
    { emoji:'🫙', name:'Chapati + Sabzi',     desc:'Soft whole-wheat chapati with two seasonal vegetable sides', price:'₹100', veg:true  },
  ],

  grill: [
    { emoji:'🍔', name:'Mini Cast-Iron Sliders', desc:'6 bite-sized burgers served sizzling on individual cast-iron pans', price:'₹160', veg:false, badge:'Signature' },
    { emoji:'🍗', name:'Roasted Half Chicken',   desc:'Tender half-chicken marinated in herbs, slow-roasted to perfection', price:'₹200', veg:false, badge:'Popular' },
    { emoji:'🍕', name:'Adda Special Pizza',      desc:'Thin-crust pizza loaded with fresh toppings & herbs', price:'₹180', veg:true  },
    { emoji:'🥩', name:'Seekh Kebab Platter',     desc:'Juicy minced kebabs off the live grill served with mint chutney', price:'₹190', veg:false },
  ],

};

/* "All" tab = flatten every category */
menuData.all = [
  ...menuData.beverages,
  ...menuData.mains,
  ...menuData.sandwiches,
  ...menuData.indian,
  ...menuData.grill,
];

/* ── Render menu ── */
function renderMenu(tab) {
  const grid = document.getElementById('menu-grid');
  grid.innerHTML = '';
  const items = menuData[tab] || [];
  items.forEach((item, i) => {
    const el = document.createElement('div');
    el.className = 'menu-item';
    el.style.animationDelay = `${i * 0.06}s`;
    const badgeHtml = item.badge
      ? `<span class="menu-badge">${item.badge}</span>` : '';
    const vegDot = `<span class="veg-dot ${item.veg ? 'veg' : 'nonveg'}" title="${item.veg ? 'Vegetarian' : 'Non-Vegetarian'}"></span>`;
    el.innerHTML = `
      <div class="menu-emoji-wrap">
        <div class="menu-emoji">${item.emoji}</div>
        ${badgeHtml}
        ${vegDot}
      </div>
      <div class="menu-info">
        <h4>${item.name}</h4>
        <p>${item.desc}</p>
        <span class="menu-price">${item.price}</span>
      </div>`;
    grid.appendChild(el);
  });
}

document.querySelectorAll('.tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderMenu(btn.dataset.tab);
  });
});
renderMenu('all');

/* ── Contact form ── */
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const success = document.getElementById('form-success');
  success.classList.add('visible');
  this.reset();
  setTimeout(() => success.classList.remove('visible'), 5000);
});

/* ── Smooth active nav highlight ── */
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
const highlightNav = () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navAnchors.forEach(a => {
    a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--gold)' : '';
  });
};
window.addEventListener('scroll', highlightNav, { passive: true });

/* ── Counter animation for stats (optional small touch) ── */
function animateValue(el, start, end, dur) {
  let startTime = null;
  function step(ts) {
    if (!startTime) startTime = ts;
    const progress = Math.min((ts - startTime) / dur, 1);
    el.textContent = Math.floor(progress * (end - start) + start) + '+';
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

/* ── Trifecta hover pulse ── */
document.querySelectorAll('.trifecta-ring').forEach(ring => {
  ring.addEventListener('mouseenter', () => {
    ring.style.transform = 'scale(1.08)';
    ring.style.transition = 'transform .25s ease';
    ring.style.opacity = '1';
  });
  ring.addEventListener('mouseleave', () => {
    ring.style.transform = 'scale(1)';
    ring.style.opacity = '0.75';
  });
});

/* ── World pills stagger entrance ── */
const pills = document.querySelectorAll('.world-pill');
const pillObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      pills.forEach((p, i) => {
        setTimeout(() => { p.style.opacity = '1'; p.style.transform = 'translateY(0)'; }, i * 80);
      });
      pillObserver.disconnect();
    }
  });
}, { threshold: 0.2 });
pills.forEach(p => { p.style.opacity = '0'; p.style.transform = 'translateY(20px)'; p.style.transition = 'opacity .4s ease, transform .4s ease'; });
if (pills.length) pillObserver.observe(pills[0].parentElement);
