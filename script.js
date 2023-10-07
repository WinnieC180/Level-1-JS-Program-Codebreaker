var num = "";
const code = "820";
var turn = 7;
var unlocked = false;


const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");
const button4 = document.querySelector(".button4");
const button5 = document.querySelector(".button5");
const button6 = document.querySelector(".button6");
const button7 = document.querySelector(".button7");
const button8 = document.querySelector(".button8");
const button9 = document.querySelector(".button9");
const deletez = document.querySelector(".deletez");
const button0 = document.querySelector(".button0");
const submit = document.querySelector(".submit");


const theCode = document.querySelector("p");
const turnLeft = document.querySelector(".turns");
const higherOrLower = document.querySelector(".guess");


button1.addEventListener("click", function() {
    insertCode("1");
});
button2.addEventListener("click", function() {
    insertCode("2");
});
button3.addEventListener("click", function() {
    insertCode("3");
});
button4.addEventListener("click", function() {
    insertCode("4");
});
button5.addEventListener("click", function() {
    insertCode("5");
});
button6.addEventListener("click", function() {
    insertCode("6");
});
button7.addEventListener("click", function() {
    insertCode("7");
});
button8.addEventListener("click", function() {
    insertCode("8");
});
button9.addEventListener("click", function() {
    insertCode("9");
});
deletez.addEventListener("click", function() {
    insertCode("10");
});
button0.addEventListener("click", function() {
    insertCode("0");
});
submit.addEventListener("click", finalAns);


function finalAns() {
    if (num === code && turn != 0) {
        theCode.innerHTML = '<span>' + "Access is Granted" + '</span>';
        if (!unlocked) {
            turn--;
        }
        higherOrLower.innerHTML = "Correct";
        unlocked = true;  
    } else if (turn==0 && !unlocked) {
        theCode.innerHTML = '<div>' + "Access is Denied" + '</div>';


        higherOrLower.innerHTML = "Denied";
    } else {
        if (!unlocked) {
            if (num > code) {
                higherOrLower.innerHTML = "Lower";
            } else {
                higherOrLower.innerHTML = "Higher";
            }
        }  
    }
   
    if (turn>0 && !unlocked) {
        turn--;
        if (turn==0) {
            theCode.innerHTML = '<div>' + "Access is Denied" + '</div>';
        }
    }
    turnLeft.innerHTML = 'Turns: <span>' + `${turn}` + '</span>';
}




function insertCode(digit) {
    if (turn != 0 && !unlocked) {
        if (digit == 10) {
            num = num.substring(0, num.length - 1);
            display();
        } else {
            if(num==="") {
                num = digit;
            }else if (num.length<3) {
                num += digit;
            }
        }
       
        if (num.length<=3) {
            display();
        }
    }
   
}


function display() {
    theCode.textContent = `${num}`;
}
