function curriedAdd(total = 0) {
    function adder(num) {
        if(arguments.length){
            total += num;
            return adder
        } else {
            return total;
        }
    }

    if(arguments.length)
        return adder
    else 
        return total;
}

module.exports = { curriedAdd };
