/**
 * scissor.js
 *
 * Copyright (C) 2012 Emmanuel Garcia
 * MIT Licensed
 *
 * Cuts paper for you! and cardboard too ;)
 **/

(function($) {

'use strict';

$.extend($.fn, {
	scissor: function() {
		this.each(function() {

			var element = $(this),
				pageProperties = {
					width: element.width()/2,
					height: element.height(),
					overflow: 'hidden'
				},
				newElement = element.clone(true);

				var leftPage = $('<div />', {css: pageProperties}),
					rightPage = $('<div />', {css: pageProperties});

				element.after(leftPage);
				leftPage.after(rightPage);

				element.css({
					marginLeft: 0
				}).appendTo(leftPage);

				newElement.css({
					marginLeft: -pageProperties.width
				}).appendTo(rightPage);

		});

		return this;
	}
});

})(jQuery);
