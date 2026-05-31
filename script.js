/* ==================================================
   VERSION 3
   THE INVITATION SUITE
================================================== */
/* ==========================
ELEMENTS
========================== */
const introScreen =
document.getElementById(
    "intro-screen"
);
const mainSite =
document.getElementById(
    "mainSite"
);
const openInvitation =
document.getElementById(
    "openInvitation"
);
const themeToggle =
document.getElementById(
    "themeToggle"
);
/* ==========================
OPEN INVITATION
========================== */
if(openInvitation){
    openInvitation.addEventListener(
        "click",
        () => {
            const seal =
            document.querySelector(
                ".wax-seal"
            );
            if(seal){
                seal.style.transform =
                "scale(.9)";
            }
            introScreen.style.transition =
            "opacity 1s ease";
            introScreen.style.opacity =
            "0";
            setTimeout(() => {
                introScreen.style.display =
                "none";
                mainSite.style.display =
                "block";
                window.scrollTo(
                    0,
                    0
                );
            },1000);
        }
    );
}
/* ==========================
DARK MODE
========================== */
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
            const darkMode =
            document.body.classList.contains(
                "dark"
            );
            if(darkMode){
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
SMOOTH NAVIGATION
========================== */
document
.querySelectorAll(
'.main-nav a'
)
.forEach(link=>{
link.addEventListener(
'click',
function(e){
e.preventDefault();
const target =
document.querySelector(
this.getAttribute(
'href'
)
);
if(target){
target.scrollIntoView({
behavior:
'smooth'
});
}
});
});
/* ==========================
COUNTDOWN HELPERS
========================== */
function calculateCountdown(
targetDate
){
const now =
new Date().getTime();
const difference =
targetDate - now;
if(difference <= 0){
return {
days: 0,
hours: 0,
minutes: 0,
seconds: 0
};
}
return {
days:
Math.floor(
difference /
(1000*60*60*24)
),
hours:
Math.floor(
(difference %
(1000*60*60*24))
/
(1000*60*60)
),
minutes:
Math.floor(
(difference %
(1000*60*60))
/
(1000*60)
),
seconds:
Math.floor(
(difference %
(1000*60))
/
1000
)
};
}
/* ==========================
UPDATE COUNTDOWN
========================== */
const weddingDate =
new Date(
"August 20, 2026 16:00:00"
).getTime();
const rsvpDate =
new Date(
"June 30, 2026 23:59:59"
).getTime();
function renderCountdown(){
const wedding =
calculateCountdown(
weddingDate
);
const rsvp =
calculateCountdown(
rsvpDate
);
const weddingBox =
document.getElementById(
"weddingCountdown"
);
const rsvpBox =
document.getElementById(
"rsvpCountdown"
);
if(weddingBox){
weddingBox.innerHTML =
`
<div>
<span class="count-number">
${wedding.days}
</span>
<small>Days</small>
</div>
<div>
<span class="count-number">
${wedding.hours}
</span>
<small>Hours</small>
</div>
<div>
<span class="count-number">
${wedding.minutes}
</span>
<small>Minutes</small>
</div>
<div>
<span class="count-number">
${wedding.seconds}
</span>
<small>Seconds</small>
</div>
`;
}
if(rsvpBox){
rsvpBox.innerHTML =
`
<div>
<span class="count-number">
${rsvp.days}
</span>
<small>Days</small>
</div>
<div>
<span class="count-number">
${rsvp.hours}
</span>
<small>Hours</small>
</div>
<div>
<span class="count-number">
${rsvp.minutes}
</span>
<small>Minutes</small>
</div>
<div>
<span class="count-number">
${rsvp.seconds}
</span>
<small>Seconds</small>
</div>
`;
}
}
renderCountdown();
setInterval(
renderCountdown,
1000
);
/* ==========================
SCROLL REVEAL
========================== */
const revealElements =
document.querySelectorAll(
'.hero-content,\
.countdown-section,\
.itinerary-section,\
.details-board,\
.venue-section,\
.story-section,\
.rsvp-section'
);
const observer =
new IntersectionObserver(
(entries)=>{
entries.forEach(
entry=>{
if(
entry.isIntersecting
){
entry.target.classList.add(
'reveal-active'
);
}
}
);
},
{
threshold: .15
}
);
revealElements.forEach(
element=>{
element.classList.add(
'reveal'
);
observer.observe(
element
);
}
);
/* ==========================
ACTIVE NAV
========================== */
const sections =
document.querySelectorAll(
'section[id]'
);
const navLinks =
document.querySelectorAll(
'.main-nav a'
);
window.addEventListener(
'scroll',
()=>{
let current =
'';
sections.forEach(
section=>{
const top =
section.offsetTop;
const height =
section.offsetHeight;
if(
window.scrollY >=
top - 150
){
current =
section.getAttribute(
'id'
);
}
});
navLinks.forEach(
link=>{
link.classList.remove(
'active-link'
);
if(
link.getAttribute(
'href'
) ===
'#' + current
){
link.classList.add(
'active-link'
);
}
});
}
);
/* ==========================
PAGE LOAD
========================== */
window.addEventListener(
'load',
()=>{
document.body.classList.add(
'loaded'
);
}
);
