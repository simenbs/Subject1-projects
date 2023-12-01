//model
let inputString = "";
let displayText = "0";

//view
function updateView(){
    let html = "";
    html += /*HTML*/`
    <div class="calc">
        <div class="display" id="display">
            <div class="inputNumm" id="inputNume">${displayText}</div>
            <div class="inputHistory"></div>
        </div>

        <div class="memorybuttons">
            <div>MC</div>
            <div>MR</div>
            <div>M+</div>
            <div>M-</div>
            <div>MS</div>
            <div>M∨</div>
        </div>

        <div class="gridbuttons">
                <div onclick="input('%')">%</div>
                <div onclick="clearLastElement()">CE</div>
                <div onclick="clearInput()">C</div> 
                <div onclick="backspace()">⌫</div>

                <div>¹/ₓ</div>
                <div>x²</div>
                <div onclick="squareRoot('√')">√</div>
                <div onclick="input('/')">÷</div>

                <div class="num" onclick="input('7')">7</div>
                <div class="num" onclick="input('8')">8</div>
                <div class="num" onclick="input('9')">9</div>
                <div onclick="input('*')">⨯</div>

                <div class="num" onclick="input('4')">4</div>
                <div class="num" onclick="input('5')">5</div>
                <div class="num" onclick="input('6')">6</div>
                <div onclick="input('-')">−</div>

                <div class="num" onclick="input('1')">1</div>
                <div class="num" onclick="input('2')">2</div>
                <div class="num" onclick="input('3')">3</div>
                <div onclick="input('+')">+</div>

                <div class="num">±</div>
                <div class="num" onclick="input('0')">0</div>
                <div class="num" onclick="input('.')">.</div>
                <div onclick="calculate()">=</div>

            </div>
        </div>
    `;
    document.getElementById("app").innerHTML = html;
}

//controller
//key er alltid en string med 1 karakter. F.eks: '1', '6', '/' eller '*'
function input(key){
    inputString += key;
    displayText = inputString;
    updateView();
}

function calculate(){
    let result = eval(inputString); //eval leser en string som et mattestykke og regner det ut
    inputString = String(result); //må konvertere til en string/tekst, fordi i backspace() bruker vi slice(), som ikke fungerer på en int/et tall.
    displayText = String(result); //den går fra f.eks: 220 til "220"
    updateView();
}

function clearInput(){
    inputString = "";
    displayText = "0";
    updateView();
}

function backspace(){
    displayText = inputString.slice(0, -1);
    inputString = displayText;
    updateView();
}

function clearLastElement(){
    if (displayText !== "" && inputString !== "") {
        displayText = displayText.slice(0, -1);
        inputString = inputString.slice(0, -1);
        if (displayText === "") {
            displayText = "0";
        }
        updateView();
    }
 }

 function squareRoot(){
    console.log("squareRoot function called");
    console.log("inputString: " + inputString);
    let lastIndex = inputString.lastIndexOf('√');
    if(lastIndex !== -1){
        let number = inputString.substring(lastIndex + 1);
        let result = Math.sqrt(number);
        inputString = inputString.substring(0, lastIndex) + result;
        displayText = String(result);
        updateView();


    }
 }
updateView();