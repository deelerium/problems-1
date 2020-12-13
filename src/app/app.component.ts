import { Component } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  numNegativ: boolean = false;
  resultA: any = "";
  resultA1: any = "";
  resultA2: any = "";
  resultA3: any = "";
  resultA4: any = "";
  resultA5: any = "";
  resultB: any = "";
  resultC: any = "";
  box: any = [];
  box2: any = [];
  box3: any = [];
  msg: boolean = false;

  fraseForm = new FormGroup({
    frase: new FormControl(""),
    letter: new FormControl("")
  });

  numbersForm = new FormGroup({
    numbers: new FormControl("")
  });

  // Problem A
  addNumber() {
    if (this.numbersForm.value.numbers !== -1) {
      this.box.push(this.numbersForm.value.numbers);
    } else {
      //termina el programa
      console.log("termina programa");
      console.log(this.box);
      // mayor numero introducido:
      this.largestNumber(this.box);
      // menor numero introducido:
      this.smallestNumber(this.box);
      // suma de todos los numeros:
      this.sumAll(this.box);
      // suma de los numeros positivos:
      this.sumPositive(this.box);
      // suma de los numeros negativos:
      this.sumNegative(this.box);
      // media de la suma:
      this.mediaSum(this.box);
    }
    this.numbersForm.reset();
  }
  largestNumber(arr) {
    let max = Math.max(...arr);
    this.resultA = max;
  }
  smallestNumber(arr) {
    let min = Math.min(...arr);
    this.resultA1 = min;
  }
  sumAll(arr) {
    this.resultA2 = arr.reduce(this.sumNumbers, 0);
  }

  sumNumbers(a: number, b: number) {
    console.log("a: " + a);
    console.log("b: " + b);
    return a + b;
  }

  sumPositive(arr) {
    for (let i of arr) {
      if (i > 0) {
        this.resultA3 = i + i;
      }
      console.log("result positive" + this.resultA3);
    }
  }

  sumNegative(arr) {
    for (let i of arr) {
      if (i < 0) {
        this.resultA4 = i + i;
      }
      console.log("result negative" + this.resultA4);
    }
  }

  mediaSum(arr) {
    this.resultA5 = Math.floor(this.resultA2 / arr.length);
  }

  // Problem B
  fraseSubmit() {
    console.log(this.fraseForm.value);
    const letter = this.fraseForm.value.letter;
    for (let i of this.fraseForm.value.frase) {
      if (i !== letter) {
        this.resultB += i;
      }
      this.fraseForm.reset();
    }
  }

  // Problem C
  twoArr() {
    for (let z = 0; z < 10; z++) {
      var n = Math.random();
      n *= 100;
      n = Math.floor(n) + 1;
      this.box2.push(n);
    }
    for (let j = 0; j < 10; j++) {
      var m = Math.random();
      m *= 100;
      m = Math.floor(m) + 1;
      this.box3.push(m);
    }
  }

  sumTwoArray() {
    this.resultC = this.box2[0] + this.box3[9];
    console.log(this.resultC);
    if (this.resultC !== NaN) {
      this.msg = false;
      console.log(this.msg);
    } else {
      this.msg = true;
      console.log(this.msg);
    }
  }
}
