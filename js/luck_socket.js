
function socket_message(data,type){
//	console.log(data)
	switch(type){
		case 'welcome':
		welcome(data);
		break;
		case 'start':
		start(data);
		break;
		case 'score':
		score(data);
		break;
		case 'takeluck':
		takeluck(data);
		break;
		case 'touzu':
		touzu(data);
		break;
		case 'touzuclear':
		touzuclear(data);
		break;
		case 'addbouse':
		addbouse(data);
		break;
		case 'over_limit_time':
		over_limit_time(data);
		break;
		case 'over':
		over(data);
		break;
		default:
		if(type&&data){
//		  console.log("ccc");
		}
	}
}

//倒计时
function over_limit_time(data){
	console.log(data);
	allTime=0;
	litTime=data.over_limit_time;
	if(litTime<=-1&&litTime>=-10){
		kaijAnt()
	}else if(litTime<-10){
		$(".luck_djs").show()
	}
}
//进入游戏
function welcome(data){
	console.log(data);
	var lastData=data.lastData;
	var lkcont=lastData.lk_content;
	wt=1;
	winGold=lastData.win;
	addBeil=lastData.addbouse;
	allKey=data.allKeyDatas;
	rank=data.rankDatas;
	var ranLen=rank.length;
	ranHtm="";
	myGold=parseInt($("#myGold").text());
	//投注区
	for(h in allKey){
		var touzM=allKey[h];
		$(".content_table li."+h+"").find(".num").show();
	    $(".content_table li."+h+"").find(".num").text(touzM);
	}

	//排行版
	for(var ph=0;ph<ranLen;ph++){
		var rankName=rank[ph].nickname;
		var rankImg=rank[ph].img;
		var rankUid=rank[ph].uid;
		if(rankImg==""||rankImg=="undefind"||rankImg==null){
			rankImg="images/user_img.png";
		}
		ranHtm+='<li class="'+rankUid+'">';
		ranHtm+='<img src='+rankImg+'>';
		ranHtm+='<h3 class="name"><em class="touxian"></em><span class="mingci">'+rankName+'</span></h3>';
		ranHtm+='</li>';
	}
	$(".content_player ul").html(ranHtm);
	var player=$(".content_player ul li");
	var player_length=player.length;
    if(player_length>=1){
    	$(".content_player .player_more").show();
    }
	zj=lastData.dices; 
	zjText=zj.split(' ');
	zj_bg=parseInt(zjText[0]);
	zj_wf=parseInt(zjText[1]);
	zj_sx=parseInt(zjText[2]);
	
	zjDuil=lastData.duilian;
	zjDuilHpi=zjDuil[0];
	zjDuilUp=zjDuil[1];
	zjDuilDown=zjDuil[2];
	zjDuilHpiSecond=zjDuilHpi.split('').splice(0,2).join('');         //横批前2个字
	zjDuilUpSecond=zjDuilUp.split('').splice(0,2).join('');           //上联前2个字
	zjDuilDownSecond=zjDuilDown.split('').splice(0,2).join('');       //下联前2个字
	zjDuilHpiLast=zjDuilHpi.split('').slice(2).join('');         //横批前2个字
	zjDuilUpLast=zjDuilUp.split('').slice(2).join('');           //上联前2个字
	zjDuilDownLast=zjDuilDown.split('').slice(2).join('');       //下联前2个字
	lkcont=lastData.lk_content;
	
	lka1=lkcont.a_1;
	lka2=lkcont.a_2;
	lkb1=lkcont.b_1;
	lkb2=lkcont.b_2;
	lkb3=lkcont.b_3;
	lkb4=lkcont.b_4;
	lkb5=lkcont.b_5;
	lkc1=lkcont.c_1;
	lkc2=lkcont.c_2;
	lkc3=lkcont.c_3;
	lkc4=lkcont.c_4;
	lkc5=lkcont.c_5;
	lkc6=lkcont.c_6;
	lkc7=lkcont.c_7;
	lkc8=lkcont.c_8;
	lkc9=lkcont.c_9;
	lkc10=lkcont.c_10;
	lkc11=lkcont.c_11;
	lkc12=lkcont.c_12;
	if(zj_bg==1){
		$(".btn_kaiJiangOrder .gb").text("金童");
		$(".kaijiang_result .jennifer").text("金童");
	}else if(zj_bg==2){
		$(".btn_kaiJiangOrder .gb").text("玉女");
		$(".kaijiang_result .jennifer").text("玉女");
	}
	if(zj_wf==1){
		$(".btn_kaiJiangOrder .wf").text("福");
		$(".kaijiang_result .wufu").text("福");
	}else if(zj_wf==2){
		$(".btn_kaiJiangOrder .wf").text("禄");
		$(".kaijiang_result .wufu").text("禄");
	}else if(zj_wf==3){
		$(".btn_kaiJiangOrder .wf").text("寿");
		$(".kaijiang_result .wufu").text("寿");
	}else if(zj_wf==4){
		$(".btn_kaiJiangOrder .wf").text("喜");
		$(".kaijiang_result .wufu").text("喜");
	}else if(zj_wf==5){
		$(".btn_kaiJiangOrder .wf").text("财");
		$(".kaijiang_result .wufu").text("财");
	}
	if(zj_sx==1){
		$(".btn_kaiJiangOrder .sx").text("鼠");
		$(".kaijiang_result .shengxiao").text("鼠");
	}else if(zj_sx==2){
		$(".btn_kaiJiangOrder .sx").text("牛");
		$(".kaijiang_result .shengxiao").text("牛");
	}else if(zj_sx==3){
		$(".btn_kaiJiangOrder .sx").text("虎");
		$(".kaijiang_result .shengxiao").text("虎");
	}else if(zj_sx==4){
		$(".btn_kaiJiangOrder .sx").text("兔");
		$(".kaijiang_result .shengxiao").text("兔");
	}else if(zj_sx==5){
		$(".btn_kaiJiangOrder .sx").text("龙");
		$(".kaijiang_result .shengxiao").text("龙");
	}else if(zj_sx==6){
		$(".btn_kaiJiangOrder .sx").text("蛇");
		$(".kaijiang_result .shengxiao").text("蛇");
	}else if(zj_sx==7){
		$(".btn_kaiJiangOrder .sx").text("马");
		$(".kaijiang_result .shengxiao").text("马");
	}else if(zj_sx==8){
		$(".btn_kaiJiangOrder .sx").text("羊");
		$(".kaijiang_result .shengxiao").text("羊");
	}else if(zj_sx==9){
		$(".btn_kaiJiangOrder .sx").text("猴");
		$(".kaijiang_result .shengxiao").text("猴");
	}else if(zj_sx==10){
		$(".btn_kaiJiangOrder .sx").text("鸡");
		$(".kaijiang_result .shengxiao").text("鸡");
	}else if(zj_sx==11){
		$(".btn_kaiJiangOrder .sx").text("狗");
		$(".kaijiang_result .shengxiao").text("狗");
	}else if(zj_sx==12){
		$(".btn_kaiJiangOrder .sx").text("猪");
		$(".kaijiang_result .shengxiao").text("猪");
	}
	
	$(".duilian_title .text_result").text(zjDuilHpiSecond);
	$(".duilian_up .text_result").text(zjDuilUpSecond);
	$(".duilian_down .text_result").text(zjDuilDownSecond);
	$(".duilian_title .text_other").text(zjDuilHpiLast);
	$(".duilian_up .text_other").text(zjDuilUpLast);
	$(".duilian_down .text_other").text(zjDuilDownLast);
	$("#playerNum").text(data.personDatas);
	
	allTime=data.play_stat;
	if(allTime<=0){
		$("#djTime").text(0+"s");
	}else{
		allTime=allTime;
		djTime(allTime);
	}
  	
}

//游戏开始
function start(data){
	console.log(data);
	allTime=data.over_limit_time;
	djTime(allTime);
	$(".luck_djs").hide()
}

//刷新分数
function score(data){
    console.log(data);
    var allTime=data.over_limit_time;
	allKey=data.allKeyDatas;
	rank=data.rankDatas;
	var ranLen=rank.length;
	ranHtm="";
	
	//排行版
	for(var ph=0;ph<ranLen;ph++){
		var rankName=rank[ph].nickname;
		var rankImg=rank[ph].img;
		rankUid=rank[ph].uid;
		if(rankImg==""||rankImg=="undefind"||rankImg==null){
			rankImg="images/user_img.png";
		}
		ranHtm+='<li class="'+rankUid+'">';
		ranHtm+='<img src='+rankImg+'>';
		ranHtm+='<h3 class="name"><em class="touxian"></em><span class="mingci">'+rankName+'</span></h3>';
		ranHtm+='</li>';
	}
	$(".content_player ul").html(ranHtm);
	
	var player=$(".content_player ul li");
	var player_length=player.length;
	if(player_length>=1){
    	$(".content_player .player_more").show();
   }
	
	for(h in allKey){
	    var touzM=allKey[h];
//	    console.log(h+":"+touzM+":"+h.length);
        var oldtouzM=$(".content_table li."+h+"").find(".num").text();
//		$(".content_table li."+h+"").find(".num").show();
//	    $(".content_table li."+h+"").find(".num").text(touzM);
        if(h.length==3||h.length==4){
	    	$(".content_table li."+h+"").find(".num").show();
	        $(".content_table li."+h+"").find(".num").text(touzM);
	    }
	    touzM=touzM-oldtouzM;
	    if(touzM>0){
//	    	console.log(h+":"+touzM);
	    	other_touzLeft=parseInt($(".content_table li."+h+"").find(".act").offset().left)+30;
		    other_touzTop=parseInt($(".content_table li."+h+"").find(".act").offset().top)+20;
		    other_top=parseInt($(".player_more").offset().top);
			other_left=parseInt($(".player_more").offset().left);
			
			var hm=$(".content_table li."+h+"").find(".num").text();
			$('<i class="gold '+h+'"></i>').appendTo($(".player_more"));
		    $(".player_more").find(".gold."+h+"").css({"position":"fixed","top":other_top+"px","left":other_left+"px","z-index":"99"});
	//      $(".player_more").find(".gold."+h+"").css({"position":"fixed","z-index":"999999"})
	        $(".player_more").find(".gold."+h+"").animate({
	        	top:other_touzTop+"px",
	        	left:other_touzLeft+"px"
	        },50);
		    setTimeout(function(){
		    	$(".player_more").find(".gold").remove();
		    },800);
	    	
	    }
	    
	}
	
	$("#playerNum").text(data.personDatas);
}
//求好运
function takeluck(data){
	if(data.status==1){
		myGold=parseInt($("#myGold").text());
		$(".caishen_text").show();
		$(".text_info").text(data.info);
		setTimeout(function(){
        	$(".caishen_text").hide();
        },1000)
		myGold-=10;
		$("#myGold").text(myGold);
	}else{
		errTis();
		$(".errTis_text .spn").text(data.info);
//		appOen.showRechargeDialog1();
		return false;
	}
	
}

//投注
function touzu(data){
	console.log(data);
	if(data.status==1){//投注成功
        
		myGold=parseInt($("#myGold").text());
		var touzMoney=parseInt($(".foot_cm li.active .cmNumber").text());
		var touzKey=data.chip_key;
		var touzKeyArr=touzKey.split(',');
		var touzKeyArrLen=touzKeyArr.length;
		var touzKeyMy;
//		var myGold=parseInt($("#myGold").text());
    	var myTouz=parseInt($(".foot_cm li.active .cmNumber").text());
    	if(tk==""){
    		errTis();
    	    $(".errTis_text .spn").text("请登录");
    	    return false;
    	}

		if(touzKeyArrLen==1){
			touzKeyMy=$(".luck_content li."+touzKey+"").find(".act");
		}else if(touzKeyArrLen==2){
			touzKeyMy=$(".xfg_textActive").find(".act");
		}else if(touzKeyArrLen==3){
			touzKeyMy=$(".dfg_textActive").find(".act");
		}
		tzArr.push(weiz_danx);
		
		//体验
		actTiy=parseInt($(".foot_cm li.active").find(".ty_num").children("em").text());
		tiy_xiaohao=parseInt($("#tiyan_xiaoh").text());
		if(G_is_card==1){
			actTiy-=1;
		    $(".foot_cm li.active").find(".ty_num").children("em").text(actTiy);
		    myGold=myGold;
		}else{
			$(".foot_cm li.active").find(".ty_num").children("em").text(0);
			myGold-=touzMoney;
		}
		
		$("#myGold").text(myGold);
		var myTouzMoney=parseInt($(".content_table li .me").text());
    	var my_top=parseInt($(".foot_cm li.active").offset().top)+5;
    	var my_left=parseInt($(".foot_cm li.active").offset().left)+36;   
    	var this_top=parseInt(touzKeyMy.offset().top)+20;
    	var this_left=parseInt(touzKeyMy.offset().left)+30;
    	var thisText=parseInt(touzKeyMy.siblings(".me").text());               
    	var thisNum=parseInt(touzKeyMy.siblings(".num").text()); 
    	var touzMoney=parseInt($(".foot_cm li.active .cmNumber").text());   
    	thisText=thisText+touzMoney;                                         
    	thisNum=thisNum+touzMoney;
    	touzKeyMy.siblings(".me").show().text(thisText);
    	touzKeyMy.siblings(".num").show().text(thisNum);
        $('<i class="gold"></i>').appendTo($(".foot_cm li.active"));
        $(".foot_cm li.active").find(".gold").css({"position":"fixed","top":my_top+"px","left":my_left+"px"});
        setTimeout(function(){
        	$(".foot_cm li.active").find(".gold").css({"position":"fixed","top":this_top+"px","left":this_left+"px","z-index":"999999"})
        },50);
        setTimeout(function(){
        	$(".foot_cm li.active").find(".gold").remove();
        },800);
		
		if(parseInt($(".dfg_textActive").find(".me").text())>0){
			$(".dfg_textActive .ctz").show();
		}
		if(parseInt($(".xfg_textActive").find(".me").text())>0){
			$(".xfg_textActive .ctz").show();
		};
		
		
	}else{   //投注失败
	  touzObj=false;
	  errTis();
	  $(".errTis_text .spn").text(data.info);
	  return false;
	}
	//金豆不足
	if(data.is_empty==1){
		errTis();
	    $(".errTis_text .spn").text("金豆不足");
		return false;
	}
	if(myGold<myTouz){
		errTis();
	    $(".errTis_text .spn").text("金豆不足");
	    appOen.showRechargeDialog1();
	    return false;
	}
}
//清空
function touzuclear(data){
	console.log(data);
	var tisText=data.info;
	var clearMoney=data.money;
	myGold=parseInt($("#myGold").text());
    
	if(data.status==1){
		myGold+=clearMoney;
        errTis();
	    $(".errTis_text .spn").text(tisText);
        for(var m=0;m<tzArr.length;m++){
        	var tme=$(".luck_content li."+tzArr[m]+"").find(".me").text();
        	var tnum=$(".luck_content li."+tzArr[m]+"").find(".num").text();
        	var ptem=parseInt(tme);
        	var ptum=parseInt(tnum);
        	$(".luck_content li."+tzArr[m]+"").find(".num").text(ptum-ptem);
        	if(ptum-ptem<=0){
        		$(".luck_content li."+tzArr[m]+"").find(".num").hide();
        		$(".luck_content li."+tzArr[m]+"").find(".num").text(0);
        	}
        }
        $(".luck_content").find(".me").hide();
        $(".luck_content").find(".me").text(0);
        $(".luck_content .pot").find(".num").hide();
        $(".luck_content .pot").find(".num").text(0);
		$("#myGold").text(myGold);
        tzArr=[];
        
        //请求体验卡
         $.post("/sns/cardlist",{game_id:10,token:PARAMS.token},function(data){
			tiyData=data;
			tiyDataData=tiyData.data;
			console.log(tiyDataData);
			if(tiyDataData==null){
				return false;
			}
			for(var ty=0;ty<tiyDataData.length;ty++){
				tiyNumber=parseInt(tiyDataData[ty].number);
				tiyGold=parseInt(tiyDataData[ty].gold);
	            $(".foot_cm li.w"+tiyGold+"").find(".ty_num").children("em").text(tiyNumber);
	            if(parseInt($(".foot_cm li.w"+tiyGold+"").find(".ty_num em").text())==0){
	            	$(".foot_cm li.w"+tiyGold+"").find(".ty_num").hide();
	            }
			}
		},"json");
        
	}else{
        errTis();
	    $(".errTis_text .spn").text(tisText);
	}
	
	$(".luck_content .pot .ctz").hide();
}

//额外倍率
function addbouse(data){
//	console.log(data);
	addBeil=data.addbouse;
}

//游戏结束
function over(data){
	console.log(data);
	wt=0;
	winGold=data.win;
	weiz_danx="";
	tzArr=[];
	zj=data.dices;
	zjText=zj.split(' ');
	zj_bg=parseInt(zjText[0]);
	zj_wf=parseInt(zjText[1]);
	zj_sx=parseInt(zjText[2]);
	
	zjDuil=data.duilian;
	zjDuilHpi=zjDuil[0];
	zjDuilUp=zjDuil[1];
	zjDuilDown=zjDuil[2];
	zjDuilHpiSecond=zjDuilHpi.split('').splice(0,2).join('');         //横批前2个字
	zjDuilUpSecond=zjDuilUp.split('').splice(0,2).join('');           //上联前2个字
	zjDuilDownSecond=zjDuilDown.split('').splice(0,2).join('');       //下联前2个字
	zjDuilHpiLast=zjDuilHpi.split('').slice(2).join('');         //横批前2个字
	zjDuilUpLast=zjDuilUp.split('').slice(2).join('');           //上联前2个字
	zjDuilDownLast=zjDuilDown.split('').slice(2).join('');       //下联前2个字
	lkcont=data.lk_content;
	
	lka1=lkcont.a_1;
	lka2=lkcont.a_2;
	lkb1=lkcont.b_1;
	lkb2=lkcont.b_2;
	lkb3=lkcont.b_3;
	lkb4=lkcont.b_4;
	lkb5=lkcont.b_5;
	lkc1=lkcont.c_1;
	lkc2=lkcont.c_2;
	lkc3=lkcont.c_3;
	lkc4=lkcont.c_4;
	lkc5=lkcont.c_5;
	lkc6=lkcont.c_6;
	lkc7=lkcont.c_7;
	lkc8=lkcont.c_8;
	lkc9=lkcont.c_9;
	lkc10=lkcont.c_10;
	lkc11=lkcont.c_11;
	lkc12=lkcont.c_12;

	$(".luck_content .pot .ctz").hide();
	if(zj_bg==1){
		$(".kaijiang_result .jennifer").text("金童");
	}else if(zj_bg==2){
		$(".kaijiang_result .jennifer").text("玉女");
	}
	if(zj_wf==1){
		$(".kaijiang_result .wufu").text("福");
	}else if(zj_wf==2){
		$(".kaijiang_result .wufu").text("禄");
	}else if(zj_wf==3){
		$(".kaijiang_result .wufu").text("寿");
	}else if(zj_wf==4){
		$(".kaijiang_result .wufu").text("喜");
	}else if(zj_wf==5){
		$(".kaijiang_result .wufu").text("财");
	}
	if(zj_sx==1){
		$(".kaijiang_result .shengxiao").text("鼠");
	}else if(zj_sx==2){
		$(".kaijiang_result .shengxiao").text("牛");
	}else if(zj_sx==3){
		$(".kaijiang_result .shengxiao").text("虎");
	}else if(zj_sx==4){
		$(".kaijiang_result .shengxiao").text("兔");
	}else if(zj_sx==5){
		$(".kaijiang_result .shengxiao").text("龙");
	}else if(zj_sx==6){
		$(".kaijiang_result .shengxiao").text("蛇");
	}else if(zj_sx==7){
		$(".kaijiang_result .shengxiao").text("马");
	}else if(zj_sx==8){
		$(".kaijiang_result .shengxiao").text("羊");
	}else if(zj_sx==9){
		$(".kaijiang_result .shengxiao").text("猴");
	}else if(zj_sx==10){
		$(".kaijiang_result .shengxiao").text("鸡");
	}else if(zj_sx==11){
		$(".kaijiang_result .shengxiao").text("狗");
	}else if(zj_sx==12){
		$(".kaijiang_result .shengxiao").text("猪");
	}
	$(".duilian_title .text_result").text(zjDuilHpiSecond);
	$(".duilian_up .text_result").text(zjDuilUpSecond);
	$(".duilian_down .text_result").text(zjDuilDownSecond);
	$(".duilian_title .text_other").text(zjDuilHpiLast);
	$(".duilian_up .text_other").text(zjDuilUpLast);
	$(".duilian_down .text_other").text(zjDuilDownLast);
	kaijAnt()
	order()
}





























