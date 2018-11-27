// JavaScript Document
var count = 0;
var srcImg=["url(slider_1.jpg)","url(slider_2.jpg)","url(slider_3.jpg)"];
function changeLeft(){
	var obj=document.getElementById("bigImage");	
	if (count > 0){
		count--;
	}
	else {
		count = srcImg.length-1;
	}
	obj.style.backgroundImage=srcImg[count];
}
function changeRight(){
	var obj=document.getElementById("bigImage");
	if (count<srcImg.length-1){
		count++;
	}
	else {
		count = 0;
	}
	obj.style.backgroundImage=srcImg[count];
}

function changeBgr(flag) {
	var arrow = document.getElementsByClassName("arrow");
	var i;
	if (flag==1){
		for (i=0;i<arrow.length;i++){
			arrow[i].style.backgroundColor="#F2F74A";
			arrow[i].style.paddingTop="8px";
		}
		document.getElementById("LeftArrow").src="left_arrow1600.png";
		document.getElementById("RightArrow").src="right_arrow1600.png";
	}
	else 
		{
			for (i=0;i<arrow.length;i++){
				arrow[i].style.backgroundColor="#6A6A6A";
				arrow[i].style.paddingTop="14px";
			}
			document.getElementById("LeftArrow").src="arrow-23255_960_720.png";
			document.getElementById("RightArrow").src="arrow-23277_640.png";
		}
	
}

function fixHeader(){
	var header = document.getElementById("header");
	if (window.scrollY >= 20){
		header.style.position="fixed";
		header.style.top="0px";
		header.style.width="86%";
	}
	else {
		document.getElementById("header").style.position="";
		header.style.top="";
		header.style.width="100%";
	}
}
var srcImageHinhMau = document.getElementsByClassName("hinhMau");
var countHinhMau;
function hien(hinhnhoDiv,hientai){
	var hinhlon = document.getElementById("hinhLonMau");
	hinhlon.src=hinhnhoDiv.children[0].src;
	var divphu=document.getElementById("viewOurPhoto");
	divphu.style.visibility="visible";
	document.getElementById("ourPhoto").style.visibility="hidden";
	countHinhMau = hientai;
}

function changeLeftHinhMau(){
	var obj=document.getElementById("hinhLonMau");	
	if (countHinhMau > 0){
		countHinhMau--;
		obj.src=srcImageHinhMau[countHinhMau].src;
	}
}
function changeRightHinhMau(){
	var obj=document.getElementById("hinhLonMau");
	if (countHinhMau<srcImageHinhMau.length-1){
		countHinhMau++;
		obj.src=srcImageHinhMau[countHinhMau].src;
	}
}
function dongHinhMau(){
	document.getElementById("viewOurPhoto").style.visibility="hidden";
	document.getElementById("ourPhoto").style.visibility="visible";
}