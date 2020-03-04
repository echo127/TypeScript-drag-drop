/// <reference path="models/drag-drop.ts"/>
/// <reference path="models/project.ts"/>
/// <reference path="state/project-state.ts"/>
/// <reference path="utilities/validation.ts"/>
/// <reference path="decorators/autobind.ts"/>
/// <reference path="components/component-base.ts"/>
/// <reference path="components/project-item.ts"/>
/// <reference path="components/project-list.ts"/>
/// <reference path="components/project-input.ts"/>

namespace App {
  //ProjectInput Class

  new ProjectInput();
  new ProjectList('active');
  new ProjectList('finished');
}
