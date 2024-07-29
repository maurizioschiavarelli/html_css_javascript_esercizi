const kelvin = 0;

let celsius = kelvin - 273;

let fahrenheitFloat = celsius * (9/5) + 32;

let fahrenheit = Math.floor(fahrenheitFloat);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);