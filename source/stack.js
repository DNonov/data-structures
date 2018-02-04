function stack() {
  this.container = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
}

function push(element) {
  this.container[this.top++] = element;
}

function pop() {
  return this.container[--this.top];
}

function peek() {
  return this.container[this.top - 1];
}