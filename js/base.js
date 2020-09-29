$(document).ready(function () {
    // scrollreveal 动画插件初始化
    window.scrollReveal = new scrollReveal({
        reset: true,
        move: "20px",
    });
    // 一进入页面调用函数
    PCScroll();

    function PCScroll() {
        if ($(window).width() >= 768) {
            var before = $(window).scrollTop();
            $(window).scroll(function () {
                var after = $(window).scrollTop();
                if (before < after) {
                    $('.nav-custom').fadeOut();
                    // 向上滚动
                    before =  after;
                } else {
                    $('.nav-custom').fadeIn();
                    // 向下滚动
                    before =  after;
                }
            })
        }
    }
})