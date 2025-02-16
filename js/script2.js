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

    // === 🔹 折りたたみ表示の修正 ===
    $(".toggle-btn").on("click", function () {
        var content = $(this).closest(".game-item").find(".content"); // ✅ クリックされたボタンに対応する .content を取得

        content.stop().slideToggle(300); // ✅ アニメーションで表示・非表示

        // ✅ ボタンの矢印（→ / ↓）を切り替え
        var icon = $(this).text().trim();
        $(this).text(icon === "→" ? "↓" : "→");
    });
});