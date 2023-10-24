import LinkedList from '../src/linked-list.js';

describe('LinkedList', () => {

  let linkedListWithNodes = new LinkedList(); //creates new linkedlist with nodes then adds some sample nodes

  beforeEach(() => {
    linkedListWithNodes.insertLast("node1"); //index 0
    linkedListWithNodes.insertLast("node2"); //index 1
    linkedListWithNodes.insertLast("node3"); //index 2
    linkedListWithNodes.insertLast("node4"); //index 3
  });

  afterEach(() => {
    linkedListWithNodes.head = null; //removing the head of a linked list is the equivalant of deleting it. Use it here to keep tests from impacting each other.
  });

  test('it should construct a linked list with a head property', () => {
    let linkedList = new LinkedList();
    expect(linkedList.head).toEqual(null) //will be null ebcause it is an empty linked list for now
  })

  test('LinkedList.prototype.insertLast() should add a node at head if a linked list has no head', () => {
    let linkedList = new LinkedList();
    linkedList.insertLast("head");
    expect(linkedList.head.data).toEqual("head");
  })

  test('LinkedList.prototype.insertLast() should add a node at the end of a linked list', () => {
    linkedListWithNodes.insertLast("new last");
    expect(linkedListWithNodes.head.next.next.next.next.data).toEqual("new last");
  })

// TESTS FOR REMOVE() //
  test('it should set a new head if the head is removed', () => {
    linkedListWithNodes.remove(0);
    expect(linkedListWithNodes.head.data).toEqual("node2");
  })

  //In this test, we are removing the third node — and then checking to see if the new third node is equal to the previous fourth node. 
  //That will verify the old third node has been removed.
  test('it should remove a node from the middle', () => { 
    linkedListWithNodes.remove(2);
    expect(linkedListWithNodes.head.next.next.data).toEqual("node4")
  })

  test('it should return -1 if the index does not exist', () => {
    expect(linkedListWithNodes.remove(9)).toEqual(-1);
  });

  test('it should return the node that is removed', () => {
    expect(linkedListWithNodes.remove(0)).toEqual("node1")
  })

  test('it should return the node that is removed', () => {
    expect(linkedListWithNodes.remove(2)).toEqual("node3")
  })

// TESTS FOR COUNT() //
  test('it should count the total number of nodes in the linked list', () => {
    expect(linkedListWithNodes.count()).toEqual(4)
  })

  test('it should count the total number of nodes in the linked list', () => {
    linkedListWithNodes.insertLast("new last");
    expect(linkedListWithNodes.count()).toEqual(5)
  })

  test('it should count the total number of nodes in the linked list', () => {
    let linkedList = new LinkedList();
    expect(linkedList.count()).toEqual(0)
  })

  test('it should count the total number of nodes in the linked list', () => {
    let linkedList = new LinkedList();
    linkedList.insertLast("addNode");
    expect(linkedList.count()).toEqual(1)
  })

// TESTS FOR ADDFIRST() //
  test('it should add a new node at teh beginning of the linked list', () => {
    linkedListWithNodes.addFirst("NewHead");
    expect(linkedListWithNodes.head.data).toEqual("NewHead")
  })

// TESTS FOR INSERTATINDEX() //
  test('it should insert a node at a specified index', () => { //This test puts the node into a specified position
    linkedListWithNodes.insertAtIndex(2, "inserted info");
    expect(linkedListWithNodes.head.next.next.data).toEqual("inserted info");
  })

  test('it should insert a node at end if specified index is greater than linked list nodes', () => { //this test puts node at end if index is longer than list length
    linkedListWithNodes.insertAtIndex(100, "inserted data");
    expect(linkedListWithNodes.head.next.next.next.next.data).toEqual("inserted data");
  })

  test('it should insert a node at the start if there are no nodes in the linked list', () => {
    let linkedList = new LinkedList();
    linkedList.insertAtIndex(3, "inserted node");
    expect(linkedList.head.data).toEqual("inserted node");
  })

  // TESTS FOR GET() //
  test('it should get the node at a specified index', () => {
    expect(linkedListWithNodes.get(2)).toEqual("node3");
  })

  test('it should return a -1 to signify the node does not exist', () => {
    expect(linkedListWithNodes.get(100)).toEqual(-1);
  })

  test('it should return a -1 to signify the node does not exist', () => {
    expect(linkedListWithNodes.get(-100)).toEqual(-1);
  })

  // TESTS FOR SEARCH() //
  test('it should return a node with the data provided in the search() method', () => {
    expect(linkedListWithNodes.search("node2")).toEqual(1)
  })

  test('it should return -1 if the data provided in the search() method does not exist in the linked list', () => {
    expect(linkedListWithNodes.search("node one million")).toEqual(-1)
  })
})