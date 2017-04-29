/**
 * Created by Administrator on 2017/4/26.
 */
{
    //es5 的正则写法
    let regex = new RegExp('xyz', 'i');
    let regex2 = new RegExp(/xyz/i);
    console.log(regex.test('xyz123'), regex.test('xyz123'));

    let regex3 = new RegExp(/xyz/ig, 'i');
    console.log(regex3.flags);//第二个修饰符覆盖前一个
}
{
    //y修饰符
    let s = "bbb_bb_b";
    let a1 = /b+/g;
    let a2 = /b+/y;

    console.log('one',a1.exec(s),a2.exec(s));// one ["bbb", index: 0, input: "bbb_bb_b"] ["bbb", index: 0, input: "bbb_bb_b"]
    console.log('two',a1.exec(s),a2.exec(s));// two ["bb", index: 4, input: "bbb_bb_b"] null
    console.log(a1.sticky,a2.sticky);// false true
}
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


















