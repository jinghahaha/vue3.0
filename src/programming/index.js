/* 实现一个简单的模板字符串替换 */
/* function render(template, context) {
  return template.replace(/{{(.*?)}}/g, (match, key) => context[key.trim()]);
}

const str = render('{{ name }}很厉害，才{{ age }}岁', { name: 'bottle', age: 15 });
 */

/* 将数组扁平化并去重、排序（升序） */
/* const list = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];

function delayer(arr) {
  return [...new Set(arr.flat(Infinity))].sort((a, b) => a - b);
}

console.log(list.toString().split(',').map(Number).sort((a, b) => a - b))

console.log(delayer(list)); */

/* ['1', '2', '3'].map(parseInt) what & why ? */
// console.log(['1', '2', '3'].map(parseInt))
// console.log(parseInt(11,2))

// // 防抖
// function debounce(fn, wait) {
//   let timer = null; // 创建一个标记用来存放定时器的返回值
//   return function() {
//     if (timer) clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn.apply(this, arguments);
//     }, wait)
//   }
// }
// function sayHi() { console.log(this, '防抖成功'); }
// var inp = document.getElementById('inp');
// inp.addEventListener('input', debounce(sayHi));

// 节流
/* function throttle(fn, delay) {
        let timer = null
        return function() {
          if (!timer) {
            timer = setTimeout(() => {
              fn.apply(this, arguments)
              timer = null
            }, delay)
          }
        }
      }

      function sayHi(e) {
        console.log(this, e.target.innerWidth, e.target.innerHeight);
      }
      window.addEventListener('resize', throttle(sayHi, 10000)); */

// const person = {
//   name: 'ssss',
//   age: 21,
//   *[Symbol.iterator]() {
//     yield* Object.values(this);
//   },
// };
// console.log([...person]);
// let list = ['sss'];
// console.log(list.push('sssaaa'))

// const obj = {1: 'a', 2: 'b', 3: 'c'};
// const set = new Set([1,2,3,4,5]);
// console.log(obj.hasOwnProperty('1')) // true
// console.log(obj.hasOwnProperty(1)) // false
// console.log(set.has('1')) // false
// console.log(set.has(1)) // true

// function Car () {
//   this.make = 'sss';
//   return { make: 'aaaaa' }
// }

// const myCar = new Car();
// console.log(myCar.make)

// const obj = { a: 'sss', b: 'b', a: 'dddd' };
// console.log(obj)

// 求数组中两数之和等于target的下标
/* const list = [2, 3, 4, 5, 6, 9, 10];
function sum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length - 1; j > i; j--) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}
console.log(sum(list, 16));

function hashSum(arr, target) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (map.has(target - arr[i])) {
      return [map.get(target - arr[i]), i];
    }
    map.set(arr[i], i);
  }
  return [];
}
console.log(hashSum(list, 16)); */
