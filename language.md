## es6语法

#### 解构赋值

* 数组解构赋值
    ```es6
    {
        let a,b,rest;
        [a,b,...rest]=[1,2,3,4,5,6];
        console.log(a,b,rest); //输出 1 2 [3, 4, 5, 6]
    }
    {
        let a,b,c,rest;
        [a,b,c=3]=[1,2];
        console.log(a,b,c);//输出 1 2 3
    }
    {
        // 变量交换
        let a=1;
        let b=2;
        [a,b]=[b,a];
        console.log(a,b);// 2 1
    }   
    {
        function  f(){
            return [1,2]
        }
        let a,b;
        [a,b]=f();
        console.log(a,b);// 1 2
    }
    {
        function f(){
            return [1,2,3,4,5]
        }
        let a,b,c;
        [a,,,b]=f();
        console.log(a,b); //1 4
    }
    {
        function f(){
            return [1,2,3,4,5]
        }
        let a,b,c;
        [a,,...b]=f();
        console.log(a,b); //1 [3,4,5]
    }
        
    ```
* 对象解构赋值
    ```es6
    {
        let a,b;
        ({a,b}={a:1,b:2})
        console.log(a,b);
    }
    {
        let o={p:42,q:true};
        let {p,q}=o;
        console.log(p,q);// 42 ture
    }
    
    {
        let {a=10,b=5}={a:3};
        console.log(a,b); // 3 5
    }
    {
        let metaData ={
            title:'abc',
            test:[{
                title:'test',
                desc:'description'
            }]
        }
        let {title:esTitle,test:[{title:cnTitle}]}=metaData;
    
        console.log(esTitle,cnTitle); // abc test
    }
    ```
* 字符串解构赋值
* 布尔值解构赋值
* 函数参数解构赋值
   
* 数值解构赋值
    
