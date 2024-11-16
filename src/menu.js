import img1 from "./images/meat.jpg";
import img2 from "./images/plov.jpg";
import img3 from "./images/tea.jpg"

{/* <body class="body-menu-page">
    <header class="home-header">
        <nav>
            <button id="home-button">Home</button>
            <button id="menu-button">Menu</button>
            <button id="about-menu">About</button>
        </nav>
    </header>
    <div id="content">
        <div id="header-menu-page"></div>
        <div id="menu-page">
            <h2>Menu</h2>
            <section class="odd">
                <div class="text">
                    <h4>Shashlik - $18.99</h4>
                    <p>Marinated lamb chunks grilled on skewers, served with grilled vegetables and sumac onions</p>
                    <h4>Lyulya Kebab - $16.99</h4>
                    <p>Spiced ground beef and lamb kebabs, served with lavash bread and garlic yogurt sauce</p>
                    <h4>Kabob Shishlik - $17.99</h4>
                    <p>Tender chunks of beef marinated in onions and spices, grilled to perfection</p>
                </div>
                <img src="./images/meat.jpg" alt="Meat image">
            </section>
            <section class="even">
                <img src="./images/plov.jpg" alt="Plov image">
                <div class="text">
                    <h4>Classic Oshi Palov - $15.99</h4>
                    <p>Fragrant rice cooked with tender lamb, carrots, and chickpeas, topped with barberries</p>
                    <h4>Qurutob - $14.99</h4>
                    <p>A unique dish with flatbread pieces mixed with onions, tomatoes, and yogurt sauce</p>
                    <h4>Sabzi Palov - $13.99</h4>
                    <p>Rice cooked with tender beef and a generous amount of carrots, flavored with cumin</p>
                </div>
            </section>
            <section class="odd">
                <div class="text">
                    <h4>Shir Choy - $3.99</h4>
                    <p>A comforting tea made with black tea, milk, salt, and sometimes butter</p>
                    <h4>Kuk Choy - $3.99</h4>
                    <p>Refreshing green tea often served with lemon or mint</p>
                    <h4>Choykhona Style Tea - $4.99</h4>
                    <p>Traditional black tea served in a piala, accompanied by dried fruits and nuts</p>
                </div>
                <img src="./images/tea.jpg" alt="Tea image">
            </section>
        </div>
    </div>
</body> */}

function renderMenuPage() {
    const contentSection = document.getElementById("content");
    contentSection.replaceChildren();

    document.body.classList.add("body-menu-page");

    const headerMenuPage = document.createElement("div");
    headerMenuPage.id = "header-menu-page";
    contentSection.appendChild(headerMenuPage);

    const menuPage = document.createElement("div");
    menuPage.id = "menu-page";
    contentSection.appendChild(menuPage);

    const h2 = document.createElement("h2");
    h2.innerHTML = "Menu";
    menuPage.appendChild(h2);

    // first section

    const sectionPage1 = document.createElement("section");
    sectionPage1.classList.add("odd");
    menuPage.appendChild(sectionPage1);

    const text1 = document.createElement("div");
    text1.classList.add("text");
    sectionPage1.appendChild(text1);

    const text1h41 = document.createElement("h4");
    text1h41.innerHTML = "Shashlik - $18.99";
    text1.appendChild(text1h41);

    const text1p1 = document.createElement("p");
    text1p1.innerHTML = "Marinated lamb chunks grilled on skewers, served with grilled vegetables and sumac onions";
    text1.appendChild(text1p1);

    const text1h42 = document.createElement("h4");
    text1h42.innerHTML = "Lyulya Kebab - $16.99";
    text1.appendChild(text1h42);

    const text1p2 = document.createElement("p");
    text1p2.innerHTML = "Spiced ground beef and lamb kebabs, served with lavash bread and garlic yogurt sauce";
    text1.appendChild(text1p2);
    
    const text1h43= document.createElement("h4");
    text1h43.innerHTML = "Kabob Shishlik - $17.99";
    text1.appendChild(text1h43);

    const text1p3 = document.createElement("p");
    text1p3.innerHTML = "Tender chunks of beef marinated in onions and spices, grilled to perfection";
    text1.appendChild(text1p3);

    const text1img = document.createElement("img");
    text1img.src = img1;
    sectionPage1.appendChild(text1img);

    // second section

    const sectionPage2 = document.createElement("section");
    sectionPage2.classList.add("even");
    menuPage.appendChild(sectionPage2);

    const text2img = document.createElement("img");
    text2img.src = img2;
    sectionPage2.appendChild(text2img);

    const text2 = document.createElement("div");
    text2.classList.add("text");
    sectionPage2.appendChild(text2);

    const text2h41 = document.createElement("h4");
    text2h41.innerHTML = "Classic Oshi Palov - $15.99";
    text2.appendChild(text2h41);

    const text2p1 = document.createElement("p");
    text2p1.innerHTML = "Fragrant rice cooked with tender lamb, carrots, and chickpeas, topped with barberries";
    text2.appendChild(text2p1);

    const text2h42 = document.createElement("h4");
    text2h42.innerHTML = "Qurutob - $14.99";
    text2.appendChild(text2h42);

    const text2p2 = document.createElement("p");
    text2p2.innerHTML = "A unique dish with flatbread pieces mixed with onions, tomatoes, and yogurt sauce";
    text2.appendChild(text2p2);
    
    const text2h43= document.createElement("h4");
    text2h43.innerHTML = "Sabzi Palov - $13.99";
    text2.appendChild(text2h43);

    const text2p3 = document.createElement("p");
    text2p3.innerHTML = "Rice cooked with tender beef and a generous amount of carrots, flavored with cumin";
    text2.appendChild(text2p3);

    // thirdSection

    const sectionPage3 = document.createElement("section");
    sectionPage3.classList.add("odd");
    menuPage.appendChild(sectionPage3);

    const text3 = document.createElement("div");
    text3.classList.add("text");
    sectionPage3.appendChild(text3);

    const text3h41 = document.createElement("h4");
    text3h41.innerHTML = "Shir Choy - $3.99";
    text3.appendChild(text3h41);

    const text3p1 = document.createElement("p");
    text3p1.innerHTML = "A comforting tea made with black tea, milk, salt, and sometimes butter";
    text3.appendChild(text3p1);

    const text3h42 = document.createElement("h4");
    text3h42.innerHTML = "Kuk Choy - $3.99";
    text3.appendChild(text3h42);

    const text3p2 = document.createElement("p");
    text3p2.innerHTML = "Refreshing green tea often served with lemon or mint";
    text3.appendChild(text3p2);
    
    const text3h43= document.createElement("h4");
    text3h43.innerHTML = "Choykhona Style Tea - $4.99";
    text3.appendChild(text3h43);

    const text3p3 = document.createElement("p");
    text3p3.innerHTML = "Traditional black tea served in a piala, accompanied by dried fruits and nuts";
    text3.appendChild(text3p3);

    const text3img = document.createElement("img");
    text3img.src = img3;
    sectionPage3.appendChild(text3img);
}

export { renderMenuPage };