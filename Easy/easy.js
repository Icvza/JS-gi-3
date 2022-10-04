function exercise(callback){
    if(callback === 'Running'){
        return function(){
            return 'You are Running'
        }
    } else if ( callback === 'Swimming'){
        return function() {
            return 'You are Swimming'
        }
    }
}

var run = exercise('Running')
var swim = exercise('Swimming')

console.log(run())
console.log(swim())






