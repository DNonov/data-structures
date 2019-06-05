/**
 * Set function constructor.
 *
 * @example const _Set = require('dstructures')._Set;
 * const mySet = new _Set();
 * @description In computer science, a set is an abstract data type that can store
 * certain values, without any particular order, and no repeated values. It is a computer
 * implementation of the mathematical concept of a finite set. Unlike most other collection
 * types, rather than retrieving a specific element from a set, one typically tests a value for
 * membership in a set. Full wikipedia article at:
 * {@link https://en.wikipedia.org/wiki/Set_(abstract_data_type)}
 * @public
 * @constructor
 */
class _Set {
  constructor(){
    this._container = [];
  }

  /**
   * Adds element to a set.
   *
   * @param {any} element Given element.
   * @returns {Boolean} Returns false if the given element is already member of the set, otherwise returns true.
   * @example [] Set.add(1); // [1]
   * [1] Set.add(2); // [1, 2]
   */
  add (element) {
    if (this._container.indexOf(element) < 0) {
      this._container.push(element);
      return true;
    }
    return false;
  }

  /**
   * Deletes element from a set.
   *
   * @param {any} element Given element.
   * @returns {Boolean} Returns false if the given element is not present, otherwise returns true.
   * @example [1, 2, 3] Set.remove(2); // [1, 3]
   * [1, 3] Set.remove(1); // [3]
   */
  remove (element) {
    const position = this._container.indexOf(element);
    if (position > -1) {
      this._container.splice(position, 1);
      return true;
    }
    return false;
  }

  /**
   * Returns the array representation of a set.
   *
   * @returns {Array} Returns the array representation of set.
   * @example [1, 2, 3] Set.display(); // [1, 2, 3]
   */
  display () {
    return this._container;
  }

  /**
   * Checks if given element is member of the set.
   *
   * @param {any} element Given element.
   * @returns {Boolean} Returns true if the given element is member of the set, otherwise returns false.
   * @example [1, 2, 3] Set.contains(3); // true
   * [1, 2, 3] Set.contains('cat'); // false
   */
  conatains (element) {
    if (this._container.indexOf(element)  > -1) {
      return true;
    }
    return false;
  }

  /**
   * Implements union of two sets.
   *
   * @param {_Set} set Given set.
   * @returns Returns set union of the two sets.
   * Returns false if there is no argument passed to the function or the argument is not of type Set.
   * @example [1, 2, 3] Set1 & [4, 5, 6] Set2 Set1.union(Set2); // [1, 2, 3, 4, 5, 6] Set
   */
  union (set) {
    if (set === undefined) {
      return false;
    }
    if (!(set instanceof _Set)) {
      return false;
    }
    let tempSet = new _Set();
    for (let i = 0; i < this._container.length; i++) {
      tempSet.add(this._container[i]);
    }
    for (let i = 0; i < set._container.length; i++) {
      if (!tempSet.conatains(set._container[i])) {
        tempSet.add(set._container[i]);
      }
    }
    return tempSet;
  }

  /**
   * Implements intersection of two sets.
   *
   * @param {_Set} set Given set.
   * @returns Returns set intersection of the two sets.
   * Returns false if there is no argument passed to the function or the argument is not of type Set.
   * @example [1, 2, 3] Set1 & [4, 2, 6] Set2 Set1.intersect(Set2); // [2] Set
   *
   */
  intersect (set) {
    if (set === undefined) {
      return false;
    }
    if (!(set instanceof _Set)) {
      return false;
    }
    let tempSet = new _Set();
    for (let i = 0; i < this._container.length; i++) {
      if (set.conatains(this._container[i])) {
        tempSet.add(this._container[i]);
      }
    }
    return tempSet;
  }

  /**
   * Cheks if the set is subset of a given set.
   *
   * @param {_Set} set Given set.
   * @returns Returns true if the set is subset of the given set, otherwise returns false.
   * Returns false if there is no argument passed to the function or the argument is not of type Set.
   * @example [1, 2] Set1 & [1, 2, 3] Set2 Set1.subset(Set2); // true
   *
   */
  subset (set) {
    if (!(set instanceof _Set)) {
      return false;
    }
    if (set === undefined || this.size() > set.size()) {
      return false;
    } else {
      for (let i = 0; i < this._container.length; i++) {
        if (!set.conatains(this._container[i])) {
          return false;
        }
      }
    }
    return true;
  }

  /**
   * Implements difference of two sets.
   *
   * @param {_Set} set Given set.
   * @returns Returns set difference of the two sets.
   * Returns false if there is no argument passed to the function or the argument is not of type Set.
   * @example [1, 2, 3] Set1 & [1, 2, 4] Set2 Set1.difference(Set2); // [4] Set
   *
   */
  difference (set) {
    if (set === undefined) {
      return false;
    }
    if (!(set instanceof _Set)) {
      return false;
    }
    let tempSet = new _Set();
    for (let i = 0; i < this._container.length; i++) {
      if (!set.conatains(this._container[i])) {
        tempSet.add(this._container[i]);
      }
    }
    return tempSet;
  }

  /**
   * Returns the size of the set.
   *
   * @returns {Number} Returns the size of the set.
   * @example [1, 2] Set.size(); // 2
   */
  size () {
    return this._container.length;
  }
}
module.exports = _Set;