// function sharePizza(numOfpeople){
//     return(`Each person gets ${8/numOfpeople} slices of pizza`)
// }

function cutPizzaSlices(slices){
    return function(numOfppl){
        return `Each person gets ${(slices/numOfppl).toFixed(2)} slices of pizza`
    }
}

var sharePizza = cutPizzaSlices(8)

console.log(sharePizza(3))



