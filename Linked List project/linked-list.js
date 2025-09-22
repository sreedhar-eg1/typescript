"use strict";
class ListNode {
    value;
    next;
    constructor(value) {
        this.value = value;
    }
}
class LinkedList {
    root;
    length = 0;
    add(value) {
        const newNode = new ListNode(value);
        if (!this.root) {
            this.root = newNode;
        }
        else {
            let current = this.root;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.length++;
    }
    getNumberOfelements() {
        return this.length;
    }
    print() {
        let current = this.root;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}
const numList = new LinkedList();
const strList = new LinkedList();
numList.add(1);
numList.add(2);
numList.add(3);
strList.add("Hello");
strList.add("World");
numList.print(); // Outputs: 1, 2, 3
strList.print(); // Outputs: Hello, World
