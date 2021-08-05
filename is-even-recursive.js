let isEvenN = n => {
  if ( n < 0 ) n = -n ;
  if ( n == 1 ) return false ;
  else if ( n == 0 ) return true ;
  else return ( isEvenN ( n - 2 ) ) ;
} ;
