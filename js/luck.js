var allTime,zj,zjText,zj_bg,zj_wf,zj_sx,winGold,addBeil,touzObj,wt;
var lka1,lka2,lkb1,lkb2,lkb3,lkb4,lkb5,lkc1,lkc2,lkc3,lkc4,lkc5,lkc6,lkc7,lkc8,lkc9,lkc10,lkc11,lkc12;
var pl1,pl2,pl3,pl4,pld1,pld2,pld3;
var xdfgKey,xbgKey,xwfKey,xsxKey;
var allKey,allKeyText,rank,ranHtm,rankUid,other_left,other_top,other_touzLeft,other_touzTop,touzM;
var weiz_danx,weiz_duox;
var zjDuil,zjDuilHpi,zjDuilUp,zjDuilDown,zjDuilHpiSecond,zjDuilUpSecond,zjDuilDownSecond,zjDuilHpiLast,zjDuilUpLast,zjDuilDownLast;
var oldHm,clL,clT,clT_text,litTime;
var tzArr=[],myGold;
var zUrl,zSocket;
var tiyNumber,tiy_xiaohao,actTiy;
//var zUrl="http://sockethaoyun.91duobao365.com/";
var tk=PARAMS.token;
//console.log(window.location.host);
if(window.location.host=="haoyun.huanlejc.com"){
	zUrl="http://haoyun.huanlejc.com/";
	zSocket="socketfruits.huanlejc.com:9610";
}else{
	zUrl="http://sockethaoyun.91duobao365.com/";
	zSocket="ceshi.huanlejc.com:9610";
}

$(function(){
	if(typeof(PARAMS.token) == "undefined"){
	   	tk = "";
	   	$("#myGold").text(0);
	}
	//头部点击更多
	$(".luck_more").click(function(){
		if($(".luck_fr_list").is(":visible")){
			$(".luck_fr_list").hide()
		}else{
			$(".luck_fr_list").show()
		}
		event.stopPropagation();
	});
	//竞猜记录
	$("#btn_order").click(function(){
		$(this).attr("href",""+zUrl+"order.html?token="+tk)
	});
	//竞猜记录
	$("#btn_rule").click(function(){
		$(this).attr("href",""+zUrl+"rule.html?token="+tk)
	});

	$("body").bind("click",function(){
		$(".luck_fr_list").hide()
	});
	$("body").bind("touchmove",function(){
		$(".luck_fr_list").hide()
	});
	//当前报喜
	$(".cont_title .btn").click(function(){
		if($(".cont_title_text").is(":visible")){
			$(".cont_title_text").slideUp(200);
			$(this).removeClass("on");
			$(this).find("img").attr("src","images/btn_question.png");
		}else{
			$(".cont_title_text").slideDown(200);
			$(this).addClass("on");
			$(this).find("img").attr("src","images/btn_close1.png");
		}
	});
	$(".cont_btn").click(function(){
		$(".baoxi_cont").slideUp();
		$(".baoxi .tanc_beij").hide();
		setTimeout(function(){
			$(".baoxi").hide();
		},300)
	});
	$(".btn_kaiJiangOrder").click(function(){
		$(".baoxi").show();
		$(".baoxi .tanc_beij").show();
		$(".baoxi_cont").slideDown();
		if($(".cont_title_text").is(":visible")){
			$(".cont_title_text").hide();
			$(".cont_title .btn").removeClass("on");
		}
	});
    $(".tx .tanc_beij,.tx_close,.tx_qd").click(function(){
    	$(".tx").hide();
    });
    $(".box_close,.luck_xfg .tanc_beij,.box_btn a,.luck_dfg .tanc_beij").click(function(){
    	$(".luck_xfg").hide();
    	$(".luck_dfg").hide();
    	$(".box_list a.am em").hide();
    })
    //底部筹码选中
    $(".foot_cm li").live("click",function(){
    	$(this).addClass("active");
    	$(this).siblings().removeClass("active");
    });

    //富贵选择
    $(".content_herself .btn_res").click(function(){
    	$(".xfg").show();
    });
    $(".xfg .tx_close,.xfg .tx_qd").click(function(){
    	$(".xfg").hide();
    	$(".luck_xfg").show();
    });
    $(".content_GoldenBoy .btn_res").click(function(){
    	$(".dfg").show();
    });
    $(".dfg .tx_close,.dfg .tx_qd").click(function(){
    	$(".dfg").hide();
    	$(".luck_dfg").show();
    });

    $(".content_herself .btn_res1").click(function(){
    	$(".luck_xfg").show();
    });
    $(".content_GoldenBoy .btn_res1").click(function(){
    	$(".luck_dfg").show();
    });

    $(".box_list a.at").click(function(){
    	var atEm=$(this).parents(".box_list").find("em");
    	if(atEm.is(":visible")){
    		atEm.hide()
    	}else{
    		atEm.show()
    		$(".box_list a.a_1").find("em").text(lka1);
    		$(".box_list a.a_2").find("em").text(lka2);
    		$(".box_list a.b_1").find("em").text(lkb1);
    		$(".box_list a.b_2").find("em").text(lkb2);
    		$(".box_list a.b_3").find("em").text(lkb3);
    		$(".box_list a.b_4").find("em").text(lkb4);
    		$(".box_list a.b_5").find("em").text(lkb5);
    		$(".box_list a.c_1").find("em").text(lkc1);
    		$(".box_list a.c_2").find("em").text(lkc2);
    		$(".box_list a.c_3").find("em").text(lkc3);
    		$(".box_list a.c_4").find("em").text(lkc4);
    		$(".box_list a.c_5").find("em").text(lkc5);
    		$(".box_list a.c_6").find("em").text(lkc6);
    		$(".box_list a.c_7").find("em").text(lkc7);
    		$(".box_list a.c_8").find("em").text(lkc8);
    		$(".box_list a.c_9").find("em").text(lkc9);
    		$(".box_list a.c_10").find("em").text(lkc10);
    		$(".box_list a.c_11").find("em").text(lkc11);
    		$(".box_list a.c_12").find("em").text(lkc12);
    	}
    });
    $(".box_list>div a.am").click(function(){
    	var acText1=$(".box_content .box_text .spn:nth-of-type(1)");
    	var acText2=$(".box_content .box_text .spn:nth-of-type(2)");
    	if($(this).hasClass("on")){
    		$(this).removeClass("on");
    		$(this).siblings().removeClass("on");
    	}else{
    		$(this).addClass("on");
    		$(this).siblings().removeClass("on");
    	}
    	//多选
    	if($(".luck_dfg .box_list a.am.on").length<3){
    		$(".dfg_text .beilv").text("0");
    		$(".luck_dfg .box_btn a").hide();
    		$(".luck_dfg .box_btn span").show();
    	}else{
    		$(".dfg_text .beilv").text("x"+pl4);
    		$(".luck_dfg .box_btn a").show();
    		$(".luck_dfg .box_btn span").hide();
    	}
    	//2选
    	if($(".luck_xfg .box_list a.am.on").length<2){
    		$(".xfg_text .beilv").text("0");
    		$(".luck_xfg .box_btn a").hide();
    		$(".luck_xfg .box_btn span").show();
    	}else if($(".luck_xfg .lt1 a.am.on").length>0&&$(".luck_xfg .lt2 a.am.on").length>0){
    		$(".luck_xfg .box_list>div.lt3 a.am").removeClass("on");
    		$(".xfg_text .beilv").text("x"+pl1);
    		$(".luck_xfg .box_btn a").show();
    		$(".luck_xfg .box_btn span").hide();
    		$(".xfg_text .sp1").text($(".luck_xfg .lt1 a.am.on .spn").text());
    		$(".xfg_text .sp2").text($(".luck_xfg .lt2 a.am.on .spn").text());
    		xbgKey=$(".luck_xfg .box_list .lt1 a.am.on").attr("data_name");
    		xwfKey=$(".luck_xfg .box_list .lt2 a.am.on").attr("data_name");
    		xdfgKey=xbgKey+","+xwfKey;
    	}else if($(".luck_xfg .lt1 a.am.on").length>0&&$(".luck_xfg .lt3 a.am.on").length>0){
    		$(".luck_xfg .box_list>div.lt2 a.am").removeClass("on");
    		$(".xfg_text .beilv").text("x"+pl2);
    		$(".luck_xfg .box_btn a").show();
    		$(".luck_xfg .box_btn span").hide();
    		$(".xfg_text .sp1").text($(".luck_xfg .lt1 a.am.on .spn").text());
    		$(".xfg_text .sp2").text($(".luck_xfg .lt3 a.am.on .spn").text());
    		xbgKey=$(".luck_xfg .box_list .lt1 a.am.on").attr("data_name");
    		xsxKey=$(".luck_xfg .box_list .lt3 a.am.on").attr("data_name");
    		xdfgKey=xbgKey+","+xsxKey;
    	}else if($(".luck_xfg .lt2 a.am.on").length>0&&$(".luck_xfg .lt3 a.am.on").length>0){
    		$(".luck_xfg .box_list>div.lt1 a.am").removeClass("on");
    		$(".xfg_text .beilv").text("x"+pl3);
    		$(".luck_xfg .box_btn a").show();
    		$(".luck_xfg .box_btn span").hide();
    		$(".xfg_text .sp1").text($(".luck_xfg .lt2 a.am.on .spn").text());
    		$(".xfg_text .sp2").text($(".luck_xfg .lt3 a.am.on .spn").text());
    		xwfKey=$(".luck_xfg .box_list .lt2 a.am.on").attr("data_name");
    		xsxKey=$(".luck_xfg .box_list .lt3 a.am.on").attr("data_name");
    		xdfgKey=xwfKey+","+xsxKey;
    	}

    });

    $(".luck_dfg .box_list>div.lt1 a.am").click(function(){
    	var acText1=$(".dfg_text .spn:nth-of-type(1)");
    	var onText1=$(".luck_dfg .box_list>div.lt1 a.am.on .spn").text();
    	acText1.text(onText1);
    });
    $(".luck_dfg .box_list>div.lt2 a.am").click(function(){
    	var acText2=$(".dfg_text .spn:nth-of-type(2)");
    	var onText2=$(".luck_dfg .box_list>div.lt2 a.am.on .spn").text();
    	acText2.text(onText2);
    });
    $(".luck_dfg .box_list>div.lt3 a.am").click(function(){
    	var acText3=$(".dfg_text .spn:nth-of-type(3)");
    	var onText3=$(".luck_dfg .box_list>div.lt3 a.am.on .spn").text();
    	acText3.text(onText3);
    });
    //多选
    $(".luck_dfg .change_box .box_btn a").click(function(){
    	var bgText=$(".luck_dfg .box_list .lt1 a.am.on").find(".spn").text();
    	var bgKey=$(".luck_dfg .box_list .lt1 a.am.on").attr("data_name");
    	var wfText=$(".luck_dfg .box_list .lt2 a.am.on").find(".spn").text();
    	var wfKey=$(".luck_dfg .box_list .lt2 a.am.on").attr("data_name");
    	var sxText=$(".luck_dfg .box_list .lt3 a.am.on").find(".spn").text();
    	var sxKey=$(".luck_dfg .box_list .lt3 a.am.on").attr("data_name");
    	var dfgKey=bgKey+","+wfKey+","+sxKey;
    	$(".dfg_textActive .st1").text(bgText);
    	$(".dfg_textActive .st2").text(wfText);
    	$(".dfg_textActive .st3").text(sxText);
    	$(".content_GoldenBoy .act").attr("data_name",dfgKey);
    });
    //2选
    $(".luck_xfg .change_box .box_btn a").click(function(){
    	var Text1=$(".xfg_text .sp1").text();
    	var Text2=$(".xfg_text .sp2").text();
    	var TextBeil=$(".xfg_text .beilv").text();
    	var bgKey=$(".luck_xfg .box_list .lt1 a.am.on").attr("data_name");
    	var wfKey=$(".luck_xfg .box_list .lt2 a.am.on").attr("data_name");
    	var sxKey=$(".luck_xfg .box_list .lt3 a.am.on").attr("data_name");

    	$(".xfg_textActive .st1").text(Text1);
    	$(".xfg_textActive .st2").text(Text2);
    	$(".xfg_textActive .beilv").text(TextBeil);
    	$(".content_herself .act").attr("data_name",xdfgKey);
    });

    //中奖弹窗关闭
    $(".luck_zj").click(function(){
    	$(".luck_zj").hide();
    	$(".zj_box").removeClass("bounceInDown");
    })

    //点击求好运显示文字
    $(".luck_haoyun").click(function(){
        params={}
		params.request="index/takeluck";
		params.token=tk;
		websocketSend(params);
    });

    //下注
    $(".luck_content .act").live("touchstart",function(){
    	if(parseInt($(".foot_cm li.active .ty_num em").text())>0){
			G_is_card=1;
		}else{
			G_is_card=0;
	   }
    	weiz_danx=$(this).attr("data_name");                                 //每次投注对应的格子
    	var touzMoney=parseInt($(".foot_cm li.active .cmNumber").text());    //每次下注的金额
        params={}
        params.use_card=G_is_card;
		params.request="index/touzhu";
		params.chip_key=weiz_danx;
		params.chip_val=touzMoney;
		params.token=tk;
		websocketSend(params);
    });

    $(".luck_content .act").live("touchstart",function(){
    	myGold=parseInt($("#myGold").text());
    	var myTouz=parseInt($(".foot_cm li.active .cmNumber").text());
    	if(tk==""){
    		errTis()
    	    $(".errTis_text .spn").text("请登录");
    	    return false;
    	}
    	if(myGold<myTouz){
    		errTis()
    	    $(".errTis_text .spn").text("金豆不足");
    	    return false;
    	}
    });

    //多选已被投注时提示
    $(".luck_content .pot .ctz").click(function(){
    	errTis()
    	$(".errTis_text .spn").text("请撤消当前选项后，再进行玩法选项变更");
    })

    //清空
    $(".btn_clear").click(function(){
    	params={}
		params.request="index/touzhuclear";
		params.token=tk;
		websocketSend(params);
    });

    //断网点击刷新
    $(".online").click(function(){
    	window.location.reload();
    })

})

  //提示
  function errTis(){
  	$(".luck_errTis").addClass("up");
   setTimeout(function(){
   	$(".luck_errTis").removeClass("up");
   },1000)
  }
  //倒计时
  function djTime(t){
	var djt=setInterval(function(){
		t--;
		if(t==0){
			t=2;
			var djtD=setInterval(function(){
				t--;
				if(t<=1){
				 clearInterval(djtD);
				 t=0;
				}
			},1000)
			$(".luck_zhezhao").show();
			$(".luck_tis").show();
			$(".luck_tis").find("img").attr("src","images/title1.png");
			setTimeout(function(){
				$(".luck_tis").hide();
			},1000);
		}
		if(t<=0){
			clearInterval(djt);
			t=0;
		}
		$("#djTime").text(t+"s");
	},1000)
  }

  //开奖
  function kaijAnt(){
  	$(".luck_zhezhao").show();
	$(".kaijiang").show();
	$(".kaijiang .tanc_beij").show();
	$(".luck_kaijiang").show();
	$(".kaijiang_ani .ani").addClass("bounceInDown");
	setTimeout(function(){
			myGold=parseInt($("#myGold").text());
		},6000)
	setTimeout(function(){
	  $(".imt_img").addClass("vhd");
	  $(".imt_list").addClass("vin");
	  ant()
	},1800)
	setTimeout(function(){
	  $(".kaijiang_ani .ani").removeClass("bounceInDown");
	  $(".kaijiang_ani .ani").addClass("bounceOutUp");
	  $(".luck_jiang a").text("本期加奖"+addBeil+"%");
	},9000);
	setTimeout(function(){
	  $(".luck_kaijiang").hide();
	  $(".luck_duilian").show();
	},11000);
	setTimeout(function(){
	  $(".duilian_cont .duil").addClass("kai");
	},11500);
	setTimeout(function(){
	  $(".kaijiang_result").show()
	},13000);
	setTimeout(function(){
	  $(".kaijiang").hide();
	  $(".luck_duilian").hide();
	  $(".kaijiang_result").hide();
	  $(".kaijiang_ani .ani").removeClass("bounceOutUp");
	  $(".imt_list ul").removeClass("an8");
	  $(".duilian_cont .duil").removeClass("kai");
	  $(".luck_zhezhao").hide();
	  $(".imt_img").removeClass("vhd");
	  $(".imt_list").removeClass("vin");
	  $(".imt_list ul").attr("class","");
	  $(".luck_jiang a").text("本局额外加奖");

	  if(winGold>0){
	  	$(".luck_zj").show();
	  	setTimeout(function(){
	  		$(".luck_zj").hide();
	  	},3000)
	  	$(".zj_box").addClass("bounceInDown");
	  	$(".zj_text_num").text("+"+winGold);
	  }

	  if(wt==1){
	  	myGold+=0;
	  }else if(wt==0){
	  	myGold+=winGold;
	  }
	  $("#myGold").text(myGold);
	  if(zj_bg==1){
			$(".btn_kaiJiangOrder .gb").text("金童");
			$(".luck_jennifer li.a_1").addClass("kai");
		}else if(zj_bg==2){
			$(".btn_kaiJiangOrder .gb").text("玉女");
			$(".luck_jennifer li.a_2").addClass("kai");
		}
		if(zj_wf==1){
			$(".btn_kaiJiangOrder .wf").text("福");
			$(".luck_wufu li.b_1").addClass("kai");
		}else if(zj_wf==2){
			$(".btn_kaiJiangOrder .wf").text("禄");
			$(".luck_wufu li.b_2").addClass("kai");
		}else if(zj_wf==3){
			$(".btn_kaiJiangOrder .wf").text("寿");
			$(".luck_wufu li.b_3").addClass("kai");
		}else if(zj_wf==4){
			$(".btn_kaiJiangOrder .wf").text("喜");
			$(".luck_wufu li.b_4").addClass("kai");
		}else if(zj_wf==5){
			$(".btn_kaiJiangOrder .wf").text("财");
			$(".luck_wufu li.b_5").addClass("kai");
		}
		if(zj_sx==1){
			$(".btn_kaiJiangOrder .sx").text("鼠");
			$(".luck_shengxiao li.c_1").addClass("kai");
		}else if(zj_sx==2){
			$(".btn_kaiJiangOrder .sx").text("牛");
			$(".luck_shengxiao li.c_2").addClass("kai");
		}else if(zj_sx==3){
			$(".btn_kaiJiangOrder .sx").text("虎");
			$(".luck_shengxiao li.c_3").addClass("kai");
		}else if(zj_sx==4){
			$(".btn_kaiJiangOrder .sx").text("兔");
			$(".luck_shengxiao li.c_4").addClass("kai");
		}else if(zj_sx==5){
			$(".btn_kaiJiangOrder .sx").text("龙");
			$(".luck_shengxiao li.c_5").addClass("kai");
		}else if(zj_sx==6){
			$(".btn_kaiJiangOrder .sx").text("蛇");
			$(".luck_shengxiao li.c_6").addClass("kai");
		}else if(zj_sx==7){
			$(".btn_kaiJiangOrder .sx").text("马");
			$(".luck_shengxiao li.c_7").addClass("kai");
		}else if(zj_sx==8){
			$(".btn_kaiJiangOrder .sx").text("羊");
			$(".luck_shengxiao li.c_8").addClass("kai");
		}else if(zj_sx==9){
			$(".btn_kaiJiangOrder .sx").text("猴");
			$(".luck_shengxiao li.c_9").addClass("kai");
		}else if(zj_sx==10){
			$(".btn_kaiJiangOrder .sx").text("鸡");
			$(".luck_shengxiao li.c_10").addClass("kai");
		}else if(zj_sx==11){
			$(".btn_kaiJiangOrder .sx").text("狗");
			$(".luck_shengxiao li.c_11").addClass("kai");
		}else if(zj_sx==12){
			$(".btn_kaiJiangOrder .sx").text("猪");
			$(".luck_shengxiao li.c_12").addClass("kai");
		}

		setTimeout(function(){
		    $(".luck_content .num").hide();
			$(".luck_content .num").text(0);
			$(".luck_content .me").hide();
			$(".luck_content .me").text(0);
			$(".luck_content .pot").find(".num").hide();
			$(".luck_content .pot").find(".num").text(0);
			$(".luck_tis").show();
			$(".luck_tis").find("img").attr("src","images/title2.png");
			$(".content_player ul").html("");
			$(".content_player .player_more").hide();
			setTimeout(function(){
				$(".luck_tis").hide();
			},1000)
		},1000)

		setTimeout(function(){
		  $(".luck_jennifer li").removeClass("kai");
		  $(".luck_wufu li").removeClass("kai");
		  $(".luck_shengxiao li").removeClass("kai");
		},2000)

	},15000);
  }

  //动画
  function ant(){
  	$(".ant_bg .imt_list ul").addClass("an1");
  	$(".ant_wf .imt_list ul").addClass("an1_1");
  	$(".ant_sx .imt_list ul").addClass("an1");
	setTimeout(function(){
		$(".ant_wf .imt_list ul").removeClass("an3_1");
		$(".imt_list ul").removeClass("an3");
		if(zj_bg==1){
			$(".ant_bg .imt_list ul").addClass("an8");
		}else if(zj_bg==2){
			$(".ant_bg .imt_list ul").addClass("an9");
		}
		if(zj_wf==1){
		    $(".ant_wf .imt_list ul").addClass("an10");
		}else if(zj_wf==2){
			$(".ant_wf .imt_list ul").addClass("an11");
		}else if(zj_wf==3){
			$(".ant_wf .imt_list ul").addClass("an12");
		}else if(zj_wf==4){
			$(".ant_wf .imt_list ul").addClass("an13");
		}else if(zj_wf==5){
			$(".ant_wf .imt_list ul").addClass("an14");
		}
		if(zj_sx==1){
		    $(".ant_sx .imt_list ul").addClass("an20");
		}else if(zj_sx==2){
			$(".ant_sx .imt_list ul").addClass("an21");
		}else if(zj_sx==3){
			$(".ant_sx .imt_list ul").addClass("an22");
		}else if(zj_sx==4){
			$(".ant_sx .imt_list ul").addClass("an23");
		}else if(zj_sx==5){
			$(".ant_sx .imt_list ul").addClass("an24");
		}else if(zj_sx==6){
			$(".ant_sx .imt_list ul").addClass("an25");
		}else if(zj_sx==7){
			$(".ant_sx .imt_list ul").addClass("an26");
		}else if(zj_sx==8){
			$(".ant_sx .imt_list ul").addClass("an27");
		}else if(zj_sx==9){
			$(".ant_sx .imt_list ul").addClass("an28");
		}else if(zj_sx==10){
			$(".ant_sx .imt_list ul").addClass("an29");
		}else if(zj_sx==11){
			$(".ant_sx .imt_list ul").addClass("an30");
		}else if(zj_sx==12){
			$(".ant_sx .imt_list ul").addClass("an31");
		}
	},2400)
  }

//历史期数
function order(){
	var numHtml='';
	var at1="";
	var at2="";
	var am1="";
	var am2="";
	var am3="";
	var am4="";
	var am5="";
	$.post(zUrl+"index/historynumber",{token:tk},function(data){
		console.log(data);
		var numData=data.data;
		var numDataLen=numData.length;
		for(var nt=0;nt<numDataLen;nt++){
			var zjDices=numData[nt].dices;
			var zjDicesText=zjDices.split(' ');
			var zj_bg=parseInt(zjDicesText[0]);
			var zj_wf=parseInt(zjDicesText[1]);
			var zjNum=numData[nt].number_id;
			var zjText=numData[nt].dices_name;
			var zjTextLast=zjText.split('').splice(5,1).join('');
			if(zj_bg==1){
				at1="act";
				at2="";
			}else if(zj_bg==2){
				at1="";
				at2="act";
			}
			if(zj_wf==1){
				am1="acm";
				am2="";
				am3="";
				am4="";
				am5="";
			}else if(zj_wf==2){
				am1="";
				am2="acm";
				am3="";
				am4="";
				am5="";
			}else if(zj_wf==3){
				am1="";
				am2="";
				am3="acm";
				am4="";
				am5="";
			}else if(zj_wf==4){
				am1="";
				am2="";
				am3="";
				am4="acm";
				am5="";
			}else if(zj_wf==5){
				am1="";
				am2="";
				am3="";
				am4="";
				am5="acm";
			}
			numHtml+='<li class="cont_list_info ov">';
			numHtml+='<span class="time">'+zjNum+'</span>';
			numHtml+='<span class="boy'+" "+at1+'"></span>';
			numHtml+='<span class="girl'+" "+at2+'"></span>';
			numHtml+='<span class="fu'+" "+am1+'"></span>';
			numHtml+='<span class="lu'+" "+am2+'"></span>';
			numHtml+='<span class="shou'+" "+am3+'"></span>';
			numHtml+='<span class="xi'+" "+am4+'"></span>';
			numHtml+='<span class="cai'+" "+am5+'"></span>';
			numHtml+='<span class="sxiao">'+zjTextLast+'</span>';
			numHtml+='</li>';
		}
		$(".cont_list_order ul").html(numHtml);

	},"json")
}
