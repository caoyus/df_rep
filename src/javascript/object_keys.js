/**
 * 返回的属性具有什么特性
 * 对像中具有可枚举特性的属性
 */

const obj01 = {
  a: "aa",
  b: "bb",
  c: "cc",
};

const res = Object.keys(obj01);
console.log(res); //返回的是一个abc的数组["a","b","c"]

const obj02 = Object.create(
  {},
  {
    getFoo: {
      value: () => this.foo,
      enumerable: true,
    },
  }
);

obj02.foo = 1;

const res01 = Object.keys(obj02);
console.log(res01); //["foo"]原因是里面没有去设定emumberable属性，默认是false

/**
 * 包括继承的属性
 */

class A {
  constructor(name) {
    this.name = name;
  }
}

class B extends A {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
}

const b = new B("cat", 1);

console.log(Object.keys(b)); //["name","age"]

/**
 * 返回的属性顺序是什么样的
 * number:大于0的整数会进行排序；负数和小数不会进行排序，会当作字符串进行处理
 * string:会进行定义的顺序返回；
 * Symbol：过滤掉不返回；
 */
const sa = Symbol("a");
const obj03 = {
  1: "1",
  a: "a",
  3: "3",
  c: "c",
  2: "2",
  b: "b",
};

obj03[sa] = "sa";
console.log(Object.keys(obj03)); //[ '1', '2', '3', 'a', 'c', 'b' ]

/**
 * null和undefined是不能转化成对象的，所以用object.keys（）会报错
 * 对于数字类型的他会转换成一个Number()包裹的对象,但是他里面没有属性值，所以他会返回一个[];
 * 对于字符串类型的他会转换成一个String()进行包裹，但里面会有属性，返回一个对象
 */

console.log(Object.keys(123)); //[]

console.log(Object.keys("123")); //["1","2","3"]



