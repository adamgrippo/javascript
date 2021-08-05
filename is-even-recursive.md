# Objective: Is Even
###### Create a recursive JavaScript function that checks whether a number is even

#### Code Output
``` js
console.log ( isEven ( 50 ) ) ; // true
console.log ( isEven ( 75 ) ) ; // false
console.log ( isEven ( -1 ) ) ; // false
```

#### My Code
``` js
let isEvenN = n => {
  if ( n < 0 ) n = -n ;
  if ( n == 1 ) return false ;
  else if ( n == 0 ) return true ;
  else return ( isEvenN ( n - 2 ) ) ;
} ;
```

#### TypeScript Code
``` ts
let isEvenN = n : number => {
  if ( n < 0 ) n = -n ;
  if ( n == 1 ) return false ;
  else if ( n == 0 ) return true ;
  else return ( isEvenN ( n - 2 ) ) ;
} ;
```
