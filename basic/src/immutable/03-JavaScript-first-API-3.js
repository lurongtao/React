const { Seq } = require('immutable')

const myObject = {a: 1, b: 2, c: 3}
const seq = Seq(myObject).map(v => v * v)
const seqToObject = seq.toObject()
console.log(seq, seqToObject)
// Seq { "a": 1, "b": 4, "c": 9 } { a: 1, b: 4, c: 9 }