
let sign = "X"; 
let disp = document.getElementById("player");
let box;

function printx(number){
    let box = document.getElementById("r"+ number);
    if(box.innerHTML==""){
        box.innerHTML = sign;
        winner();
        checksign();
        disp.innerHTML ="<center>" + sign + "'s turn" + "</center>";
        
    }    
    
}

function checksign(){
    if (sign=="X"){
        sign = "0";
    }
    else sign = "X";
}

function getbox(no){
    return document.getElementById("r"+no).innerHTML;
}

function checkmove(a,b,c,m){
    if(getbox(a)==m && getbox(b)==m && getbox(c)==m ){
        return true;
    }
    else return false;
}

function winner()
{
    if(checkmove(1,2,3,sign) || checkmove(4,5,6,sign) || checkmove(7,8,9,sign) || checkmove(1,4,7,sign) ||
    checkmove(2,5,8,sign) || checkmove(3,6,9,sign) || checkmove(1,5,9,sign) ||checkmove(3,5,9,sign)  ){
        disp.innerHTML ="<center>" + sign + " Wins!!" + "</center>";
    
        for(let i=1; i<=9; i++){
            document.getElementById("r"+i).innerHTML = "";
        }
        throw "game end";
    }
    else{
        if(getbox(1)!="" && getbox(2)!="" && getbox(3)!="" && getbox(4)!="" && getbox(5)!="" && 
        getbox(6)!="" && getbox(7)!="" && getbox(8)!="" && getbox(9)!="" ){
            disp.innerHTML ="<center>" + "Match Tied" + "</center>";
            throw "Match Tied";
        }
    }
}