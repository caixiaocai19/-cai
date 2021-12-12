/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    let first = 1, second = 2;
    if(n===1||n===2){
        return n;
    }
    for(let i=2;i<n;i++){
        let tem = first;
        first = second;
        second = tem + second;
    }
    return second;
};