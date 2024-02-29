import { questionInt } from 'readline-sync';

const calculator = {
  a: 0,
  b: 0,
  read() {
    this.a = questionInt('Input a: ');
    this.b = questionInt('Input b: ');
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  }
}