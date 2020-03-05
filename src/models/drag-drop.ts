//Drage &  Drop Interfaces
export interface Daggable {
  drageStartHandler(event: DragEvent): void;
  drageEndHandler(event: DragEvent): void;
}

export interface DagerTarget {
  drageOverHandler(event: DragEvent): void;
  dropHandler(event: DragEvent): void;
  drageLeaveHandler(event: DragEvent): void;
}
