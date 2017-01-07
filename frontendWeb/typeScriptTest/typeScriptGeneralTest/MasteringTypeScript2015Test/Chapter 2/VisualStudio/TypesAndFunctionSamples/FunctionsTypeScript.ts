
// Basic function signature
function addNumbers(a: number, b: number): number {
    return a + b;
};

var result = addNumbers(1, 2);
// var result2 = addNumbers("1", "2"); // error

// Anonymous functions
var addVar = function (a: number, b: number): number {
    return a + b;
}

var result = addVar(1, 2);
//var result2 = addVar("1", "2"); // error

// Optional parameters
var concatStrings = function (a: string, b: string, c?: string) {
    return a + b + c;
}

console.log(concatStrings("a", "b", "c"));
console.log(concatStrings("a", "b"));
//console.log(concatStrings("a")); // error

// Default parameters
var concatStrings = function (a: string, b: string, c: string = "c") {
    return a + b + c;
}

console.log(concatStrings("a", "b", "c"));
console.log(concatStrings("a", "b"));

// Argument arrays
function testParamsTs(...argArray: number[]) {
    if (argArray.length > 0) {
        for (var i = 0; i < argArray.length; i++) {
            console.log("argArray " + i + " = " + argArray[i]);
            console.log("arguments " + i + " = " + arguments[i]);
        }
    }

}

testParamsTs(1);
testParamsTs(1, 2, 3, 4);
//testParamsTs("one", "two"); // error

// Callback functions
function myCallBackTs(text: string) {
    console.log("inside myCallback " + text);
}

function callingFunctionTs(initialText: string,
    callback: (text: string) => void) {
    callback(initialText);
}

callingFunctionTs("myText", myCallBackTs);
//callingFunctionTs("myText", "this is not a function"); // error


// Function callbacks and scope
function testScope() {
    var testVariable = "myTestVariable";
    function print() {
        console.log(testVariable);
    }
}

//console.log(testVariable); // error

var testVariable = "testValue";

function getData() {
    var testVariable_2 = "testValue_2";
    $.ajax(
        {
            url: "/sample_json.json",
            success: (data, status, jqXhr) => {
                console.log("success : testVariable is " + testVariable);
                console.log("success : testVariable_2 is"
                    + testVariable_2);
            },
            error: (message, status, stack) => {
                alert("error " + message);
            }
        }
        );
}

getData();


// Callback scope
var testVariable = "testValue";

function getData2() {
    var testVariable_2 = "testValue_2";
    $.ajax(
        {
            url: "/sample_json.json",
            success: successCallback2,
            error: (message, status, stack) => {
                alert("error " + message);
            }
        }
        );
}

function successCallback2(data, status, jqXhr) {
    console.log("success : testVariable is :" + testVariable);
    //console.log("success : testVariable_2 is :" + testVariable_2); // error
}

getData2();


// Function overloads
function add(arg1: string, arg2: string): string;
function add(arg1: number, arg2: number): number;
function add(arg1: boolean, arg2: boolean): boolean;
function add(arg1: any, arg2: any): any {
    return arg1 + arg2;
}

console.log("add(1,1)=" + add(1, 1));
console.log("add('1','1')=" + add("1", "1"));
console.log("add(true,false)=" + add(true, false));

// console.log("add(true,'1'", add(true, "1")); // error