/**
 * @param {number} n
 * @return {number}   1 1 2 3 4
 */
var integerBreak = function(n) {
    let arr =new Array(60).fill(0);
    arr[2]=1;
    for(let i=3;i<=n;i++){
        for(let j=1;j<i;j++){
            arr[i]=Math.max(arr[i],(i-j)*j,arr[i-j]*j);
        }
    }
    return arr[n];
};