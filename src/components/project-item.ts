namespace App {
  //Project Item
  export class ProjectItem extends Component<HTMLUListElement, HTMLLIElement>
    implements Daggable {
    private project: Project;
    get persons() {
      if (this.project.people === 1) {
        return ' 1 person assigned.';
      } else {
        return `${this.project.people} people assigned.`;
      }
    }

    constructor(hostId: string, project: Project) {
      super('single-project', hostId, false, project.id);
      this.project = project;

      this.configure();
      this.renderContent();
    }
    @Autobind
    drageStartHandler(event: DragEvent) {
      event.dataTransfer!.setData('text/plain', this.project.id);
      event.dataTransfer!.effectAllowed = 'move';
    }
    @Autobind
    drageEndHandler(_event: DragEvent) {
      console.log('DragEnd');
    }

    configure() {
      this.element.addEventListener('dragstart', this.drageStartHandler);
      this.element.addEventListener('dragend', this.drageEndHandler);
    }

    renderContent() {
      this.element.querySelector('h2')!.textContent = this.project.title;
      this.element.querySelector('h3')!.textContent = this.persons;
      this.element.querySelector('p')!.textContent = this.project.description;
    }
  }
}
