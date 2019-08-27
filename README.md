# PalindromeChecker
Enter a word to see if it is a palindrome

palindrome.js uses an event listener to detect when the submit button in the HTML form is clicked and then runs the function 'palindrome'. This function detects the value entered into the text input box in the form and then removes all non-alphanumeric characters with the word.replace(/[\W_]/g,'') statement where /g means replace all occurreces and the '' is what to replace it with.
We then update the new replaced string so that everything is in lowercase.
The if statement is used to check whether the above lowercase, stripped word entered matches the same word when split into each character, reversed and joined back together again.
If the statement returns true, we have an alert to tell us the word is a palindrome.
Otherwise an alert appears to tell us it is not a palindrome.
