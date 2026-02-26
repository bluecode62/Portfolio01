const btn = document.querySelector(".nextBtn");
const list01 = document.querySelector(".list01");
const list02 = document.querySelector(".list02");

let isSecond = false;

btn.addEventListener("click", () => {
  if (!isSecond) {
    list01.classList.add("out");
    list02.classList.add("in");

    setTimeout(() => {
      list01.classList.remove("out", "active");
      list02.classList.remove("in");
      list02.classList.add("active");
    }, 700);

    btn.classList.replace("fa-chevron-right", "fa-chevron-left");

    isSecond = true;
  } else {
    list02.classList.add("out");
    list01.classList.add("in");

    setTimeout(() => {
      list02.classList.remove("out", "active");
      list01.classList.remove("in");
      list01.classList.add("active");
    }, 700);

    btn.classList.replace("fa-chevron-left", "fa-chevron-right");

    isSecond = false;
  }
});

const sail = document.getElementById("sail");
sail.addEventListener("click", () => {
  const header = document.getElementById("header");
  header.scrollIntoView({ behavior: "smooth" });
});

document.querySelectorAll(".topBtn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetId = btn.dataset.target;
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".fishline",
  { scaleY: 0, transformOrigin: "top" },
  {
    scaleY: 1,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".about",
      start: "top 90%",
      toggleActions: "play none none reverse",
    },
  },
);

gsap.fromTo(
  ".sail",
  { y: -280, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    duration: 1.5,
    delay: 0.5,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".about",
      start: "top 90%",
      toggleActions: "play none none reverse",
    },
  },
);

gsap.fromTo(
  ".topBtn",
  { y: -40, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    stagger: 0.2,
    duration: 0.6,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".about",
      start: "top 60%",
      toggleActions: "play none none reverse",
    },
  },
);

let aboutTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".about",
    start: "top 80%",
    end: "bottom 10%",
    scrub: 1.5,
  },
});

aboutTL
  .fromTo(
    ".about .aboutBox",
    {
      clipPath: "circle(0% at 50% 50%)",
      scale: 0.95,
      opacity: 0,
    },
    {
      clipPath: "circle(140% at 50% 50%)",
      scale: 1.05,
      opacity: 1,
      ease: "none",
      duration: 0.3,
    },
  )
  .to(".about .aboutBox", {
    scale: 0.98,
    duration: 0.2,
    ease: "none",
  })
  .to(".about .aboutBox", {
    scale: 1,
    duration: 0.2,
    ease: "none",
  })
  .to(".about .aboutBox", {
    clipPath: "circle(0% at 50% 50%)",
    opacity: 0,
    scale: 0.95,
    ease: "none",
    duration: 0.4,
  });

let skillsTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".skills",
    start: "top 80%",
    end: "bottom 20%",
    scrub: 1.5,
  },
});

skillsTL
  .fromTo(
    ".skills .inner",
    {
      clipPath: "circle(0% at 50% 50%)",
      opacity: 0,
      scale: 0.95,
    },
    {
      clipPath: "circle(140% at 50% 50%)",
      opacity: 1,
      scale: 1,
      ease: "none",
      duration: 0.5,
    },
  )
  .to(".skills .inner", {
    clipPath: "circle(0% at 50% 50%)",
    opacity: 0,
    scale: 0.95,
    ease: "none",
    duration: 0.5,
  });

let projectsTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".projects",
    start: "top 75%",
    end: "bottom 10%",
    scrub: 1,
  },
});

projectsTL
  .fromTo(
    ".projects .projectsBox",
    {
      y: 40,
      opacity: 0,
      filter: "blur(10px)",
    },
    {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      duration: 0.25,
      ease: "none",
    },
  )

  .to(".projects .projectsBox", {
    opacity: 1,
    duration: 0.5,
  })

  .to(".projects .projectsBox", {
    y: -40,
    opacity: 0,
    filter: "blur(15px)",
    duration: 0.25,
    ease: "none",
  });

gsap.to(".contact h1", {
  y: -8,
  duration: 2.5,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});

gsap.to(".contact p", {
  y: -6,
  duration: 3,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
  delay: 0.5,
});

// gsap.fromTo(".whale",
//   { x: "-20vw", y: "20vh", rotate: 0, opacity: 0, scale: 0.5 },
//   {
//     x: "-40vw",
//     y: "20vh",
//     rotate: -45,
//     opacity: 1,
//     scale: 1,
//     scrollTrigger: {
//       trigger: ".skills",
//       start: "top 70%", // 화면 하단에 skills가 닿으면 시작
//       end: "bottom 70%", // 섹션 중간 정도에 도달하면 끝
//       scrub: 1.0
//     }
//   }
// );

gsap.set(".whale01", {
  x: 0,
  y: "-40vh",
  scale: 0.8,
  rotate: -60,
  opacity: 0,
});

gsap.to(".whale01", {
  y: "0vh",
  opacity: 1,
  scale: 1,
  rotate: -40,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".skills",
    start: "top 20%",
    toggleActions: "play none none reverse",
  },
});

// 2️⃣ 유영 + 퇴장
let swim = gsap.timeline({
  scrollTrigger: {
    trigger: ".skills",
    start: "top 30%",
    end: "bottom 90%", // 섹션 끝까지
    scrub: 1.2,
  },
});

// 유영 (섹션 대부분)
swim
  .to(".whale01", {
    x: "2vw",
    y: "10vh",
    rotate: -40,
    duration: 7,
    ease: "sine.inOut",
  })

  .to(".whale01", {
    x: "-50vw", // 화면 왼쪽 밖으로 충분히 이동
    y: "25vh", // 살짝 위로 떠서 자연스러운 헤엄 느낌
    rotate: 70, // 꼬리 회전
    ease: "sine.inOut",
  });


gsap.set(".whale02", {
  x: "75vw",     // 오른쪽 끝
  y: "-20vh",    // 화면 위쪽
  scale: 1,
  rotate: 40,
  scaleX: -1,    // 좌우반전
  opacity: 0,    // 등장 전에는 안 보이게
});

// 2️⃣ 타임라인으로 등장 → 유영 → 퇴장
let whaleTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".projects",
    start: "top 20%",      // 스크롤 초반에 등장
    end: "bottom bottom",   // 프로젝트 끝까지
    scrub: 1.5,            // 스크롤에 맞춰 천천히
  }
});

// 등장
whaleTimeline.to(".whale02", {
  y: "10vh",
  opacity: 1,
  rotate: 50,
  scaleX: -1,  
  ease: "power1.out",
  duration: 3,
});

// 천천히 화면 안쪽으로 유영
whaleTimeline.to(".whale02", {
  x: "80vw",
  y: "50vh",
  rotate: 20,
  scaleX: -1,  
  ease: "power1.out",
  duration: 9,
});

// 오른쪽 화면 밖으로 퇴장
whaleTimeline.to(".whale02", {
  x: "120vw",
  y: "70vh",
  rotate: 30,
  ease: "power1.out",
  duration: 3,
});

gsap.set(".whale03", {
  x: "110vw",      // 오른쪽 화면 밖
  y: "-30vh",      // 위쪽 화면 밖
  scale: 1,
  rotate: 50,
  scaleX: -1,      // 좌우반전
  opacity: 0,
});

// 2️⃣ 타임라인으로 곡선 유영
let contactTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".contact",
    start: "top 30%",     // contact 영역이 화면에 나타날 때 시작
    end: "bottom bottom", // contact 영역 끝까지
    scrub: 5,           // 스크롤 속도에 맞춰 자연스럽게
  }
});

// 등장 + 바닥 아래까지 곡선 이동
contactTimeline.to(".whale03", {
  x: "80vw",
  y: "40vh",       
  opacity: 1,
  rotate: -40,      
  ease: "sine.out",
  duration: 3,
});

// 잠시 멈추는 느낌
contactTimeline.to(".whale03", {
  x: "20vw",
  y: "40vh",
  rotate: 40,
  ease: "sine.out",
  duration: 3,
});

// 다시 위로 올라가면서 왼쪽 위 스크린 안으로 이동
contactTimeline.to(".whale03", {
  x: "-10vw",   // 왼쪽 화면 밖에서 스크린 안으로
  y: "-60vh",
  rotate: 70,  // 위로 향하는 방향
  ease: "power3.out",
  duration: 3,
});

