$(function () {
    // ページ内スクロール
    var navHeight = $(".header").outerHeight();
    $('a[href^="#"]').on("click", function () {
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? "html" : href);
        var position = target.offset().top - navHeight;
        $("html, body").animate({ scrollTop: position }, 300, "swing");
        return false;
    });

    // ページトップボタン
    $("#js-page-top").on("click", function () {
        $("body,html").animate({ scrollTop: 0 }, 300);
        return false;
    });

    $(".game-item .content").hide();

    // クリックで表示/非表示を切り替え
    $(".toggle-btn").on("click", function () {
        var content = $(this).closest(".game-item").find(".content"); 

        content.stop().slideToggle(300); // スライドで表示/非表示を切り替え

        // 矢印の変更（→ を ↓ にする）
        var icon = $(this).text().trim();
        $(this).text(icon === "→" ? "↓" : "→");
    });
});

