/**
 * Javascript 11대 객체
 * 01. String
 * 02. Number
 * 03. Boolean
 * 04. Undefined
 * 05. Null
 * 06. Global - 전역(window)
 * 07. Math - 수학
 * 08. Date - 시간과 날짜
 * 09. Array - 배열
 * 10. RegExp - 정규표현식
 * 11. Object - 객체
 */

var colors = ['red', 'green', 'orange', 'blue', 'pink'];

function onCreateBox() {
	var cnt = Number($("input[name='cnt']").val());
	for(var i=0, color; i<cnt; i++) {
		color = Math.ceil(Math.random() * 5) - 1;
		$(".wrapper").append('<div class="box '+colors[color]+'"></div>');
	}
}

function onResetBox() {
	$(".wrapper").empty();
}

$("#btCreate").click(onCreateBox);
$("#btReset").click(onResetBox);