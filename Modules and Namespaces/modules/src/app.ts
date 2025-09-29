import { ProjectList } from "./components/project-list.js";
import { ProjectInput } from "./components/project-input.js";

new ProjectInput();
const activeProjectList = new ProjectList("active");
const finishedProjectList = new ProjectList("finished");
