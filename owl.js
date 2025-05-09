$(document).ready(function () {
    var e = $(".my-owl").owlCarousel({ loop: !0, margin: 40, nav: !1, dots: !1, responsive: { 0: { items: 1, margin: 15 }, 600: { items: 2, margin: 15 }, 1e3: { items: 3, margin: 40 } } });
    $(".nextBtn").click(function () {
        e.trigger("next.owl.carousel");
    }),
        $(".prevBtn").click(function () {
            e.trigger("prev.owl.carousel");
        });
        var e = $(".testimonials-owl").owlCarousel({ loop: !0, margin: 40, nav: !1, dots: !1, responsive: { 0: { items: 1, margin: 15 }, 600: { items: 2, margin: 15 }, 1e3: { items: 2, margin: 40 } } });
    var r = $(".my-owl2").owlCarousel({ loop: !0, margin: 40, nav: !1, dots: !1, responsive: { 0: { items: 1, margin: 15 }, 768: { items: 2, margin: 15 }, 1310: { items: 3, margin: 40 } } });
    function o() {
        767 >= $(window).width()
            ? $(".partners").hasClass("owl-loaded") ||
              $(".partners")
                  .addClass("owl-loaded")
                  .owlCarousel({ loop: !0, autoplay: !0, autoplayTimeout: 1500, margin: 15, nav: !1, dots: !1, responsive: { 0: { items: 2, margin: 15 }, 450: { items: 3, margin: 15 } } })
            : $(".partners").hasClass("owl-loaded") && $(".partners").removeClass("owl-loaded").trigger("destroy.owl.carousel").removeClass("owl-carousel");
    }
    $(".nextBtn2").click(function () {
        r.trigger("next.owl.carousel");
    }),
        $(".prevBtn2").click(function () {
            r.trigger("prev.owl.carousel");
        }),
        $(document).ready(o),
        $(window).resize(o);
});
