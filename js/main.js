'use strict';

{
    const container = document.getElementById('main_container');
    const popup = document.getElementById('popup');
    const popup_img = document.getElementById('popup_img');
    const popup_title = document.getElementById('popup_title');
    const popup_name = document.getElementById('creater_name');
    const mask = document.getElementById('mask');
    const close = document.getElementById('close');
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    const imgList = container.getElementsByTagName('img');

    let currentIndex = 0;

    //先頭と最後のimgが選択されている時にprevとnextボタンを隠す
    function updateButtons() {
        prev.classList.remove('display-none');
        next.classList.remove('display-none');
    
        if (currentIndex === 0) {
          prev.classList.add('display-none');
        }
        if (currentIndex === imgList.length - 1) {
          next.classList.add('display-none');
        }
    }

    // Lightboxを閉じる
    function closeLightbox(clone) {
        clone.remove();
        popup.classList.remove('display-block');
        popup.classList.add('display-none');
        mask.classList.remove('mask-on');
    }

    // 指定したimgをクローンしてLightboxに挿入する
    function cloneImg(img) {
        let clone_img = img.cloneNode(true);
        clone_img.classList.add('popup_img');
        popup_img.insertBefore(clone_img, popup_title);
        return clone_img;
    }

    // 先に作られたimgがあれば削除する
    function removeImg() {
        let children = popup_img.childNodes;
        for(let i = 0; i < children.length; i++)
        {
            if (children[i].tagName === "IMG")
            {
                children[i].remove();
            }
        }
    }

    // currentIndexを取得する
    function getCurrentIndex(target) {
        for(let i = 0; i < imgList.length; i++)
        {
            if(imgList[i] === target)
            {
                currentIndex = i;
            }
        }
    }

    // 作者名を取得する
    function getCreatorName(target) {
        let clone_name = target.src.split('/');
        clone_name = (clone_name[clone_name.length - 1].split('_'))[0];
        clone_name = checkName(clone_name);
        popup_name.textContent = clone_name;
    }

    // 作者名の振り分け用　（クリックイベントの外でも良い...？）
    function checkName(name){
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

    container.addEventListener('click', (e) => {
        removeImg();
        getCurrentIndex(e.target);
        updateButtons()

        // mask、lightboxを表示
        mask.classList.add('mask-on');
        popup.classList.remove('display-none');
        popup.classList.add('display-block');

        // クリックした要素を複製して挿入する。クラスを付けて表示する
        let clone_img = cloneImg(e.target);
        
        // 作者名を入れる。srcから切り取って入れる。
        getCreatorName(e.target);

        // バツボタンで閉じる。
        close.addEventListener('click', () => {
            closeLightbox(clone_img);
        });

        // mask で閉じる
        mask.addEventListener('click', () => {
            closeLightbox(clone_img);
        });

        //　戻るボタン
        prev.addEventListener('click', () => {
            currentIndex--;
            updateButtons()
            removeImg();
            clone_img = cloneImg(imgList[currentIndex]);
            
        });

        // 進むボタン
        next.addEventListener('click', () => {
            currentIndex++;
            updateButtons()
            removeImg();
            clone_img = cloneImg(imgList[currentIndex]);
            getCreatorName(imgList[currentIndex]);
        });
    });
}

