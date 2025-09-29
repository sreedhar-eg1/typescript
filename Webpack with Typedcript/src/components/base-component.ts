// Component Base Class
// abstract class => we cant instantiate this class
export abstract class Component<T extends HTMLElement, U extends HTMLElement> {
  templateElement: HTMLTemplateElement;
  hostElement: T;
  element: U;

  constructor(
    templateId: string,
    hostId: string,
    insertAtStart: boolean,
    newElementId?: string
  ) {
    this.templateElement = document.getElementById(
      templateId
    ) as HTMLTemplateElement;
    this.hostElement = <T>document.getElementById(hostId);

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as U;

    if (newElementId) {
      this.element.id = newElementId;
    }

    this.attach(insertAtStart);
  }

  private attach(position: boolean) {
    const location = position ? "afterbegin" : "beforeend";
    this.hostElement.insertAdjacentElement(location, this.element);
  }

  // abtract methods => we must implement these methods in the derived class
  abstract configure?(): void;
  abstract renderContent(): void;
}
