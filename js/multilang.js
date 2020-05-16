var en = document.getElementsByClassName("en");
var zh = document.getElementsByClassName("zh");
var cl = document.getElementsByClassName("cl");
var cl2 = document.getElementsByClassName("cl2");
//Change to Chinese
function changetozh(){
	for (var i=0;i<en.length;i+=1){
    en[i].style.display = "none";
    }
	for (var i=0;i<zh.length;i+=1){
    zh[i].style.display = "block";
    }
	for (var i=0;i<cl.length;i+=1){
    cl[i].style.display = "none";
    }
	for (var i=0;i<cl2.length;i+=1){
    cl2[i].style.display = "block";
    }
}
//Change to English
function changetoen(){
	for (var i=0;i<en.length;i+=1){
    en[i].style.display = "block";
    }
	for (var i=0;i<zh.length;i+=1){
    zh[i].style.display = "none";
    }
	for (var i=0;i<cl.length;i+=1){
    cl[i].style.display = "block";
    }
	for (var i=0;i<cl2.length;i+=1){
    cl2[i].style.display = "none";
    }
}
