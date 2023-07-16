let myPromise = new Promise(function(resolve, reject) {
  let r = Math.random(); 
  if (r > 0.5) { 
    resolve(r);
  } else {
    reject(r);
  }
});

myPromise.then(
  (v) => console.log(`Win for value ${v}`),
  (v) => console.log(`Lose for value ${v}`)
);
