/**
 *! 프로그램 세팅값
 */
var container = '.booldook-slide';
var stageDefault = 5;	// 스테이지에 보여질 개수 기준값(PC)
var moveCnt = 1;			// 한번에 움직여 지는 슬라이드 개수


/**
 *! 전역변수
 */
var $container = $(container);
var $stage = $(container).find('.slide-stage');
var $wrapper = $(container).find('.slide-wrapper');
var $slide = $(container).find('.slide');
var slideCnt = $slide.length;	// 슬라이드의 총 개수 length
var slideLast = slideCnt - 1; // 슬라이드의 마지막 index 
var slideWid;	// 슬라이드의 width
var slideCnt;	// 스테이지에 보여질 개수의 반응형에 따른 변하는 값
var now = 0;


/**
 *! 사용자 함수
 */
function init() {
	$wrapper.empty();
	$slide.eq(now).clone().appendTo($wrapper).css("width", slideWid+"%");
	for(var i=0, my, prev=now; i<stageCnt; i++) {
		prev = my = (prev == 0) ? slideLast : prev - 1;
		$slide.eq(my).clone().prependTo($wrapper).css("width", slideWid+"%");
	}
	for(var i=0, my, prev=now; i<stageCnt*2-1; i++) {
		prev = my = (prev == slideLast) ? 0 : prev + 1;
		$slide.eq(my).clone().appendTo($wrapper).css("width", slideWid+"%");
	}
}

/**
 *! 이벤트 콜백
 */
function onResize() {
	var wid = $(this).outerWidth();
	stageCnt = stageDefault;
	if(wid < 576) stageCnt = (stageDefault - 4 < 1) ? 1 : stageDefault - 4;
	else if(wid < 768) stageCnt = (stageDefault - 3 < 1) ? 1 : stageDefault - 3;
	else if(wid < 992) stageCnt = (stageDefault - 2 < 1) ? 1 : stageDefault - 2;
	else if(wid < 1200) stageCnt = (stageDefault - 1 < 1) ? 1 : stageDefault - 1;
	slideWid = 100 / stageCnt;
	console.log(stageCnt, slideWid);
	init();
}

/**
 *! 이벤트 등록
 */
$(window).resize(onResize).trigger("resize");








