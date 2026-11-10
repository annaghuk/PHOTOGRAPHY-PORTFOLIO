
document.addEventListener("DOMContentLoaded", () => {
  // MOBILE MENU
  const menuButton = document.querySelector(
    ".menu-toggle, #menuToggle, [data-menu-toggle]"
  );

  const navigation = document.querySelector(
    ".nav-links, .main-nav, #primary-navigation, [data-navigation]"
  );

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const isOpen = navigation.classList.toggle("active");

      menuButton.classList.toggle("active", isOpen);
      menuButton.setAttribute("aria-expanded", String(isOpen));
    });

    navigation.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navigation.classList.remove("active");
        menuButton.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");
      });
    });
  }

  // SMOOTH SCROLL
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
      const target = document.querySelector(link.getAttribute("href"));

      if (target) {
        event.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // PORTFOLIO SLIDESHOW
  const slideshow = document.querySelector(
    ".slideshow, .slideshow-section, [data-slideshow]"
  );

  if (slideshow) {
    const slides = slideshow.querySelectorAll(
      ".slide, .slideshow-slide, [data-slide]"
    );

    const nextButton = slideshow.querySelector(
      ".next-slide, .slide-next, [data-next]"
    );

    const prevButton = slideshow.querySelector(
      ".prev-slide, .slide-prev, [data-prev]"
    );

    const counter = slideshow.querySelector(
      ".slide-counter, .slideshow-counter, [data-counter]"
    );

    if (slides.length > 0) {
      let currentSlide = 0;

      function showSlide(index) {
        currentSlide = (index + slides.length) % slides.length;

        slides.forEach((slide, i) => {
          slide.classList.toggle("active", i === currentSlide);
          slide.setAttribute(
            "aria-hidden",
            String(i !== currentSlide)
          );
        });

        if (counter) {
          counter.textContent =
            `${String(currentSlide + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
        }
      }

      nextButton?.addEventListener("click", () => {
        showSlide(currentSlide + 1);
      });

      prevButton?.addEventListener("click", () => {
        showSlide(currentSlide - 1);
      });

      showSlide(0);
    }
  }

  // REVEAL ANIMATIONS
  const revealItems = document.querySelectorAll(
    ".portfolio-card, .experience-card, .testimonial, .about-content"
  );

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add("visible"));
  }

  // CURRENT YEAR
  const yearElement = document.querySelector("[data-current-year]");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  console.log("Photography portfolio initialized.");
});
