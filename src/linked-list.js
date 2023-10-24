// since the head node is a reference for all other nodes it is good to avoid changing it. Sometimes devs will declare it a symbol (immutable primative data type which doesn't change).
import Node from './node.js'

export default class LinkedList {
  constructor() {
    this.head = null;
  }

  insertLast(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let currentNode = this.head; //starts at head
      while (currentNode.next != null) { //loops through nodes while this.next is not null. This is traversing the chain.
        currentNode = currentNode.next
      }
      currentNode.next = newNode; //sets currentNode.next property to newly created node in order to add it to list. 
    }
  }

  remove(indexToRemove) {
    if (indexToRemove === 0) { //removing the head index
      let tempData = this.head.data
      this.head = this.head.next;
      return tempData;
    } else {
      let currentNode = this.head;
      let currentIndex = 0;
      while ((currentIndex +1) <= indexToRemove) { 
        if (currentNode.next === null ) {
          return -1;
        }
        if ((currentIndex + 1 ) === indexToRemove) { //This tells us we have arrived at the node directly before the node we want to remove. Instead of going to the one we want to remove we go to the one right before.
          let tempData = currentNode.next.data
          currentNode.next = currentNode.next.next; //This sets the current node's next to the one after the one we are removing, thus removing the one we were targeting
          return tempData;
        }
        currentNode = currentNode.next; //if the condition isn't found these lines advance the current node and increment the counter
        currentIndex++;
      }
    }
  }

  count() {
    if (this.head === null) {
      return 0;
    } else if (this.head.next === null) {
      return 1;
    } else {
      let currentNode = this.head;
      let nodeCounter = 1;
      while (currentNode.next != null) {
        currentNode = currentNode.next;
        nodeCounter++;
        // console.log(nodeCounter);
      }
      return nodeCounter;
    }
  }


  addFirst(data) {
    let newNode = new Node(data);
    let currentHead = this.head;
    newNode.next = currentHead;
    this.head = newNode
  }

  insertAtIndex(index, data) {
    let newNode = new Node(data)
    
    if (this.count() === 0) {
      this.head = newNode;
    } else if (index > this.count()) {
      this.insertLast(data)
    } else {
      let currentNode = this.head;
      let currentIndex = 0;
      while (currentNode && currentIndex < index - 1) {
          currentNode = currentNode.next;
          currentIndex++;
      }
      newNode.next = currentNode.next;
      currentNode.next = newNode;
    }
  }

  // Remember that linked lists start at index 0. So using the beforeEach data in the test file if you get(2) that will be the third node in the linkedlist.
  get(index) {
    if (index > this.count() || index < 0) {
      return -1;
    } else {
      let currentNode = this.head;
      for (let i = 0; i < index; i++) {
        currentNode = currentNode.next;
      }
      return currentNode.data;
    }
  }
  
  search(data) {
    let currentNode = this.head
    for (let i = 0; i < this.count(); i++) {
      if (currentNode.data === data) {
        return i;
      } 
      currentNode = currentNode.next
    }

    return -1
  }
}

