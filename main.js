/**
 * 定数
 */

const MODE = {
  input: "input",
  calculation: "calculation",
};

const display = document.querySelector("#display");

const buttons = {
  numbers: [...Array(10).keys()].map((i) =>
    document.querySelector(`#item${i}`)
  ),
  plus: document.querySelector("#plus"),
  minus: document.querySelector("#minus"),
  times: document.querySelector("#times"),
  div: document.querySelector("#div"),
  AC: document.querySelector("#clear"),
  comma: document.querySelector("#comma"),
  equal: document.querySelector("#equal"),
};

/**
 * 実際の処理
 */

// 入力中の数字
let input;
// 現時点での結果
let sum;
// 演算子
let ope;

let mode;

// ディスプレイに値を表示
function setDisplay(value) {
  display.innerHTML = `${value}`;
}

// 状態をクリア
function clearAll() {
  input = 0;
  sum = 0;
  setDisplay(input);
  mode = MODE.input;
}

// 数字ボタンが押されたとき
function onNumberClicked(num) {
  console.log("clicked", num);
  input = 10 * input + num;
  console.log(input);
  setDisplay(input);
  mode = MODE.input;
}

function onOperatorClicked(op) {
  sum = input;
  ope = op;
  if (op === 0) {
    setDisplay("+");
  }
  if (op === 1) {
    setDisplay("-");
  }
  if (op === 2) {
    setDisplay("×");
  }
  if (op === 3) {
    setDisplay("÷");
  }
  input = 0;
}

function onEqualClicked() {
  if (ope === 0) {
    sum += input;
  }
  if (ope === 1) {
    sum -= input;
  }
  if (ope === 2) {
    sum *= input;
  }
  if (ope === 3) {
    sum /= input;
  }
  setDisplay(sum);
}

clearAll();

for (let i = 0; i < 10; i += 1) {
  buttons.numbers[i].addEventListener("click", () => onNumberClicked(i));
}

buttons.plus.addEventListener("click", () => onOperatorClicked(0));
buttons.minus.addEventListener("click", () => onOperatorClicked(1));
buttons.times.addEventListener("click", () => onOperatorClicked(2));
buttons.div.addEventListener("click", () => onOperatorClicked(3));

buttons.equal.addEventListener("click", () => onEqualClicked());

buttons.AC.addEventListener("click", clearAll);

/**
 * 計算できるようにする。
 * 和、差、積、商を求める関数を定義する。
 * クリックしたボタンに該当する数字を取得できるようにする。
 * 表示して、変数に保持する。
 * 演算子を押した時に、どの演算をするのかを変数に保持する。
 * 演算子を押した後に出てきた数字を"="もしくは演算子を出力後に関数通りに計算する。
 */

/**
 * 最初の状態 (必要ない?)
 * -ディスプレイの状態が0で、何もイベントは起きない
 * -ACを押しても何も変化しない
 * -数字を押した時、数字入力の状態に入る
 * -演算子を押した時、何も起きない
 * -"="を押した時、何も起きない
 *
 * 数字入力の状態
 * -ディスプレイには、入力された数字が表示される
 * -数字を押した時、桁数が増えて数字入力の状態のままである(限界の桁数?)
 * -ACを押した時、最初の状態に戻る
 * -演算子を押した時、ディスプレイに表示された数字を変数として保持し、演算モードに入る
 * -"="を押した時、数字入力の状態のまま何も起きない
 *
 * 演算モードに入っている状態
 * -ディスプレイには、入力された数字が表示される
 * -数字を押した時、数字入力の状態に戻る
 * -ACを押した時、最初の状態に戻る
 * -"="を押した時、再度ディスプレイに表示された数字を変数として保持し、先に保持した変数との計算結果をディスプレイに出力し、最初の状態に戻る
 * -演算子を押した時、演算子が変更され、演算モードの状態のままである
 */

// () => {
//   const display = document.querySelector("#display");

//   const buttons = {
//     numbers: [...Array(10).keys()].map((i) =>
//       document.querySelector(`#item${i}`)
//     ),
//     AC: document.querySelector("#clear"),
//     comma: document.querySelector("#comma"),
//     equal: document.querySelector("#equal"),
//   };

//   const operatorButtons = {
//     plus: document.querySelector("#plus"),
//     minus: document.querySelector("#minus"),
//     times: document.querySelector("#times"),
//     div: document.querySelector("#div"),
//   };

//   /** number */
//   let left;
//   /** 'plus' | 'minus' | 'times' | 'div' */
//   let op;
//   /** number */
//   let right;

//   const clearAll = () => {
//     left = 0;
//     op = "plus";
//     right = 0;
//   };

//   const display = (value) => {
//     display.innerHTML = `${value}`;
//   };

//   const calc = () => {
//     left = {
//       plus: (l, r) => l + r,
//       minus: (l, r) => l - r,
//       times: (l, r) => l * r,
//       div: (l, r) => l / r,
//     }[op](left, right);
//     right = 0;
//   };

//   const onNumberClicked = (n) => {
//     right = right * 10 + n;
//     display(right);
//   };

//   const onOperatorClicked = (type) => {
//     if (op && right) calc();
//     op = type;
//     right = 0;
//     display(op);
//   };

//   const onEqualClicked = () => {
//     calc();
//     display(left);
//   };

//   buttons.numbers.forEach((el, i) => {
//     el.addEventListener("click", () => onNumberClicked(i));
//   });

//   Object.entries(operatorButtons).forEach(([type, el]) =>
//     el.addEventListener("click", onOperatorClicked(type))
//   );

//   buttons.equal.addEventListener("click", () => onEqualClicked());

//   buttons.AC.addEventListener("click", clearAll);
// };
