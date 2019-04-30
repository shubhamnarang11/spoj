import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  noOfQuesQuiz1 = 2;
  noOfQuesQuiz2 = 2;
  minOperandValue = 0;
  maxOperandValue = 10;
  arithmeticOperatorsQuiz1 = ["add", "subtract", "multiply", "divide"];
  arithmeticOperatorsQuiz2 = ["add", "subtract", "multiply", "divide"];
  allOperators = ["add", "subtract", "multiply", "divide", "remainder"];
  modify = [];
  quiz1Questions = [];
  quiz2Questions = [];
  quiz = [];
  count = 0;
  count1 = 0;
  correctAnswersQuiz1 = 0;
  correctAnswersQuiz2 = 0;
  finalPageQuiz1 = false;
  finalPageQuiz2 = false;
  selectedOperatorsQuiz1 = [];

  selectedOperatorsQuiz2 = [];

  operatorSymbol = {
    add: "+",
    subtract: "-",
    divide: "/",
    multiply: "*",
    remainder: "%"
  };

  constructor() {}

  ngOnInit() {}

  modifyQuiz(value: string) {
    this.modify.push(value);
  }

  checkwhichQuizModifying(id: string) {
    return this.modify.includes(id);
  }

  startQuiz1(id: string) {
    let obj;

    this.quiz.push(id);
    for (let i = 0; i < this.noOfQuesQuiz1; i++) {
      obj = {
        operand1: Math.floor(Math.random() * 10 + 1),
        operand2: Math.floor(Math.random() * 10 + 1),
        operator: this.arithmeticOperatorsQuiz1[
          Math.floor(Math.random() * this.arithmeticOperatorsQuiz1.length)
        ],
        answer: ""
      };
      obj["actualAnswer"] = Math.floor(
        eval(
          `${obj.operand1} ${this.operatorSymbol[obj.operator]} ${obj.operand2}`
        )
      ).toString();
      if (obj.operand2 === 0 && obj.operator === "divide") {
        --i;
      } else {
        this.quiz1Questions.push(obj);
      }
    }
  }

  startQuiz2(id) {
    let obj;

    this.quiz.push(id);
    for (let i = 0; i < this.noOfQuesQuiz2; i++) {
      obj = {
        operand1: Math.floor(Math.random() * 10 + 1),
        operand2: Math.floor(Math.random() * 10 + 1),
        operator: this.arithmeticOperatorsQuiz2[
          Math.floor(Math.random() * this.arithmeticOperatorsQuiz2.length)
        ],
        answer: ""
      };
      obj["actualAnswer"] = Math.floor(
        eval(
          `${obj.operand1} ${this.operatorSymbol[obj.operator]} ${obj.operand2}`
        )
      ).toString();
      if (obj.operand2 === 0 && obj.operator === "divide") {
        --i;
      } else {
        this.quiz2Questions.push(obj);
      }
    }
  }

  checkWhichQuizStarted(id: string) {
    return this.quiz.includes(id);
  }

  nextQuestionQuiz1() {
    if (this.count == this.noOfQuesQuiz1 - 1) {
      this.finalPageQuiz1 = true;
      this.getResultQuiz1();
    }

    ++this.count;
  }

  nextQuestionQuiz2() {
    if (this.count1 == this.noOfQuesQuiz2 - 1) {
      this.finalPageQuiz2 = true;
      this.getResultQuiz2();
    }

    ++this.count1;
  }

  getResultQuiz1() {
    for (let i = 0; i < this.noOfQuesQuiz1; i++) {
      if (this.quiz1Questions[i].actualAnswer == this.quiz1Questions[i].answer)
        ++this.correctAnswersQuiz1;
    }
  }

  getResultQuiz2() {
    for (let i = 0; i < this.noOfQuesQuiz2; i++) {
      if (this.quiz2Questions[i].actualAnswer == this.quiz2Questions[i].answer)
        ++this.correctAnswersQuiz2;
    }
  }

  modifyValuesQuiz1(noOfQues) {
    if (noOfQues > 0) this.noOfQuesQuiz1 = noOfQues;

    if (this.selectedOperatorsQuiz1.length != 0) {
      this.arithmeticOperatorsQuiz1 = this.selectedOperatorsQuiz1;
    }
    var index = this.modify.indexOf("one");
    this.modify.splice(index, 1);
  }

  modifyValuesQuiz2(noOfQues) {
    if (noOfQues > 0) this.noOfQuesQuiz2 = noOfQues;

    if (this.selectedOperatorsQuiz2.length != 0) {
      this.arithmeticOperatorsQuiz2 = this.selectedOperatorsQuiz2;
    }
    var index = this.modify.indexOf("two");
    this.modify.splice(index, 1);
  }
}
