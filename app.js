var rightSteps = [];
var wrongSteps = [];
var idValue = 0;
var index = 0;
var rightStep = 0;
var wrongStep = 0;
var isDescShowed = false;
var description = "This is glass bridge game.\nThe aim of this game is to get across the bridge to the other side without falling.\nThe correct direction of move is left to right.\nFor each jumping, you need to find correct glass.\nGood luck!";

assignSteps();
drawTable();
setTimeout(function () {
    showDescription(description);    
}, 500);

function assignSteps() {
    for(var i = 0; i < 18; i++){
        var random  = Math.floor(Math.random() * 2);
            rightStep = -1;
            wrongStep = -1;
        
        if(random === 1){
            rightStep = i + 18;
            wrongStep = i;
        }
        else{
            rightStep = i;
            wrongStep = i + 18;
        }
    
        rightSteps.push(rightStep);
        wrongSteps.push(wrongStep);
    }
}

function clearParameters() {
    rightSteps = [];
    wrongSteps = [];
    idValue = 0;
    index = 0;
    rightStep = 0;
    wrongStep = 0;
}

function destroyTable() {
    var elements = document.getElementsByTagName('table');
    elements[0].setHTML('');
}

function drawTable() {
    var elements = document.getElementsByTagName('table');
    var table = elements[0];

    for (var k = 0; k < 2; k++){
        var tr = document.createElement('tr');

        for (var l = 0; l < 18; l++){
            var th = document.createElement('th');
            th.className = 'box';
            th.id= idValue;
            tr.appendChild(th);
            idValue++;
        }

        table.appendChild(tr);
    }

    $(".box").text("");
}

function showDescription(description) {
    if (!isDescShowed) {
        window.alert(description);
        isDescShowed = true;        
    }
}

$('#main').on('click', '.box', function(){
        var currentID = $(this).attr('id');
  
        if (currentID == rightSteps[index]) {
          $('#' + currentID).css("background-color", "green");          
          index++;
        }
        else if(currentID == wrongSteps[index]){
            $('#' + currentID).css("background-color", "red");
            
            setTimeout(function () {
                alert("Black hawk down!");
                
                clearParameters();    
                destroyTable();
                assignSteps();
                setTimeout(function () {
                    drawTable();                
                }, 250);
            }, 250);
        }
        else{
            alert("You need to walk step by step to forward. Not like that!");
        }
  
        if (index == 18) {            
            setTimeout(function () {
                alert("You win! Perfect!");
                
                clearParameters();    
                destroyTable();
                assignSteps();
                setTimeout(function () {
                    drawTable();                
                }, 250);
            }, 250);
        }  
});
