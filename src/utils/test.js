
let arr = ['123','234','23434']

arr.map(e=>{
  console.log(e)
})

console.log(arr.some(e=>e=='1234'))


arr.unshift(1)

console.log(arr)
arr.push(1)

console.log(arr)
