$(function(){
	function getCookie(c_name){
	　　　　if (document.cookie.length>0){　　
	　　　　　　c_start=document.cookie.indexOf(c_name + "=")　　
	　　　　　　if (c_start!=-1){ 
	　　　　　　　　c_start=c_start + c_name.length+1　　
	　　　　　　　　c_end=document.cookie.indexOf(";",c_start)　　
	　　　　　　　　if (c_end==-1) c_end=document.cookie.length　　
	　　　　　　　　return unescape(document.cookie.substring(c_start,c_end))　
	　　　　　　} 
	　　　　}
	　　　　return ""
	　　}　　
	
	function setCookie(c_name, value, expiredays){
	　　　var exdate=new Date();
	　　　exdate.setDate(exdate.getDate() + expiredays);
	　　　document.cookie=c_name+ "=" + escape(value) + ((expiredays==null) ? "" : ";expires="+exdate.toGMTString());
	    
	}
	
	
	$(".content_herself .btn_res").click(function(){
		setCookie('atHB','1',20);
		if(getCookie('atHB')==1){
			setTimeout(function(){
				$(".content_herself .btn_res").hide()
			},500)
		};
	});
	if(getCookie('atHB')==1){
		$(".content_herself .btn_res").hide()
	};
	
	$(".content_GoldenBoy .btn_res").click(function(){
		setCookie('atGB','1',20);
		if(getCookie('atGB')==1){
			setTimeout(function(){
				$(".content_GoldenBoy .btn_res").hide()
			},500)
		}
	});
	if(getCookie('atGB')==1){
		$(".content_GoldenBoy .btn_res").hide()
	}

})



