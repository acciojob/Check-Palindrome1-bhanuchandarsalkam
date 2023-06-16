// complete the given function

function palindrome(str){
let newstr=str.split(" ").join();
	let str2=newstr.split("").reverse().join();
	if(new==str2)
	{
		return true;
	}
	return false;
}
module.exports = palindrome
