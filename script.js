// complete the given function

function palindrome(str){
	 var cleaned = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    // reverse the cleaned string
    var reversed = cleaned.split('').reverse().join('');

    // compare the cleaned string with the reversed string
    return cleaned === reversed;
}
module.exports = palindrome
