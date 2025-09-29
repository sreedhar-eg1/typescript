// Drag and Drop interface
export interface Draggable {
  dragStartHandler(event: DragEvent): void;
  dragEndHandler(event: DragEvent): void;
}

export interface DragTarget {
  dragOverHandler(event: DragEvent): void;
  dropHandler(event: DragEvent): void;
  dragLeaveHandler(event: DragEvent): void;
}

// we can make use of namespace to split code
// with export keyword, it can be accessed outside

// inside namespace we can add anything, like class, interface....
// we need to provide name for the namespace
