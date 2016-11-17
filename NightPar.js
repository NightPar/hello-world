/**
*create by xiayangtao on 2016/11/16
*/



NightPar = {
    /**
    *slackBox 小球循环动画
    *      container  容器
    *      width      容器宽高
    *      angle      旋转角度
    *      color*     小球的颜色
    *example:
    *   NightPar.slackBox("#box",96,20,"green","blue","pink","orange");
    */
    slackBox:function(container,width,angle,colora,colorb,colorc,colord){
        swidth = width*3/16;
        $(container)
        .css({width:width,height:width,transform:"rotate("+angle+"deg)",position:"relative"})
        .append($("<div>").addClass("first"))
        .append($("<div>").addClass("second"))
        .append($("<div>").addClass("three"))
        .append($("<div>").addClass("four"));
        $(container+" div")
        .css({width:swidth,height:swidth,background:colora,borderRadius:swidth/2,mixBlendMode:"multiply",position:"absolute"});
        $(".first").css({top:swidth,left:0,backgroundColor:colora});
        $(".second").css({top:0,left:width-swidth*2,backgroundColor:colorb});
        $(".three").css({top:width-swidth*2,left:width-swidth,backgroundColor:colorc});
        $(".four").css({top:width-swidth,left:swidth,backgroundColor:colord});
        (function autoPlay(){
            $(".first").animate({left:0,width:width},700).animate({left:width-swidth,width:swidth},700).animate({left:0,width:swidth},700);
            $(".second").animate({height:width},700).animate({top:width-swidth,height:swidth},700).animate({top:0,height:swidth},700);
            $(".three").animate({left:0,width:width},700).animate({left:0,width:swidth},700).animate({left:width-swidth,width:swidth},700);
            $(".four").animate({top:0,height:width},700).animate({top:0,height:swidth},700).animate({top:width-swidth,height:swidth},700);
            setTimeout(autoPlay,2100);
        })();
    }
};
