
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

  
  // EDITORIAL SLIDESHOW
  const slideshowSection = document.querySelector(".slideshow-section");

  if (slideshowSection) {
    const slides = slideshowSection.querySelectorAll(".slide");
    const nextButton = slideshowSection.querySelector(".next-slide");
    const prevButton = slideshowSection.querySelector(".prev-slide");
    const counter = slideshowSection.querySelector(".slide-counter");

    if (slides.length > 0) {
      let currentSlide = 0;
      let slideshowTimer;
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      function showSlide(index) {
        currentSlide = (index + slides.length) % slides.length;

        slides.forEach((slide, i) => {
          const isActive = i === currentSlide;

          slide.classList.toggle("active", isActive);
          slide.setAttribute("aria-hidden", String(!isActive));
        });

        if (counter) {
          counter.textContent =
            `${String(currentSlide + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
        }
      }

      function stopAutoplay() {
        clearInterval(slideshowTimer);
      }

      function startAutoplay() {
        stopAutoplay();

        if (reducedMotion || document.hidden) return;

        slideshowTimer = setInterval(() => {
          showSlide(currentSlide + 1);
        }, 5000);
      }

      nextButton?.addEventListener("click", () => {
        showSlide(currentSlide + 1);
        startAutoplay();
      });

      prevButton?.addEventListener("click", () => {
        showSlide(currentSlide - 1);
        startAutoplay();
      });

      // PAUSE WHEN VISITOR HOVERS
      slideshowSection.addEventListener("mouseenter", stopAutoplay);
      slideshowSection.addEventListener("mouseleave", startAutoplay);

      // PAUSE WHEN VISITOR FOCUSES ON CONTROLS
      slideshowSection.addEventListener("focusin", stopAutoplay);
      slideshowSection.addEventListener("focusout", event => {
        if (!slideshowSection.contains(event.relatedTarget)) {
          startAutoplay();
        }
      });

      // PAUSE WHEN TAB IS NOT VISIBLE
      document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
          stopAutoplay();
        } else {
          startAutoplay();
        }
      });

      showSlide(0);
      startAutoplay();
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

/* =====================================
   HERO — REAL 3D MOUSE MOVEMENT
===================================== */

document.addEventListener("DOMContentLoaded", function () {
  const hero = document.querySelector("#hero3D");
  const imageWrap = hero?.querySelector(".hero-image-wrap");

  if (!hero || !imageWrap) return;

  const canHover = window.matchMedia(
    "(hover: hover) and (pointer: fine)"
  );

  if (!canHover.matches) return;

  let animationFrame;

  hero.addEventListener("pointermove", function (event) {
    const rect = hero.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    const rotateY = (x - 0.5) * 9;
    const rotateX = (0.5 - y) * 7;

    cancelAnimationFrame(animationFrame);

    animationFrame = requestAnimationFrame(function () {
      imageWrap.style.transform =
        `scale(1.06) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
  });

  hero.addEventListener("pointerleave", function () {
    cancelAnimationFrame(animationFrame);

    imageWrap.style.transform =
      "scale(1) rotateX(0deg) rotateY(0deg)";
  });
});

/* =====================================
   GALLERY FILTERS + MORE / SHOW LESS
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    const filterButtons = document.querySelectorAll(".gallery-filter");
    const galleryCards = Array.from(
        document.querySelectorAll(".gallery-card")
    );
    const moreButton = document.querySelector(".gallery-more");

    if (!filterButtons.length || !galleryCards.length) return;

    const initialVisibleCount = 9;

    let selectedFilter = "all";
    let showAll = false;

    function updateGallery() {

        const matchingCards = galleryCards.filter(card => {
            const category = card.dataset.category;

            return selectedFilter === "all" ||
                   category === selectedFilter;
        });

        galleryCards.forEach(card => {

            const cardIndex = matchingCards.indexOf(card);

            const shouldShow =
                cardIndex !== -1 &&
                (showAll || cardIndex < initialVisibleCount);

            card.style.display = shouldShow ? "" : "none";
        });

        if (moreButton) {

            const hasMore = matchingCards.length > initialVisibleCount;

            moreButton.style.display =
                hasMore ? "inline-flex" : "none";

            moreButton.innerHTML = showAll
                ? 'SHOW LESS <span>↑</span>'
                : 'MORE <span>→</span>';

            moreButton.setAttribute(
                "aria-expanded",
                String(showAll)
            );
        }
    }

    // CATEGORY FILTERS
    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            selectedFilter = button.dataset.filter;
            showAll = false;

            filterButtons.forEach(item => {
                item.classList.toggle("active", item === button);
            });

            updateGallery();
        });

    });

    // MORE / SHOW LESS TOGGLE
    moreButton?.addEventListener("click", () => {

        showAll = !showAll;

        updateGallery();

    });

    updateGallery();

});


/* =====================================
   GALLERY LIGHTBOX — FULL SCREEN VIEWER
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    const galleryCards = Array.from(
        document.querySelectorAll(".gallery-card")
    );

    if (!galleryCards.length) return;

    // CREATE LIGHTBOX
    const lightbox = document.createElement("div");
    lightbox.className = "gallery-lightbox";
    lightbox.setAttribute("aria-hidden", "true");

    lightbox.innerHTML = `
        <button class="lightbox-close" aria-label="Close">&times;</button>

        <button class="lightbox-arrow lightbox-prev" aria-label="Previous photo">
            &#8592;
        </button>

        <div class="lightbox-content">
            <img class="lightbox-image" src="" alt="">
            <div class="lightbox-counter"></div>
        </div>

        <button class="lightbox-arrow lightbox-next" aria-label="Next photo">
            &#8594;
        </button>
    `;

    document.body.appendChild(lightbox);

    const image = lightbox.querySelector(".lightbox-image");
    const counter = lightbox.querySelector(".lightbox-counter");
    const closeButton = lightbox.querySelector(".lightbox-close");
    const prevButton = lightbox.querySelector(".lightbox-prev");
    const nextButton = lightbox.querySelector(".lightbox-next");

    let currentIndex = 0;
    let visiblePhotos = [];
    let previousOverflow = "";

    function getVisiblePhotos() {
        return galleryCards.filter(card => {
            return card.style.display !== "none";
        });
    }

    function showPhoto(index) {
        visiblePhotos = getVisiblePhotos();

        if (!visiblePhotos.length) return;

        currentIndex = (index + visiblePhotos.length) % visiblePhotos.length;

        const card = visiblePhotos[currentIndex];
        const thumbnail = card.querySelector("img");

        image.src = card.getAttribute("href");
        image.alt = thumbnail ? thumbnail.alt : "Photography";

        counter.textContent =
            `${String(currentIndex + 1).padStart(2, "0")} / ${String(visiblePhotos.length).padStart(2, "0")}`;
    }

    function openLightbox(card) {
        visiblePhotos = getVisiblePhotos();
        currentIndex = visiblePhotos.indexOf(card);

        if (currentIndex < 0) return;

        previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        lightbox.classList.add("active");
        lightbox.setAttribute("aria-hidden", "false");

        showPhoto(currentIndex);
        closeButton.focus();
    }

    function closeLightbox() {
        lightbox.classList.remove("active");
        lightbox.setAttribute("aria-hidden", "true");

        document.body.style.overflow = previousOverflow;
        image.src = "";
    }

    // OPEN PHOTO
    galleryCards.forEach(card => {
        card.addEventListener("click", event => {
            event.preventDefault();
            openLightbox(card);
        });
    });

    // NEXT / PREVIOUS
    nextButton.addEventListener("click", () => {
        showPhoto(currentIndex + 1);
    });

    prevButton.addEventListener("click", () => {
        showPhoto(currentIndex - 1);
    });

    // CLOSE
    closeButton.addEventListener("click", closeLightbox);

    lightbox.addEventListener("click", event => {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    // KEYBOARD CONTROLS
    document.addEventListener("keydown", event => {
        if (!lightbox.classList.contains("active")) return;

        if (event.key === "Escape") {
            closeLightbox();
        }

        if (event.key === "ArrowRight") {
            showPhoto(currentIndex + 1);
        }

        if (event.key === "ArrowLeft") {
            showPhoto(currentIndex - 1);
        }
    });

});
/* =====================================
   BOOKING FORM — WHATSAPP INTEGRATION
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    const bookingForm = document.querySelector("#bookingForm");

    if (!bookingForm) return;

    bookingForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const session = document.querySelector("#session")?.value || "";
        const name = document.querySelector("#clientName")?.value.trim() || "";
        const phone = document.querySelector("#clientPhone")?.value.trim() || "";
        const date = document.querySelector("#preferredDate")?.value || "";
        const message = document.querySelector("#clientMessage")?.value.trim() || "";

        const whatsappNumber = "37491990020";

        const whatsappMessage = `
NEW BOOKING REQUEST — SANDALJYAN STUDIO

Session: ${session}
Client name: ${name}
Phone number: ${phone}
Preferred date: ${date}

Message:
${message}

Please contact the client to confirm availability.
        `.trim();

        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(whatsappURL, "_blank");
    });

});
