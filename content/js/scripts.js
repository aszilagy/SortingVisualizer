var slider = document.getElementById("myRange");
var output = document.getElementById("sliderValue");

var cv = document.getElementById("myCanvas");
var ctx = cv.getContext("2d");
var cvWidth = cv.width;
var cvHeight = cv.height;

var cvTextBox = document.getElementById("textCanvas");
var canvasTextBox = cvTextBox.getContext("2d");
canvasTextBox.font = "20px Comic Sans MS";
canvasTextBox.fillStyle = "black";
canvasTextBox.textAlign = "center";

output.innerHTML = slider.value;

let bars = [];
slider.oninput = function(){
        loadGraph();
}

function loadGraph(){
        bars = [];
        output.innerHTML = slider.value;
        clearCanvas()
        for(var i=0; i<slider.value; i++){
                
                bars.push((i+1)*10);
        }
        drawBars(bars);
}

function clearCanvas(){
        ctx.fillStyle = "#FF0000";
        ctx.clearRect(0, 0, cvWidth, cvHeight);

        canvasTextBox.clearRect(0, 0, cvTextBox.width, cvTextBox.height);
}

function shuffleArray() {
        clearCanvas();
        let arr = bars;

        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        drawBars(arr);
}

function drawBars(bars){
        /*x = i+= widthOfBar
        y = cvHeight - sizeOfBar
        width = 5
        height = sizeOfBar*/

        for(var i=0; i<bars.length; i++){
                //x, y, width, height
                ctx.fillRect(i*50, cvHeight-bars[i], 5, bars[i]);
                canvasTextBox.fillText(bars[i]/10, (i*50)+10, cvTextBox.height/2);
        }
        
}



