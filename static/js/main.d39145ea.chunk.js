(this.webpackJsonppresale = this.webpackJsonppresale || []).push([
    [0],
    {
        12: function (t, n, e) {
            t.exports = {
                topbar: "App_topbar__1p_-f",
                topbarleftalign: "App_topbarleftalign__15noU",
                logo: "App_logo__2Y-cm",
                logostaking: "App_logostaking__1Lxq5",
                connectwalletbutton: "App_connectwalletbutton__mgAjn",
                connectwalletbuttonactive: "App_connectwalletbuttonactive__1J_k2",
                contentcontainer: "App_contentcontainer__3c9xX",
                infotext: "App_infotext__2gCcB",
                buyinputcontainer: "App_buyinputcontainer__1L9hx",
                buyinputelementcontainer: "App_buyinputelementcontainer__2ybT_",
                buyinputelement: "App_buyinputelement__3fgoA",
                buyinputlabel: "App_buyinputlabel__134W2",
                purpleflokilabel: "App_purpleflokilabel__1UqKk",
                buybutton: "App_buybutton__3PL8k",
            };
        },
        211: function (t) {
            t.exports = JSON.parse(
                '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"buy","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"newAddress","type":"address"}],"name":"setContractAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newEndTime","type":"uint256"}],"name":"setEnd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newRate","type":"uint256"}],"name":"setRate","outputs":[],"stateMutability":"nonpayable","type":"function"}]'
            );
        },
        218: function (t, n, e) {},
        233: function (t, n) {},
        235: function (t, n) {},
        239: function (t, n) {},
        240: function (t, n) {},
        267: function (t, n) {},
        269: function (t, n) {},
        279: function (t, n) {},
        281: function (t, n) {},
        291: function (t, n) {},
        293: function (t, n) {},
        309: function (t, n) {},
        343: function (t, n) {},
        344: function (t, n) {},
        414: function (t, n) {},
        416: function (t, n) {},
        421: function (t, n) {},
        423: function (t, n) {},
        430: function (t, n) {},
        442: function (t, n) {},
        445: function (t, n) {},
        450: function (t, n) {},
        526: function (t, n, e) {
            "use strict";
            e.r(n);
            var c = e(21),
                a = e.n(c),
                i = e(206),
                o = e.n(i),
                u = (e(218), e(29)),
                l = e.n(u),
                s = e(207),
                r = e(41),
                p = e(12),
                b = e.n(p),
                f = e(208),
                j = e.n(f),
                d = e(211),
                _ = e(11);
            var h = function () {
                    var t = Object(c.useState)(!1),
                        n = Object(r.a)(t, 2),
                        e = n[0],
                        a = n[1],
                        i = Object(c.useState)([]),
                        o = Object(r.a)(i, 2),
                        u = o[0],
                        p = o[1],
                        f = Object(c.useState)(null),
                        h = Object(r.a)(f, 2),
                        y = h[0],
                        x = h[1],
                        O = Object(c.useState)(null),
                        m = Object(r.a)(O, 2),
                        g = m[0],
                        v = m[1],
                        w = Object(c.useState)(0),
                        A = Object(r.a)(w, 2),
                        k = A[0],
                        C = A[1],
                        B = Object(c.useState)(0),
                        S = Object(r.a)(B, 2),
                        P = S[0],
                        E = S[1];
                    function F() {
                        return (F = Object(s.a)(
                            l.a.mark(function t() {
                                var n;
                                return l.a.wrap(function (t) {
                                    for (;;)
                                        switch ((t.prev = t.next)) {
                                            case 0:
                                                if (((n = new j.a()), !window.ethereum)) {
                                                    t.next = 20;
                                                    break;
                                                }
                                                return console.log("2s"), n.eth.setProvider(window.ethereum), (t.next = 6), window.ethereum.enable();
                                            case 6:
                                                return (t.next = 8), n.eth.net.getId();
                                            case 8:
                                                if (((t.t0 = t.sent), 56 == t.t0)) {
                                                    t.next = 12;
                                                    break;
                                                }
                                                return (
                                                    (t.next = 12),
                                                    window.ethereum.request({
                                                        method: "wallet_addEthereumChain",
                                                        params: [
                                                            {
                                                                chainId: "0x".concat((56).toString(16)),
                                                                chainName: "Binance Smart Chain Mainnet",
                                                                nativeCurrency: { name: "BNB", symbol: "bnb", decimals: 18 },
                                                                rpcUrls: ["https://bsc-dataseed.binance.org/"],
                                                                blockExplorerUrls: ["https://bscscan.com/"],
                                                            },
                                                        ],
                                                    })
                                                );
                                            case 12:
                                                return (t.t1 = p), (t.next = 15), n.eth.getAccounts();
                                            case 15:
                                                (t.t2 = t.sent), (0, t.t1)(t.t2), v(new n.eth.Contract(d, "0xc17e760979120120060590f50f0a2f00Cd163dc3")), a(!0), x(n);
                                            case 20:
                                            case "end":
                                                return t.stop();
                                        }
                                }, t);
                            })
                        )).apply(this, arguments);
                    }
                    return Object(_.jsxs)("div", {
                        class: b.a.contentcontainer,
                        children: [
                            Object(_.jsxs)("div", {
                                class: b.a.topbar,
                                children: [
                                    Object(_.jsxs)("div", { class: b.a.topbarleftalign, children: [Object(_.jsx)("div", { class: b.a.logo }), Object(_.jsx)("p", { class: b.a.logostaking, children: "Diddy Kong Private Sale" })] }),
                                    e
                                        ? Object(_.jsx)("div", { class: "".concat(b.a.connectwalletbutton, " ").concat(b.a.connectwalletbuttonactive), children: "Connected" })
                                        : Object(_.jsx)("div", {
                                              onClick: function () {
                                                  return F.apply(this, arguments);
                                              },
                                              class: b.a.connectwalletbutton,
                                              children: "Connect Wallet",
                                          }),
                                ],
                            }),
                            !e && Object(_.jsx)("p", { class: b.a.infotext, children: "Please connect wallet!" }),
                            e &&
                                Object(_.jsxs)("div", {
                                    class: b.a.buyinputcontainer,
                                    children: [
                                        Object(_.jsxs)("div", {
                                            class: b.a.buyinputelementcontainer,
                                            children: [
                                                Object(_.jsx)("input", {
                                                    onChange: function (t) {
                                                        var n = t.target.value.replace(',', '.');
                                                        
                                                        if (!isNaN(n)) {
                                                            //5000000000000000
                                                            var e = y.utils.toWei(n, "ether");
                                                            
                                                            E(e);
                                                            var c = y.utils.fromWei(e, "gwei");
                                                            c = c / 10000000;
                                                            // 16666666650
                                                            // 16666666665
                                                            // 16666666.665000001
                                                            C(Number((n * 3333333333).toFixed(3)));
                                                        }
                                                    },
                                                    onBlur: function (t) {

                                                        var n = t.target.value.replace(',', '.');
                                                        if (isNaN(n)) {
                                                            const input = document.getElementsByClassName(b.a.buyinputelement)[0];
                                                            input.value = 0;
                                                            C(0);
                                                        }
                                                    },
                                                    class: b.a.buyinputelement,
                                                }),
                                                Object(_.jsx)("p", { class: b.a.buyinputlabel, children: "BNB" }),
                                            ],
                                        }),
                                        Object(_.jsxs)("div", {
                                            class: b.a.buyinputelementcontainer,
                                            children: [
                                                Object(_.jsx)("input", { value: k, class: b.a.buyinputelement, readOnly: !0 }),
                                                Object(_.jsxs)("p", { class: "".concat(b.a.buyinputlabel, " ").concat(b.a.purpleflokilabel), children: ["DIDDY", Object(_.jsx)("br", {}), "KONG"] }),
                                            ],
                                        }),
                                        Object(_.jsx)("div", {
                                            onClick: function () {
                                                g.methods.buy().send({ from: u[0], value: P });
                                            },
                                            class: b.a.buybutton,
                                            children: "BUY",
                                        }),
                                    ],
                                }),
                        ],
                    });
                },
                y = function (t) {
                    t &&
                        t instanceof Function &&
                        e
                            .e(3)
                            .then(e.bind(null, 529))
                            .then(function (n) {
                                var e = n.getCLS,
                                    c = n.getFID,
                                    a = n.getFCP,
                                    i = n.getLCP,
                                    o = n.getTTFB;
                                e(t), c(t), a(t), i(t), o(t);
                            });
                };
            o.a.render(Object(_.jsx)(a.a.StrictMode, { children: Object(_.jsx)(h, {}) }), document.getElementById("root")), y();
        },
    },
    [[526, 1, 2]],
]);
//# sourceMappingURL=main.d39145ea.chunk.js.map
