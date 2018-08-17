var tiyData,tiyDataData,tiyNumber,tiyGold;
var G_is_card=0;
$(function(){
	//体验卡
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
//          $(".foot_cm li.w"+tiyGold+"").append('<span class="ty_num">免x<em>'+tiyNumber+'</em></span>');
            $(".foot_cm li.w"+tiyGold+"").find(".ty_num").children("em").text(tiyNumber);
            var cmt=$(".foot_cm li.w"+tiyGold+"").find(".ty_num").children("em").text();
            if(typeof cmt=="string"){
            	$(".foot_cm li.w"+tiyGold+"").find(".ty_num").show();
            }else{
            	$(".foot_cm li.w"+tiyGold+"").find(".ty_num").hide();
            }
		}
	},"json");
})
