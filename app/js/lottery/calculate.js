class Calculate {

    /**
     * [computerCount 计算注数]
     * @param {number} active [当前选中的号码]
     * @param {string} play_name [当前玩法标识]
     * @return {number} count    [注数]
     */

    computeCount(active, play_name) {
        let count = 0;
        // 利用Set数据结构
        const exist = this.play_list.has(play_name);
        // es6 指定长度为active,填充内容为0的一个数组
        const arr = new Array(active).fill('0');
        if (exist && play_name.at(0) === 'r') {
            count = Calculate.combine(arr, play_name.split('')[1]).length;
        }
        return count;
    }

    /**
     * [computeBonus 奖金范围预测]
     * @param {number} active [当前选中的号码]
     * @param {string} play_name [当前玩法标识]
     * @return {number}     [注数]
     */
    computeBonus(active, play_name) {
        const play = play_name.split('');
        const self = this;
        let arr = new Array(play[1] * 1).fill(0);
        // 最大最小注数
        let min, max;
        if (play[0] === 'r') {
            // 最小命中数 min_active
            let min_active = 5 - (11 - active);
            if (min_active > 0) {
                if (min_active - play[1] >= 0) {
                    arr = new Array(min_active).fill(0);
                    min = Calculate.combine(arr, play[1]).length;
                } else {
                    if (play[1] - 5 > 0 && active - play[1] >= 0) {
                        arr = new Array(active - 5).fill(0);
                        min = Calculate.combine(arr, play[1] - 5).length;
                    } else {
                        min = active - play[1] > -1 ? 1 : 0;
                    }
                }
            } else {
                min = active - play[1] > -1 ? 1 : 0;
            }
            let max_active = Math.min(active, 5);
            if (play[1] - 5 > 0) {
                if (active - play[1] >= 0) {
                    arr = new Array(active - 5).fill(0);
                    max = Calculate.combine(arr, play[1] - 5).length;
                } else {

                }
            } else if (play[1] - 5 < 0) {
                arr = new Array(Math.min(active, 5)).fill(0);
                max = Calculate.combine(arr, play[1]).length;
            } else {
                max = 1;
            }
        }
        return [min, max].map(item => item * self.play_list.get(play_name).bonus);

    }

    /**
     * [combine 组合运算] 类的静态方法
     * @param {Array.<*>} arr  [参与组合运算的数据]
     * @param {number} size [组合运算的基数]
     * @return {number} [计算注数]
     */

    static combine(arr, size) {
        let allResult = [];
        // es6递归如果是用argments.call要使用匿名函数
        (function f(arr, size, result) {
            let arrLen = arr.length;
            if (size > arrLen) {
                return;
            }
            if (size === arrLen) {
                allResult.push([].concat(result, arr));
            } else {
                for (let i = 0; i < arrLen; i++) {
                    let newResult = [].concat(result);
                    newResult.push(arr[i]);
                    if (size === 1) {
                        allResult.push(newResult);
                    } else {
                        let newArr = [].concat(arr);
                        newArr.splice(0, i + 1);
                        f(newArr, size - 1, newResult);
                    }
                }
            }
        })(arr, size, [])
        return allResult;
    }


}


export default Calculate






