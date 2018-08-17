$(function(){
  //初始化
	$.post(zUrl+"index/config",{},function(data){
		if(tk== ""){
	  	 $("#myGold").text(0);             
      }
		console.log(data);
		var bi=data.bi_list;
		var biText;
		var biLen=bi.length;
		var cmHtml='';
		var plText=data.bonus;
		pld1=plText.a;             //a
		pld2=plText.b;             //b
		pld3=plText.c;             //c
		pl1=plText.ab;             //ab
		pl2=plText.ac;             //ac
		pl3=plText.bc;             //bc
		pl4=plText.abc;            //abc
		//获取底部筹码值
		for(var cm=0;cm<biLen;cm++){
			biText=bi[cm];
			cmHtml+='<li class="w'+biText+'">';
			cmHtml+='<div class="cont">';
			cmHtml+='<span class="ty_num">免x<em></em></span>';
			cmHtml+='<img src="images/touz_beij.png">';
			cmHtml+='<div class="cmNumber">'+biText+'</div>';
			cmHtml+='</div>';
			cmHtml+='</li>';
			$(".foot_cm").html(cmHtml);
		}
		$(".foot_cm li:first").addClass("active");
		$(".xfg_textActive .beilv").text("x"+pl1);
		$(".xfg_text .beilv").text("x"+pl1);
		$(".dfg_textActive .beilv").text("x"+pl4);
		$(".dfg_text .beilv").text("x"+pl4);
		$(".luck_jennifer i.beilv").text("x"+pld1);
		$(".luck_wufu i.beilv").text("x"+pld2);
		$(".luck_shengxiao i.beilv").text("x"+pld3);
		params={}
		params.request="index/overlimittime";
		params.token=tk;
		websocketSend(params);
	},"json");
	//获取玩家信息
	$.post(zUrl+"index/memberinfo",{token:tk},function(data){
//		console.log(data);
		var playData=data;
		var playName=playData.nickname;
		var playImg=playData.img;
		var myGold=playData.give_money;
		$("#myGold").text(myGold);
	},"json");	
	
})

































