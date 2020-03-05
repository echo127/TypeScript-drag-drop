//Component Base Class
export abstract class Component<T extends HTMLElement, U extends HTMLElement> {
  templateEl: HTMLTemplateElement;
  hostEl: T;
  element: U;
  constructor(
    templateElId: string,
    hostElId: string,
    insertAtStart: boolean,
    newEleId?: string
  ) {
    this.templateEl = document.getElementById(
      templateElId
    )! as HTMLTemplateElement;
    this.hostEl = document.getElementById(hostElId)! as T;
    const importNode = document.importNode(this.templateEl.content, true);
    this.element = importNode.firstElementChild as U;
    if (newEleId) {
      this.element.id = newEleId;
    }
    this.attach(insertAtStart);
  }
  private attach(enterAtBeginning: Boolean) {
    this.hostEl.insertAdjacentElement(
      enterAtBeginning ? 'afterbegin' : 'beforeend',
      this.element
    );
  }
}
