
let num = 2
let res = num++ * (++num + num - num--) /* 3 * (2 + 3 - 2) */
console.log(res, num); /* dddd */