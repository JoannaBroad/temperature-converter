// this is todays temp in kelvins
const kelvin = 3225;
//this converts kelvin to celsius
const celsius = kelvin - 273;
//converts c to f
let fahrenheit = celsius * (9/5) + 32;
//removes any pesky decimals
fahrenheit = Math.floor(fahrenheit);
//and for Newtons
let newton = celsius * (33/100)
newton = Math.floor(newton)

console.log(`The tepmerature is ${fahrenheit} degrees Fahrenheit or ${celsius} degrees Celsius and ${newton} newtons`)
