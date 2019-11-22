
$(document).ready(function () {
    svg4everybody({});
    $('.owl-carousel').owlCarousel({
        lazyLoad: true,
        autoplay: false,
        items: 1,
        autoplayHoverPause:true,
        autoplayTimeout: 5000,
        loop: true,
        nav: true,
        navElement: 'div',
        dots: false
    });


    function drawLine (div1, div2, thick) {
        let x1 = $(div1).position().left + $(div1).outerWidth();
        let y1 = $(div1).position().top + $(div1).outerHeight() / 2;
        let x2 = $(div2).position().left;
        let lineWidth = Math.ceil(x2 - x1);

        let htmlLine = "<div class='dinamicLine' style='height:" + thick + "px; width:" + lineWidth + "px; z-index: 1; position: absolute; top: " + y1 + "px; left: " + x1 + "px;'></div>";
        $('.how-we-work').append(htmlLine);
    };

    function drawLineVert (div1, div2, thick) {
        let x1 = $(div1).position().left + $(div1).outerWidth() / 2;
        let y1 = $(div1).position().top + $(div1).outerHeight();
        let y2 = $(div2).position().top;
        let lineWidth = Math.ceil(y2 - y1);

        let htmlLine = "<div class='dinamicLineVert' style='width:" + thick + "px; height:" + lineWidth + "px; z-index: 1; position: absolute; top: " + y1 + "px; left: " + x1 + "px;'></div>";
        $('.how-we-work').append(htmlLine);
    };
    function renderLines(sec) {
        setInterval(() => {
            $('.dinamicLine').remove();
            $('.dinamicLineVert').remove();
            drawLine('#work-item-1', '#work-item-2', 3);
            drawLine('#work-item-2', '#work-item-3', 3);
            drawLine('#work-item-4', '#work-item-5', 3);
            drawLine('#work-item-5', '#work-item-6', 3);
            drawLineVert('#work-item-3', '#work-item-6', 3);
        }, sec * 1000);
    }
    renderLines(1);
    
});