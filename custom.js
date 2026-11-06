(function () {
  var TEXT = {
    id: "Satu gateway untuk model AI, pemakaian, dan billing organisasi.",
    en: "A single gateway for AI models, usage, and organizational billing.",
    ja: "AIモデル、利用状況、および組織の課金に関する単一のゲートウェイ。",
    zh: "一个统一的入口，用于管理组织的 AI 模型、使用情况和计费。"
  };

  function textForLanguage() {
    var segment = location.pathname.split("/")[1];
    var lang = (document.documentElement.lang || segment || "id").toLowerCase().split("-")[0];
    return TEXT[segment] || TEXT[lang] || TEXT.id;
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


(function () {
  if (window.hostlinkuSidebarPreferences) return;
  window.hostlinkuSidebarPreferences = true;
  var storageKey = "hostlinku-docs-sidebar";
  var states = {};
  try { states = JSON.parse(sessionStorage.getItem(storageKey) || "{}"); } catch (_) {}
  var restoring = false;
  var scheduled = false;

  function groupKey(button) {
    var locale = location.pathname.split("/")[1];
    if (["en", "ja", "zh"].indexOf(locale) === -1) locale = "id";
    return locale + ":" + button.textContent.trim();
  }

  function restoreGroups() {
    scheduled = false;
    restoring = true;
    document.querySelectorAll('#sidebar button[aria-expanded]:not([aria-haspopup]), #mobile-nav button[aria-expanded]:not([aria-haspopup])').forEach(function (button) {
      var key = groupKey(button);
      if (Object.prototype.hasOwnProperty.call(states, key) &&
          (button.getAttribute("aria-expanded") === "true") !== states[key]) {
        button.click();
      }
    });
    restoring = false;
  }

  function scheduleRestore() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(restoreGroups);
  }

  document.addEventListener("click", function (event) {
    if (restoring || !(event.target instanceof Element)) return;
    var button = event.target.closest('#sidebar button[aria-expanded]:not([aria-haspopup]), #mobile-nav button[aria-expanded]:not([aria-haspopup])');
    if (!button) return;
    states[groupKey(button)] = button.getAttribute("aria-expanded") !== "true";
    try { sessionStorage.setItem(storageKey, JSON.stringify(states)); } catch (_) {}
  }, true);

  new MutationObserver(scheduleRestore).observe(document.body, {
    subtree: true,
    childList: true,
    attributes: true,
    attributeFilter: ["aria-expanded"]
  });
  window.addEventListener("mintlify:navigate", scheduleRestore);
  scheduleRestore();
})();
