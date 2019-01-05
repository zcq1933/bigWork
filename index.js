/*
* @Author: lenovo
* @Date:   2018-12-17 20:23:49
* @Last Modified by:   lenovo
* @Last Modified time: 2019-01-05 09:37:22
*/
var wrap = document.querySelector(".wrap");
var next = document.querySelector(".arrow_right");
var prev = document.querySelector(".arrow_left");

next.onclick = function () {
	next_pic();
}

prev.onclick = function () {
	prev_piv()
}
function next_pic() {
	var newLeft;
	if(wrap.style.left == "-5600px") {
		newLeft = -1600;
	}else {
		newLeft = parseInt(wrap.style.left) - 800;
	}
	wrap.style.left = newLeft + "px";
	index ++ ;
	if(index>5) {
		index =  0;
	}
	showCurrentDot();
}

function prev_piv() {
	var newLeft;
	if(wrap.style.left == "0px") {
		newLeft = -1000;
	}else{
		newLeft = parseInt(wrap.style.left) + 800;
	}
	wrap.style.left = newLeft + "px";
	index--;
	if(index < 0) {
		index = 5;
	}
	showCurrentDot();
}

// 自动循环切换
var timer = null;
function autoPlay () {
	timer = setInterval(function() {
		next_pic();
	},5000);
}
autoPlay();

// 当鼠标滑过后取消自动切换
var container = document.querySelector(".container");
container.onmouseover = function() {
	clearInterval(timer);
}

container.onmouseout = function() {
	autoPlay();
}

var index = 0;
var dots = document.getElementsByTagName("span");
function showCurrentDot() {
	for(var i = 0,len = dots.length;i<len;i++) {
		dots[i].className = "";
	}
	dots[index].className = "on";
}

for (var i = 0,len = dots.length;i < len;i++) {
	(function(i) {
		dots[i].onclick = function() {
			var dis = index - i;
			if(index == 6 && parseInt(wrap.style.left) != -4800) {
				dis = dis - 6;
			}
			if(index == 0 && parseInt(wrap.style.left) != -800) {
				dis = dis + 6;
			}

			wrap.style.left = (parseInt(wrap.style.left) + dis*600) + "px";
			index = i ;
			showCurrentDot();
		}
	})
}

//选中后

var input = document.getElementById("input");
input.onfocus = function() {
	if(this.value == "请输入手机号") {
		this.value = "";
	}
}

input.onblur = function() {
	if(this.value == "") {
		this.value = "请输入手机号";
	}
}


function showFee(i) {
	document.getElementById("fee").innerHTML = "¥" + i;
	console.log(i);

}


window.onload = function() {
	var sus = document.getElementById("sus");
	window.onscroll = function() {
		var st = document.documentElement.scrollTop;
		console.log(st);
	if(st>10) {
		sus.style.position = "fixed";
	}
	else {
		sus.style.position = "static";
	}

	}
}


var rrr1 = document.getElementById("rrr1");
var rrr2 = document.getElementById("rrr2");
var rrr3 = document.getElementById("rrr3");
var rrr4 = document.getElementById("rrr4");
rrr1.onmouseover = function() {
	// alert("123");
	rrr1.style.right = 0 + "px";
}
rrr2.onmouseover = function() {
	// alert("123");
	rrr1.style.right = 0 + "px";
}
rrr1.onmouseover = function() {
	// alert("123");
	rrr1.style.right = 0 + "px";
}

