var reverseStr = function(s, k) {
    let arrStr = s.split("");
    let count = Math.floor(s.length / (2 * k));
    for (let i = 0; i < count; i++) {
        let left = i * 2 * k,
            right = left + k - 1;
        while (left < right) {
            let tem = arrStr[left];
            arrStr[left] = arrStr[right];
            arrStr[right] = tem;
            left++;
            right--;
        }
    }

    let left = count * 2 * k;
    let right = s.length - 1;
    if (s.length - count >= k) {
        right = left + k - 1;
    }

    while (left < right) {
        let tem = arrStr[left];
        arrStr[left] = arrStr[right];
        arrStr[right] = tem;
        left++;
        right--;
    }
    return arrStr.join("");
};
console.log(reverseStr("abcdefg", 2));