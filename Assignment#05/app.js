//                                             Important Note                   
//
//I have done this assignment in the form of an application, therefore you can see each task in the form of function because
// I call these function on button click of html page buttons.


/////////////////////////////// Chapter 1 ////////////////////////////////////////

function task1_1(){
    alert("Assalam-o-alikum!");
}

function task1_2(){
    alert("Error! Please enter a valid password.");
}

function task1_3(){
    alert("Welcome to JS Land...\nHappy Coding!");
}

function task1_4(){
    alert("Welcome to JS Land...");
    alert("Happy Coding!");
}

function task1_5(){
    alert ('refer to console.')
    console.log("Hello...I can run JS through my web browser's console");
}

//////////////////////////////// Chapter 2 //////////////////////////////////////

function task2_1(){
    var username;
}

function task2_2(){
    var myName = ("Iqra Naz");
}

function task2_3(){
    var message = ("Hello World");
    alert(message);
}

function task2_4(){
    var name = ("Jhone Doe")
    var age = ("15 years old")
    var certification = ("Certified Mobile Application Development")
    alert(name)
    alert(age)
    alert(certification)
}

function task2_5(){
    var a = ("PIZZA")
    alert("PIZZA\nPIZZ\nPIZ\nPI\nP")
}

function task2_6(){
    var email = ("example@example.com")
    alert("My email address is " + email)
}

function task2_7(){
    var book = ("A smarter way to learn JavaScript")
    alert("I am trying to learn from the Book " + book)
}

function task2_8(){
    document.write("Yah! I can write HTML content through JavaScript", "<br>");
}

function task2_9(){
    var pattern = ("▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬")
    alert(pattern)
    document.write(pattern)
}

/////////////////////////////// chapter 3 ///////////////////////////////////////

function task3_1(){
    var age = (19)
    alert("I am " + age + " years old")
}

function task3_2(){
    var track = (14)
    alert("You have visited this site " + track + " times.")
}

function task3_3(){
    var birthYear = (2001)
document.write("<br><br>" + "My birth year is " + birthYear + "<br>" + "Data type of my declared variable is number")
}

function task3_4(){
    var name = ("John Doe").bold()
    var product = ("T-Shirts(s)").bold()
    var quantity = ("5").bold()
    document.write("<br>" + name + " ordered " + quantity + " " + product + " on XYZ Clothing store" + "<br><br>")
}

/////////////////////////////// Chapter 4 ///////////////////////////////////////

function task4_1(){
    var a, b, c;
    alert ('declared variables a, b, c')
}

function task4_2(){
    var a, b, c, d, e; 
    alert ('var a, b, c, d, e; // legal variables')
    alert ('var 1a,? b, !c, "d,-e // illegal variables')
}

function task4_3(){
    var heading = ("Rules for naming JS variables" + "<br>").bold()
    document.write(heading)
    document.write("<br>" + "Variable names can only contain, numbers, $ and _. For example $my_1stVariable")
    document.write("<br>" + "Variables must begin with a letter, $, or _. For example $name, _name or name")
    document.write("<br>" + "Variable names are case sensitive")
    document.write("<br>" + "Variable names should not be JS keywords" + "<br><br>")
}

/////////////////////////////// Chapter 5 //////////////////////////////////////

function task5_1(){
    var num1 = 3
    var num2 = 5
    document.write("Sum of " + num1 + " and " + num2 + " is " + (num1 + num2))
}

function task5_2(){
    var num1 = 3
    var num2 = 5
    document.write("<br>" + "Subtraction of " + num1 + " and " + num2 + " is " + (num1 - num2))
    document.write("<br>" + "Multiplication of " + num1 + " and " + num2 + " is " + (num1 * num2))
    document.write("<br>" + "Division of " + num1 + " and " + num2 + " is " + (num1 / num2))
    document.write("<br>" + "Modulus of " + num1 + " and " + num2 + " is " + (num1 % num2))
}

function task5_3(){
    var number
    document.write("<br>" + "<br>" + "Value after variable declaration is " + number)
    number = 5
    document.write("<br>" + "Initial value: " + number)
    document.write("<br>" + "Value after increment is: " + ++number)
    var number1 = number + 7
    document.write("<br>" + "Value after addition is: " + number1)
    document.write("<br>" + "Value after decrement is: " + --number1)
    document.write("<br>" + "The remainder is: " + number1 % 3)
}

function task5_4(){
    var cost = 600
    var ticket = 5
    document.write("<br>" + "The cost to buy " + ticket + " tickets to a movie is " + cost * ticket + "PKR")  
}

function task5_5(){
    var i
    document.write("<br>" + "<br>" + "Table of 4" + "<br>")
    for (i = 1; i <= 10; i++) {
        document.write("4x" + i + "=" + 4 * i + "<br>")
}
}

function task5_6(){
    var celsius = 25
    document.write("<br>" + celsius + "°C is " + ((celsius * 9 / 5) + 32) + "°F")
    var fahrenheit = 70
    document.write("<br>" + fahrenheit + "°F is " + (fahrenheit - 32) * 5 / 9 + "°C")
}

function task5_7(){
    document.write("<br>" + "<br>" + "Shopping Cart" + "<br>")
    var pi1 = 650, pi2 = 100, oi1 = 3, oi2 = 7, sc = 100
    document.write("<br>" + "Price of item 1 is " + pi1)
    document.write("<br>" + "Ordered quantity of item 1 is " + oi1)
    document.write("<br>" + "Price of item 2 is " + pi2)
    document.write("<br>" + "Ordered quantity of item 2 is " + oi2)
    document.write("<br>" + "Shiping charges " + sc)
    document.write("<br>" + "<br>" + "Total cost of your order is " + ((pi1 * oi1) + (pi2 * oi2) + sc))
}

function task5_8(){
    document.write("<br>" + "<br>" + "Marks Sheet" + "<br>")
    var marksobtained = 804
    var totalmarks = 980
    document.write("<br>" + "Total marks " + totalmarks)
    document.write("<br>" + "Marks obtained " + marksobtained)
    document.write("<br>" + "Percentage: " + (marksobtained / totalmarks * 100) + "%")
}

function task5_9(){
    document.write("<br>" + "<br>" + "Currency in PKR" + "<br>")
    var dollar = 10, saudiriyal = 25
    document.write("<br>" + "Total currency in PKR:" + ((dollar * 104.80) + (saudiriyal * 28)))
}

function task5_10(){
    var integer = 9
    document.write("<br>" + "<br>" + (((integer + 5) * 10) / 2))
}

function task5_11(){
    document.write("<br>" + "<br>" + "Age Calculator" + "<br>")
    var currentyear = 2020, birthyear = 2001
    document.write("<br>" + "Current year: " + currentyear)
    document.write("<br>" + "Birth year: " + birthyear)
    document.write("<br>" + "Your age is: " + (currentyear - birthYear))
}

function task5_12(){
    document.write("<br>" + "<br>" + "The Geometrizer" + "<br>")
    var radius = 20
    document.write("<br>" + "Radius of cicle is:" + radius)
    document.write("<br>" + "The circumference is:" + (2 * 3.1415926535897932 * radius))
    document.write("<br>" + "The area is:" + (3.1415926535897932 * radius * radius))
}

function task5_13(){
    document.write("<br>" + "<br>" + "The Lifetime Supply Calculator" + "<br>")
    var snack = ("chocolate chip")
    var age = 19, maxage = 80, perday = 3
    document.write("<br>" + "Favourite Snack: " + snack)
    document.write("<br>" + "Current age: " + age)
    document.write("<br>" + "Estimated Maximum Age: " + maxage)
    document.write("<br>" + "Amount of snack per day: " + perday)
    document.write("<br>" + "You will need " + ((maxage - age) * perday) + " " + snack + " to last you until the ripe old age of " + maxage)
}

//////////////////////////////// Chapter 6-9 /////////////////////////////////////

function task6_1(){
    var a = 10
    document.write("<br>" + "<br>" + "Result:" + "<br>")
    document.write("<br>" + "The value of a is: " + a)
    document.write("<br>" + "<br>" + "------------------------------" + "<br>")
    document.write("<br>" + "The value of ++a is: " + (++a))
    document.write("<br>" + "Now the value of a is: " + a)
    document.write("<br>" + "<br>" + "The value of a++ is: " + (a++))
    document.write("<br>" + "Now the value of a is: " + a)
    document.write("<br>" + "<br>" + "The value of --a is: " + (--a))
    document.write("<br>" + "Now the value of a is: " + a)
    document.write("<br>" + "<br>" + "The value of a-- is: " + (a--))
    document.write("<br>" + "Now the value of a is: " + a)
}

function task6_2(){
    var a = 2, b = 1
    var result = --a - --b + ++b + b--
    //       3 =  1  -  0  +  1  + 1 
    document.write("<br>" + "<br>" + "a is: " + a)
    document.write("<br>" + "b is: " + b)
    document.write("<br>" + "result is: " + result)
}

function task6_3(){
    var name1 = prompt("What is your name?")
    document.write("<br>" + "<br>" + "Assalam-o-alikum " + name1 + "!" + "<br>")
}


function task6_4(){
    var tabnum = +prompt("Enter a number: ")
    if (tabnum) {
        document.write("<br>" + "Table of " + tabnum + " is:-")
        for (var i = 1; i <= 10; i++) {
            document.write("<br>" + tabnum + "x" + i + "=" + (tabnum * i));
        }
    }
    else {
        document.write("<br>" + "Table of 5 is:-")
        for (var i = 1; i <= 10; i++) {
            document.write("<br>" + "5x" + i + "=" + (5 * i));
        }
    }
    document.write("<br><br>")
}



/////////////////////////////// Chapter 9-11 ////////////////////////////////////

function task9_1(){
    var city = prompt("Your city?", "Karachi");
    if (city === "Karachi"){
        alert("Welcome to the city of lights.");
    }
}

function task9_2(){
    var gender = prompt("Your gender?", "male/female");
    if (gender === "male"){
        alert("Good Morning Sir.");
    }
    if (gender === "female") {
        alert("Good Morning Ma'am.");
    } 
    else {
        alert("Invalid input");
    }
}

function task9_3(){
    var color = prompt("Input color of road traffic signal light.");
    if (color === "red"){
        alert("Must Stop.");
    }
    else{
    if (color === "yellow") {
        alert("Ready to Move.");
    }
    else{ 
    if (color === "green"){
        alert("Move Now.")
    }
    else {
        alert("Invalid input");
    }}}
}

function task9_4(){
    var fuel = prompt("Input remaining fuel in your car", "in litres");
    if (fuel < 0.25 ){
        alert("Please refill the fuel in your car.");
    }
    else {
        alert("Good! Enjoy your drive.");
    }
}

function task9_5a(){
    var a = 4; 
    if (++a === 5){
         alert("given condition for variable a is true"); 
    }
    else{
        alert("Invalid, No alert message.")
    }  
}

function task9_5b(){
    var b = 82;
     if (b++ === 83){
          alert("given condition for variable b is true"); 
    } 
    else{
        alert("Invalid, No alert message.")
    }
}

function task9_5c(){
    var c = 12;
     if (c++ === 13){
          alert("condition 1 is true"); 
    }
     if (c === 13){
          alert("condition 2 is true"); 
    }
     if (++c < 14){
         alert("condition 3 is true");
     }
     if(c === 14){
          alert("condition 4 is true"); 
    }
    else{
        alert("Invalid, No alert message.")
    } 
}

function task9_5d(){
    var materialCost = 20000;
    var laborCost = 2000; 
    var totalCost = materialCost + laborCost; 
    if (totalCost === laborCost + materialCost){ 
        alert("The cost equals"); 
    }
    else{
        alert("Invalid, No alert message.")
    } 
}

function task9_5e(){
    if (true){ 
        alert("True"); 
    } 
    else{
    if (false){
         alert("False"); 
    } 
    else{
        alert("Invalid, No alert message.")
    }
}
}

function task9_5f(){
    if("car" < "cat"){ 
        alert("car is smaller than cat"); 
    } 
    else{
        alert("Invalid, No alert message.")
    }
}

function task9_6(){
   var eng1 = prompt ("Enter your marks in English.", "out of 100");
   var eng = parseInt(eng1);
   var maths1 = prompt ("Enter your marks in Mathematics", "out of 100");
   var maths = parseInt(maths1);
   var isl1 = prompt ("Enter your marks in Islamiat.", "out of 100");
   var isl = parseInt (isl1);
   var obt_marks = eng+maths+isl;
   var total = 300;
   var percentage = obt_marks*100/total;
   var heading = 'Mark Sheet';
   document.write (heading);
   document.write ('<br>'+"Total Marks: ", total);
   document.write ('<br>'+"Obtained Marks: ", obt_marks);
   document.write ('<br>'+"Percentage: ", percentage);
if (percentage >= 80){
    document.write ('<br>'+'Grade: A-one');
    document.write ('<br>'+'Remarks: Excellent');
}
else if ((percentage < 80) && (percentage >= 70)){
    document.write ('Grade: A');
    document.write ('Remarks: Good');
}
else if ((percentage < 70) && (percentage >= 60)){
    document.write ('Grade: B');
    document.write ('Remarks: You need to improve');
}
else {
    document.write ('Grade: Fail');
    document.write ('Sorry');
}
}

function task9_7(){
    var a = prompt ('Guess a number between 1 to 10');
    var b = parseInt (a);
    c = 7
    if (b === c){
        alert ('Bingo! Correct answer.');
    }
    else if ( b+1 === c){
        alert ('Close enough to the correct answer.');
    }
    else {
        alert ('Wrong input');
    }
}

function task9_8(){
    var a = prompt ('Enter the number to check either it is divisible bt 3?');
    var num = parseInt(a);
    var div = num % 3;
    if (div === 0){
        alert ('Number is divisible by 3.');
    }
    else {
        alert ('Number is not divisible by 3.');
    }
}

function task9_9(){
    var a = prompt ('Enter any number to check either it is even or odd?');
    var num = parseInt(a);
    var div = num % 2;
    if (div === 0){
        alert ('Number is Even.');
    }
    else if (div !== 0) {
        alert ('Number is Odd.');
    }
    else{
        alert ('Invalid');
    }
} 

function task9_10(){
    var a = prompt ('Enter Temperature.');
    var temp = parseInt(a);
    if (temp > 40){
        alert ('It is too hot outside.');
    }
    else if ((temp < 40 ) && (temp > 30)) {
        alert ('The Weather today is Normal.');
    }
    else if ((temp < 30) && (temp > 20)){
        alert ('Today’s Weather is cool.');
    }
    else if (temp > 10){
        alert ('OMG! Today’s weather is so Cool.')
    }
    else {

    }
}

function task9_11(){
    var a = parseInt(prompt ('Enter First Number.'));
    var b = parseInt (prompt ('Enetr Second Number.'));
    var op = prompt ('Enter Operation you want to perform."+, -, *, /" ');
    if (op === '+'){
        add = a+b;
        document.write (a + ' + '+ b +' = '+ add);
    }
    else if (op === '-') {
        sub = a-b;
        document.write (a +' - ' +b +' = '+ sub);
    }
    else if (op === '*'){
    
        alert (a +' * '+ b +' = ', a*b);
    }
    else if (op = '/'){
        alert (a +' / '+ b +' = ', a/b);
    }
    else {
        alert ('Invalid.')
    }
}

//////////////////////////////// Chapter 12-13 /////////////////////////////////////////////


function task12_1(){
    var ch = prompt ('Enter any character or number:');
    var a = ch.charCodeAt(0);
    if (( a >= 48) && (a <= 57)){
        alert('Input is a number.')
    }
    else if ((a >= 65) && (a <= 90)){
        alert ('Input is an uppercase letter.')
    }
    else if ((a >= 97) && (a <= 122)){
        alert ('Input is lowercase letter.')
    }
    else{
        alert ('Invalid input');
    }
}

function task12_2(){
    var a = parseInt(prompt ('Enter First Integer.'));
    var b = parseInt (prompt ('Enetr Second Integer.'));
    if (a>b){
        document.write (a +' is greater than '+b)
    }
    else if (a<b){
        document.write (b +' is greater than '+a);
    }
    else if (a=b){
        document.write ('both are equal.');
    }
}

function task12_3(){
    var num = parseInt (prompt ('Enter any number: '));
    if (num === 0){
        alert ('Input is zero.');
    }
    else if (num>0){
        alert ('Input is a positive integer.');
    }
    else if (num < 0){
        alert ('Input is a negative integer.')
    }
    else {
        alert ('Invalid input.')
    }
}

function task12_4(){
    var ch = prompt ('Enter a vowel: ');
    if ((ch==='a') || (ch === 'e') || (ch ==='i') || (ch ==='o') || (ch ==='u')){
        alert ('True');
    }
    else {
        alert ('False');
    }
}

function task12_5(){
    var password = 'iqranaz';
    var user_input = prompt ('Enter Password: ');
    if (user_input === ""){
        alert (' Please enter your password.');
    }
    else if (user_input === password){
        alert ('Correct! The password you entered matches the original password.');
    }
    else {
        alert ('Incorrect password.');
    }
}

function task12_6(){
    var greeting;
    var hour = 13; 
    if (hour < 18) { 
        greeting = "Good day";
    }
    else {
        greeting = "Good evening"; 
    }
    alert (greeting); 
}

function task12_7(){
    var time = prompt ('Enter time in 24 hour format: ', '1900 for 7pm');
    var greeting;
    if ((time >= 0000) && (time < 1200)){
        greeting = 'Good Morning!';
    }
    else if ((time >= 1200) && (time < 1700)){
        greeting = 'Good Afternoon!';
    }
    else if ((time >= 1700) && (time <2100)){
        greeting = 'Good Evening!';
    }
    else if ((time >= 2100) && (time <=2359)){
        greeting = 'Good Night!';
    }
    else {
        greeting = 'Invalid input'
    }
    alert (greeting);
}

//////////////////////////////////////// Chapter 13-15 //////////////////////////////////////////////////////////

function task13_1(){
    var students = []           // 1(a)
    
    var student = new Array()   // 1(b) 

    var student = new Array("std1", "std2", "std3", "std4", "std5") //1(c)

    var numArray = [1, 2, 5, 6, 7, 8, 6,] //number array

    var boolArray = [true,false]           // boolean array

    var mixedArray = [1, 'string1', true, 8, false, 'string 2']  // mixed array


    var qual = ('Qualification:'+'<br>').bold()
    document.write (qual+ "<br>")
    var qualification = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD']
    var i;
    for (i=0 ; i< qualification.length ; i++){
        document.write ((i+1) +') ' +qualification[i]+"<br>")
    }
}
function task13_8(){
    var student = ['Michael', 'John', 'Tony']
    var score = [334, 455, 478]
    var i;
    var total = 500;
    for (i=0; i<student.length; i++ ){
        document.write ('Score of '+ student[i] +' is ' +score[i] +'. Percentage: '+ score[i]*100/total +'%.' +"<br>")
    }
}

function task13_9(){
    var color = ['Red', 'Green', 'Blue']
    document.write (color +'<br>')
    var a = prompt('What color do you want to add to the beginning?')
    color.unshift(a);
    document.write(color +'<br>')
    var b = prompt('What color do you want to add to the end?')
    color.push(b)
    document.write(color +'<br>')
    color.unshift('Pink', 'Orange');
    document.write(color +'<br>')
    color.shift(0);
    document.write(color +'<br>')
    color.pop()
    document.write(color +'<br>')
    var d = prompt('What color do you want to add?')
    var e = prompt('Give the position of color: ')
    var f = parseInt(e)
    color.splice(f, 0, d)
    document.write(color +'<br>')
    var g = prompt('What color do you want to delete?')
    var h = prompt('Give the position of color: ')
    var i = parseInt(e)
    color.slice(i, 0, g)
    document.write(color +'<br>') 
}

function task13_10(){
    var std_score = [320, 230, 480, 120]
    document.write ('Scores of Students: ' + std_score + '<br>')
    var sort_score = std_score.sort()
    document.write ('Ordered Scores of Students: ' +sort_score)
}

function task13_11(){
    var cities = ['Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawar']
    document.write ('Cities List: ' +'<br>' +cities +'<br>')
    var sel_cities = cities.slice(1,4)
    document.write ('Selected Cities: ' +'<br>' + sel_cities +'<br>')
}

function task13_12(){
    var arr = ['This ', ' is ', ' my ', 'cat'];
    document.write ('Array: ' +'<br>' + arr +'<br>');
    var join = arr.join(' ');
    document.write ('String: ' +'<br>' + join +'<br>');
}

function task13_13(){
    var a = [];
    var i;
        for (i = 0; i < 4; i++) {
            a.push(prompt("Enter Devices:" ));
        }
        for (i = 0; i < 4; i++){
            document.write ('Out: ' +'<br>' +a[i] +'<br>');
        }
}

function task13_14(){
    var a = [];
    var i;
        for (i = 0; i < 4; i++) {
            a.push(prompt("Enter Devices:" ));
        }
        for (i = a.length-1; i >= 0; i--){
            document.write ('Out: ' +'<br>' +a[i] +'<br>');
        }
}

function task13_15(){

}

//////////////////////////////////////////// Chapter 17-20 ////////////////////////////////////////////////

function task17_1(){
    var temp = [];
}

function task17_2(){
    var temp = [
        [0, 1, 2, 3],
        [1, 0, 1, 2],
        [2, 1, 0, 1]
    ];
     var i;
     var j;
    for (i=0; i<4; i++){
        for (j=0; j<4; j++){
            document.write(temp[i][j]);
        }
        document.write('<br');
    }
}

function task17_3(){
    var i;
    for (i=1; i<=10; i++){
        document.write(i +'<br>')
    }
}

function task17_4(){
    var num = prompt ('Enter a number to show its multiplication table: ');
    var len = prompt ('Enter length of multiplication table: ');
    document.write ('Multiplication table of '+num +'<br>');
    document.write ('Lenth ' +len + '<br>' + '<br>');
    var i;
    for (i=1; i<= len; i++){
        document.write( num +'X' + i+ '=' +num*i +'<br>');
    }
}

function task17_5(){
   var fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'];
   var i;
   for(i=0; i<fruits.length; i++){
       document.write (fruits[i] + '<br>')
   }
    for(i=0; i<fruits.length; i++){
    document.write ('Element at index ' +i+ ' is ' + fruits[i] + '<br>')
}
}

function task17_6(){
    var i;
    document.write('Counting: '+'<br>'+ '<br>');
    for (i=1; i<=15; i++){
        document.write(i +', ');
    }

    document.write('Reverse Counting: '+'<br>'+ '<br>');
    for (i=10; i>=1; i--){
        document.write(i +', ');
    }
    
    document.write('Even: '+'<br>'+ '<br>');
    for (i=0; i<=20; i+2){
        document.write(i +', ');
    }
    
    document.write('Odd: '+'<br>'+ '<br>');
    for (i=1; i<20; i+2){
        document.write(i +', ');
    }
    
    document.write('Series:'+'<br>'+ '<br>');
    for (i=2; i<=20; i+2){
        document.write(i +'k, ');
    }
}

function task17_7(){
    var a = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
    var b = prompt ('Welcome to ABC Bakery. What do you want to order Sir/Ma'+"'"+'am');
    var i;
    for (i=0; i<a.length; i++){
        if (a[i] === b){
            document.write(b+ 'availabe at index '+i+ ' of our bakery.');
            break;
        }
        else {
            document.write ('We are Sorry. '+b+' is not available at our bakery.')
    }
}
}

function task17_8(){
    var a = [24, 53, 78, 91, 12];
    var i, j;
    var f;
    for (i=0; i<a.length; i++){
        for(j=0; j<a.length; j++){
            if (a[i] < a[j]){
                f = a[j];
            }
        }
    }
    document.write('The Largest number is '+f);
}

function task17_9(){
    var a = [24, 53, 78, 91, 12];
    var i, j;
    var f;
    for (i=0; i<a.length; i++){
        for(j=0; j<a.length; j++){
            if (a[i] > a[j]){
                f = a[j];
            }
        }
    }
    document.write('The Smallest number is '+f);
}

function task17_10(){
    var i;
    for (i=1; i<=20; i++){
        document.write(5*i +', ');
    }
}
