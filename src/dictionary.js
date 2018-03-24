/**
 * Dictionary function constructor.
 * 
 * @example const Dictionary = require('dstructures').Dictionary;
 * const myDictionary = new Dictionary();
 * @description In computer science, an associative array, map, symbol table, or 
 * dictionary is an abstract data type composed of a collection of (key, value) pairs, 
 * such that each possible key appears at most once in the collection. Full wikipedia article at:
 * {@link https://en.wikipedia.org/wiki/Associative_array}
 * @public
 * @constructor
 */
class Dictionary {

  constructor(){
    let container = [];
    this.setContainer = (value) => container = value;
    this.getContainer = () => container;
  }

  /**
   * Adds key value pair in a dictionary.
   * 
   * @param {any} key Given key.
   * @param {any} value Given value.
   * @example Dictionary.add('dog', 1); // ['dog': 1]
   * Dictionary.add('dog', 2); // ['dog': 2]
   * Dictionary.add('cat', 1); // ['dog': 2, 'cat': 1]
   */
  add (key, value) {
    if (key === undefined || key === null) {
      return false;
    }
    if (value === undefined || value === null) {
      return false;
    }
    this.getContainer()[key] = value;
  }

  /**
   * Returns the value for the given key.
   * 
   * @param {any} key Given key.
   * @returns Returns the value for the given key.
   * @example Dictionary.add('dog', 1); // ['dog': 1]
   * Dictionary.find('dog'); // 1
   * Dictionary.add('cat', 3); // ['dog': 1, 'cat': 3]
   * Dictionary.find('cat'); // 3
   */
  find (key) {
    return this.getContainer()[key];
  }

  /**
   * Removes the value associated to the given key.
   * 
   * @param {any} key Given key.
   * @example Dictionary.add('dog', 2); // ['dog': 2]
   * Dictionary.add('cat', 1); // ['dog': 2, 'cat': 1]
   * Dictionary.remove('dog'); // [cat: 1]
   */
  remove (key) {
    delete this.getContainer()[key];
  }

  /**
   * Returns the underlying array.
   * 
   * @returns {Array} Returns the underlying array.
   * @example Dictionary.add('dog', 2); // ['dog': 2]
   * Dictionary.add('cat', 1); // ['dog': 2, 'cat': 1]
   * Dictionary.display(); // ['dog': 2, 'cat': 1]
   */
  display () {
    return this.getContainer();
  }

  /**
   * Counts all key value pairs.
   * 
   * @returns {Number} Returns number of all key value pairs.
   * @example Dictionary.display(); // ['dog': 2, 'cat': 1]
   * Dictionary.count(); // 2
   * Dictionary.display(); // ['dog': 2, 'cat': 1, 'pig': 4]
   * Dictionary.count(); // 3
   */
  count () {
    let number = 0;
    for (const key in Object.keys(this.getContainer())) {
      number++;
    }
    return number;
  }

  /**
   * Deletes all key value pairs.
   * 
   * @example Dictionary.display(); // ['dog': 2, 'cat': 1]
   * Dictionary.clear(); // []
   * 
   */
  clear () {
    this.setContainer([]);
  }

}
module.exports = Dictionary;