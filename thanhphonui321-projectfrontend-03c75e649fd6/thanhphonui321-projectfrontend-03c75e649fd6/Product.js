// JavaScript Document
function product(id, name, price, image, hang, bonus){
	this.id=id;
	this.name=name;
	this.price=price;
	this.image=image;
	this.hang=hang;
	this.bonus=bonus;
}
var arr= new Array(new product(1,"Xe điện <br> BRIDGESTONE",7,"img_product/1.png","NIJIA",1),
				   new product(2,"Xe Điện <br> Pro-Elephant",3,"img_product/2.png","SUPERMAN",0),
				   new product(3,"Xe Điện <br> 133F New Version 2017",5,"img_product/3.png","SUPERMAN",2),
				   new product(4,"Xe Điện <br> FH - 5 bình cao cấp",13,"img_product/4.png","NIJIA",2),
				   new product(5,"Xe Điện <br> TOP MEN 2017",23,"img_product/5.png","LION",1),
				   new product(6,"Xe Điện <br> Volt School 02",8,"img_product/6.png","TIGER",1),
				   new product(7,"Xe đạp điện <br> Xmen Port 1024",9,"img_product/7.png","ELEPHANT",0),
				   new product(8,"Xe điện <br> BRIDGESTONE MLI",4,"img_product/8.png","LION",2),
				   new product(9,"Xe điện <br> BRIDGESTONE SML",16,"img_product/9.png","NIJIA",1),
				   new product(10,"Xe đạp điện <br> M233S MINI Angel",6,"img_product/10.png","EAGLE",0),
				   new product(11,"Xe đạp điện <br> M133S MINI Evil",17,"img_product/11.png","TIGER",2),
				   new product(12,"Xe đạp điện <br> NIJIA 2017 Mammal",9,"img_product/12.png","NIJIA",1),
				   new product(13,"Xe điện <br> SEEYES MINI 4S",4,"img_product/13.png","SUPERMAN",0),
				   new product(14,"Xe điện <br> Xmen 01 No Exeption",19,"img_product/14.png","NIJIA",2),
				   new product(15,"Xe Đạp Điện <br> X3 Cao cấp Trắng Đỏ",12,"img_product/15.png","ELEPHANT",2),
				   new product(16,"Xe điện <br> Venus Đỏ New style",10,"img_product/16.png","EAGLE",1),
				   new product(17,"Xe Điện <br> 133F New Version",6,"img_product/17.png","ELEPHANT",1),
				   new product(18,"Xe Điện <br> FH - 4 bình cao cấp 2017",10,"img_product/18.png","LION",0));
function displayAll(){
	for (var i=0; i<arr.length;i++){
		
		// div 
		var div = document.createElement("div");
			div.className="brand";
			div.style.cursor="pointer";
			div.classList.add('hvr-border-fade');
		var img = document.createElement("img");
			img.src=arr[i].image;
		var divcon =document.createElement("div");
			divcon.className="divcon";
		var hoverDiv = document.createElement("div");
			hoverDiv.className="hoverDiv";
		div.appendChild(img);
		div.appendChild(divcon);
		div.appendChild(hoverDiv);
		
		
		// divcon
		var bonus = document.createElement("div");
			if (arr[i].bonus == 1 || arr[i].bonus == 2){
				if (arr[i].bonus == 1){
					bonus.style.backgroundColor="#f4ac2f";
					bonus.innerHTML = "NEW";
				}
				else {
					bonus.style.backgroundColor="#0eaa48";
					bonus.innerHTML = "HOT";
				}
			}
		var h3 = document.createElement("h3");
			h3.innerHTML=arr[i].name;
		var starReview =document.createElement("img");
			starReview.src = "2000px-5_stars.svg_.png";
		var price = document.createElement("p");
			price.innerHTML = arr[i].price + ".000.000₫";
		
		divcon.appendChild(bonus);
		divcon.appendChild(h3);
		divcon.appendChild(starReview);
		divcon.appendChild(price);
		
		
		// hoverDiv
		var nameHoverDiv = document.createElement("p");
			nameHoverDiv.innerHTML= arr[i].name;
		var choiceHoverDiv = document.createElement("ul");
			var li1 = document.createElement("li");
				li1.onmouseout = function() {chuThichVisible(10,this)};
				li1.onmouseover = function() {chuThichVisible(1,this)};
				li1.innerHTML="<img src='black.png' width='38%'>";
				li1.style.transition ="all 0.5s";
				choiceHoverDiv.appendChild(li1);
			var li2 = document.createElement("li");
				li2.onmouseout = function() {chuThichVisible(20,this)};
				li2.onmouseover = function() {chuThichVisible(2,this)};
				li2.innerHTML="<img src='blackCart.png' width='38%'>";
				li2.style.transition ="all 0.5s";
				choiceHoverDiv.appendChild(li2);
			var li3 = document.createElement("li");
				li3.onmouseout = function() {chuThichVisible(30,this)};
				li3.onmouseover = function() {chuThichVisible(3,this)};
				li3.innerHTML="<img src='blackMagnifying.png' width='38%'>";
				li3.style.transition ="all 0.5s";
				choiceHoverDiv.appendChild(li3);
		var chuThich =document.createElement("p");
		chuThich.innerHTML="";
		
		
		hoverDiv.appendChild(nameHoverDiv);
		hoverDiv.appendChild(choiceHoverDiv);
		hoverDiv.appendChild(chuThich);
		
		// body
		document.body.appendChild(div);
		
	}
}
function displayOne(obj){
	for (var i=0; i<1;i++){
		
		// div 
		var div = document.createElement("div");
			div.className="brandHome1";
			div.style.cursor="pointer";
			div.classList.add('hvr-border-fade');
		var img = document.createElement("img");
			img.src=arr[i].image;
		var divcon =document.createElement("div");
			divcon.className="divconHome1";
		var hoverDiv = document.createElement("div");
			hoverDiv.className="hoverDivHome1";
		div.appendChild(img);
		div.appendChild(divcon);
		div.appendChild(hoverDiv);
		
		
		// divcon
		var bonus = document.createElement("div");
			if (arr[i].bonus == 1 || arr[i].bonus == 2){
				if (arr[i].bonus == 1){
					bonus.style.backgroundColor="#f4ac2f";
					bonus.innerHTML = "NEW";
				}
				else {
					bonus.style.backgroundColor="#0eaa48";
					bonus.innerHTML = "HOT";
				}
			}
		var h3 = document.createElement("h3");
			h3.innerHTML=arr[i].name;
		var starReview =document.createElement("img");
			starReview.src = "2000px-5_stars.svg_.png";
		var price = document.createElement("p");
			price.innerHTML = arr[i].price + ".000.000₫";
		
		divcon.appendChild(bonus);
		divcon.appendChild(h3);
		divcon.appendChild(starReview);
		divcon.appendChild(price);
		
		
		// hoverDiv
		var nameHoverDiv = document.createElement("p");
			nameHoverDiv.innerHTML= arr[i].name;
		var choiceHoverDiv = document.createElement("ul");
			var li1 = document.createElement("li");
				li1.onmouseout = function() {chuThichVisible(10,this)};
				li1.onmouseover = function() {chuThichVisible(1,this)};
				li1.innerHTML="<img src='black.png' width='38%'>";
				li1.style.transition ="all 0.5s";
				choiceHoverDiv.appendChild(li1);
			var li2 = document.createElement("li");
				li2.onmouseout = function() {chuThichVisible(20,this)};
				li2.onmouseover = function() {chuThichVisible(2,this)};
				li2.innerHTML="<img src='blackCart.png' width='38%'>";
				li2.style.transition ="all 0.5s";
				choiceHoverDiv.appendChild(li2);
			var li3 = document.createElement("li");
				li3.onmouseout = function() {chuThichVisible(30,this)};
				li3.onmouseover = function() {chuThichVisible(3,this)};
				li3.innerHTML="<img src='blackMagnifying.png' width='38%'>";
				li3.style.transition ="all 0.5s";
				choiceHoverDiv.appendChild(li3);
		var chuThich =document.createElement("p");
		chuThich.innerHTML="";
		
		
		hoverDiv.appendChild(nameHoverDiv);
		hoverDiv.appendChild(choiceHoverDiv);
		hoverDiv.appendChild(chuThich);
		
		// body
		obj.appendChild(div);
		
	}
	
}


function chuThichVisible(number,obj){
	var result = obj.parentNode.parentNode.children[2];
	if (number == 10 || number == 20 || number == 30){
		result.innerHTML = "";
	}
	if (number == 10) {
		obj.innerHTML="<img src='black.png' width='38%'>";
	}
	if (number == 20) {
		obj.innerHTML="<img src='blackCart.png' width='38%'>";
	}
	if (number == 30) {
		obj.innerHTML="<img src='blackMagnifying.png' width='38%'>";
	}
	if (number == 1){
		obj.innerHTML="<img src='white.png' width='38%'>";
		result.innerHTML="Yêu thích";
	}
	if (number == 2){
		obj.innerHTML="<img src='whiteCart.png' width='38%'>";
		result.innerHTML="Chọn sản phẩm";
	}
	if (number == 3){
		obj.innerHTML="<img src='whiteMagnifying.png' width='38%'>";
		result.innerHTML="Chi tiết";
	}
}

				   