var imgcomputer= document.querySelector(".imgc")
var imgpapel = document.querySelector(".papel");
var imgepedra = document.querySelector(".pedra");
var imagetesoura= document.querySelector(".tesoura");
var text = document.getElementsByTagName("h2")[0];


function computer(){
    let choose = Math.round(Math.random()*2);
    if(choose==0){
        imgcomputer.src="./pictures/papel.jpg";
        return choose;
    }else{
        if(choose==1){
            imgcomputer.src="./pictures/pedra.jpg";
            return choose;
        }
        else{
            imgcomputer.src="./pictures/tesoura.jpg";
            return choose;
        }
    }
}
computer();

function stack(user){
let valor = computer();
if(valor==0 && user=="pedra" || valor==1 && user=="tesoura" || valor==2 && user=="papel"){
    text.innerText="Perdeste"
}
 
if(valor==0 && user=="tesoura" || valor==1 && user=="papel" || valor==2 && user=="pedra"){
    text.innerText="Venceste"
}else{
    text.innerText="Empate";
}
}
imgpapel.onclick=()=>{
   return stack("papel")
   }
   imgepedra.onclick=()=>{
       return stack("pedra")
   }
   imagetesoura.onclick=()=>{
       return stack("tesoura");
   }
