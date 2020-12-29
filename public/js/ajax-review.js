/**
 * 
 * function onGet(r) {
		var html = '', i;
		for(i in r) {
			html += '<div class="thumb">';
			html += '<img src="'+r[i].src+'" alt="'+r[i].title+'">';
			html += '</div>';
		}
		$(".thumb-wrapper").append(html);
		$(".thumb-wrapper .thumb").click(onThumbClick);
	}
 */

function onGet(r) {
	var html, i;
	for(i in r) {
		html  = '<div class="thumb" data-id="'+i+'">';
		html += '<img src="'+r[i].src+'" alt="'+r[i].title+'">';
		html += '</div>';
		$(html).appendTo(".thumb-wrapper").click(onThumbClick);
	}
	$(".thumb").eq(0).trigger('click');

	function onThumbClick() {
		var idx = $(this).data('id');
		$(".img-wrap img").attr("src", r[idx].src);
		$(".info-wrap .title").text(r[idx].title);
		$(".info-wrap .summary").text(r[idx].summary);
		$(".info-wrap .bt-search").attr('href', '//google.com/search?q='+r[idx].title).text(r[idx].title + ' 검색');
	}
}

$.get('../json/gallery.json', onGet);