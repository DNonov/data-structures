function Stack() {
  this._container = [];
  this._top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
}

function push(element) {
  this._container[this._top++] = element;
}

function pop() {
  return this._container[--this._top];
}

function peek() {
  return this._container[this._top - 1];
}

function clear() {
  this._top = 0;
}

function length() {
  return this._top;
}

module.exports = Stack;