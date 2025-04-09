Array.prototype.myMap = function(callback){
    let arr2 = []
    for(i = 0; i<this.length; i++){
        arr2.push(callback(this[i], i, this))
    }
    return arr2
}
arr = [2, 3, 5, 7]
arr3 = arr.myMap((value) => value*2)
console.log(arr3)
