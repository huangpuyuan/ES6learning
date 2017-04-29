{
// 声明独一无二的
    let a1 = Symbol();
    let a2 = Symbol();
    console.log(a1 === a2);

    let a3 = Symbol.for('a3');
    let a4 = Symbol.for('a3');

    console.log(a3 === a4);
}

{//作用
    let a1 = Symbol.for('abc');
    let obj = {
        [a1]: '123',
        'abc': 345,
        'c': 456
    }
    console.log(obj);

    // 取不到
    for (let [key, value] of Object.entries(obj)) {
        console.log('let of ', key, value);
    }

    //取到了Symbol的属性

    Object.getOwnPropertySymbols(obj).forEach(function (item) {
        console.log('getOwnPropertySymbols',obj[item]);
    });

    Reflect.ownKeys(obj).forEach(function (item) {
        console.log('ownkeys',obj[item])
    });

}