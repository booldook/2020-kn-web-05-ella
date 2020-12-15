function genStar(v) {
	for(var i=1, html=''; i<6; i++) {
		if(Math.ceil(v) >= i) html += '<i class="star fa fa-star"></i>';
	}
	return html;
}

function onGet(r) {
	var i, html;
	for(i in r) {
		html  = '<li class="prd">';
		html += '	<div class="img-wrap">';
		html += '		<img src="'+r[i].src+'" style="width: 100%;">';
		html += '	</div>';
		html += '	<div class="info-wrapper">';
		html += '		<h3 class="title">';
		html += '			<span>'+r[i].title+'</span>';
		html += '			<i class="far fa-heart"></i>';
		html += '		</h3>';
		html += '		<p class="summary">'+r[i].summary+'</p>';
		html += '		<div class="price">'+r[i].salePrice+'</div>';
		html += '		<div class="star-wrap"></div>';
		html += '	</div>';
		html += '</li>';
		console.log( genStar(r[i].star) );
		$(html).appendTo(".wrapper > .prd-wrapper").find(".star-wrap").html(genStar(r[i].star));
	}
}
$.get('../json/products.json', onGet);