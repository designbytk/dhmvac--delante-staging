/*
-----------------------------------------------
HVACMASTER
Script: imsUtil.js
Author: 
Organization: 
Created: 

v3 = updated for responsive sites Oct 2014
----------------------------------------------- */

//Minified Modernizer to test for Touch devices only - any other modernizer features will require regeneration of code 
//if (Modernizr.touch) {do stuff}
//html element gets "touch" or "no-touch" class
/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-touch-cssclasses-teststyles-prefixes
 */
;window.Modernizr=function(a,b,c){function w(a){j.cssText=a}function x(a,b){return w(m.join(a+";")+(b||""))}function y(a,b){return typeof a===b}function z(a,b){return!!~(""+a).indexOf(b)}function A(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:y(f,"function")?f.bind(d||b):f}return!1}var d="2.8.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n={},o={},p={},q=[],r=q.slice,s,t=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},u={}.hasOwnProperty,v;!y(u,"undefined")&&!y(u.call,"undefined")?v=function(a,b){return u.call(a,b)}:v=function(a,b){return b in a&&y(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=r.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(r.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(r.call(arguments)))};return e}),n.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:t(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c};for(var B in n)v(n,B)&&(s=B.toLowerCase(),e[s]=n[B](),q.push((e[s]?"":"no-")+s));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)v(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},w(""),i=k=null,e._version=d,e._prefixes=m,e.testStyles=t,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+q.join(" "):""),e}(this,this.document);

//Minified matchMedia.js polyfill - fixes media query issues in IE
//https://github.com/paulirish/matchMedia.js
/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license */
;window.matchMedia||(window.matchMedia=function(){"use strict";var e=window.styleMedia||window.media;if(!e){var t=document.createElement("style"),i=document.getElementsByTagName("script")[0],n=null;t.type="text/css",t.id="matchmediajs-test",i.parentNode.insertBefore(t,i),n="getComputedStyle"in window&&window.getComputedStyle(t,null)||t.currentStyle,e={matchMedium:function(e){var i="@media "+e+"{ #matchmediajs-test { width: 1px; } }";return t.styleSheet?t.styleSheet.cssText=i:t.textContent=i,"1px"===n.width}}}return function(t){return{matches:e.matchMedium(t||"all"),media:t||"all"}}}());
/*! matchMedia() polyfill addListener/removeListener extension. Author & copyright (c) 2012: Scott Jehl. Dual MIT/BSD license */
!function(){if(window.matchMedia&&window.matchMedia("all").addListener)return!1;var e=window.matchMedia,n=e("only all").matches,i=!1,t=0,a=[],r=function(){clearTimeout(t),t=setTimeout(function(){for(var n=0,i=a.length;i>n;n++){var t=a[n].mql,r=a[n].listeners||[],o=e(t.media).matches;if(o!==t.matches){t.matches=o;for(var c=0,d=r.length;d>c;c++)r[c].call(window,t)}}},30)};window.matchMedia=function(t){var o=e(t),c=[],d=0;return o.addListener=function(e){n&&(i||(i=!0,window.addEventListener("resize",r,!0)),0===d&&(d=a.push({mql:o,listeners:c})),c.push(e))},o.removeListener=function(e){for(var n=0,i=c.length;i>n;n++)c[n]===e&&c.splice(n,1)},o}}();


//Hoverintent for dropdown navigation
/*!
 * hoverIntent v1.8.0 // 2014.06.29 // jQuery v1.9.1+
 * http://cherne.net/brian/resources/jquery.hoverIntent.html
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007, 2014 Brian Cherne
 */
(function($){$.fn.hoverIntent=function(handlerIn,handlerOut,selector){var cfg={interval:100,sensitivity:6,timeout:0};if(typeof handlerIn==="object"){cfg=$.extend(cfg,handlerIn)}else{if($.isFunction(handlerOut)){cfg=$.extend(cfg,{over:handlerIn,out:handlerOut,selector:selector})}else{cfg=$.extend(cfg,{over:handlerIn,out:handlerIn,selector:handlerOut})}}var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if(Math.sqrt((pX-cX)*(pX-cX)+(pY-cY)*(pY-cY))<cfg.sensitivity){$(ob).off("mousemove.hoverIntent",track);ob.hoverIntent_s=true;return cfg.over.apply(ob,[ev])}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=false;return cfg.out.apply(ob,[ev])};var handleHover=function(e){var ev=$.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t)}if(e.type==="mouseenter"){pX=ev.pageX;pY=ev.pageY;$(ob).on("mousemove.hoverIntent",track);if(!ob.hoverIntent_s){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}}else{$(ob).off("mousemove.hoverIntent",track);if(ob.hoverIntent_s){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob)},cfg.timeout)}}};return this.on({"mouseenter.hoverIntent":handleHover,"mouseleave.hoverIntent":handleHover},cfg.selector)}})(jQuery);

imsUtil = {
	isScrolled: false,
	init:function() {
		imsUtil.autoPopulate('input.populate');
		imsUtil.autoTopContent('city-landing-page');
		// imsUtil.datePickerFields();
		imsUtil.mailtoFix('REMOVETHISBEFORESENDING');
		imsUtil.preparePopups();
		imsUtil.validateZip();
		imsUtil.youtubeVideoImage();
		imsUtil.youtubeTrigger('.ims-vid-trigger');
		imsUtil.loadGoogleRecaptchaScript();
		$("body").on("click", "input.close-modal-popup", function() {	
			$('input.close-modal-popup').parent().fadeOut('slow');
		});

		//resize iframe elements (or other additional elements specified in imsUtilElementsToResize variable)
		$( window ).load(function() {
			imsUtil.elementResize(imsUtilElementsToResize, imsUtilElementResizeFactor);
		});
		$( window ).resize(function() {
				setTimeout(function() { 
					imsUtil.elementResize(imsUtilElementsToResize, imsUtilElementResizeFactor);
				}, 150); //resize once halfway through .3 second css transition to cut down on jump
				setTimeout(function() { 
					imsUtil.elementResize(imsUtilElementsToResize, imsUtilElementResizeFactor);
				}, 300); //set final size after .3 second transitions have a chance to finish
		});
		
		//Scroll events 
		$(window).scroll(function() {
			if($(window).scrollTop() <= imsUtilIsScrolledStart) { //set approximate value to make the trigger more user-friendly? 
				imsUtil.isScrolled = false;
			} else {
				imsUtil.isScrolled = true;		
			}
			imsUtil.isViewable();
		});
		var scrollIntervalFunction = setInterval(function() {
			if ( imsUtil.isScrolled ) {
				$('body').addClass('ims-is-scrolled');
			} else {
				$('body').removeClass('ims-is-scrolled');
			}
		}, 250);


		imsUtil.initMultiColumnDropdown();
		imsUtil.repositionMultiColumnDropdown();
		imsUtil.repositionMiniDropdown();
		imsUtil.resizeMegaDropdown();
		$( window ).resize(function() {
			imsUtil.resizeMegaDropdown();
			imsUtil.repositionMiniDropdown();
			imsUtil.repositionMultiColumnDropdown();
		});

		mql = window.matchMedia("(max-width: "+imsUtilMatchMediaPx+"px)");
		imsUtil.mqlHandler(mql);
		mql.addListener(imsUtil.mqlHandler);

		//Get initial text values for sidebar toggles	
		initialScrollTop = $(window).scrollTop();
		initialText = {};
		$('.toggle-controller-state').each(function(i) {
			var id = $(this).attr('id'),
				text = $(this).text();
			initialText[id] = text;
		});	



		//When the toggle sidebar links are clicked
		$('.toggle-controller-state').find('a').on('click', function(event) {
			event.preventDefault();
			imsUtil.toggleState($(this), 'toggle-controller-state');
		});

	},
	
	autoPopulate:function(input_sel) {	
		$(input_sel).each(function() {
			if (!$(this).hasClass('no-autopopulate')) {
				var label_for_input = $('label[for="' + $(this).attr('id') + '"]');
				var populate_text = $(this).attr('placeholder') || label_for_input.text().replace('*', '').replace(':', '');
				if (populate_text) {
					label_for_input.hide();
					$(this).addClass('populate');
					$(this).val(populate_text).data('populate_text', populate_text);				
					$(this).focus(function() {
						if ($(this).val() == $(this).data('populate_text')) {
							$(this).val('');
							$(this).removeClass('populate');
						}
					});
					$(this).blur(function() {
						if ($(this).val() == '') {
							$(this).val($(this).data('populate_text'));
							$(this).addClass('populate');
						}
					});
				}
			}
		});
	},
	autoPopulateForm:function(formToPopulate) {	
		var populateInputs = formToPopulate.find('input[type="text"], textarea');
		$.each(populateInputs, function(key, input){
			imsUtil.autoPopulate(input);
		});
		formToPopulate.submit(function(e){
			$(this).find('.populate').val('').removeClass('populate');
			if(!$(this).valid()) {
				e.preventDefault();
			}
		});	
	},
	autoTopContent:function(bodyClass) {
		if ($('body').hasClass(bodyClass) && $('#top-content').length > 0 && $('#main-content .content-spacer').children().length > 0) {
			//identify and get tag name for first three elements
			var headingElements = ['h1','h2','h3','h4','h5','h6','H1','H2','H3','H4','H5','H6'],
				firstElement = $('#main-content .content-spacer > :nth-child(1)'),
				firstElementTagName = firstElement.get(0).tagName,
				secondElement = false,
				secondElementTagName = false,
				thirdElement = false,
				thirdElementTagName = false,
				continueReplacing = true;
			if ($('#main-content .content-spacer > :nth-child(2)').length > 0) {
				var secondElement = $('#main-content .content-spacer > :nth-child(2)');
				var secondElementTagName = secondElement.get(0).tagName;
			}
			if ($('#main-content .content-spacer > :nth-child(3)').length > 0) {
				var thirdElement = $('#main-content .content-spacer > :nth-child(3)');
				var thirdElementTagName = thirdElement.get(0).tagName;
			} 
			//Always move first element to top content
			$('#top-content .content-spacer').append(firstElement);
			//Move second element if it is not a heading recommend me stuff, stop moving elements if it is 
			if(secondElement && $.inArray(secondElementTagName, headingElements) < 0 && !secondElement.hasClass('nn-review-outer-cont')) {
				$('#top-content .content-spacer').append(secondElement);
			} else {
				var continueReplacing = false;
			}
			//Move third element if it is not a heading and we can still move elements
			if(thirdElement && $.inArray(thirdElementTagName, headingElements) < 0 && !thirdElement.hasClass('nn-review-outer-cont') && continueReplacing) {
				$('#top-content .content-spacer').append(thirdElement);
			} 
		} 
	},
	datePickerFields:function() {
		$('.datepicker').attr('readonly', 'readonly').datepicker({ 
			minDate: -0, 
			maxDate: "+1Y",
			showButtonPanel: true
		});
		$(".datepicker").keydown(function(e){
			if (e.keyCode == 46 || e.keyCode == 8) {
				//Delete and backspace clear text 
				$(this).val(''); //Clear text
				$(this).datepicker("hide"); //Hide the datepicker calendar if displayed
				$(this).blur(); //aka "unfocus"
			}
			//Prevent user from manually entering in a date - have to use the datepicker box
			e.preventDefault();
		});
	},
	mailtoFix:function(stringToRemove) {
		var links = document.getElementsByTagName('a');
		var removeText = new RegExp(stringToRemove);
		for (var i = 0; i < links.length; i++) {
			if (links[i].href.indexOf('mailto:') != -1) {
				links[i].href = links[i].href.replace(removeText, '');
				links[i].firstChild.nodeValue = links[i].firstChild.nodeValue.replace(removeText, '');
				links[i].firstChild.nodeValue = links[i].firstChild.nodeValue.replace(/mailto:/, '');
			}
		}
	},
	validateZip:function() {
		var errorMsg = "Please enter a valid zip code to search service areas."; 
		var zipField = document.getElementById("zip_code");
			$("#service-area-search-form").submit(function() {	
				validZip = /(^\d{5}(-\d{4})?$)|(^[ABCEGHJKLMNPRSTVXYabceghjklmnprstvxy]{1}\d{1}[A-Za-z]{1} *\d{1}[A-Za-z]{1}\d{1}$)/;
					if(!validZip.test(zipField.value)) {
						alert(errorMsg);
						return false;
					}
			});
	},	
	popUp:function(winURL, name, parameters) {
		window.open(winURL, name, parameters);
	},
	preparePopups:function() {
		if (!document.getElementsByTagName) return false;
		var lnks = document.getElementsByTagName("a");
		for (var i=0; i<lnks.length; i++) {
			if (lnks[i].className == "popup") {
				lnks[i].title+= " (opens in a new window)";
				lnks[i].onclick = function() {
					imsUtil.popUp(this.href, "popup", "width=480,height=480");
					return false;
				}
			}
			else if (lnks[i].className == "directory-popup") {
				lnks[i].title+= " (opens in a new window)";
				lnks[i].onclick = function() {
					imsUtil.popUp(this.href, "directory_popup", "width=520,height=480,scrollbars=yes");
					return false;
				}
			}
			else if (lnks[i].className == "external") {
				lnks[i].title+= " (opens a new tab)";
				lnks[i].setAttribute('target', '_blank');
			}
			else if (lnks[i].href != null && lnks[i].href.indexOf('.pdf') != -1) {
				lnks[i].title += " (opens in a new window)";
				lnks[i].onclick = function() {
					imsUtil.popUp(this.href, "pdf", "");
					return false;
				}
			}
		}
	},
	trimString:function(str) {
		return str.replace(/^\s*\n*\r*|\s*\n*\r*$/g,'');
	},



//RESPONSIVE STUFF

	//Show contents of nav section when  expand button is clicked
	enableClickToExpandNav : function() {
		imsUtil.disableClickToExpandNav();
		$('.expand-nav').on('click', function(event) {
			if ($(this).hasClass('active')) {
				$(this).parent().find('ul').removeClass('active');
				$(this).parent().removeClass('active-submenu');
				$(this).parent().find('.expand-nav').removeClass('active');
				$(this).parent().find('.active-submenu').removeClass('active-submenu');
			} else {
	//				$('ul.active, .expand-nav').removeClass('active');
				$(this).parent().addClass('active-submenu');
				$(this).next('ul').addClass('active');
				$(this).addClass('active');
			}
		});
	},
	disableClickToExpandNav : function() {
		$('#primary-navigation').find('ul, li, div').removeClass('active');
		$('.expand-nav').off('click');
	},

	elementResize:function(element, effectiveWidth) {
		$(element).each(function(i) {
			var currentWidth = $(this).outerWidth(),
			  currentHeight = $(this).outerHeight(),
			  widthFactor = (effectiveWidth) ? effectiveWidth : 1,
			  pageWidth =  $(this).parent().width() * widthFactor, //read as 90% of container width to give elements space
			  aspectRatio = currentHeight / currentWidth,
			  newHeight = Math.round(pageWidth * aspectRatio),
			  objHasWidthAttr = $(this).attr('width'), //get value of width attribute
			  parentClassName = $(this).closest("[class^=image-]").prop('className');//get class names of parents  (i.e to see if it's image-left etc.)
			  			
			if(typeof objHasWidthAttr == 'undefined') {//if it does NOT have width, then proceed as normal
				$(this).removeAttr('height').removeAttr('width').css({width: pageWidth + 'px', height : newHeight + 'px'});	
			} else {
				if ((parentClassName == 'image-left') || (parentClassName == 'image-right') || (parentClassName == 'image-center')) {//if it's our image templates
					var parentContainerWidth = $(this).closest("[class^=image-]").parent().width();//get width of this image templates container
					if (parentContainerWidth < objHasWidthAttr ) {objHasWidthAttr = parentContainerWidth;}//if the parent contaner is smaller than the width of the image, set width to match parent
					$(this).closest("[class^=image-]").css({width: objHasWidthAttr + 'px', height : 'auto'});	//update the size of the parent
				} else { //if it does NOT have img class, then proceed as normal
					$(this).removeAttr('height').removeAttr('width').css({width: pageWidth + 'px', height : newHeight + 'px'});	
				}	
			}
		});
	},

	resizeMegaDropdown : function() {
		var fullWidth = $( window ).width();
		$('ul.megadropdown').css({'width':fullWidth});
	},
	repositionMiniDropdown : function() {
		if ($("#primary-navigation").hasClass('minidropdown')) {
			var navWidth = $("#primary-navigation").width(); //determine width of nav ul
			//run through each top level nav's submenu and see if it's positioning needs to shift
			$('li.nav-level-1').each(function(i){
				var thisWidth = $(this).width(),
					currentPos = $(this).position(),
					posLeft = currentPos.left,
					posRight = navWidth - (posLeft + thisWidth),
					distanceFromCenter = Math.abs(posLeft - posRight);
				if (distanceFromCenter < 150) {
					$(this).addClass('center-position'); 
					$(this).removeClass('right-position');
				} else if (posLeft > posRight) {
					$(this).addClass('right-position'); 
					$(this).removeClass('center-position');
				} else {
					$(this).removeClass('right-position');
					$(this).removeClass('center-position');
				}
			});
		}
	},

	initMultiColumnDropdown : function() {
		if ($("#primary-navigation").hasClass('multicolumndropdown')) {
			var docidclasses = [];
			$($('body').attr('class').toString().split(' ')).each(function (i) {
				var className = this.match(/docid-\d+/);
				if (className) {
		        docidclasses.push(className[0]);
		    }
			});
			if (docidclasses.length > 0) {
				$('#topnav .'+docidclasses.join(',.')).addClass('current')
				.parentsUntil('#topnav').filter('li').addClass('current');
			}
		}
	},
	repositionMultiColumnDropdown : function() {
		if ($("#primary-navigation").hasClass('multicolumndropdown')) {
			$('#primary-navigation #topnav > li.nav-level-1').each(function(i){
				var dropdownElem = $(this).children('ul').first().get(0);
				if (typeof(dropdownElem) == 'undefined') {
					$(this).removeClass('fill-position');
					$(this).removeClass('auto-position');
					$(this).removeClass('center-position');
					$(this).removeClass('right-position');
					return;
				}
				var marginleftright = imsUtilNavMarginleftright;
				var navElem = $('#topnav').first().get(0);
				var navWidth = $(navElem).width();
				var windowWidth = $(window).width();
				var contains = 1;
				var dropdownWidth = imsUtilDropdownColumnWidth + (2 * marginleftright);
				if ($(this).hasClass('multi-column')) {
					$($(this).attr('class').toString().split(' ')).each(function (i) {
						var tmp_contains = 1;
						var className = this.match(/contains-(\d+)/);
						if (className) {
				        var tmp_contains = parseInt(className[1]);
				        if (tmp_contains > contains) {
				        	contains = tmp_contains;
				        }
				    }
					});
					dropdownWidth = contains * imsUtilDropdownColumnWidth  + (2 * marginleftright);
				}
				var thisWidth = $(this).width();
				var thisOffset = $(this).offset().left;
				var thisCenterOffset = thisOffset + (thisWidth/2);

				if (((thisCenterOffset - dropdownWidth/2) > 0) &&
					  ((thisCenterOffset + dropdownWidth/2) < windowWidth)) {
					// Center position.
					$(this).removeClass('fill-position');
					$(this).removeClass('auto-position');
					$(this).removeClass('right-position');
					$(this).addClass('center-position');
				}
				else if ((thisOffset + dropdownWidth) < windowWidth) {
					// Left position.
					$(this).removeClass('fill-position');
					$(this).removeClass('auto-position');
					$(this).removeClass('center-position');
					$(this).removeClass('right-position');
				}
				else if (((thisOffset + thisWidth) - dropdownWidth) > 0) {
					// Right position.
					$(this).removeClass('fill-position');
					$(this).removeClass('auto-position');
					$(this).removeClass('center-position');
					$(this).addClass('right-position');
				}
				else if (dropdownWidth <= windowWidth) {
					// Auto position.
					$(this).removeClass('fill-position');
					$(this).removeClass('center-position');
					$(this).removeClass('right-position');
					$(this).addClass('auto-position');
				}
				else {
					// Fill position. Default.
					$(this).removeClass('auto-position');
					$(this).removeClass('center-position');
					$(this).removeClass('right-position');
					$(this).addClass('fill-position');
				}
			});
		}
	},

	//Change body class to show/hide elements using css
	toggleState : function(clickedLink, clickedClass, clickedID) {
		var clickedID = (clickedID) ? clickedID : clickedLink.parent().attr('id'),
		  clickedClass = (clickedClass) ? clickedClass : clickedLink.parent().attr('class'),
		  clickedActiveClass = clickedID.replace('toggle', 'active');
		//Figure out if we need to update initialScrollTop - this is the position we'll return to after opened hidden elements are closed 
		var updateInitialScrollTop = true;
		$.each(imsUtilActiveBodyClasses, function(i, value){
			if ($('body').hasClass(value)) {
				updateInitialScrollTop = false;
			}
		});
		initialScrollTop = (updateInitialScrollTop) ? $(window).scrollTop(): initialScrollTop;
		//Change text of each toggle link and body class to how/hide elements
		$('.'+clickedClass).find('a').each(function(i) {
			var currentText = $(this).text(),
			  thisID = $(this).parent().attr('id'),
			  thisActiveClass = thisID.replace('toggle', 'active'),
			  showInitialText = ($('body').hasClass(clickedActiveClass) || thisID !== clickedID) ? true : false,
			  newText = (showInitialText) ? initialText[thisID] : imsUtilCloseText;
			$(this).text(newText);
			if(showInitialText) {
				$('body').removeClass(thisActiveClass);
				$(this).parent().removeClass('active');
			} else {
				$('body').addClass(thisActiveClass);
				$(this).parent().addClass('active');
			}
		});
		imsUtil.setScrollTop(initialScrollTop);
	},

	//Set the current vertical position of the window
	setScrollTop : function(initialScrollTop) {
		//Active Nav?  Do fancy navigation stuff
		if ($('body').hasClass(imsUtilActiveNavClass)) {
//			prepareMenu(true); //scroll to the current page in the menu
		//Otherwise go back to the saved position
		} else {
			window.scrollTo(0, initialScrollTop);
		}
	},

	initMegaDropdown : function() {
		if ($("#primary-navigation").hasClass('hoverintent')) {
			if (Modernizr.touch) {
				imsUtil.enableMegaDropdownTouch();
			} else {
				imsUtil.enableMegaDropdown();
			}
		}
	},
	enableMegaDropdown : function() {
		$("#primary-navigation").hoverIntent({
			over: imsUtil.addActiveClass,
			out: imsUtil.removeActiveClass,
			interval: 200,
			timeout: 500,
			selector: 'li.nav-level-1'
		});	

		//clicking nav expand removes active class
		$("li.nav-level-1 > div.expand-nav").on('click', function(e) {
		   $(this).parent().removeClass('active');
		});
	},
	enableMegaDropdownTouch : function() {
		//top level links show active state and don't work if they aren't already active
		$("li.nav-level-1 > a").on('click', function(e) {
		   if (!$(this).parent().hasClass('active') && !$(this).parent().hasClass('contains-0')) {
				e.preventDefault();
				var parentLi = $(this).parent();
				parentLi.addClass('active')
				$('li.nav-level-1').not(parentLi).removeClass('active'); //clear other active dropdowns
		   }
		});
		//clicking nav expand removes active class
		$("li.nav-level-1 > div.expand-nav").on('click', function(e) {
		   $(this).parent().removeClass('active');
		});
	},
	removeMegaDropdown : function() {
		if ($("#primary-navigation").hasClass('hoverintent')) {
			$("#primary-navigation").unbind("mouseenter").unbind("mouseleave");
			$("#primary-navigation").removeProp('hoverIntent_t');
			$("#primary-navigation").removeProp('hoverIntent_s');	
			$("li.nav-level-1 > a").off('click');
			$("li.nav-level-1 > div.expand-nav").off('click');
		}
	},
	addActiveClass : function(){$(this).addClass('active');},
	removeActiveClass : function(){$(this).removeClass('active');},
	mqlHandler : function(mql) {
		if(mql.matches) {
	  		imsUtil.removeMegaDropdown();
	  		imsUtil.enableClickToExpandNav();
	  	} else {
			imsUtil.disableClickToExpandNav();
			imsUtil.initMegaDropdown();
	  	}
	},
	youtubeVideoImage : function() {
		$('.vid_trigger').click( function(e){
			e.preventDefault();
			
			var VID_ID = $(this).attr('id');
			var WIDTH = $(this).css('width');
			var HEIGHT = $(this).css('height');
			var AUTO_PLAY = $(this).attr('data-autoplay');
			var REL = $(this).attr('data-rel');
			var MODE = $(this).attr('data-mode');
			var CLASS = $(this).attr('data-class');
			var HTM = '<iframe id="video_'+VID_ID+'" class="' + CLASS + '" width="' + WIDTH + '" height="' + HEIGHT + '" src="https://www.youtube.com/embed/' + VID_ID + '?autoplay=' + AUTO_PLAY + '&rel=' + REL + '&wmode=transparent" frameborder="0" allowfullscreen ></iframe>';
			
			if (MODE == 'image') {
				$('#'+VID_ID).html(HTM);
			} else if (MODE == 'lightbox') {
				$('body').addClass('ims-youtube-lightbox');
				$("#lightbox_" + VID_ID).addClass("lightbox-visible");
				$("#v_player_" + VID_ID).html(HTM);
				$(".lightbox").click( function(e){
					$('body').removeClass('ims-youtube-lightbox');
					 $("#lightbox_" + VID_ID).removeClass("lightbox-visible");
					 $("#video_" + VID_ID).attr('src', '');
				});
			}
			
			return false;
		});
	},
	youtubeTrigger : function(youTubeTriggerClass) {
		var youTubeTriggerClass = (youTubeTriggerClass) ? youTubeTriggerClass : '.ims-vid-trigger';
		$(youTubeTriggerClass).click( function(e){
			e.preventDefault();
			var VID_ID = $(this).data('yt_video_id');	
			var CLASS = "ims-autoresize " + $(this).data('yt_class');
			var AUTO_PLAY = 1;
			var REL = 0;
			var vid_target = this;
			//Target
			if ($(this).data('yt_target')) {var vid_target = $(this).data('yt_target');}
			//Auto Play
			if ($(this).data('yt_autoplay')) {var AUTO_PLAY = $(this).data('yt_autoplay');}
			//Related Videos
			if ($(this).data('yt_rel')) {var REL = $(this).data('yt_rel');}
			//height and width
			var width = $(vid_target).width();
			var height = Math.round(width * .5625);
			if ($(this).data('yt_box')==1) {height = Math.round(width * .75);}
			//stop playing all videos in target
			$(vid_target).find('iframe').attr('src', '');
			//lightbox ?
			if (($(vid_target).hasClass("lightbox"))) {
				$('body').addClass('ims-youtube-lightbox');
				$(vid_target).addClass("lightbox-visible");
			}
			//close lightbox!
			$(".lightbox").click( function(e){
				 $(vid_target).removeClass("lightbox-visible");
				 $('body').removeClass('ims-youtube-lightbox');
				 $(".lightbox").html('');
			});
			
			//add iframe
			if (($(this).data('yt_lightbox')==1) && (vid_target == this) ) {//lightbox ?
				$('body').addClass('ims-youtube-lightbox');
				var width = $(document).width();
				var height = Math.round(width * .5625);
				if ($(this).data('yt_box')==1) {height = Math.round(width * .75);}
				//build iframe HTML
				var iframe = '<iframe id="video_'+VID_ID+'" class="' + CLASS + '" width="' + width + '" height="' + height + '" src="https://www.youtube.com/embed/' + VID_ID + '?autoplay=' + AUTO_PLAY + '&rel=' + REL + '&wmode=transparent" frameborder="0" allowfullscreen ></iframe>';
				var placeholder = "<div class='lightbox lightbox-visible'>"+iframe+"</div>";
				$(placeholder).insertAfter(vid_target);
				//close special lightbox
				$(".lightbox").click( function(e){
					 $(".lightbox").removeClass("lightbox-visible");
					 $('body').removeClass('ims-youtube-lightbox');
					 $(".lightbox").html('');
				});
			} else {
				//build iframe HTML
				var iframe = '<iframe id="video_'+VID_ID+'" class="' + CLASS + '" width="' + width + '" height="' + height + '" src="https://www.youtube.com/embed/' + VID_ID + '?autoplay=' + AUTO_PLAY + '&rel=' + REL + '&wmode=transparent" frameborder="0" allowfullscreen ></iframe>';
				$(vid_target).html(iframe);
			}			
			return false;
		});
	},
	isViewable : function () {
		$('.scroll-to-animate').each(function() {
			var $offset = 0;
			var $reanimate = false;
			if ($(this).data('offset')) {
				$offset = $(this).data('offset');
			}
			if ($(this).data('reanimate')) {
				$reanimate = $(this).data('reanimate');
			}
			var $elem = $(this);
			var $window = $(window);
			
			var docViewTop = $window.scrollTop();
			var docViewBottom = docViewTop + $window.height();
			var docViewMiddle = docViewTop + ($window.height()/2);
			
			var elemTop = $elem.offset().top;
			var elemBottom = elemTop + $elem.height();
			var elemMiddle = elemTop + ($elem.height()/2);
			
			if ((elemTop-$offset) <= docViewMiddle) { //element top is in middle of screen
				$(this).addClass('animated');
			} else {
				if ($reanimate != false) {
					$(this).removeClass('animated');
				}
			}	
		});
	},
	
	loadGoogleRecaptchaScript : function () {
		//if there are forms on the page AND it's not just the Newsletter signup form
		if (($("form[id*='ims-form-module-form']").length > 0) && ($( "form:only-of-type[id*='ims-form-module-form']" ).attr('id') != "ims-form-module-form-7")) {
			var script = document.createElement("script"); 
			script.src = 'https://www.google.com/recaptcha/api.js'; 
			document.head.appendChild(script);
		}
	}
};


$(document).ready(function() {
	//Default global variables if not defined
	if (typeof imsUtilNavMarginleftright === 'undefined') imsUtilNavMarginleftright = 22;
	if (typeof imsUtilDropdownColumnWidth === 'undefined') imsUtilDropdownColumnWidth = 235;
	if (typeof imsUtilCloseText === 'undefined') imsUtilCloseText = 'X Close';
	if (typeof imsUtilActiveNavClass === 'undefined') imsUtilActiveNavClass = 'active-navigation';
	if (typeof imsUtilActiveBodyClasses === 'undefined') imsUtilActiveBodyClasses = [imsUtilActiveNavClass/*, activePromotionsClass, 'active-service-areas', 'active-contact' */];
	if (typeof imsUtilElementsToResize === 'undefined') imsUtilElementsToResize = '.ims-autoresize';
	if (typeof imsUtilElementResizeFactor === 'undefined') imsUtilElementResizeFactor = 1;
	if (typeof imsUtilIsScrolledStart === 'undefined') imsUtilIsScrolledStart = 10;
	if (typeof imsUtilMatchMediaPx === 'undefined') imsUtilMatchMediaPx = 800;
	imsUtil.init();
});