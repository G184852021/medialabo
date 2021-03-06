/* let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
}; */

////////// 課題3-2 ここからプログラムを書こう



let b = document.querySelector('button#print');
b.addEventListener('click', search);

function search() {
  let i = document.querySelector('input[name="chimei"]');
	let c = i.value;
  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+ c + '.json';

  axios.get(url)
	  	.then(showResult)
	  	.catch(showError)
	  	.then(finish);
}

// 通信が成功した時の処理
function showResult(resp) {
	// サーバから送られてきたデータを出力
	let data = resp.data;

	// data が文字列型なら，オブジェクトに変換する
	if (typeof data === 'string') {
		data = JSON.parse(data);
	}

  let a = document.querySelector('span#chiten');
  a.textContent=data.name;

  let h = document.querySelector('span#saikou');
  h.textContent=data.main.temp_max + '℃';
	
  let l = document.querySelector('span#saitei');
  l.textContent=data.main.temp_min+ '℃';

  let s = document.querySelector('span#shitsudo')
  s.textContent=data.main.humidity+ '%';

  let u = document.querySelector('span#husoku')
  u.textContent=data.wind.speed+ 'm/s';

  let k = document.querySelector('span#kazamuki')
  k.textContent=data.wind.deg;
}

// 通信エラーが発生した時の処理
function showError(err) {
	console.log(err);
}	

// 通信の最後にいつも実行する処理
function finish() {
	console.log('Ajax 通信が終わりました');
}
