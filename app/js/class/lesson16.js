//修饰器 装饰器 Decorator 修饰器是一个函数用来修改类的行为
{
    let readonly =function (target,name,descriptor) {
        descriptor.writable=false;
        return descriptor;
    };


    class Test{
        @readonly
        time(){
            return '2017-03-11'
        }
    }

    let test =new Test();

    console.log(test.time());
    // test.time=function () {
    //     console.log('reset time');
    // };
    // console.log(test.time());
}
{
    let typename=function (target,name,descriptor) {
        target.myname = 'hello';
    };

    @typename
    class  Test{

    }

    console.log('类修饰符号',Test.myname);


}
{
    //第三方修饰器的js库：core-decorators; npm install core-decorator
    // 日志系统 日志统计 与点击

    let log=(type)=>{
        return function (target,name,decriptor) {
            let src_method = decriptor.value;
            decriptor.value =(...arg)=>{
                src_method.apply(target,arg);
                console.info(`log ${type}`);
            }
        }
    };

    class AD{
        @log('show')
        show(){
            console.info('ad is show');
        }
        @log('click')
        click(){
            console.info('ad is click');
        }
    }

    let ad = new AD()
    ad.show();
    ad.click();
}







