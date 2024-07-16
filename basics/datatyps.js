"use strict"; //treat all js code as new version

//alert(2+3)//alert not works in nodejs
//javascript standard are write on   https://tc39.es/ecma262/

let  name = "satya" //string
let age =15 //number 
let isLoggedIn = false//boolean


//data type
/**
 * number
 * string
 * boolean
 * bigint
 * null => standalone value  //example temp ==0 than 0 is also values in temp
 * undefined 
 * symbole => unique
 * object
 */
console.log(typeof age )
console.log(typeof null )  //output object
console.log(typeof undefined )//output undefined



/**
 * .........primitive .............
 * number 
 * sting
 * boolean
 * BigInt
 * null
 * undefine
 * symbol
 * 
 * 
 * ....non-primitive...............
 * object
 * Array
 * function
 * date
 * regexp
 * map
 * set
 * weakmap
 * weakset
 */

//heap and stack memoreis

/**
 * all non-primitve type  are in heap memry (refrence)
 * 
 * and primivties arein stack(copy)
 * 
 * 
 */
