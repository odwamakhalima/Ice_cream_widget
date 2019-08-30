function creams() {
    var flavour = []
    var contain = []
    var topping = []
    var error = ''
    var total = 0
    var total2 = 0
    var total3 = 0
    var allTotals = 0
    var choco = 0
    var van = 0
    var plain = 0
    var paper = 0
    var sugar = 0
    var straw = 0
    var Crumbed_peanuts = 0
    var Caramal_dip = 0
    var Chocolate_Dip = 0
    var Smarties = 0
    var Oreos = 0
    var Astros = 0
    var flavs
    var conts
    var topps

    function myCream(flav, cont, topp) {
        flavs = flav
        conts = cont
        topps = topp
        if (flavs === '' || conts === '' || topps === '') {
            error = 'Please Select flavour and Container'
        }
        else{
            flavour.push(flavs)
            contain.push(conts)
            topping.push(topps)
        }
       
    }

    function outPut() {
        for (var i = 0; i < flavour.length; i++) {
            if (flavs == "Chocolate") {
                choco = 13
            }
            else if (flavs == "Vanilla") {
                van = 14
            }
            else if (flavs == "Strawberry") {
                straw = 16
            }

        }
        total = choco + van + straw
        return flavour
    }

    function outPut2() {
        for (var j = 0; j < contain.length; j++) {
            if (conts === "Plain Cone") {
                plain = 7
            }
            else if (conts === "Sugar Cone") {
                sugar = 8
            }
            else if (conts === "paper cup") {
                paper = 9
            }
        }
        total2 = plain + sugar + paper

        return contain
    }

    function outPut3() {
        for (var x = 0; x < topping.length; x++) {
            if (topps === "Crumbed peanuts") {
                Crumbed_peanuts = 4
            }
            if (topps === "Caramal dip") {
                Caramal_dip = 5
            }
            if (topps === "Chocolate Dip") {
                Chocolate_Dip = 6
            }
            if (topps === "Smarties") {
                Smarties = 8
            }
            if (topps === "Oreos") {
                Oreos = 12
            }
            if (topps === "Astros") {
                Astros = 10
            }
        }
        total3 = Crumbed_peanuts + Caramal_dip + Chocolate_Dip + Smarties + Oreos + Astros


        return topping
    }

    function countFav() {
        allTotals = total + total2 + total3
        return allTotals
    }

    function myError() {
        return error
    }

    return {
        add: myCream,
        getCream: outPut,
        getCream2: outPut2,
        getCream3: outPut3,
        count: countFav,
        errorM: myError
    }
}