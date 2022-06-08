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
    b: 2
}
obj.c = 3;
delete obj.c

const map = new Map()
map.set("a", 1)
map.set("b", 2)

map.delete("a")