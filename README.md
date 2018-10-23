# imooc-mode

## enviromenet

> webpack

```console
npm install webpack webpack-cli webpack-dev-server html-webpack-plugin -D
```

## chap2

- public 完全开放
- protected 对子类开放
- private 对自己开放
- `_` 开头是 private
- UML 类图

## chap3

> 五大设计原则

1. S - 单一责任原则：一个程序只做好一件事
2. O - 开放封闭原则：对扩展开放，对修改封闭
3. L - 李氏置换原则：子类覆盖父类，父类出现子类就能出现
4. I - 接口独立原则：接口独立
5. D - 依赖导致原则：面向接口，依赖抽象不依赖具体

> 23 种模式

1. 工厂模式 (工厂方法模式, 抽象工厂模式, 建造者模式)
2. 单例模式
3. 原型模式
4. 适配器模式: 返回不一样接口
5. 装饰器模式: 扩展功能, 原有功能不变且可使用
6. 代理模式: 显示加上限制的原有功能, 返回一样接口
7. 外观模式: 为子系统中的一组接口提供一个高层接口，使用者使用这个高层接口
8. 桥接模式
9. 组合模式
10. 享元模式
11. 策略模式
12. 模板方法模式
13. 观察者模式: 发布 & 订阅， 一对多, 一对一
14. 迭代器模式: 顺序访问集合，无需知道集合内部结构
15. 责任连模式
16. 命令模式
17. 备忘录模式
18. 状态模式
19. 访问者模式
20. 中介模式
21. 解释器模式

## chap3 factory pattern

## chap7

```console
npm i core-decorators -S
```

```js
import { deprecate } from "core-decorators"
import { readonly } from "core-decorators"
```
