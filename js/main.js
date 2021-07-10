'use strict';

{
    const container = document.getElementById('main_container');
    const popup = document.getElementById('popup')
    const img = document.getElementById('popup_img');

    container.addEventListener('click', (e) => {
        console.log(popup.className);
        if (popup.className === 'display-block')
        {
            popup.classList.remove('display-block');
            popup.classList.add('display-none');
        }
        console.log(popup.className);
        // let img_url = e.target.src; 
        // console.log(img_url);
        // img.src = img_url;
        popup.classList.remove('display-none');
        popup.classList.add('display-block');
    });
}

