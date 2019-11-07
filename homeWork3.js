// ------------------ Issue 1 ---------------
{
    function multiplex(...arg) {
        if (arg.length == 0) {
            return  new Error("No existing data");
        }
        let a = 0;
        for (let i = 0; i < arg.length; i++) {
            if (typeof (arg[i]) == "number") {
                a = a + arg[i];
            } else {
                return new Error("Argument Error");
            }
        }
        return a;
    }

    console.log(multiplex(500, 23, 41, 2, 7, 5));
}
{
    let multiplex = function (...arg) {
        if (arg.length == 0) {
            return new Error("No existing data");
        }
        let a = 0;
        for (let i = 0; i < arg.length; i++) {
            if (typeof (arg[i]) == "number") {
                a = a + arg[i];
            } else {
                return  new Error("Argument Error");
            }
        }
        return a;
    };
    console.log(multiplex(61, "hello", false, null));
}
{
    let multiplex = (...arg) => {
        if (arg.length == 0) {
            return "No existing data";
        }
        let a = 0;
        for (let i = 0; i < arg.length; i++) {
            if (typeof (arg[i]) == "number") {
                a = a + arg[i];
            } else {
                return  new Error("Argument Error");
            }
        }
        return a;
    }
    console.log(multiplex());
}
//-----------------------Issue 2----------------


function createCounter() {
    let a = 666;
    function counter(arg1 = 0, arg2 = false) {
        if (typeof arg1 == "number") {
            a = a + arg1;
        }
        if (arg2) {
            a = 666;
        }
        return a;
    }
    return counter;
}
let counter1 = createCounter();
let counter2 = createCounter();
let counter3 = createCounter();


console.log(counter1(5));
console.log(counter1(21));
console.log(counter1('hello world'));
console.log(counter2(600));
console.log(counter2(2));
console.log(counter2(7,true));
console.log(counter2(1));
console.log(counter3());
console.log(counter2());
console.log(counter1());


// ---------Issue 3 ---------------
function findOne(arr = new Array(), operation) {
    let num;
    if ((arr.length) != 0) {
        for (i = 0; i < arr.length; i++) {
            if (typeof (arr[i]) != "number") {
                num = new Error("Array contain not a number") ;
                break;
            } else {
                switch (operation) {
                    case "min":
                        num = Math.min.apply(Math, arr)
                        break;
                    case "max":
                        num = Math.max.apply(Math, arr);
                        break;
                    case  "avg":
                        let total = 0;
                        for (let j = 0; j < arr.length; j++) {
                            total = total + arr[j];
                        }
                        num = total / arr.length;
                        break;
                    default:
                        num = new Error("Operation not found");
                        break;
                }
            }
        }

    } else {
        num = new Error("Array is empty");
    }
    return num;
}

console.log(findOne([7,45,21,-2, 12, 11, 1], 'avg'));
console.log(findOne([-7,-4,-1,-2, -21, 11, 1], 'min'));
console.log(findOne([], 'max'));
console.log(findOne([true, false, null], 'avg'));
console.log(findOne([3], 'max'));

// ----------------Issue 4
function condition(a=58,b=24){
     if ((a-b)>30) {return true; } else {return  false ;}
    }
function onDone(){ console.log("Successfull");}
function onError(){  console.log("Failed") ; }

function conditionManager(x,callback,callback1){
   if ((typeof(callback) =='function') & (typeof(callback1) == 'function')& (arguments.length == 3)){
    if (x) {callback()} else {callback1()} } else {return new Error("All arguments are required and must be functions")}
}

console.log(conditionManager(condition(12),onDone,onError));
console.log(conditionManager(condition(), onDone, onError));
console.log(conditionManager(condition(600, 1000), onDone, onError));


//-----------------Issue 5
let issue5 = function() { };
issue5.myname = "My name";
console.log(issue5.myname);
//--------------------Issue 6

let testArray = [];
function arrController(operation, data) {
    switch (operation) {
        case "add" :
            testArray.push(data);
            return testArray;
            break;
        case  "remove":
            testArray = testArray.filter(val => val !== data);
            return testArray;
            break;
        case "clear":
            testArray = [];
            return testArray;
            break;
        case "view":
            return testArray;
            break;
        default:
            return "operation is not available";

    }
}
console.log(arrController());
console.log(arrController("view"));
console.log(arrController("add", 0));
console.log(arrController("add", 'Hello'));
console.log(arrController("add", false));
console.log(arrController("add", 142));
console.log(arrController('remove',false));
console.log(arrController('clear'));


//--------------Issue 7

let arr = [5,7,11,13];
arr2 =  arr.concat();
arr2.push(21);
console.log(arr);
console.log(arr2);
//-----------------------Issue 8----------------

arr= [23,2323];
function as() {return arr;}
arr.push(as.bind(arr));
console.log(as());


//---------------Issue 9
let arr7 = [1, 3, 5, 7, 11, 13, 3, 5, 7];
function arrReplaceValue(array,val1,val2) {
let temp;
let value = 0;
   for(i=0;array.length >i;i++){
    temp = array.indexOf(val1,0);
    if (array[temp]== val1) {
        value++;
    }
    if (temp != -1) {
    array[temp]= val2;}   }
   return value;
}
console.log(arrReplaceValue(arr7,3,5));
console.log(arr7);
//-----------------Issue10
arr1100=['ananas','banan','kiwi'];
arr1200=['gasoline','kerosene','chlorhexidine'];
arr1300=arr1100.concat(arr1200);
console.log(arr1300);

