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
                    ? "Lühikirjeldus minust:Olen töötanud ehitusinsenerina üle 20 aasta ning osalenud rohkem kui 450 ehitise konstruktsioonide projekteerimisel. Valdavale osale neist olen koostanud ka vundamendilahendused. 2024. aasta sügisel kaitsesin geotehnikaalase doktoritöö nii Tallinna Tehnikaülikoolis kui ka Aalto Ülikoolis. Doktoritöö keskendus geotehniliste uuringutulemuste kasutamisele vaiade kandevõime määramisel.Tänaseks on minu põhifookus geotehnilisel projekteerimisel. Tegutsen ka lektorina Tallinna Tehnikaülikooli Tartu kolledžis, kus õpetan hoonete konstruktsioone, vundamente ja pinnasemehaanikat ning juhendan magistritöid. Osalen aktiivselt geotehnikaalases teadustöös ning panustan valdkonna arengusse Eesti Ehitusinseneride Liidu juhatuse esimehena ja Eesti Geotehnika Ühingu juhatuse liikmena. Minu eesmärk on arendada ja edendada kaasaegseid teadmisi geotehnikas, et neid rakendada Eesti ehitussektoris."
                    : "I have worked as a structural engineer for over 20 years and have participated in the design of more than 450 buildings. For the majority of these projects, I have been responsible for the foundation design. In the autumn of 2024, I defended my doctoral thesis in geotechnical engineering at both Tallinn University of Technology and Aalto University. My research focused on utilizing geotechnical investigation data for the assessment of pile bearing capacity. Today, my primary focus lies in geotechnical design. I also serve as a lecturer at the Tartu College of Tallinn University of Technology, where I teach courses on building structures, foundations, and soil mechanics, and supervise master’s theses. In addition, I am actively engaged in geotechnical research and contribute to the development of the field as the Chairman of the Board of the Estonian Association of Civil Engineers and as a board member of the Estonian Geotechnical Society. My goal is to promote and share modern geotechnical knowledge that can be applied in Estonia’s construction sector.";
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
    document.querySelector("#about p").innerHTML = " <span class='read-more'>Loe rohkem...</span>";
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

