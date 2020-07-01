var oldTitle = '';
$(document).bind('mouseover mouseout',function(event){           
    var left = event.pageX + 15 , top = event.pageY - 5;
    var ele = event.target;
    var title = ele.title;

    var type = event.originalEvent.type;
    if(type == 'mouseover'){
        oldTitle = title;
        ele.title = '';
        if(title && title.length > 0 && title != null){
            var showEle = $('<div></div>',{text:' ‏‏‎  ‏‏‎  ‏‏‎ '+title+' ‏‏‎  ‏‏‎  ‏‏‎ ',class:'showTitleBox'}).css({
                position:'absolute',
                top:top+10,
                left:left,
                color: 'white',
				background: '#383838',
				borderRadius: '5px',
                fontFamily:"'Crimson Text','Noto Sans SC'",
				fontSize:'18px',
				zIndex:'9999',
            })
            showEle.hide().appendTo('body').fadeIn();               
        }
    }else if(type == 'mouseout'){
        ele.title = oldTitle;
        $('.showTitleBox').fadeOut();
    }
})