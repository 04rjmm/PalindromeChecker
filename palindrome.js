
document.getElementById("submit").onclick = palindrome;


function palindrome() {
  var word  = document.getElementById("word").value;
  var word_strip = word.replace(/[\W_]/g, '');
  var word_low   = word_strip.toLowerCase();
  if (word_low === word_low.split('').reverse().join('')) {
	alert (word + " is a palindrome!");  
  }
  else {
	alert (word + " is not a palindrome.") 
  }
}

