```javascript
/* ======================================
   OPEN INVITATION
====================================== */

const openBtn =
document.getElementById(
    "openInvitation"
);

const introScreen =
document.getElementById(
    "intro-screen"
);

const mainSite =
document.getElementById(
    "mainSite"
);

if (openBtn) {

    openBtn.addEventListener(
        "click",
        () => {

            introScreen.style.opacity = "0";

            setTimeout(() => {

                introScreen.style.display =
                "none";

                mainSite.style.display =
                "block";

                window.scrollTo({
                    top: 0,
                    behavior: "instant"
                });

            }, 600);

        }
    );

}

/* ======================================
   THEME TOGGLE
====================================== */

const themeToggle =
document.getElementById(
    "themeToggle"
);

const savedTheme =
localStorage.getItem(
    "theme"
);

if (savedTheme === "dark") {

    document.body.classList.add(
        "dark"
    );

    if (themeToggle) {

        themeToggle.textContent =
        "LIGHT MODE";

    }

}

if (themeToggle) {

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

            localStorage.setItem(
                "theme",
                darkMode
                ? "dark"
                : "light"
            );

            themeToggle.textContent =
            darkMode
            ? "LIGHT MODE"
            : "DARK MODE";

        }
    );

}

/* ======================================
   COUNTDOWNS
====================================== */

const weddingDate =
new Date(
    "August 20, 2026 16:00:00"
);

const rsvpDeadline =
new Date(
    "June 30, 2026 23:59:59"
);

function createCountdownHTML(
    days,
    hours,
    minutes,
    seconds
) {

    return `
        <div>
            <span class="count-number">
                ${days}
            </span>
            <small>Days</small>
        </div>

        <div>
            <span class="count-number">
                ${hours}
            </span>
            <small>Hours</small>
        </div>

        <div>
            <span class="count-number">
                ${minutes}
            </span>
            <small>Minutes</small>
        </div>

        <div>
            <span class="count-number">
                ${seconds}
            </span>
            <small>Seconds</small>
        </div>
    `;

}

function updateCountdown(
    targetDate,
    containerId
) {

    const now =
    new Date();

    const diff =
    targetDate - now;

    const container =
    document.getElementById(
        containerId
    );

    if (
        !container ||
        diff <= 0
    ) {

        return;

    }

    const days =
    Math.floor(
        diff /
        (1000 * 60 * 60 * 24)
    );

    const hours =
    Math.floor(
        (diff %
        (1000 * 60 * 60 * 24))
        /
        (1000 * 60 * 60)
    );

    const minutes =
    Math.floor(
        (diff %
        (1000 * 60 * 60))
        /
        (1000 * 60)
    );

    const seconds =
    Math.floor(
        (diff %
        (1000 * 60))
        /
        1000
    );

    container.innerHTML =
    createCountdownHTML(
        days,
        hours,
        minutes,
        seconds
    );

}

function updateAllCountdowns() {

    updateCountdown(
        weddingDate,
        "weddingCountdown"
    );

    updateCountdown(
        rsvpDeadline,
        "rsvpCountdown"
    );

}

updateAllCountdowns();

setInterval(
    updateAllCountdowns,
    1000
);

/* ======================================
   REVEAL ANIMATIONS
====================================== */

const revealElements =
document.querySelectorAll(
    "section"
);

const observer =
new IntersectionObserver(

    entries => {

        entries.forEach(
            entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "reveal-active"
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
    section => {

        section.classList.add(
            "reveal"
        );

        observer.observe(
            section
        );

    }
);

/* ======================================
   ACTIVE NAVIGATION
====================================== */

const sections =
document.querySelectorAll(
    "section[id]"
);

const navLinks =
document.querySelectorAll(
    ".main-nav a"
);

window.addEventListener(
    "scroll",
    () => {

        let current = "";

        sections.forEach(
            section => {

                const top =
                section.offsetTop;

                const height =
                section.clientHeight;

                if (
                    scrollY >=
                    top - 180
                ) {

                    current =
                    section.getAttribute(
                        "id"
                    );

                }

            }
        );

        navLinks.forEach(
            link => {

                link.classList.remove(
                    "active-link"
                );

                if (
                    link.href.includes(
                        current
                    )
                ) {

                    link.classList.add(
                        "active-link"
                    );

                }

            }
        );

    }
);

/* ======================================
   SMOOTH SCROLL
====================================== */

document
.querySelectorAll(
    'a[href^="#"]'
)
.forEach(link => {

    link.addEventListener(
        "click",
        function(e) {

            e.preventDefault();

            const target =
            document.querySelector(
                this.getAttribute(
                    "href"
                )
            );

            if (target) {

                target.scrollIntoView({

                    behavior:
                    "smooth"

                });

            }

        }
    );

});
```
