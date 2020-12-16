/**
 *! 전역변수
 */
var $container = $('.booldook-slide');
var $stage = $('.booldook-slide').find('.slide-stage');
var $wrapper = $('.booldook-slide').find('.slide-wrapper');
var $slide = $('.booldook-slide').find('.slide');
var slideCnt = $slide.length;	// 슬라이드의 총 개수 length
var slideLast = slideCnt - 1; // 슬라이드의 마지막 index 
var stageCnt = 4;	// 스테이지에 보여질 개수
var now = 3;


/**
 *! 사용자 함수
 */
function init() {
	$wrapper.empty();
	$slide.eq(now).clone().appendTo($wrapper);
	for(var i=0, my, prev=now; i<stageCnt; i++) {
		prev = my = (prev == 0) ? slideLast : prev - 1;
		$slide.eq(my).clone().prependTo($wrapper);
	}
	for(var i=0, my, prev=now; i<stageCnt*2-1; i++) {
		prev = my = (prev == slideLast) ? 0 : prev + 1;
		$slide.eq(my).clone().appendTo($wrapper);
	}
}

/**
 *! 이벤트 콜백
 */




/**
 *! 이벤트 등록
 */










init();