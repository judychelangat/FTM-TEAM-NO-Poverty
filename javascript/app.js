// console.log('hi ladies')
// console.log(2+2)

//first js file//


// var firstname='judy';
// firstname='joy'

// let lastname='john';
// lastname='pit'

// const age=97;

// const multiplication =2*2;

// console.log(firstname)
// console.log(lastname)
// console.log(age)
// console.log(multiplication)

// let beautifulname=firstname

//data types values//
//primitive and non primitive//
/**
 * string
 * boolean
 * array
 * object
 * number
 */
//string 
// let firstname='judy'
// let lastname='tamara'

//number
// let age=40
// let multiple=2*5

//boolean
// let haseatentoday=false

//non-primitive
//array

// let arr=['judy','tamara',0,9]

//object

//  const dog={
//     firstname:'chris' , 
//     age:20,
//      color: 'brown',
//     skills: ['running quickly','playing']
// }
// console.log(dog)

// console.log(arr)

//object keyvalue pairs

// const attendance{
//     eman=true, gifty= false, judy=true, john=true
// }

//how to check which data type our value is
// const student='judy'
// const pI= 3.142

// console.log(typeof pI)

//const fruits =['orange','banana','apple','']
// const dog= {
//     name:'bingo',
//     age :3,
//     color:'brown',
//     issleeping:false,

// }
// console.log(dog)



//method length

// const student='judy'


// console.log(student.length())
// console.log(student.toUpperCase())
// console.log(student.toLowerCase())


// // I want to know if string student has letter s
// const greeting='hello ladies'
// console.log(greeting.includes('ladies'))


// //checking index
// console.log(greeting.indexOf('h'))
// console.log(greeting.lastIndexOf('e'))

// console.log(greeting.charAt(1))
// console.log(greeting.[10])


// let hi=greeting.length
// console.log(hi)

// let ladies=greeting.includes('ladies')
// console.log(ladies)

// //slice method
// console.log(greeting.slice(0,4))
// console.log(greeting.slice(0,greeting.length))

// //array method

// const fruits =['orange','banana','apple','melon']
// console.log(fruit.indexOf('orange'))
// console.log(fruits[1],toUpperCase())
// console.log(fruits.includes('bananas'))
// console.log(fruits.slice(0,5))
// console.log(fruits(fruits.length-1))

// fruits.push('apple') //adding to the end
// console.log(fruits[fruits.lengh-1])

// //removing things from end
// fruits.pop()

//method that removes from beginning shift()
//method for adding to the beginning  unshift()

//assignment
// variable
// var challenge='my javascript challenge'
// console.log(challenge)

// console.log(challenge.length)
// console.log(challenge.toUpperCase())
// console.log(challenge.toLowerCase())
// console.log(challenge.slice(1))

// console.log(challenge.slice(3,24))

// console.log(challenge.includes('script')) //returns a true

// //array

// const colors=['red','green','black','blue','white','purple']
// console.log(colors.length)
// console.log(colors[5])
// console.log(colors[0])
// console.log(colors[2])

// const mixedDataTypes=['number','boolean','string','array','object']
// console.log(mixedDataTypes.length)

// const itcompanies=['facebook','google','apple','ibm','oracle','amazon','microsoft']
// console.log(itcompanies)
// console.log(itcompanies.length)
// console.log(itcompanies.toUpperCase())



// //lesson 3
// //changing items in a string
// let newstr='I love javascript' 
// console.log(newstr[0])
// newstr='j love javascript'
// console.log(newstr)

// //changing items in an array
// color[0]='grey'
// console.log(colors)

// let weatherIsNice=false
// if(weatherIsNice==true){
// console.log('I am going out today')

// }
// else{
//     console.log('I am going home')
// }
// let Myage=67
// let ruthAge=105

// if(Myage==67 && ruthAge==105){
//     console.log('correct')
// }
// if(Myage<60 &&ruthAge>100){
//     console.log('wrong')
// }

// let age=20
// if(age==15){
//     console.log('you are old enough to drive')
// } 
// else if(age==16 && age==17){
// console.log('you can learn to drive')
// }
// else{
//     console.log('you have a few more years to go')
// }

// //functions
// let veggies=['lettuce','kales','brocolli','carrots','cucumber']

// veggies[0]=veggies[0].toUpperCase()
// veggies[1]=veggies[1].toUpperCase()
// veggies[2]=veggies[2].toUpperCase()
// veggies[3]=veggies[3].toUpperCase()
// veggies.pop()
// veggies.push()
// veggies.unshift('green')
// veggies.shift()
// console.log(veggies)
// let NewArray=[]

// for(let item of veggies){
//     if(item!=='onion' && item !=='brocolli')
//     NewArray.push(item.toUpperCase())
// }
// else {
//     NewArray.push(item.toLowerCase())
// }
// console.log(NewArray)
// let oldarr=[20,30,39,40]
// let newnumber=[]
// for(let number of oldarr ){
//  newnumber.push(number*2)
// }
// console.log(newnumber)

//function declaration

// function june (){
// console.log('saying hi')
// }
// june()

// console.log(100/3)
// console.log(2**4)
// console.log(100+5)

// function multiple(num){
//     result=num*2
//     console.log(result)
// }
// multiple(12)

// let fine=function add(a,b){}
// function add(a,b){
//     let result=a+b
//     console.log(result)
//     return result
// }

// console.log(add(1,2))

// //arrow function


// const joy=(a,b) =>{
//     return a+b


// }
// console.log(joy(10,90))


document.getElementsByTagName('h1')

let firstheading=document.getElementsByTagName('h1')

console.log(firstheading)

let classheading=document.getElementsByClassName('heading')
console.log(classheading)
//query selector
document.querySelector('h1')
document.querySelector('heading')
document.querySelectorAll('heading')

let para=document.querySelector('p')
console.log(para)
para.id='special'
para.className='new'

para.setAttribute('class','paragraph')
para.classList.add('p-5','mx-2')
para.classList.remove('p-5')

para.textContent='I am sentence'

fullname+= 'gabriel'