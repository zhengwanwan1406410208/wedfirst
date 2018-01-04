window.onload = function () {
    //获取鼠标滑过或点击的标签和要切换内容的元素
    var titles = $('.notice-tit li');
    var divs = $('.notice-con div');
    //alert(titles.length);
    //alert(divs.length);

    if (titles.length != divs.length) {
        return;
    }

    //遍历titles下的所有的li
   for (var i = 0; i < titles.length; i++) {
        titles[i].id = i;
        titles[i].onmousedown = function () {
            //alert(this.id);
            //清除所有li上的class
            for (var j = 0; j < titles.length; j++) {
                titles[j].className = '';
                divs[j].style.display = 'none';
            }
            //设置当前为高亮显示
            this.className = 'select';
            divs[this.id].style.display = 'block';
        }
    }
};
// 放大镜
$(function () {
    $('.jqzoom').imagezoom();
    $("#page_i li a").click(function () {
        $(this).parents("li").addClass("page_firstimg").siblings().removeClass("page_firstimg");
        $(".jqzoom").attr('src',$(this).find("img").attr("mid"));
        $(".jqzoom").attr('rel',$(this).find("img").attr("big"));
    })
})
// 选项卡跳转
$(function () {
        var wh=$(window).height();
        var s;
        $(window).scroll(function(){
            s = wh-$(window).scrollTop();
            if(s<120){
                $('.notice-tit').addClass("notice_sec");
            }
             else if(s>120){
                 $('.notice-tit').removeClass("notice_sec");
            }
        });
        $('.notice-tit li').click(function () {
                $('.notice-tit').addClass("notice_sec");
                $('html,body').animate({scrollTop:$('.page_addition').offset().top},1000);
        });

});
