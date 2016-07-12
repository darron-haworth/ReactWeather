
//Challenge Area
function addPromise(a, b) {
    return new Promise(function (resolve, reject) {
        if(typeof a === 'number' && typeof b === 'number') {
            resolve (a + b );
        } else {
            reject('a & b must be numbers!');
        }
    });
}


addPromise(2,3).then(function (sum) {
    console.log ('success', sum);
}, function (err) {
    console.log('error', err);
});

addPromise(2,'X').then(function (sum) {
    console.log ('success', sum);
}, function (err) {
    console.log('error', err);
});

addPromise(2, null).then(function (sum) {
    console.log ('this should not log');
}, function (err) {
    console.log('error', err);
});



