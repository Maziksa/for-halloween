(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();function p(o,e,r){const a=`
    <section class="hero" ${r?'dir="rtl"':""}>
      <header class="header">
        <nav class="nav">
          ${r?`
            <button class="reservation-btn">${e.reservation}</button>
            <span id="changeLang">${e.languageToggle}</span>
            <ul class="nav-list">
              <li><a href="#">${e.home}</a></li>
              <li><a href="#">${e.gallery}</a></li>
              <li><a href="#">${e.aboutParty}</a></li>
              <li><a href="#">${e.contacts}</a></li>
            </ul>
            <div class="logo">${e.partyTime}</div>
          `:`
            <div class="logo">${e.partyTime}</div>
            <ul class="nav-list">
              <li><a href="#">${e.home}</a></li>
              <li><a href="#">${e.gallery}</a></li>
              <li><a href="#">${e.aboutParty}</a></li>
              <li><a href="#">${e.contacts}</a></li>
            </ul>
            <div class="nav-right">
              <span id="changeLang">${e.languageToggle}</span>
              <button class="reservation-btn">${e.reservation}</button>
            </div>
          `}
        </nav>
      </header>
      <div class="hero-content">
        <div class="date-badge">
          <img src="/assets/images/calendar.png" alt="Calendar">
          <span>${e.reservationDate}</span>
        </div>
        <h1>${e.halloweenPartyTitle}</h1>
      </div>
    </section>
  `;o.innerHTML+=a}function u(o,e,r){const a=document.createElement("section");a.className="gallery",r&&a.setAttribute("dir","rtl");const t=document.createElement("h2");t.textContent=e.galleryTitle,a.appendChild(t);const n=document.createElement("div");n.className="gallery-grid",["img1.png","img2.png","img3.png","img4.png","img5.png","img6.png","img7.png","img8.png","img9.png","img10.png"].forEach(l=>{const s=document.createElement("div");s.className="gallery-item";const c=document.createElement("img");c.src=`/assets/images/${l}`,c.alt="Halloween memory",s.appendChild(c),n.appendChild(s)}),a.appendChild(n),o.appendChild(a)}const h=[{href:"https://www.behance.net",icon:"assets/images/behance.png",alt:"Behance"},{href:"https://www.figma.com",icon:"assets/images/figma.png",alt:"Figma"},{href:"https://www.linkedin.com",icon:"assets/images/linkedin.png",alt:"Linkedin"},{href:"https://www.instagram.com",icon:"assets/images/instagram.png",alt:"Instagram"},{href:"https://www.youtube.com",icon:"assets/images/youtube.png",alt:"Youtube"}];function f(o,e,r){const a=document.getElementById("footer-template");if(!a){console.error("Footer template not found!");return}const t=a.content.cloneNode(!0),n=t.querySelector(".footer");r&&n.setAttribute("dir","rtl");const i=n.querySelector(".footer-phone");i&&(i.textContent=e.phoneText);const l=n.querySelector(".social-list");l&&h.forEach(s=>{const c=document.createElement("li"),g=document.createElement("a"),d=document.createElement("img");g.href=s.href,d.src=s.icon,d.alt=s.alt,g.appendChild(d),c.appendChild(g),l.appendChild(c)}),o.appendChild(t)}const y={switchLang:"Switch Lang",partyTime:"Party Time!",home:"Home",gallery:"Gallery",aboutParty:"About Party",reservation:"Reservation",contacts:"Contacts",reservationDate:"31 October 2023",halloweenPartyTitle:"It's Halloween Party O'Clock!",galleryTitle:"Halloween Memories",phoneText:"Phone Reservation? (+1) 987 46 52",languageToggle:"عرب EN"},L={switchLang:"تبديل اللغة",partyTime:"پارتی تایم",home:"الصفحة الرئيسية",gallery:"المعرض",aboutParty:"حول الحفلة",reservation:"الحجز",contacts:"الاتصال",reservationDate:"31 أكتوبر 2023",halloweenPartyTitle:"حان وقت حفلة الهالوين!",galleryTitle:"ذكريات الهالوين",phoneText:"رزرو تلفنی؟  987 46 52  (+1)  ",languageToggle:"عرب EN"},v={en:y,ar:L},w="Loading...",T="changeLang";function E(o){return new Promise(e=>setTimeout(()=>e(v[o]),300))}let b="en";async function m(o){const e=document.getElementById("app");if(!e){console.error("App container not found");return}try{e.innerHTML=w;const r=await E(o);e.innerHTML="";const a=o==="ar";p(e,r,a),u(e,r,a),f(e,r,a),$(o)}catch(r){console.error("Failed to initialize page:",r),e.innerHTML="Error loading page content"}}function $(o){const e=document.getElementById(T);e&&e.addEventListener("click",()=>{m(o==="en"?"ar":"en")})}document.addEventListener("DOMContentLoaded",()=>{m(b)});
