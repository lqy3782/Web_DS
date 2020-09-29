$(document).ready(function () {
    $(window).resize(function () {
        index_num_init($(window).width());
    })
    // 调用公司介绍响应式计算函数
    index_num_init($(window).width());
    // 首页轮播图初始化配置
    new Swiper('.index-banner', {
        effect: "fade",
        autoplay: true,
        pagination: {
            el: '.banner-pagination'
        }
    })

    // 首页 公司新闻轮播初始化
    new Swiper('.news-container', {
        slidesPerView: 4,
        spaceBetween: 10,
        slidesPerGroup: 4,
        observer: true, // false  监听窗口的变化
        observeParents: true,
        breakpoints: {
            994: {
                slidesPerView: 3,
                slidesPerGroup: 3,
            },
            768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
            },

        },
        navigation: {
            nextEl: '.news-next',
            prevEl: '.news-prev'
        }
    })

    // 首页获奖案例轮播初始化
    new Swiper('.case-container', {
        // 两行两列
        slidesPerView: 2,
        spaceBetween: 10,
        slidesPerGroup: 2,
         
        slidesPerColumn: 2,

        //监听变化  自动初始化
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.case-next',
            prevEl: '.case-prev',
        },
    });

    function index_num_init(windowWidth) {
        var liWidth = null;
        // 获取到容器的宽度
        var infoNumW = parseInt($('.info-num').width());
        // 获取的小球的间隔
        var infoNumLiW = parseInt($('.info-num > li').css('marginLeft'));

        if (windowWidth >= 768) {
            // 
            liWidth = (infoNumW - infoNumLiW * 10) / 5;
        } else if (windowWidth >= 414) {
            liWidth = (infoNumW - infoNumLiW * 6) / 3;
        } else {
            $('.info-num > li').css({
                margin: '4px'
            })
            liWidth = (infoNumW - 4 * 6) / 3;
        }
        $('.info-num > li').css({
            width: liWidth,
            height: liWidth
        })
    }
})