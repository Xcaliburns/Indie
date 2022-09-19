let image__slider = document.getElementsByClassName('image__slider');

let imageAffichee = 0 ;
let nombreImage = image__slider.length;
let precedent = document.querySelector('.precedent');
let suivant = document.querySelector('.suivant');

function enleverActiveImages(){
    for( let i=0; i < nombreImage; i++){
        image__slider [i].classList.remove('active');
    }
}

suivant.addEventListener('click',function(){
    imageAffichee ++ ;
    if(imageAffichee>=nombreImage){
        imageAffichee=0;
    }
    enleverActiveImages();
    image__slider[imageAffichee].classList.add('active');

})

precedent.addEventListener('click',function(){
    imageAffichee--;
    if(imageAffichee<0){
        imageAffichee =  nombreImage-1;
    }
    enleverActiveImages();
    image__slider[imageAffichee].classList.add('active');
}

)