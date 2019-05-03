// function alertonly(){
//     alert ("Name");
// };

// function promptonly(){
//     var fname = prompt("Enter your First name");
//     document.getElementById("nametag").innerHTML = fname;
    
// };
// function Lastname(){
//     var lname = prompt("Enter you last name");
//     document.getElementById("lastname").innerHTML = lname;

// };

// function EmailId(){
//     var emailid=prompt("Enter you Email ID");
//     // document.getElementsByClassName("EmailId").innerHTML=emailid;

//     var x = document.getElementsByClassName("EmailId");
//     x.innerHTML = emailid;

// };

// var firstName = '';
// var lastname = '';
// var emailad = '';


// function onchangetag(){
//         firstName=document.getElementById("onchange").value;
//         console.log(firstName);
//         document.getElementById("fname").innerHTML=firstName;
//         lastname=document.getElementById("lastname").value;
//         console.log(lastname);
//         document.getElementById("lname").innerHTML=lastname;
//         emailad=document.getElementById("emailid").value;
//         console.log(emailad);
//         document.getElementById("email").innerHTML=emailad;
        
// };

// function alertonly(){
//     alert(firstName);
//     alert(lastname);
//     alert(emailad);
// }
// var x = 0;
// var y = 0;

// function onchangee(){
//      x = parseInt(document.getElementById("firstnumber").value);
//      console.log(x);
//      y = parseInt(document.getElementById("secondnumber").value);
//      console.log(y);
// }

// function Add(){
//      sum=(x+y);
//      alert("The Sum is"+sum);
// }
// function Sub(){
//     sum=(x-y);
//     alert("The diff is"+sum);
// }
// function Mul(){
//     sum=(x*y);
//     alert("The product is"+sum);
// }
// function Div(){
//     sum=(x/y);
//     alert("The div is"+sum);
// }
//     var x ='';
// function Onchangetag(){
//     x=document.getElementById("name").value;
//     console.log(x);
// }
// function Chars(){
//      var y = x.length;
//      alert("Length is"+y);
// }
// function Onchangetag(){
//     var x=document
// }

// var x = '';
// var y=0;

// function name(){
//     x=document.getElementById("Name").value;
//     console.log(x);
// };

// function Checkme(){

//     y=x.length;
//     if( y > = 8){
//         alert("Enter a shorter string");
//     }
// };


//alert("jokj");

// var x = '';

// function Results(){
//     x=document.getElementById("Name").value;
//     console.log(x);
// };

// function changetag(){
//     document.getElementById("name").innerHTML=x;
//     alert("Name is " + x);
// };
// var arr='';
// var array = [];

// function onchangetag(){
//     //for(let i=0;i<10;i++){
//         arr=document.getElementById("Name").value;
//         console.log(arr);
//    // }

// };

// function addelement(){
//     array.push(arr);
//     document.getElementById("list").innerHTML = array[0];

// };

// function removeelement(){
//     array.pop(arr);
//     document.getElementById("list").innerHTML = array[0];
// };

// function showdata(){
//     document.getElementById("list").innerHTML = array[0];
// }

// hide = () => {
//     var x = document.getElementById("name");
//     x.classList.toggle("hide");
// };

// color = () => {
//     var y=document.getElementById("colorchange");
//     y.classList.toggle("color");
// }

// onchangetag = () =>{
//     var x=document.getElementById("eww");
//     x.classList.toggle("show");
// };
 
/* change = ()=>{
    document.getElementById("hey").style.color="red";
    document.getElementById("hey").style.fontSize="larger"
} */

// var x=0;

// function onchangetag(){
//     x=document.getElementById("one").value;
//     console.log(x);
// }

// function onclicktag(){
//     if( x % 2 == 0){
//         document.getElementById("three").innerHTML="Even";
//     }
//     else{
//         document.getElementById("three").innerHTML="Odd";
//     }
// }

// function nono(){
//     document.getElementById("one").style.display="block";
// } 
// var x=0;
// var y=0;

// function onclicktag(){
//     x=parseInt(document.getElementById("nine").value);
//     console.log(x);
//     y=parseInt(document.getElementById("eight").value);
//     console.log(y);
// }
// var z = 0;
// function addtag(){
//     z = parseInt(x + y);
//     console.log(z);
// }
// var a=0;
// function subtag(){
//     a=parseInt(x-y);
//     console.log(a);
// }
// var b=0;
// function isequalto(){
//     b=parseInt(a+z);
//     alert("The result is" + b);
// }
var x=0;
var counter=0;
var maximum=10;
var minimum=0;
var randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;


function dectag(){
    console.log("eh");
    if(counter === 0){
        document.getElementById("button").disabled = "disabled";
        return;
    }
    counter--;
    document.getElementById("one").innerHTML=counter;
}

function inctag(){
    if( randomnumber === counter){
        alert("Matched!!");
    }
    counter++;
    document.getElementById("one").innerHTML=counter;
}


    