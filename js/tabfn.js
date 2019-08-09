var myTouch = {
    tab: function(el, callback) {
        var startTime = 0;
        var isMove = true;
        el.addEventListener('touchstart', function() {
            startTime = new Date() * 1
        })
        el.addEventListener('touchmove', function() {
            isMove = false;
        })
        el.addEventListener('touchend', function() {
            var endTime = new Date() * 1;
            if (startTime - endTime < 150 && isMove) {


                callback && callback(el)
            }
            startTime = 0;
            isMove = true;
        })
    },
    swiper: function(el, direction, callback) {

        var startPiont = null;
        var endPiont = null;

        el.addEventListener("touchstart", function(e) {
            // 
            var myPoint = e.touches[0];

            startPiont = {
                x: myPoint.clientX,
                y: myPoint.clientY
            }

        })

        el.addEventListener("touchmove", function(e) {
            var myPoint = e.touches[0];
            endPiont = {
                x: myPoint.clientX,
                y: myPoint.clientY
            }
        });

        el.addEventListener("touchend", function(e) {
            // 坐标点判断
            if (startPiont && endPiont && count(startPiont, endPiont) == direction) {
                callback && callback();
            }

        });

        function count(startPiont, endPiont) {
            var text = "";
            // X 差值
            var diffX = endPiont.x - startPiont.x;
            var diffY = endPiont.y - startPiont.y;

            var absX = Math.abs(diffX);
            var absY = Math.abs(diffY);



            if (absX > 30 || absY > 30) {
                // 判断水平或垂直
                if (absX > absY) {
                    // 水平
                    text = diffX > 0 ? "right" : "left";
                } else {
                    // 垂直
                    text = diffY > 0 ? "bottom" : "top";
                }
            }

            return text;

        }

        startPiont = null;
        endPiont = null;

    }
}