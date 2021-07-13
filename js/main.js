'use strict';

{
    const container = document.getElementById('main_container');
    const popup = document.getElementById('popup');
    const popup_title = document.getElementById('popup_title');
    const popup_name = document.getElementById('creater_name');
    const close = document.getElementById('close');

    container.addEventListener('click', (e) => {
        // 先に作られたimgがあれば削除する
        let children = popup.childNodes;
        if (children[5].tagName === "IMG")
        {
            children[5].remove();
        }

        // クリックした要素を複製して挿入する。クラスを付けて表示する
        let clone_img = e.target.cloneNode(true);
        clone_img.classList.add('popup_img');
        popup.insertBefore(clone_img, popup_title);
        popup.classList.remove('display-none');
        popup.classList.add('display-block'); // toggleにすべき？
        
        // 作者名を入れる。srcから切り取って入れる。
        let clone_name = e.target.src.split('/');
        clone_name = (clone_name[clone_name.length - 1].split('_'))[0];
        clone_name = Check_name(clone_name);
        popup_name.textContent = clone_name;

        // バツボタンで閉じる。
        close.addEventListener('click', () => {
            clone_img.remove();
            popup.classList.remove('display-block');
            popup.classList.add('display-none');
        });

        // 作者名の振り分け用
        function Check_name(name){
            switch(name) {
                case 'shizuku':
                    return 'Shizuo';
                    break;
                case 'kai':
                    return 'kai-Knight';
                    break;
                case 'sumire':
                    return 'Sumii';
                    break;
                case 'yuzu':
                    return 'Yu-san';
                    break;
                default:
                    return 'だれか';
            }
        }
    });
}

