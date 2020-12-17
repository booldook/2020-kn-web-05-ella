/**
* ! 프로그램 세팅값 - obj 인자값
*
*	obj = {
*		container: '#booldookSlide',
*		stageViewDefault: 4,	// 스테이지에 보여질 개수 기준값(PC)
*		moveCnt: 1, // 한번에 움직여 지는 슬라이드 개수 // ? 아직 미구현
*		speed: 300,
*	}
*/

function BDSlide(obj) {
	this.$container = $(obj.container || '#booldookSlide');
	this.$stage = this.$container.find('.slide-stage');
	this.$wrapper = this.$container.find('.slide-wrapper');
	this.$slide = this.$container.find('.slide');
	this.$btPrev = this.$container.find('.bt-prev');
	this.$btNext = this.$container.find('.bt-next');
	this.$pagerWrapper = this.$container.find('.pager-wrapper');
	for(var i=0; i<this.$slide.length; i++)
	$('<i class="pager"></i>').appendTo(this.$pagerWrapper);
	this.$pager = this.$container.find('.pager');
	
	this.speed = obj.speed || 300;
	this.stageViewDefault = obj.stageViewDefault || 4;
	this.moveCnt = obj.moveCnt || 1;

	this.slideCnt = this.$slide.length;	// 슬라이드의 총 개수 length
	this.slideLast = this.slideCnt - 1; // 슬라이드의 마지막 index 
	this.slideWid;	// 반응형 - 슬라이드의 width
	this.stageView;	// 반응형 - 스테이지에 보여질 슬라이드 개수 - 변하는 값
	this.now = 0; // 기준값
	this.direction = 1; // 1: 오른쪽으로 이동(Prev) / -1: 왼쪽으로 이동(Next)
	this.target;	// Animation($wrapper)될 left값

	

	BDSlide.prototype.onPrev = function(e) {
		this.target = this.slideWid * this.moveCnt + "%";
		this.now = this.now == 0 ? this.slideLast : this.now - 1;
		this.slideAni();
	}.bind(this);

	BDSlide.prototype.onNext = function(e) {
		this.target = -this.slideWid * this.moveCnt + "%";
		this.now = this.now == this.slideLast ? 0 : this.now + 1;
		this.slideAni();
	}.bind(this);

	BDSlide.prototype.onResize = function(e) {
		var wid = $(window).width();	//브라우저의 width
		console.log(e);
		this.stageView = this.stageViewDefault;
		if(wid < 576) this.stageView = 1;
		else if(wid < 768) this.stageView = this.stageViewDefault < 2 ? this.stageViewDefault : 2;
		else if(wid < 992) this.stageView = this.stageViewDefault < 3 ? this.stageViewDefault : 3;
		else if(wid < 1200) this.stageView = this.stageViewDefault < 4 ? this.stageViewDefault : 4;
		this.slideWid = 100 / this.stageView;
		this.init();
	}.bind(this);

	BDSlide.prototype.init = function () {
		console.log(this.$wrapper);
		this.$wrapper.empty().css("left", 0);
		this.$pagerWrapper.find('.pager').removeClass('active').eq(this.now).addClass('active');
		this.$slide.eq(this.now).clone().appendTo(this.$wrapper).css("width", this.slideWid+"%");
		for(var i=0, my, prev=this.now; i<this.stageView; i++) {
			prev = my = (prev == 0) ? this.slideLast : prev - 1;
			this.$slide.eq(my).clone().prependTo(this.$wrapper).css("width", this.slideWid+"%");
		}
		for(var i=0, my, prev=this.now; i<this.stageView*2-1; i++) {
			prev = my = (prev == this.slideLast) ? 0 : prev + 1;
			this.$slide.eq(my).clone().appendTo(this.$wrapper).css("width", this.slideWid+"%");
		}
	}.bind(this);

	BDSlide.prototype.slideAni = function() {
		this.$wrapper.stop().animate({"left": this.target}, this.speed, this.init);
	}

	this.$btPrev.click(this.onPrev);
	this.$btNext.click(this.onNext);
	
	$(document).resize(this.onResize).trigger('resize');
	return this;
}

