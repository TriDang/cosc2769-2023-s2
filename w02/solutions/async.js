function f1() {
  return new Promise(function(resolve) {
    setTimeout(() => {
      let r = Math.random();
      resolve(r);
    }, 1000);
  });
}

async function f2() {
  return new Promise(function(resolve) {
    setTimeout(() => {
      let r = Math.random();
      resolve(r);
    }, 1000);
  });
}

// Using Promise chain (2 seconds)

// console.log(new Date());
// f1().then(
//   (n1) => {
//     f2().then(
//       (n2) => {
//         console.log(n1 + n2);
//         console.log(new Date());
//       }
//     )
//   }
// );


// Using async/await (2 seconds)

// async function calcSum() {
//   const n1 = await f1();
//   const n2 = await f2();
//   return n1 + n2;
// }

// console.log(new Date());
// calcSum().then(n => {
//   console.log(n);
//   console.log(new Date());
// });

// Using Promise.all (1 second)

async function calcSumFaster() {
  const p1 = f1();
  const p2 = f2();
  return Promise.all([p1, p2]);
}

console.log(new Date());
calcSumFaster().then( (values) => {
  console.log(values[0] + values[1]);
  console.log(new Date());
});
