
// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae);      // デバッグ用

// 入力回数（予想回数）
let kaisu = 0;
let yoso;

// 予想を4回実行する
// 将来: ボタンを押したら， hantei() を呼び出すように修正する
hantei();

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
    yoso = 4;       // 第5回課題:テキストボックスの数値をここに代入
    // 課題3-1：ここの判定処理を作成する．
    //        ページに表示する方法はまだ習っていないので
    //        判定結果はコンソールに出力すること
    kaisu = kaisu + 1;
    if (kaisu<4) {
        console.log(kaisu + "回目の予想:" + yoso);
        if (kaisu===3 && yoso !== kotae) {
            let kekka = document.querySelector("まちがい．残念でした答えは" + kotae + "です．");
            kekka.textContent = kekka;
        }else if (yoso>kotae) {
            console.log("まちがい．答えはもっと小さいですよ");
        }else if(yoso<kotae) {
            console.log("まちがい．答えはもっと大きいですよ")
        }else{
            console.log("正解です．おめでとう!");
        }
    }else{
        console.log("答えは" + kotae + "でした．すでにゲームは終わっています")
    }


}

let s = document.querySelector('span#kaisu');
s.textContent = kaisu;
let t = document.querySelector('span#yoso');
t.textContent = yoso;
let k = document.querySelector('span#kotae');
k.textContent = kotae;