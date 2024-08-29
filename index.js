function loop(times, callback) {
    for (let i = 0; i < times; i++) {
        callback(i)
    }
}

Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;
    // if the argument is the same array, we can be sure the contents are same as well
    if (array === this)
        return true;
    // compare lengths - can save a lot of time 
    if (this.length != array.length)
        return false;

    for (var i = 0, l = this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;
        }
        else if (this[i] != array[i]) {
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;
        }
    }
    return true;
}
// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", { enumerable: false });


loop(500, (j) => {
    function test() {
        return num[0] * num[1] + num[1] * num[2] + num[0] * num[2]
    }
    
    const num = [1, 1, 25]
    
    let solutions = []
    const testNum = j
    const maximum = testNum / 2
    loop(maximum, (i) => {
        num[0] = ++i
        loop(maximum, (i) => {
            num[1] = ++i
            loop(maximum, (i) => {
                num[2] = ++i
                if (test() == testNum) {
                    solutions.push([...num].sort())
                }
            })
        })
    })
    
    
    let vari = []
    // console.log(vari == [2, 4, 7])
    
    vari.push(solutions.pop())
    solutions.forEach(s => {
        if (
            !vari.some((v) => {
                return v.equals(s)
            })
        ) {
            vari.push(s)
        }
    })
    
    if (vari[0] == undefined) {
        console.log(j)
    }
    
    // console.log(vari)
})