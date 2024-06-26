const timeout = setTimeout(()=>{
    console.log('1.5초 후에 실행');
}, 1500);

const interval = setInterval(()=>{
    console.log('1초 마다 실행');
}, 1000)

const timeout2 = setTimeout(() => {
    console.log('실행될 수 없습니다.');
}, 3000);

setTimeout(() => {
    clearInterval(interval);
    clearTimeout(timeout2)
}, 2500)

const immediate = setImmediate(()=>{
    console.log('즉시 실행');
})

const immediate2 = setImmediate(() => {
    console.log('이건 실행되지 않습니다.');
})
clearImmediate(immediate2);