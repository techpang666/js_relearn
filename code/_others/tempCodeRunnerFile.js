
// parseFloat会始终忽略掉开头的0 只能解析十进制 所以不能指定底数 十六进制会返回0
console.log(parseFloat('00000078')); /* 0 */