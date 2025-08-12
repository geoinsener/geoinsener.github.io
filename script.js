/* Formspree integration + i18n
 * Replace FORMSPREE_ENDPOINT with your real endpoint, e.g. https://formspree.io/f/abcxyz
 */
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xrbljkpz";

// Reference items (EST only, used for both languages)
const REFS_PRIVATE = [
  "Jõerahu tn 8 Vorbusel", "Kannikese tn 26 Jõgeval", "Kasesalu tn 38 Tartus",
  "Jõeharu põik 5 Ihastes", "Ristikangru tee 36 ja 39 Jõelähtmel",
  "Käänu tn 24 Tartu vallas", "Ampri tee 5 Viimsis", "Õie tn 3 Sauel",
  "Päeva üksikelamu Kolga külas", "Kivikirve tee 5 Jõelähtmel", "Atleedi tee 19 Rae vallas"
];
const REFS_APART = [
  "Uus tn 21 Tartus", "Raua tn 20 Tartus", "Tammsaare tn 6a Tartus", "Pargi tn 11 Tartus",
  "Savi tn 43 Tartus", "Oa tn 29 Tartus", "Kastani tn 133 Tartus", "Puiestee tn 17a ja 17b Tartus",
  "Hiie tn 15 Tartus", "Kuu tn 24 Tartus", "Pikka tn 40 ja 42 Tartus", "Raatuse 64 Tartus",
  "Oa tn 52 Tartus", "Fortuuna 27 ja 29 Tartus", "Pikk tn 46 Tartus", "Ujula tn 51 Tartus",
  "Meruski 10 ja 12 Tartus", "Hauskari 10 ja 12 Tartus", "Haki tn 2/4 Tartus",
  "Klaose tn 4, 6 ja 8 Tartus", "Aeru tn 5 ja 7 Tartus", "Lai tn 36b Tartus"
];
const REFS_PUBLIC = [
  "Tallinna Vangla Pääslahoone", "Tallinna Vangla meeste tootmishoone", "Tähe tn 4 laiendus Tartus",
  "Käru hooldekodu juurdeehitus Sepikoja tn 1", "Paide pansionaadi juurdeehitus Pärnu tn 7",
  "Kanarbiku tn 2 büroohoone Tartus"
];

const i18n = {
  et: {
    "nav.home":"Avaleht","nav.about":"Minust","nav.services":"Teenused","nav.references":"Referentsid","nav.contact":"Kontakt",
    "hero.title":"IB Lehar Leetsaar",
    "hero.tagline":"Geotehniline inseneeria ja tõhusad vundamendilahendused",
    "hero.cta":"Küsi nõu",
    "about.title":"Minust",
    "about.short":"Olen töötanud ehitusinsenerina üle 20 aasta ning osalenud rohkem kui 450 hoone konstruktsioonide projekteerimisel. Valdavale osale neist olen koostanud ka vundamendilahendused.",
    "about.more":"Loe pikemalt",
    "about.long":`<p>2024. aasta sügisel kaitsesin geotehnikaalase doktoritöö nii Tallinna Tehnikaülikoolis kui ka Aalto Ülikoolis. Doktoritöö keskendus geotehniliste uuringutulemuste kasutamisele vaiade kandevõime määramisel.</p>
                  <p>Tänaseks on minu põhifookus geotehnilisel projekteerimisel. Tegutsen ka lektorina Tallinna Tehnikaülikooli Tartu kolledžis, kus õpetan hoonete konstruktsioone, vundamente ja pinnasemehaanikat ning juhendan magistritöid. Osalen aktiivselt geotehnikaalases teadustöös ning panustan valdkonna arengusse Eesti Ehitusinseneride Liidu juhatuse esimehena ja Eesti Geotehnika Ühingu juhatuse liikmena. Minu eesmärk on arendada ja edendada kaasaegseid teadmisi geotehnikas, et neid rakendada Eesti ehitussektoris.</p>`,
    "services.title":"Teenused",
    "services.s1.title":"Geotehniline projekteerimine",
    "services.s1.desc":"Vundamendid, vaiad, pinnaseparandus, kandevõime ja deformatsioonide hinnangud.",
    "services.s2.title":"Uuringutulemuste tõlgendus",
    "services.s2.desc":"CPTu, DPH/DPM, piezokooni ja seismiliste sondimiste sidumine arvutusmudelitega.",
    "services.s3.title":"Ekspertiis ja konsultatsioon",
    "services.s3.desc":"Projekti audit, lahendusvariantide võrdlus ja riskipõhine otsustugi.",
    "services.s4.title":"Koolitus ja juhendamine",
    "services.s4.desc":"Erialakoolitused ja loengud praktikutele ning noortele inseneridele.",
    "references.title":"Referentsid",
    "references.private.title":"Vundamendid eramutele",
    "references.apartments.title":"Vundamendid korterelamutele ja ridaelamutele",
    "references.public.title":"Vundamendid avalikele hoonetele ja büroodele",
    "references.photoHintPrivate":"Lisa siia oma foto: asenda fail ref-eramud.svg pildiga (nt ref-eramud.jpg).",
    "references.photoHintApt":"Lisa siia oma foto: asenda fail ref-korterid.svg pildiga.",
    "references.photoHintPublic":"Lisa siia oma foto: asenda fail ref-avalikud.svg pildiga.",
    "contact.title":"Kontakt","contact.email":"E-post:","contact.phone":"Telefon:",
    "contact.form.title":"Võta ühendust", "contact.form.name":"Nimi","contact.form.email":"E-post",
    "contact.form.message":"Sõnum","contact.form.submit":"Saada",
    "footer.copy":"© 2025 IB Lehar Leetsaar. Kõik õigused kaitstud."
  },
  en: {
    "nav.home":"Home","nav.about":"About","nav.services":"Services","nav.references":"References","nav.contact":"Contact",
    "hero.title":"IB Lehar Leetsaar",
    "hero.tagline":"Geotechnical engineering and efficient foundation solutions",
    "hero.cta":"Get in touch",
    "about.title":"About",
    "about.short":"I have worked as a structural engineer for over 20 years and contributed to the design of more than 450 buildings. For the majority I prepared the foundation solutions.",
    "about.more":"Read more",
    "about.long":`<p>In the autumn of 2024 I defended my doctoral thesis in geotechnical engineering at both Tallinn University of Technology and Aalto University. The research focused on using geotechnical investigation data to assess pile bearing capacity.</p>
                  <p>Today, my primary focus is geotechnical design. I lecture at TalTech Tartu College on building structures, foundations and soil mechanics, and supervise master’s theses. I am active in research and contribute to the field as Chairman of the Board of the Estonian Association of Civil Engineers and as a board member of the Estonian Geotechnical Society. My goal is to promote modern geotechnical knowledge and apply it in Estonia’s construction sector.</p>`,
    "services.title":"Services",
    "services.s1.title":"Geotechnical design",
    "services.s1.desc":"Foundations, piles, ground improvement, bearing capacity and settlements.",
    "services.s2.title":"Site investigation interpretation",
    "services.s2.desc":"Linking CPTu, DPH/DPM, piezocone and seismic soundings with design models.",
    "services.s3.title":"Expert review & consulting",
    "services.s3.desc":"Project audits, option comparison and risk‑based decision support.",
    "services.s4.title":"Training & lecturing",
    "services.s4.desc":"Professional trainings and lectures for practitioners and junior engineers.",
    "references.title":"References",
    "references.private.title":"Foundations for private houses",
    "references.apartments.title":"Foundations for apartment and row houses",
    "references.public.title":"Foundations for public and office buildings",
    "references.photoHintPrivate":"Add a photo here: replace the file ref-eramud.svg with your image (e.g., ref-eramud.jpg).",
    "references.photoHintApt":"Add a photo here: replace ref-korterid.svg with your image.",
    "references.photoHintPublic":"Add a photo here: replace ref-avalikud.svg with your image.",
    "contact.title":"Contact","contact.email":"Email:","contact.phone":"Phone:",
    "contact.form.title":"Contact form", "contact.form.name":"Name","contact.form.email":"Email",
    "contact.form.message":"Message","contact.form.submit":"Send",
    "footer.copy":"© 2025 IB Lehar Leetsaar. All rights reserved."
  }
};

let currentLang = "et";

function applyI18n(lang){
  currentLang = lang;
  document.documentElement.lang = lang;

  // static texts
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const t = i18n[lang][key];
    if (typeof t === 'string'){ el.textContent = t; }
    if (key === "about.long"){ el.innerHTML = i18n[lang][key]; }
  });

  // references (remain in Estonian for both languages)
  const lists = { private: REFS_PRIVATE, apartments: REFS_APART, public: REFS_PUBLIC };
  document.querySelector('[data-i18n="references.private.list"]').innerHTML =
    lists.private.map(item => `<li>${item}</li>`).join("");
  document.querySelector('[data-i18n="references.apartments.list"]').innerHTML =
    lists.apartments.map(item => `<li>${item}</li>`).join("");
  document.querySelector('[data-i18n="references.public.list"]').innerHTML =
    lists.public.map(item => `<li>${item}</li>`).join("");

  // toggle state
  document.querySelectorAll('.language-switch [data-lang]').forEach(btn => {
    btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
  });
}

async function handleFormSubmit(e){
  e.preventDefault();
  const form = e.currentTarget;
  const status = document.getElementById('formStatus');
  status.textContent = currentLang === 'et' ? 'Saatmine...' : 'Sending...';

  if (FORMSPREE_ENDPOINT.includes('XXXXXXXX')){
    status.textContent = currentLang === 'et'
      ? 'Palun asenda skriptis Formspree aadress (FORMSPREE_ENDPOINT) oma vormi ID-ga.'
      : 'Please replace FORMSPREE_ENDPOINT with your real Formspree form ID.';
    return;
  }

  const data = new FormData(form);
  try{
    const res = await fetch(FORMSPREE_ENDPOINT, { method:'POST', body:data, headers:{ 'Accept':'application/json' } });
    if (res.ok){
      form.reset();
      status.textContent = currentLang === 'et' ? 'Aitäh! Sõnum on saadetud.' : 'Thanks! Your message has been sent.';
    } else {
      status.textContent = currentLang === 'et' ? 'Viga saatmisel. Proovi hiljem uuesti.' : 'Error sending. Please try again later.';
    }
  }catch(err){
    status.textContent = currentLang === 'et' ? 'Võrguviga. Proovi hiljem uuesti.' : 'Network error. Please try again later.';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  applyI18n(currentLang);
  document.querySelectorAll('.language-switch [data-lang]').forEach(btn => {
    btn.addEventListener('click', () => applyI18n(btn.dataset.lang));
  });
  const form = document.getElementById('contactForm');
  if (form) form.addEventListener('submit', handleFormSubmit);
});
