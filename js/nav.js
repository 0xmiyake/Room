

const createNav = () => {
    let nav = document.querySelector('.naver');

    nav.innerHTML = `
    <div class="nav-container">
        <div class="nav-icon">My room</div>
        <ul>
            <li><a href="">about</a></li>
            <li><a href="">history</a></li>
            <li><a href="">news</a></li>
            <li><a href="">contact</a></li>
        </ul>
    </div>
    `
}

createNav();