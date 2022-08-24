
const id = location.search.slice(1);
const container = document.querySelector(".container");

// console.log(container);


const productData = articles.map((article) => {
    // console.log(article);
    const {id, name, job, img, text} = article;
    // console.log(id);
    return`
    <div class="content">
        <img src="./image/${img}" class="top-img" alt="">
        <h1>${name}</h1>
        <span class=${job}>${job}</span>
    <p>${text}</p>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere cupiditate nesciunt, cumque cum odit assumenda sunt, porro impedit placeat, vel quaerat tempore voluptates dolorem possimus minus eius! Iusto, ut itaque.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sunt, voluptate molestias dicta animi, maxime nam dolorum possimus ab, aliquam iste! Iure voluptate nostrum ullam quas aperiam, harum sed quos.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aperiam nulla non molestiae quia sequi tenetur exercitationem suscipit veritatis eius dolor minima laboriosam, excepturi aut! Ab cupiditate eum numquam ipsa.
    </p>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere cupiditate nesciunt, cumque cum odit assumenda sunt, porro impedit placeat, vel quaerat tempore voluptates dolorem possimus minus eius! Iusto, ut itaque.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sunt, voluptate molestias dicta animi, maxime nam dolorum possimus ab, aliquam iste! Iure voluptate nostrum ullam quas aperiam, harum sed quos.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aperiam nulla non molestiae quia sequi tenetur exercitationem suscipit veritatis eius dolor minima laboriosam, excepturi aut! Ab cupiditate eum numquam ipsa.
    </p>
    </div>
    `;
})



container.innerHTML = productData[id -1];
// pc上では0からスタートなので


// console.log(articleData[3]);
console.log(id);