const createNav = () =>{
    let navBar =  document.getElementById('navbar');
    navBar.innerHTML = `
    <!-- top bar of nav menu  -->
        <div class="top-bar">
            <div class="left-topbar-part">
                <div class="payment-option-div">
                    <p>payment options</p>
                </div>
                <div class="language-option-div">
                    <p>en</p>
                    <p>fn</p>
                </div>
            </div>
            <div class="right-topbar-part">
                <div class="booking-option-div">
                    <p>my bookings</p>
                </div>
                <div class="review-option-div">
                    <p>our review</p>
                </div>
                <div class="account-option-div">
                    <p>account</p>
                </div>
            </div>
            
          
        </div>

        <!-- middle section  of top bar  -->
        <div class="middle-bar">
            <div>
                <a href="/">
                    <img src="img/logo-dark.png" alt="">
                </a>    
            </div>
        </div>

        <!-- bottom bar of nav menu -->
        <div class="bottom-bar">
            <div>
                <ul>
                    <li><a href="/">home</a></li>
                    <li><a href="">rooms</a></li>
                    <li><a href="">foods</a></li>
                    <li><a href="/reservation">reservation</a></li>
                    <li><a href="">feature</a></li>
                    <li><a href="">search</a></li>
                </ul>
            </div>
        </div>`
}

createNav();