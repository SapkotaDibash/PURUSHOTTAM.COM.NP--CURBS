(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        5557: function(e, s, i) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return i(2097)
            }])
        },
        2097: function(e, s, i) {
            "use strict";
            i.r(s), i.d(s, {
                default: function() {
                    return de
                }
            });
            var n = i(5893),
                a = i(7294),
                r = {
                    skills: ["Designer", "Developer", "Freelancer"]
                },
                t = function() {
                    var e = (0, a.useState)(0),
                        s = e[0],
                        i = e[1];
                    return (0, a.useEffect)((function() {
                        var e = setInterval((function() {
                            i(s < r.skills.length - 1 ? s + 1 : 0)
                        }), 5e3);
                        return function() {
                            return clearInterval(e)
                        }
                    })), (0, n.jsxs)("span", {
                        className: "cd-headline rotate-1",
                        children: [(0, n.jsx)("span", {
                            className: "blc",
                            children: "Creative "
                        }), (0, n.jsx)("span", {
                            className: "cd-words-wrapper",
                            children: r.skills.map((function(e, i) {
                                return (0, n.jsx)("b", {
                                    className: s === i ? "is-visible" : "is-hidden",
                                    children: e
                                }, i)
                            }))
                        })]
                    })
                },
                l = i(5774),
                c = i(8352),
                o = i(3935),
                d = function() {
                    ! function() {
                        var e = !!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),
                            s = document.getElementById("preloader");
                        s && (e ? s.remove() : (setTimeout((function() {
                            s.classList.add("preloaded")
                        }), 800), setTimeout((function() {
                            s.remove()
                        }), 2e3)))
                    }(), setTimeout((function() {
                        document.querySelector("body").classList.add("opened")
                    }), 3e3)
                };

            function m(e, s, i) {
                return s in e ? Object.defineProperty(e, s, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[s] = i, e
            }

            function u(e) {
                for (var s = 1; s < arguments.length; s++) {
                    var i = null != arguments[s] ? arguments[s] : {},
                        n = Object.keys(i);
                    "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(i, e).enumerable
                    })))), n.forEach((function(s) {
                        m(e, s, i[s])
                    }))
                }
                return e
            }
            var h = "NAV",
                f = "COLOR",
                p = "CURSOR",
                g = (0, a.createContext)(),
                v = function(e, s) {
                    switch (s.type) {
                        case h:
                            return u({}, e, {
                                nav: s.payload
                            });
                        case f:
                            return u({}, e, {
                                color: s.payload
                            });
                        case p:
                            return u({}, e, {
                                megicCursor: s.payload
                            });
                        default:
                            return e
                    }
                },
                x = function(e) {
                    var s = (0, a.useReducer)(v, {
                            nav: "home",
                            color: "#4169e1",
                            megicCursor: "show"
                        }),
                        i = s[0],
                        r = s[1];
                    return (0, n.jsx)(g.Provider, {
                        value: {
                            changeNav: function(e) {
                                r({
                                        type: h,
                                        payload: e
                                    }),
                                    function(e) {
                                        document.querySelectorAll(".edrea_tm_section").forEach((function(s) {
                                            var i = s.getAttribute("id");
                                            s.className = i == e ? "edrea_tm_section active wow animated fadeInUp" : "edrea_tm_section hidden animated"
                                        }))
                                    }(e)
                            },
                            nav: i.nav,
                            colorChange: function(e) {
                                document.documentElement.style.setProperty("--main-color", e), localStorage.setItem("edreaa-color", e), r({
                                    type: f,
                                    payload: e
                                })
                            },
                            getColor: function(e) {
                                var s = localStorage.getItem("edreaa-color");
                                document.documentElement.style.setProperty("--main-color", s || e), r({
                                    type: f,
                                    payload: s || e
                                })
                            },
                            color: i.color,
                            getMagicCursor: function(e) {
                                var s = localStorage.getItem("edreaa-megic-cursor");
                                r({
                                    type: p,
                                    payload: s || e
                                }), document.querySelector(".edrea_tm_all_wrap").setAttribute("data-magic-cursor", s || e)
                            },
                            changeCursor: function(e) {
                                document.querySelector(".edrea_tm_all_wrap").setAttribute("data-magic-cursor", e), localStorage.setItem("edreaa-megic-cursor", e), r({
                                    type: p,
                                    payload: e
                                })
                            },
                            megicCursor: i.megicCursor
                        },
                        children: e.children
                    })
                },
                j = i(8116);
            j.ZP.use([j.tl, j.W_, j.xW, j.pt]);
            var y = function(e, s, i) {
                    return {
                        loop: !1,
                        slidesPerView: 1,
                        spaceBetween: 0,
                        loopAdditionalSlides: 1,
                        autoplay: {
                            delay: 6e3
                        },
                        navigation: {
                            nextEl: ".my_next",
                            prevEl: ".my_prev"
                        },
                        pagination: {
                            el: ".edrea_tm_swiper_progress",
                            type: "custom",
                            renderCustom: function(n, a, r) {
                                var t, l;
                                document.querySelector(".edrea_tm_swiper_progress").classList.contains("fill") ? (l = "0px", t = parseInt(a / r * 100) / 100) : (t = parseInt(1 / r * 100) / 100, l = (a - 1) * parseInt(100 / r * 100) / 100 + "px"), document.querySelector(".".concat(i, " span")).style.transform = "translate3d(".concat(l, ",0px,0px) scaleX(").concat(t, ") scaleY(1)"), a < 10 && (a = "0" + a), r < 10 && (r = "0" + r), document.querySelector(".".concat(e)).innerHTML = a, document.querySelector(".".concat(s)).innerHTML = r
                            }
                        },
                        breakpoints: {
                            700: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            }
                        }
                    }
                },
                N = y("current", "total", "all"),
                b = y("currentNews", "totalNews", "allNews"),
                w = {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    loop: !0,
                    autoplay: {
                        delay: 5e3
                    }
                },
                _ = function(e) {
                    var s = (0, a.useRef)();
                    return (0, a.useEffect)((function() {
                        var i = function(i) {
                            s.current.contains(i.target) || e()
                        };
                        return document.addEventListener("mousedown", i),
                            function() {
                                document.removeEventListener("mousedown", i)
                            }
                    })), s
                },
                k = function(e) {
                    var s = e.open,
                        i = e.close,
                        r = e.children,
                        t = _((function() {
                            i()
                        }));
                    return (0, n.jsx)(a.Fragment, {
                        children: (0, n.jsx)("div", {
                            className: "edrea_tm_modalbox ".concat(s ? "opened" : ""),
                            children: (0, n.jsxs)("div", {
                                className: "box_inner",
                                ref: t,
                                children: [(0, n.jsx)("div", {
                                    className: "close",
                                    children: (0, n.jsx)("a", {
                                        href: "#",
                                        onClick: function() {
                                            return i()
                                        },
                                        children: (0, n.jsx)("i", {
                                            className: "icon-cancel"
                                        })
                                    })
                                }), (0, n.jsx)("div", {
                                    className: "description_wrap",
                                    children: r
                                })]
                            })
                        })
                    })
                };

            function A(e, s, i) {
                return s in e ? Object.defineProperty(e, s, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[s] = i, e
            }

            function E(e) {
                for (var s = 1; s < arguments.length; s++) {
                    var i = null != arguments[s] ? arguments[s] : {},
                        n = Object.keys(i);
                    "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(i, e).enumerable
                    })))), n.forEach((function(s) {
                        A(e, s, i[s])
                    }))
                }
                return e
            }
            var C = function(e) {
                    var s = e.open,
                        i = e.close,
                        r = e.aboutData,
                        o = (0, a.useContext)(g).color;
                    return (0, n.jsx)(k, {
                        open: s,
                        close: i,
                        children: (0, n.jsxs)("div", {
                            className: "about_popup_details",
                            children: [(0, n.jsx)("div", {
                                className: "left",
                                children: (0, n.jsxs)("div", {
                                    className: "left_inner",
                                    children: [(0, n.jsxs)("div", {
                                        className: "author",
                                        children: [(0, n.jsxs)("div", {
                                            className: "avatar_image",
                                            children: [(0, n.jsx)("img", {
                                                src: "img/thumbs/1-1.jpg",
                                                alt: ""
                                            }), (0, n.jsx)("div", {
                                                className: "main",
                                                "data-img-url": "img/about/1.jpg"
                                            })]
                                        }), (0, n.jsxs)("div", {
                                            className: "short",
                                            children: [(0, n.jsxs)("h3", {
                                                className: "name",
                                                children: [r.firstName, " ", (0, n.jsx)("span", {
                                                    className: "coloring",
                                                    children: r.lastName
                                                })]
                                            }), (0, n.jsx)("h3", {
                                                className: "job",
                                                children: (0, n.jsx)(t, {})
                                            })]
                                        })]
                                    }), (0, n.jsx)("div", {
                                        className: "list",
                                        children: (0, n.jsxs)("ul", {
                                            children: [(0, n.jsx)("li", {
                                                children: (0, n.jsxs)("div", {
                                                    className: "list_inner",
                                                    children: [(0, n.jsx)("i", {
                                                        className: "icon-user"
                                                    }), (0, n.jsxs)("span", {
                                                        children: [r.firstName, " ", r.lastName]
                                                    })]
                                                })
                                            }), (0, n.jsx)("li", {
                                                children: (0, n.jsxs)("div", {
                                                    className: "list_inner",
                                                    children: [(0, n.jsx)("i", {
                                                        className: "icon-calendar"
                                                    }), (0, n.jsx)("span", {
                                                        children: r.bithday
                                                    })]
                                                })
                                            }), (0, n.jsx)("li", {
                                                children: (0, n.jsxs)("div", {
                                                    className: "list_inner",
                                                    children: [(0, n.jsx)("i", {
                                                        className: "icon-location"
                                                    }), (0, n.jsx)("span", {
                                                        children: (0, n.jsx)("a", {
                                                            href: "#",
                                                            className: "href_location",
                                                            children: r.address
                                                        })
                                                    })]
                                                })
                                            }), (0, n.jsx)("li", {
                                                children: (0, n.jsxs)("div", {
                                                    className: "list_inner",
                                                    children: [(0, n.jsx)("i", {
                                                        className: "icon-phone"
                                                    }), (0, n.jsx)("span", {
                                                        children: (0, n.jsx)("a", {
                                                            href: "#",
                                                            children: r.phn
                                                        })
                                                    })]
                                                })
                                            }), (0, n.jsx)("li", {
                                                children: (0, n.jsxs)("div", {
                                                    className: "list_inner",
                                                    children: [(0, n.jsx)("i", {
                                                        className: "icon-mail-1"
                                                    }), (0, n.jsx)("span", {
                                                        children: (0, n.jsx)("a", {
                                                            href: "mailto:".concat(r.email),
                                                            children: r.email
                                                        })
                                                    })]
                                                })
                                            })]
                                        })
                                    }), (0, n.jsx)("div", {
                                        className: "edrea_tm_button full",
                                        children: (0, n.jsx)("a", {
                                            href: "img/about/1.jpg",
                                            download: !0,
                                            children: "Download CV"
                                        })
                                    })]
                                })
                            }), (0, n.jsx)("div", {
                                className: "right",
                                children: (0, n.jsxs)("div", {
                                    className: "right_inner",
                                    children: [(0, n.jsxs)("div", {
                                        className: "biography",
                                        children: [(0, n.jsx)("div", {
                                            className: "about_title",
                                            children: (0, n.jsx)("h3", {
                                                children: (0, n.jsxs)("span", {
                                                    children: ["About ", (0, n.jsx)("span", {
                                                        className: "coloring",
                                                        children: "Me"
                                                    })]
                                                })
                                            })
                                        }), (0, n.jsx)("div", {
                                            className: "text",
                                            children: (0, n.jsxs)("p", {
                                                children: ["Hello everybody! My name is ", (0, n.jsx)("span", {
                                                    children: "David Parker."
                                                }), " I am a graphic designer, and ", "I'm", " very passionate and dedicated to my work. With 20 years experience as a professional a graphic designer, I have acquired the skills and knowledge."]
                                            })
                                        })]
                                    }), (0, n.jsxs)("div", {
                                        className: "service",
                                        children: [(0, n.jsx)("div", {
                                            className: "about_title",
                                            children: (0, n.jsx)("h3", {
                                                children: (0, n.jsxs)("span", {
                                                    children: ["Quality ", (0, n.jsx)("span", {
                                                        className: "coloring",
                                                        children: "Services"
                                                    })]
                                                })
                                            })
                                        }), (0, n.jsx)("div", {
                                            className: "list",
                                            children: (0, n.jsx)("ul", {
                                                children: r.serviceLists && r.serviceLists.map((function(e, s) {
                                                    return (0, n.jsxs)("li", {
                                                        children: [(0, n.jsx)("i", {
                                                            className: "icon-right-dir"
                                                        }), e]
                                                    }, s)
                                                }))
                                            })
                                        })]
                                    }), (0, n.jsxs)("div", {
                                        className: "prog_skill",
                                        children: [(0, n.jsx)("div", {
                                            className: "about_title",
                                            children: (0, n.jsx)("h3", {
                                                children: (0, n.jsxs)("span", {
                                                    children: ["Programming ", (0, n.jsx)("span", {
                                                        className: "coloring",
                                                        children: "Skills"
                                                    })]
                                                })
                                            })
                                        }), (0, n.jsx)("div", {
                                            className: "oki_progress",
                                            children: r.skills && r.skills.programming && r.skills.programming.map((function(e, s) {
                                                return (0, n.jsxs)("div", {
                                                    className: "progress_inner skillsInner___",
                                                    "data-value": 95,
                                                    children: [(0, n.jsxs)("span", {
                                                        children: [(0, n.jsx)("span", {
                                                            className: "label",
                                                            children: e.name
                                                        }), (0, n.jsxs)("span", {
                                                            className: "number",
                                                            style: {
                                                                right: "".concat(100 - e.value, "%")
                                                            },
                                                            children: [e.value, "%"]
                                                        })]
                                                    }), (0, n.jsx)("div", {
                                                        className: "background",
                                                        children: (0, n.jsx)("div", {
                                                            className: "bar open",
                                                            children: (0, n.jsx)("div", {
                                                                className: "bar_in",
                                                                style: {
                                                                    width: "".concat(e.value, "%")
                                                                }
                                                            })
                                                        })
                                                    })]
                                                }, s)
                                            }))
                                        })]
                                    }), (0, n.jsxs)("div", {
                                        className: "lang_skill",
                                        children: [(0, n.jsx)("div", {
                                            className: "about_title",
                                            children: (0, n.jsx)("h3", {
                                                children: (0, n.jsxs)("span", {
                                                    children: ["Language ", (0, n.jsx)("span", {
                                                        className: "coloring",
                                                        children: "Skills"
                                                    })]
                                                })
                                            })
                                        }), (0, n.jsx)("div", {
                                            className: "circular_progress_bar",
                                            children: (0, n.jsx)("ul", {
                                                children: r.skills && r.skills.language && r.skills.language.map((function(e, s) {
                                                    return (0, n.jsx)("li", {
                                                        children: (0, n.jsxs)("div", {
                                                            className: "list_inner",
                                                            children: [(0, n.jsx)("div", {
                                                                className: "myCircle",
                                                                "data-value": "0.95",
                                                                children: (0, n.jsx)(l.Ip, {
                                                                    value: e.value,
                                                                    text: "".concat(e.value, "%"),
                                                                    strokeWidth: 2,
                                                                    styles: (0, l.y3)({
                                                                        pathColor: o
                                                                    })
                                                                })
                                                            }), (0, n.jsx)("div", {
                                                                className: "title",
                                                                children: (0, n.jsx)("span", {
                                                                    children: e.name
                                                                })
                                                            })]
                                                        })
                                                    }, s)
                                                }))
                                            })
                                        })]
                                    }), (0, n.jsxs)("div", {
                                        className: "timeline",
                                        children: [(0, n.jsx)("div", {
                                            className: "about_title",
                                            children: (0, n.jsx)("h3", {
                                                children: (0, n.jsxs)("span", {
                                                    children: ["Education ", (0, n.jsx)("span", {
                                                        className: "coloring",
                                                        children: "Timeline"
                                                    })]
                                                })
                                            })
                                        }), (0, n.jsx)("div", {
                                            className: "list",
                                            children: (0, n.jsx)("ul", {
                                                children: r && r.education && r.education.map((function(e, s) {
                                                    return (0, n.jsx)("li", {
                                                        children: (0, n.jsxs)("div", {
                                                            className: "list_inner",
                                                            children: [(0, n.jsx)("div", {
                                                                className: "time",
                                                                children: (0, n.jsx)("span", {
                                                                    children: e.year
                                                                })
                                                            }), (0, n.jsxs)("div", {
                                                                className: "place",
                                                                children: [(0, n.jsx)("h3", {
                                                                    children: e.unv
                                                                }), (0, n.jsx)("span", {
                                                                    children: e.degree
                                                                })]
                                                            })]
                                                        })
                                                    }, s)
                                                }))
                                            })
                                        })]
                                    }), (0, n.jsxs)("div", {
                                        className: "timeline",
                                        children: [(0, n.jsx)("div", {
                                            className: "about_title",
                                            children: (0, n.jsx)("h3", {
                                                children: (0, n.jsxs)("span", {
                                                    children: ["Working ", (0, n.jsx)("span", {
                                                        className: "coloring",
                                                        children: "Timeline"
                                                    })]
                                                })
                                            })
                                        }), (0, n.jsx)("div", {
                                            className: "list",
                                            children: (0, n.jsx)("ul", {
                                                children: r && r.working && r.working.map((function(e, s) {
                                                    return (0, n.jsx)("li", {
                                                        children: (0, n.jsxs)("div", {
                                                            className: "list_inner",
                                                            children: [(0, n.jsx)("div", {
                                                                className: "time",
                                                                children: (0, n.jsx)("span", {
                                                                    children: e.year
                                                                })
                                                            }), (0, n.jsxs)("div", {
                                                                className: "place",
                                                                children: [(0, n.jsx)("h3", {
                                                                    children: e.company
                                                                }), (0, n.jsx)("span", {
                                                                    children: e.deg
                                                                })]
                                                            })]
                                                        })
                                                    }, s)
                                                }))
                                            })
                                        })]
                                    }), (0, n.jsxs)("div", {
                                        className: "partners",
                                        children: [(0, n.jsx)("div", {
                                            className: "about_title",
                                            children: (0, n.jsx)("h3", {
                                                children: (0, n.jsxs)("span", {
                                                    children: ["My ", (0, n.jsx)("span", {
                                                        className: "coloring",
                                                        children: "Partners"
                                                    })]
                                                })
                                            })
                                        }), (0, n.jsx)("div", {
                                            className: "list",
                                            children: (0, n.jsx)("ul", {
                                                children: r && r.partnersLogos && r.partnersLogos.map((function(e, s) {
                                                    return (0, n.jsx)("li", {
                                                        children: (0, n.jsxs)("div", {
                                                            className: "list_inner",
                                                            children: [(0, n.jsx)("img", {
                                                                src: e,
                                                                alt: ""
                                                            }), (0, n.jsx)("a", {
                                                                className: "cavani_tm_full_link",
                                                                href: "#"
                                                            })]
                                                        })
                                                    }, s)
                                                }))
                                            })
                                        })]
                                    }), (0, n.jsxs)("div", {
                                        className: "testimonial",
                                        children: [(0, n.jsx)("div", {
                                            className: "about_title",
                                            children: (0, n.jsx)("h3", {
                                                children: (0, n.jsxs)("span", {
                                                    children: ["Clients ", (0, n.jsx)("span", {
                                                        className: "coloring",
                                                        children: "Feedback"
                                                    })]
                                                })
                                            })
                                        }), (0, n.jsx)("div", {
                                            className: "list",
                                            children: (0, n.jsxs)(c.tq, E({}, w, {
                                                className: "owl-carousel",
                                                children: [(0, n.jsx)(c.o5, {
                                                    children: (0, n.jsxs)("div", {
                                                        className: "list_inner",
                                                        children: [(0, n.jsxs)("div", {
                                                            className: "text",
                                                            children: [(0, n.jsx)("i", {
                                                                className: "icon-quote-left"
                                                            }), (0, n.jsx)("p", {
                                                                children: "Beautiful minimalist design and great, fast response with support. Highly recommend. Thanks Marketify!"
                                                            })]
                                                        }), (0, n.jsxs)("div", {
                                                            className: "details",
                                                            children: [(0, n.jsx)("div", {
                                                                className: "image",
                                                                children: (0, n.jsx)("div", {
                                                                    className: "main",
                                                                    "data-img-url": "img/testimonials/1.jpg"
                                                                })
                                                            }), (0, n.jsxs)("div", {
                                                                className: "info",
                                                                children: [(0, n.jsx)("h3", {
                                                                    children: "Alexander Walker"
                                                                }), (0, n.jsx)("span", {
                                                                    children: "Graphic Designer"
                                                                })]
                                                            })]
                                                        })]
                                                    })
                                                }), (0, n.jsx)(c.o5, {
                                                    children: (0, n.jsxs)("div", {
                                                        className: "list_inner",
                                                        children: [(0, n.jsxs)("div", {
                                                            className: "text",
                                                            children: [(0, n.jsx)("i", {
                                                                className: "icon-quote-left"
                                                            }), (0, n.jsx)("p", {
                                                                children: "These people really know what they are doing! Great customer support availability and supperb kindness."
                                                            })]
                                                        }), (0, n.jsxs)("div", {
                                                            className: "details",
                                                            children: [(0, n.jsx)("div", {
                                                                className: "image",
                                                                children: (0, n.jsx)("div", {
                                                                    className: "main",
                                                                    "data-img-url": "img/testimonials/2.jpg"
                                                                })
                                                            }), (0, n.jsxs)("div", {
                                                                className: "info",
                                                                children: [(0, n.jsx)("h3", {
                                                                    children: "Armin Van Buuren"
                                                                }), (0, n.jsx)("span", {
                                                                    children: "Content Manager"
                                                                })]
                                                            })]
                                                        })]
                                                    })
                                                }), (0, n.jsx)(c.o5, {
                                                    children: (0, n.jsxs)("div", {
                                                        className: "list_inner",
                                                        children: [(0, n.jsxs)("div", {
                                                            className: "text",
                                                            children: [(0, n.jsx)("i", {
                                                                className: "icon-quote-left"
                                                            }), (0, n.jsx)("p", {
                                                                children: "I had a little problem and the support was just awesome to quickly solve the situation. And keep going on."
                                                            })]
                                                        }), (0, n.jsxs)("div", {
                                                            className: "details",
                                                            children: [(0, n.jsx)("div", {
                                                                className: "image",
                                                                children: (0, n.jsx)("div", {
                                                                    className: "main",
                                                                    "data-img-url": "img/testimonials/3.jpg"
                                                                })
                                                            }), (0, n.jsxs)("div", {
                                                                className: "info",
                                                                children: [(0, n.jsx)("h3", {
                                                                    children: "Baraka Clinton"
                                                                }), (0, n.jsx)("span", {
                                                                    children: "English Teacher"
                                                                })]
                                                            })]
                                                        })]
                                                    })
                                                })]
                                            }))
                                        })]
                                    })]
                                })
                            })]
                        })
                    })
                },
                S = {
                    firstName: "David",
                    lastName: "Parker",
                    bithday: "01.07.1990",
                    address: "Avon str. 22, NYC, USA",
                    phn: "+77 022 155 02 02",
                    email: "example@gmail.com",
                    serviceLists: ["Website Development", "Digital Experience", "Content Marketing", "Social Media Design", "Shared Web Hosting"],
                    skills: {
                        programming: [{
                            name: "WordPress",
                            value: "95"
                        }, {
                            name: "JavaScript",
                            value: "80"
                        }, {
                            name: "Angular",
                            value: "90"
                        }],
                        language: [{
                            name: "English",
                            value: "95"
                        }, {
                            name: "Russian",
                            value: "80"
                        }, {
                            name: "Arabic",
                            value: "90"
                        }]
                    },
                    education: [{
                        year: "2014 - 2016",
                        unv: "Oxford Univercity",
                        degree: "Master Degree"
                    }, {
                        year: "2010 - 2014",
                        unv: "Texas Univercity",
                        degree: "Bachelor Degree"
                    }, {
                        year: "2008 - 2010",
                        unv: "Simone College",
                        degree: "Associate Degree"
                    }],
                    working: [{
                        year: "2018 - running",
                        company: "Envato Elements",
                        deg: "Exclusive Author"
                    }, {
                        year: "2015 - 2018",
                        company: "Avo Corporation",
                        deg: "Content Manager"
                    }, {
                        year: "2012 - 2015",
                        company: "FC Barcelona",
                        deg: "Football Player"
                    }],
                    partnersLogos: ["img/partners/1.png", "img/partners/2.png", "img/partners/3.png", "img/partners/4.png"]
                },
                P = function() {
                    var e = (0, a.useState)(!1),
                        s = e[0],
                        i = e[1];
                    return (0, n.jsxs)(a.Fragment, {
                        children: [(0, n.jsx)(C, {
                            open: s,
                            close: function() {
                                return i(!1)
                            },
                            aboutData: S
                        }), (0, n.jsx)("div", {
                            className: "edrea_tm_section hidden animated",
                            id: "about",
                            children: (0, n.jsx)("div", {
                                className: "section_inner",
                                children: (0, n.jsxs)("div", {
                                    className: "edrea_tm_about",
                                    children: [(0, n.jsx)("div", {
                                        className: "left",
                                        children: (0, n.jsxs)("div", {
                                            className: "image",
                                            children: [(0, n.jsx)("img", {
                                                src: "img/thumbs/1-1.jpg",
                                                alt: ""
                                            }), (0, n.jsx)("div", {
                                                className: "main",
                                                "data-img-url": "img/about/1.jpg"
                                            })]
                                        })
                                    }), (0, n.jsxs)("div", {
                                        className: "right",
                                        children: [(0, n.jsxs)("div", {
                                            className: "short",
                                            children: [(0, n.jsxs)("h3", {
                                                className: "name",
                                                children: [S.firstName, " ", (0, n.jsx)("span", {
                                                    className: "coloring",
                                                    children: S.lastName
                                                })]
                                            }), (0, n.jsx)("h3", {
                                                className: "job",
                                                children: (0, n.jsx)(t, {})
                                            })]
                                        }), (0, n.jsx)("div", {
                                            className: "text",
                                            children: (0, n.jsxs)("p", {
                                                children: ["My name is ", (0, n.jsx)("span", {
                                                    children: "David Parker."
                                                }), " I am a graphic designer, and ", "I'm", " very passionate and dedicated to my work. With 20 years experience as a professional a graphic designer, I have acquired the skills and knowledge."]
                                            })
                                        }), (0, n.jsx)("div", {
                                            className: "edrea_tm_button",
                                            children: (0, n.jsx)("a", {
                                                href: "#",
                                                onClick: function() {
                                                    return i(!0)
                                                },
                                                children: "Learn More"
                                            })
                                        })]
                                    })]
                                })
                            })
                        })]
                    })
                },
                T = i(9101);

            function O(e, s, i) {
                return s in e ? Object.defineProperty(e, s, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[s] = i, e
            }
            var R = function() {
                    var e = (0, a.useState)({
                            name: "",
                            email: "",
                            message: ""
                        }),
                        s = e[0],
                        i = e[1],
                        r = s.name,
                        t = s.email,
                        l = s.message,
                        c = (0, a.useState)(null),
                        o = c[0],
                        d = c[1],
                        m = function(e) {
                            return i(function(e) {
                                for (var s = 1; s < arguments.length; s++) {
                                    var i = null != arguments[s] ? arguments[s] : {},
                                        n = Object.keys(i);
                                    "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(i, e).enumerable
                                    })))), n.forEach((function(s) {
                                        O(e, s, i[s])
                                    }))
                                }
                                return e
                            }({}, s, O({}, e.target.name, e.target.value)))
                        },
                        u = function() {
                            setTimeout((function() {
                                d(null)
                            }), 2e3)
                        };
                    return (0, n.jsx)("div", {
                        className: "edrea_tm_section hidden animated",
                        id: "contact",
                        children: (0, n.jsx)("div", {
                            className: "section_inner",
                            children: (0, n.jsxs)("div", {
                                className: "edrea_tm_contact",
                                children: [(0, n.jsx)("div", {
                                    className: "edrea_tm_main_title",
                                    children: (0, n.jsxs)("h3", {
                                        children: ["Get in ", (0, n.jsx)("span", {
                                            className: "coloring",
                                            children: "Touch"
                                        })]
                                    })
                                }), (0, n.jsxs)("div", {
                                    className: "wrapper",
                                    children: [(0, n.jsx)("div", {
                                        className: "left",
                                        children: (0, n.jsxs)("ul", {
                                            children: [(0, n.jsx)("li", {
                                                children: (0, n.jsxs)("div", {
                                                    className: "list_inner",
                                                    children: [(0, n.jsx)("i", {
                                                        className: "icon-location"
                                                    }), (0, n.jsx)("span", {
                                                        children: (0, n.jsx)("a", {
                                                            href: "#",
                                                            className: "href_location",
                                                            children: "Avon str. 22, NYC, USA"
                                                        })
                                                    })]
                                                })
                                            }), (0, n.jsx)("li", {
                                                children: (0, n.jsxs)("div", {
                                                    className: "list_inner",
                                                    children: [(0, n.jsx)("i", {
                                                        className: "icon-phone"
                                                    }), (0, n.jsx)("span", {
                                                        children: (0, n.jsx)("a", {
                                                            href: "#",
                                                            children: "+77 022 155 02 02"
                                                        })
                                                    })]
                                                })
                                            }), (0, n.jsx)("li", {
                                                children: (0, n.jsxs)("div", {
                                                    className: "list_inner",
                                                    children: [(0, n.jsx)("i", {
                                                        className: "icon-mail-1"
                                                    }), (0, n.jsx)("span", {
                                                        children: (0, n.jsx)("a", {
                                                            href: "mailto:example@gmail.com",
                                                            children: "example@gmail.com"
                                                        })
                                                    })]
                                                })
                                            }), (0, n.jsx)("li", {
                                                children: (0, n.jsxs)("div", {
                                                    className: "list_inner",
                                                    children: [(0, n.jsx)("i", {
                                                        className: "icon-facebook-rect"
                                                    }), (0, n.jsx)("span", {
                                                        children: (0, n.jsx)("a", {
                                                            href: "https://www.facebook.com",
                                                            children: "@facebookNick"
                                                        })
                                                    })]
                                                })
                                            })]
                                        })
                                    }), (0, n.jsx)("div", {
                                        className: "right",
                                        children: (0, n.jsx)("div", {
                                            className: "fields",
                                            children: (0, n.jsxs)("form", {
                                                className: "contact_form",
                                                id: "contact_form",
                                                onSubmit: function(e) {
                                                    return function(e) {
                                                        e.preventDefault(), 0 === r.length || 0 === t.length || 0 === l.length ? (d(!0), u()) : T.ZP.send("service_seruhwu", "template_21aw58z", s, "Q3pccdLZhU-mZT7tQ").then((function(e) {
                                                            d(!1), u(), i({
                                                                name: "",
                                                                email: "",
                                                                message: ""
                                                            })
                                                        }), (function(e) {
                                                            // console.log(e.text)
                                                        }))
                                                    }(e)
                                                },
                                                children: [(0, n.jsx)("div", {
                                                    className: "returnmessage",
                                                    "data-success": "Your message has been received, We will contact you soon."
                                                }), (0, n.jsx)("div", {
                                                    className: o ? "empty_notice" : "returnmessage",
                                                    style: {
                                                        display: null == o ? "none" : "block"
                                                    },
                                                    children: (0, n.jsx)("span", {
                                                        children: o ? "Please Fill Required Fields" : "Your message has been received, We will contact you soon."
                                                    })
                                                }), (0, n.jsx)("div", {
                                                    className: "first",
                                                    children: (0, n.jsxs)("ul", {
                                                        children: [(0, n.jsx)("li", {
                                                            children: (0, n.jsx)("div", {
                                                                className: "list_inner",
                                                                children: (0, n.jsx)("input", {
                                                                    id: "name",
                                                                    type: "text",
                                                                    placeholder: "Name",
                                                                    name: "name",
                                                                    onChange: function(e) {
                                                                        return m(e)
                                                                    },
                                                                    value: r
                                                                })
                                                            })
                                                        }), (0, n.jsx)("li", {
                                                            children: (0, n.jsx)("div", {
                                                                className: "list_inner",
                                                                children: (0, n.jsx)("input", {
                                                                    id: "email",
                                                                    type: "email",
                                                                    name: "email",
                                                                    onChange: function(e) {
                                                                        return m(e)
                                                                    },
                                                                    value: t,
                                                                    placeholder: "Email",
                                                                    autoComplete: "off"
                                                                })
                                                            })
                                                        })]
                                                    })
                                                }), (0, n.jsx)("div", {
                                                    className: "last",
                                                    children: (0, n.jsx)("textarea", {
                                                        id: "message",
                                                        placeholder: "Message",
                                                        name: "message",
                                                        onChange: function(e) {
                                                            return m(e)
                                                        },
                                                        value: l
                                                    })
                                                }), (0, n.jsx)("div", {
                                                    className: "edrea_tm_button",
                                                    children: (0, n.jsx)("input", {
                                                        className: "a",
                                                        type: "submit",
                                                        value: "Submit Message"
                                                    })
                                                })]
                                            })
                                        })
                                    })]
                                })]
                            })
                        })
                    })
                },
                I = "David",
                D = "Parker",
                L = function(e) {
                    e.activeWithBtn;
                    var s = (0, a.useContext)(g).changeNav;
                    return (0, n.jsx)("div", {
                        className: "edrea_tm_section animated",
                        id: "home",
                        children: (0, n.jsx)("div", {
                            className: "section_inner",
                            children: (0, n.jsxs)("div", {
                                className: "edrea_tm_home",
                                children: [(0, n.jsxs)("h3", {
                                    className: "name",
                                    children: [I, " ", (0, n.jsx)("span", {
                                        className: "coloring",
                                        children: D
                                    })]
                                }), (0, n.jsx)("h3", {
                                    className: "job",
                                    children: (0, n.jsx)(t, {})
                                }), (0, n.jsx)("div", {
                                    className: "edrea_tm_button transition_link",
                                    children: (0, n.jsx)("a", {
                                        href: "#contact",
                                        onClick: function() {
                                            return s("contact")
                                        },
                                        children: "Get in Touch"
                                    })
                                })]
                            })
                        })
                    })
                },
                U = function(e) {
                    var s = e.data,
                        i = e.open,
                        a = e.close;
                    return (0, n.jsx)(k, {
                        open: i,
                        close: a,
                        children: (0, n.jsxs)("div", {
                            className: "news_popup_details",
                            children: [(0, n.jsxs)("div", {
                                className: "top_image",
                                children: [(0, n.jsx)("img", {
                                    src: "img/thumbs/4-2.jpg",
                                    alt: ""
                                }), (0, n.jsx)("div", {
                                    className: "main",
                                    "data-img-url": s && s.img,
                                    style: {
                                        backgroundImage: "url(".concat(s && s.img, ")")
                                    }
                                })]
                            }), (0, n.jsxs)("div", {
                                className: "news_main_title",
                                children: [(0, n.jsx)("h3", {
                                    children: s && s.title
                                }), (0, n.jsx)("span", {
                                    children: (0, n.jsx)("a", {
                                        href: "#",
                                        children: s && s.tag
                                    })
                                }), (0, n.jsx)("div", {})]
                            }), (0, n.jsx)("div", {
                                className: "text",
                                children: s && s.des && s.des.map((function(e, s) {
                                    return (0, n.jsx)("p", {
                                        children: e
                                    }, s)
                                }))
                            })]
                        })
                    })
                };

            function B(e, s, i) {
                return s in e ? Object.defineProperty(e, s, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[s] = i, e
            }

            function M(e) {
                for (var s = 1; s < arguments.length; s++) {
                    var i = null != arguments[s] ? arguments[s] : {},
                        n = Object.keys(i);
                    "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(i, e).enumerable
                    })))), n.forEach((function(s) {
                        B(e, s, i[s])
                    }))
                }
                return e
            }
            var z = [{
                    title: "Building brands through customer service",
                    img: "img/news/1.jpg",
                    tag: "Branding",
                    des: ["Oki is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.", "In today\u2019s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user\u2019s first impression relates to web design. It\u2019s also why web design services can have an immense impact on your company\u2019s bottom line.", "That\u2019s why more companies are not only reevaluating their website\u2019s design but also partnering with Kura, the web design agency that\u2019s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business."]
                }, {
                    title: "Unstoppable Jamstack and Gatsby opportunity",
                    img: "img/news/2.jpg",
                    tag: "Design",
                    des: ["Oki is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.", "In today\u2019s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user\u2019s first impression relates to web design. It\u2019s also why web design services can have an immense impact on your company\u2019s bottom line.", "That\u2019s why more companies are not only reevaluating their website\u2019s design but also partnering with Kura, the web design agency that\u2019s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business."]
                }, {
                    title: "Electron framework adds encryption API",
                    img: "img/news/3.jpg",
                    tag: "Media",
                    des: ["Oki is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.", "In today\u2019s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user\u2019s first impression relates to web design. It\u2019s also why web design services can have an immense impact on your company\u2019s bottom line.", "That\u2019s why more companies are not only reevaluating their website\u2019s design but also partnering with Kura, the web design agency that\u2019s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business."]
                }, {
                    title: "Sentry for JavaScript monitors release health",
                    img: "img/news/4.jpg",
                    tag: "Technology",
                    des: ["Oki is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.", "In today\u2019s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user\u2019s first impression relates to web design. It\u2019s also why web design services can have an immense impact on your company\u2019s bottom line.", "That\u2019s why more companies are not only reevaluating their website\u2019s design but also partnering with Kura, the web design agency that\u2019s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business."]
                }, {
                    title: "Five reasons to begin a Packt subscription",
                    img: "img/news/5.jpg",
                    tag: "Lifestyle",
                    des: ["Oki is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.", "In today\u2019s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user\u2019s first impression relates to web design. It\u2019s also why web design services can have an immense impact on your company\u2019s bottom line.", "That\u2019s why more companies are not only reevaluating their website\u2019s design but also partnering with Kura, the web design agency that\u2019s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business."]
                }, {
                    title: "Why developers are so divided over WordPress",
                    img: "img/news/6.jpg",
                    tag: "Modern",
                    des: ["Oki is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.", "In today\u2019s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user\u2019s first impression relates to web design. It\u2019s also why web design services can have an immense impact on your company\u2019s bottom line.", "That\u2019s why more companies are not only reevaluating their website\u2019s design but also partnering with Kura, the web design agency that\u2019s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business."]
                }],
                F = function() {
                    var e = (0, a.useState)(!1),
                        s = e[0],
                        i = e[1],
                        r = (0, a.useState)({}),
                        t = r[0],
                        l = r[1],
                        o = function(e) {
                            i(!0), l(z[e])
                        };
                    return (0, n.jsxs)(a.Fragment, {
                        children: [(0, n.jsx)(U, {
                            open: s,
                            close: function() {
                                return i(!1)
                            },
                            data: t
                        }), (0, n.jsx)("div", {
                            className: "edrea_tm_section hidden animated",
                            id: "news",
                            children: (0, n.jsx)("div", {
                                className: "section_inner",
                                children: (0, n.jsxs)("div", {
                                    className: "edrea_tm_news swiper-section",
                                    children: [(0, n.jsx)("div", {
                                        className: "edrea_tm_main_title",
                                        children: (0, n.jsxs)("h3", {
                                            children: ["Latest ", (0, n.jsx)("span", {
                                                className: "coloring",
                                                children: "News"
                                            })]
                                        })
                                    }), (0, n.jsx)("div", {
                                        className: "news_list",
                                        children: (0, n.jsxs)(c.tq, M({}, b, {
                                            className: "swiper-container",
                                            children: [(0, n.jsx)("div", {
                                                className: "swiper-wrapper",
                                                children: z.map((function(e, s) {
                                                    return (0, n.jsx)(c.o5, {
                                                        className: "swiper-slide",
                                                        children: (0, n.jsxs)("div", {
                                                            className: "list_inner",
                                                            children: [(0, n.jsxs)("div", {
                                                                className: "image",
                                                                children: [(0, n.jsx)("img", {
                                                                    src: "img/thumbs/4-3.jpg",
                                                                    alt: ""
                                                                }), (0, n.jsx)("div", {
                                                                    className: "main",
                                                                    "data-img-url": e.img
                                                                }), (0, n.jsx)("a", {
                                                                    className: "edrea_tm_full_link news_popup",
                                                                    href: "#",
                                                                    onClick: function() {
                                                                        return o(s)
                                                                    }
                                                                })]
                                                            }), (0, n.jsxs)("div", {
                                                                className: "details",
                                                                children: [(0, n.jsx)("h3", {
                                                                    children: (0, n.jsx)("a", {
                                                                        href: "#",
                                                                        onClick: function() {
                                                                            return o(s)
                                                                        },
                                                                        children: e.title
                                                                    })
                                                                }), (0, n.jsx)("span", {
                                                                    children: (0, n.jsx)("a", {
                                                                        href: "#",
                                                                        onClick: function() {
                                                                            return o(s)
                                                                        },
                                                                        children: e.tag
                                                                    })
                                                                })]
                                                            })]
                                                        })
                                                    }, s)
                                                }))
                                            }), (0, n.jsxs)("div", {
                                                className: "edrea_tm_swiper_progress fill",
                                                children: [(0, n.jsxs)("div", {
                                                    className: "my_pagination_in",
                                                    children: [(0, n.jsx)("span", {
                                                        className: "currentNews"
                                                    }), (0, n.jsx)("span", {
                                                        className: "pagination_progress",
                                                        children: (0, n.jsx)("span", {
                                                            className: "all allNews",
                                                            children: (0, n.jsx)("span", {})
                                                        })
                                                    }), (0, n.jsx)("span", {
                                                        className: "totalNews"
                                                    })]
                                                }), (0, n.jsx)("div", {
                                                    className: "my_navigation",
                                                    children: (0, n.jsxs)("ul", {
                                                        children: [(0, n.jsx)("li", {
                                                            children: (0, n.jsx)("a", {
                                                                className: "my_prev",
                                                                href: "#",
                                                                children: (0, n.jsx)("i", {
                                                                    className: "icon-left-open-1"
                                                                })
                                                            })
                                                        }), (0, n.jsx)("li", {
                                                            children: (0, n.jsx)("a", {
                                                                className: "my_next",
                                                                href: "#",
                                                                children: (0, n.jsx)("i", {
                                                                    className: "icon-right-open-1"
                                                                })
                                                            })
                                                        })]
                                                    })
                                                })]
                                            })]
                                        }))
                                    })]
                                })
                            })
                        })]
                    })
                },
                q = function(e) {
                    var s = e.close,
                        i = e.open;
                    return (0, n.jsx)(k, {
                        close: s,
                        open: i,
                        children: (0, n.jsxs)("div", {
                            className: "portfolio_popup_details",
                            children: [(0, n.jsxs)("div", {
                                className: "top_image",
                                children: [(0, n.jsx)("img", {
                                    src: "img/thumbs/4-2.jpg",
                                    alt: ""
                                }), (0, n.jsx)("div", {
                                    className: "main",
                                    "data-img-url": "img/portfolio/4.jpg"
                                })]
                            }), (0, n.jsxs)("div", {
                                className: "portfolio_main_title",
                                children: [(0, n.jsx)("h3", {
                                    children: "Delicious Apple"
                                }), (0, n.jsx)("span", {
                                    children: (0, n.jsx)("a", {
                                        href: "#",
                                        children: "Detail"
                                    })
                                }), (0, n.jsx)("div", {})]
                            }), (0, n.jsxs)("div", {
                                className: "text",
                                children: [(0, n.jsx)("p", {
                                    children: "An apple is an edible fruit produced by an apple tree. Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found today."
                                }), (0, n.jsx)("p", {
                                    children: "Apples grown from seed tend to be very different from those of the parents, and the resultant fruit frequently lack desired characteristics. Generally then, apple cultivars are propagated by clonal grafting onto rootstocks. Apple trees grown without rootstocks tend to be larger and much slower to fruit after planting."
                                })]
                            }), (0, n.jsx)("div", {
                                className: "additional_images",
                                children: (0, n.jsxs)("ul", {
                                    className: "gallery_zoom",
                                    children: [(0, n.jsx)("li", {
                                        children: (0, n.jsx)("div", {
                                            className: "list_inner",
                                            children: (0, n.jsxs)("div", {
                                                className: "image",
                                                children: [(0, n.jsx)("img", {
                                                    src: "img/thumbs/4-2.jpg",
                                                    alt: ""
                                                }), (0, n.jsx)("div", {
                                                    className: "main",
                                                    "data-img-url": "img/portfolio/7.jpg"
                                                }), (0, n.jsx)("a", {
                                                    className: "edrea_tm_full_link zoom",
                                                    href: "img/portfolio/7.jpg"
                                                })]
                                            })
                                        })
                                    }), (0, n.jsx)("li", {
                                        children: (0, n.jsx)("div", {
                                            className: "list_inner",
                                            children: (0, n.jsxs)("div", {
                                                className: "image",
                                                children: [(0, n.jsx)("img", {
                                                    src: "img/thumbs/4-2.jpg",
                                                    alt: ""
                                                }), (0, n.jsx)("div", {
                                                    className: "main",
                                                    "data-img-url": "img/portfolio/8.jpg"
                                                }), (0, n.jsx)("a", {
                                                    className: "edrea_tm_full_link zoom",
                                                    href: "img/portfolio/8.jpg"
                                                })]
                                            })
                                        })
                                    }), (0, n.jsx)("li", {
                                        children: (0, n.jsx)("div", {
                                            className: "list_inner",
                                            children: (0, n.jsxs)("div", {
                                                className: "image",
                                                children: [(0, n.jsx)("img", {
                                                    src: "img/thumbs/4-2.jpg",
                                                    alt: ""
                                                }), (0, n.jsx)("div", {
                                                    className: "main",
                                                    "data-img-url": "img/portfolio/9.jpg"
                                                }), (0, n.jsx)("a", {
                                                    className: "edrea_tm_full_link zoom",
                                                    href: "img/portfolio/9.jpg"
                                                })]
                                            })
                                        })
                                    })]
                                })
                            })]
                        })
                    })
                };

            function W(e, s, i) {
                return s in e ? Object.defineProperty(e, s, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[s] = i, e
            }

            function G(e) {
                for (var s = 1; s < arguments.length; s++) {
                    var i = null != arguments[s] ? arguments[s] : {},
                        n = Object.keys(i);
                    "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(i, e).enumerable
                    })))), n.forEach((function(s) {
                        W(e, s, i[s])
                    }))
                }
                return e
            }
            var X = function() {
                    var e = (0, a.useState)(!1),
                        s = e[0],
                        i = e[1];
                    return (0, n.jsxs)(a.Fragment, {
                        children: [(0, n.jsx)(q, {
                            open: s,
                            close: function() {
                                return i(!1)
                            }
                        }), (0, n.jsx)("div", {
                            className: "edrea_tm_section hidden animated",
                            id: "portfolio",
                            children: (0, n.jsx)("div", {
                                className: "section_inner",
                                children: (0, n.jsxs)("div", {
                                    className: "edrea_tm_portfolio swiper-section",
                                    children: [(0, n.jsx)("div", {
                                        className: "edrea_tm_main_title",
                                        children: (0, n.jsxs)("h3", {
                                            children: ["Creative ", (0, n.jsx)("span", {
                                                className: "coloring",
                                                children: "Portfolio"
                                            })]
                                        })
                                    }), (0, n.jsx)("div", {
                                        className: "portfolio_list gallery_zoom",
                                        children: (0, n.jsxs)(c.tq, G({}, N, {
                                            className: "swiper-container",
                                            children: [(0, n.jsxs)("div", {
                                                className: "swiper-wrapper",
                                                children: [(0, n.jsx)(c.o5, {
                                                    className: "swiper-slide",
                                                    children: (0, n.jsxs)("div", {
                                                        className: "list_inner",
                                                        children: [(0, n.jsxs)("div", {
                                                            className: "image",
                                                            children: [(0, n.jsx)("img", {
                                                                src: "img/thumbs/1-1.jpg",
                                                                alt: ""
                                                            }), (0, n.jsx)("div", {
                                                                className: "main",
                                                                "data-img-url": "img/portfolio/1.jpg"
                                                            })]
                                                        }), (0, n.jsxs)("div", {
                                                            className: "details",
                                                            children: [(0, n.jsx)("h3", {
                                                                children: "Sweet Fruit"
                                                            }), (0, n.jsx)("span", {
                                                                children: "Vimeo"
                                                            })]
                                                        }), (0, n.jsx)("a", {
                                                            className: "edrea_tm_full_link popup-vimeo",
                                                            href: "//player.vimeo.com/video/337293658?autoplay=1"
                                                        })]
                                                    })
                                                }), (0, n.jsx)(c.o5, {
                                                    className: "swiper-slide",
                                                    children: (0, n.jsxs)("div", {
                                                        className: "list_inner",
                                                        children: [(0, n.jsxs)("div", {
                                                            className: "image",
                                                            children: [(0, n.jsx)("img", {
                                                                src: "img/thumbs/1-1.jpg",
                                                                alt: ""
                                                            }), (0, n.jsx)("div", {
                                                                className: "main",
                                                                "data-img-url": "img/portfolio/2.jpg"
                                                            })]
                                                        }), (0, n.jsxs)("div", {
                                                            className: "details",
                                                            children: [(0, n.jsx)("h3", {
                                                                children: "Good Present"
                                                            }), (0, n.jsx)("span", {
                                                                children: "Youtube"
                                                            })]
                                                        }), (0, n.jsx)("a", {
                                                            className: "edrea_tm_full_link popup-youtube",
                                                            href: "//www.youtube.com/embed/7e90gBu4pas?autoplay=1"
                                                        })]
                                                    })
                                                }), (0, n.jsx)(c.o5, {
                                                    className: "swiper-slide",
                                                    children: (0, n.jsxs)("div", {
                                                        className: "list_inner",
                                                        children: [(0, n.jsxs)("div", {
                                                            className: "image",
                                                            children: [(0, n.jsx)("img", {
                                                                src: "img/thumbs/1-1.jpg",
                                                                alt: ""
                                                            }), (0, n.jsx)("div", {
                                                                className: "main",
                                                                "data-img-url": "img/portfolio/3.jpg"
                                                            })]
                                                        }), (0, n.jsxs)("div", {
                                                            className: "details",
                                                            children: [(0, n.jsx)("h3", {
                                                                children: "Mockup Cream"
                                                            }), (0, n.jsx)("span", {
                                                                children: "Soundcloud"
                                                            })]
                                                        }), (0, n.jsx)("a", {
                                                            className: "edrea_tm_full_link soundcloude_link mfp-iframe audio",
                                                            href: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                                                        })]
                                                    })
                                                }), (0, n.jsx)(c.o5, {
                                                    className: "swiper-slide",
                                                    children: (0, n.jsxs)("div", {
                                                        className: "list_inner",
                                                        children: [(0, n.jsxs)("div", {
                                                            className: "image",
                                                            children: [(0, n.jsx)("img", {
                                                                src: "img/thumbs/1-1.jpg",
                                                                alt: ""
                                                            }), (0, n.jsx)("div", {
                                                                className: "main",
                                                                "data-img-url": "img/portfolio/4.jpg"
                                                            })]
                                                        }), (0, n.jsxs)("div", {
                                                            className: "details",
                                                            children: [(0, n.jsx)("h3", {
                                                                children: "Delicious Apple"
                                                            }), (0, n.jsx)("span", {
                                                                children: "Detail"
                                                            })]
                                                        }), (0, n.jsx)("a", {
                                                            className: "edrea_tm_full_link portfolio_popup",
                                                            href: "#",
                                                            onClick: function() {
                                                                return i(!0)
                                                            }
                                                        })]
                                                    })
                                                }), (0, n.jsx)(c.o5, {
                                                    className: "swiper-slide",
                                                    children: (0, n.jsxs)("div", {
                                                        className: "list_inner",
                                                        children: [(0, n.jsxs)("div", {
                                                            className: "image",
                                                            children: [(0, n.jsx)("img", {
                                                                src: "img/thumbs/1-1.jpg",
                                                                alt: ""
                                                            }), (0, n.jsx)("div", {
                                                                className: "main",
                                                                "data-img-url": "img/portfolio/5.jpg"
                                                            })]
                                                        }), (0, n.jsxs)("div", {
                                                            className: "details",
                                                            children: [(0, n.jsx)("h3", {
                                                                children: "Blue Lemon"
                                                            }), (0, n.jsx)("span", {
                                                                children: "Image"
                                                            })]
                                                        }), (0, n.jsx)("a", {
                                                            className: "edrea_tm_full_link zoom",
                                                            href: "img/portfolio/5.jpg"
                                                        })]
                                                    })
                                                }), (0, n.jsx)(c.o5, {
                                                    className: "swiper-slide",
                                                    children: (0, n.jsxs)("div", {
                                                        className: "list_inner",
                                                        children: [(0, n.jsxs)("div", {
                                                            className: "image",
                                                            children: [(0, n.jsx)("img", {
                                                                src: "img/thumbs/1-1.jpg",
                                                                alt: ""
                                                            }), (0, n.jsx)("div", {
                                                                className: "main",
                                                                "data-img-url": "img/portfolio/6.jpg"
                                                            })]
                                                        }), (0, n.jsxs)("div", {
                                                            className: "details",
                                                            children: [(0, n.jsx)("h3", {
                                                                children: "Sweet Cheery"
                                                            }), (0, n.jsx)("span", {
                                                                children: "Image"
                                                            })]
                                                        }), (0, n.jsx)("a", {
                                                            className: "edrea_tm_full_link zoom",
                                                            href: "img/portfolio/6.jpg"
                                                        })]
                                                    })
                                                })]
                                            }), (0, n.jsxs)("div", {
                                                className: "edrea_tm_swiper_progress fill",
                                                children: [(0, n.jsxs)("div", {
                                                    className: "my_pagination_in",
                                                    children: [(0, n.jsx)("span", {
                                                        className: "current"
                                                    }), (0, n.jsx)("span", {
                                                        className: "pagination_progress",
                                                        children: (0, n.jsx)("span", {
                                                            className: "all",
                                                            children: (0, n.jsx)("span", {})
                                                        })
                                                    }), (0, n.jsx)("span", {
                                                        className: "total"
                                                    })]
                                                }), (0, n.jsx)("div", {
                                                    className: "my_navigation",
                                                    children: (0, n.jsxs)("ul", {
                                                        children: [(0, n.jsx)("li", {
                                                            children: (0, n.jsx)("a", {
                                                                className: "my_prev",
                                                                href: "#",
                                                                children: (0, n.jsx)("i", {
                                                                    className: "icon-left-open-1"
                                                                })
                                                            })
                                                        }), (0, n.jsx)("li", {
                                                            children: (0, n.jsx)("a", {
                                                                className: "my_next",
                                                                href: "#",
                                                                children: (0, n.jsx)("i", {
                                                                    className: "icon-right-open-1"
                                                                })
                                                            })
                                                        })]
                                                    })
                                                })]
                                            })]
                                        }))
                                    })]
                                })
                            })
                        })]
                    })
                },
                H = i(9008),
                Y = i.n(H),
                V = function(e) {
                    var s = e.close,
                        i = e.src,
                        r = _((function() {
                            s(!1)
                        }));
                    return (0, n.jsxs)(a.Fragment, {
                        children: [(0, n.jsx)("div", {
                            className: "mfp-bg mfp-ready",
                            onClick: function() {
                                return s(!1)
                            }
                        }), (0, n.jsx)("div", {
                            className: "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
                            tabIndex: -1,
                            style: {
                                overflow: "hidden auto"
                            },
                            children: (0, n.jsxs)("div", {
                                className: "mfp-container mfp-s-ready mfp-iframe-holder mfp-img-container",
                                children: [(0, n.jsx)("div", {
                                    className: "mfp-content",
                                    ref: r,
                                    children: (0, n.jsx)("div", {
                                        className: "mfp-iframe-scaler",
                                        children: (0, n.jsx)("img", {
                                            className: "mfp-img",
                                            src: i
                                        })
                                    })
                                }), (0, n.jsx)("div", {
                                    className: "mfp-preloader",
                                    children: "Loading..."
                                })]
                            })
                        })]
                    })
                },
                K = function() {
                    var e = (0, a.useState)(!1),
                        s = e[0],
                        i = e[1],
                        r = (0, a.useState)(null),
                        t = r[0],
                        l = r[1];
                    return (0, a.useEffect)((function() {
                        setTimeout((function() {
                            document.querySelectorAll("a").forEach((function(e) {
                                e.href.includes("img/") && null === e.getAttribute("download") && e.addEventListener("click", (function(s) {
                                    s.preventDefault(), l(e.href), i(!0)
                                }))
                            }))
                        }), 1500)
                    }), []), (0, n.jsx)(a.Fragment, {
                        children: s && (0, n.jsx)(V, {
                            close: function() {
                                return i(!1)
                            },
                            src: t
                        })
                    })
                },
                Q = function(e) {
                    var s = e.close,
                        i = e.videoID,
                        r = _((function() {
                            s(!1)
                        }));
                    return (0, n.jsxs)(a.Fragment, {
                        children: [(0, n.jsx)("div", {
                            className: "mfp-bg mfp-ready",
                            onClick: function() {
                                return s(!1)
                            }
                        }), (0, n.jsx)("div", {
                            className: "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
                            tabIndex: -1,
                            style: {
                                overflow: "hidden auto"
                            },
                            children: (0, n.jsxs)("div", {
                                className: "mfp-container mfp-s-ready mfp-iframe-holder",
                                children: [(0, n.jsx)("div", {
                                    className: "mfp-content",
                                    ref: r,
                                    children: (0, n.jsxs)("div", {
                                        className: "mfp-iframe-scaler",
                                        children: [(0, n.jsx)("button", {
                                            title: "Close (Esc)",
                                            type: "button",
                                            className: "mfp-close",
                                            onClick: function() {
                                                return s()
                                            },
                                            children: "\xd7"
                                        }), (0, n.jsx)("iframe", {
                                            src: i,
                                            title: "YouTube video player",
                                            frameBorder: "0",
                                            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                            allowFullScreen: !0
                                        })]
                                    })
                                }), (0, n.jsx)("div", {
                                    className: "mfp-preloader",
                                    children: "Loading..."
                                })]
                            })
                        })]
                    })
                },
                Z = function() {
                    var e = (0, a.useState)(!1),
                        s = e[0],
                        i = e[1],
                        r = (0, a.useState)(null),
                        t = r[0],
                        l = r[1];
                    return (0, a.useEffect)((function() {
                        setTimeout((function() {
                            document.querySelectorAll("a").forEach((function(e) {
                                (e.href.includes("www.youtube.com") || e.href.includes("vimeo.com") || e.href.includes("soundcloud.com")) && e.addEventListener("click", (function(s) {
                                    s.preventDefault(), l(e.href), i(!0)
                                }))
                            }))
                        }), 1500)
                    }), []), (0, n.jsx)(a.Fragment, {
                        children: s && (0, n.jsx)(Q, {
                            close: function() {
                                return i(!1)
                            },
                            videoID: t
                        })
                    })
                };

            function J(e, s) {
                (null == s || s > e.length) && (s = e.length);
                for (var i = 0, n = new Array(s); i < s; i++) n[i] = e[i];
                return n
            }

            function $(e, s) {
                if (!(e instanceof s)) throw new TypeError("Cannot call a class as a function")
            }

            function ee(e, s) {
                for (var i = 0; i < s.length; i++) {
                    var n = s[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function se(e) {
                return function(e) {
                    if (Array.isArray(e)) return J(e)
                }(e) || function(e) {
                    if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, s) {
                    if (!e) return;
                    if ("string" === typeof e) return J(e, s);
                    var i = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === i && e.constructor && (i = e.constructor.name);
                    if ("Map" === i || "Set" === i) return Array.from(i);
                    if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return J(e, s)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var ie = function() {
                    var e = function() {
                        function e(s) {
                            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = this;
                            $(this, e), i = Object.assign({
                                antialias: !1,
                                depthTest: !1,
                                mousemove: !1,
                                autosize: !0,
                                side: "front",
                                vertex: "\n                   precision highp float;\n           \n                   attribute vec4 a_position;\n                   attribute vec4 a_color;\n           \n                   uniform float u_time;\n                   uniform vec2 u_resolution;\n                   uniform vec2 u_mousemove;\n                   uniform mat4 u_projection;\n           \n                   varying vec4 v_color;\n           \n                   void main() {\n           \n                     gl_Position = u_projection * a_position;\n                     gl_PointSize = (10.0 / gl_Position.w) * 100.0;\n           \n                     v_color = a_color;\n           \n                   }",
                                fragment: "\n                   precision highp float;\n           \n                   uniform sampler2D u_texture;\n                   uniform int u_hasTexture;\n           \n                   varying vec4 v_color;\n           \n                   void main() {\n           \n                     if ( u_hasTexture == 1 ) {\n           \n                       gl_FragColor = v_color * texture2D(u_texture, gl_PointCoord);\n           \n                     } else {\n           \n                       gl_FragColor = v_color;\n           \n                     }\n           \n                   }",
                                uniforms: {},
                                buffers: {},
                                camera: {},
                                texture: null,
                                onUpdate: function() {},
                                onResize: function() {}
                            }, i);
                            var a = Object.assign({
                                    time: {
                                        type: "float",
                                        value: 0
                                    },
                                    hasTexture: {
                                        type: "int",
                                        value: 0
                                    },
                                    resolution: {
                                        type: "vec2",
                                        value: [0, 0]
                                    },
                                    mousemove: {
                                        type: "vec2",
                                        value: [0, 0]
                                    },
                                    projection: {
                                        type: "mat4",
                                        value: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
                                    }
                                }, i.uniforms),
                                r = Object.assign({
                                    position: {
                                        size: 3,
                                        data: []
                                    },
                                    color: {
                                        size: 4,
                                        data: []
                                    }
                                }, i.buffers),
                                t = Object.assign({
                                    fov: 60,
                                    near: 1,
                                    far: 1e4,
                                    aspect: 1,
                                    z: 100,
                                    perspective: !0
                                }, i.camera),
                                l = document.createElement("canvas"),
                                c = l.getContext("webgl", {
                                    antialias: i.antialias
                                });
                            if (!c) return !1;
                            this.count = 0, this.gl = c, this.canvas = l, this.camera = t, this.holder = s, this.onUpdate = i.onUpdate, this.onResize = i.onResize, this.data = {}, s.appendChild(l), this.createProgram(i.vertex, i.fragment), this.createBuffers(r), this.createUniforms(a), this.updateBuffers(), this.updateUniforms(), this.createTexture(i.texture), c.enable(c.BLEND), c.enable(c.CULL_FACE), c.blendFunc(c.SRC_ALPHA, c.ONE), c[i.depthTest ? "enable" : "disable"](c.DEPTH_TEST), i.autosize && window.addEventListener("resize", (function(e) {
                                return n.resize(e)
                            }), !1), i.mousemove && window.addEventListener("mousemove", (function(e) {
                                return n.mousemove(e)
                            }), !1), this.resize(), this.update = this.update.bind(this), this.time = {
                                start: performance.now(),
                                old: performance.now()
                            }, this.update()
                        }
                        var s, i, n;
                        return s = e, i = [{
                            key: "mousemove",
                            value: function(e) {
                                var s = e.pageX / this.width * 2 - 1,
                                    i = e.pageY / this.height * 2 - 1;
                                this.uniforms.mousemove = [s, i]
                            }
                        }, {
                            key: "resize",
                            value: function(e) {
                                var s = this.holder,
                                    i = this.canvas,
                                    n = this.gl,
                                    a = this.width = s.offsetWidth,
                                    r = this.height = s.offsetHeight,
                                    t = this.aspect = a / r,
                                    l = devicePixelRatio;
                                i.width = a * l, i.height = r * l, i.style.width = a + "px", i.style.height = r + "px", n.viewport(0, 0, a * l, r * l), n.clearColor(0, 0, 0, 0), this.uniforms.resolution = [a, r], this.uniforms.projection = this.setProjection(t), this.onResize(a, r, l)
                            }
                        }, {
                            key: "setProjection",
                            value: function(e) {
                                var s = this.camera;
                                if (s.perspective) {
                                    s.aspect = e;
                                    var i = s.fov * (Math.PI / 180),
                                        n = Math.tan(.5 * Math.PI - .5 * i),
                                        a = 1 / (s.near - s.far),
                                        r = [n / s.aspect, 0, 0, 0, 0, n, 0, 0, 0, 0, (s.near + s.far) * a, -1, 0, 0, s.near * s.far * a * 2, 0];
                                    return r[14] += s.z, r[15] += s.z, r
                                }
                                return [2 / this.width, 0, 0, 0, 0, -2 / this.height, 0, 0, 0, 0, 1, 0, -1, 1, 0, 1]
                            }
                        }, {
                            key: "createShader",
                            value: function(e, s) {
                                var i = this.gl,
                                    n = i.createShader(e);
                                if (i.shaderSource(n, s), i.compileShader(n), i.getShaderParameter(n, i.COMPILE_STATUS)) return n;
                                // console.log(i.getShaderInfoLog(n)), i.deleteShader(n)
                            }
                        }, {
                            key: "createProgram",
                            value: function(e, s) {
                                var i = this.gl,
                                    n = this.createShader(i.VERTEX_SHADER, e),
                                    a = this.createShader(i.FRAGMENT_SHADER, s),
                                    r = i.createProgram();
                                i.attachShader(r, n), i.attachShader(r, a), i.linkProgram(r), i.getProgramParameter(r, i.LINK_STATUS) ? (i.useProgram(r), this.program = r) : (console.log(i.getProgramInfoLog(r)), i.deleteProgram(r))
                            }
                        }, {
                            key: "createUniforms",
                            value: function(e) {
                                var s = this,
                                    i = this.gl,
                                    n = this.data.uniforms = e,
                                    a = this.uniforms = {};
                                Object.keys(n).forEach((function(e) {
                                    var r = s;
                                    n[e].location = i.getUniformLocation(s.program, "u_" + e), Object.defineProperty(a, e, {
                                        set: function(s) {
                                            n[e].value = s, r.setUniform(e, s)
                                        },
                                        get: function() {
                                            return n[e].value
                                        }
                                    })
                                }))
                            }
                        }, {
                            key: "setUniform",
                            value: function(e, s) {
                                var i = this.gl,
                                    n = this.data.uniforms[e];
                                switch (n.value = s, n.type) {
                                    case "int":
                                        i.uniform1i(n.location, s);
                                        break;
                                    case "float":
                                        i.uniform1f(n.location, s);
                                        break;
                                    case "vec2":
                                        var a;
                                        (a = i).uniform2f.apply(a, [n.location].concat(se(s)));
                                        break;
                                    case "vec3":
                                        var r;
                                        (r = i).uniform3f.apply(r, [n.location].concat(se(s)));
                                        break;
                                    case "vec4":
                                        var t;
                                        (t = i).uniform4f.apply(t, [n.location].concat(se(s)));
                                        break;
                                    case "mat2":
                                        i.uniformMatrix2fv(n.location, !1, s);
                                        break;
                                    case "mat3":
                                        i.uniformMatrix3fv(n.location, !1, s);
                                        break;
                                    case "mat4":
                                        i.uniformMatrix4fv(n.location, !1, s)
                                }
                            }
                        }, {
                            key: "updateUniforms",
                            value: function() {
                                var e = this,
                                    s = (this.gl, this.data.uniforms);
                                Object.keys(s).forEach((function(i) {
                                    var n = s[i];
                                    e.uniforms[i] = n.value
                                }))
                            }
                        }, {
                            key: "createBuffers",
                            value: function(e) {
                                var s = this,
                                    i = (this.gl, this.data.buffers = e),
                                    n = this.buffers = {};
                                Object.keys(i).forEach((function(e) {
                                    var a = s,
                                        r = i[e];
                                    r.buffer = s.createBuffer("a_" + e, r.size), Object.defineProperty(n, e, {
                                        set: function(s) {
                                            i[e].data = s, a.setBuffer(e, s), "position" == e && (a.count = i.position.data.length / 3)
                                        },
                                        get: function() {
                                            return i[e].data
                                        }
                                    })
                                }))
                            }
                        }, {
                            key: "createBuffer",
                            value: function(e, s) {
                                var i = this.gl,
                                    n = this.program,
                                    a = i.getAttribLocation(n, e),
                                    r = i.createBuffer();
                                return i.bindBuffer(i.ARRAY_BUFFER, r), i.enableVertexAttribArray(a), i.vertexAttribPointer(a, s, i.FLOAT, !1, 0, 0), r
                            }
                        }, {
                            key: "setBuffer",
                            value: function(e, s) {
                                var i = this.gl,
                                    n = this.data.buffers;
                                (null != e || i.bindBuffer(i.ARRAY_BUFFER, null)) && (i.bindBuffer(i.ARRAY_BUFFER, n[e].buffer), i.bufferData(i.ARRAY_BUFFER, new Float32Array(s), i.STATIC_DRAW))
                            }
                        }, {
                            key: "updateBuffers",
                            value: function() {
                                this.gl;
                                var e = this.buffers;
                                Object.keys(e).forEach((function(s) {
                                    return e[s] = buffer.data
                                })), this.setBuffer(null)
                            }
                        }, {
                            key: "createTexture",
                            value: function(e) {
                                var s = this.gl,
                                    i = s.createTexture();
                                s.bindTexture(s.TEXTURE_2D, i), s.texImage2D(s.TEXTURE_2D, 0, s.RGBA, 1, 1, 0, s.RGBA, s.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 0])), this.texture = i, e && (this.uniforms.hasTexture = 1, this.loadTexture(e))
                            }
                        }, {
                            key: "loadTexture",
                            value: function(e) {
                                var s = this.gl,
                                    i = this.texture,
                                    n = new Image;
                                n.onload = function() {
                                    s.bindTexture(s.TEXTURE_2D, i), s.texImage2D(s.TEXTURE_2D, 0, s.RGBA, s.RGBA, s.UNSIGNED_BYTE, n), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MIN_FILTER, s.LINEAR), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MAG_FILTER, s.LINEAR), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_S, s.CLAMP_TO_EDGE), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_T, s.CLAMP_TO_EDGE)
                                }, n.src = e
                            }
                        }, {
                            key: "update",
                            value: function() {
                                var e = this.gl,
                                    s = performance.now(),
                                    i = (s - this.time.start) / 5e3,
                                    n = s - this.time.old;
                                this.time.old = s, this.uniforms.time = i, this.count > 0 && (e.clear(e.COLORBUFFERBIT), e.drawArrays(e.POINTS, 0, this.count)), this.onUpdate(n), requestAnimationFrame(this.update)
                            }
                        }], i && ee(s.prototype, i), n && ee(s, n), e
                    }();
                    new e(document.querySelector(".waves"), {
                        texture: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAb1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8v0wLRAAAAJHRSTlMAC/goGvDhmwcExrVjWzrm29TRqqSKenRXVklANSIUE8mRkGpv+HOfAAABCElEQVQ4y4VT13LDMAwLrUHteO+R9f/fWMfO6dLaPeKVEECRxOULWsEGpS9nULDwia2Y+ALqUNbAWeg775zv+sA4/FFRMxt8U2FZFCVWjR/YrH4/H9sarclSKdPMWKzb8VsEeHB3m0shkhVCyNzeXeAQ9Xl4opEieX2QCGnwGbj6GMyjw9t1K0fK9YZunPXeAGsfJtYjwzxaBnozGGorYz0ypK2HzQSYx1y8DgSRo2ewOiyh2QWOEk1Y9OrQV0a8TiBM1a8eMHWYnRMy7CZ4t1CmyRkhSUvP3gRXyHOCLBxNoC3IJv//ZrJ/kxxUHPUB+6jJZZHrpg6GOjnqaOmzp4NDR48OLxn/H27SRQ08S0ZJAAAAAElFTkSuQmCC",
                        uniforms: {
                            size: {
                                type: "float",
                                value: 2.5
                            },
                            field: {
                                type: "vec3",
                                value: [0, 0, 0]
                            },
                            speed: {
                                type: "float",
                                value: 5
                            }
                        },
                        vertex: "\n               #define M_PI 3.1415926535897932384626433832795\n           \n               precision highp float;\n           \n               attribute vec4 a_position;\n               attribute vec4 a_color;\n           \n               uniform float u_time;\n               uniform float u_size;\n               uniform float u_speed;\n               uniform vec3 u_field;\n               uniform mat4 u_projection;\n           \n               varying vec4 v_color;\n           \n               void main() {\n           \n                 vec3 pos = a_position.xyz;\n           \n                 pos.y += (\n                   cos(pos.x / u_field.x * M_PI * 8.0 + u_time * u_speed) +\n                   sin(pos.z / u_field.z * M_PI * 8.0 + u_time * u_speed)\n                 ) * u_field.y;\n           \n                 gl_Position = u_projection * vec4( pos.xyz, a_position.w );\n                 gl_PointSize = ( u_size / gl_Position.w ) * 100.0;\n           \n                 v_color = a_color;\n           \n               }",
                        fragment: "\n               precision highp float;\n           \n               uniform sampler2D u_texture;\n           \n               varying vec4 v_color;\n           \n               void main() {\n           \n                 gl_FragColor = v_color * texture2D(u_texture, gl_PointCoord);\n           \n               }",
                        onResize: function(e, s, i) {
                            for (var n = [], a = [], r = e / s * 400, t = 400, l = 0; l < r; l += 5)
                                for (var c = 0; c < t; c += 5) n.push(-r / 2 + l, -30, -200 + c), a.push(0, 1 - l / r * 1, .5 + l / r * .5, c / t);
                            this.uniforms.field = [r, 3, t], this.buffers.position = n, this.buffers.color = a, this.uniforms.size = s / 400 * 2.5 * i
                        }
                    })
                },
                ne = function() {
                    var e = (0, a.useContext)(g),
                        s = e.nav,
                        i = e.changeNav,
                        r = function(e) {
                            return e == s ? "active" : ""
                        };
                    return (0, n.jsx)("div", {
                        className: "edrea_tm_header",
                        children: (0, n.jsxs)("div", {
                            className: "header_inner",
                            children: [(0, n.jsx)("div", {
                                className: "logo",
                                children: (0, n.jsx)("a", {
                                    href: "#",
                                    onClick: function() {
                                        return i("home")
                                    },
                                    children: (0, n.jsx)("img", {
                                        src: "img/logo/logo.png",
                                        alt: ""
                                    })
                                })
                            }), (0, n.jsx)("div", {
                                className: "menu",
                                children: (0, n.jsxs)("ul", {
                                    className: "transition_link",
                                    children: [(0, n.jsx)("li", {
                                        className: r("home"),
                                        children: (0, n.jsx)("a", {
                                            href: "#home",
                                            onClick: function() {
                                                return i("home")
                                            },
                                            children: "Home"
                                        })
                                    }), (0, n.jsx)("li", {
                                        className: r("about"),
                                        children: (0, n.jsx)("a", {
                                            href: "#about",
                                            onClick: function() {
                                                return i("about")
                                            },
                                            children: "About"
                                        })
                                    }), (0, n.jsx)("li", {
                                        className: r("portfolio"),
                                        children: (0, n.jsx)("a", {
                                            href: "#portfolio",
                                            onClick: function() {
                                                return i("portfolio")
                                            },
                                            children: "Portfolio"
                                        })
                                    }), (0, n.jsx)("li", {
                                        className: r("news"),
                                        children: (0, n.jsx)("a", {
                                            href: "#news",
                                            onClick: function() {
                                                return i("news")
                                            },
                                            children: "News"
                                        })
                                    }), (0, n.jsx)("li", {
                                        className: r("contact"),
                                        children: (0, n.jsx)("a", {
                                            href: "#contact",
                                            onClick: function() {
                                                return i("contact")
                                            },
                                            children: "Contact"
                                        })
                                    })]
                                })
                            })]
                        })
                    })
                },
                ae = function() {
                    var e = (0, a.useState)(!1),
                        s = e[0],
                        i = e[1],
                        r = (0, a.useContext)(g),
                        t = r.nav,
                        l = r.changeNav,
                        c = function(e) {
                            return e == t ? "active" : ""
                        },
                        o = function(e) {
                            i(!1), l(e)
                        };
                    return (0, n.jsxs)(a.Fragment, {
                        children: [(0, n.jsx)("div", {
                            className: "edrea_tm_topbar",
                            children: (0, n.jsxs)("div", {
                                className: "topbar_inner",
                                children: [(0, n.jsx)("div", {
                                    className: "logo",
                                    children: (0, n.jsx)("a", {
                                        href: "#",
                                        children: (0, n.jsx)("img", {
                                            src: "img/logo/logo.png",
                                            alt: ""
                                        })
                                    })
                                }), (0, n.jsx)("div", {
                                    className: "trigger",
                                    children: (0, n.jsx)("div", {
                                        className: "hamburger hamburger--slider ".concat(s ? "is-active" : ""),
                                        children: (0, n.jsx)("div", {
                                            className: "hamburger-box",
                                            onClick: function() {
                                                return i(!s)
                                            },
                                            children: (0, n.jsx)("div", {
                                                className: "hamburger-inner"
                                            })
                                        })
                                    })
                                })]
                            })
                        }), (0, n.jsx)("div", {
                            className: "edrea_tm_mobile_menu ".concat(s ? "opened" : ""),
                            children: (0, n.jsx)("div", {
                                className: "inner",
                                children: (0, n.jsx)("div", {
                                    className: "menu_list",
                                    children: (0, n.jsxs)("ul", {
                                        className: "transition_link",
                                        children: [(0, n.jsx)("li", {
                                            className: c("home"),
                                            children: (0, n.jsx)("a", {
                                                href: "#home",
                                                onClick: function() {
                                                    return o("home")
                                                },
                                                children: "Home"
                                            })
                                        }), (0, n.jsx)("li", {
                                            className: c("about"),
                                            children: (0, n.jsx)("a", {
                                                href: "#about",
                                                onClick: function() {
                                                    return o("about")
                                                },
                                                children: "About"
                                            })
                                        }), (0, n.jsx)("li", {
                                            className: c("portfolio"),
                                            children: (0, n.jsx)("a", {
                                                href: "#portfolio",
                                                onClick: function() {
                                                    return o("portfolio")
                                                },
                                                children: "Portfolio"
                                            })
                                        }), (0, n.jsx)("li", {
                                            className: c("news"),
                                            children: (0, n.jsx)("a", {
                                                href: "#news",
                                                onClick: function() {
                                                    return o("news")
                                                },
                                                children: "News"
                                            })
                                        }), (0, n.jsx)("li", {
                                            className: c("contact"),
                                            children: (0, n.jsx)("a", {
                                                href: "#contact",
                                                onClick: function() {
                                                    return o("contact")
                                                },
                                                children: "Contact"
                                            })
                                        })]
                                    })
                                })
                            })
                        })]
                    })
                },
                re = function() {
                    return (0, n.jsxs)(a.Fragment, {
                        children: [(0, n.jsx)("div", {
                            className: "mouse-cursor cursor-outer"
                        }), (0, n.jsx)("div", {
                            className: "mouse-cursor cursor-inner"
                        })]
                    })
                },
                te = function() {
                    return (0, n.jsx)("div", {
                        id: "preloader",
                        children: (0, n.jsx)("div", {
                            className: "loader_line"
                        })
                    })
                },
                le = ["#4169e1", "#66B95C", "#ff9800", "#ff5e94", "#fa5b0f", "#f39977", "#9200ee", "#00D4BD", "#5e9e9f", "#EB4A4C", "#666d41", "#fe0000"],
                ce = function() {
                    var e = (0, a.useState)(!1),
                        s = e[0],
                        i = e[1],
                        r = (0, a.useContext)(g),
                        t = r.colorChange,
                        l = r.getColor,
                        c = r.changeCursor,
                        o = r.getMagicCursor,
                        d = r.megicCursor;
                    return (0, a.useEffect)((function() {
                        l("#eb4a4c"), o("show")
                    }), []), (0, n.jsxs)("div", {
                        className: "edrea_tm_settings ".concat(s ? "opened" : ""),
                        children: [(0, n.jsxs)("div", {
                            className: "icon",
                            children: [(0, n.jsx)("img", {
                                className: "svg",
                                src: "img/setting.svg",
                                alt: ""
                            }), (0, n.jsx)("a", {
                                className: "link",
                                href: "#",
                                onClick: function() {
                                    return i(!s)
                                }
                            })]
                        }), (0, n.jsxs)("div", {
                            className: "wrapper",
                            children: [(0, n.jsx)("span", {
                                className: "title",
                                children: "Unlimited Colors"
                            }), (0, n.jsx)("ul", {
                                className: "colors",
                                children: le.map((function(e, s) {
                                    return (0, n.jsx)("li", {
                                        children: (0, n.jsx)("a", {
                                            href: "#",
                                            "data-color": e,
                                            style: {
                                                backgroundColor: e,
                                                marginRight: "5px"
                                            },
                                            onClick: function() {
                                                return t(e)
                                            }
                                        }, s)
                                    }, s)
                                }))
                            }), (0, n.jsx)("span", {
                                className: "title",
                                children: "Magic Cursor"
                            }), (0, n.jsxs)("ul", {
                                className: "cursor",
                                children: [(0, n.jsx)("li", {
                                    children: (0, n.jsx)("a", {
                                        className: "".concat("show" == d ? "showme" : "", " show"),
                                        onClick: function() {
                                            return c("show")
                                        },
                                        href: "#"
                                    })
                                }), (0, n.jsx)("li", {
                                    children: (0, n.jsx)("a", {
                                        className: "".concat("show" != d ? "showme" : "hide"),
                                        href: "#",
                                        onClick: function() {
                                            return c("hide")
                                        },
                                        children: (0, n.jsx)("img", {
                                            className: "svg",
                                            src: "img/arrow.svg",
                                            alt: ""
                                        })
                                    })
                                })]
                            })]
                        })]
                    })
                },
                oe = function(e) {
                    var s = e.children;
                    return (0, a.useEffect)((function() {
                        ! function() {
                            for (var e = document.querySelectorAll("[data-img-url"), s = 0; s < e.length; s++) {
                                var i = e[s];
                                i.style.backgroundImage = "url(".concat(i.getAttribute("data-img-url"), ")")
                            }
                        }(),
                        function() {
                            var e = function(e) {
                                    o.findDOMNode(e).addEventListener("mouseenter", (function() {
                                        r.classList.add("cursor-hover"), t.classList.add("cursor-hover")
                                    })), o.findDOMNode(e).addEventListener("mouseleave", (function() {
                                        r.classList.remove("cursor-hover"), t.classList.remove("cursor-hover")
                                    }))
                                },
                                s = document.querySelectorAll(".mouse-cursor"),
                                i = document.querySelector(".hamburger"),
                                n = document.querySelector(".kura_tm_topbar "),
                                a = document.querySelector(".cursor-pointer"),
                                r = document.querySelector(".cursor-inner"),
                                t = document.querySelector(".cursor-outer");
                            s.length && document.body && (window.onmousemove = function(e) {
                                t.style.transform = "translate(" + e.clientX + "px, " + e.clientY + "px)", r.style.transform = "translate(" + e.clientX + "px, " + e.clientY + "px)", e.clientY, e.clientX
                            }, document.body.addEventListener("mouseenter", (function() {
                                var s = document.querySelectorAll("a");
                                r.classList.add("cursor-inner"), t.classList.add("cursor-outer");
                                for (var l = 0; l < s.length; l++) {
                                    var c = s[l];
                                    e(c)
                                }
                                i && e(i), n && e(n), a && e(a)
                            })), r.style.visibility = "visible", t.style.visibility = "visible")
                        }(), d(), ie(), document.querySelectorAll("img.svg").forEach((function(e) {
                            var s = e.getAttribute("id"),
                                i = e.getAttribute("class"),
                                n = e.getAttribute("src");
                            fetch(n).then((function(e) {
                                return e.text()
                            })).then((function(n) {
                                var a = (new DOMParser).parseFromString(n, "text/html").querySelector("svg");
                                "undefined" !== typeof s && a.setAttribute("id", s), "undefined" !== typeof i && a.setAttribute("class", i + " replaced-svg"), a.removeAttribute("xmlns:a"), e.parentNode && e.parentNode.replaceChild(a, e)
                            }))
                        }))
                    }), []), (0, n.jsxs)(x, {
                        children: [(0, n.jsxs)(Y(), {
                            children: [(0, n.jsx)("link", {
                                rel: "icon",
                                type: "image/png",
                                href: "img/favicon.png"
                            }), (0, n.jsx)("title", {
                                children: "Edrea | Home"
                            }), (0, n.jsx)("link", {
                                href: "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap",
                                rel: "stylesheet"
                            }), (0, n.jsx)("link", {
                                href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
                                rel: "stylesheet"
                            }), (0, n.jsx)("link", {
                                href: "https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
                                rel: "stylesheet"
                            })]
                        }), (0, n.jsx)(te, {}), (0, n.jsx)(K, {}), (0, n.jsx)(Z, {}), (0, n.jsxs)("div", {
                            className: "edrea_tm_all_wrap",
                            "data-magic-cursor": "show",
                            "data-enter": "fadeInUp",
                            "data-exit": "",
                            children: [(0, n.jsx)("div", {
                                className: "waves"
                            }), (0, n.jsx)(ce, {}), (0, n.jsx)(ae, {}), (0, n.jsx)(ne, {}), (0, n.jsx)("div", {
                                className: "edrea_tm_content",
                                children: s
                            }), (0, n.jsx)(re, {})]
                        })]
                    })
                },
                de = function() {
                    return (0, n.jsxs)(oe, {
                        children: [(0, n.jsx)(L, {}), (0, n.jsx)(P, {}), (0, n.jsx)(X, {}), (0, n.jsx)(F, {}), (0, n.jsx)(R, {})]
                    })
                }
        }
    },
    function(e) {
        e.O(0, [417, 774, 888, 179], (function() {
            return s = 5557, e(e.s = s);
            var s
        }));
        var s = e.O();
        _N_E = s
    }
]);