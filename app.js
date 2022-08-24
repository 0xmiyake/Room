


const articleContainer = document.querySelector(".article-container");
console.log(articleContainer);

// console.log(articles);

// !mapは、データを全て所得する
const articleData = articles.map((article) => {
    // console.log(article);
    const {id, name, job, img} = article;
    // console.log(id);
    return`
    <article>
        <img src="./image/${img}" alt="${name}">
        <div class="info">
            <h3 class="name">${name}</h3>
            <span class="job">${job}</span>
            <a href="./product.html?${id}">ここの番号：${id}</a>

        </div>
    </article>
    `;
})
.join("");

articleContainer.innerHTML = articleData;

// console.log(articleData);


