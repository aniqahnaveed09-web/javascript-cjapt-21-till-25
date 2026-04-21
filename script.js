// question 1 


// var Name = ["Aniqah", "Naveed"]
// var result = Name.join()

// alert("Thanks ," + result)

// question 2

// var mobile = prompt("enter your favorite mobile model")
// mobile.length
// document.write("my favorite mobile model is:" + mobile + "<br>")
// document.write("the lenght is : " + mobile.length)

// question 3
// var nationality = "Pakistani"
//  nationality.indexOf
// document.write("string:" + nationality + "<br>")
// document.write("Index of 'n' :" + nationality.indexOf("n") )


// question 4
// var greet = "hello world"
// var lastIndex = greet.lastIndexOf("l");
// document.write("string :" + greet + "<br>")
// document.write( "the last index of l is :" + lastIndex)

// question 5
// var nationality = "Pakistani"
// var character = nationality.charAt(3)
// document.write("string:" + nationality + "<br>")
// document.write("character at index 3 is:" + character )

// question 6


// const firstName = "aniqah";
// const lastName = "naveed";

// const fullName = firstName.concat(" ", lastName);

// alert( "thanks!" + fullName);

// question 7

// var city = "Hyderabad"
// var replace = city.replace("Hyder", "Islam")
// document.write("the city is:" + city + "<br>")
// document.write("replace by:" + replace )

// question 8


// var sentence = "Ali and Sami are bestfriends. they play cricket and football together"
// var replace = sentence.replaceAll("and" , "&")
// document.write("original sentence:" + sentence + "<br>")
// document.write("after replace:" + replace)


// question 9


// var strValue = "472";

// var numValue = Number(strValue);
// document.write("Value: " + strValue + "<br>");
// document.write("Type: " + typeof strValue + "<br>");

// document.write("Value: " + numValue + "<br>");
// document.write("Type: " + typeof numValue + "<br>");


// question 10 

// var dryfruit = prompt("enter your favorite dry fruit")
// var fruit = dryfruit.toUpperCase()
// document.write("the input is :" + dryfruit +"<br>")
// document.write("to upper case :" + fruit +"<br>")

// question 11
// var userInput = prompt("Enter a word:");
// var firstChar = userInput.slice(0, 1).toUpperCase();
// var otherChars = userInput.slice(1).toLowerCase();
// var titleCase = firstChar + otherChars;
// document.write("User input: " + userInput + "<br>");
// document.write("Title case: " + titleCase);

// question 12

// var num = 35.36;
// var numAsString = num.toString();

// var result = numAsString.replace(".", "");
// document.write("Number: " + num + "<br>");
// document.write("Result: " + result);


// question 13
//  var userName = prompt("enter your name")
//  var flag = false

// //  console.log(userName.charCodeAt(0))
// for (var i = 0 ; i < userName.length ; i++){
//     var code = userName.charCodeAt(i)
//     // console.log(userName[i] , code) 
//     if(code === 33 || code===44 || code===46 || code === 64){
      
//         flag = true
// }
// }
// if(flag){
//     console.log("enter a valid username")
// } else{

// console.log(userName)
// }


// question 14

// var A = ["cake" , "apple pie" , "cookie" , "chips" , "patties"]
// var userInput = prompt("welcome to ABC bakery!! what do you want to order sir/mam")
// var matchFound = false
// var Index ;
// for(i=0 ; i<A.length;i++){
//     if(A[i].toLowerCase() === userInput.toLowerCase()){
//         matchFound = true
//         Index = i
//         break
//     }
// }
// if (matchFound) {
   
//     alert(userInput + " is available at index " + Index + " in our bakery.");
// } else {
//     alert("We are sorry, " + userInput + " is not available in our bakery.");
// }



// question 15 

// var password = prompt("enter your password")
// var hasNumber = false
// var hasAlphabet = false
// for(var i = 0 ; i < password.length ; i++){
//     var code = password.charCodeAt(i)
// if(code >= 48 && code<=57){
//  hasNumber = true
// } 
// if((code >= 65 && code<= 90) || (code >= 97 && code<= 122)){
//  hasAlphabet = true   
// } 
 
// }
 
// if(hasNumber && hasAlphabet){
//     alert("valid password")
// }
// else{
//     alert("please enter a valid password")
// }

// question 16

// var university = "university of Karachi"
// var letter = university.split("")
// console.log(letter)


// question 17

// var country = prompt("enter your favorite country")
// var character = country.length

// var lastCharacter = country.charAt(character - 1)
// document.write ("User input is "  + country + "<br>")
// document.write ("Last character at of input is " + lastCharacter +"<br>")

// question 18

// var str = "the quick brown fox jumps over the lazy dog"
// var word = str.toLowerCase().split(" ")

// count = 0
// for (i =0 ; i < word.length ; i++){
//     if(word[i]==="the"){
//         count++
//     }
// }

// document.write("the text is :" + str + "<br>")
// document.write("there are " + count + " time occurence of word 'the' in the string")


