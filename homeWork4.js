//-----------Issue 6.
export class Controller {
    constructor(finished = false, done = 5, atempts = 44) {
        this.finished = finished;
        this.done = done;
        this.atempts = atempts;
    }

    returnAtempts() {
        return this.atempts;
    }

    changeFinish() {
        this.finished = !this.finished;
    }
}

 let amazing = new Controller();
 amazing.changeFinish();
 let a = amazing.returnAtempts();
 console.log(a);
 console.log(amazing.finished);
