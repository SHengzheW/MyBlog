 let canvas=document.getElementById("drawing");
 			console.log(canvas);
			if(canvas.getContext){
				let context=canvas.getContext("2d");
				context.strokeStyle="white";
				context.lineWidth=2.5;
				context.beginPath();
				// context.rotate(Math.PI/8);
				
				var sc=1.35
				context.moveTo(20*sc,39*sc);
				//绘制鲸鱼身
				context.quadraticCurveTo(26*sc,18*sc,50*sc,37*sc);
				//绘制鲸鱼尾巴
				context.quadraticCurveTo(55*sc,39*sc,57*sc,34*sc);
				context.quadraticCurveTo(53.2*sc,27.5*sc,59*sc,32.5*sc);
				context.quadraticCurveTo(66*sc,31.2*sc,59.5*sc,34.4*sc);
				context.arcTo(57*sc,38*sc,56*sc,38*sc,1.2*sc);
		

				//绘制喷水柱
				context.moveTo(30*sc,27.6*sc);
				context.lineTo(30*sc,21*sc);
			
				context.quadraticCurveTo(28*sc,19*sc,25*sc,21*sc);
			
				context.moveTo(30*sc,21*sc);
				context.quadraticCurveTo(32*sc,19*sc,35*sc,21*sc);
				
				context.closePath();
				context.stroke();

				//绘制鲸鱼眼睛
				context.moveTo(25*sc,33*sc);
				context.fillStyle="white";
				context.beginPath();
				
				context.arc(28*sc,34*sc,1*sc,0,2*Math.PI,true);
				context.closePath();
				context.fill();

			}


 window.onload=function(){

 			let medalHeight=document.body.scrollHeight;
 			let medal=document.getElementById("medal");
 			medal.style.height=medalHeight;
 			console.log(document.body.clientHeight)
            setTimeout(function(){
               let mainContent=document.getElementById("main-content");
               let welcomeObj=document.getElementById("welcome-content");           
               let backObj=document.getElementById("ShanePage");
               welcomeObj.style.display="none";
               backObj.style.backgroundImage="url(../static/back1.jpg)";
               mainContent.style.display="block";
            },3000);
            
         }
         console.log(document.body.scrollHeight)

			