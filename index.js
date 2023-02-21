

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

window.addEventListener('resize',function(event){

    if(document.body.clientWidth>1270){
        document.getElementById("cls").style.display="none"
        document.getElementById("opn").style.display="none"
        document.getElementById("menu").style.display="block"
    }
    if (document.body.clientWidth<1270) {
        document.getElementById("cls").style.display="none"
        document.getElementById("opn").style.display="block"
        document.getElementById("menu").style.display="none"
        function myf3(){
        document.getElementById("menu").style.display="none"
    }
    } 
        
});