/* ------------------------------------------------------------------
   CV LINK: paste your Google Drive link here to serve the CV from Drive.
   Use the Drive "share" link, for example:
     https://drive.google.com/file/d/FILE_ID/view?usp=sharing
   Leave it empty ("") to use the PDF stored in this repository:
     assets/Mohit_Kumar_Meena_CV.pdf
   ------------------------------------------------------------------ */
const CV_URL = "";

(function () {
  "use strict";

  // Point every CV button at the configured link
  if (CV_URL) {
    document.querySelectorAll("[data-cv]").forEach(function (a) { a.href = CV_URL; });
  }

  // Footer year
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  // Mobile menu
  var toggle = document.querySelector(".nav-toggle");
  var links = document.getElementById("nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.textContent = open ? "Close" : "Menu";
    });
    links.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.textContent = "Menu";
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && links.classList.contains("is-open")) {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.textContent = "Menu";
        toggle.focus();
      }
    });
  }

  // Rule under the nav once the page scrolls
  var nav = document.querySelector(".nav");
  var onScroll = function () { nav.classList.toggle("is-scrolled", window.scrollY > 8); };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Highlight the section currently in view
  if ("IntersectionObserver" in window) {
    var navLinks = {};
    document.querySelectorAll('.nav-links a[href^="#"]').forEach(function (a) {
      navLinks[a.getAttribute("href").slice(1)] = a;
    });
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var link = navLinks[entry.target.id];
        if (!link) return;
        if (entry.isIntersecting) {
          Object.values(navLinks).forEach(function (l) { l.classList.remove("is-active"); });
          link.classList.add("is-active");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll("main section[id]").forEach(function (s) { observer.observe(s); });
  }
})();
