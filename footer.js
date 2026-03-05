// ============================================
//  Cillie's Cakes — Shared Footer (footer.js)
//  Include in every page: <script src="footer.js"></script>
// ============================================
(function () {
  const footerHTML = `
  <footer class="site-footer">
    <div class="footer-inner">

      <div class="footer-brand">
        <div class="footer-logo">
          <i class="fa-solid fa-cake-candles footer-logo-icon"></i>
          <h3>Cillie's Cakes</h3>
        </div>
        <p>A family-owned Houston bakery baking joy since 1990. Specialising in handcrafted whipped cream cakes for all occasions.</p>
        <div class="footer-social">
          <a href="https://facebook.com/search/top/?q=cillie%27s%20cakes%20of%20houston" target="_blank" aria-label="Facebook">
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/cilliescakesofhouston/" target="_blank" aria-label="Instagram">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="mailto:Cilliescakes@gmail.com" aria-label="Email">
            <i class="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>

      <div class="footer-col">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="index.html"><i class="fa-solid fa-house"></i>Home</a></li>
          <li><a href="shop.html"><i class="fa-solid fa-layer-group"></i>Cake Flavors &amp; Prices</a></li>
          <li><a href="sweets.html"><i class="fa-solid fa-cookie-bite"></i>Sweets &amp; Treats</a></li>
          <li><a href="custom-order.html"><i class="fa-solid fa-wand-magic-sparkles"></i>Custom Orders</a></li>
          <li><a href="about.html"><i class="fa-solid fa-heart"></i>Our Story</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Contact</h4>
        <div class="footer-contact-list">
          <div class="footer-contact-item">
            <i class="fa-solid fa-location-dot"></i>
            <span>867 Dulles Avenue, Suite A<br/>Stafford, TX 77477</span>
          </div>
          <div class="footer-contact-item">
            <i class="fa-solid fa-phone"></i>
            <span><strong>281-530-1666</strong></span>
          </div>
          <div class="footer-contact-item">
            <i class="fa-solid fa-envelope"></i>
            <span>Cilliescakes@gmail.com</span>
          </div>
          <div class="footer-contact-item">
            <i class="fa-solid fa-clock"></i>
            <span>Mon: Closed<br/>Tue&#8211;Sat: 11:30am&#8211;7:30pm<br/>Sun: 11:30am&#8211;5:00pm</span>
          </div>
        </div>
      </div>

      <div class="footer-newsletter footer-col">
        <h4>Newsletter</h4>
        <p>Get sweet updates &amp; be first to know about new flavors.</p>
        <div class="newsletter-row">
          <input type="email" placeholder="Your email"/>
          <button><i class="fa-solid fa-paper-plane"></i></button>
        </div>
      </div>

    </div>
    <div class="footer-bottom">
      <span>&#169; 2026 Cillie&#8217;s Cakes &amp; Snacks. All rights reserved.</span>
      <span>Houston, TX</span>
    </div>
  </footer>`;

  document.body.insertAdjacentHTML('beforeend', footerHTML);
})();
