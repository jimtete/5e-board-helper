// Function to generate the table

var globalTime = 0;

function generateTable() {
    var rows = 40; // Number of rows
    var cols = 4; // Number of columns

    var table = document.getElementById("myTable");

    for (var i = 0; i < rows; i++) {
        var row = table.insertRow();
        for (var j = 0; j < cols; j++) {
            var cell = row.insertCell();

        }
    }
}

function timeToSeconds(time){
    let [hours, minutes, seconds] = time.split(':').map(Number);

    // Calculate total seconds
    let totalSeconds = hours * 3600 + minutes * 60 + seconds;

    globalTime = totalSeconds;
}

function updateTime(){
    let remainingSeconds = globalTime

    let hours = Math.floor(remainingSeconds / 3600);
    remainingSeconds = globalTime % 3600;

    let minutes = Math.floor(remainingSeconds / 60);
    remainingSeconds = globalTime % 60;

    if (minutes===30){
        shuffleTable();
    }

    const padWithZero = (num) => (num < 10 ? `0${num}` : num);

    // Pad hours, minutes, and seconds with leading zeros if necessary
    let hoursString = padWithZero(hours);
    let minutesString = padWithZero(minutes);
    let secondsString = padWithZero(remainingSeconds);

    // Construct the time string with formatted hours, minutes, and seconds
    let timeString = `${hoursString}:${minutesString}:${secondsString}`;

    document.getElementById("time").value = timeString;
}

function shuffleTable(){

}

function addSeconds(amount){
    globalTime = globalTime + amount;

    if(globalTime < 0){
        globalTime = 86400 - globalTime;
    }

    if (globalTime > 86399){
        globalTime = globalTime - 86400;
    }

    updateTime();
}

// Call the function to generate the table when the page loads
generateTable();
