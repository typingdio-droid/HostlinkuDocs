(function () {
  var ID_TEXT =
    "Gateway AI terpadu dengan API kompatibel OpenAI. Satu API key untuk mengakses model dari berbagai provider, lengkap dengan katalog model, kontrol pemakaian, dan billing dalam satu platform.";
  var EN_TEXT =
    "Unified AI gateway with an OpenAI-compatible API. One API key to access models from multiple providers, with a model catalog, usage controls, and billing in one platform.";

  function textForLanguage() {
    var lang = (document.documentElement.lang || "").toLowerCase();
    if (lang.indexOf("en") === 0) return EN_TEXT;
    if (lang) return ID_TEXT;
    return location.pathname.indexOf("/en") === 0 ? EN_TEXT : ID_TEXT;
  }

  function addFooterDescription() {
    var footer = document.querySelector("footer");
    if (!footer) return;
    var text = textForLanguage();
    var existing = footer.querySelector("[data-hl-footer-desc]");
    if (existing) {
      if (existing.textContent !== text) existing.textContent = text;
      return;
    }
    var logo = footer.querySelector('img[alt="light logo"]');
    var logoLink = logo && logo.closest("a");
    if (!logoLink) return;
    var p = document.createElement("p");
    p.setAttribute("data-hl-footer-desc", "");
    p.textContent = text;
    logoLink.insertAdjacentElement("afterend", p);
  }

  addFooterDescription();
  window.addEventListener("mintlify:navigate", addFooterDescription);
  setTimeout(addFooterDescription, 300);
})();
