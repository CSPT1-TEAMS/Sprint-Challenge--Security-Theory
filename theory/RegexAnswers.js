let regex1 = /(antelope)s? (rock)s? out/g;

console.log(regex1.test("antelope rocks out"));
//console.log(regex1.test("antelopes rock out"));

let regex2 = /[^b]oat/g;

//console.log(regex2.test("goat"));
console.log(regex2.test("moat"));

// Regex that matches dates in YYYY-MM-DD format. (Year can be 1-4 digits, and month and day can each be 1-2 digits). This does not need to verify the date is correct (e.g 3333-33-33 can match).

// 2000-10-12

// 1999-1-20

// 1999-01-20

// 812-2-10

let date = /(\d{4})-(\d{1,})-(\d{1,})/g;

//console.log(date.test("2000-10-12"));
//console.log(date.test("1999-1-20"));
console.log(date.test("812-2-10"));