function arrMan(){
    var arrs = [];
    for (var i = 0; i < 10; i++){
        arrs.push(i);
    }
    return arrs;
}

var titleElement = document.getElementById('title');

function onInputData(inputElement){
    titleElement.innerHTML = inputElement.value || 'This is 2st paragraph';
    
}


console.log(titleElement.baseURI);
console.log([titleElement]);