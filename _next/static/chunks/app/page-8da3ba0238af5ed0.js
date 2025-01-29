(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [974],
  {
    7676: (e, s, a) => {
      Promise.resolve().then(a.bind(a, 9809));
    },
    9809: (e, s, a) => {
      "use strict";
      a.r(s), a.d(s, { default: () => _ });
      var t = a(5155),
        i = a(5565),
        n = a(2115);
      class r {
        updateSize(e, s) {
          (this.x = this.relativeX * e), (this.y = this.relativeY * s);
        }
        update(e, s) {
          (this.x += Math.cos(this.angle) * this.speed),
            (this.y += Math.sin(this.angle) * this.speed),
            (this.relativeX = this.x / e),
            (this.relativeY = this.y / s),
            (this.angle += (Math.random() - 0.5) * 0.1),
            this.x < 0 && ((this.x = e), (this.relativeX = 1)),
            this.x > e && ((this.x = 0), (this.relativeX = 0)),
            this.y < 0 && ((this.y = s), (this.relativeY = 1)),
            this.y > s && ((this.y = 0), (this.relativeY = 0)),
            (this.opacity += this.opacityStep),
            (this.opacity <= 0.1 || this.opacity >= 0.4) &&
              (this.opacityStep = -this.opacityStep),
            "gradient" === this.colorMode &&
              ((this.gradientPos += this.gradientStep),
              (this.gradientPos <= 0 || this.gradientPos >= 1) &&
                ((this.gradientStep = -this.gradientStep),
                (this.gradientPos = this.gradientPos <= 0 ? 0 : 1)));
        }
        draw(e) {
          if (
            (e.beginPath(),
            e.arc(this.x, this.y, this.size, 0, 2 * Math.PI),
            "white" === this.colorMode)
          )
            e.fillStyle = "rgba(255, 255, 255, ".concat(this.opacity, ")");
          else {
            let s = Math.round(160 + -160 * this.gradientPos),
              a = Math.round(32 + 197 * this.gradientPos),
              t = Math.round(240 + 15 * this.gradientPos);
            e.fillStyle = "rgba("
              .concat(s, ", ")
              .concat(a, ", ")
              .concat(t, ", ")
              .concat(1.8 * this.opacity, ")");
          }
          e.fill();
        }
        constructor(e, s) {
          (this.relativeX = Math.random()),
            (this.relativeY = Math.random()),
            (this.x = this.relativeX * e),
            (this.y = this.relativeY * s),
            (this.size = 2 * Math.random() + 0.5),
            (this.angle = Math.random() * Math.PI * 2),
            (this.speed = 0.2 * Math.random() + 0.1),
            (this.opacity = 0.3 * Math.random() + 0.15),
            (this.opacityStep = (Math.random() - 0.5) * 0.01),
            (this.colorMode = 0.3 > Math.random() ? "white" : "gradient"),
            (this.gradientPos = Math.random()),
            (this.gradientStep = (Math.random() - 0.5) * 0.02);
        }
      }
      function l(e) {
        let { className: s = "" } = e,
          a = (0, n.useRef)(null),
          i = (0, n.useRef)([]),
          l = (0, n.useRef)(null);
        return (
          (0, n.useEffect)(() => {
            let e = a.current;
            if (!e) return;
            let s = e.getContext("2d", { alpha: !0 });
            if (!s) return;
            let t = () => {
              let a = e.parentElement;
              if (!a) return;
              let t = window.devicePixelRatio || 1,
                n = a.getBoundingClientRect();
              (e.width = n.width * t),
                (e.height = n.height * t),
                (e.style.width = "".concat(n.width, "px")),
                (e.style.height = "".concat(n.height, "px")),
                s.scale(t, t),
                i.current.forEach((e) => {
                  e.updateSize(n.width, n.height);
                });
            };
            if ((t(), 0 === i.current.length)) {
              let s = window.innerWidth < 768 ? 15e3 : 1e4,
                a = Math.floor((e.width * e.height) / s);
              i.current = Array.from(
                { length: a },
                () => new r(e.width, e.height)
              );
            }
            let n = 0,
              c = (a) => {
                if (!e || !s) return;
                let t = a - n;
                t >= 16.666666666666668 &&
                  ((n = a - (t % 16.666666666666668)),
                  s.clearRect(
                    0,
                    0,
                    e.width / window.devicePixelRatio,
                    e.height / window.devicePixelRatio
                  ),
                  i.current.forEach((a) => {
                    a.update(
                      e.width / window.devicePixelRatio,
                      e.height / window.devicePixelRatio
                    ),
                      a.draw(s);
                  })),
                  (l.current = requestAnimationFrame(c));
              };
            (l.current = requestAnimationFrame(c)),
              window.addEventListener("resize", t);
            let o = new ResizeObserver(t);
            return (
              e.parentElement && o.observe(e.parentElement),
              () => {
                window.removeEventListener("resize", t),
                  o.disconnect(),
                  l.current && cancelAnimationFrame(l.current);
              }
            );
          }, []),
          (0, t.jsx)("canvas", { ref: a, className: "bg-particles ".concat(s) })
        );
      }
      function c(e) {
        let { children: s } = e;
        return (0, t.jsx)("section", { className: "hero", children: s });
      }
      function o(e) {
        let { variant: s = "loop" } = e,
          [a, r] = (0, n.useState)(!1);
        return (0, t.jsx)("div", {
          className: "logo",
          children: a
            ? (0, t.jsx)(i.default, {
                className: "logo__image",
                src: "/logo.png",
                alt: "Lillo",
                width: 160,
                height: 160,
                style: { width: "160px", height: "auto" },
              })
            : (0, t.jsx)("video", {
                className: "logo__video",
                src: ((e) => {
                  switch (e) {
                    case "loop":
                    default:
                      return "/videos/Lillo_Loop.mp4";
                    case "hello":
                      return "/videos/lillo_hello.mp4";
                    case "orb":
                      return "/videos/Lillo_orb.mp4";
                    case "thumbs":
                      return "/videos/Lillo_thumbs.mp4";
                    case "bow":
                      return "/videos/lillo_bow.mp4";
                  }
                })(s),
                width: 200,
                height: 200,
                autoPlay: !0,
                loop: !0,
                muted: !0,
                playsInline: !0,
                onError: () => r(!0),
              }),
        });
      }
      function d(e) {
        let { className: s = "" } = e;
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)("p", {
              className: "conversation__cta ".concat(s),
              children: "Want to buy Lillo AI Token?",
            }),
            (0, t.jsx)("a", {
              href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xfD39627c94e5D54B043DdF066860ACecCFB1c4E7",
              className: "button",
              target: "_blank",
              rel: "noopener noreferrer",
              children: "Buy On Uniswap",
            }),
          ],
        });
      }
      function h() {
        return (0, t.jsx)("nav", {
          className: "navbar glass",
          children: (0, t.jsxs)("div", {
            className: "navbar__content",
            children: [
              (0, t.jsxs)("div", {
                className: "navbar__logo",
                children: [
                  (0, t.jsx)(i.default, {
                    src: "/logo.png",
                    alt: "Lillo",
                    width: 32,
                    height: 32,
                    style: { width: "32px", height: "auto" },
                  }),
                  (0, t.jsx)("span", {
                    className: "navbar__brand",
                    children: "Lillo",
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: "navbar__links",
                children: [
                  (0, t.jsx)("a", {
                    href: "https://docs.lilloai.cc",
                    className: "navbar__link",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: (0, t.jsx)("img", {
                      src: "/exchanges/logo_docs.png",
                    }),
                  }),
                  (0, t.jsx)("a", {
                    href: "https://x.com/LilloAI_X",
                    className: "navbar__link",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: (0, t.jsx)("img", {
                      src: "/exchanges/logo_x.png",
                    }),
                  }),
                  (0, t.jsx)("a", {
                    href: "https://t.me/LilloAI_Community",
                    className: "navbar__link",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: (0, t.jsx)("img", {
                      src: "/exchanges/logo_tg.png",
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function m() {
        return (0, t.jsx)("section", {
          className: "features",
          children: (0, t.jsxs)("div", {
            className: "content",
            children: [
              (0, t.jsx)(o, { variant: "hello" }),
              (0, t.jsx)("h2", {
                className: "features__title",
                children: "What makes Lillo... Lillo?",
              }),
              (0, t.jsx)("p", {
                className: "features__intro",
                children:
                  "Meet your community's new best friend - an AI companion that brings intelligence, creativity, and engagement to your Telegram group.",
              }),
              (0, t.jsxs)("div", {
                className: "features__grid",
                children: [
                  (0, t.jsxs)("div", {
                    className: "feature glass",
                    children: [
                      (0, t.jsx)("div", {
                        className: "feature__icon",
                        children: (0, t.jsx)("i", {
                          className: "fa-solid fa-bolt",
                        }),
                      }),
                      (0, t.jsx)("h3", {
                        className: "feature__title",
                        children: "Instant AI integration",
                      }),
                      (0, t.jsx)("p", {
                        className: "feature__description",
                        children:
                          "Add Lillo AI Agent to your Telegram group in few simple commands. No technical expertise required!",
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "feature glass",
                    children: [
                      (0, t.jsx)("div", {
                        className: "feature__icon",
                        children: (0, t.jsx)("i", {
                          className: "fa-solid fa-sliders",
                        }),
                      }),
                      (0, t.jsx)("h3", {
                        className: "feature__title",
                        children: "Complete customization",
                      }),
                      (0, t.jsx)("p", {
                        className: "feature__description",
                        children:
                          "Tailor your AI agent's personality, knowledge, and responses to perfectly match your community's vibe.",
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "feature glass",
                    children: [
                      (0, t.jsx)("div", {
                        className: "feature__icon",
                        children: (0, t.jsx)("i", {
                          className: "fa-solid fa-microchip",
                        }),
                      }),
                      (0, t.jsx)("h3", {
                        className: "feature__title",
                        children: "Powered by Leading AI",
                      }),
                      (0, t.jsx)("p", {
                        className: "feature__description",
                        children:
                          "Connected to the leading AI language models for optimal performance and intelligent interactions.",
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "feature glass",
                    children: [
                      (0, t.jsx)("div", {
                        className: "feature__icon",
                        children: (0, t.jsx)("i", {
                          className: "fa-solid fa-chart-line",
                        }),
                      }),
                      (0, t.jsx)("h3", {
                        className: "feature__title",
                        children: "Real-time data",
                      }),
                      (0, t.jsx)("p", {
                        className: "feature__description",
                        children:
                          "Tap into what's happening now and use it to your advantage. From market trends to the latest news, Lillo keeps your community informed.",
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "feature glass",
                    children: [
                      (0, t.jsx)("div", {
                        className: "feature__icon",
                        children: (0, t.jsx)("i", {
                          className: "fa-solid fa-face-grin-tears",
                        }),
                      }),
                      (0, t.jsx)("h3", {
                        className: "feature__title",
                        children: "Meme Creation",
                      }),
                      (0, t.jsx)("p", {
                        className: "feature__description",
                        children:
                          "Lillo generates real-time memes and creative content, adding sparks of fun and humor to keep your Telegram group entertaining and engaging.",
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "feature glass",
                    children: [
                      (0, t.jsx)("div", {
                        className: "feature__icon",
                        children: (0, t.jsx)("i", {
                          className: "fa-solid fa-puzzle-piece",
                        }),
                      }),
                      (0, t.jsx)("h3", {
                        className: "feature__title",
                        children: "Ever-expanding Tools",
                      }),
                      (0, t.jsx)("p", {
                        className: "feature__description",
                        children:
                          "Access a growing marketplace of AI tools and powerful integrations to enhance your agent's capabilities and keep your community engaged and thriving.",
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsx)(d, {}),
            ],
          }),
        });
      }
      function u() {
        return (0, t.jsx)("section", {
          className: "conversation",
          children: (0, t.jsxs)("div", {
            className: "content",
            children: [
              (0, t.jsx)(o, { variant: "orb" }),
              (0, t.jsx)("h2", {
                className: "conversation__title",
                children: "Lillo gets the conversation flowing!",
              }),
              (0, t.jsx)("p", {
                className: "conversation__intro",
                children:
                  "Transform your Telegram group into a vibrant community hub with AI-powered conversations and automated engagement.",
              }),
              (0, t.jsxs)("div", {
                className: "conversation__grid",
                children: [
                  (0, t.jsxs)("div", {
                    className: "conversation-card glass",
                    children: [
                      (0, t.jsx)("div", {
                        className: "conversation-card__icon",
                        children: (0, t.jsx)("i", {
                          className: "fa-solid fa-comments",
                        }),
                      }),
                      (0, t.jsx)("h3", {
                        className: "conversation-card__title",
                        children: "Engagement explosion",
                      }),
                      (0, t.jsx)("p", {
                        className: "conversation-card__description",
                        children:
                          "Lillo's AI sparks vibrant discussions and keeps your community engaged with safe, friendly, and interesting conversations.",
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "conversation-card glass",
                    children: [
                      (0, t.jsx)("div", {
                        className: "conversation-card__icon",
                        children: (0, t.jsx)("i", {
                          className: "fa-solid fa-shield-halved",
                        }),
                      }),
                      (0, t.jsx)("h3", {
                        className: "conversation-card__title",
                        children: "24/7 automated moderation",
                      }),
                      (0, t.jsx)("p", {
                        className: "conversation-card__description",
                        children:
                          "Keep your community active around the clock with automated content and responses that maintain engagement at all hours.",
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "conversation-card glass",
                    children: [
                      (0, t.jsx)("div", {
                        className: "conversation-card__icon",
                        children: (0, t.jsx)("i", {
                          className: "fa-solid fa-database",
                        }),
                      }),
                      (0, t.jsx)("h3", {
                        className: "conversation-card__title",
                        children: "Info on tap",
                      }),
                      (0, t.jsx)("p", {
                        className: "conversation-card__description",
                        children:
                          "Provide your community with instant access to real-time data, market insights, and the latest trending news and updates.",
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "conversation-card glass",
                    children: [
                      (0, t.jsx)("div", {
                        className: "conversation-card__icon",
                        children: (0, t.jsx)("i", {
                          className: "fa-solid fa-graduation-cap",
                        }),
                      }),
                      (0, t.jsx)("h3", {
                        className: "conversation-card__title",
                        children: "Educate your agent",
                      }),
                      (0, t.jsx)("p", {
                        className: "conversation-card__description",
                        children:
                          "Customize your AI agent with project-specific knowledge to deliver accurate, relevant answers to your community's questions.",
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsx)(d, {}),
            ],
          }),
        });
      }
      function g() {
        return (0, t.jsx)("section", {
          className: "setup",
          children: (0, t.jsxs)("div", {
            className: "content",
            children: [
              (0, t.jsx)(o, { variant: "thumbs" }),
              (0, t.jsx)("h2", {
                className: "setup__title",
                children: "Ready to transform your Telegram community?",
              }),
              (0, t.jsx)("p", {
                className: "setup__intro",
                children:
                  "Get started in minutes with our intuitive setup process. Create, customize, and deploy your AI agent with just a few simple steps.",
              }),
              (0, t.jsxs)("div", {
                className: "setup__grid",
                children: [
                  (0, t.jsxs)("div", {
                    className: "setup-card glass",
                    children: [
                      (0, t.jsx)("div", {
                        className: "setup-card__icon",
                        children: (0, t.jsx)("i", {
                          className: "fa-solid fa-rocket",
                        }),
                      }),
                      (0, t.jsx)("h3", {
                        className: "setup-card__title",
                        children: "Effortless setup",
                      }),
                      (0, t.jsx)("p", {
                        className: "setup-card__description",
                        children:
                          "Bring your community to life in three minutes with our streamlined onboarding process.",
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "setup-card glass",
                    children: [
                      (0, t.jsx)("div", {
                        className: "setup-card__icon",
                        children: (0, t.jsx)("i", {
                          className: "fa-solid fa-palette",
                        }),
                      }),
                      (0, t.jsx)("h3", {
                        className: "setup-card__title",
                        children: "Complete customization",
                      }),
                      (0, t.jsx)("p", {
                        className: "setup-card__description",
                        children:
                          "Tailor your agent's personality, appearance, and communication style to match your community.",
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "setup-card glass",
                    children: [
                      (0, t.jsx)("div", {
                        className: "setup-card__icon",
                        children: (0, t.jsx)("i", {
                          className: "fa-solid fa-plug",
                        }),
                      }),
                      (0, t.jsx)("h3", {
                        className: "setup-card__title",
                        children: "Seamless integration",
                      }),
                      (0, t.jsx)("p", {
                        className: "setup-card__description",
                        children:
                          "Connect your Telegram group instantly with our simple integration process and setup wizard.",
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "setup-card glass",
                    children: [
                      (0, t.jsx)("div", {
                        className: "setup-card__icon",
                        children: (0, t.jsx)("i", {
                          className: "fa-solid fa-book",
                        }),
                      }),
                      (0, t.jsx)("h3", {
                        className: "setup-card__title",
                        children: "Knowledge base",
                      }),
                      (0, t.jsx)("p", {
                        className: "setup-card__description",
                        children:
                          "Empower your agent with custom knowledge, FAQs, and resources tailored to your community.",
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsx)(d, {}),
            ],
          }),
        });
      }
      function p() {
        return (0, t.jsx)("section", {
          className: "final-cta",
          children: (0, t.jsxs)("div", {
            className: "content",
            children: [
              (0, t.jsx)(o, { variant: "bow" }),
              (0, t.jsx)("h2", {
                className: "final-cta__title",
                children: "Ready, set, engage!",
              }),
              (0, t.jsx)("p", {
                className: "final-cta__description",
                children:
                  "Activate your agent and watch the magic happen! Lillo gets smarter every day, so the fun never stops!",
              }),
              (0, t.jsx)(d, {}),
            ],
          }),
        });
      }
      function x() {
        return (0, t.jsx)("footer", {
          className: "footer",
          children: (0, t.jsxs)("div", {
            className: "content",
            children: [
              (0, t.jsx)("p", {
                className: "footer__tagline",
                children:
                  "Lillo. Empowering communities with AI-driven engagement and seamless integration on Telegram.",
              }),
              (0, t.jsxs)("nav", {}),
              (0, t.jsx)("p", {
                className: "footer__copyright",
                children: "\xa9 2025 Lillo. All rights reserved.",
              }),
            ],
          }),
        });
      }
      function _() {
        let [e, s] = (0, n.useState)(!1),
          a = "0xfD39627c94e5D54B043DdF066860ACecCFB1c4E7",
          r = async () => {
            await navigator.clipboard.writeText(a),
              s(!0),
              setTimeout(() => s(!1), 3e3);
          };
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)("div", {
              className: "bg-wrapper",
              children: (0, t.jsxs)("div", {
                className: "bg",
                children: [
                  (0, t.jsx)("div", { className: "bg__gradient" }),
                  (0, t.jsx)(l, {}),
                ],
              }),
            }),
            (0, t.jsxs)("main", {
              children: [
                (0, t.jsx)(h, {}),
                (0, t.jsx)(c, {
                  children: (0, t.jsxs)("div", {
                    className: "content",
                    children: [
                      (0, t.jsx)(o, {}),
                      (0, t.jsxs)("div", {
                        className: "tagline",
                        children: [
                          (0, t.jsx)("h1", {
                            className: "tagline__primary",
                            children: "So long, ChatBots",
                          }),
                          (0, t.jsx)("h2", {
                            className: "tagline__secondary",
                            children: "Hello, Lillo Agents",
                          }),
                        ],
                      }),
                      (0, t.jsx)("p", {
                        className: "description",
                        children:
                          "Lillo is a cutting-edge AI Agent framework that empowers anyone to create and deploy a personalized AI Agent on Telegram. Customize your AI Agent's appearance, personality, and unique traits to align with your vision. Your agent will receive constant upgrades with new functionality and data sources.",
                      }),
                      (0, t.jsx)(d, {}),
                      (0, t.jsx)("div", {
                        className: "contract glass--interactive",
                        onClick: r,
                        children: (0, t.jsxs)("span", {
                          className: "contract__text",
                          children: ["CA: ", e ? "Copied to clipboard!" : a],
                        }),
                      }),
                      (0, t.jsxs)("div", {
                        className: "exchanges",
                        children: [
                          (0, t.jsx)("a", {
                            href: "https://www.dextools.io/app/en/ether/pair-explorer/0xfD39627c94e5D54B043DdF066860ACecCFB1c4E7",
                            className: "exchange-link glass--interactive",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: (0, t.jsx)(i.default, {
                              src: "/exchanges/dextools.png",
                              alt: "DEXTools",
                              width: 100,
                              height: 24,
                              style: { height: "1.2rem", width: "auto" },
                            }),
                          }),
                          (0, t.jsx)("a", {
                            href: "https://dexscreener.com/ethereum/0xfD39627c94e5D54B043DdF066860ACecCFB1c4E7",
                            className: "exchange-link glass--interactive",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: (0, t.jsx)(i.default, {
                              src: "/exchanges/dexscreener.png",
                              alt: "DexScreener",
                              width: 100,
                              height: 24,
                              style: { height: "1.2rem", width: "auto" },
                            }),
                          }),
                          (0, t.jsx)("a", {
                            href: "https://etherscan.io/token/0xfD39627c94e5D54B043DdF066860ACecCFB1c4E7",
                            className: "exchange-link glass--interactive",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: (0, t.jsx)(i.default, {
                              src: "/exchanges/birdeye.png",
                              alt: "BirdEye",
                              width: 100,
                              height: 24,
                              style: { height: "1.2rem", width: "auto" },
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, t.jsx)(m, {}),
                (0, t.jsx)(u, {}),
                (0, t.jsx)(g, {}),
                (0, t.jsx)(p, {}),
                (0, t.jsx)(x, {}),
              ],
            }),
          ],
        });
      }
    },
  },
  (e) => {
    var s = (s) => e((e.s = s));
    e.O(0, [565, 441, 517, 358], () => s(7676)), (_N_E = e.O());
  },
]);
