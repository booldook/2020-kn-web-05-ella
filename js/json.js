var products = [
	{
		id: 1,
		link: "#",
		title: "MARK",
		summary: "Dinterdum Pretium De Condimentus",
		star: 5.0,
		originalPrice: 199.00,
		salePrice: 139.00,
		origin: "from",
		src: "../img/pic1.jpg"
	},
	{
		id: 2,
		link: "#",
		title: "G-STAR",
		summary: "Dinterdum Pretium De Condimentus",
		star: 4.5,
		originalPrice: 189.00,
		salePrice: 0,
		origin: "",
		src: "../img/pic2.jpg"
	},
	{
		id: 3,
		link: "#",
		title: "CHANEL",
		summary: "Dinterdum Pretium De Condimentus",
		star: 5,
		originalPrice: 215.00,
		salePrice: 192.10,
		origin: "",
		src: "../img/pic3.jpg"
	},
	{
		id: 4,
		link: "#",
		title: "BURBERRY",
		summary: "Dinterdum Pretium De Condimentus",
		star: 4,
		originalPrice: 189.00,
		salePrice: 0,
		origin: "",
		src: "../img/pic4.jpg"
	},
	{
		id: 5,
		link: "#",
		title: "BURBERRY",
		summary: "Dinterdum Pretium De Condimentus",
		star: 3,
		originalPrice: 90.00,
		salePrice: 0,
		origin: "",
		src: "../img/pic5.jpg"
	},
	{
		id: 6,
		link: "#",
		title: "BENJAMIN BUTTON",
		summary: "Dinterdum Pretium De Condimentus",
		star: 5,
		originalPrice: 189.00,
		salePrice: 0,
		origin: "",
		src: "../img/pic6.jpg"
	},
];

var json = JSON.stringify(products);
var js = JSON.parse(json);
console.log(json);
console.log(js);
