# Objective: FizzBuzz
### Write a program that uses console.log to print all numbers from 1 to 100.  However if multiple of 3 output Fizz, if multiple of 5 output Buzz, or if multiple of 3 and 5 output FizzBuzz.

### My Code

``` js
for ( let x = 1 ; x <= 100 ; x++ ) {
	if ( x % 3 == 0 || x % 5 == 0 ) {
		let output = "" ;
		if ( x % 3 == 0 ) output += "Fizz" ;
		if ( x % 5 == 0 ) output += "Buzz" ;
		console.log ( output, "\n" ) ;
	} else console.log ( x + "\n" ) ;
}
```
