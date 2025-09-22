class ListNodeB<T> {
  public next?: ListNodeB<T>;
  constructor(public value: T) {}
}

class LinkedListB<T> {
  private root?: ListNodeB<T>;
  private length = 0;

  add(value: T) {
    const newNode = new ListNodeB(value);

    if (!this.root) {
      this.root = newNode;
    } else {
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

    while(current) {
        console.log(current.value);
        current = current.next;
    }
  }
}

const numList = new LinkedListB<number>();
const strList = new LinkedListB<string>();

numList.add(1);
numList.add(2);
numList.add(3);

strList.add("Hello");
strList.add("World");

numList.print(); // Outputs: 1, 2, 3
strList.print(); // Outputs: Hello, World