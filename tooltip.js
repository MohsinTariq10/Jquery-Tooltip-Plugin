;(function($){
    $('document').ready(function(){
        $('body').html($('body').html() + "<div id = \"tooltip_container\"></div>");
    });
    $.fn.tooltip = function(){
        var container = $('#tooltip_container');
        this
            .on('mouseover', function(e){
                var $this = $(this);
                container.html( $this.attr('data-tip-source'));
                container.css({'display':'block','opacity':0}).animate({opacity:1},250);
            })

            .on('mousemove',function(e){
                var toolTipWidth = container.outerWidth();
                var toolTipHeight = container.outerHeight();

                var pageWidth = $('body').width();

                if(e.pageX > pageWidth/2){
                    container.css('left', (e.pageX - toolTipWidth + 20) + 'px' );
                }else{
                    container.css('left', (e.pageX-20) + 'px');
                }

                if(e.pageY > 100){
                    container.css('top', (e.pageY - (toolTipHeight  + 20)) + 'px' );
                }else{
                    container.css('top', (e.pageY+20) + 'px');
                }
            })
            .on('mouseout',function(e){
                container.animate({opacity:1},250, function(){
                    container.css('display','none').html('');
                });
            });

    }
})(jQuery);





