/**
 /*青 岛 研 锦 网 络 科 技 有 限 公 司   版权所有
 */
$(function (){
    //导航
    $(".nav_contentbox").mouseenter(function(){
        $(this).children(".nav_popoutoutbox").stop(true,true).slideDown();
    }).mouseleave(function(){
        $(this).children(".nav_popoutoutbox").slideUp();
    })
    //左侧登录
    $(".direct_login_box").click(function(){
        $(this).addClass("direct_login_box_cur").siblings().removeClass("direct_login_box_cur")
    })
    //物流企业查询
    $(".sch_chose_outbox").mouseleave(function(){
        $(".sch_chose_outbox").removeClass("sch_enterprise_outbox_cr");
    })
    $(".sch_chsfct_btn").click(function(){
        $(".sch_chose_outbox").addClass("sch_enterprise_outbox_cr");
        $(".sch_chose_msg_cs").show();
    })
    $(".sch_chose_msg").click(function(){
        $(this).show().siblings().hide();
    })
    //汽车租赁
    $(".chs_oftype").click(function(){
        $(this).addClass("chs_oftype_on").siblings().removeClass("chs_oftype_on")
    })

    $(".forbid_chain_cg").click(function(){
        $(".forbid_chain_cg").hide();
        $(".if_cs01").addClass("forbid_chain_hcg");
        $(".if_cs02").removeClass("forbid_chain_hcg");
    })
    //统计分析
    $(".Lef_analysis_titbox").click(function(){
        $(this).addClass("Lef_analysis_titbox_in").siblings().removeClass("Lef_analysis_titbox_in");
    })
    $(".lef_analysis_titfuc02").click(function(){
        $(this).hide();
        $(this).siblings().show();
        $(this).parent().parent().siblings().slideUp();
    })
    $(".lef_analysis_titfuc01").click(function(){
        $(this).hide();
        $(this).siblings().show();
        $(this).parent().parent().siblings().slideDown();
    })

})