/**
 *! A 알고리즘
 * 1. 1 ~ 45까지의 숫자 중 원하는 번호를 생성한다 - Math.random()
 * 2. 추출된 번호를 lotto배열에 넣는다. 단 중복되면 안된다.
 * 3. 6개의 번호가 추출되면 .result-wrap에 공을 만들어 넣는다.
 * 
 *! B 알고리즘
 * 1. 1~45까지의 번호가 존재하는 numbers 배열이 있다.
 * 2. numbers에서 6개의 번호를 추출하여 lotto배열에 넣는다.
 * 3. 6개의 번호가 추출되면 .result-wrap에 공을 만들어 넣는다.
 * 
 *? 다 만들면 booldook@gmail.com으로 폴더 전체를 압축하여 보낸다.
 * 보내는 제목 : [홍길동] 로또 숙제
 */

var lotto = [];				// 로또 번호를 담을 배열
var legacyLotto = [];	// 기존 로또 번호를 담을 배열

function colorSel(n) {
	if(n <= 10) return 'yellow';
	else if(n <= 20) return 'blue';
	else if(n <= 30) return 'red';
	else if(n <= 40) return 'grey';
	else return 'green';
}

function onLucky() {
	legacyLotto = lotto;
	lotto = [];
	var number;			// 추출한 번호를 담을 변수
	var color;			// 생성될 공의 class를 담을 변수
	while(lotto.length < 6) {	// 6개의 랜덤한 번호를 lotto에 넣는다.
		number = Math.floor(Math.random() * 45) + 1;
		if(lotto.indexOf(number) == -1) lotto.push(number);
	}
	lotto.sort(function(a, b) {	// lotto를 오름차순으로 정렬한다.
		return a - b; // 오름차순
		// return b - a; // 내림차순
	});
	
	$(".result-wrap").empty();	// 기존의 번호를 지운다.

	// for(var i=0; i<lotto.length; i++) {
	for(var i in lotto) {	// 공을 생성해서 화면에 그린다.
		$(".result-wrap").append('<div class="number '+colorSel(lotto[i])+'">'+lotto[i]+'</div>');
	}
	if(legacyLotto.length > 0) {
		html  = '<div class="history">';
		for(var i in legacyLotto) {	// 공을 생성해서 화면에 그린다.
			html += '<div class="number '+colorSel(legacyLotto[i])+'">'+legacyLotto[i]+'</div>';
		}
		html += '</div>';
		$(".history-wrapper").prepend(html);
	}
}

$("#btLucky").click(onLucky);
