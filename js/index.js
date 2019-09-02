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
// Pulled all of the images
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


const ctaImage = document.getElementById('cta-img');
ctaImage.setAttribute('src', siteContent['cta']['img-src'])

const codeSnippet = document.getElementById('middle-img');
codeSnippet.setAttribute('src', siteContent["main-content"]['middle-img-src'])


// selecting nav items
const navigation = document.querySelectorAll('a');
navigation[0].textContent = siteContent.nav['nav-item-1'];
navigation[1].textContent = siteContent.nav['nav-item-2'];
navigation[2].textContent = siteContent.nav['nav-item-3'];
navigation[3].textContent = siteContent.nav['nav-item-4'];
navigation[4].textContent = siteContent.nav['nav-item-5'];
navigation[5].textContent = siteContent.nav['nav-item-6'];


// appending and prepending to nav
const faqNav = document.createElement('a');
const helpNav = document.createElement('a');
faqNav.textContent = 'FAQ'
helpNav.textContent = 'Help'
const nav = document.querySelector('nav');

nav.appendChild(faqNav);
nav.prepend(helpNav);

navigation.forEach( x => x.style.color = 'green')
faqNav.style.color = 'green';
helpNav.style.color = 'green';
faqNav.setAttribute('href', "#")
helpNav.setAttribute('href', '#')


// selecting cta header
const ctaText = document.querySelector('h1');
ctaText.textContent = siteContent.cta['h1'];
const ctaButton = document.querySelector('.cta button');
ctaButton.textContent = siteContent.cta['button']

//Main content selectors
const mainHeaders = document.querySelectorAll('h4');
mainHeaders[0].textContent = siteContent['main-content']['features-h4']
mainHeaders[1].textContent = siteContent['main-content']['about-h4']
mainHeaders[2].textContent = siteContent['main-content']['services-h4']
mainHeaders[3].textContent = siteContent['main-content']['product-h4']
mainHeaders[4].textContent = siteContent['main-content']['vision-h4']

const mainContent = document.querySelectorAll('p');
mainContent[0].textContent = siteContent['main-content']['features-content']
mainContent[1].textContent = siteContent['main-content']['about-content']
mainContent[2].textContent = siteContent['main-content']['services-content']
mainContent[3].textContent = siteContent['main-content']['product-content']
mainContent[4].textContent = siteContent['main-content']['vision-content']

// contact info selectors
const contactHead = document.querySelector('.contact h4');
contactHead.textContent = siteContent.contact['contact-h4'] 

const contactP = document.querySelectorAll('.contact p');
contactP[0].textContent = siteContent.contact['address']
contactP[1].textContent = siteContent.contact['phone']
contactP[2].textContent = siteContent.contact['email']

//footer selectores
const footerP = document.querySelector('footer p');
footerP.textContent = siteContent.footer.copyright;
