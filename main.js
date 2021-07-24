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

let sum;
let mode;

// 状態をクリア
function clearAll() {
  sum = 0;
  mode = MODE.input;
}

// 数字ボタンが押されたとき
function onNumberClicked() {
  mode = MODE.input;
}

function setDisplay(value) {
  display.innerHTML = `${value}`;
}

const x = 20;
setDisplay(x);

clearAll();

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
