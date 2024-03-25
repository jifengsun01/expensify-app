
const promise = new Promise((resovle, reject) => {
    setTimeout(() => {
        resovle('This is my resolved data');
        //reject('wrong!');
    }, 5000)
});


console.log('before')

promise.then((data) => {
    console.log(data)
    //return 'some data'

    return new Promise((resovle, reject) => {
        setTimeout(() => {
            resovle('This is my other promise');
        }, 5000)
    });

}).then((str) => {
    console.log('does this run?', str)
}).catch((error) => {
    console.log('error: ', error)
})

console.log('after')