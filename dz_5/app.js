 // 1
function construct(userName,login,password){
    this.name= userName;
    this.login = login;
    this.password = password
}

var construct = new construct('baiel',"ismailov","010501")

// console.log(construct)

//2
var mass = ["evgenii","vadim","EKATERINA","SoFya","mARIA","svetlana","alexey"]

function capitalizeWords(arr){
    return arr.map(function (name){
        var newname = name[0].toUpperCase()
        return newname+name.slice(1).toLowerCase()
    })
}

//  console.log(capitalizeWords(mass))

//3
var mass2  = ["00101202215478","qwerty","125042000000258","79451789841256","21010199578143","01234567891234","249489","21702200214789"]

 function checkInn(arr){
    arr.filter(function(inn){
        if((inn.length===14) && (inn[0]==='1' || inn[0]==='0'||inn[0]==='2')){
            return console.log(inn) ;
        }
    })
 }


//  console.log(checkInn(mass2));

//4

var names =["Evgenii","Vadim","Ekaterina","Sofya","Maria","Svetlana","Alexey"]

console.log(names.reduce(function(min,name){
    return min.length > name.length ? min : name;
 }));
 