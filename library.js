var _ = {
    map: function(arr, callback) {
        for (var i = 0; i < arr.length; i++){
            arr[i]=callback(arr[i]);
        }
        return arr;
    },
    reduce: function(arr, callback, memo) { 
        if (memo){
            for (var i = 0; i < arr.length; i++){
                memo = callback(memo, arr[i]);
            }
        }else{
            memo = arr[0];
            for (var i = 1; i < arr.length; i++){
                memo = callback(memo, arr[i]);
            }
        }
        return memo;
    },
    find: function(arr, callback) {   
        for (var i = 0; i < arr.length; i++){
            if(callback(arr[i])){
                return arr[i];
            }
        }
        return undefined;
    },
    filter: function(arr, callback) { 
        var filtered = [];
        for (var i = 0; i < arr.length; i++){
            if(callback(arr[i])){
                filtered.push(arr[i]);
            }
        }
        return filtered;
    },
    reject: function(arr, callback) { 
        var rejected = [];
            for (var i = 0; i < arr.length; i++){
                if (!callback(arr[i])){
                    rejected.push(arr[i]);
                }
            }
        return rejected;
    }
}

console.log(_.map([1,2,3], function(num){return num*3}));
//=> [3,6,9]
console.log(_.reduce([1,2,3], function(memo, num){return memo+num;}, 0));
//=> 6
console.log(_.reduce([2,3,5], function(memo, num){return memo*num;}));
//=> 30
console.log(_.find([1,2,3,4,5,6], function(num){return num%2 == 0;}));
//=>2
console.log(_.filter([1,2,3,4,5,6], function(num){return num%2 == 0;}));
//=>[2,4,6]
console.log(_.reject([1,2,3,4,5,6], function(num){return num%2==0;}));
//=>[1,3,5]