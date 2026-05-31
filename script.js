/* ==================================================
   VOGUE EDITORIAL WEDDING WEBSITE
   VERSION 2
================================================== */
/* ==========================
OPEN INVITATION
========================== */
const introScreen =
document.getElementById(
    "intro-screen"
);
const mainSite =
document.getElementById(
    "mainSite"
);
const openButton =
document.getElementById(
    "openInvitation"
);
if(openButton){
    openButton.addEventListener(
        "click",
        () => {
            introScreen.style.transition =
            "opacity 1s ease";
            introScreen.style.opacity =
            "0";
            setTimeout(() => {
                introScreen.style.display =
                "none";
                mainSite.style.display =
                "block";
                document.body.classList.add(
                    "loaded"
                );
            },1000);
        }
    );
}
/* ==========================
DARK MODE
========================== */
const themeToggle =
document.getElementById(
    "themeToggle"
);
const savedTheme =
localStorage.getItem(
    "theme"
);
if(savedTheme === "dark"){
    document.body.classList.add(
        "dark"
    );
    if(themeToggle){
        themeToggle.innerText =
        "LIGHT MODE";
    }
}
if(themeToggle){
    themeToggle.addEventListener(
        "click",
        () => {
            document.body.classList.toggle(
                "dark"
            );
            const isDark =
            document.body.classList.contains(
                "dark"
            );
            if(isDark){
                localStorage.setItem(
                    "theme",
                    "dark"
                );
                themeToggle.innerText =
                "LIGHT MODE";
            }else{
                localStorage.setItem(
                    "theme",
                    "light"
                );
                themeToggle.innerText =
                "DARK MODE";
            }
        }
    );
}
/* ==========================
COUNTDOWNS
========================== */
const weddingDate =
new Date(
"August 20, 2026 16:00:00"
).getTime();
const rsvpDate =
new Date(
"June 30, 2026 23:59:59"
).getTime();
function updateCountdown(){
    const now =
    new Date().getTime();
    const weddingDiff =
    weddingDate - now;
    const rsvpDiff =
    rsvpDate - now;
    const weddingDays =
    Math.floor(
        weddingDiff /
        (1000*60*60*24)
    );
    const rsvpDays =
    Math.floor(
        rsvpDiff /
        (1000*60*60*24)
    );
    const weddingEl =
    document.getElementById(
        "weddingCountdown"
    );
    const rsvpEl =
    document.getElementById(
        "rsvpCountdown"
    );
    if(weddingEl){
        weddingEl.innerHTML =
        `${weddingDays} DAYS`;
    }
    if(rsvpEl){
        rsvpEl.innerHTML =
        `${rsvpDays} DAYS`;
    }
}
updateCountdown();
setInterval(
    updateCountdown,
    1000
);
/* ==========================
SCROLL REVEAL
========================== */
const revealElements =
document.querySelectorAll(
    ".reveal"
);
const revealObserver =
new IntersectionObserver(
(entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add(
"active"
);
}
});
},
{
threshold:0.15
}
);
revealElements.forEach(
item=>{
revealObserver.observe(
item
);
}
);
/* ==========================
LIGHTBOX
========================== */
const galleryImages =
document.querySelectorAll(
".gallery-grid img"
);
const lightbox =
document.createElement(
"div"
);
lightbox.id =
"lightbox";
document.body.appendChild(
lightbox
);
galleryImages.forEach(
img=>{
img.addEventListener(
"click",
()=>{
lightbox.classList.add(
"active"
);
const image =
document.createElement(
"img"
);
image.src =
img.src;
while(
lightbox.firstChild
){
lightbox.removeChild(
lightbox.firstChild
);
}
lightbox.appendChild(
image
);
}
);
}
);
lightbox.addEventListener(
"click",
()=>{
lightbox.classList.remove(
"active"
);
}
);
/* ==========================
ACTIVE NAVIGATION
========================== */
const sections =
document.querySelectorAll(
"section[id]"
);
const navLinks =
document.querySelectorAll(
".floating-nav a"
);
window.addEventListener(
"scroll",
()=>{
let current = "";
sections.forEach(
section=>{
const sectionTop =
section.offsetTop;
const sectionHeight =
section.clientHeight;
if(
pageYOffset >=
sectionTop -
sectionHeight / 3
){
current =
section.getAttribute(
"id"
);
}
}
);
navLinks.forEach(
link=>{
link.classList.remove(
"active-link"
);
if(
link.getAttribute(
"href"
) ===
"#" + current
){
link.classList.add(
"active-link"
);
}
}
);
}
);
/* ==========================
SMOOTH SCROLL
========================== */
navLinks.forEach(
link=>{
link.addEventListener(
"click",
(e)=>{
e.preventDefault();
const target =
document.querySelector(
link.getAttribute(
"href"
)
);
if(target){
target.scrollIntoView({
behavior:
"smooth"
});
}
}
);
}
);
/* ==========================
PARALLAX HERO
========================== */
window.addEventListener(
"scroll",
()=>{
const heroImage =
document.querySelector(
".hero-right img"
);
if(!heroImage) return;
const scrollY =
window.scrollY;
heroImage.style.transform =
`scale(1.08)
translateY(
${scrollY * 0.05}px
)`;
}
);
/* ==========================
SEQUENTIAL HERO REVEAL
========================== */
window.addEventListener(
"load",
()=>{
const heroElements = [
".hero-monogram",
".hero-overline",
".hero-title",
".hero-date",
".hero-tagline",
".hero-button"
];
heroElements.forEach(
(selector,index)=>{
const element =
document.querySelector(
selector
);
if(element){
element.style.opacity =
"0";
element.style.transform =
"translateY(20px)";
setTimeout(()=>{
element.style.transition =
"1.2s ease";
element.style.opacity =
"1";
element.style.transform =
"translateY(0)";
},300 * index);
}
}
);
}
);
/* ==========================
PAGE LOADED
========================== */
window.addEventListener(
"load",
()=>{
document.body.classList.add(
"page-loaded"
);
}
);
