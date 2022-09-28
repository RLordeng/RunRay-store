const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <div class="nav">
    <img src="img/logo.png" class="brand-logo" alt="brand logo">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, product">
                        <button class="search-btn">search</button>
                    </div>
                <a href="#"><img src="img/user.png" alt="user-image"></a>
                <a href="#"><img src="img/cart.png" alt=""></a>
            </div>
        </div><ul calss="links-container">
                <li class="link-items"><a href="#" class="link">Home</a></li>
                <li class="link-items"><a href="#" class="link">Travling bag</a></li>
                <li class="link-items"><a href="#" class="link">School bag</a></li>
                <li class="link-items"><a href="#" class="link">Business bag</a></li>
                <li class="link-items"><a href="#" class="link">Wallet</a></li>
                <li class="link-items"><a href="#" class="link">Tote bag</a></li>
                <li class="link-items"><a href="#" class="link">Sport bag</a></li>
            </ul>
            `;
}
createNav();