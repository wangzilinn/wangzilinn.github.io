/* 

Vanilla Template

#/tm-526-vanilla

*/

jQuery(document).ready(function ($) {

    'use strict';

    var top_header = $('.parallax-content');
    top_header.css({
        'background-position': 'center center'
    }); // better use CSS

    $(window).scroll(function () {
        var st = $(this).scrollTop();
        top_header.css({
            'background-position': 'center calc(50% + ' + (st * .5) + 'px)'
        });
    });


    $('body').scrollspy({
        target: '.fixed-side-navbar',
        offset: 200
    });

    // smoothscroll on sidenav click

    $('.tabgroup > div').hide();
    $('.tabgroup > div:first-of-type').show();
    $('.tabs a').click(function (e) {
        e.preventDefault();
        var $this = $(this),
            tabgroup = '#' + $this.parents('.tabs').data('tabgroup'),
            others = $this.closest('li').siblings().children('a'),
            target = $this.attr('href');
        others.removeClass('active');
        $this.addClass('active');
        $(tabgroup).children('div').hide();
        $(target).show();

    })
    showTime();

});

function showTime() {
    var luckyDate = new Date(2019, 4, 1, 8, 35, 0); //0代表1月
    document.getElementById("time").innerHTML = getTimeDiff(luckyDate);
    setTimeout("showTime()", 1000);
}

function getTimeDiff(time) {
    var diff = '';
    var time_diff = new Date().getTime() - time;
    // 计算相差天数 
    var days = Math.floor(time_diff / (24 * 3600 * 1000));
    if (days > 0) {
        diff += days + '天';
    }
    // 计算相差小时数 
    var leave1 = time_diff % (24 * 3600 * 1000);
    var hours = Math.floor(leave1 / (3600 * 1000));
    if (hours > 0) {
        diff += hours + '小时';
    } else {
        if (diff !== '') {
            diff += hours + '小时';
        }
    }
    // 计算相差分钟数 
    var leave2 = leave1 % (3600 * 1000);
    var minutes = Math.floor(leave2 / (60 * 1000));
    if (minutes > 0) {
        diff += minutes + '分';
    } else {
        if (diff !== '') {
            diff += minutes + '分';
        }
    }
    // 计算相差秒数 
    var leave3 = leave2 % (60 * 1000);
    var seconds = Math.round(leave3 / 1000);
    if (seconds > 0) {
        diff += seconds + '秒';
    } else {
        if (diff !== '') {
            diff += seconds + '秒';
        }
    }
    return diff;
}
