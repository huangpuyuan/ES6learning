// set 和 Map
{
    let list = new Set();
    list.add(5);
    list.add(7);

    console.log('size', list.size);
    console.log('size', list);
}
{
    let arr = [1, 2, 3, 4, 5];
    let list = new Set(arr);
    console.log('size', list.size);
    console.log(list);
}
{
    let list = new Set();
    list.add(1);
    list.add(2);
    list.add(1);
    console.log(list);

    //去重
    let arr = [1, 2, 3, 4, 1, 2, '2', 3];
    let list2 = new Set(arr);
    console.log('unique', list2);

}
{
    let arr = ['add', 'delete', 'clear', 'has'];
    let list = new Set(arr);

    console.log('has', list.has('add'));
    console.log('delete', list.delete('add'), list);
    console.log('delete', list.clear());
}

{
    //遍历
    let arr = ['add', 'delete', 'clear', 'has'];
    let list = new Set(arr);

    for (let key of list.keys()) {
        console.log('keys', key);
    }
    for (let value of list) {
        console.log('values', value);
    }
    for (let [key, value] of list.entries()) {
        console.log('key,values', key, value);
    }
    list.forEach(function (item) {
        console.log(item);
    })

}
{
    // WeakSet只能是对象 弱引用
    let weakList = new WeakSet();
    let arg = {1: 1};
    weakList.add(arg);
    console.log(weakList);
}

{
    let map = new Map();
    let arr = ['123'];
    map.set(arr, 456);
    console.log(map, map.get(arr));
}
{
    let map = new Map([['a', 123], ['b', 456]]);
    console.log(map);
    console.log('size', map.size);
    console.log('delete', map.delete('a'), map);
    console.log('clear', map.clear());
}
{   //k值只能是对象
    let weakMap = new WeakMap();
    let o = {};
    weakMap.set(o, 123);
    console.log(weakMap);
}

{
    let map = new Map();
    let array = [];
    //增
    map.set('t', 1);
    array.push({t: 1});

    console.log('map-array', map, array);

    //查
    let map_exist = map.has('t');
    let array_exist = array.find(item => item.t);
    console.log('map-array', map_exist, array_exist);

    //改
    map.set('t', 2);
    array.forEach(item => item.t ? item.t = 2 : '');
    console.log('map-array-modify', map, array);

    //删除
    map.delete('t');
    let index = array.findIndex(item => item.t);
    array.splice(index, 1);
    console.log('map-array-modify', map, array);
}

{
    let set = new Set();
    let array = [];

    // 增
    let obj = {t: 1};
    set.add(obj);
    array.push({t: 1});
    console.log('set-array', set, array);

    //查
    let set_exist = set.has(obj);
    let array_exist = array.find(item => item.t);
    console.log('set-array', set_exist, array_exist);

    //改
    set.forEach(item => item.t ? item.t = 2 : '');
    array.forEach(item => item.t ? item.t = 2 : '');
    console.log('set-array-modify', set, array);

    //删除

    set.forEach(item => item.t ? set.delete(item) : '');
    let index = array.findIndex(item => item.t);
    array.splice(index, 1);
    console.log('set-array-empty', set, array);
}
{
    //map ,set ,object
    let item = {t: 1};
    let map = new Map();
    let set = new Set();
    let obj = {};

    //增
    map.set('t', 1);
    set.add(item);
    obj['t'] = 1;

    console.info('map-set-obj', obj, map, set);

    //查
    console.info({
        map_exist: map.has('t'),
        set_exist: set.has(item),
        obj_exist: 't' in obj
    });

    //改

    map.set('t',2);
    item.t=2;
    obj['t']=2;
    console.info('map-set-obj', obj, map, set);

    //删除
    map.delete('t');
    set.delete(item);
    delete obj['t'];
    console.info('map-set-obj', obj, map, set);

    console.log('作增删改查的时候优先使用map，保证唯一性使用set,放弃传统的数组和object')
}







