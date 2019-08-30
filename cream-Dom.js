var getBtn = document.querySelector('.getBtn')
var priceBtn = document.querySelector('.priceBtn')
var flavs = document.querySelector('.flavours')
var conts = document.querySelector('.containers')
var topps = document.getElementsByName('all')
var show = document.querySelector('.show')
var show2 = document.querySelector('.show2')
var show3 = document.querySelector('.show3')

var count = document.querySelector('.count')

var factoryCream = creams()
var arr = []

function getIt() {


    for (var i = 0; i < topps.length; i++) {
        if (topps[i].checked) {
            arr.push(topps[i].value);
        }
    }
    for (var j = 0; j < arr.length; j++) {

        var arr2 = arr[j]
        console.log(arr2);
        factoryCream.add(flavs.value, conts.value, arr2)
    }
    

    show.innerHTML = factoryCream.getCream() + ' Flavour '
    show2.innerHTML = factoryCream.getCream2() + ' Container '
    show3.innerHTML = factoryCream.getCream3() + ' Toppings'

    count.innerHTML = 'The Total Price Is ' + ' R' + factoryCream.count()



}


getBtn.addEventListener('click', getIt)