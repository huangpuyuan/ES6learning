{
    function test(x, y = 'world') {
        console.log(x, y);
    }

    test('hello');
    test('hello', 'kaitai')
}

{
    let x = 'test';

    function test2(x, y = x) {
        console.log('作用域', x, y);
    }

    test2('kill')
    test2();

    function test22(c, y = x) {
        console.log('作用域', c, y);
    }

    test22('kill')
    test22();
}
{
    // 和es5的 argments
    function test3(...arg) {
        for (let v of arg) {
            console.log('rest', v);
        }
    }

    test3(1, 2, 3, 4, 'a');
}
{
    console.log(...[1, 2, 4]);
    console.log('a', ...[1, 2, 4]);

}
// 箭头函数 和 this 绑定的问题

{
    let arrow = v => v * 2;
    let arrow2 = () => 5;
    console.log('arrow', arrow(3));
    console.log('arrow2', arrow2());
}
// 尾调用 函数式编程
{
    function tail(x) {
        console.log('tail',x);
    }
    function fx(x) {
        return tail(x);
    }
    fx(123);
}


