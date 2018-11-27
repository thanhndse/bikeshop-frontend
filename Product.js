// JavaScript Document
function product(id, name, price, image, hang, bonus) {
	this.id = id;
	this.name = name;
	this.price = price;
	this.image = image;
	this.hang = hang;
	this.bonus = bonus;
}
var arr = new Array(new product(1, "Xe điện <br> BRIDGESTONE", 7, "img_product/1.png", "NIJIA", 1),
	new product(2, "Xe Điện <br> Pro-Elephant", 3, "img_product/2.png", "SUPERMAN", 0),
	new product(3, "Xe Điện <br> 133F New Version 2017", 5, "img_product/3.png", "SUPERMAN", 2),
	new product(4, "Xe Điện <br> FH - 5 bình cao cấp", 13, "img_product/4.png", "NIJIA", 2),
	new product(5, "Xe Điện <br> TOP MEN 2017", 23, "img_product/5.png", "LION", 1),
	new product(6, "Xe Điện <br> Volt School 02", 8, "img_product/6.png", "TIGER", 1),
	new product(7, "Xe đạp điện <br> Xmen Port 1024", 9, "img_product/7.png", "ELEPHANT", 0),
	new product(8, "Xe điện <br> BRIDGESTONE MLI", 4, "img_product/8.png", "LION", 2),
	new product(9, "Xe điện <br> BRIDGESTONE SML", 16, "img_product/9.png", "NIJIA", 1),
	new product(10, "Xe đạp điện <br> M233S MINI Angel", 6, "img_product/10.png", "EAGLE", 0),
	new product(11, "Xe đạp điện <br> M133S MINI Evil", 17, "img_product/11.png", "TIGER", 2),
	new product(12, "Xe đạp điện <br> NIJIA 2017 Mammal", 9, "img_product/12.png", "NIJIA", 1),
	new product(13, "Xe điện <br> SEEYES MINI 4S", 4, "img_product/13.png", "SUPERMAN", 0),
	new product(14, "Xe điện <br> Xmen 01 No Exeption", 19, "img_product/14.png", "NIJIA", 2),
	new product(15, "Xe Đạp Điện <br> X3 Cao cấp Trắng Đỏ", 12, "img_product/15.png", "ELEPHANT", 2),
	new product(16, "Xe điện <br> Venus Đỏ New style", 10, "img_product/16.png", "EAGLE", 1),
	new product(17, "Xe Điện <br> 133F New Version", 6, "img_product/17.png", "ELEPHANT", 1),
	new product(18, "Xe Điện <br> FH - 4 bình cao cấp 2017", 10, "img_product/18.png", "LION", 0));
function khoitao(){
	if (window.localStorage.getItem("count") == null){
		window.localStorage.setItem("count",0);
	}
}
function add(i){
	var kq=findProduct(arr[i].id);
	if (kq==-1)
		{
			var c=window.localStorage.getItem("count");
			window.localStorage.setItem(c, arr[i].id+","+arr[i].name+","+arr[i].price+","+arr[i].image+","+arr[i].hang+","+arr[i].bonus+",1");
			c++;
			window.localStorage.setItem("count", c);
			window.alert("Sản phẩm của bạn đã được thêm vào giỏ hàng!!");
		}
	else
		window.alert("Sản phẩm này đã tồn tại trong giỏ hàng!!");
	
	
}
function hienChiTiet(i){
	window.localStorage.setItem("chiTiet",i);
	window.open("chiTietSanPham.html");
}
function loadSanPham(){
	var chiTiet = window.localStorage.getItem("chiTiet");
	var proInfor = arr[chiTiet];
	document.getElementsByClassName("chiTietChinhImage")[0].children[0].src=proInfor.image;
	var chiTietChinhInfor = document.getElementsByClassName("chiTietChinhInfor")[0];
	chiTietChinhInfor.children[0].innerHTML=proInfor.name;
	chiTietChinhInfor.children[1].innerHTML="Hãng: "+proInfor.hang+" | Mã sản phẩm: " +proInfor.id;
	chiTietChinhInfor.children[3].innerHTML= proInfor.price +".000.000 <span>(Đã bao gồm vat)</span>";
	chiTietChinhInfor.children[8].addEventListener("click",function(){add(chiTiet);});
	var chiTietChinh2 = document.getElementsByClassName("chiTietChinh2")[0];
	chiTietChinh2.children[1].children[0].innerHTML=proInfor.name;
	chiTietChinh2.children[1].children[1].innerHTML=proInfor.name;
	chiTietChinh2.children[1].children[2].innerHTML=proInfor.name;
	
	
}

function findProduct(idcantim){
	c = window.localStorage.getItem("count");
	if (c != null){
		for (var i=0;i<c;i++){
			var s=window.localStorage.getItem(i);
			if (s != null){
				var mangtam = s.split(",");	
				if (mangtam[0] == idcantim){
					return i;
				}
			}
		}
	}
	return -1;
}

function display5(){
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].price <= 5){
		displayProduct(i);
	}
}
}
function displayProduct(i){
	var div = document.createElement("div");
		div.className = "brand";
		div.style.cursor = "pointer";
		div.classList.add('hvr-border-fade');
		var img = document.createElement("img");
		img.src = arr[i].image;
		var divcon = document.createElement("div");
		divcon.className = "divcon";
		var hoverDiv = document.createElement("div");
		hoverDiv.className = "hoverDiv";
		div.appendChild(img);
		div.appendChild(divcon);
		div.appendChild(hoverDiv);


		// divcon
		var bonus = document.createElement("div");
		if (arr[i].bonus == 1 || arr[i].bonus == 2) {
			if (arr[i].bonus == 1) {
				bonus.style.backgroundColor = "#f4ac2f";
				bonus.innerHTML = "NEW";
			} else {
				bonus.style.backgroundColor = "#0eaa48";
				bonus.innerHTML = "HOT";
			}
		}
		var h3 = document.createElement("h3");
		h3.innerHTML = arr[i].name;
		var starReview = document.createElement("img");
		starReview.src = "2000px-5_stars.svg_.png";
		var price = document.createElement("p");
		price.innerHTML = arr[i].price + ".000.000₫";

		divcon.appendChild(bonus);
		divcon.appendChild(h3);
		divcon.appendChild(starReview);
		divcon.appendChild(price);


		// hoverDiv
		var nameHoverDiv = document.createElement("p");
		nameHoverDiv.innerHTML = arr[i].name;
		var choiceHoverDiv = document.createElement("ul");
		var li1 = document.createElement("li");
		li1.onmouseout = function () {
			chuThichVisible(10, this);
		};
		li1.onmouseover = function () {
			chuThichVisible(1, this);
		};
		li1.innerHTML = "<img src='black.png' width='38%'>";
		li1.style.transition = "all 0.5s";
		choiceHoverDiv.appendChild(li1);
		var li2 = document.createElement("li");
		li2.onmouseout = function () {
			chuThichVisible(20, this);
		};
		li2.addEventListener("click",function(){add(i);});
		li2.onmouseover = function () {
			chuThichVisible(2, this);
		};
		li2.innerHTML = "<img src='blackCart.png' width='38%'>";
		li2.style.transition = "all 0.5s";
		choiceHoverDiv.appendChild(li2);
		var li3 = document.createElement("li");
		li3.onmouseout = function () {
			chuThichVisible(30, this);
		};
		li3.onmouseover = function () {
			chuThichVisible(3, this);
		};
		li3.innerHTML = "<img src='blackMagnifying.png' width='38%'>";
		li3.style.transition = "all 0.5s";
		li3.addEventListener("click",function(){hienChiTiet(i);});
		choiceHoverDiv.appendChild(li3);
		var chuThich = document.createElement("p");
		chuThich.innerHTML = "";


		hoverDiv.appendChild(nameHoverDiv);
		hoverDiv.appendChild(choiceHoverDiv);
		hoverDiv.appendChild(chuThich);

		// body
		document.body.appendChild(div);
}
function display10tr(){
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].price > 5 && arr[i].price <=10){
		displayProduct(i);

	}
}
}
function display15tr(){
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].price >10){
		displayProduct(i);

	}
}
}
function displayAll() {
	for (var i = 0; i < arr.length; i++) {
		displayProduct(i);

	}
}

function displayOne(id, loai, i) {
	
	// div 
	var div = document.createElement("div");
	if (loai == 1)
		div.className = "brandHome1";
	if (loai == 2)
		div.className = "brandHome2";
	div.style.cursor = "pointer";
	div.classList.add('hvr-border-fade');
	var img = document.createElement("img");
	img.src = arr[i].image;
	var divcon = document.createElement("div");
	if (loai == 1)
		divcon.className = "divconHome1";
	if (loai == 2)
		divcon.className = "divconHome2";
	var hoverDiv = document.createElement("div");
	if (loai == 1)
		hoverDiv.className = "hoverDivHome1";
	if (loai == 2)
		hoverDiv.className = "hoverDivHome2";
	div.appendChild(img);
	div.appendChild(divcon);
	div.appendChild(hoverDiv);


	// divcon
	var bonus = document.createElement("div");
	if (arr[i].bonus == 1 || arr[i].bonus == 2) {
		if (arr[i].bonus == 1) {
			bonus.style.backgroundColor = "#f4ac2f";
			bonus.innerHTML = "NEW";
		} else {
			bonus.style.backgroundColor = "#0eaa48";
			bonus.innerHTML = "HOT";
		}
	}
	var h3 = document.createElement("h3");
	h3.innerHTML = arr[i].name;
	var starReview = document.createElement("img");
	starReview.src = "2000px-5_stars.svg_.png";
	var price = document.createElement("p");
	price.innerHTML = arr[i].price + ".000.000₫";

	divcon.appendChild(bonus);
	divcon.appendChild(h3);
	divcon.appendChild(starReview);
	divcon.appendChild(price);


	// hoverDiv
	var nameHoverDiv = document.createElement("p");
	nameHoverDiv.innerHTML = arr[i].name;
	var choiceHoverDiv = document.createElement("ul");
	var li1 = document.createElement("li");
	li1.onmouseout = function () {
		chuThichVisible(10, this);
	};
	li1.onmouseover = function () {
		chuThichVisible(1, this);
	};
	li1.innerHTML = "<img src='black.png' width='38%'>";
	li1.style.transition = "all 0.5s";
	choiceHoverDiv.appendChild(li1);
	var li2 = document.createElement("li");
	li2.onmouseout = function () {
		chuThichVisible(20, this);
	};
	li2.onmouseover = function () {
		chuThichVisible(2, this);
	};
	li2.addEventListener("click",function(){add(i);});
	li2.innerHTML = "<img src='blackCart.png' width='38%'>";
	li2.style.transition = "all 0.5s";
	choiceHoverDiv.appendChild(li2);
	var li3 = document.createElement("li");
	li3.onmouseout = function () {
		chuThichVisible(30, this);
	};
	li3.onmouseover = function () {
		chuThichVisible(3, this);
	};
	li3.addEventListener("click",function(){hienChiTiet(i);});
	li3.innerHTML = "<img src='blackMagnifying.png' width='38%'>";
	li3.style.transition = "all 0.5s";
	choiceHoverDiv.appendChild(li3);
	var chuThich = document.createElement("p");
	chuThich.innerHTML = "";


	hoverDiv.appendChild(nameHoverDiv);
	hoverDiv.appendChild(choiceHoverDiv);
	hoverDiv.appendChild(chuThich);

	// body
	var obj = document.getElementById(id);
	obj.appendChild(div);


}


function chuThichVisible(number, obj) {
	var result = obj.parentNode.parentNode.children[2];
	if (number == 10 || number == 20 || number == 30) {
		result.innerHTML = "";
	}
	if (number == 10) {
		obj.innerHTML = "<img src='black.png' width='38%'>";
	}
	if (number == 20) {
		obj.innerHTML = "<img src='blackCart.png' width='38%'>";
	}
	if (number == 30) {
		obj.innerHTML = "<img src='blackMagnifying.png' width='38%'>";
	}
	if (number == 1) {
		obj.innerHTML = "<img src='white.png' width='38%'>";
		result.innerHTML = "Yêu thích";
	}
	if (number == 2) {
		obj.innerHTML = "<img src='whiteCart.png' width='38%'>";
		result.innerHTML = "Chọn sản phẩm";
	}
	if (number == 3) {
		obj.innerHTML = "<img src='whiteMagnifying.png' width='38%'>";
		result.innerHTML = "Chi tiết";
	}
}


function showgiohang()
{
	var sum=0;
	var tam="<table>";
	tam = tam + "<caption> Giỏ hàng của bạn </caption>";
	tam = tam + "<tr>";
	tam = tam + "<th>Ảnh sản phẩm</th>";
	tam = tam + "<th>Thông tin</th>";
	tam = tam + "<th>Màu sắc</th>";
	tam = tam + "<th>Số lượng</th>";
	tam = tam + "<th>Đơn giá</th>";
	tam = tam + "<th>Thành tiền</th>";
	tam = tam + "<th></th>";
	tam = tam + "</tr>";
	
	var c = window.localStorage.getItem("count");
	if (c!=null)
		for (var i=0; i<c; i++)
		{
			var s = window.localStorage.getItem(i);
			if (s!=null)
				{
					var arr=s.split(",");
					tam = tam + "<tr>";
					tam = tam+ "<td>" + "<img src='"+arr[3]+"'>" + "</td>";
					tam = tam + "<td>" + arr[1] + "</td>";
					tam = tam + "<td><select><option value='Do'>Đỏ</option><option value='Cam'>Cam</option><option value='Vang'>Vàng</option><option value='Tim'>Tím</option></select></td>";
					tam = tam + "<td><input type='number' min='1' max='10' value='"+arr[6]+"' onchange='capnhat("+i+", this)' /></td>";			
					tam = tam+ "<td>" + arr[2] + ".000.000</td>";
					tam = tam+ "<td>" + arr[2]*arr[6] + ".000.000</td>";
					tam = tam+"<td><input type='button' value='X' onclick='xoa("+i+")'/></td>";
					tam = tam + "</tr>";
					sum = sum + arr[2]*arr[6];	
				}
			
		}
	tam = tam + "</table>";
	tam = tam + "<p>Tổng tiền: " + sum + ".000.000 VND</p>";
	tam = tam + "<div onClick='thanhToan()'>Thanh Toán</div>"
	var div=document.getElementById("gioHang1");
	div.innerHTML = tam;
}
function thanhToan(){
	alert("Cảm ơn bạn đã mua sắm ở shop của chúng tôi, chúc các bạn một ngày tốt lành");
	localStorage.clear();
	window.open("Home.html");
	showgiohang();
}
function capnhat(i, x) // i là dòng cần sửa, x là input type=number
{
	var s=window.localStorage.getItem(i);
	var arr=s.split(",");
	arr[6] = x.value;
	window.localStorage.setItem(i, arr[0]+","+arr[1]+","+arr[2]+","+arr[3]+","+arr[4]+","+arr[5]+","+arr[6]);
	showgiohang();
}
function xoa(i)
{
	var traloi = window.confirm("bạn có chắc muốn bỏ sản phẩm này");
	if (traloi==true)
		{
			window.localStorage.removeItem(i);
			showgiohang();
		}
	//showgiohang();
}

