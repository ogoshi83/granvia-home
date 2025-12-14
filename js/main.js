$(function () {
    /*=================================================
    ハンバーガーメニュー
    ===================================================*/
    $(".toggle-btn").on("click", function () {
        if ($("header").hasClass("open")) {
            $("header").removeClass("open");
        } else {
            $("header").addClass("open");
        }
    });

    $("nav a").on("click", function () {
        $("header").removeClass("open");
    });

    /*=================================================
    PICK UP スライダー
    ===================================================*/
    // カルーセル用 jQueryプラグイン「slick」の設定
    // マニュアル：https://kenwheeler.github.io/slick/
    $(".slick-area").slick({
        arrows: true,
        dots: true,
        centerMode: false,
        centerPadding: "30px",
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerPadding: "50px",
                    slidesToShow: 1,
                },
            },
        ],
    });

    // フェイドイン
    $(window).scroll(function () {
        // クラスに対して順に処理を行う
        $("#point1").each(function () {
            // スクロールした距離
            let scroll = $(window).scrollTop();
            // クラスの要素までの距離
            let target = $(this).offset().top;
            // 画面の高さ
            let windowHeight = $(window).height();
            // クラスの要素が画面下にきてから200px通過した
            // したタイミングで要素を表示
            if (scroll > target - windowHeight + 200) {
                $(this).css("opacity", "1");
            }
        });
    });

    $(window).scroll(function () {
        // クラスに対して順に処理を行う
        $("#point2").each(function () {
            // スクロールした距離
            let scroll = $(window).scrollTop();
            // クラスの要素までの距離
            let target = $(this).offset().top;
            // 画面の高さ
            let windowHeight = $(window).height();
            // クラスの要素が画面下にきてから200px通過した
            // したタイミングで要素を表示
            if (scroll > target - windowHeight + 200) {
                $(this).css("opacity", "1");
            }
        });
    });

    $(window).scroll(function () {
        // クラスに対して順に処理を行う
        $("#point3").each(function () {
            // スクロールした距離
            let scroll = $(window).scrollTop();
            // クラスの要素までの距離
            let target = $(this).offset().top;
            // 画面の高さ
            let windowHeight = $(window).height();
            // クラスの要素が画面下にきてから200px通過した
            // したタイミングで要素を表示
            if (scroll > target - windowHeight + 200) {
                $(this).css("opacity", "1");
            }
        });
    });

    $(window).scroll(function () {
        // クラスに対して順に処理を行う
        $("#point4").each(function () {
            // スクロールした距離
            let scroll = $(window).scrollTop();
            // クラスの要素までの距離
            let target = $(this).offset().top;
            // 画面の高さ
            let windowHeight = $(window).height();
            // クラスの要素が画面下にきてから200px通過した
            // したタイミングで要素を表示
            if (scroll > target - windowHeight + 200) {
                $(this).css("opacity", "1");
            }
        });
    });

    $(window).scroll(function () {
        // クラスに対して順に処理を行う
        $("#point5").each(function () {
            // スクロールした距離
            let scroll = $(window).scrollTop();
            // クラスの要素までの距離
            let target = $(this).offset().top;
            // 画面の高さ
            let windowHeight = $(window).height();
            // クラスの要素が画面下にきてから200px通過した
            // したタイミングで要素を表示
            if (scroll > target - windowHeight + 200) {
                $(this).css("opacity", "1");
            }
        });
    });
});
