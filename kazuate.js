
// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae);      // デバッグ用

let kaisu = 1;
let kaisu2 = 1;
let yoso;
let seikai = 0;

let b = document.querySelector('#print');
b.addEventListener('click', hantei);

function hantei() {
    let i = document.querySelector('input[name="kaitou"]');
    let r = i.value; 
    yoso = Number(r)
    let s = document.querySelector('span#kaisu');
    s.textContent = kaisu;
    let t = document.querySelector('span#yoso');
    t.textContent = yoso;
    if (kaisu<4&&kaisu2<4) {
        console.log(kaisu + "回目の予想:" + yoso);
        if (kaisu===3 && yoso !== kotae) {
            let k=("まちがい、残念でした答えは"+kotae+"です。");
            let d=document.querySelector('p#result');
            d.textContent=k;
        }else if (yoso>kotae) {
            let k="まちがい、答えはもっと小さいですよ。";
            let d=document.querySelector('p#result');
            d.textContent=k;
        }else if(yoso<kotae) {
            let k="まちがい、答えはもっと大きいですよ。";
            let d=document.querySelector('p#result');
            d.textContent=k;
        }else if(yoso===kotae&&seikai<1){
            let k="正解です。おめでとう！";
            let d=document.querySelector('p#result');
            d.textContent=k;
            seikai++;
            kaisu2+=3;
        }
    }else{
        let k="答えは" + kotae + "でした．すでにゲームは終わっています";
        let d=document.querySelector('p#result');
        d.textContent=k;
    }

    kaisu = kaisu + 1;


}
