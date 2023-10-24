## Exercises:

- Write a LinkedList.prototype.addFirst(data) method. This method should create a new node with the specified data at the beginning of the linked list. This node should become the new head.
- Write a LinkedList.prototype.insertAtIndex(index) method. This method should insert a node at a specified point of the linked list (which does not need to be the beginning or the end). If the index is greater than the number of nodes in the linked list, the node should be added to the end of the linked list.
- Write a LinkedList.prototype.get(index) method. The method should return the node at the specified index. If the index does not exist, the method should return -1.
- Write a LinkedList.prototype.search(data) method. This method should search the linked list for the specified data. If the data doesn't exist, the method should return -1.
- Write a LinkedList.prototype.count() method. This method should return the total number of nodes in the list.
- Update the LinkedList.prototype.remove(indexToRemove) method to return the removed node — just as a method like Array.prototype.pop() returns the element that's been popped (removed from the end) of an array.