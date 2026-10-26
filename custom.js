(function () {
  var TEXT = "Gateway AI terpadu dengan API kompatibel OpenAI. Satu API key untuk mengakses model dari berbagai provider, lengkap dengan katalog model, kontrol pemakaian, dan billing dalam satu platform.";

  function addFooterDescription() {
    var footer = document.querySelector("footer");
    if (!footer || footer.querySelector("[data-hl-footer-desc]")) return;
    var logo = footer.querySelector('img[alt="light logo"]');
    var logoLink = logo && logo.closest("a");
    var brand = logoLink && logoLink.parentElement;
    if (!brand) return;
    var p = document.createElement("p");
    p.setAttribute("data-hl-footer-desc", "");
    p.textContent = TEXT;
    logoLink.insertAdjacentElement("afterend", p);
  }

  addFooterDescription();
  window.addEventListener("mintlify:navigate", addFooterDescription);
  setTimeout(addFooterDescription, 300);
})();
