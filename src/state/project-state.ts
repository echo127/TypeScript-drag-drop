/// <reference path="../models/project.ts"/>

namespace App {
  //Project State Management
  type Listener<T> = (items: T[]) => void;
  class State<T> {
    protected listeners: Listener<T>[] = [];
    addListener(listnerFn: Listener<T>) {
      this.listeners.push(listnerFn);
    }
  }
  export class ProjectState extends State<Project> {
    private projects: Project[] = [];
    private static instance: ProjectState;

    private constructor() {
      super();
    }

    static getInstance() {
      if (this.instance) {
        return this.instance;
      } else {
        this.instance = new ProjectState();
      }
      return this.instance;
    }

    addProject(title: string, description: string, numOfPeople: number) {
      const newProject = new Project(
        Math.random().toString(),
        title,
        description,
        numOfPeople,
        projectStatus.Active
      );
      this.projects.push(newProject);
      this.undateListeners();
    }

    moveProject(prjId: string, newStatus: projectStatus) {
      const project = this.projects.find(prj => prj.id === prjId);
      if (project && project.status !== newStatus) {
        project.status = newStatus; //change the oject in array
        this.undateListeners();
      }
    }
    private undateListeners() {
      for (const listerFn of this.listeners) {
        //slice() is a copy of projects, so we will not change projects
        listerFn(this.projects.slice());
      }
    }
  }

  export const projectState = ProjectState.getInstance();
}
