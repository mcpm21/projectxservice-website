
/* =====================================
   OBSERVER FRANJAS / ITEMS INTERNOS
=====================================*/
const items = document.querySelectorAll(".reveal-item");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
},{ threshold:0.2 });

items.forEach(el => observer.observe(el));


/* =====================================
   HERO SECUENCIAL
=====================================*/

const hero = document.querySelector(".hero");
const heroSteps = hero ? hero.querySelectorAll(".step-1, .step-2, .step-3, .step-4") : [];

let heroAnimated = false;

function animarHero(){

  if(heroAnimated || !hero) return;

  const top = hero.getBoundingClientRect().top;
  const trigger = window.innerHeight * 0.8;

  if(top < trigger){

    heroAnimated = true;

    heroSteps.forEach((el,index)=>{
      setTimeout(()=>{
        el.classList.add("active");
      }, index * 400);
    });
  }
}

window.addEventListener("scroll", animarHero);
document.addEventListener("DOMContentLoaded", animarHero);


/* =====================================
   PROCESO SECUENCIAL
=====================================*/

const processSteps = [
  document.querySelector(".process .step-1"),
  document.querySelector(".process .step-2"),
  document.querySelector(".process .step-3")
];

let processAnimated = false;

function animarProceso(){

  if(processAnimated) return;

  const section = document.querySelector(".process");
  if(!section) return;

  const top = section.getBoundingClientRect().top;
  const trigger = window.innerHeight * 0.8;

  if(top < trigger){

    processAnimated = true;

    processSteps.forEach((el,index)=>{
      setTimeout(()=>{
        if(el) el.classList.add("active");
      }, index * 350);
    });

  }
}

window.addEventListener("scroll", animarProceso);
window.addEventListener("load", animarProceso);


/* =====================================
   REVEAL NORMAL
=====================================*/
const reveals = document.querySelectorAll(".reveal:not(.step-1):not(.step-2):not(.step-3):not(.step-4)");

function revealOnScroll(){

  const trigger = window.innerHeight * 0.85;

  reveals.forEach(el=>{
    const top = el.getBoundingClientRect().top;

    if(top < trigger){
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


/* =====================================
   SCROLL SUAVE GLOBAL
=====================================*/

document.addEventListener("DOMContentLoaded", function(){

  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {

    link.addEventListener("click", function(e){

      const targetId = this.getAttribute("href");

      if(targetId === "#" || targetId.length < 2) return;

      const target = document.querySelector(targetId);
      if(!target) return;

      e.preventDefault();

      const navbar = document.querySelector(".navbar");
      const navbarHeight = navbar ? navbar.offsetHeight : 0;

      const targetPosition = target.offsetTop - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });

      // Re-dispara animaciones por si acaso
      setTimeout(()=>{
        if(typeof animarHero === "function") animarHero();
        if(typeof animarProceso === "function") animarProceso();
        if(typeof revealOnScroll === "function") revealOnScroll();
      }, 500);

    });

  });

});


/* =====================================
   NAVBAR MOBILE + AUTO CLOSE
=====================================*/

document.addEventListener("DOMContentLoaded", function(){

  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");
  const menuLinks = document.querySelectorAll(".menu a");

  if(!toggle || !menu) return;

  // Abrir / cerrar menú
  toggle.addEventListener("click", function(e){
    e.stopPropagation();
    menu.classList.toggle("active");
  });

  // Cerrar al hacer click en un enlace
  menuLinks.forEach(link => {
    link.addEventListener("click", function(){
      menu.classList.remove("active");
    });
  });

  // Cerrar si se hace click fuera del menú
  document.addEventListener("click", function(e){
    if(!menu.contains(e.target) && !toggle.contains(e.target)){
      menu.classList.remove("active");
    }
  });

  // Cerrar al hacer scroll
  window.addEventListener("scroll", function(){
    menu.classList.remove("active");
  });

});


/* =====================================
   ANIMACIÓN REVEAL
=====================================*/
document.addEventListener("DOMContentLoaded", function() {

    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    reveals.forEach(reveal => {
        observer.observe(reveal);
    });

});


/* =====================================
   ACORDEÓN - FAQ
=====================================*/
document.addEventListener("DOMContentLoaded", function() {

    const faqItems = document.querySelectorAll(".faq-item");

    /* ========================= */
    /* ABRIR PRIMER ITEM AL CARGAR */
    /* ========================= */

    const firstActive = document.querySelector(".faq-item.active");
    if (firstActive) {
        const firstAnswer = firstActive.querySelector(".faq-answer");
        firstAnswer.style.height = firstAnswer.scrollHeight + "px";
    }

    /* ========================= */
    /* ACORDEÓN SUAVE */
    /* ========================= */

    faqItems.forEach(item => {

        const answer = item.querySelector(".faq-answer");

        item.addEventListener("click", () => {

            const isActive = item.classList.contains("active");

            faqItems.forEach(i => {
                i.classList.remove("active");
                i.querySelector(".faq-answer").style.height = 0;
            });

            if (!isActive) {
                item.classList.add("active");
                answer.style.height = answer.scrollHeight + "px";
            }

        });

    });

    /* ========================= */
    /* SCROLL REVEAL */
    /* ========================= */

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("show");
                }, index * 100);
            }
        });
    }, { threshold: 0.15 });

    faqItems.forEach(item => {
        observer.observe(item);
    });

});


/* =====================================
   ANIMACIÓN - READY TO TRANSFORM YOUR SPACE
=====================================*/
document.addEventListener("DOMContentLoaded", function() {

    const elements = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.3
    });

    elements.forEach(el => observer.observe(el));

});


/* =====================================
   ENVÍA A WHATSAPP + ACTIVA TRANSICIÓN - PÁG CONTACTO
=====================================*/
document.addEventListener("DOMContentLoaded", function(){

  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    const phoneNumber = "19542959720"; // <-- Cambiar

    const text = 
`*-> NEW CONTACT REQUEST*
Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}

From Website`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    window.open(whatsappURL, "_blank");

    document.getElementById("formSuccess").classList.add("active");

    form.reset();
  });

});


/* =====================================
   ENVÍA A WHATSAPP + ACTIVA TRANSICIÓN - PÁG PRINCIPAL
=====================================*/
document.addEventListener("DOMContentLoaded", function(){

  const heroForm = document.getElementById("heroForm");

  heroForm.addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("heroName").value.trim();
    const email = document.getElementById("heroEmail").value.trim();
    const phone = document.getElementById("heroPhone").value.trim();
    const message = document.getElementById("heroMessage").value.trim();

    const phoneNumber = "19542959720"; // <-- mismo número que contact

    const text = 
`*-> NEW QUOTE REQUEST*
Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}

From Website`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    window.open(whatsappURL, "_blank");

    document.getElementById("heroSuccess").classList.add("active");

    heroForm.reset();
  });

});


/* =====================================
   ANIMACIÓN REEL CAROUSEL 1 - PROJECTS
=====================================*/
document.addEventListener("DOMContentLoaded", function(){

  const reels = document.querySelectorAll(".reel-carousel");

  reels.forEach(reel => {

    const slides = reel.querySelectorAll(".reel-slide");
    const progressContainer = reel.querySelector(".reel-progress");
    const nextBtn = reel.querySelector(".reel-btn.next");
    const prevBtn = reel.querySelector(".reel-btn.prev");
    const pauseBtn = reel.querySelector(".reel-pause");

    const duration = 5000;

    let current = 0;
    let startTime;
    let remaining = duration;
    let animationFrame;
    let isPaused = false;

    // Generar barras según cantidad de slides
    progressContainer.innerHTML = "";

    slides.forEach(() => {
      const span = document.createElement("span");
      const fill = document.createElement("div");
      span.appendChild(fill);
      progressContainer.appendChild(span);
    });

    const bars = reel.querySelectorAll(".reel-progress span");

    function showSlide(index){
      cancelAnimationFrame(animationFrame);

      slides.forEach(slide => slide.classList.remove("active"));
      slides[index].classList.add("active");

      bars.forEach(bar => bar.firstChild.style.width = "0%");
      remaining = duration;

      if(!isPaused){
        startProgress();
      }
    }

    function startProgress(){
      startTime = performance.now();

      function animate(time){
        const elapsed = time - startTime;
        const progress = Math.min(elapsed / remaining, 1);

        bars[current].firstChild.style.width = (progress * 100) + "%";

        if(progress < 1 && !isPaused){
          animationFrame = requestAnimationFrame(animate);
        } 
        else if(progress >= 1){
          nextSlide();
        }
      }

      animationFrame = requestAnimationFrame(animate);
    }

    function pause(){
      isPaused = true;
      cancelAnimationFrame(animationFrame);

      const computedWidth = parseFloat(bars[current].firstChild.style.width);
      remaining = remaining * (1 - computedWidth / 100);
    }

    function resume(){
      isPaused = false;
      startProgress();
    }

    function nextSlide(){
      current = (current + 1) % slides.length;
      showSlide(current);
    }

    function prevSlide(){
      current = (current - 1 + slides.length) % slides.length;
      showSlide(current);
    }

    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);

    pauseBtn.addEventListener("click", () => {
      if(isPaused){
        pauseBtn.textContent = "❚❚";
        resume();
      } else {
        pauseBtn.textContent = "▶";
        pause();
      }
    });

    showSlide(current);

  });

});


/* =====================================
   ANIMACIÓN LIGHTBOX - PROJECTS
=====================================*/

document.addEventListener("DOMContentLoaded", function(){

  const images = document.querySelectorAll(".project-images img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.querySelector(".lightbox-img");
  const closeBtn = document.querySelector(".lightbox-close");

  images.forEach(img => {
    img.addEventListener("click", function(){
      lightbox.classList.add("active");
      lightboxImg.src = this.src;
    });
  });

  function closeLightbox(){
    lightbox.classList.remove("active");
    lightboxImg.src = "";
  }

  closeBtn.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", function(e){
    if(e.target === lightbox){
      closeLightbox();
    }
  });

  document.addEventListener("keydown", function(e){
    if(e.key === "Escape"){
      closeLightbox();
    }
  });

});


/* =====================================
   ANIMACIÓN REEL CAROUSEL 2 - PROJECTS
=====================================*/
document.addEventListener("DOMContentLoaded", function(){

  const track = document.querySelector(".gallery-track");
  const cards = document.querySelectorAll(".gallery-card");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  let index = 0;

  const cardWidth = cards[0].offsetWidth + 30; // ancho + gap
  const visibleCards = Math.floor(document.querySelector(".gallery-track-wrapper").offsetWidth / cardWidth);

  function updateGallery(){
    track.style.transform = `translateX(-${index * cardWidth}px)`;
  }

  nextBtn.addEventListener("click", function(){
    if(index < cards.length - visibleCards){
      index++;
      updateGallery();
    }
  });

  prevBtn.addEventListener("click", function(){
    if(index > 0){
      index--;
      updateGallery();
    }
  });

});


/* =====================================
   ANIMACIÓN SHOWCASE - PROJECTS
=====================================*/
document.addEventListener("DOMContentLoaded", function(){

  document.querySelectorAll(".project-showcase").forEach(section => {

    const images = section.querySelectorAll(".main-image");
    const thumbs = section.querySelectorAll(".thumb");
    const nextBtn = section.querySelector(".showcase-btn.next");
    const prevBtn = section.querySelector(".showcase-btn.prev");

    let current = 0;
    const intervalTime = 5000;
    let autoSlide = setInterval(nextSlide, intervalTime);

    function showSlide(index){
      images.forEach(img => img.classList.remove("active"));
      thumbs.forEach(thumb => thumb.classList.remove("active"));

      images[index].classList.add("active");
      thumbs[index].classList.add("active");

      current = index;
    }

    function nextSlide(){
      current = (current + 1) % images.length;
      showSlide(current);
    }

    function prevSlide(){
      current = (current - 1 + images.length) % images.length;
      showSlide(current);
    }

    nextBtn.addEventListener("click", () => {
      nextSlide();
      resetInterval();
    });

    prevBtn.addEventListener("click", () => {
      prevSlide();
      resetInterval();
    });

    thumbs.forEach(thumb => {
      thumb.addEventListener("click", function(){
        showSlide(parseInt(this.dataset.index));
        resetInterval();
      });
    });

    function resetInterval(){
      clearInterval(autoSlide);
      autoSlide = setInterval(nextSlide, intervalTime);
    }

  });

});


/* =====================================
   ANIMACIÓN GRID - WORKSITE SAFETY - PROJECTS
=====================================*/
const images = document.querySelectorAll('.project-safety .lightbox2-trigger');
const lightbox = document.querySelector('.custom-lightbox2');
const lightboxImg = document.querySelector('.lightbox2-image');
const closeBtn = document.querySelector('.lightbox2-close');
const prevBtn = document.querySelector('.lightbox2-prev');
const nextBtn = document.querySelector('.lightbox2-next');

let currentIndex = 0;

images.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    showImage();
    lightbox.classList.add('active');
  });
});

function showImage(){
  lightboxImg.src = images[currentIndex].src;
}

closeBtn.addEventListener('click', () => {
  lightbox.classList.remove('active');
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage();
});

lightbox.addEventListener('click', (e) => {
  if(e.target === lightbox){
    lightbox.classList.remove('active');
  }
});

document.addEventListener('keydown', (e) => {
  if(!lightbox.classList.contains('active')) return;

  if(e.key === 'ArrowRight'){
    nextBtn.click();
  }
  if(e.key === 'ArrowLeft'){
    prevBtn.click();
  }
  if(e.key === 'Escape'){
    lightbox.classList.remove('active');
  }
});


/* =====================================
   ANIMACIÓN LAYOUT - CONEXIÓN ELÉCTRICA - PROJECTS
=====================================*/
document.addEventListener('DOMContentLoaded', function(){

  const mainImage = document.getElementById('electricalMainImage');
  const thumbs = document.querySelectorAll('.electrical-thumb');
  const prevBtn = document.querySelector('.electrical-prev');
  const nextBtn = document.querySelector('.electrical-next');

  let currentIndex = 0;
  let autoSlide;

  function showImage(index){
    mainImage.src = thumbs[index].src;

    thumbs.forEach(t => t.classList.remove('active'));
    thumbs[index].classList.add('active');

    currentIndex = index;
  }

  function nextImage(){
    currentIndex = (currentIndex + 1) % thumbs.length;
    showImage(currentIndex);
  }

  function prevImage(){
    currentIndex = (currentIndex - 1 + thumbs.length) % thumbs.length;
    showImage(currentIndex);
  }

  thumbs.forEach((thumb, index) => {
    thumb.addEventListener('click', function(){
      showImage(index);
      resetAutoSlide();
    });
  });

  nextBtn.addEventListener('click', function(){
    nextImage();
    resetAutoSlide();
  });

  prevBtn.addEventListener('click', function(){
    prevImage();
    resetAutoSlide();
  });

  function startAutoSlide(){
    autoSlide = setInterval(nextImage, 4000);
  }

  function resetAutoSlide(){
    clearInterval(autoSlide);
    startAutoSlide();
  }

  showImage(0);
  startAutoSlide();

});


/* =====================================
   BATTERY INSTALLATION - PROJECTS
=====================================*/
const batteryMainImage = document.getElementById("batteryMainImage");
const batteryThumbs = document.querySelectorAll(".battery-thumb");
const batteryPrev = document.querySelector(".battery-prev");
const batteryNext = document.querySelector(".battery-next");

let batteryIndex = 0;

function updateBatteryImage(index){
  batteryMainImage.src = batteryThumbs[index].src;
  batteryThumbs.forEach(img => img.classList.remove("active"));
  batteryThumbs[index].classList.add("active");
}

batteryThumbs.forEach((thumb, index)=>{
  thumb.addEventListener("click", ()=>{
    batteryIndex = index;
    updateBatteryImage(batteryIndex);
  });
});

batteryNext.addEventListener("click", ()=>{
  batteryIndex = (batteryIndex + 1) % batteryThumbs.length;
  updateBatteryImage(batteryIndex);
});

batteryPrev.addEventListener("click", ()=>{
  batteryIndex = (batteryIndex - 1 + batteryThumbs.length) % batteryThumbs.length;
  updateBatteryImage(batteryIndex);
});