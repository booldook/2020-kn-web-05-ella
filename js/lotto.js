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
 * ===============================================================
 * Array Method
 * push() // 맨 뒤에 요소 추가
 * pop() // 맨 뒤에서 요소 추출
 * shift() // 맨 앞에 요소 추가
 * unshift() // 맨 앞에서 요소 추출
 * sort() // 문자열 오름차순으로 정렬 (콜백함수로 숫자의 오름차순, 내림차순을 할 수 있다.)
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

function genLottoHtml(arr) {
	var html = '';
	// for(var i=0; i<lotto.length; i++) {
	for(var i in arr) {
		html += '<div class="number '+colorSel(arr[i])+'">'+arr[i]+'</div>';
	}
	return html;
}

function onLucky() {
	legacyLotto = lotto;
	lotto = [];
	var number;			// 추출한 번호를 담을 변수
	var color;			// 생성될 공의 class를 담을 변수
	
	// 1. 6개의 랜덤한 번호를 lotto에 넣는다.
	/**
	 * A 알고리즘
	 * while(lotto.length < 6) {
	 * 	number = Math.floor(Math.random() * 45) + 1;
	 * 	if(lotto.indexOf(number) == -1) lotto.push(number);
	 * }
	 */
	// B 알고리즘
	var defaultLotto = [];
	for(var i=1; i<=45; i++) defaultLotto.push(i);
	defaultLotto = _.shuffle(defaultLotto);
	for(var i=0; i<6; i++) lotto.push(defaultLotto.pop());

	// 2. lotto를 오름차순으로 정렬한다.
	// return a - b; // 오름차순
	// return b - a; // 내림차순
	lotto.sort(function(a, b) { return a - b; });
	
	// 3. 기존의 번호를 지운고, 공을 생성해서 화면에 그린다.
	$(".result-wrap").empty().append(genLottoHtml(lotto));
	
	// 4. 기존 번호(legacyLotto)로 아래에 그린다.
	if(legacyLotto.length > 0) {
		html  = '<div class="history">';
		html += genLottoHtml(legacyLotto);
		html += '</div>';
		$(".history-wrapper").prepend(html);
	}
}

$("#btLucky").click(onLucky);
