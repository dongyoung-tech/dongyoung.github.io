const clockHadnler=document.querySelector(".clock");
const clocktitle=document.querySelector(".clock-title");


var menubox=document.querySelector('.menubox'),
overlay=document.querySelector('.overlay'),
contentslist=document.querySelector('.sidemenu');
function menumove (){  
    contentslist.style.left="0";
    overlay.style.display="inline-block";
};
function sidemove (){
  contentslist.style.left="-100%";
  overlay.style.display="none";
};



overlay.addEventListener('click',sidemove);
var main=document.querySelectorAll('article'),
mainheight=800;

var topbox=document.querySelector(".topbox"),
shortcuts=document.querySelectorAll(".header_menu li")
body=document.querySelector("body");



for(var i=0; i<main.length; i++){
shortcuts[i].addEventListener('click',function(event){
  a=event.target.getAttribute("data-value");
  main[a].scrollIntoView(true);
});
}


var sidecon=document.querySelector(".side_con");
sidecon.addEventListener("click",function(){
  window.scrollTo({top:0, behavior:"smooth"});
});



var projectbox=document.querySelectorAll(".project_box"),
    minimenu=document.querySelector(".mini_menu");
    overlay=document.querySelector(".mini_menu_overlay"),
    deletebtn=document.querySelector(".delete_btn");


var result={
            0:{"topic":"구미투어 사이트(제작 중단)","explain":"구미시를 소개하고자 만든 사이트 입니다","explain2":"사용언어:HTML,CSS,JAVASCRIPT","img":"금오산.jpg","href":"https://gumitour.netlify.app/"},
            1:{"topic":"MBTI 성향테스트","explain":"MBTI를 이용해 자신과 어울리는 음료를 찾아주는 사이트입니다","explain2":"사용언어:HTML,CSS,JAVASCRIPT","img":"juicepage.jpg","href":"https://foodofme.netlify.app/"},
            2:{"topic":"포트폴리오 사이트","explain":"이동영 의 포트폴리오 사이트 입니다","explain2":"사용언어:HTML,CSS,JAVASCRIPT","img":"main.jpg","href":"https://dongyoungpolio.netlify.app/"}
          }
for(var i=0; i<projectbox.length; i++){
projectbox[i].addEventListener("click",function(event){
  minimenu.style.display="inline-block";
  overlay.style.display="inline-block";
  deletebtn.style.display="inline-block";
  a=event.target.getAttribute("data-value");
  document.querySelector("#img").setAttribute("src",result[a]["img"]);
  document.querySelector("#topic").innerHTML=result[a]["topic"];
  document.querySelector("#explain").innerHTML=result[a]["explain"];
  document.querySelector("#explain2").innerHTML=result[a]["explain2"];
  document.querySelector("#href").setAttribute("href",result[a]["href"]);
});
}

deletebtn.addEventListener("click",function(){
  minimenu.style.display="none";
  overlay.style.display="none";
  deletebtn.style.display="none";
})