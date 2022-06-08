/**
 * javascript中大叔相加的问题：
 * 6453234253452432+7326362323251323
 *
 * 实现思路：将大数转换成字符串字符串转换成数组，数组中的每一个元素相加+进位>10取个位，仅为=1
 * 进位<10取个位，进位=0；
 * 最后一位，仍然有进位，进位添加到结果里
 */

const bigNumberSum = (str1, str2) => {
    const arr1 = str1.split("").reverse();
    const arr2 = str2.split("").reverse();
    const len = Math.max(arr1.length, arr2.length)
    const res = []
    let flag = 0;
    for (let i = 0; i < len; i++) {
        const num1 = Number(arr1[i]) || 0;
        const num2 = Number(arr2[i]) || 0;
        let sum = num1 + num2 + flag;
        if (sum >= 10) {
            sum = sum % 10;
            flag = 1;
        } else {
            flag = 0
        }
        res.push(sum)
        if (i === len - 1 && flag) {
            res.push(flag)
        }
    }
    return res.reverse().join()
}
