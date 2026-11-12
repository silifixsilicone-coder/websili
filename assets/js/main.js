/**
 * WELFIX SOLUTIONS — MAIN JAVASCRIPT
 * Handles Sticky Navbar, Mobile Navigation Drawer, Dropdown Menus,
 * Scroll Reveal Animations, Floating WhatsApp Integration, and Active Link Highlighting.
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 2. Sticky Navbar Transition
  const header = document.getElementById("main-header");
  const handleScroll = () => {
    if (!header) return;
    if (window.scrollY > 40) {
      header.classList.add("nav-scrolled");
      header.classList.remove("bg-white/90");
    } else {
      header.classList.remove("nav-scrolled");
      header.classList.add("bg-white/90");
    }
  };
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  // 3. Mobile Navigation Drawer Toggle
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenuDrawer = document.getElementById("mobile-menu-drawer");
  const mobileMenuCloseBtn = document.getElementById("mobile-menu-close");
  const mobileMenuOverlay = document.getElementById("mobile-menu-overlay");

  function openMobileMenu() {
    if (!mobileMenuDrawer) return;
    mobileMenuDrawer.classList.remove("translate-x-full");
    if (mobileMenuOverlay) {
      mobileMenuOverlay.classList.remove("hidden");
      setTimeout(() => mobileMenuOverlay.classList.remove("opacity-0"), 10);
    }
    document.body.style.overflow = "hidden";
  }

  function closeMobileMenu() {
    if (!mobileMenuDrawer) return;
    mobileMenuDrawer.classList.add("translate-x-full");
    if (mobileMenuOverlay) {
      mobileMenuOverlay.classList.add("opacity-0");
      setTimeout(() => mobileMenuOverlay.classList.add("hidden"), 300);
    }
    document.body.style.overflow = "";
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", openMobileMenu);
  }
  if (mobileMenuCloseBtn) {
    mobileMenuCloseBtn.addEventListener("click", closeMobileMenu);
  }
  if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener("click", closeMobileMenu);
  }

  // 4. Mobile Dropdown Toggle for Products
  const mobileDropdownToggle = document.getElementById("mobile-products-toggle");
  const mobileDropdownContent = document.getElementById("mobile-products-menu");
  const mobileDropdownIcon = document.getElementById("mobile-products-chevron");

  if (mobileDropdownToggle && mobileDropdownContent) {
    mobileDropdownToggle.addEventListener("click", (e) => {
      e.preventDefault();
      mobileDropdownContent.classList.toggle("hidden");
      if (mobileDropdownIcon) {
        mobileDropdownIcon.classList.toggle("rotate-180");
      }
    });
  }

  // 5. Active Link Highlighting
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPath || (currentPath === "" && href === "index.html")) {
      link.classList.add("text-[#C026D3]", "font-bold");
      link.classList.remove("text-[#171321]");
    }
  });

  // 6. Scroll Reveal Observer
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length > 0) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px"
    });

    reveals.forEach(el => observer.observe(el));
  } else {
    reveals.forEach(el => el.classList.add("active"));
  }

  // 7. Dynamic Floating WhatsApp Setup
  const floatingWa = document.getElementById("floating-whatsapp");
  if (floatingWa) {
    // If not already set with a specific text
    if (!floatingWa.getAttribute("href") || floatingWa.getAttribute("href") === "#") {
      const defaultMsg = encodeURIComponent("Hello WELFIX Solutions, I am interested in your silicone sealant products. Please share product details and pricing.");
      floatingWa.setAttribute("href", `https://wa.me/919185153501?text=${defaultMsg}`);
    }
  }

  // 8. Re-run icons when any modal or dynamic state changes
  window.refreshIcons = () => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  };
});
