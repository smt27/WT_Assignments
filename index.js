// to display number on screen
function dis(val){
    document.getElementById("number").value+=val;
}

//function that evaluates the digit and return number
function solve()
{
    let x = document.getElementById("number").value
    let y = eval(x)
    document.getElementById("number").value = y
    if(y==='undefined'){
        clr();
        alert("enter number")
    }
    setTimeout(function(){clr();}, 5000);
}




// let func=prompt("Please enter your name")
// if(func!=null){
//    alert("Why so serious today ' "+ func+ " '\n Lets do some fun calculations.");
// }


//function that clear the display
function clr()
{
    document.getElementById("number").value = ""
}

    // if(document.getElementById("number").value.length==0){
    //     alert("Enter number for calculation");
    // }

// if($('#number').typeof(val)!='number'){
//     alert("enter proper val");
// }
