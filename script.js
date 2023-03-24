// alert(null || 2 || undefined)//it will take first true value
// alert(alert(1) || 2 || alert(3))
// alert(null && 2 && undefined)//it will take first false value
// alert( alert(1) && alert(2) );//alert give us undefiend value
// alert(2 && 3)
// alert( null || 2 && 3 || 4 );// && has high precendance rather than || 
// alert(-1 || 0)


// -1 stands for true value and 0 stands for false value
// a ?? b it will give a if a is not null/undefined otherwise give b
// let user;
// alert(user ?? "Anonymes")

// let x = 1 && 2 ?? 3;//it will show syntax error because of precendance reasons
// let x = (1 && 2) ?? 3;
// alert(x)

//this is function declaration
// function hello(){
//     alert("Hello world");
// }

//this is function Expression
// const hello = function(){
//     alert("Hello world");
// }

// let a = 10
// if(a == 10){
//     function Hello(){
//         alert("Hello");
//     }
// }
// else{
//     function Hello(){
//         alert("a is not 10")
//     }
// }

// Hello();

// let ask = (question, yes,no) => confirm(question) ? yes() : no()
// ask("DO you agree?",()=> alert("You agreed"), () => alert("You disagreed"))

// let obj = {};
// obj.__proto__ = 5;//we can't set a primit value in proto
// console.log(obj.__proto__)
// alert(obj.noSuchProperty === undefined)

// let obj = {name: "vijay",age: 20};
// alert("age" in obj)

// how to merge two Object
// let user = {name:"vijay"};
// let a = {age: 20};
// let b = {city: "jaipur"};

// Object.assign(user, a, b);
// alert(user.age)
// alert(user.city)


// alert(0xff)
// alert(0b11111111)
// alert(0o377)
// let num = 255;
// alert(num.toString(16))
// alert(num.toString(2))

// let user = {name:"vijay"};
// let map = new Map();
// map.set(user,'')
// alert(map.get(user))

// let wmap = new WeakMap();
// wmap.set(user,'')
// alert(wmap.get(user))

// let obj = {name:"vijay",age: 20}
// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))

// let map = new Map();
// map.set("name","vijay")
// map.set("age",20)
// console.log(map.keys())
// console.log(map.values())
// console.log(map.entries())
