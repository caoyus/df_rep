/**
 * Object是最常见的一种引用类型数据，可用于存储键值对的集合
 * Map是键值对的集合，采用了hash结构存储；
 * 两者的共同点：键值对的动态集合，支持增加和删除键值对；
 * 两者的不同点：
 * 1.构造方式
 * 2。键的类型；
 * 3.键的顺序；
 * 4.键值对size;
 * 5.键值对的访问；
 * 6.迭代器；
 * 7.JSON序列化；
 * 8.应用场景
 */

const obj = {
  a: 1,
  b: 2,
};
//添加和删除
obj.c = 3;
delete obj.c;

const map = new Map();
//添加和删除
map.set("a", 1);
map.set("b", 2);

map.delete("a");

// 构造方法

const _obj = new Object();
const _obj01 = Object.create();

const _map = new Map();
const _map01 = new Map([["a", "1"]]);

/**
 * 键的类型：
 * Object键类型必须是String或者Symbol,如果非String类型，会进行数据类型的转换
 */

const obj2 = {
  a: 1,
};
const arr1 = [1, 2];
obj2[arr1] = "arr"; //他会将数组转换成字符串，另外比如说数字3和字符串3会覆盖，原因就是数字3会自动转换成字符串3

/**
 * Map的键类型，包括对象，数组，函数等等，不会进行数字类型的转换，在添加价值对时，会进行严格的相等判断，从而来判定键属性是否已存在；但是NaN是特例，NaN在进行相等判断是是false，所以NaN覆盖不了；
 */

const map02 = new Map();
map02.set("a", 1);
map02.set("2", 2);
map02.set(3, 3);
map02.set(arr1, "arr");
map02.set(NaN, 1);
map02.set(NaN, 2);

/**
 * 键的顺序：
 * Object:key是无序的，不会按照添加的顺序返回；
 * 1. 对于大于等于0的整数会按照大小进行排序，对于负数和小小数会按照字符串进行处理；
 * 2.对于String类型的会按照定义的顺序输出；
 * 3.对于Symbol类型，会直接过滤掉，不会进行输出；
 * 如果想要symbol类型的属性要通过Object.getOwnPropertySymbols()方法进行设置；
 */

const obj03 = {
  2: 2,
  1: 1,
  b: "b",
  1.1: 1.1,
  0: 0,
  a: "a",
  [Symbol("s1")]: "s2",
  [Symbol("s2")]: "s1",
};

for (let k in obj03) {
  console.log(k);
}

/**
 * 对于map是有序的，会按照插入的顺序进行返回；
 */

/**
 * 键值对的size:
 * object：只能手动计算，通过Object.keys()方法或者通过for in循环统计；
 * 对于map而言直接通过size属性访问，map.size
 */

map02.size;

/**
 * 键值对的访问，object以点或者中括号的形式进行访问，
 * map用的是get;
 */

//添加获取和删除
map02.set("name", "zs");
map02.get("name");
map02.delete("name");

//判断属性是否存在；

map02.has("name");
//获取所以属性名；
map02.keys();

// 清空map
map02.clear();

/**
 * 迭代器--for ...of
 *
 * object本身不具有Iterator特性，默认情况下不能使用for of进行遍历；
 * map结构的keys,values,entries方法返回值都具有Iterator特性；
 */

for (let [key, value] of map02.entries()) {
  console.log(key, value);
}

/**
 * JSON序列化；
 * Object类型可以通过JSON.stringify()进行序列化操作;
 * map结构不能直接进行JSON序列化的；要想JSON序列化；先将map转换成数组
 */

JSON.stringify(Array.from(map02));

/**
 * 使用场景；
 *
 * Object：
 * 1.仅作为数据存储，并且属性仅为字符串或者symbol;
 * 2.需要进行序列化转换为json传输时；
 * 3.当作一个对象的实例，需要保留自己的属性和方法时；
 *
 * Map:
 * 1.会频繁更新和删除键值对时；
 * 2.存储大量数据时，尤其是key类型未知的情况下；
 * 3.需要频繁进行迭代处理
 */
