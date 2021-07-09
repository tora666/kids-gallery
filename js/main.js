'use strict';

{
    const container = document.getElementById('main_container');
    const img = document.getElementById('popup_img');
    let products = document.getElementsByClassName('products');

    container.addEventListener('click', (a) => {
        let img_url = a.target.src; 
        console.log(img_url);
        img.src = img_url;
        a.target.parentNode.classList.add('display');
    });
}

