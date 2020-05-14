            window.onload = function() {
                 //Get width
                var winWidth = function() {
                    return document.documentElement.clientWidth || document.body.clientWidth;
                }
                 //Get height
                var winHeight = function() {
                    return document.documentElement.clientHeight || document.body.clientHeight;
                }
                var menu = document.getElementById('menu');
                menu.style.display = 'none';
                document.addEventListener('click', function() {
                    menu.style.display = 'none';
                })
                menu.addEventListener('click', function(event) {
                    var event = event || window.event;
                    event.cancelBubble = true;
                })
               //right-click menu
                document.oncontextmenu = function(event) {
                    var event = event || window.event;
                    menu.style.display = 'block';
                    var l, t;
                    l = event.clientX;
                    t = event.clientY;
                    if( l >= (winWidth() - menu.offsetWidth) ) {
                        l  = winWidth() - menu.offsetWidth;
                    } else {
                        l = l
                    }
                    if(t > winHeight() - menu.offsetHeight  ) {
                        t = winHeight() - menu.offsetHeight;
                    } else {
                        t = t;
                    }                   
                    menu.style.left = l + 'px';
                    menu.style.top = t + 'px';
                    return false;
                }
            }