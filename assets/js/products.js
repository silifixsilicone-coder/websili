/**
 * WELFIX SOLUTIONS — CENTRAL PRODUCTS DATABASE & UTILITIES
 * Verified Information:
 * Manufacturer: Welfix
 * Marketed By: Welfix Solutions
 * WhatsApp / Phone: +91 91851 53501
 */

const WELFIX_PHONE = "+919185153501";
const WELFIX_EMAIL = "enquiries.welfixsolutions@gmail.com";

const WELFIX_PRODUCTS = [
  {
    id: "acrylic-silicone",
    slug: "acrylic-silicone",
    name: "WELFIX Acrylic General Purpose Silicone Sealant",
    shortName: "Acrylic General Purpose Sealant",
    category: "Acrylic",
    packSize: "300 ml",
    tagline: "High Flexibility • Waterproof • Weather Resistant",
    image: "assets/images/products/acrylic-silicone.svg",
    isPhotoVerified: true,
    priceStatus: "Contact for Price",
    features: [
      "Flexible",
      "Durable",
      "Waterproof",
      "Weather Resistant",
      "High Flexibility"
    ],
    applications: [
      "Windows & Doors",
      "Glass & Frames",
      "Kitchen & Bathroom",
      "Interior & Exterior"
    ],
    description: "WELFIX Acrylic General Purpose Silicone Sealant is a premier sealing solution specially formulated to deliver flexible, durable, and waterproof protection across architectural joints and interior/exterior gap sealing.",
    url: "acrylic-silicone.html",
    manufacturer: "Welfix",
    marketedBy: "Welfix Solutions",
    whatsappMessage: "Hello WELFIX Solutions, I am interested in WELFIX Acrylic General Purpose Silicone Sealant (300 ml). Please share pricing and bulk supply details."
  },
  {
    id: "weatherproof-silicone",
    slug: "weatherproof-silicone",
    name: "WELFIX Weatherproof Silicone Sealant",
    shortName: "Weatherproof Silicone Sealant",
    category: "Weatherproof",
    packSize: "Contact for Pack Size",
    tagline: "UV Resistant • Exterior Facades • Temperature Stable",
    image: "assets/images/products/weatherproof-silicone.svg",
    isPhotoVerified: false,
    priceStatus: "Contact for Price",
    features: [
      "Weather Resistant",
      "UV & Sunlight Protection",
      "Exterior Expansion Joints",
      "High Thermal Flexibility"
    ],
    applications: [
      "Curtain Walls & Glazing",
      "Exterior Facades & Cladding",
      "Window & Door Perimeters",
      "Concrete Expansion Seams"
    ],
    description: "WELFIX Weatherproof Silicone Sealant is engineered to withstand extreme climates, sunlight UV exposure, rain, and temperature cycling in exterior construction and high-rise facades.",
    url: "weatherproof-silicone.html",
    manufacturer: "Welfix",
    marketedBy: "Welfix Solutions",
    whatsappMessage: "Hello WELFIX Solutions, I am interested in WELFIX Weatherproof Silicone Sealant. Please share official specifications, pack size options and pricing."
  },
  {
    id: "acetic-silicone",
    slug: "acetic-silicone",
    name: "WELFIX Acetic Silicone Sealant",
    shortName: "Acetic Silicone Sealant",
    category: "Acetic",
    packSize: "Contact for Pack Size",
    tagline: "Fast Curing System • Premium Glass Adhesion • Sanitary Safe",
    image: "assets/images/products/acetic-silicone.svg",
    isPhotoVerified: false,
    priceStatus: "Contact for Price",
    features: [
      "Fast Curing",
      "High Tensile Bond",
      "Waterproof & Moisture Safe",
      "Non-Porous Surface Adhesion"
    ],
    applications: [
      "Glass to Glass Joints",
      "Sanitary & Bathroom Glazing",
      "Aluminum Frame Enclosures",
      "Ceramic & Vitrified Tiles"
    ],
    description: "WELFIX Acetic Silicone Sealant offers rapid curing and strong bond adhesion on glass, vitrified ceramics, and non-porous architectural materials for sanitary and glazing applications.",
    url: "acetic-silicone.html",
    manufacturer: "Welfix",
    marketedBy: "Welfix Solutions",
    whatsappMessage: "Hello WELFIX Solutions, I am interested in WELFIX Acetic Silicone Sealant. Please share official specifications, pack size options and pricing."
  }
];

/**
 * Render a single product card HTML
 */
function createProductCardHTML(product) {
  const verifiedBadge = product.isPhotoVerified 
    ? `<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#F2E8FC] text-[#52119B] border border-[#C026D3]/30">
        <i data-lucide="check-circle" class="w-3.5 h-3.5 text-[#C026D3]"></i> 300 ml Verified
      </span>`
    : `<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#F8F4FC] text-[#3D087B] border border-[#52119B]/20">
        <i data-lucide="camera" class="w-3.5 h-3.5 text-[#52119B]"></i> Verified Listing
      </span>`;

  const waEncoded = encodeURIComponent(product.whatsappMessage);

  return `
    <div class="product-card bg-white rounded-2xl overflow-hidden flex flex-col h-full shadow-purple-sm hover:shadow-purple-lg transition-all duration-300">
      <!-- Image area with subtle lavender glow -->
      <div class="relative bg-gradient-to-b from-[#F8F4FC] to-white p-6 flex items-center justify-center min-h-[280px] overflow-hidden group">
        <img 
          src="${product.image}" 
          alt="${product.name}" 
          class="h-56 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div class="absolute top-4 left-4">
          ${verifiedBadge}
        </div>
        <div class="absolute top-4 right-4">
          <span class="px-2.5 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-white/90 text-[#31065E] shadow-sm border border-[#52119B]/10">
            ${product.category}
          </span>
        </div>
      </div>

      <!-- Content area -->
      <div class="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between gap-2 mb-2">
            <span class="text-xs font-semibold uppercase tracking-wider text-[#C026D3]">
              ${product.category} Series
            </span>
            <span class="text-xs font-bold text-[#52119B] bg-[#F2E8FC] px-2 py-0.5 rounded">
              ${product.packSize}
            </span>
          </div>

          <h3 class="text-xl font-extrabold text-[#171321] leading-tight mb-2 hover:text-[#52119B] transition-colors">
            <a href="${product.url}">${product.name}</a>
          </h3>

          <p class="text-sm text-[#595366] mb-4 line-clamp-2 leading-relaxed">
            ${product.description}
          </p>

          <!-- Key Features Pills -->
          <div class="flex flex-wrap gap-1.5 mb-5">
            ${product.features.slice(0, 3).map(f => `
              <span class="inline-flex items-center text-[11px] font-medium bg-[#F8F4FC] text-[#31065E] px-2 py-1 rounded-md border border-[#52119B]/10">
                <i data-lucide="check" class="w-3 h-3 mr-1 text-[#C026D3]"></i> ${f}
              </span>
            `).join('')}
          </div>
        </div>

        <!-- Footer / Action Buttons -->
        <div class="pt-4 border-t border-[#F2E8FC]">
          <div class="flex items-center justify-between mb-4">
            <span class="text-xs font-medium text-[#595366]">Pricing</span>
            <span class="text-sm font-bold text-[#52119B] flex items-center gap-1">
              <i data-lucide="phone-call" class="w-3.5 h-3.5 text-[#C026D3]"></i> ${product.priceStatus}
            </span>
          </div>

          <div class="grid grid-cols-2 gap-2">
            <a 
              href="${product.url}" 
              class="w-full py-2.5 px-3 rounded-xl text-center text-xs font-bold text-[#31065E] bg-[#F2E8FC] hover:bg-[#52119B] hover:text-white transition-all flex items-center justify-center gap-1.5"
            >
              <span>View Details</span>
              <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
            </a>

            <a 
              href="https://wa.me/919185153501?text=${waEncoded}" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="w-full py-2.5 px-3 rounded-xl text-center text-xs font-bold text-white bg-[#25D366] hover:bg-[#20BA5A] transition-all flex items-center justify-center gap-1.5 shadow-sm"
            >
              <i data-lucide="message-circle" class="w-3.5 h-3.5"></i>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
}

/**
 * Initialize product catalog in products.html
 */
function initProductCatalog() {
  const container = document.getElementById("products-grid");
  const searchInput = document.getElementById("product-search");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const resultCount = document.getElementById("result-count");

  if (!container) return;

  let currentCategory = "all";
  let searchQuery = "";

  function render() {
    let filtered = WELFIX_PRODUCTS.filter(product => {
      const matchesCategory = currentCategory === "all" || product.category.toLowerCase() === currentCategory.toLowerCase();
      const matchesSearch = searchQuery === "" || 
        product.name.toLowerCase().includes(searchQuery) ||
        product.description.toLowerCase().includes(searchQuery) ||
        product.features.some(f => f.toLowerCase().includes(searchQuery)) ||
        product.applications.some(a => a.toLowerCase().includes(searchQuery));
      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-16 text-center">
          <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-[#F2E8FC] text-[#52119B] flex items-center justify-center">
            <i data-lucide="search-x" class="w-8 h-8"></i>
          </div>
          <h4 class="text-xl font-bold text-[#171321] mb-2">No Matching Sealants Found</h4>
          <p class="text-sm text-[#595366] max-w-md mx-auto mb-6">
            We couldn't find any products matching "${searchQuery}". Please check your spelling or contact our technical team for custom requirements.
          </p>
          <a href="https://wa.me/919185153501?text=Hello%20WELFIX%20Solutions,%20I%20am%20looking%20for%20a%20specific%20sealant%20solution." target="_blank" class="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm">
            <i data-lucide="message-circle" class="w-4 h-4"></i> Contact Technical Team
          </a>
        </div>
      `;
    } else {
      container.innerHTML = filtered.map(createProductCardHTML).join("");
    }

    if (resultCount) {
      resultCount.textContent = `Showing ${filtered.length} of ${WELFIX_PRODUCTS.length} products`;
    }

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  // Filter Button Events
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => {
        b.classList.remove("active", "bg-[#52119B]", "text-white");
        b.classList.add("bg-white", "text-[#31065E]", "border-[#52119B]/20");
      });
      btn.classList.add("active", "bg-[#52119B]", "text-white");
      btn.classList.remove("bg-white", "text-[#31065E]");
      currentCategory = btn.getAttribute("data-category");
      render();
    });
  });

  // Search Input Event
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      render();
    });
  }

  // Initial render
  render();
}

// Auto-run if DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initProductCatalog);
} else {
  initProductCatalog();
}
