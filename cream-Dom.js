var getBtn = document.querySelector('.getBtn')
var priceBtn = document.querySelector('.priceBtn')
var flavs = document.querySelector('.flavours')
var conts = document.querySelector('.containers')
var topps = document.getElementsByName('all')
var show = document.querySelector('.show')
var show2 = document.querySelector('.show2')
var show3 = document.querySelector('.show3')
var myErr = document.querySelector('.myErr')

var count = document.querySelector('.count')


var factoryCream = creams()
var arr = []

function clearError() {
    setTimeout(function () {
        myErr.innerHTML = "";
    }, 2000);
}

function getIt() {

    for (var i = 0; i < topps.length; i++) {
        if (topps[i].checked) {

            arr.push(topps[i].value);
        }
    }
    for (var j = 0; j < arr.length; j++) {
        var arr2 = arr[j]
    }
    factoryCream.add(flavs.value, conts.value, arr2)
if(factoryCream.getCream().length<=1){
    show.innerHTML = factoryCream.getCream()
}
 console.log( factoryCream.getCream().length);
 if(factoryCream.getCream2().length<=1){
    show2.innerHTML = factoryCream.getCream2()
}
    
    show3.innerHTML = factoryCream.getCream3()
  
    myErr.innerHTML = factoryCream.errorM()
    clearError()
}

function getPrice(){
    count.innerHTML = 'The Total Price Is ' + ' R' + factoryCream.count()
}

priceBtn.addEventListener('click',getPrice)
getBtn.addEventListener('click', getIt)