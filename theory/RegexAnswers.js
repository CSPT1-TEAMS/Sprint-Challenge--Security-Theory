let regex1 = /(antelope)s? (rock)s? out/g;

console.log(regex1.test("antelope rocks out"));
//console.log(regex1.test("antelopes rock out"));

let regex2 = /[^b]oat/g;

//console.log(regex2.test("goat"));
console.log(regex2.test("moat"));

