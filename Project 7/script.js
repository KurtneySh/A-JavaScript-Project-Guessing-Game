let guess0 = document.querySelector("#guess0");
let guess1 = document.querySelector("#guess1");
let guess2 = document.querySelector("#guess2");
let guess3 = document.querySelector("#guess3");
let guess4 = document.querySelector("#guess4");
let guessList = [guess0, guess1, guess2, guess3, guess4];
let hintText = document.querySelector("#hintText");
let hint0 = document.querySelector("#hint0");
let hint1 = document.querySelector("#hint1");
let hint2 = document.querySelector("#hint2");
let hint3 = document.querySelector("#hint3");
let hint4 = document.querySelector("#hint4");
let hint5 = document.querySelector("#hint5");
let hint6 = document.querySelector("#hint6");
let hint7 = document.querySelector("#hint7");
let hint8 = document.querySelector("#hint7");
let hint9 = document.querySelector("#hint8");
let input = document.querySelector("input");
let form = document.querySelector("form");
let result = document.querySelector("#result");
let answer = Math.floor(Math.random() * 101);
let length = 0;
let guessTry = [];
let hintList = [];
const reset = document.querySelector("#reset");
const reload = document.querySelector("#resetAll");
const hint = document.querySelector("#hint");
const rewards = document.querySelector(".rewards");

reset.addEventListener("click", resetGuess);
reload.addEventListener("click", resetAll);
hint.addEventListener("click", hintCheck);

form.addEventListener("submit", (event) => {
    event.preventDefault();
    guess(input.value);
    input.value="";
    guess0.textContent = guessTry[0];
    guess1.textContent = guessTry[1];
    guess2.textContent = guessTry[2];
    guess3.textContent = guessTry[3];
    guess4.textContent = guessTry[4];
});

function resetAll() {
    document.location.reload(true);
}

function hintCheck() {
    const pos = Math.floor(Math.random() * 11);
    for (let i = 0; i < 10; i++) {
        hintList.push(Math.floor(Math.random() * 101));
    }

    hintList[pos] = answer;
    hint.disabled = true;
    hintText.textContent = "The correct answer is included in the numbers below."
    hint0.textContent = hintList[0];
    hint1.textContent = hintList[1];
    hint2.textContent = hintList[2];
    hint3.textContent = hintList[3];
    hint4.textContent = hintList[4];
    hint5.textContent = hintList[5];
    hint6.textContent = hintList[6];
    hint7.textContent = hintList[7];
    hint8.textContent = hintList[8];
    hint9.textContent = hintList[9];
}

function resetGuess() {
    guessTry = [];
    guess0.textContent = "";
    guess1.textContent = "";
    guess2.textContent = "";
    guess3.textContent = "";
    guess4.textContent = "";
    guess0.className = "guess";
    guess1.className = "guess";
    guess2.className = "guess";
    guess3.className = "guess";
    guess4.className = "guess";
    length = 0;
    result.textContent = "";
    answer = Math.floor(Math.random() * 101);
    input.disabled = false;
    hintList = [];
    hintText.textContent = "";
    hint0.textContent = "";
    hint1.textContent = "";
    hint2.textContent = "";
    hint3.textContent = "";
    hint4.textContent = "";
    hint5.textContent = "";
    hint6.textContent = "";
    hint7.textContent = "";
    hint8.textContent = "";
    hint9.textContent = "";
    hint.disabled = false;
}

function guess(num) {
    if (num == "") {
        return true;
    } else if (num == answer) {
        guessTry.push(num);
        guessList[length].className = "guessWin";
        result.textContent = "You win";
        const star = new Image(50, 50);
        star.src = "media/star.png";
        rewards.appendChild(star);
        input.disabled = true;
    } else {     
        if (length < 4) {
            guessList[length].className = "guessNormal";
            length++;
            if (num < answer) {
                num = num + "↑";
            } else {
                num = num + "↓";
            }
            guessTry.push(num);
        } else if (length = 4) {
            guessList[length].className = "guessLose";
            length++;
            guessTry.push(num);
            result.textContent = "You lose";
            input.disabled = true;
        }
    }
}
