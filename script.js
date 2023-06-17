// complete the given function

function palindrome(str){
	 var cleaned = str.toLowerCase();
	var newstr=cleaned.split(' ').join();

    // reverse the cleaned string
    var reversed = newstr.split('').reverse().join();

    // compare the cleaned string with the reversed string
    return newstr === reversed;
}
module.exports = palindrome
