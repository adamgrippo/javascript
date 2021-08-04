# Objective: Minimium
###### Re-create JavaScript's Math.min Function

#### Code Output
``` js
console.log ( min ( 0, 10 ) ) ; // 0
console.log ( min ( 0, -10 ) ) ; // -10
```

#### My Revised Code
``` js
let min = ( a, b ) => { return a < b ? a : b ; } ;
```

#### My Original Code
``` js
let min = ( a, b ) => {
  if ( a <= b )
    return a ;
  else
    return b ;
} ;
```

#### TypeScript Code
``` ts
let min = ( a : number, b : number ) => { return a < b ? a : b ; } ;
```
