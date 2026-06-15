/* ======================================
   OPEN INVITATION
====================================== */

document.addEventListener("DOMContentLoaded", () => {

    const openBtn =
    document.getElementById("openInvitation");

    const introScreen =
    document.getElementById("intro-screen");

    const mainSite =
    document.getElementById("mainSite");

    if (openBtn && introScreen && mainSite) {

        openBtn.addEventListener("click", () => {

            introScreen.style.transition =
            "opacity .6s ease";

            introScreen.style.opacity = "0";

            setTimeout(() => {

                introScreen.style.display =
                "none";

                mainSite.style.display =
                "block";

                window.scrollTo(0, 0);

            }, 600);

        });

    }

    /* ======================================
       THEME TOGGLE
    ====================================== */

    const themeToggle =
    document.getElementById("themeToggle");

    const savedTheme =
    localStorage.getItem("theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark");

        if (themeToggle) {

            themeToggle.textContent =
            "LIGHT MODE";

        }

    }

    if (themeToggle) {

        themeToggle.addEventListener("click", () => {

            document.body.classList.toggle("dark");

            const isDark =
            document.body.classList.contains("dark");

            localStorage.setItem(
                "theme",
                isDark ? "dark" : "light"
            );

            themeToggle.textContent =
            isDark
            ? "LIGHT MODE"
            : "DARK MODE";

        });

    }

    /* ======================================
       COUNTDOWNS
    ====================================== */

    const weddingCountdown =
    document.getElementById(
        "weddingCountdown"
    );

    const rsvpCountdown =
    document.getElementById(
        "rsvpCountdown"
    );

    function buildCountdown(
        targetDate,
        container
    ) {

        if (!container) return;

        const now = new Date();

        const diff =
        targetDate - now;

        if (diff <= 0) {

            container.innerHTML =
            "<p>Completed</p>";

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

        container.innerHTML = `

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

    function updateCountdowns() {

        buildCountdown(

            new Date(
                "August 20, 2026 16:00:00"
            ),

            weddingCountdown

        );

        buildCountdown(

            new Date(
                "June 30, 2026 23:59:59"
            ),

            rsvpCountdown

        );

    }

    updateCountdowns();

    setInterval(
        updateCountdowns,
        1000
    );

    /* ======================================
       REVEAL ANIMATIONS
    ====================================== */

    const sections =
    document.querySelectorAll("section");

    const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "reveal-active"
                    );

                }

            });

        },

        {
            threshold: .15
        }

    );

    sections.forEach(section => {

        section.classList.add("reveal");

        observer.observe(section);

    });

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

                const target =
                document.querySelector(
                    this.getAttribute(
                        "href"
                    )
                );

                if (!target) return;

                e.preventDefault();

                target.scrollIntoView({

                    behavior:
                    "smooth"

                });

            }
        );

    });

});
