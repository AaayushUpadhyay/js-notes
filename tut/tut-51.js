console.log('Welcome to tut 51');
// Iterators
let myArray = ['oranges', 'grapes', 'guava', 'mango'];
console.log(myArray);

function fruitsIterator(values) {
    let nextIndex = 0;
    return {
        next: function () {
            if (nextIndex < values.length) {
                return {
                    value: values[nextIndex++],
                    done: false //jab tkk saari values nhi iterate ho jati tbb tkk done false else true.
                }

            }
            else {
                return {
                    done: true
                }

            }
        }
    }

}
let fruits = fruitsIterator(myArray);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
