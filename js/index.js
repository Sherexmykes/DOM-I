const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navBar = document.querySelectorAll("a");

navBar[0].textContent = siteContent["nav"]["nav-item-1"];
navBar[1].textContent = siteContent["nav"]["nav-item-2"];
navBar[2].textContent = siteContent["nav"]["nav-item-3"];
navBar[3].textContent = siteContent["nav"]["nav-item-4"];
navBar[4].textContent = siteContent["nav"]["nav-item-5"];
navBar[5].textContent = siteContent["nav"]["nav-item-6"];


const home = document.createElement('a');
home.textContent = "Home";

const store= document.createElement('a');
store.textContent = "Store";

const addNewHome = document.querySelector('nav');
addNewHome.prepend(home);


const addNewstore = document.querySelector('nav');
addNewstore .appendChild(store);

const navText = document.querySelectorAll('a');
navText.forEach(element => {
  element.style.color = 'green'
});

const callToAction = document.querySelectorAll(".cta .cta-text h1");
callToAction[0].textContent = siteContent["cta"]["h1"];

const ctaButton = document.querySelectorAll(".cta .cta-text button");
ctaButton[0].textContent = siteContent["cta"]["button"];

const img1 = document.getElementById("cta-img");
img1.setAttribute('src', siteContent["cta"]["img-src"]);

const mainContentH4 = document.querySelectorAll(".main-content .top-content .text-content h4");
mainContentH4 [0].textContent = siteContent["main-content"]["features-h4"];
mainContentH4 [1].textContent = siteContent["main-content"]["about-h4"];

const pargraphSec  = document.querySelectorAll(".main-content .top-content .text-content p");
pargraphSec[0].textContent = siteContent["main-content"]["features-content"];
pargraphSec[1].textContent = siteContent["main-content"]["features-content"];

const middlePicture = document.getElementById("middle-img");
middlePicture.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


const middleContent = document.querySelectorAll(".main-content .bottom-content .text-content h4");
middleContent[0].textContent = siteContent["main-content"]["services-h4"];
middleContent[1].textContent = siteContent["main-content"]["product-h4"];
middleContent[2].textContent = siteContent["main-content"]["vision-h4"];


const bottomContent = document.querySelectorAll(".main-content .bottom-content .text-content p");
bottomContent[0].textContent = siteContent["main-content"]["services-content"];
bottomContent[1].textContent = siteContent["main-content"]["product-content"];
bottomContent[2].textContent = siteContent["main-content"]["vision-content"];

const bottomContact = document.querySelectorAll(".contact h4");
bottomContact [0].textContent = siteContent["contact"]["contact-h4"];

const contactText = document.querySelectorAll(".contact p");
contactText[0].textContent = siteContent["contact"]["address"];
contactText[1].textContent = siteContent["contact"]["phone"];
contactText[2].textContent = siteContent["contact"]["email"];

const footer = document.querySelectorAll("footer");
footer[0].innerText = siteContent["footer"]["copyright"];


// innerText, innerHTML, textContent here https://www.w3schools.com/Jsref/prop_node_innertext.asp





