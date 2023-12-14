// Function to generate the table
let data = [
    { letter_identifier : "AA", placeholder : "00", min: 1, max: 63, shuffle: false },
    { letter_identifier : "AB", placeholder : "00", min: 1, max: 63, shuffle: false  },
    { letter_identifier : "AD", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "EE", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "EF", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "EG", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "EG", placeholder : "22", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "BA", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "CA", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "DA", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "DB", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "DC", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "DD", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "NA", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "NB", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "NC", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "ND", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "NE", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "NF", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "MZ", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "MX", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "MY", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "MI", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "MJ", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "MK", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "MK", placeholder : "11", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "MK", placeholder : "33", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "MK", placeholder : "55", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "FA", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "FB", placeholder : "22", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "FC", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "FD", placeholder : "22", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "FE", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "FG", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "FH", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "FI", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "FJ", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "FK", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "FL", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "FM", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "FN", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "FO", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "FB", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "FD", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "GA", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "GC", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "GC", placeholder : "44", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "GC", placeholder : "45", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "GE", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "GF", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "GG", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "GH", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "GI", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "GJ", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "GK", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "GL", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "GM", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "GN", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "GO", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "GP", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "GQ", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "GR", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "GR", placeholder : "01", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "GR", placeholder : "02", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "GR", placeholder : "03", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "GR", placeholder : "04", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "HA", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "HA", placeholder : "10", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "HA", placeholder : "20", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "IJ", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "IK", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "IL", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "IM", placeholder : "20", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "IN", placeholder : "20", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "IO", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "IO", placeholder : "47", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "IO", placeholder : "62", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "LA", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "LB", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "LC", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "LC", placeholder : "10", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "LC", placeholder : "20", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "LC", placeholder : "75", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "LC", placeholder : "74", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "LC", placeholder : "72", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "LC", placeholder : "56", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "LC", placeholder : "45", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "LC", placeholder : "04", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "LC", placeholder : "03", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "LC", placeholder : "02", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "PA", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "PB", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "PC", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "PD", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "PE", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "PF", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "PQ", placeholder : "01", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "PQ", placeholder : "02", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "PQ", placeholder : "03", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "PQ", placeholder : "30", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "PQ", placeholder : "32", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "PQ", placeholder : "34", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "PQ", placeholder : "43", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "PQ", placeholder : "77", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "PR", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "PR", placeholder : "22", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "QA", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "QD", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "QE", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "QR", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "RS", placeholder : "03", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "RS", placeholder : "05", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "RS", placeholder : "07", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "RS", placeholder : "08", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "RX", placeholder : "07", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "RX", placeholder : "08", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "SS", placeholder : "39", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "SS", placeholder : "45", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "UA", placeholder : "23", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "UB", placeholder : "22", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "UC", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "UI", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "UX", placeholder : "13", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "UX", placeholder : "14", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "UX", placeholder : "15", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "VA", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "VB", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "VC", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "VD", placeholder : "00", min: 1, max: 63, shuffle: false   },
    { letter_identifier : "VE", placeholder : "00", min: 1, max: 63, shuffle: false   },
]


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

function enableShuffle(dataCopy){
    let i = 1;
    let min = 1;
    let max = dataCopy.length;

    do{
        let index = Math.floor(Math.random() * (max - min) + min);

        if (!dataCopy[index].shuffle){
            dataCopy[index].shuffle = true;

            i++;
        }
    }while (i <= 30);
}

function shuffleContents(array) {
    // Create a copy of the original array
    const shuffledArray = array.slice();

    // Fisher-Yates shuffle algorithm
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    return shuffledArray;
}

function getLetter(number){
    switch (number){
        case 0:
            return "A";
        case 1:
            return "B";
        case 2:
            return "C";
        case 3:
            return "D";
        case 4:
            return "I";
        case 5:
            return "II";
        case 6:
            return "III";
        case 7:
            return "IV";
        case 8:
            return "V";
        case 9:
            return "VI";
        case 10:
            return "[a]";
        case 11:
            return "[b]";
        case 12:
            return "[c]";
        case 13:
            return "[d]";
        case 14:
            return "[e]";
        case 15:
            return "[f]";
    }
}

function generateTableContents(data){

    let contents = [];

    let counter = 0;
    let floor = -1;

    for(let i =0;i<data.length;i++){
        let entry = data[i];

        if (!data[i].shuffle){
            let text = `${entry.letter_identifier}00${entry.placeholder};1::63;${floor}_${getLetter(counter)};`;
            contents.push(text);

            counter++;

            if (counter === 16){
                floor++;
                counter = 0;
            }
        }else{
            let text1 = `${entry.letter_identifier}00${entry.placeholder};1::21;43::63;${floor}_${getLetter(counter)};`;
            counter++;

            if (counter === 16){
                floor++;
                counter = 0;
            }

            let text2 = `${entry.letter_identifier}00${entry.placeholder};22::42;${floor}_${getLetter(counter)};`;
            counter++;

            if (counter === 16){
                floor++;
                counter = 0;
            }

            contents.push(text1);
            contents.push(text2);
        }

    }

    return contents;
}

function fillTable(tableContents){
    const table = document.getElementById("myTable");
    const tbody = table.querySelector('tbody');

    let dataIndex = 0;
    const rows = tbody.getElementsByTagName('tr');
    for (let i = 0; i < 40; i++) {
        const cells = rows[i].getElementsByTagName('td');
        for (let j = 0; j < 4; j++) {
            if (dataIndex < tableContents.length) {
                cells[j].textContent = tableContents[dataIndex];
                dataIndex++;
            }else{
                break;
            }
        }
    }
}

function shuffleTable(){
    let dataCopy = [...data];

    enableShuffle(dataCopy);
    dataCopy = shuffleContents(dataCopy);

    let tableContents = generateTableContents(dataCopy);

    fillTable(tableContents);

    console.log(document.getElementById("myTable"))

    console.log(tableContents);
}

function addSeconds(amount){
    globalTime = globalTime + amount;

    if(globalTime < 0){
        globalTime = 86400 + globalTime;
    }

    if (globalTime > 86399){
        globalTime = globalTime - 86400;
    }

    updateTime();
}

// Call the function to generate the table when the page loads
generateTable();
shuffleTable();