/**
 * Created by Administrator on 2017/4/26.
 */
{
    // 2进制0b,8进制0o
    console.log('B',0b111110111);
    console.log('o',0o767);
}
{
    //是否有尽
    console.log('is',Number.isFinite(15));
    console.log('NaN',Number.isFinite(NaN));
    console.log('1/0',Number.isFinite('true'/0));
    console.log('NaN',Number.isNaN(NaN));
    console.log('NaN',Number.isNaN(0));
}
{
    console.log('25',Number.isInteger(25));
    console.log('25.0',Number.isInteger(25.0));
    console.log('25.1',Number.isInteger(25.1));
    console.log('25',Number.isInteger('25'));
}
{
    // 判断数的上下限2^53次方
    console.log(Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER);
    console.log('10',Number.isSafeInteger(10));
    console.log('a',Number.isSafeInteger('a'));
}
{
    console.log(4.1,Math.trunc(4.1));
    console.log(4.9,Math.trunc(4.9));
}









