// ---------------------Issue 1.
{
    function multiplex(...arg) {
        if (arg.length == 0) {
            return "No existing data";
        }
        let a = 0;
        for (let i = 0; i < arg.length; i++) {
            if (typeof (arg[i]) == "number") {
                a = a + arg[i];
            } else {
                return "Argument Error";
            }
        }
        return a;
    }

    console.log(multiplex(500, 23, 41, 2, 7, 5));
}

{
    let multiplex = function (...arg) {
        if (arg.length == 0) {
            return "No existing data";
        }
        let a = 0;
        for (let i = 0; i < arg.length; i++) {
            if (typeof (arg[i]) == "number") {
                a = a + arg[i];
            } else {
                return "Argument Error";
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
                return "Argument Error";
            }
        }
        return a;
    }
    console.log(multiplex());
}





