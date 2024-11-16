function renderAboutPage() {
// <body class="body-menu-page">
//     <header class="home-header">
//         <nav>
//             <button id="home-button">Home</button>
//             <button id="menu-button">Menu</button>
//             <button id="about-button">About</button>
//         </nav>
//     </header>
//     <div id="content">
//         <div id="header-menu-page"></div>
//         <div id="about-page">
//             <h2>About Tea & Pilaf</h2>
//             <section id="about-page-introduction">
//                 <p>
//                     Tea and Pilaf is The Best City's premier destination for authentic Central Asian cuisine. Established in 2021, our restaurant brings the rich flavors and warm hospitality of the Silk Road to your table. Tea and Pilaf was born from a passion for sharing the tastes of Central Asia with our community. Our chefs, trained in the traditional cooking methods of the region, bring authenticity to every dish. Step into our restaurant and be transported to a Central Asian chaikhana (tea house), with decor featuring handcrafted textiles and ceramics from the region, creating a warm and inviting atmosphere for your dining experience. 
//                 </p>
//             </section>
//             <section id="about-page-contact-program-container">
//                 <div id="contact-container">
//                     <h3>Contact Us</h3>
//                     <p>
//                         Address: 123 Silk Road Avenue, The Best City
//                     </p>
//                     <p>
//                         Phone: (555) 123-4567
//                     </p>
//                     <p>
//                         Email: info@teaandpilaf.com
//                     </p>
//                 </div>
//                 <div id="program-container">
//                     <h3>Hours of Operation</h3>
//                     <p>
//                         Monday - Thursday: 11:00 AM - 9:00 PM
//                     </p>
//                     <p>
//                         Friday - Saturday: 11:00 AM - 10:00 PM
//                     </p>
//                     <p>
//                         Sunday: 12:00 PM - 8:00 PM
//                     </p>
//                 </div>
//             </section>
//         </div>
//     </div>
// </body>

    const contentSection = document.getElementById("content");
    contentSection.replaceChildren();

    document.body.classList.add("body-menu-page");

    const headerMenuPage = document.createElement("div");
    headerMenuPage.id = "header-menu-page";
    contentSection.appendChild(headerMenuPage);

    const aboutPage = document.createElement("div");
    aboutPage.id = "about-page";
    contentSection.appendChild(aboutPage);

    const h2 = document.createElement("h2");
    h2.innerHTML = "About";
    aboutPage.appendChild(h2);

    const section1 = document.createElement("section");
    section1.id = "about-page-introduction";
    aboutPage.appendChild(section1);

    const section1p = document.createElement("p");
    section1p.innerHTML = "Tea and Pilaf is The Best City's premier destination for authentic Central Asian cuisine. Established in 2021, our restaurant brings the rich flavors and warm hospitality of the Silk Road to your table. Tea and Pilaf was born from a passion for sharing the tastes of Central Asia with our community. Our chefs, trained in the traditional cooking methods of the region, bring authenticity to every dish. Step into our restaurant and be transported to a Central Asian chaikhana (tea house), with decor featuring handcrafted textiles and ceramics from the region, creating a warm and inviting atmosphere for your dining experience."
    section1.appendChild(section1p);

    const section2 = document.createElement("section");
    section2.id = "about-page-contact-program-container";
    aboutPage.appendChild(section2);

    // contactContainer

    const contactContainer = document.createElement("div");
    contactContainer.id = "contact-container";
    section2.appendChild(contactContainer);

    const contactContainerh3 = document.createElement("h3");
    contactContainerh3.innerHTML = "Contact Us";
    contactContainer.appendChild(contactContainerh3);

    const contactContainerp1 = document.createElement("p");
    contactContainerp1.innerHTML = "Address: 123 Silk Road Avenue, The Best City";
    contactContainer.appendChild(contactContainerp1);

    const contactContainerp2 = document.createElement("p");
    contactContainerp2.innerHTML = "Phone: (555) 123-4567";
    contactContainer.appendChild(contactContainerp2);

    const contactContainerp3 = document.createElement("p");
    contactContainerp3.innerHTML = "Email: info@teaandpilaf.com";
    contactContainer.appendChild(contactContainerp3);

    // programContainer
    
    const programContainer = document.createElement("div");
    programContainer.id = "program-container";
    section2.appendChild(programContainer);

    const programContainerh3 = document.createElement("h3");
    programContainerh3.innerHTML = "Hours of Operation";
    programContainer.appendChild(programContainerh3);

    const programContainerp1 = document.createElement("p");
    programContainerp1.innerHTML = "Monday - Thursday: 11:00 AM - 9:00 PM";
    programContainer.appendChild(programContainerp1);

    const programContainerp2 = document.createElement("p");
    programContainerp2.innerHTML = "Friday - Saturday: 11:00 AM - 10:00 PM";
    programContainer.appendChild(programContainerp2);

    const programContainerp3 = document.createElement("p");
    programContainerp3.innerHTML = "Sunday: 12:00 PM - 8:00 PM";
    programContainer.appendChild(programContainerp3);
}

export { renderAboutPage };