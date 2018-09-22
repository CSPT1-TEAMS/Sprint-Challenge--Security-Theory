/* 
 * Find regexes that match the following. (e.g. find a 
 * single regex that matches both `antelope` and `antelopes`.)

 * Single regex that matches either of these:

 *    antelope rocks out
    
 *    antelopes rock out
 */

let firstRegex = /antelope(s rock| rocks) out/
console.log(firstRegex.test('antelope rocks out')) // => true
console.log(firstRegex.test('antelopes rock out')) // => true

/* Regex that matches either of:

 *    goat
    
 *    moat

 * but not:

 *    boat
 */

let secondRegex = /[gm]oat/
console.log(secondRegex.test('goat')) // => true
console.log(secondRegex.test('moat')) // => true
console.log(secondRegex.test('boat')) // => false

/*
 * Regex that matches dates in YYYY-MM-DD format. 
 * (Year can be 1-4 digits, and month and day can 
 * each be 1-2 digits). This does not need to verify 
 * the date is correct (e.g 3333-33-33 can match).

  2000-10-12
  
  1999-1-20
  
  1999-01-20
  
  812-2-10
 */

console.log('\n')

let thirdRegex = /\d{1,4}-\d{1,2}-\d{1,2}/
console.log(thirdRegex.test('2000-10-12'))
console.log(thirdRegex.test('1999-1-20'))
console.log(thirdRegex.test('1999-01-20'))
console.log(thirdRegex.test('812-2-10'))

