# Objective: Looping a triangle
### Write a loop that makes seven calls to console.log to output the following triangle

``` js
#
##
###
####
#####
######
#######
```

### My Code

``` js
let triangle = "#" ;
do {
  console.log ( triangle, "\n" ) ;
  triangle += "#" ;
} while ( triangle.length <= 7 ) ;
```
