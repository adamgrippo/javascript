---
title: FizzBuzz Exercise
---

Objective: 

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

Output as expected.  What do you think?
