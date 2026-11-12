/**
 * WELFIX SOLUTIONS — CONTACT FORM VALIDATION & WHATSAPP REDIRECTION
 * Phone / WhatsApp: +91 91851 53501
 * Email: enquiries.welfixsolutions@gmail.com
 * Address: Shri Guru Krupa, Sr. No. 1/9, Labhade Colony, Behind Kulkarni Complex, Karvenagar, Pune, Maharashtra, India.
 */

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("welfix-contact-form");
  const formStatus = document.getElementById("form-status-message");

  if (!contactForm) return;

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Elements
    const nameInput = document.getElementById("full-name");
    const phoneInput = document.getElementById("phone-number");
    const emailInput = document.getElementById("email-address");
    const productInput = document.getElementById("product-interest");
    const messageInput = document.getElementById("enquiry-message");

    const nameVal = nameInput ? nameInput.value.trim() : "";
    const phoneVal = phoneInput ? phoneInput.value.trim() : "";
    const emailVal = emailInput ? emailInput.value.trim() : "";
    const productVal = productInput ? productInput.value : "General Enquiry";
    const messageVal = messageInput ? messageInput.value.trim() : "";

    // Clear previous inline errors
    clearErrors();

    let hasErrors = false;

    // 1. Name validation
    if (!nameVal || nameVal.length < 2) {
      showError(nameInput, "Please enter your full name (minimum 2 characters).");
      hasErrors = true;
    }

    // 2. Phone validation (Indian / International formats)
    const phoneRegex = /^[+]?[\d\s-]{8,15}$/;
    if (!phoneVal || !phoneRegex.test(phoneVal.replace(/\s+/g, ""))) {
      showError(phoneInput, "Please enter a valid phone number (e.g. +91 91851 53501).");
      hasErrors = true;
    }

    // 3. Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailVal || !emailRegex.test(emailVal)) {
      showError(emailInput, "Please enter a valid email address.");
      hasErrors = true;
    }

    // 4. Message validation
    if (!messageVal || messageVal.length < 5) {
      showError(messageInput, "Please provide some details regarding your requirements.");
      hasErrors = true;
    }

    if (hasErrors) {
      if (formStatus) {
        formStatus.className = "p-4 rounded-xl text-sm font-medium bg-red-50 text-red-700 border border-red-200 mt-4";
        formStatus.innerHTML = `<strong>Attention Required:</strong> Please correct the highlighted errors before sending.`;
        formStatus.classList.remove("hidden");
      }
      return;
    }

    // Construct structured WhatsApp message
    const formattedMessage = 
`*NEW WEBSITE ENQUIRY — WELFIX SOLUTIONS*
---------------------------------------
👤 *Name:* ${nameVal}
📞 *Phone:* ${phoneVal}
✉️ *Email:* ${emailVal}
📦 *Product of Interest:* ${productVal}
💬 *Message:*
${messageVal}
---------------------------------------
_Sent via WELFIX Solutions Official Website (Pune, India)_`;

    const encodedWA = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/919185153501?text=${encodedWA}`;

    if (formStatus) {
      formStatus.className = "p-4 rounded-xl text-sm font-medium bg-emerald-50 text-emerald-800 border border-emerald-200 mt-4";
      formStatus.innerHTML = `
        <div class="flex items-start gap-3">
          <i data-lucide="check-circle-2" class="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0"></i>
          <div>
            <p class="font-bold text-emerald-900">Redirecting to WhatsApp...</p>
            <p class="text-emerald-700 mt-0.5 text-xs">Opening WhatsApp with your prefilled details to connect directly with WELFIX Customer Care (+91 91851 53501).</p>
          </div>
        </div>
      `;
      formStatus.classList.remove("hidden");
      if (window.lucide) window.lucide.createIcons();
    }

    // Redirect to WhatsApp
    setTimeout(() => {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }, 600);
  });

  function showError(inputEl, msg) {
    if (!inputEl) return;
    inputEl.classList.add("border-red-500", "focus:ring-red-400");
    const parent = inputEl.parentElement;
    const errorEl = document.createElement("p");
    errorEl.className = "text-xs text-red-600 mt-1.5 font-medium field-error";
    errorEl.textContent = msg;
    parent.appendChild(errorEl);
  }

  function clearErrors() {
    document.querySelectorAll(".field-error").forEach(el => el.remove());
    document.querySelectorAll(".border-red-500").forEach(el => {
      el.classList.remove("border-red-500", "focus:ring-red-400");
    });
    if (formStatus) {
      formStatus.classList.add("hidden");
    }
  }
});
