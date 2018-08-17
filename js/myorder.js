$(function(){
	var orderHtml="";
	var jlHtml="";
	$.post(zUrl+"index/userorder",{token:tk},function(data){
	  
	  var myOrderData=data.data;
	  console.log(myOrderData);
	  if(myOrderData==null||myOrderData==""||myOrderData=="undefind"){
	  	$(".order_none").show();
	  	$(".order_list").hide();
	  }else{
	    var myOrderDataLen=myOrderData.length
	  	$(".order_none").hide();
	  	$(".order_list").show();
	  	for(var od=0;od<myOrderDataLen;od++){
	  		var ltHtml="";
	  		var odDat=myOrderData[od];
	  		var odNum=odDat.number_id;             //期数
	  		var odGetMoney=odDat.g_money;          //奖励金豆
	  		var odTime=odDat.add_time;             //参与时间
	  		var odSmoney=odDat.s_money;            //投注金豆
	  		var odResult=odDat.dices_name;         //开奖结果
	  		var odResultText=odResult.split('');
	  		var odResultTextBg0=odResultText[0];
	  		var odResultTextBg1=odResultText[1];
	  		var odResultTextwf=odResultText[3];
	  		var odResultTextsx=odResultText[5];
	  		var odInfo=odDat.info;                 //投注明细
	  		var odInfoLen=odInfo.length;
	  		for(var ol=0;ol<odInfoLen;ol++){
	  			var ltKey=odInfo[ol].k;
	  			var ltText=odInfo[ol].n;
	  			var ltMoney=odInfo[ol].m;
	  			var ltWinMoney=odInfo[ol].w;
	  			ltHtml+='<div class="lt">';
	  			ltHtml+='<span class="touz_text">'+ltText+'</span>';
	  			ltHtml+='<span class="touz_gold">投入<em class="gold">'+ltMoney+'</em>金豆</span>';
	  			ltHtml+='<span class="success_gold">获得<em class="gold">'+ltWinMoney+'</em>金豆</span>';
	  			ltHtml+='</div>';
	  		}
	  		if(odGetMoney==0){
	  		  jlHtml='<span class="lose">未中奖</span>';	
	  		}else{
	  		  jlHtml='获得<span class="num">'+odGetMoney+'</span>金豆';	
	  		}
	  		
	  		orderHtml+='<li>';
	  		orderHtml+='<div class="order_list_top">';
	  		orderHtml+='<div class="list_top ov">';
	  		orderHtml+='<div class="fl">第<span class="num">'+odNum+'</span>期</div>';
	  		orderHtml+='<div class="fr">'+jlHtml+'</div>';
	  		orderHtml+='</div>';
	  		orderHtml+='<div class="list_dom ov">';
	  		orderHtml+='<div class="fl">'+odTime+'</div>';
	  		orderHtml+='<div class="fr">共投<span class="num">'+odSmoney+'</span>金豆</div>';
	  		orderHtml+='</div>';
	  		orderHtml+='</div>';
	  		orderHtml+='<div class="order_list_dom">';
	  		orderHtml+='<div class="order_result">本期结果：<span class="Jennifer">'+odResultTextBg0+odResultTextBg1+'</span>、<span class="wufu">'+odResultTextwf+'</span>、<span class="shengxiao">'+odResultTextsx+'</span></div>';
	  		orderHtml+='<div class="order_goldList">';
	  		orderHtml+=''+ltHtml+'';
	  		orderHtml+='</div>';
	  		orderHtml+='</div>';
	  		orderHtml+='</li>';
	  	}
	  	$(".luck_order .order_list").html(orderHtml);
	  }
	},"json")
})
