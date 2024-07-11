const tabBox1 = document.getElementById('tabBox1');
const tabBox2 = document.getElementById('tabBox2');
const tabBox3 = document.getElementById('tabBox3');
let tabheading = document.getElementById('tabHeading');
let tabpara = document.getElementById('tabpara');
tabBox1.addEventListener('click', ()=>{
    tabBox1.classList.add("activeBox");
    tabBox2.classList.remove("activeBox");
    tabBox3.classList.remove("activeBox");
    tabheading.innerHTML = "Tab One(1) with soft transitioning effect!" ;
    tabpara.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.<br /><br />Lillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat ident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

})
tabBox2.addEventListener('click', ()=>{
    tabBox1.classList.remove("activeBox");
    tabBox2.classList.add("activeBox");
    tabBox3.classList.remove("activeBox");
    tabheading.innerHTML = "Tab Two(2) with soft transitioning effect!" ;
    tabpara.innerHTML= `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. <br/>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.`;
})
tabBox3.addEventListener('click', ()=>{
    tabBox2.classList.remove("activeBox");
    tabBox3.classList.add("activeBox");
    tabBox1.classList.remove("activeBox");
    tabheading.innerHTML = "Tab Three(3) with soft transitioning effect!" ;
    tabpara.innerHTML = `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. <br><br>Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`
})