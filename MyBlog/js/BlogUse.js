 window.onload=function(){
            
            setTimeout(function(){
               let mainContent=document.getElementById("main-content");
               let welcomeObj=document.getElementById("welcome-content");           
               let backObj=document.getElementById("ShanePage");
               welcomeObj.style.display="none";
               backObj.style.backgroundImage="url(../static/timg2.jpg)";
               mainContent.style.display="block";
            },3000);
            
         }