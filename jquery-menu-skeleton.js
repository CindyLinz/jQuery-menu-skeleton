/*!
 * jQuery Menu Skeleton Library v0.02
 * https://github.com/CindyLinz/jQuery-menu-skeleton
 *
 * Copyright 2011, Cindy Wang (CindyLinz)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Date: 2011.6.23
 */
(function($){
    var origin_menuSkeleton = $.fn.menuSkeleton;

    var active_list = [];
    var menuSkeleton = function(child_field, offset){
	this.each(function(){
	    $(this).mouseenter(function(){
		while(true){
		    var last = active_list.pop();
		    if( last===undefined )
			break;
		    if( $(last).has(this).length ){
			active_list.push(last);
			break;
		    }
		    $(last).hide();
		}

		var child = $(this).data(child_field);
		if( child!==undefined ){
		    active_list.push(child);
		    var this_offset = $(this).offset();
		    if( offset!==undefined ){
			this_offset.top += offset.top;
			this_offset.left += offset.left;
		    }
		    $(child).show().offset(this_offset);
		}
	    });
	});

	return this;
    };
    menuSkeleton.noConflict = function(){
	$.fn.menuSkeleton = origin_menuSkeleton;
	return menuSkeleton;
    };
    $.fn.menuSkeleton = menuSkeleton;

    $(function(){
	$('body').live('click', function(){
	    while(true){
		var last = active_list.pop();
		if( last===undefined )
		    break;
		$(last).hide();
	    }
	});
    });
})(jQuery)
