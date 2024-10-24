function getIntString (time){
    const hour = parseInt(time/3600);
    const remainingTime = time%3600;
    const minute = parseInt(remainingTime/60);
    const second = remainingTime%60;
    return `${hour}hr ${minute}m ${second}s`;
}
console.log(getIntString(8678));