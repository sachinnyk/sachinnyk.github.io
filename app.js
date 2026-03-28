const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
const yearNode = document.getElementById("year");
const sections = document.querySelectorAll("main section[id]");
const revealTargets = document.querySelectorAll(
  ".hero-copy, .hero-card, .section-heading, .about-content, .info-card, .skill-group, .project-card, .contact-panel"
);

const setMenuState = (isOpen) => {
  if (!navToggle || !navMenu) {
    return;
  }

  navToggle.setAttribute("aria-expanded", String(isOpen));
  navMenu.classList.toggle("is-open", isOpen);
};

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

if (navToggle) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    setMenuState(!isOpen);
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    setMenuState(false);
  });
});

document.addEventListener("click", (event) => {
  if (!navToggle || !navMenu) {
    return;
  }

  const clickInsideNav = navMenu.contains(event.target) || navToggle.contains(event.target);
  if (!clickInsideNav) {
    setMenuState(false);
  }
});

if (sections.length && navLinks.length) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        navLinks.forEach((link) => {
          const isActive = link.getAttribute("href") === `#${entry.target.id}`;
          link.classList.toggle("active", isActive);
        });
      });
    },
    {
      rootMargin: "-35% 0px -45% 0px",
      threshold: 0.15,
    }
  );

  sections.forEach((section) => sectionObserver.observe(section));
}

if (revealTargets.length) {
  revealTargets.forEach((target) => target.classList.add("reveal"));

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.14,
    }
  );

  revealTargets.forEach((target) => revealObserver.observe(target));
}
