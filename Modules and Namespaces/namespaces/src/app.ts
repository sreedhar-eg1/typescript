// namespace import

/// <reference path="components/project-item.ts" />
/// <reference path="components/project-list.ts" />
/// <reference path="components/project-input.ts" />

namespace App {
  new ProjectInput();
  const activeProjectList = new ProjectList("active");
  const finishedProjectList = new ProjectList("finished");
}
