var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3F980a47baa3b028fee8b94644df33e9b8' type='text/javascript'%3E%3C/script%3E"));

$(document).ready(function(){                            //主体元素
	$(window).scroll(function(){
		var srollPos = $(window).scrollTop();    //滚动条距顶部距离(页面超出窗口的高度)				
		
		if(srollPos!="0"){
			$(".logo").css("opacity","0.8");
			$(".logo").css("filter","alpha(opacity=80)");
		}
		else{				
			$(".logo").css("opacity","1");
			$(".logo").css("filter","alpha(opacity=100)");
		}
	});
});
		
//服务领域图片切换
function Hover(obj,src){
	$(obj).find("img").attr("src",src+"_h.png");
	$(obj).css("background","#264b99")
}
function Normal(obj,src){
	$(obj).find("img").attr("src",src+".png");
	$(obj).css("background","#eef2f5")
}
function Tab(obj,src){//鼠标点击
	$(".qkly div").attr("class","span4");
	$(obj).attr("class","span4 active");
	var i=101
	$(".span4 img").each(function(){
		$(this).attr("src","../../static/img/"+i+".png")
		i++;
	});
	$(obj).find("img").attr("src","../../static/img/"+src+"_h.png")
	$(".Tab").hide();
	$("#"+src).show();
}
function Tab3(obj,src){//鼠标经过
	$(".qkly div").attr("class","span4");
	$(obj).attr("class","span4 active");
	var i=101
	$(".span4 img").each(function(){
		$(this).attr("src","../../static/img/"+i+".png")
		i++;
	});
	$(obj).find("img").attr("src","../../static/img/"+src+"_h.png")
	
}
function resetTab(){//鼠标离开
	for(i=101;i<104;i++){
		if($("#"+i).css("display")=="block"){
			$("#Tab"+i).find("img").attr("src","../../static/img/"+i+"_h.png")
			$("#Tab"+i).attr("class","span4 active");
		}
		else{
			$("#Tab"+i).find("img").attr("src","../../static/img/"+i+".png")
			$("#Tab"+i).attr("class","span4");
			
		}
	}	
}
function Tab2(obj,src){
	$(".qkly div").attr("class","span33");
	$(obj).attr("class","span33 active");	
	$(".Tab").hide();
	$("#"+src).show();
}
function Tab4(obj,src){
	$(".qkly div").attr("class","span33");
	$(obj).attr("class","span33 active");	
}
function resetTab2(){//鼠标离开
	for(i=101;i<105;i++){
		if($("#"+i).css("display")=="block"){
			$("#Tab"+i).attr("class","span33 active");
		}
		else{
			$("#Tab"+i).attr("class","span33");
			
		}
	}	
}
//关于我们div切换
function change_div(obj,id){
	var list=document.getElementById("gywm-list").getElementsByTagName("li");
	for(i=0;i<list.length;i++){
		list[i].className="";
	}
	$(obj).attr('css','active');
	$("#"+id).show();
}
//显示具体信息
function show(id){	
	$(".right").hide();
	$("#"+id).show();
}
//切换语言
function showYY(){
	$("#yyBig").animate({marginLeft:"0px"},"1000");
	$("#yySmall").css("left","-55px");
}
function hideYY(){
	$("#yyBig").animate({marginLeft:"-190px"},"500");
	setTimeout("$('#yySmall').animate({left:'0px'},'500')","300");
}
//=================================== SLIDESHOW ===================================//
function imgs(){
	jQuery(".box_skitter_large").skitter({
		animation: "random",
		interval: 3000,
		numbers: false, 
		numbers_align: "right", 
		hideTools: false,
		controls: false,
		focus: false,
		focus_position: true,
		width_label:'100%', 
		enable_navigation_keys: true,   
		progressbar: false
	});
}
// ****************滚动窗口来判断按钮显示或隐藏*********************
$(window).scroll(function() {
if ($(this).scrollTop() > 150) {
$('.back-to-top').fadeIn(100);
} else {
$('.back-to-top').fadeOut(100);
}
});

// jQuery实现动画滚动
$('.back-to-top').click(function(event) {
event.preventDefault();
$('html, body').animate({scrollTop: 0}, 500);
})
function change_div(obj,id){
$(obj).parent().find('li').attr('class','');
$(obj).attr('class','active');
$('.tab').hide();
$('#'+id).show();
}

//************************员工风采************************
function addLoadEvent(func){
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function(){
			oldonload();
			func();
		}
	}
}

function moveElement(elementID,final_x,final_y,interval) {
  if (!document.getElementById) return false;
  if (!document.getElementById(elementID)) return false;
  var elem = document.getElementById(elementID);
  if (elem.movement) {
    clearTimeout(elem.movement);
  }
  if (!elem.style.left) {
    elem.style.left = "0px";
  }
  if (!elem.style.top) {
    elem.style.top = "0px";
  }
  var xpos = parseInt(elem.style.left);
  var ypos = parseInt(elem.style.top);
  if (xpos == final_x && ypos == final_y) {
		return true;
  }
  if (xpos < final_x) {
    var dist = Math.ceil((final_x - xpos)/10);
    xpos = xpos + dist;
  }
  if (xpos > final_x) {
    var dist = Math.ceil((xpos - final_x)/10);
    xpos = xpos - dist;
  }
  if (ypos < final_y) {
    var dist = Math.ceil((final_y - ypos)/10);
    ypos = ypos + dist;
  }
  if (ypos > final_y) {
    var dist = Math.ceil((ypos - final_y)/10);
    ypos = ypos - dist;
  }
  elem.style.left = xpos + "px";
  elem.style.top = ypos + "px";
  var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
  elem.movement = setTimeout(repeat,interval);
}

function classNormal(iFocusBtnID){
	var iFocusBtns= document.getElementById(iFocusBtnID).getElementsByTagName('li');
	//var iFocusTxs = $(iFocusTxID).getElementsByTagName('li');
	for(var i=0; i<iFocusBtns.length; i++) {
		iFocusBtns[i].className='normal';
		//iFocusTxs[i].className='normal';
	}
}

function classCurrent(iFocusBtnID,n){
	var iFocusBtns= document.getElementById(iFocusBtnID).getElementsByTagName('li');
	//var iFocusTxs = $(iFocusTxID).getElementsByTagName('li');
	iFocusBtns[n].className='current';
	//iFocusTxs[n].className='current';
}

function iFocusChange() {
	if(!document.getElementById('ifocus')) return false;
	document.getElementById('ifocus').onmouseover = function(){atuokey = true};
	document.getElementById('ifocus').onmouseout = function(){atuokey = false};
	var iFocusBtns =  document.getElementById('ifocus_btn').getElementsByTagName('li');
	var listLength = iFocusBtns.length;
	iFocusBtns[0].onmouseover = function() {
		moveElement('ifocus_piclist',0,0,5);
		classNormal('ifocus_btn');
		classCurrent('ifocus_btn',0);
	}
	if (listLength>=2) {
		iFocusBtns[1].onmouseover = function() {
			moveElement('ifocus_piclist',0,-350,5);
			classNormal('ifocus_btn');
			classCurrent('ifocus_btn',1);
		}
	}
	if (listLength>=3) {
		iFocusBtns[2].onmouseover = function() {
			moveElement('ifocus_piclist',0,-700,5);
			classNormal('ifocus_btn');
			classCurrent('ifocus_btn',2);
		}
	}
	if (listLength>=4) {
		iFocusBtns[3].onmouseover = function() {
			moveElement('ifocus_piclist',0,-1050,5);
			classNormal('ifocus_btn');
			classCurrent('ifocus_btn',3);
		}
	}
}

setInterval('autoiFocus()',5000);
var atuokey = false;
function autoiFocus() {
	if(!document.getElementById('ifocus')) return false;
	if(atuokey) return false;
	var focusBtnList = document.getElementById('ifocus_btn').getElementsByTagName('li');
	var listLength = focusBtnList.length;
	for(var i=0; i<listLength; i++) {
		if (focusBtnList[i].className == 'current') var currentNum = i;
	}
	if (currentNum==0&&listLength!=1 ){
		moveElement('ifocus_piclist',0,-350,5);
		classNormal('ifocus_btn');
		classCurrent('ifocus_btn',1);
	}
	if (currentNum==1&&listLength!=2 ){
		moveElement('ifocus_piclist',0,-700,5);
		classNormal('ifocus_btn');
		classCurrent('ifocus_btn',2);
	}
	if (currentNum==2&&listLength!=3 ){
		moveElement('ifocus_piclist',0,-1050,5);
		classNormal('ifocus_btn');
		classCurrent('ifocus_btn',3);
	}
	if (currentNum==3 ){
		moveElement('ifocus_piclist',0,0,5);
		classNormal('ifocus_btn');
		classCurrent('ifocus_btn',0);
	}
	if (currentNum==1&&listLength==2 ){
		moveElement('ifocus_piclist',0,0,5);
		classNormal('ifocus_btn');
		classCurrent('ifocus_btn',0);
	}
	if (currentNum==2&&listLength==3 ){
		moveElement('ifocus_piclist',0,0,5);
		classNormal('ifocus_btn');
		classCurrent('ifocus_btn',0);
	}
}
addLoadEvent(iFocusChange);