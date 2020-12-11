# CSS 우선순위

## 점수
![css점수](./capture/css-score.jpg)

```html
<div class="wrapper">
	<ul class="wrap">
		<li class="list" id="A">가</li>
		<li class="list" id="B">나</li>
	</ul>
</div>
```

```css
#A {} /* 1000점 */
.list {}	/* 10점 */
ul {}	/* 1점 */
.wrapper .list {}	/* 20점 */
.wrapper > ul > li {}	/* 12점 */
```