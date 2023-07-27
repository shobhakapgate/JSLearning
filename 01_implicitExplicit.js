
console.log('...............Implicit Conversition to string.................');

var result = '3' + 2;
console.log(`When we use the + opratoter to concate string "3" and number 2 the result is : ${result} 
Type of value is : ${ typeof result}` );
console.log('                                                                    ');
var result = "3" + true;
console.log(`When we use the + opratoter to concate string "3" and boolean type as "true" the result is : ${result} 
Type of value is : ${ typeof result}` );
console.log('                                                                    ');
var result = '3' + undefined;
console.log(`When we use the + opratoter to concate string "3" and undefined type as "undefined" the result is : ${result} 
Type of value is : ${ typeof result}` );
console.log('                                                                    ');
var result = '3' + null;
console.log(`When we use the + opratoter to concate string "3" and Null type as "Null" the result is : ${result} 
Type of value is : ${ typeof result}` );

console.log('...............Implicit Conversition boolean to number.................');

console.log('                                                                    ');
var result = '4' - true;
console.log(`If boolean is used true is 1 and false is 0 so "4-true" = : ${result} 
Type of value is : ${ typeof result}` );

console.log('                                                                    ');
var result = 4 + true;
console.log(`If boolean is used true is 1 and false is 0 so "4 + true" = : ${result} 
Type of value is : ${ typeof result}` );

console.log('                                                                    ');
var result = 4 + false;
console.log(`If boolean is used true is 1 and false is 0 so "4 + false" = : ${result} 
Type of value is : ${ typeof result}` );

console.log('...............Implicit string convesition to number.................');
console.log('                                                                    ');

var result = '4' - '2'
console.log(`numric string is used with (-) like "4 - 2" Result is :  ${result} 
Type of value is : ${ typeof result}` );

console.log('                                                                    ');
var result = '4' * '2'
console.log(`numric string is used with (*) like "4 * 2" Result is :  ${result} 
Type of value is : ${ typeof result}` );

console.log('                                                                    ');

var result = '4' / '2'
console.log(`numric string is used with (/) like "4 / 2" Result is :  ${result} 
Type of value is : ${ typeof result}` );

console.log('                                                                    ');



















