describe("The Ice Cream Function", function(){

	it("should be the list of the selected flavour,container and topping", function(){
        var factoryCream = creams()

        factoryCream.add('Chocolate','Plain Cone','Oreo')

        assert.deepEqual(['Chocolate'],factoryCream.getCream() )
        assert.deepEqual(['Plain Cone'],factoryCream.getCream2() )
        assert.deepEqual(['Oreo'],factoryCream.getCream3() )

    });

    it("should be the list of the selected flavour,container and a list of topping", function(){
        var factoryCream = creams()

        factoryCream.add('Vanilla','Sugar Cone',['Oreo','Astros'])

        assert.deepEqual(['Vanilla'],factoryCream.getCream() )
        assert.deepEqual(['Sugar Cone'],factoryCream.getCream2() )
        assert.deepEqual([['Oreo','Astros']],factoryCream.getCream3() )

    });

    it("should return the value of the Vanilla", function(){
        var factoryCream = creams()

        factoryCream.add('Vanilla','Sugar Cone',['Oreo','Astros'])
        factoryCream.getCream()

        assert.deepEqual(14,factoryCream.count() )

    });
    it("should return the value of the Vanilla plus sugar cone", function(){
        var factoryCream = creams()

        factoryCream.add('Vanilla','Sugar Cone',['Oreo','Astros'])
        factoryCream.getCream()
        factoryCream.getCream2()

        assert.deepEqual(22,factoryCream.count() )

    });

    it("should return an error if nothing is entered", function(){
        var factoryCream = creams()

        factoryCream.add('','','')

        assert.deepEqual('Please Select flavour and Container',factoryCream.errorM() )

    });
});