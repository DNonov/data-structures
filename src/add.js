const Add = function () {
  let container = [];

  this.push = function (a) {
    container.push(a);
  };

  this.display = function () {
    return container;
  };
}

module.exports = Add;
