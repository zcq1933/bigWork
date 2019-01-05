/*
* @Author: lenovo
* @Date:   2019-01-03 22:05:03
* @Last Modified by:   lenovo
* @Last Modified time: 2019-01-04 21:47:20
*/



var ml1 = document.getElementById("ml1");
var ml2 = document.getElementById("ml2");
var mlShow = document.getElementById("mlShow");
ml1.onclick = function() {
	mlShow.innerHTML = "\"150ml\"";
	ml1.style.background = "url(img/duigou.png) no-repeat right bottom";
	ml2.style.background = "none" 
}
ml2.onclick = function() {
	mlShow.innerHTML = "\"200ml\"";
	ml2.style.background = "url(img/duigou.png) no-repeat right bottom";
	ml1.style.background = "none";
}


var add = document.getElementById("add");
var minus = document.getElementById("minus");
var numShow = document.getElementById("numShow");
function check() {
	if(numShow.innerHTML == 1) {
		minus.cursor = "not-allowed";                                               
	}
}
check();
add.onclick = function() {
	numShow.innerHTML = parseInt(numShow.innerHTML) + 1;
}

minus.onclick = function() {
	if(parseInt(numShow.innerHTML)==1) {
		minus.cursor = "not-allowed";
	}
	else{
		numShow.innerHTML = parseInt(numShow.innerHTML) - 1;
	}
}

var zhezhao = document.getElementById("zhezhao");

function gouwu() {
	// alert("test");
	zhezhao.style.display='block';
}


function closeIt() {
	zhezhao.style.display='none';	
}


function continue1() {
	zhezhao.style.display='none';	
}

var small = document.getElementById("small-box");
var big = document.getElementById("big-box");
var imgShow = document.getElementById("img2");
var float = document.getElementById("float-box");
var imgSelect = document.getElementById("imgSelect");
function pic1on() {
	imgShow.style.left = -408 + 'px';
	imgSelect.src = "img/pp1.jpeg";
}

function pic2on() {
	imgShow.style.left = 0 + 'px';
	imgSelect.src = "img/pp0.jpeg";
}
var main = document.getElementById("mainBox");

small.onmousemove = function(ev) {
	big.style.display = "block";
	float.style.display = "block";
	imgSelect.style.left =  - (ev.clientX - main.offsetLeft - small.offsetLeft - float.offsetWidth/2) + "px";
	imgSelect.style.top =  - (ev.clientY - main.offsetTop - small.offsetTop -float.offsetWidth/2)  + "px";
	float.style.left = ev.clientX - main.offsetLeft - small.offsetLeft - float.offsetWidth/2 + "px";
	float.style.top = ev.clientY - main.offsetTop - small.offsetTop -float.offsetWidth/2 + "px";
}
small.onmouseout = function() {
	big.style.display = "none";
	float.style.display = "none";
}


