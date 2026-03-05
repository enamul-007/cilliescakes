// ============================================
//  Cillie's Cakes — Shared Navbar (navbar.js)
// ============================================
(function () {
  const navHTML = `
  <nav class="site-nav glass-nav" id="siteNav">
    <div class="nav-inner">

      <a class="nav-logo" href="index.html">
        <i class="fa-solid fa-cake-candles logo-icon"></i>
        <span class="brand-name">Cillie's Cakes</span>
      </a>

      <ul class="nav-links">
        <li><a href="index.html"        data-page="index">Home</a></li>
        <li><a href="about.html"        data-page="about">About</a></li>
        <li><a href="shop.html"         data-page="shop">Shop</a></li>
        <li><a href="sweets.html"       data-page="sweets">Sweets &amp; Treats</a></li>
        <li><a href="custom-order.html" data-page="custom-order">Custom Orders</a></li>
        <li><a href="contact.html"      data-page="contact">Contact</a></li>
      </ul>

      <div class="nav-actions">
        <button class="btn-dark-toggle" id="darkToggle" aria-label="Toggle dark mode">
          <i class="fa-solid fa-moon" id="darkIcon"></i>
        </button>
        <button class="cart-btn" aria-label="Cart">
          <i class="fa-solid fa-bag-shopping"></i>
          <span class="cart-badge" id="cartCount">0</span>
        </button>
        <a href="custom-order.html" class="btn-primary nav-cta">Order Now</a>
        <button class="hamburger" id="hamburgerBtn" aria-label="Open menu">
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>
    </div>

    <div class="mobile-nav" id="mobileNav">
      <a href="index.html"        data-page="index"><i class="fa-solid fa-house"></i>Home</a>
      <a href="about.html"        data-page="about"><i class="fa-solid fa-heart"></i>About</a>
      <a href="shop.html"         data-page="shop"><i class="fa-solid fa-store"></i>Shop</a>
      <a href="sweets.html"       data-page="sweets"><i class="fa-solid fa-cookie-bite"></i>Sweets &amp; Treats</a>
      <a href="custom-order.html" data-page="custom-order"><i class="fa-solid fa-wand-magic-sparkles"></i>Custom Orders</a>
      <a href="contact.html"      data-page="contact"><i class="fa-solid fa-envelope"></i>Contact</a>
    </div>
  </nav>`;

  document.body.insertAdjacentHTML('afterbegin', navHTML);

  const currentFile = window.location.pathname.split('/').pop().replace('.html','') || 'index';
  document.querySelectorAll('[data-page]').forEach(link => {
    if (link.getAttribute('data-page') === currentFile) link.classList.add('active');
  });

  const darkToggle = document.getElementById('darkToggle');
  const darkIcon   = document.getElementById('darkIcon');

  if (localStorage.getItem('darkMode') === 'true') {
    document.documentElement.classList.add('dark');
    darkIcon.className = 'fa-solid fa-sun';
  }

  darkToggle.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    darkIcon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    localStorage.setItem('darkMode', isDark);
  });

  document.getElementById('hamburgerBtn').addEventListener('click', () => {
    document.getElementById('mobileNav').classList.toggle('open');
  });
})();
