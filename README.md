# Foundations Session 8

## Homework

Start on your final projects. There are very few requirements for this project other than it must be a web page or series of web pages that incorporate the concepts and techniques covered in class.

It is not required that you prepare a specific number of pages. Depending on the design goals, one good template could suffice for many pages and it is possible to spend as much time on a single page as on an entire site.

Making the page "mobile friendly" is required as is at least one instance of DOM scripting.

[Pick up where we left off ](https://github.com/front-end-foundations/session7#columns-for-content)

Top of the page

![image](/other/img/wide.png)

Mobile view

![image](/other/img/mobile.png)

Full page

![image](/other/img/siteDesign.png)

Add responsive code for the main columns.

```css
@media (min-width: $break-sm) {
	section {
		max-width: $max-width;
		margin: 0 auto;
    padding-bottom: 1.5em;
    display: flex;
	}
	article {
	 	flex: 0 0 60%;
		padding-right: 24px;
	}
	aside {
		flex: 0 0 40%;
	}
}
```

## Tooling

```sh
$ cd <session8>
$ npm i
$ npm run boom!
```

Review:

* directory structure
* header nesting .css to .scss
* sass mapping
* Media Query - Mobile First
* Variables
* Responsive Nav .scss

Add variables:

```sass
$radius: 4px;
$lt-yellow: #f8f7f3;
```

### Responsive Images

iFrame and images need to expand and contract to fit.

Note the inline width and height parameters for the iFrame in the HTML.

`_base.scss`:

```css
img,
iframe {
	width: 100%;
}
```

Also add some basic styling to `_base.scss`:

```css
p {
	margin: 12px 0;
}

h2 {
	margin-bottom: 12px;
	padding-bottom: 6px;
	font-size: 24px;
	letter-spacing: -1px;
}

h3,
h4 {
	font-size: 16px;
	line-height: 1.25;
	margin-bottom: 20px;
}
```

## Sticky Nav

In `_nav.scss`:

```css
nav {
	position: fixed;
	width: 100%;
	🔥
}
```

Add padding to the top of the header to compensate.

```css
header {
	max-width: $max-width;
	margin: 0 auto;
```

Add black color to the video iframe.

## Columns for Content

Review the html structure of the page.

<!-- In a new `_structure.scss` file:

```css
section {
	max-width: 940px;
	margin: 0 auto;
	padding-bottom: 1.5em;
}
article {
	box-sizing: border-box;
	float: left;
	width: 60%;
	padding-right: 24px;
}
aside {
	float: right;
	width: 40%;
}
```

Apply the second breakpoint variable to medium screen sizes and above only:

```css
@media (min-width: $break-med) {
	section {
		max-width: 940px;
		margin: 0 auto;
		padding-bottom: 1.5em;
	}
	article {
		box-sizing: border-box;
		float: left;
		width: 60%;
		padding-right: 24px;
	}
	aside {
		float: right;
		width: 40%;
	}
}
``` -->

The Secondary div:

```css
.secondary {
	background: $lt-yellow;
  border: 1px solid $dk-yellow;
  border-left: none;
  border-right: none;
	padding: 1em;
}
```

### Micro clearfix

```css
section:before,
section:after {
	content: ' ';
	display: table;
}
section:after {
	clear: both;
}
```

If you use this approach it is best to define a cf class and use it as necessary.

```css
.clearfix:before,
.clearfix:after {
	content: ' ';
	display: table;
}
.clearfix:after {
	clear: both;
}
```

<!-- Add the clearfix to the section and secondary div:

`<section class="clearfix">`

`<div class="secondary clearfix">`

### Flex Columns

```css
@media (min-width: $break-sm) {
	section {
		max-width: 940px;
		margin: 0 auto;
		display: flex;
	}
	article {
		flex: 2;
		padding-right: 2rem;
	}
	aside {
		flex: 1;
	}
}

.secondary {
	background: $lt-yellow;
	border: 1px solid $dk-yellow;
	padding: 1em;
}
``` -->

### CSS Grid

Delete/comment everything from `_structure.scss` except the `.secondary` rule.

```css
section {
	max-width: $max-width;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 60% 40%;
	grid-column-gap: 2rem;
}

header,
section {
  padding: 1rem;
}
```

Note that, because of the column gap, the overall width of the two columns is greater than 100%.

Use `fr` units instead to keep proportion and allow a gap that is contained by the overall max-width:

```css
section {
	max-width: $max-width;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 8fr 4fr;
	grid-column-gap: 2rem;
}
```

### The Footer

Examine the html structure for this section.

Import a new file `_footer.scss` in styles.scss and add:

```css
footer {
	margin-top: 40px;
	padding-top: 40px;
	background-color: $link;
	min-height: 320px;
	.siteinfo {
		display: grid;
		grid-template-columns: 6fr 3fr 3fr;
		grid-column-gap: 4rem;
		max-width: $max-width;
		margin: 0 auto;
		color: #fff;
		padding: 1rem;
		a {
			color: #fff;
		}
		p {
			margin-top: 0;
		}
	}
}
```

Test on large and small screens.

Add media query to switch the grid from columns to rows for small screens:

```css
footer {
	margin-top: 40px;
	padding-top: 40px;
	background-color: $link;
	min-height: 320px;
	.siteinfo {
		display: grid;
		grid-template-rows: 3fr 3fr 3fr;
		margin: 0 auto;
		color: #fff;
    padding: 1rem;
		@media (min-width: $break-sm) {
			grid-template-columns: 6fr 3fr 3fr;
			grid-column-gap: 4rem;
			max-width: $max-width;
		}

		a {
			color: #fff;
		}
		p {
			margin-top: 0;
		}
	}
}
```

Want to reorder the content?

```css
footer {
	margin-top: 40px;
	padding-top: 40px;
	background-color: $link;
	min-height: 320px;
	.siteinfo {
		display: grid;
    grid-template-rows: 3fr 3fr 3fr;
		margin: 0 auto;
		color: #fff;
		padding: 1rem;
				a {
			color: #fff;
		}
		p {
			margin-top: 0;
    }
    ul {
      grid-row-start: 1;
    }
    .vcard {
      grid-row-start: 2;
    }
		@media (min-width: $break-sm) {
			grid-template-columns: 6fr 3fr 3fr;
			grid-column-gap: 4rem;
			max-width: $max-width;
		ul {
      grid-row-start: auto;
    }
    .vcard {
      grid-row-start: auto;
    }
		}
	}
}
```

Reset it for the wide screen:

```css
footer {
	margin-top: 40px;
	padding-top: 40px;
	background-color: $link;
	min-height: 320px;
	.siteinfo {
		display: grid;
    grid-template-rows: 3fr 3fr 3fr;
		margin: 0 auto;
		color: #fff;
		padding: 1rem;
    a {
			color: #fff;
		}
		p {
			margin-top: 0;
    }
    ul {
      grid-row-start: 1;
    }
    .vcard {
      grid-row-start: 2;
    }
		@media (min-width: $break-sm) {
			grid-template-columns: 6fr 3fr 3fr;
			grid-column-gap: 4rem;
			max-width: $max-width;
      ul {
        grid-row-start: auto;
      }
      .vcard {
        grid-row-start: auto;
      }
		}
	}
}
```

### Video Switcher - JavaScript

Active class

Format the video buttons in `_video.scss`:

```css
.content-video {
  background: #222;
  .btn-list {
    padding: 6px;
    display: flex;
    li {
      margin: 1rem;
    }
    .active {
      border-radius: $radius;
      background: $link;
      color: #fff;
      padding: 0.5rem;
    }
  }
}
```

Attach it in `styles.scss`.

Create variables and spread the links into an array.

```js
// Video switcher
const videoLinks = document.querySelectorAll('.content-video a');

videoLinks.toArray().forEach(videoLink =>
	videoLink.addEventListener('click', function() {
		event.preventDefault();
	})
);
```

Examine the `videoLinks` nodelist in the console.

Add the `selectVideo` function:

```js
const videoLinks = document.querySelectorAll('.content-video a');
videoLinks.forEach(videoLink => videoLink.addEventListener('click', selectVideo));

function selectVideo() {
	console.log(this);
	event.preventDefault();
}
```

Examine the nodelist in the console.

Note that you can create a true Array from it by declaring a new variable and spreading the contents on the nodeList into it:

`videoLinksArray = [...videoLinks]`

or, for maximum compatibility:

`const videoLinks = Array.from(document.querySelectorAll('.content-video a'));`

Isolate the `href` value:

```js
const videoLinks = Array.from(document.querySelectorAll('.content-video a'));

videoLinks.forEach(videoLink =>
	videoLink.addEventListener('click', selectVideo)
);

function selectVideo() {
	const videoToPlay = this.getAttribute('href');
	console.log(videoToPlay);
	event.preventDefault();
}
```

### Updating the Video

Add a variable for the iFrame:

`const iFrame = document.querySelector('iframe')`

and set its src attribute:

`iFrame.setAttribute('src', videoToPlay)`:

```js
const iFrame = document.querySelector('iframe'); // NEW
const videoLinks = document.querySelectorAll('.content-video a');
videoLinks.forEach(videoLink => videoLink.addEventListener('click', selectVideo));

function selectVideo() {
	const videoToPlay = this.getAttribute('href');
	iFrame.setAttribute('src', videoToPlay); // NEW
	console.log(iFrame); // NEW
	event.preventDefault();
}
```

Switch the active class:

```js
const iFrame = document.querySelector('iframe');
const videoLinks = document.querySelectorAll('.content-video a');
videoLinks.forEach(videoLink => videoLink.addEventListener('click', selectVideo));

function selectVideo() {
	removeActiveClass(); // NEW
	this.classList.add('active'); // NEW
	const videoToPlay = this.getAttribute('href');
	iFrame.setAttribute('src', videoToPlay);
	event.preventDefault();
}

// NEW

function removeActiveClass() {
	videoLinks.forEach(videoLink => videoLink.classList.remove('active'));
}
```

### Nav Sub

Integrate the JavaScript for nav-sub into the layout.

Before we start check out [this article](https://css-tricks.com/quick-reminder-that-details-summary-is-the-easiest-way-ever-to-make-an-accordion/) on the simplest way to create an accordion.

in `_navsub.scss`:

```css
.nav-sub {
  padding: 10px 20px;
  background-color: $lt-yellow;
  border: 1px solid $dk-yellow;
  border-radius: $radius;
  ul {
    display:none;
  }
  li:first-child ul {
    display:block;
  }
  > li > a { 
    font-weight:bold; 
  }
  ul li {
    padding-left:12px;
  }
}
```

Note the `>` [selector](https://www.w3schools.com/cssref/css_selectors.asp). Also see [Combinators](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Simple_selectors)

Add class `.active {display: block !important}` to `_nav-sub.scss`:

```css
.active {
  display: block;
}
```

## Accordion for Nav Sub

```js
const subnavLinks = document.querySelectorAll('.nav-sub > li > a')

subnavLinks.forEach( subnavLink => subnavLink.addEventListener('click', openAccordion))

function openAccordion(){
  removeActiveClass()
  this.nextElementSibling.classList.toggle('active')
  event.preventDefault()
}

function removeActiveClass(){
    subnavLinks.forEach( subnavLink => subnavLink.nextElementSibling.classList.remove('active'))
}
```

[DOM Traversal](https://www.w3schools.com/jsref/dom_obj_document.asp)

nextElementSibling, nextSibling, previousSibling, childNodes, firstChild ...

Important - we have broken the `removeActiveClass()` function for the video switcher.

Set the initial state of the accordion with: `subnavLinksArray[0].nextElementSibling.classList.add('active')`

```js
const subnavLinks = document.querySelectorAll('.nav-sub > li > a')
subnavLinks.forEach( subnavLink => subnavLink.addEventListener('click', openAccordion))
subnavLinks[0].nextElementSibling.classList.add('active') // NEW

function openAccordion(){
  removeActiveClass()
  this.nextElementSibling.classList.toggle('active')
  event.preventDefault()
}

function removeActiveClass(){
    subnavLinks.forEach( subnavLink => subnavLink.nextElementSibling.classList.remove('active'))
}
```

We can try adding animation to the accordion:

```css
.nav-sub {
  padding: 10px 20px;
  background-color: $lt-yellow;
  border: 1px solid $dk-yellow;
  border-radius: $radius;
  ul {
    // display:none;
    max-height: 0;
    overflow: hidden;
    transition: all .3s;
    &.active {
      // display: block;
      max-height: 500px;
    }
  }
  > li > a { 
    font-weight:bold; 
  }
  ul li {
    padding-left:12px;
  }
}
```

We can even use overflow:

```css
.nav-sub {
  padding: 10px 20px;
  background-color: $lt-yellow;
  border: 1px solid $dk-yellow;
  border-radius: $radius;
  max-height: 180px; // NEW
  overflow: scroll; // NEW
  ul {
    // display:none;
    max-height: 0;
    overflow: hidden;
    transition: all .3s;
    &.active {
      // display: block;
      max-height: 500px;
    }
  }
  > li > a { 
    font-weight:bold; 
  }
  ul li {
    padding-left:12px;
  }
}
```

## Organizing the JS

`removeActiveClass` appears twice and the video switcher is broken. Let's unify this and organize our code a bit.

```js
// Hamburger

var hamburger = document.querySelector('#pull');
var body = document.querySelector('body');

hamburger.addEventListener('click', showMenu)

function showMenu() {
  body.classList.toggle('show-nav');
  event.preventDefault();
}

// Functions called elsewhere
var removeActiveClass = function (elements) {
  document.querySelectorAll(elements).forEach( (elem) => {
    elem.classList.remove('active')
  })
}

var addActiveClass = function (element) {
  element.classList.add('active')
}

// Video switcher
var videoSwitcher = function () {
  const videoLinks = Array.from(document.querySelectorAll('.content-video a'));
  const iFrame = document.querySelector('iframe')
  
  videoLinks.forEach((videoLink) => {
    videoLink.addEventListener('click', selectVideo)
  });
    
  function selectVideo() {
    removeActiveClass('.content-video a');
    addActiveClass(event.target)
    const videoToPlay = event.target.getAttribute('href');
    iFrame.setAttribute('src', videoToPlay);
    event.preventDefault();
  }
}
  
  
// Accordion
var accordion = function () {
  const subnavLinks = document.querySelectorAll('.nav-sub > li > a')
  subnavLinks[0].nextElementSibling.classList.add('active')
  
  subnavLinks.forEach(subnavLink => subnavLink.addEventListener('click', openAccordion))
  
  function openAccordion() {
    removeActiveClass('.nav-sub > li > ul');
    addActiveClass(event.target.nextElementSibling)
    event.preventDefault()
  }
}

accordion();
videoSwitcher();
```

### Image Carousel

Do a DOM review of this section of the page.

In `_carousel.scss`:

```css
.secondary aside {
  ul {
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
    li {
      flex-basis: 22%;
      margin: 2px;
      padding: 10px;
      background-color: #fff;
      border: 1px solid $dk-yellow;
      transition: all 0.2s linear;
      &:hover {
        transform: scale(1.1);
        box-shadow: 1px 1px 1px rgba(0,0,0,0.4);
      }
    }
  }
}
```

Note transition:

```css
li img {
	...
	transition: all 0.2s linear;
	&:hover {
		transform: scale(1.1);
		box-shadow: 1px 1px 1px rgba(0,0,0,0.4);
	}
```

## Content Slider 

Examine the main image HTML. Improve it with HTML 5 tags `figure` and `figcaption`.

```css
figure {
	position: relative;
	figcaption {
		padding: 6px;
		background: rgba(255, 255, 255, 0.7);
		position: absolute;
		bottom: 0;
	}
}
```

### Image Carousel - JavaScript

Change the # links to point to high res images (first three only in this sample):

```html
<ul class="image-tn">
  <li>
    <a href="img/bamboo.jpg"><img src="img/bamboo-tn.jpg" alt="" title="Link to original photo on Flickr" /></a>
  </li>
  <li>
    <a href="img/bridge.jpg"><img src="img/bridge-tn.jpg" alt="" title="Link to original photo on Flickr" /></a>
  </li>
  <li>
    <a href="img/pagoda.jpg"><img src="img/pagoda-tn.jpg" alt="" title="Link to original photo on Flickr" /></a>
  </li>
```

Change the title text as well.

```js
const carouselLinks = document.querySelectorAll('.image-tn a');
const carouselLinksArray = [...carouselLinks];
const carousel = document.querySelector('figure img');

carouselLinksArray.forEach(carouselLink => carouselLink.addEventListener('click', runCarousel));

function runCarousel() {
	const imageHref = this.getAttribute('href');
	carousel.setAttribute('src', imageHref);
	event.preventDefault();
}
```

Set the text in the carousel.

Find the appropriate traversal `const titleText = this.firstChild.title`:

```js
function runCarousel() {
	const imageHref = this.getAttribute('href');
	const titleText = this.firstChild.title;
	console.log(titleText);
	carousel.setAttribute('src', imageHref);
	event.preventDefault();
}
```

Create a pointer to the figcaption in order to manipulate its content:

```js
const carouselPara = document.querySelector('figcaption');
```

Set the innerHTML `carouselPara.innerHTML = titleText` of the paragraph:

```js
function runCarousel() {
	const imageHref = this.getAttribute('href');
	const titleText = this.firstChild.title;
	carouselPara.innerHTML = titleText;
	console.log(carouselPara);
	carousel.setAttribute('src', imageHref);
	event.preventDefault();
}
```

Final script:

```js
const carouselLinks = document.querySelectorAll('.image-tn a');
const carouselLinksArray = [...carouselLinks];
const carousel = document.querySelector('figure > img');
const carouselPara = document.querySelector('figcaption');
carouselLinksArray.forEach(carouselLink => carouselLink.addEventListener('click', runCarousel));

function runCarousel() {
	const imageHref = this.getAttribute('href');
	const titleText = this.firstChild.title;
	carouselPara.innerHTML = titleText;
	carousel.setAttribute('src', imageHref);
	event.preventDefault();
}
```

Note the separation of thumbnails and figure in small screen view.

```css
.secondary article {
    display: flex;
    flex-direction: column;
    figure {
        order: 2;
    }
}
```

Correct wide screen view:

```js
.secondary article {
    display: flex;
    flex-direction: column;
    figure {
        order: 2;
        @media(min-width: $break-med){
            order: 0;
        }
    }
}
```

### The Panels (the third and final section)

Review the design. Let's try floats and absolute/relative positioning.

In `_panels.scss`:

```css
.hentry {
	position: relative;
	float: left;
	width: 50%;
}
```

The little date area

```css
.hentry {
	position: relative;
	float: left;
	box-sizing: border-box;
	width: 50%;
	padding: 1rem;
	.published {
		position: absolute;
		top: 250px;
		left: 1rem;
		display: block;
		width: 30px;
		padding: 5px 10px;
		background-color: $link;
		font-size: 10px;
		text-align: center;
		text-transform: uppercase;
		color: #fff;
	}
	.day {
		font-size: 32px;
	}
	h4 {
		margin: 0 0 10px 60px;
		font-size: 20px;
	}
	p {
		margin-left: 60px;
	}
}
```

Parent container .hentries is used here.

Adding abbr formatting, removing positioning and using flexbox and floats.

```css
.hentries {
	display: flex;
	abbr {
		text-decoration: none;
		text-align: center;
	}
	.hentry {
		float: left;
		box-sizing: border-box;
		width: 50%;
		padding: 1rem;
		.published {
			float: left;
			width: 24%;
			box-sizing: border-box;
			// position: absolute;
			// top: 250px;
			// left: 1rem;
			display: block;
			// width: 50px;
			padding: 5px 10px;
			background-color: $link;
			font-size: 10px;
			text-align: center;
			text-transform: uppercase;
			color: #fff;
		}
		.day {
			font-size: 32px;
		}
		h4 {
			// margin: 0 0 10px 60px;
			font-size: 20px;
		}
		p {
			// margin-left: 60px;
			margin-top: 0;
			float: right;
			width: 70%;
			box-sizing: border-box;
		}
	}
}
```

Final `_panels.scss`:

```css
.hentries {
	display: flex;
	abbr {
		text-decoration: none;
	}
	.hentry {
		float: left;
		box-sizing: border-box;
		width: 50%;
		padding: 0 8px;
		.published {
			text-align: center;
			float: left;
			width: 24%;
			box-sizing: border-box;
			display: block;
			padding: 2px 6px;
			background-color: $link;
			font-size: 10px;
			text-align: center;
			text-transform: uppercase;
			color: #fff;
		}
		.day {
			font-size: 32px;
		}
		h4 {
			font-size: 20px;
		}
		p {
			margin-top: 0;
			float: right;
			width: 70%;
			box-sizing: border-box;
		}
	}
}
```

Note RSS feed attribute selectors

```css
a[rel='alternate'] {
	padding-left: 20px;
	background: url(../img/a-rss.png) no-repeat 0 50%;
}
```

with svg:

```css
a[rel='alternate'] {
	padding-left: 20px;
	background: url(../img/feed-icon.svg) no-repeat 0 50%;
	background-size: contain;
}
```

## Notes

```css
nav {
  ul {
    // display: none;
    transform: translateY(-500px);
    max-height: 1px;
    opacity: 0;
    transition: transform max-height .1s linear; // NEW
    transition: opacity 0.25s linear; // NEW

    position: absolute; // NEW
    width: 100%; // NEW

    @media (min-width: $break-sm){
      display: flex;
      justify-content: space-around;
      background: $link;
      text-align: center;

      transform: translateY(0);
			max-height: 1000px;
      opacity: 1;
      position: relative;
    }
	}
	```

```js
{
  "name": "session7",
  "version": "1.0.0",
  "description": "## Homework",
  "main": "index.js",
  "scripts": {
    "sassy": "node-sass --watch sass --output app/css --source-map true",
    "start": "browser-sync start --server 'app' --files 'app'",
    "boom!": "concurrently \"npm run start\" \"npm run sassy\" "
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/front-end-foundations/session7.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/front-end-foundations/session7/issues"
  },
  "homepage": "https://github.com/front-end-foundations/session7#readme",
  "devDependencies": {
    "browser-sync": "^2.18.13",
    "concurrently": "^3.5.0",
    "node-sass": "^4.6.0"
  }
}
```

### Links

`<li><a href="#two">Summary</a></li>`

`<div class="secondary" id="two">`

```
html {
  scroll-behavior: smooth;
}
```

https://www.sitepoint.com/smooth-scrolling-vanilla-javascript/

```
initSmoothScrolling();

function initSmoothScrolling() {
  if (isCssSmoothSCrollSupported()) {
    return;
  }

  var duration = 400;

  var pageUrl = location.hash ?
    stripHash(location.href) :
    location.href;

  delegatedLinkHijacking();
  //directLinkHijacking();

  function delegatedLinkHijacking() {
    document.body.addEventListener('click', onClick, false);

    function onClick(e) {
      if (!isInPageLink(e.target))
        return;

      e.stopPropagation();
      e.preventDefault();

      jump(e.target.hash, {
        duration: duration,
        callback: function() {
          setFocus(e.target.hash);
        }
      });
    }
  }

  function directLinkHijacking() {
    [].slice.call(document.querySelectorAll('a'))
      .filter(isInPageLink)
      .forEach(function(a) {
        a.addEventListener('click', onClick, false);
      });

    function onClick(e) {
      e.stopPropagation();
      e.preventDefault();

      jump(e.target.hash, {
        duration: duration,
      });
    }

  }

  function isInPageLink(n) {
    return n.tagName.toLowerCase() === 'a' &&
      n.hash.length > 0 &&
      stripHash(n.href) === pageUrl;
  }

  function stripHash(url) {
    return url.slice(0, url.lastIndexOf('#'));
  }

  function isCssSmoothSCrollSupported() {
    return 'scrollBehavior' in document.documentElement.style;
  }

  // Adapted from:
  // https://www.nczonline.net/blog/2013/01/15/fixing-skip-to-content-links/
  function setFocus(hash) {
    var element = document.getElementById(hash.substring(1));

    if (element) {
      if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {
        element.tabIndex = -1;
      }

      element.focus();
    }
  }

}

function jump(target, options) {
  var
    start = window.pageYOffset,
    opt = {
      duration: options.duration,
      offset: options.offset || 0,
      callback: options.callback,
      easing: options.easing || easeInOutQuad
    },
    distance = typeof target === 'string' ?
    opt.offset + document.querySelector(target).getBoundingClientRect().top :
    target,
    duration = typeof opt.duration === 'function' ?
    opt.duration(distance) :
    opt.duration,
    timeStart, timeElapsed;

  requestAnimationFrame(function(time) {
    timeStart = time;
    loop(time);
  });

  function loop(time) {
    timeElapsed = time - timeStart;

    window.scrollTo(0, opt.easing(timeElapsed, start, distance, duration));

    if (timeElapsed < duration)
      requestAnimationFrame(loop)
    else
      end();
  }

  function end() {
    window.scrollTo(0, start + distance);

    if (typeof opt.callback === 'function')
      opt.callback();
  }

  // Robert Penner's easeInOutQuad - http://robertpenner.com/easing/
  function easeInOutQuad(t, b, c, d) {
    t /= d / 2
    if (t < 1) return c / 2 * t * t + b
    t--
    return -c / 2 * (t * (t - 2) - 1) + b
  }

}
```

Additional Tweaks for Mobile (need to test on phone)

the tap event in JS

```js
$('.image-tn a').on('click tap', function() {
	var imgsrc = $(this).attr('href');
	var titleText = $(this)
		.find('img')
		.attr('title');
	$('.content-slider > img').attr('src', imgsrc);
	$('.caption').html(titleText);
	return false;
});
```

the z-index for images and navbar

```css
nav {
	height: 40px;
	width:100%;
	background: $link;
	font-size: 1rem;
	position: fixed;
	z-index: 20;
	top: 0;
```

media queries for transform effects (on hover)

```css
.secondary .content-sub {
	li {
		float: left;
		width: 33.333%;
		padding: 10px;
	}

	li img {
		padding: 10px;
		background-color: #fff;
		border: 1px solid #bfbfbf;
		border-bottom-color: #7c7c7a;
		width: 100%;
		height: auto;
		@media (min-width: $breakpoint-med) {
			transition: all 0.2s linear;
			&:hover {
				-webkit-transform: scale(1.1);
				transform: scale(1.1);
				box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
			}
		}
	}
}
```
