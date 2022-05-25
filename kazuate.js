
// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae);      // デバッグ用

let kaisu = 0;
let yoso;
let seikai = 0;
hantei();
function hantei() {
    yoso = 4;
    kaisu = kaisu + 1;
    let s = document.querySelector('span#kaisu');
    s.textContent = kaisu;
    let t = document.querySelector('span#yoso');
    t.textContent = yoso;
    if (kaisu<4) {
        console.log(kaisu + "回目の予想:" + yoso);
        if (kaisu===3 && yoso !== kotae) {
            let kotae="まちがい、残念でした答えは'+'kotae'+'です。";
            let d=document.querySelector('p#result');
            d.textContent=kotae;
        }else if (yoso>kotae) {
            let kotae="まちがい、答えはもっと小さいですよ。";
            let d=document.querySelector('p#result');
            d.textContent=kotae;
        }else if(yoso<kotae) {
            let kotae="まちがい、答えはもっと大きいですよ。";
            let d=document.querySelector('p#result');
            d.textContent=kotae;
        }else if(yoso===kotae&&seikai<1){
            let kotae="正解です。おめでとう！";
            let d=document.querySelector('p#result');
            d.textContent=kotae;
            seikai++;
            kaisu+=10;
        }
    }else{
        console.log("答えは" + kotae + "でした．すでにゲームは終わっています")
    }


}
