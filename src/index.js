const _ =require('lodash')

let names=['thiago','pereira','sousa']
let newArrey=_.concat(names,'elma','clea','pereira')
console.log(newArrey)

let numbers1=[1,2,3,4,5,8]
let numbers2=[2,6,7,1,3,4]
let numbersDifference=_.difference(numbers1,numbers2)
console.log(numbersDifference)

const users=[
  {user: 'thiago', active: true},
  {user: 'betoven', active : true},
  {user: 'pandora', active:false},
  {user:'perola',active:false}
]
const activeusers=_.dropRightWhile(users,function(o){
  return !o.active
})
console.log(activeusers)

alert('something')