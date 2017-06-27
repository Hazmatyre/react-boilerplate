function addPromise(a,b) {
  // return promise
  // then add them up,
  // if not 2 valid numbers, reject,
  // if (typeof a === 'number' && typeof b === 'number')

  return new Promise(function (resolve, reject) {
    setTimeout(function() {
      if (typeof a === 'number' && typeof b === 'number')
        resolve(a+b);
      else
        reject('One of the numbers is not valid!')
    }, 1000);
  });
}

addPromise(1,1).then(function (x) {
  console.log('promise success', x);
}, function(err) {
  console.log('promise error', err);
});

addPromise(1,5).then(function (x) {
  console.log('promise success', x);
}, function(err) {
  console.log('promise error', err);
});

addPromise(1,'welll').then(function (x) {
  console.log('promise success', x);
}, function(err) {
  console.log('promise error', err);
});

// addPromise(1+2);
//
// addPromise('WOW' + 2);
// if (typeof 7 === 'number')
