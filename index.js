module.exports = function generateID (prefix) {
    // 13 digits millisecond
    const now = new Date();
    const millisecond = now.getTime();

    // 3 digits random number
    const randomNumber = Math.floor((Math.random() * (999-100+1)) + 100);;

    return `${prefix}-${millisecond}-${randomNumber}`;
}