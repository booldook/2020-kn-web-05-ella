/********* 전역선언 **********/


/********* 사용자함수 **********/


/********* 이벤트선언 **********/
$('.top-wrapper .icon-down').click(onLangChg); // 언어선택
$('.top-wrapper .bt-down').click(onLangSel); // 언어선택
$.get('../json/new-products.json', onNewProducts); // new releases 상품 가져오기


/********* 이벤트콜백 **********/
function onNewProducts(r) {
	console.log(r);
	for(var i=0, html=''; i<r.length; i++) {
		html  = '<div class="slide">';
		html += '<div class="img-wrap">';
		html += '<img src="'+r[i].src+'" alt="상품" class="w-100">';
		html += '</div>';
		html += '<div class="content-wrap">';
		html += '<h4 class="title">'+r[i].title+'</h4>';
		html += '<p class="summary">'+r[i].summary+'</p>';
		html += '<div class="star">';
		for(var j=1; j<=5; j++) {
			if(r[i].star == 0) html += '<i class="fa fa-star"></i>';
			else if(r[i].star >= j) {
				if(r[i].star >= j+0.3 && r[i].star <= j+0.7) html += '<i class="fa fa-star-half active"></i>';
				else html += '<i class="fa fa-star active"></i>';
			}
		}
		html += '</div>';
		html += '<div class="content">';
		html += '<span class="price-original">$'+r[i].originalPrice+'</span>';
		html += '<span> | </span>';
		html += '<span class="origin">'+r[i].origin+'</span>';
		html += '</div>';
		html += '<div class="price-sale">$'+r[i].salePrice+'</div>';
		html += '</div>';
		html += '</div>';
		$(".navi-new .slide-container").append(html);
	}
}
function onLangChg() {
	$(".trans-wrapper").stop().slideToggle(200);
	$(".trans-wrapper .lang-sel").stop().slideUp(200);
}
function onLangSel() {
	$(".trans-wrapper .lang-sel").stop().slideUp(200);
	if($(this).next().css("display") === 'none') $(this).next().stop().slideDown(200);
}