// convert linked list to array

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const array = [];

let node = list;

while (node) {
      array.push(node.val);
  node = node.next;
}

console.log(array);


function printList(list) {
    // Start with the first node
    let current = list;
  
    // As long as `current` isn't null, print out the value
    while(current) {
      console.log(current.value);
  
      // Advance to the next node in the list by replacing
      // current with whatever `next` points to
      current = current.next;
    }
  }
