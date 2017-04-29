# es6语法2
#### 正则扩展
###### es5回顾
* g修饰符 全局匹配（会查找所有匹配，不会在查找到第一个匹配时就停止）
* i修饰符 执行对大小写不敏感的匹配
* m修饰符 执行多行匹配
>新增特性
* 构造函数的变化
* 正则方法的扩展
* u修饰符 ES6对正则表达式添加了u修饰符，含义为“Unicode模式”，用来正确处理大于\uFFFF的Unicode字符，点只能匹配小于两个字节的字符
    ```es6
    {
        console.log('u-1',/^\uD83D/.test('\uD83D\uDC2A'));//u-1 true
        console.log('u-2',/^\uD83D/u.test('\uD83D\uDC2A'));//u-2 false
    
        console.log(/\u{61}/.test('a'));//false
        console.log(/\u{61}/u.test('a'));//true
    
        console.log(`\u{20BB7}`);
        let s='𠮷';
        console.log('u1',/^.$/.test(s));//u1 false
        console.log('u2',/^.$/u.test(s));//u2 true
    
        console.log('test1',/𠮷{2}/.test('𠮷𠮷'));//test1 false
        console.log('test2',/𠮷{2}/u.test('𠮷𠮷'));//test2 true
    }
    ```
* y修饰符 叫做“粘连”（sticky）修饰符| 后一次匹配都从上一次匹配成功的下一个位置开始 
    ```es6
    {
        //y修饰符
        let s = "bbb_bb_b";
        let a1 = /b+/g;
        let a2 = /b+/y;
    
        console.log('one',a1.exec(s),a2.exec(s));// one ["bbb", index: 0, input: "bbb_bb_b"] ["bbb", index: 0, input: "bbb_bb_b"]
        console.log('two',a1.exec(s),a2.exec(s));// two ["bb", index: 4, input: "bbb_bb_b"] null
        console.log(a1.sticky,a2.sticky);// false true
    }
    ```
*  *s修饰符 `提案中`
    点不能识别 换行符，回车符，行分割符等 s修饰符
    
* ES6为正则表达式新增了flags属性，会返回正则表达式的修饰符。

#### 字符串扩展
>字符串新增特性

* Unicode 表示法
* 遍历接口
* 模板字符串
* 新增方法10









