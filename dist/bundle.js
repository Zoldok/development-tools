;(() => {
    'use strict'
    const a = [
        {
            name: 'card1',
            front: '/static/img/card/img1.png',
            back: '/static/img/card/img-back.png',
        },
        {
            name: 'card1',
            front: '/static/img/card/img1.png',
            back: '/static/img/card/img-back.png',
        },
        {
            name: 'card2',
            front: '/static/img/card/img2.png',
            back: '/static/img/card/img-back.png',
        },
        {
            name: 'card2',
            front: '/static/img/card/img2.png',
            back: '/static/img/card/img-back.png',
        },
        {
            name: 'card3',
            front: '/static/img/card/img3.png',
            back: '/static/img/card/img-back.png',
        },
        {
            name: 'card3',
            front: '/static/img/card/img3.png',
            back: '/static/img/card/img-back.png',
        },
        {
            name: 'card4',
            front: '/static/img/card/img4.png',
            back: '/static/img/card/img-back.png',
        },
        {
            name: 'card4',
            front: '/static/img/card/img4.png',
            back: '/static/img/card/img-back.png',
        },
        {
            name: 'card5',
            front: '/static/img/card/img5.png',
            back: '/static/img/card/img-back.png',
        },
        {
            name: 'card5',
            front: '/static/img/card/img5.png',
            back: '/static/img/card/img-back.png',
        },
        {
            name: 'card6',
            front: '/static/img/card/img6.png',
            back: '/static/img/card/img-back.png',
        },
        {
            name: 'card6',
            front: '/static/img/card/img6.png',
            back: '/static/img/card/img-back.png',
        },
        {
            name: 'card7',
            front: '/static/img/card/img7.png',
            back: '/static/img/card/img-back.png',
        },
        {
            name: 'card7',
            front: '/static/img/card/img7.png',
            back: '/static/img/card/img-back.png',
        },
        {
            name: 'card8',
            front: '/static/img/card/img8.png',
            back: '/static/img/card/img-back.png',
        },
        {
            name: 'card8',
            front: '/static/img/card/img8.png',
            back: '/static/img/card/img-back.png',
        },
        {
            name: 'card9',
            front: '/static/img/card/img9.png',
            back: '/static/img/card/img-back.png',
        },
        {
            name: 'card9',
            front: '/static/img/card/img9.png',
            back: '/static/img/card/img-back.png',
        },
        {
            name: 'card10',
            front: '/static/img/card/img10.png',
            back: '/static/img/card/img-back.png',
        },
        {
            name: 'card10',
            front: '/static/img/card/img10.png',
            back: '/static/img/card/img-back.png',
        },
        {
            name: 'card11',
            front: '/static/img/card/img11.png',
            back: '/static/img/card/img-back.png',
        },
        {
            name: 'card11',
            front: '/static/img/card/img11.png',
            back: '/static/img/card/img-back.png',
        },
        {
            name: 'card12',
            front: '/static/img/card/img12.png',
            back: '/static/img/card/img-back.png',
        },
        {
            name: 'card12',
            front: '/static/img/card/img12.png',
            back: '/static/img/card/img-back.png',
        },
        {
            name: 'card13',
            front: '/static/img/card/img13.png',
            back: '/static/img/card/img-back.png',
        },
        {
            name: 'card13',
            front: '/static/img/card/img13.png',
            back: '/static/img/card/img-back.png',
        },
        {
            name: 'card14',
            front: '/static/img/card/img14.png',
            back: '/static/img/card/img-back.png',
        },
        {
            name: 'card14',
            front: '/static/img/card/img14.png',
            back: '/static/img/card/img-back.png',
        },
        {
            name: 'card15',
            front: '/static/img/card/img15.png',
            back: '/static/img/card/img-back.png',
        },
        {
            name: 'card15',
            front: '/static/img/card/img15.png',
            back: '/static/img/card/img-back.png',
        },
        {
            name: 'card16',
            front: '/static/img/card/img16.png',
            back: '/static/img/card/img-back.png',
        },
        {
            name: 'card16',
            front: '/static/img/card/img16.png',
            back: '/static/img/card/img-back.png',
        },
        {
            name: 'card17',
            front: '/static/img/card/img17.png',
            back: '/static/img/card/img-back.png',
        },
        {
            name: 'card17',
            front: '/static/img/card/img17.png',
            back: '/static/img/card/img-back.png',
        },
        {
            name: 'card18',
            front: '/static/img/card/img18.png',
            back: '/static/img/card/img-back.png',
        },
        {
            name: 'card18',
            front: '/static/img/card/img18.png',
            back: '/static/img/card/img-back.png',
        },
        {
            name: 'card19',
            front: '/static/img/card/img19.png',
            back: '/static/img/card/img-back.png',
        },
        {
            name: 'card19',
            front: '/static/img/card/img19.png',
            back: '/static/img/card/img-back.png',
        },
        {
            name: 'card20',
            front: '/static/img/card/img20.png',
            back: '/static/img/card/img-back.png',
        },
        {
            name: 'card20',
            front: '/static/img/card/img20.png',
            back: '/static/img/card/img-back.png',
        },
        {
            name: 'card21',
            front: '/static/img/card/img21.png',
            back: '/static/img/card/img-back.png',
        },
        {
            name: 'card21',
            front: '/static/img/card/img21.png',
            back: '/static/img/card/img-back.png',
        },
        {
            name: 'card22',
            front: '/static/img/card/img22.png',
            back: '/static/img/card/img-back.png',
        },
        {
            name: 'card22',
            front: '/static/img/card/img22.png',
            back: '/static/img/card/img-back.png',
        },
        {
            name: 'card23',
            front: '/static/img/card/img23.png',
            back: '/static/img/card/img-back.png',
        },
        {
            name: 'card23',
            front: '/static/img/card/img23.png',
            back: '/static/img/card/img-back.png',
        },
        {
            name: 'card24',
            front: '/static/img/card/img24.png',
            back: '/static/img/card/img-back.png',
        },
        {
            name: 'card24',
            front: '/static/img/card/img24.png',
            back: '/static/img/card/img-back.png',
        },
        {
            name: 'card25',
            front: '/static/img/card/img25.png',
            back: '/static/img/card/img-back.png',
        },
        {
            name: 'card25',
            front: '/static/img/card/img25.png',
            back: '/static/img/card/img-back.png',
        },
        {
            name: 'card26',
            front: '/static/img/card/img26.png',
            back: '/static/img/card/img-back.png',
        },
        {
            name: 'card26',
            front: '/static/img/card/img26.png',
            back: '/static/img/card/img-back.png',
        },
        {
            name: 'card27',
            front: '/static/img/card/img27.png',
            back: '/static/img/card/img-back.png',
        },
        {
            name: 'card27',
            front: '/static/img/card/img27.png',
            back: '/static/img/card/img-back.png',
        },
        {
            name: 'card28',
            front: '/static/img/card/img28.png',
            back: '/static/img/card/img-back.png',
        },
        {
            name: 'card28',
            front: '/static/img/card/img28.png',
            back: '/static/img/card/img-back.png',
        },
        {
            name: 'card29',
            front: '/static/img/card/img29.png',
            back: '/static/img/card/img-back.png',
        },
        {
            name: 'card29',
            front: '/static/img/card/img29.png',
            back: '/static/img/card/img-back.png',
        },
        {
            name: 'card30',
            front: '/static/img/card/img30.png',
            back: '/static/img/card/img-back.png',
        },
        {
            name: 'card30',
            front: '/static/img/card/img30.png',
            back: '/static/img/card/img-back.png',
        },
        {
            name: 'card31',
            front: '/static/img/card/img31.png',
            back: '/static/img/card/img-back.png',
        },
        {
            name: 'card31',
            front: '/static/img/card/img31.png',
            back: '/static/img/card/img-back.png',
        },
        {
            name: 'card32',
            front: '/static/img/card/img32.png',
            back: '/static/img/card/img-back.png',
        },
        {
            name: 'card32',
            front: '/static/img/card/img32.png',
            back: '/static/img/card/img-back.png',
        },
    ]
    var c,
        t = function (a, c, t) {
            if (t || 2 === arguments.length)
                for (var i, n = 0, r = c.length; n < r; n++)
                    (!i && n in c) ||
                        (i || (i = Array.prototype.slice.call(c, 0, n)),
                        (i[n] = c[n]))
            return a.concat(i || Array.prototype.slice.call(c))
        }
    function i(c, e) {
        var s = n(t(t([], a, !0), a, !0)),
            o = document.querySelector('#app'),
            l =
                '\n    <div class="content__game_display">\n        <div class="content__game_header center">\n        <div class="content__game_head">\n            <div class="content__game_timer">\n                <span class="timer__label"></span>\n                <span class="timer__value">00:00</span>\n            </div>\n\n            <div id="myModal2" class="window__fin center modal">\n                <div class="window__fin_game">\n                    <div class="window__fin_game2">\n                        <span id="myModal3"                     class="window__fin_img">\n                        </span>\n\n                        <div class="window__fin_"> \n                            <p class="window__fin_text">текст победы</p>\n                        </div> \n                        <div class="window__fin_"> \n                            <p class="window__fin_text2">Затраченное время</p>\n                        </div> \n                        <div class="window__fin_"> \n                            <p class="window__fin_time">formattedTime</p>\n                        </div> \n                        \n                        <button id="restart-button2" class="button button__again ">Играть снова</button>\n                    </div>\n                </div>\n            </div>\n\n            <div>\n             <button id="restart-button" class="button button__restart">Начать заново</button>\n             </div>\n             </div>\n            <div class="content__box">\n            <div class="cards">\n                '.concat(
                    (function (a, c) {
                        for (
                            var i =
                                    2 *
                                    (function (a) {
                                        switch (a) {
                                            case 'easy':
                                            default:
                                                return 6
                                            case 'medium':
                                                return 12
                                            case 'hard':
                                                return 18
                                        }
                                    })(a),
                                r = c.slice(0, Math.floor(i / 2)),
                                g = n(t(t([], r, !0), r, !0)),
                                m = '',
                                d = 0;
                            d < g.length;
                            d++
                        ) {
                            var e = g[d],
                                s =
                                    '\n                <div class="card" data-card-name="'
                                        .concat(
                                            e.name,
                                            '">\n                    <div class="card__front">\n                        <img src="',
                                        )
                                        .concat(
                                            e.front,
                                            '" alt="">\n                    </div>\n                    <div class="card__back">\n                        <img src="',
                                        )
                                        .concat(
                                            e.back,
                                            '" alt="">\n                    </div>\n                </div>\n            ',
                                        )
                            console.log(
                                'Rendered card '
                                    .concat(d, ': ')
                                    .concat(e.front),
                            ),
                                (m += s)
                        }
                        return m
                    })(c, s),
                    '\n            </div>\n            </div>\n        </div>\n    </div> \n  ',
                )
        ;(o.innerHTML = l),
            document
                .querySelector('#restart-button2')
                .addEventListener('click', function () {
                    console.log('Игра перезапущена'), d()
                })
        var p = document.querySelectorAll('.card')
        p.forEach(function (a) {
            a.addEventListener('click', function (a) {
                return (function (a, c) {
                    var t,
                        i,
                        n,
                        d,
                        e = a.currentTarget
                    if (!e.classList.contains('flipped'))
                        if (null === r) (r = e), e.classList.toggle('flipped')
                        else if (null === g && r !== e)
                            if (
                                ((g = e),
                                e.classList.toggle('flipped'),
                                (null ===
                                    (t = r.querySelector('.card__front img')) ||
                                void 0 === t
                                    ? void 0
                                    : t.getAttribute('src')) ===
                                    (null ===
                                        (i =
                                            g.querySelector(
                                                '.card__front img',
                                            )) || void 0 === i
                                        ? void 0
                                        : i.getAttribute('src')))
                            ) {
                                ;(r.isMatched = !0), (g.isMatched = !0)
                                var s = document.querySelectorAll('.card'),
                                    o = Array.prototype.slice
                                        .call(s)
                                        .every(function (a) {
                                            return a.isMatched
                                        })
                                if (o) {
                                    var l =
                                        null ===
                                            (n =
                                                document.querySelector(
                                                    '.timer__value',
                                                )) || void 0 === n
                                            ? void 0
                                            : n.textContent
                                    clearInterval(c), l && m(l, !0)
                                }
                                ;(r = null), (g = null)
                            } else {
                                var p =
                                    null ===
                                        (d =
                                            document.querySelector(
                                                '.timer__value',
                                            )) || void 0 === d
                                        ? void 0
                                        : d.textContent
                                clearInterval(c),
                                    p && m(p, !1),
                                    setTimeout(function () {
                                        ;(r = null), (g = null)
                                    }, 1e3)
                            }
                })(a, u)
            })
        }),
            p.forEach(function (a) {
                a.classList.add('flipped')
            })
        var b = setTimeout(function () {
                p.forEach(function (a) {
                    a.classList.remove('flipped')
                })
            }, 5e3),
            f = new Date().getTime(),
            k = document.querySelector('.timer__value'),
            u = setInterval(function () {
                var a = new Date().getTime() - f,
                    c = Math.floor(a / 6e4),
                    t = Math.floor((a % 6e4) / 1e3),
                    i = ''
                        .concat(String(c).padStart(2, '0'), ':')
                        .concat(String(t).padStart(2, '0'))
                k.textContent = i
            }, 1e3)
        document
            .querySelector('#restart-button')
            .addEventListener('click', function () {
                clearInterval(u),
                    clearTimeout(b),
                    p.forEach(function (a) {
                        a.classList.remove('flipped')
                    }),
                    i(c, e)
            })
    }
    function n(a) {
        for (var c, t, i = a.length; 0 !== i; )
            (t = Math.floor(Math.random() * i)),
                i--,
                (c = [a[t], a[i]]),
                (a[i] = c[0]),
                (a[t] = c[1])
        return a
    }
    var r = null,
        g = null
    function m(a, c) {
        var t = document.getElementById('myModal2')
        ;(t.style.display = 'block'),
            (t.querySelector('.window__fin_time').textContent = a),
            (t.querySelector('.window__fin_text').textContent = c
                ? 'Вы выиграли!'
                : 'Вы проиграли!')
        var i = document.getElementById('myModal3')
        i.classList.toggle('window__fin_imgwin', c),
            i.classList.toggle('window__fin_imgconq', !c)
    }
    function d() {
        document.querySelector('#app').innerHTML =
            '\n    <div class="content center">\n    <div class="content__game">\n        <h1 class="content__game_h1">Выбери сложность</h1>\n            <div class="content__box">  \n                <div class="content__game_game1"> \n                    <input type="radio" id="radio1" name="difficulty" value="easy" checked>\n                    <label for="radio1">1</label>\n                    \n                    <input type="radio" id="radio2" name="difficulty" value="medium">\n                    <label for="radio2">2</label>\n                    \n                    <input type="radio" id="radio3" name="difficulty" value="hard">\n                    <label for="radio3">3</label>\n                </div> \n            </div>\n        <button id="start-button" class="button button__start">Старт</button>\n    </div>\n    </div>\n    '
        var a = { difficulty: 'easy', numCards: 6 },
            t = document.querySelectorAll(
                '.content__game_game1 input[name="difficulty"]',
            ),
            n = document.querySelector('#start-button')
        t.forEach(function (c) {
            c.addEventListener('change', function () {
                ;(a.difficulty = c.value),
                    (function () {
                        switch (a.difficulty) {
                            case 'easy':
                                a.numCards = 6
                                break
                            case 'medium':
                                a.numCards = 12
                                break
                            case 'hard':
                                a.numCards = 18
                        }
                    })()
            })
        }),
            n.addEventListener('click', function () {
                var t
                ;(t = a.difficulty),
                    console.log(
                        'Запуск игры с уровнем сложности "'.concat(t, '"'),
                    ),
                    i(t, c)
            })
    }
    d()
})()
