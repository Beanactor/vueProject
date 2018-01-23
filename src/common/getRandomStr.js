function getRandomStr(num) {
	let data = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	let result = '';
	for(var i = 0; i < num; i++) {
		let r = Math.floor(Math.random() * 62); // 取得0-62间的随机数，目的是以此当下标取数组data里的值
		result += data[r]; // 输出20次随机数的同时，让rrr加20次，就是20位的随机字符串了
	}
	return result;
}
export default getRandomStr;