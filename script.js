let lastScrollTop = 0;
const header = document.querySelector("header");
const timeText = document.querySelector(".time");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }

  lastScrollTop = scrollTop;
});

const now = new Date();
const jakartaTime = now.toLocaleString("en-US", { timeZone: "Asia/Jakarta" });
const [date, time] = jakartaTime.split(", ");
timeText.textContent = `${time} GMT+7`;

const yearText = document.getElementById("year");
yearText.textContent = new Date().getFullYear();

// Intersection Observer
document.addEventListener("DOMContentLoaded", function () {
  const elementsToAnimate = document.querySelectorAll(".animate-on-scroll");

  const observerOptions = {
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  elementsToAnimate.forEach((element) => {
    observer.observe(element);
  });
});
