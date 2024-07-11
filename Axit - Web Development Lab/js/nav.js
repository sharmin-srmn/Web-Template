const createNav = () => {
    let nav =document.querySelector('.navbar');

    nav.innerHTML = `
    <div class="nav">
        <a href= "#hero-section">
            <img src="img/nav-logo.png" class="nav-logo" alt=""></img>
            </a>
            <ul class="links-container">
                <li class="link-item"><a href="#tab-section" class="link home-link">features</a></li>
                <li class="link-item"><a href="#subList-section" class="link">about</a></li>
                <li class="link-item"><a href="#pricing-section" class="link">pricing</a></li>
                <li class="link-item"><a href="#testimonial-section" class="link">review</a></li>
                <li class="link-item"><a href="#contact-section" class="link">contact</a></li>
            </ul>
    </div>
           
    `;
}
createNav ();