let s = "Nagarro"
console.log(s)
console.log(s.toUpperCase())
console.log(s.toLowerCase())
let sk = "         samarth        nagarro       codingblocks  "
console.log(sk)
console.log(sk.trim(1))

console.log(s.substring(2))
console.log(s.substr(2))

console.log(s.substring(2,6))
console.log(s.substr(2,6))

console.log(s.length)
console.log(s.indexOf('rr'))

console.log(s.indexOf('r',4))

console.log(s.indexOf('r', s.indexOf('r')+1))
//first occurence - 4, now to switch towards right, we need to give a +1, so that fater the first occurrence, the next index checked will be after it.

let str = "rarar"

console.log(str.indexOf('r'))
console.log(str.indexOf('r',str.indexOf('r')+1))
console.log(str.indexOf('r',str.indexOf('r')))
console.log(str.indexOf('r',str.indexOf('r')+1))
console.log(str.indexOf('r',str.indexOf('r',str.indexOf('r')+1)+1))

console.log(s)
console.log(s.replace('a','V'))
console.log(s.replaceAll('r','x'))
console.log(s)

console.log(s.repeat(2))
console.log(s.repeat(4))