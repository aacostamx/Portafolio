/* oh hi :) */ ! function(t) {
    skel.breakpoints({
        wide: "(max-width: 1280px)",
        normal: "(max-width: 1140px)",
        narrow: "(max-width: 960px)",
        narrower: "(max-width: 768px)",
        mobile: "(max-width: 736px)"
    }), t(function() {
        var e = t(window),
            a = t("body"),
            s = a.attr("id");
        switch (a.addClass("is-loading"), e.on("load", function() {
            a.removeClass("is-loading")
        }), s) {
            default: break;
            case "landing":
                    var o = t("#bar"),
                    i = t("#items");
                if (!skel.vars.touch && !o.hasClass("docked")) {
                    var n = 50;
                    e.scroll(function() {
                        o.hasClass("docked") ? (e.scrollTop() < i.offset().top - n || skel.breakpoint("narrow").active) && (o.removeClass("active"), window.setTimeout(function() {
                            o.removeClass("docked").hide().fadeIn("fast")
                        }, 250)) : e.scrollTop() > i.offset().top - n && !skel.breakpoint("narrow").active && (o.addClass("docked"), window.setTimeout(function() {
                            o.addClass("active")
                        }, 250))
                    }), skel.on("change", function() {
                        e.trigger("scroll")
                    })
                }
                skel.vars.touch && i.children("article").each(function() {
                    var e = t(this);
                    e.find("a.image, a.demo").attr("href", "/uploads/demos/" + e.data("name"))
                }),
                function() {
                    var e, a = t(window),
                        s = [],
                        o = 0,
                        i = skel.vars.touch ? -750 : -250,
                        n = function() {
                            var t, e, o = s.length,
                                n = a.scrollTop() + a.height() - i;
                            for (t = 0; o > t; t++) e = s[t], !e.state && n > e.o.offset().top && (e.state = !0, e.fn())
                        };
                    a.load(function() {
                        a.on("scroll resize", function() {
                            window.clearTimeout(e), e = window.setTimeout(function() {
                                n()
                            }, o)
                        }).trigger("resize")
                    }), t.fn.onVisible = function(e, a) {
                        s.push({
                            o: t(this),
                            fn: e,
                            pad: a ? a : i,
                            state: !1
                        })
                    }
                }(),
                t(".item .image").each("wp" == skel.vars.os ? function() {
                    var e = t(this);
                    $p = e.children(".placeholder"), src = $p.data("src"), $p.attr("src", src), e.addClass("is-cached")
                } : function() {
                    var e = t(this),
                        a = e.children(".placeholder"),
                        s = t('<img src="" class="placeholder" alt="" />'),
                        o = a.data("src"),
                        i = "chrome" == skel.vars.browser ? 30 : 0;
                    e.onVisible(function() {
                        a.remove(), s.appendTo(e).attr("src", o), window.setTimeout(function() {
                            s.get(0).complete ? e.addClass("is-cached") : s.on("load", function() {
                                e.addClass("is-loaded")
                            })
                        }, i)
                    })
                });
                break;
            case "demo":
                    if (skel.vars.touch) return void window.location.replace(t("#demo-iframe").attr("src"));e.load(function() {
                    var s = t("#demo-header"),
                        o = s.find(".selector"),
                        i = o.children("li"),
                        n = t("#demo-iframe-wrapper"),
                        r = t("#demo-iframe"),
                        c = !1;
                    e.resize(function() {
                        o.is(":visible") ? e.width() < 1200 && (i.removeClass("active"), i.first().addClass("active"), o.hide(), n.css("left", 0).css("top", 0).css("width", "100%").css("height", "100%").css("margin-top", a.hasClass("overlap") ? 0 : "3.375em").css("margin-left", 0)) : e.width() >= 1200 && o.show()
                    }), r.on("load", function() {
                        n.removeClass("loading"), c = !1
                    }), i.each(function() {
                        var o, l, d = t(this),
                            f = 0,
                            h = 0,
                            u = d.data("width"),
                            p = d.data("height"),
                            m = s.outerHeight(),
                            v = e.height() - m - 120,
                            w = !1;
                        u ? (h = "50%", o = u / -2 + "px", u += "px", w = !0) : (h = 0, o = "0", u = "100%"), p ? (p = Math.min(v, p), f = "50%", l = p / -2 + m / 2 + "px", p += "px", w = !0) : (f = "", l = "", p = "", skel.vars.IEVersion <= 8 && (f = 0, l = a.hasClass("overlap") ? 0 : "3.375em", p = "100%")), d.click(function() {
                            return c || d.hasClass("active") ? !1 : (c = !0, i.removeClass("active"), d.addClass("active"), n.addClass("loading"), void window.setTimeout(function() {
                                w ? n.addClass("framed") : n.removeClass("framed"), n.css("left", h).css("top", f).css("width", u).css("height", p).css("margin-top", l).css("margin-left", o), window.setTimeout(function() {
                                    a.hasClass("reload") ? r.attr("src", r.attr("src")) : (n.removeClass("loading"), c = !1)
                                }, 500)
                            }, 500))
                        })
                    }), e.trigger("resize"), skel.vars.IEVersion <= 8 && i.first().removeClass("active").trigger("click")
                })
        }
        var r, c = t('<div id="dialog"><div class="modal"><h2>Hire me!</h2> </div></div>'),
            l = c.find(".modal"),
            d = l.find(".title"),
            f = l.find(".closer"),
            h = !1;
        c.hide().appendTo(a).click(function() {
                return c.h5u_close(), !0
            }), l.click(function(t) {
                t.stopPropagation()
            }), f.click(function(t) {
                return c.h5u_close(), !1
            }), c.h5u_open = function(t, e) {
                window.clearTimeout(r), d.text(e), h = !0, c.fadeTo("fast", 1, function() {
                    "undefined" != typeof FB && "undefined" != typeof FB.XFBML && FB.XFBML.parse(), h = !1, r = window.setTimeout(function() {
                        window.location.href = "https://www.freelancer.com/affiliates/email/8788615/"
                    }, 1500)
                })
            }, c.h5u_close = function() {
                return c.is(":visible") ? (window.clearTimeout(r), h = !0, void c.fadeTo("fast", 0, function() {
                    c.hide(), h = !1
                })) : !1
            }, t(".button.download").on("click", function() {
                var e = t(this);
                return c.h5u_open(e.data("name"), e.data("title")), !1
            }), t("a.offsite").attr("target", "_blank"), e.keydown(function(t) {
                switch (t.keyCode) {
                    case 27:
                        c.h5u_close()
                }
            }),
            function(t, e, a) {
                var s, o = t.getElementsByTagName(e)[0];
                t.getElementById(a) || (s = t.createElement(e), s.id = a, s.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0", o.parentNode.insertBefore(s, o))
            }(document, "script", "facebook-jssdk"),
            function() {
                var t = document.createElement("script");
                t.type = "text/javascript", t.async = !0, t.src = "https://apis.google.com/js/plusone.js";
                var e = document.getElementsByTagName("script")[0];
                e.parentNode.insertBefore(t, e)
            }()
    })
}(jQuery);