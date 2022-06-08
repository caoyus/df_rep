/**
 * 便利对象的方法：
 *
 * 对象的划分：
 * 原型属性；
 * 对象自身可枚举的属性
 * 对象自身的不可枚举的属性
 * Symbol属性
 *
 */

/**
 * for in 获取对象自身的可枚举的属性+原型链上的可枚举的属性，不包含symbol属性
 */
//原型属性
const obj01 = Object.create({
  bar: "bar",
});
//对象自身可枚举的属性
obj01.foo = "foo";

//对象自身不可枚举的属性

Object.defineProperties(obj, "name", {
  emumberable: false,
  value: "tomoya",
});
//symbol属性

obj[Symbol("age")] = "age";

for (let k in obj01) {
  console.log(key, onj[k]);
}

function Person(name) {
  this.name = name;
}
Person.prototype.getName = function () {
  return this.name;
};

const p = new Person("zs");
for (let k in p) {
  if (p.hasOwnProperty(k)) {
    console.log(k, p[k]); //name zs,加判断就不会输出原型上的方法
  }
}

class Student {
  constructor(name) {
    this.name = name;
  }
  //类中的方法是不可枚举的
  getName() {
    return this.name;
  }
}

const stu = new Student("ls");

for (let k in stu) {
  log(k, stu[k]); //name ls
}

// for in 属性顺序
// 1.对于大于等于0的整数，会按照大小顺序进行排序，对于小数或者负数会当字符串进行处理
// 2.对于字符串会按照定义的顺序进行输出；
// 3.symbol类型会过滤掉

/**
 * 2. Object。keys()
 *
 * 获取对象自身的可枚举的属性；
 * 不包含原型链上可枚举的属性和symbol属性；
 *
 */
