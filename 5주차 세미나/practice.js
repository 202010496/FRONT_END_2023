// 동기는 순서대로, 비동기는 응답에 관계없이 바로 다음 동작 실행
function work() {
    setTimeout(handler: () => {
        const start = Data.now();   // 현재 시간을 start 변수에 지정
        for (let i=0; i<100000; i++) {} 
        const end = Date.now();   // start + for문이 돌아가는 시간을 합친 후의 현재 시간
        console.log(end-start+'ms');
    }, timeout: 500000)
}

console.log('작업 시작');
work();
console.log('작업 끝');