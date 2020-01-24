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

function getBars(){
        return bars;
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
        ctx.fillStyle = "#000000";
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
        clearCanvas();
        for(var i=0; i<bars.length; i++){
                //x, y, width, height
                ctx.fillRect(i*50, cvHeight-(bars[i]*3), 5, bars[i]*3);
                canvasTextBox.fillText(bars[i]/10, (i*50)+10, cvTextBox.height/2);
        }
        
}

function animate(bars){
        return;
}

function merge(left, right){
        let sortedArray = [], leftIndex = 0, rightIndex = 0;

        while(leftIndex < left.length && rightIndex < right.length){
                if(left[leftIndex] < right[rightIndex]){
                        sortedArray.push(left[leftIndex]);
                        leftIndex++;
                }
                else{
                        sortedArray.push(right[rightIndex]);
                        rightIndex++;
                }
        }

        return sortedArray.concat(left.slice(leftIndex).concat(right.slice(rightIndex)));
}

function mergeSort(arr){
        
        if(arr.length < 2){
                return arr;
        }

        const middle = Math.floor(arr.length / 2);

        const left = arr.slice(0, middle);
        const right = arr.slice(middle);
        
        return merge(mergeSort(left), mergeSort(right));
}



