var isValid = function(s) {
    let stack = [];
    for (let item of s) {
        if (item === '(' || item === '[' || item === '{') {
            stack.push(item);
        } else {
            let target = stack.pop();
            if ((target === '(' && item !== ')') || (target === '[' && item !== ']') || (target === '{' && item !== '}') || target === undefined) {
                return false;
            }
        }
    }
    if (stack.length === 0) {
        return true;
    } else {
        return false;
    }
};
s = "[[[]][][][]";;
console.log(isValid(s))