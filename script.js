/* ===================================
   OPEN INVITATION
=================================== */
const introScreen = document.getElementById("intro-screen");
const mainSite = document.getElementById("mainSite");
const openButton = document.getElementById("openInvitation");
if (openButton) {
    openButton.addEventListener("click", () => {
        introScreen.style.opacity = "0";
        setTimeout(() => {
            introScreen.style.display = "none";
            mainSite.style.display = "block";
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }, 800);
    });
}
/* ===================================
   DARK / LIGHT MODE
=================================== */
const themeToggle = document.getElementById("themeToggle");
let currentTheme =
    localStorage.getItem("theme") || "light";
if (currentTheme === "dark") {
    document.body.classList.add("dark");
    if (themeToggle) {
        themeToggle.innerText = "Light Mode";
    }
}
if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        const isDark =
            document.body.classList.contains("dark");
        if (isDark) {
            localStorage.setItem("theme", "dark");
            themeToggle.innerText = "Light Mode";
        } else {
            localStorage.setItem("theme", "light");
            themeToggle.innerText = "Dark Mode";
        }
    });
}
/* ===================================
   RSVP COUNTDOWN
=================================== */
const rsvpTarget =
    new Date("June 30, 2026 23:59:59").getTime();
const weddingTarget =
    new Date("August 20, 2026 16:00:00").getTime();
function updateCountdowns() {
    const now = new Date().getTime();
    /* RSVP */
    const rsvpDistance =
        rsvpTarget - now;
    const rsvpDays =
        Math.floor(
            rsvpDistance /
            (1000 * 60 * 60 * 24)
        );
    const rsvpHours =
        Math.floor(
            (rsvpDistance %
                (1000 * 60 * 60 * 24))
            /
            (1000 * 60 * 60)
        );
    const rsvpElement =
        document.getElementById(
            "rsvpCountdown"
        );
    if (rsvpElement) {
        rsvpElement.innerHTML =
            `${rsvpDays} Days<br>${rsvpHours} Hours`;
    }
    /* WEDDING */
    const weddingDistance =
        weddingTarget - now;
    const weddingDays =
        Math.floor(
            weddingDistance /
            (1000 * 60 * 60 * 24)
        );
    const weddingHours =
        Math.floor(
            (weddingDistance %
                (1000 * 60 * 60 * 24))
            /
            (1000 * 60 * 60)
        );
    const weddingElement =
        document.getElementById(
            "weddingCountdown"
        );
    if (weddingElement) {
        weddingElement.innerHTML =
            `${weddingDays} Days<br>${weddingHours} Hours`;
    }
}
updateCountdowns();
setInterval(
    updateCountdowns,
    1000
);
/* ===================================
   SCROLL REVEAL
=================================== */
const revealElements =
    document.querySelectorAll(".reveal");
const revealObserver =
    new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(
                        "active"
                    );
                }
            });
        },
        {
            threshold: 0.15
        }
    );
revealElements.forEach(element => {
    revealObserver.observe(element);
});
/* ===================================
   GALLERY LIGHTBOX
=================================== */
const galleryImages =
    document.querySelectorAll(
        ".gallery img"
    );
const lightbox =
    document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);
galleryImages.forEach(image => {
    image.addEventListener("click", () => {
        lightbox.classList.add("active");
        const img =
            document.createElement("img");
        img.src = image.src;
        while (lightbox.firstChild) {
            lightbox.removeChild(
                lightbox.firstChild
            );
        }
        lightbox.appendChild(img);
    });
});
lightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
});
/* ===================================
   ADD LIGHTBOX STYLING
=================================== */
const lightboxStyles =
    document.createElement("style");
lightboxStyles.innerHTML = `
#lightbox{
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:
rgba(0,0,0,.9);
display:none;
justify-content:center;
align-items:center;
z-index:99999;
cursor:pointer;
}
#lightbox.active{
display:flex;
}
#lightbox img{
max-width:90%;
max-height:90%;
object-fit:contain;
box-shadow:
0 20px 80px
rgba(0,0,0,.4);
}
`;
document.head.appendChild(
    lightboxStyles
);
/* ===================================
   HERO PARALLAX
=================================== */
window.addEventListener(
    "scroll",
    () => {
        const hero =
            document.querySelector(
                ".hero"
            );
        if (!hero) return;
        const scrollY =
            window.scrollY;
        hero.style.backgroundPosition =
            `center ${scrollY * 0.4}px`;
    }
);
/* ===================================
   ELEGANT PAGE LOADER
=================================== */
window.addEventListener(
    "load",
    () => {
        document.body.classList.add(
            "loaded"
        );
    }
);
