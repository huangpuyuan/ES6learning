{//简洁表示法
    let o = 1;
    let k = 2;
    let es5 = {
        o: o,
        k: k
    };
    let es6 = {
        o, k
    };
    console.log('es5', es5);
    console.log('es6', es6);

    let es5_method = {
        hello: function () {
            console.log('hello');
        }
    };
    let es6_method = {
        hello(){
            console.log('hello');
        }
    };

    console.log(es5_method.hello());
    console.log(es6_method.hello());
}

{//属性表达式
    let a = 'b';
    let es5_obj = {
        a: 'c'
    }
    let es6_obj = {
        [a]: 'c'
    }

    console.log(es5_obj, es6_obj);
}
{   //新增api
    console.log('字符串', Object.is('abc', 'abc'), 'abc' === 'abc');
    //数值是本质上是引用类型，在内存的地址上不同位置所以不全等
    console.log('数值', Object.is([], []), [] === []);

    // 拷贝,浅复制（不拷贝） 合并成新的对象
    console.log('拷贝', Object.assign({a: 'a'}, {b: 'b'}));

    let test = {k: 123, o: 456};

    for(let [key,value] of Object.entries(test)){
        console.log([key,value]);
    }


}

{   //es7提案
    // let {a,b,...c}={a:'test',b:'kill',c:'ddd',d:'ccc'};
    // console.log(c);
}




















