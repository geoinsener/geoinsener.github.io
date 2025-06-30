let currentLanguage = "et"; // Hoidke meeles aktiivne keel

// "Loe rohkem" funktsioon
function setupReadMore() {
    const readMore = document.querySelector(".read-more");
    if (readMore) {
        readMore.addEventListener("click", function() {
            if (!document.querySelector(".extra-text")) {
                const extra = document.createElement("p");
                extra.classList.add("extra-text");
                extra.innerText = currentLanguage === "et"
                    ? "Geoinsener pakub terviklahendusi pinnaseuuringutest kuni vundamendikonstruktsioonide nõustamiseni. Eesmärk on tagada stabiilsed ja kulutõhusad lahendused erinevatele ehitusprojektidele."
                    : "The geo engineer offers complete solutions from soil investigations to foundation construction consulting. The goal is to provide stable and cost-effective solutions for various construction projects.";
                readMore.parentNode.appendChild(extra);
                readMore.innerText = currentLanguage === "et" ? "Näita vähem" : "Show less";
            } else {
                document.querySelector(".extra-text").remove();
                readMore.innerText = currentLanguage === "et" ? "Loe rohkem..." : "Read more...";
            }
        });
    }
}

// Keelevahetus funktsioon
document.addEventListener("DOMContentLoaded", function() {
    const estLink = document.querySelector(".language-switch a:first-child");
    const engLink = document.querySelector(".language-switch a:last-child");

    estLink.addEventListener("click", function(e) {
        e.preventDefault();
        setLanguage("et");
    });

    engLink.addEventListener("click", function(e) {
        e.preventDefault();
        setLanguage("en");
    });

    setupReadMore(); // Setup "Loe rohkem" klikifunktsioon kohe laadimisel

    // 🔥 Lisa see rida juurde:
    setLanguage("et"); // Lehe avamisel vaikimisi määrame eesti keele ja sisu
});

function setLanguage(lang) {
    currentLanguage = lang;
    const navLinks = document.querySelectorAll(".sidebar nav ul li a");

if (lang === "et") {
    document.querySelector("#hero h1").innerText = "IB Lehar Leetsaar";
    document.querySelector("#hero p").innerText = "Geotehniline inseneeria ja tõhusad vundamendilahendused";
    document.querySelector("#about h2").innerText = "Minust";
    document.querySelector("#about p").innerHTML = "Lühikirjeldus... <span class='read-more'>Loe rohkem...</span>";
    document.querySelector("#references h2").innerText = "Referentsid";
    document.querySelector("#contact h2").innerText = "Kontakt";
    document.querySelector(".contact-info").innerHTML = `
        <p>Email: <a href="mailto:lehar.leetsaar@taltech.ee">lehar.leetsaar@taltech.ee</a></p>
        <p>Telefon: +372 5340 9015</p>
    `;
    document.querySelector("#footer").innerText = "© 2025 IB Lehar Leetsaar. Kõik õigused kaitstud.";

    // 👉 Sidebar linkide muutmine eestikeelseks
    navLinks[0].innerText = "Avaleht";
    navLinks[1].innerText = "Minust";
    navLinks[2].innerText = "Referentsid";
    navLinks[3].innerText = "Kontakt";

} else if (lang === "en") {
    document.querySelector("#hero h1").innerText = "IB Lehar Leetsaar";
    document.querySelector("#hero p").innerText = "Geotechnical engineering and efficient foundation solutions";
    document.querySelector("#about h2").innerText = "About";
    document.querySelector("#about p").innerHTML = "Short description about services and expertise. <span class='read-more'>Read more...</span>";
    document.querySelector("#references h2").innerText = "References";
    document.querySelector("#contact h2").innerText = "Contact";
    document.querySelector(".contact-info").innerHTML = `
        <p>Email: <a href="mailto:lehar.leetsaar@taltech.ee">lehar.leetsaar@taltech.ee</a></p>
        <p>Phone: +372 5340 9015</p>
    `;
    document.querySelector("#footer").innerText = "© 2025 IB Lehar Leetsaar. All rights reserved.";

    // 👉 Sidebar linkide muutmine inglise keelseks
    navLinks[0].innerText = "Home";
    navLinks[1].innerText = "About";
    navLinks[2].innerText = "References";
    navLinks[3].innerText = "Contact";
}
setupReadMore();
}
