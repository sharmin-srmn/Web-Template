const bottomBar =  document.querySelector('.bottom-bar');
window.addEventListener('scroll', ()=>{
    if(scrollY>=300){
        bottomBar.style.position = 'fixed';
        bottomBar.style.top = '0';
    }else{
        bottomBar.style.position = 'static';

    }
})

const collageImages = [...document.querySelectorAll('.collage-img')]
collageImages.map((item , index) =>{
    item.addEventListener("mouseover", () => {
        collageImages.map((image,i) =>{
            if (index != i){
                image.style.filter = "blur(5px)";
                item.style.zIndex = 2;
            }
        })
    })
    item.addEventListener('mouseleave', ()=>{
        collageImages.map((image, index) =>{
            image.style = null;
        })
    })
})