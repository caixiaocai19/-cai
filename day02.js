//手写深拷贝
function deepCopy(obj){
    if(obj&&typeof obj !=='object'){
        throw new Error("类型不匹配");
    }
    let target = obj instanceof Array?[]:{};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            if(typeof obj[key]==='object'){
                deepCopy(obj[key]);
            }else{
                target[key]=obj[key];
            }
        }
    }
    return target;
}
let a={
    name:"caixiaoca",
    age:18
}
let b=deepCopy(a);
a.name="babba";
console.log(b);
console.log(a);
console.log(deepCopy(456))