{/* <div id="home-page">
        <div id="hp-header">
            <h2>Tea and Pilaf</h2>
            <p>Book table</p>
        </div>
</div> */}

function renderHomePage() {
    const contentSection = document.getElementById("content");
    contentSection.replaceChildren();

    document.body.classList.remove("body-menu-page");

    const homePage = document.createElement("div");
    homePage.id = "home-page";

    const hpHeader = document.createElement("div");
    hpHeader.id = "hp-header";

    const h2 = document.createElement("h2");
    h2.innerHTML = "Tea and Pilaf";

    const p = document.createElement("p");
    p.textContent = "Book table";

    contentSection.appendChild(homePage);
    homePage.appendChild(hpHeader);
    hpHeader.appendChild(h2);
    hpHeader.appendChild(p);
}

export { renderHomePage }