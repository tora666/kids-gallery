'use strict';

{
    const container = document.getElementById('main_container');
    const popup = document.getElementById('popup');
    const popup_title = document.getElementById('popup_title');
    const close = document.getElementById('close');

    container.addEventListener('click', (e) => {
        let children = popup.childNodes;
        console.log(children);
        console.log(children[5].tagName);
        if (children[5].tagName === "IMG")
        {
            children[5].remove();
        }
        const clone_img = e.target.cloneNode(true);
        clone_img.classList.add('popup_img');
        popup.insertBefore(clone_img, popup_title);
        popup.classList.remove('display-none');
        popup.classList.add('display-block'); // toggle?

        close.addEventListener('click', () => {
            clone_img.remove();
            popup.classList.remove('display-block');
            popup.classList.add('display-none');
        });
    });
}

