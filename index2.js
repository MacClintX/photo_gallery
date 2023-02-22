function myf(){
    document.getElementById("menu").style.display="block";
    document.getElementById("cls").style.display="block";
    document.getElementById("opn").style.display="none";
}

function myf2(){
    document.getElementById("menu").style.display="none";
    document.getElementById("cls").style.display="none";
    document.getElementById("opn").style.display="block";
}

const mediaQuery=window.matchMedia('(max-width:1270px)');


function handlechange(e){
    if(e.matches){
        
        document.getElementById("cls").style.display="none"
        document.getElementById("opn").style.display="none"
        document.getElementById("menu").style.display="block"
    
    }
    else{
        document.getElementById("cls").style.display="block"
        document.getElementById("opn").style.display="block"
        document.getElementById("menu").style.display="none"
    }
}
mediaQuery.addListener(handlechange)
handlechange(mediaQuery)