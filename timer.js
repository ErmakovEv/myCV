function timer1() {
    let nowDate = new Date();
    // let achiveDate = new Date(2023,0,28,17,0,0); //Задаем дату, к которой будет осуществляться обратный отсчет
    let achiveDate = new Date('may 05, 2022 22:00:00');
    // let result = (achiveDate - nowDate)+1000;
    let result = (nowDate - achiveDate)+1000;
    if (result < 0) {
        let elmnt = document.getElementById('timer');
        elmnt.innerHTML = ' - : - - : - - : - - ';
        return undefined;
    }
    let seconds = Math.floor((result/1000)%60);
    let minutes = Math.floor((result/1000/60)%60);
    let hours = Math.floor((result/1000/60/60)%24);
    let days = Math.floor(result/1000/60/60/24);
    if (seconds < 10) seconds = '0' + seconds;
    if (minutes < 10) minutes = '0' + minutes;
    if (hours < 10) hours = '0' + hours;
    let elmnt = document.getElementById('timer1');
    elmnt.innerHTML = days + ':' + hours + ':' + minutes + ':' + seconds;
    setTimeout(timer1, 1000);
}

function timer2() {
    let nowDate = new Date();
    // let achiveDate = new Date(2023,0,28,17,0,0); //Задаем дату, к которой будет осуществляться обратный отсчет
    let achiveDate = new Date('may 05, 2021 22:00:00');
    // let result = (achiveDate - nowDate)+1000;
    let result = (nowDate - achiveDate)+1000;
    if (result < 0) {
        let elmnt = document.getElementById('timer2');
        elmnt.innerHTML = ' - : - - : - - : - - ';
        return undefined;
    }
    let seconds = Math.floor((result/1000)%60);
    let minutes = Math.floor((result/1000/60)%60);
    let hours = Math.floor((result/1000/60/60)%24);
    let days = Math.floor(result/1000/60/60/24);
    if (seconds < 10) seconds = '0' + seconds;
    if (minutes < 10) minutes = '0' + minutes;
    if (hours < 10) hours = '0' + hours;
    let elmnt = document.getElementById('timer2');
    elmnt.innerHTML = days + ':' + hours + ':' + minutes + ':' + seconds;
    setTimeout(timer2, 1000);
}

window.onload = function() {
    timer1();
    timer2();
}