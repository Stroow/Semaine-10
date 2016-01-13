/*___Variable___*/

var autoClick = document.getElementById('button_A');
var cooky = document.getElementById('cook1');
var multiClick = document.getElementById('button_M');

var score = document.getElementById('score');
var multi = document.getElementById('multi');

var event = document.getElementById('interaction');

/*___Multiplicateur___*/
var scoreElement=0,multiple=1,prix=80;

function multiplicateur(){
    
    var prix=80*multiple;
    if(scoreElement>=prix){
        multiple+= 1;
        scoreElement-=prix;
        score.innerHTML=scoreElement;
        
    }else{
        alert('Vous devez avoir au moins '+prix+' points pour accéder au multiplicateur! et vous n\'avez que ' +scoreElement+' points');
        event.innerHTML=inter;
    }
    affMulti();
}

/*___Score___*/

function clickCook(){
        if(cooky){
        scoreElement+=multiple;
        score.innerHTML=scoreElement; 
        }
        event.innerHTML="";
           
}

function autoCook(){
        scoreElement+=multi;
        score.innerHTML=scoreElement; 
        event.innerHTML="";   
}

function affMulti(){
     multi.innerHTML='x '+multiple+ ' et pour passer à  '+(multiple+1) +' il faut plus de '+prix+' points';
}

/*___Action___*/

affMulti();
multiClick.onclick= multiplicateur;

cooky.onclick = clickCook;
autoClick.onclick=function(){
    if(scoreElement>=1000){
    setInterval(autoCook,1000);
    }else{
        alert('Vous devez avoir au moins 1000 points pour accéder à  l\'autoclick! et vous n\'avez que ' +scoreElement+' points');
        event.innerHTML=inter1;
    }
};