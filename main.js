/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   Task: () => (/* binding */ Task)
/* harmony export */ });
class Project {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.taskList = [];
    }
    addTask(task) {
        this.taskList.push(task);
    }
    removeTask(index) {
        return this.taskList.splice(index, 1);
    }
    getTask(index) {
        return this.taskList[index];
    }
}

class Task {
    constructor(title, description='', dueDate='', pinned=false, completed=false) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.pinned = pinned;
        this.completed = completed;
    }
    isCompleted() {
        return this.completed;
    }
    toggleCompleted() {
        const opposite = !(this.completed);
        this.completed = opposite;
    }
    togglePinned() {
        const opposite = !(this.pinned);
        this.pinned = opposite;
    }
}



/***/ }),

/***/ "./src/storageController.js":
/*!**********************************!*\
  !*** ./src/storageController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   storageController: () => (/* binding */ storageController)
/* harmony export */ });
/* harmony import */ var _test_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test.json */ "./src/test.json");

const storageController = {
    storeUserProjects(userProjects) {
        localStorage.setItem('userProjects', JSON.stringify(userProjects));
    },
    getUserProjects() {
        return localStorage.getItem("userProjects");
    }
}



/***/ }),

/***/ "./src/test.json":
/*!***********************!*\
  !*** ./src/test.json ***!
  \***********************/
/***/ ((module) => {

module.exports = JSON.parse('{"userProjects":[{"name":"To-Do","color":"red","taskList":[{"title":"Welcome to Projects","description":"Use this site to organize your life","dueDate":"","pinned":true,"completed":false}]}]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ "./src/Project.js");
/* harmony import */ var _test_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test.json */ "./src/test.json");
/* harmony import */ var _storageController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storageController */ "./src/storageController.js");




// Fetch the user data from local storage
let userData;
if (_storageController__WEBPACK_IMPORTED_MODULE_2__.storageController.getUserProjects()) {
    userData = JSON.parse(_storageController__WEBPACK_IMPORTED_MODULE_2__.storageController.getUserProjects())
}
// If unavailable use basic template
else {
    userData = _test_json__WEBPACK_IMPORTED_MODULE_1__.userProjects;
}

// Populate userProjects array with Project objects using userData
const userProjects = [];
console.log(userData);
for (let project of userData) {
    const tempProject = new _Project__WEBPACK_IMPORTED_MODULE_0__.Project(project.name, project.color);
    for (let task of project.taskList) {
        tempProject.addTask(
            new _Project__WEBPACK_IMPORTED_MODULE_0__.Task(
                task.title, 
                task.description, 
                task.dueDate, 
                task.pinned, 
                task.completed
                ));
    }
    userProjects.push(tempProject);
}

const DOMStuff = {
    update() {
        this.clear();
        const target = document.querySelector('main');
        let index = 0;
        for (let project of userProjects) {
            const projectEl = this.generateProjectEl(project);
            projectEl.dataset.index = index++;
            target.append(projectEl);
        }
    },
    clear() {
        const target = document.querySelector('main');
        while (target.hasChildNodes()) {
            target.removeChild(target.firstChild);
        }
    },
    generateTaskEl(title, description, dueDate, pinned, completed, projectColor) {
        const template = document.querySelector('#task');
        const clone = template.content.cloneNode(true);
        const pinButton = clone.querySelector('.pin-button');
        const completeButton = clone.querySelector('.complete-button');
        const taskContainer = clone.querySelector('.task-container');
        const titleEl = clone.querySelector('.task-title');
        const descriptionEl = clone.querySelector('.task-description');
        const dueDateEl = clone.querySelector('.task-due-date');
        const expandButton = clone.querySelector('.expand-button');
        const editButton = clone.querySelector('.edit-button');
        const deleteButton = clone.querySelector('.delete-button')
        // Add completed class if task is completed
        if (completed) {
        completeButton.classList.add('completed');
        taskContainer.classList.add('completed');
        }
        // Add pinned class if task is pinned
        if (pinned) {
            pinButton.classList.add('pinned');
            taskContainer.classList.add('pinned');
        }
        // Make buttons the appropriate color
        completeButton.style.fill = projectColor;
        completeButton.style.stroke = projectColor;
        pinButton.style.fill = projectColor;
        pinButton.style.stroke = projectColor;
        // Fill the task data
        titleEl.textContent = title;
        descriptionEl.textContent = 
        description;
        if (dueDate) {
            dueDateEl.textContent = `Due Date: ${dueDate}`;
        }
        // Attach eventlisteners
        completeButton.addEventListener('click', handleToggleCompleted);
        pinButton.addEventListener('click', handleTogglePinned);
        expandButton.addEventListener('click', handleExpandTask);
        editButton.addEventListener('click', handleOpenTaskEditor);
        deleteButton.addEventListener('click', handleDeleteTask);
        
        return taskContainer;
    },
    generateProjectEl(project) {
        const projectEl = document.createElement('div');
        projectEl.classList.add('project')
        const projectHeader = document.createElement('div');
        projectHeader.classList.add('project-header');
        const name = document.createElement('h1');
        name.textContent = project.name;
        const taskList = document.createElement('div');
        taskList.classList.add('list-container');
        // Create the options button
        const optionsButton = document.createElement('button');
        optionsButton.textContent = '...';
        optionsButton.classList.add('options-button');
        optionsButton.addEventListener('click', handleOptionsButton)
        // Loop through tasks and populate the task list elements
        let index = 0;
        for (let task of project.taskList) {
            const taskEl = this.generateTaskEl(
                task.title, 
                task.description, 
                task.dueDate, 
                task.pinned, 
                task.completed,
                project.color
                );
            // Add an index dataset to each task element
            taskEl.dataset.index = index++;
            taskList.appendChild(taskEl);        
        }
        projectHeader.append(name, optionsButton)
        projectEl.append(projectHeader, taskList);

        // Add creation form
        const template = document.querySelector('#create-form');
        const clone = template.content.cloneNode(true);
        const createButton = clone.querySelector('#create-button');
        const expandButton = clone.querySelector('#expand-form')
        const form = clone.querySelector('form');
        createButton.addEventListener('click', 
            (event)=>{handleCreateTask(event, form)});
        expandButton.addEventListener('click', handleExpandForm);
        projectEl.appendChild(clone);
        return projectEl;
    },
    toggleCompleted(toggleCompletedEl) {
        const taskContainer = toggleCompletedEl.closest('.task-container');
        toggleCompletedEl.classList.toggle('completed');
        taskContainer.classList.toggle('completed')
    },
    togglePinned(togglePinnedEl) {
        const taskContainer = togglePinnedEl.closest('.task-container');
        togglePinnedEl.classList.toggle('pinned');
        taskContainer.classList.toggle('pinned')
    },
    openProjectForm() {
        const template = document.querySelector('#new-project');
        const clone = template.content.cloneNode(true);
        document.querySelector('body').append(clone);
        const createProjectBtn = document.querySelector('#create-project');
        const cancelProjectBtn = document.querySelector('#cancel-project');
        createProjectBtn.addEventListener('click', createProject);
        cancelProjectBtn.addEventListener('click', DOMStuff.closeProjectForm);
    },
    closeProjectForm() {
        const projectForm = document.querySelector('.blur-overlay');
        projectForm.parentNode.removeChild(projectForm);
    },
    openTaskEditor(projectIndex, taskIndex) {
        const template = document.querySelector('#edit-task');
        const clone = template.content.cloneNode(true);

        // Fill form input values with task data
        const taskObj = userProjects[projectIndex].getTask(taskIndex);
        clone.querySelector('#title').setAttribute('value', taskObj.title);
        clone.querySelector('#desc').setAttribute('value', taskObj.description);
        clone.querySelector('#due-date').setAttribute('value', taskObj.dueDate);

        document.querySelector('body').appendChild(clone);

        document.querySelector('#cancel-edit').addEventListener('click', DOMStuff.closeTaskEditor);
        document.querySelector('#confirm-edit').addEventListener('click', (event)=>{handleConfirmEditTask(event, taskObj)})

    },
    closeTaskEditor() {
        const editForm = document.querySelector('.blur-overlay');
        editForm.parentNode.removeChild(editForm);
    },
    openProjectOptions(projectEl) {
        const targetList = projectEl.querySelector('.list-container');
        const template = document.querySelector('#options-menu');
        const clone = template.content.cloneNode(true);
        const editButtonEl = clone.querySelector('.edit-button');
        const deleteButtonEl = clone.querySelector('.delete-button');
        // Add event listeners
        editButtonEl.addEventListener('click', (event)=>{DOMStuff.openProjectEditor(projectEl.dataset.index)})
        deleteButtonEl.addEventListener('click', (event)=>{DOMStuff.openProjectDeleter(projectEl.dataset.index)})
        targetList.appendChild(clone);
    },
    closeProjectOptions(projectEl) {
        const optionsMenuEl = projectEl.querySelector('.options-container');
        optionsMenuEl.parentNode.removeChild(optionsMenuEl);
    },
    openProjectEditor(projectIndex) {
        const template = document.querySelector('#edit-project');
        const clone = template.content.cloneNode(true);
        const projectObj = userProjects[projectIndex];
        // Fill fields with project values
        clone.querySelector('#name').setAttribute('value', projectObj.name);
        // Add event listeners
        clone.querySelector('#cancel-edit').addEventListener('click', DOMStuff.closeProjectEditor);
        clone.querySelector('#confirm-edit').addEventListener('click', (event)=>{handleConfirmEditProject(event, projectObj)})
        document.querySelector('body').appendChild(clone);
    },
    closeProjectEditor() {
        const editForm = document.querySelector('.blur-overlay');
        editForm.parentNode.removeChild(editForm);
    },
    openProjectDeleter(projectIndex) {
        const template = document.querySelector('#delete-project');
        const clone = template.content.cloneNode(true);
        // Add event listeners
        clone.querySelector('#cancel-edit').addEventListener('click', DOMStuff.closeProjectDeleter);
        clone.querySelector('#confirm-edit').addEventListener('click', (event)=>{handleConfirmDeleteProject(event, projectIndex)})
        document.querySelector('body').appendChild(clone);
    },
    closeProjectDeleter() {
        const deleteForm = document.querySelector('.blur-overlay');
        deleteForm.parentNode.removeChild(deleteForm);
    }
}

function handleToggleCompleted(event) {
    // currentTarget is needed instead to target otherwise svg path is the target
    const taskIndex = event.currentTarget.closest('.task-container').dataset.index;
    const projectIndex = event.currentTarget.closest('.project').dataset.index
    const targetTaskObject = userProjects[projectIndex].getTask(taskIndex);
    targetTaskObject.toggleCompleted();
    // DOM portion of event handler
    DOMStuff.toggleCompleted(event.currentTarget);
    // Storage portion of event handler
    _storageController__WEBPACK_IMPORTED_MODULE_2__.storageController.storeUserProjects(userProjects);
}
function handleTogglePinned(event) {
    const taskIndex = event.currentTarget.closest('.task-container').dataset.index;
    const projectIndex = event.currentTarget.closest('.project').dataset.index
    const targetTaskObject = userProjects[projectIndex].getTask(taskIndex);
    targetTaskObject.togglePinned();
    // DOM portion of event handler
    DOMStuff.togglePinned(event.currentTarget);
    // Storage portion of event handler
    _storageController__WEBPACK_IMPORTED_MODULE_2__.storageController.storeUserProjects(userProjects);
}
function handleCreateTask(event, form) {
        // Take the form data and create a new task
        const formData = new FormData(form);
        // require tasks to have a title
        if (!formData.get('title')) {
            return;
        }
        const newTask = new _Project__WEBPACK_IMPORTED_MODULE_0__.Task(
            formData.get('title'),
            formData.get('desc'),
            formData.get('dueDate'),
            false,
            false
        )
        console.log(newTask);
        // Add the task to the project and update
        const projectIndex = form.parentNode.dataset.index;
        userProjects[projectIndex].addTask(newTask);
        DOMStuff.update();
        _storageController__WEBPACK_IMPORTED_MODULE_2__.storageController.storeUserProjects(userProjects);
    }
function handleDeleteTask(event) {
    const taskIndex = event.currentTarget.closest('.task-container').dataset.index;
    const projectIndex = event.currentTarget.closest('.project').dataset.index;
    const targetProjectObject = userProjects[projectIndex];
    targetProjectObject.removeTask(taskIndex);
    DOMStuff.update();
    _storageController__WEBPACK_IMPORTED_MODULE_2__.storageController.storeUserProjects(userProjects);
}
function handleExpandTask(event) {
    const expandButton = event.currentTarget;
    const taskContainer = event.currentTarget.closest('.task-container');
    const collapsible = taskContainer.querySelector('.collapsible')
    expandButton.classList.toggle('expanded');
    collapsible.classList.toggle('expanded');
}
function handleExpandForm(event) {
    const expandButton = event.currentTarget;
    const taskContainer = expandButton.parentNode.querySelector('.create-form');
    expandButton.classList.toggle('expanded');
    taskContainer.classList.toggle('expanded');
}
function handleOpenTaskEditor(event) {
    const taskIndex = event.currentTarget.closest('.task-container').dataset.index;
    const projectIndex = event.currentTarget.closest('.project').dataset.index;
    DOMStuff.openTaskEditor(projectIndex, taskIndex);
}
function handleConfirmEditTask(event, task) {
    const form = document.querySelector('.overlay-form');
     // Take the form data
     const formData = new FormData(form);
     // require tasks to have a title
     if (!formData.get('title')) {
         return;
     }
     // Update the task data
     task.title = formData.get('title');
     task.description = formData.get('desc');
     task.dueDate = formData.get('due-date');
     // update dom, close form and save to storage
     DOMStuff.update();
     DOMStuff.closeTaskEditor();
     _storageController__WEBPACK_IMPORTED_MODULE_2__.storageController.storeUserProjects(userProjects);
}
function handleOptionsButton(event) {
    const targetProj = event.currentTarget.closest('.project');
    // Check if the menu is open and close it if it is
    if (targetProj.querySelector('.options-container')) {
        DOMStuff.closeProjectOptions(targetProj);
    }
    else {
        DOMStuff.openProjectOptions(targetProj);
    }
}
function handleConfirmEditProject(event, project) {
    const form = document.querySelector('.overlay-form');
    // Take the form data
    const formData = new FormData(form);
    // require tasks to have a title
    if (!formData.get('name')) {
        return;
    }
    // Update the project data
    project.name = formData.get('name');
    project.color = formData.get('new-project-color');
    // update dom, close form and save to storage
    DOMStuff.update();
    DOMStuff.closeProjectEditor();
    _storageController__WEBPACK_IMPORTED_MODULE_2__.storageController.storeUserProjects(userProjects);
}
function handleConfirmDeleteProject(event, projectIndex) {
    userProjects.splice(projectIndex, 1);
    _storageController__WEBPACK_IMPORTED_MODULE_2__.storageController.storeUserProjects(userProjects);
    DOMStuff.closeProjectDeleter();
    DOMStuff.update();
}
// Maybe separate into different functions
function createProject() {
    const projectForm = document.querySelector('.new-project');
    const formData = new FormData(projectForm);
    if (formData.get('new-project-title')) {
        const newProject = new _Project__WEBPACK_IMPORTED_MODULE_0__.Project(
            formData.get('new-project-title'),
            formData.get('new-project-color')
        )
        userProjects.unshift(newProject);
        _storageController__WEBPACK_IMPORTED_MODULE_2__.storageController.storeUserProjects(userProjects);
        DOMStuff.closeProjectForm()
        DOMStuff.update();
    }

}

document.querySelector('#add-project').addEventListener('click', DOMStuff.openProjectForm);


DOMStuff.update();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNSQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOd0M7QUFDTjtBQUNtQjs7QUFFckQ7QUFDQTtBQUNBLElBQUksaUVBQWlCO0FBQ3JCLDBCQUEwQixpRUFBaUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsZUFBZSxvREFBcUI7QUFDcEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsNkNBQU87QUFDbkM7QUFDQTtBQUNBLGdCQUFnQiwwQ0FBSTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELFFBQVE7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDhCQUE4QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxvRkFBb0Ysc0NBQXNDOztBQUUxSCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELG9EQUFvRDtBQUM3RywyREFBMkQscURBQXFEO0FBQ2hIO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGLDRDQUE0QztBQUM3SDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRixnREFBZ0Q7QUFDakk7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlFQUFpQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlFQUFpQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDBDQUFJO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksaUVBQWlCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxpRUFBaUI7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlFQUFpQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlFQUFpQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDZDQUFPO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUI7QUFDekI7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQSxrQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLy4vc3JjL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc3RvcmFnZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBjb2xvcikge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgICAgIHRoaXMudGFza0xpc3QgPSBbXTtcbiAgICB9XG4gICAgYWRkVGFzayh0YXNrKSB7XG4gICAgICAgIHRoaXMudGFza0xpc3QucHVzaCh0YXNrKTtcbiAgICB9XG4gICAgcmVtb3ZlVGFzayhpbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy50YXNrTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgICBnZXRUYXNrKGluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tMaXN0W2luZGV4XTtcbiAgICB9XG59XG5cbmNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbj0nJywgZHVlRGF0ZT0nJywgcGlubmVkPWZhbHNlLCBjb21wbGV0ZWQ9ZmFsc2UpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucGlubmVkID0gcGlubmVkO1xuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcbiAgICB9XG4gICAgaXNDb21wbGV0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlZDtcbiAgICB9XG4gICAgdG9nZ2xlQ29tcGxldGVkKCkge1xuICAgICAgICBjb25zdCBvcHBvc2l0ZSA9ICEodGhpcy5jb21wbGV0ZWQpO1xuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IG9wcG9zaXRlO1xuICAgIH1cbiAgICB0b2dnbGVQaW5uZWQoKSB7XG4gICAgICAgIGNvbnN0IG9wcG9zaXRlID0gISh0aGlzLnBpbm5lZCk7XG4gICAgICAgIHRoaXMucGlubmVkID0gb3Bwb3NpdGU7XG4gICAgfVxufVxuXG5leHBvcnQge1Byb2plY3QsIFRhc2t9IiwiaW1wb3J0IHVzZXJEYXRhIGZyb20gJy4vdGVzdC5qc29uJztcbmNvbnN0IHN0b3JhZ2VDb250cm9sbGVyID0ge1xuICAgIHN0b3JlVXNlclByb2plY3RzKHVzZXJQcm9qZWN0cykge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlclByb2plY3RzJywgSlNPTi5zdHJpbmdpZnkodXNlclByb2plY3RzKSk7XG4gICAgfSxcbiAgICBnZXRVc2VyUHJvamVjdHMoKSB7XG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJQcm9qZWN0c1wiKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7c3RvcmFnZUNvbnRyb2xsZXJ9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtQcm9qZWN0LCBUYXNrfSBmcm9tIFwiLi9Qcm9qZWN0XCI7XG5pbXBvcnQgdGVzdEpTT04gZnJvbSBcIi4vdGVzdC5qc29uXCJcbmltcG9ydCB7c3RvcmFnZUNvbnRyb2xsZXJ9IGZyb20gJy4vc3RvcmFnZUNvbnRyb2xsZXInXG5cbi8vIEZldGNoIHRoZSB1c2VyIGRhdGEgZnJvbSBsb2NhbCBzdG9yYWdlXG5sZXQgdXNlckRhdGE7XG5pZiAoc3RvcmFnZUNvbnRyb2xsZXIuZ2V0VXNlclByb2plY3RzKCkpIHtcbiAgICB1c2VyRGF0YSA9IEpTT04ucGFyc2Uoc3RvcmFnZUNvbnRyb2xsZXIuZ2V0VXNlclByb2plY3RzKCkpXG59XG4vLyBJZiB1bmF2YWlsYWJsZSB1c2UgYmFzaWMgdGVtcGxhdGVcbmVsc2Uge1xuICAgIHVzZXJEYXRhID0gdGVzdEpTT04udXNlclByb2plY3RzO1xufVxuXG4vLyBQb3B1bGF0ZSB1c2VyUHJvamVjdHMgYXJyYXkgd2l0aCBQcm9qZWN0IG9iamVjdHMgdXNpbmcgdXNlckRhdGFcbmNvbnN0IHVzZXJQcm9qZWN0cyA9IFtdO1xuY29uc29sZS5sb2codXNlckRhdGEpO1xuZm9yIChsZXQgcHJvamVjdCBvZiB1c2VyRGF0YSkge1xuICAgIGNvbnN0IHRlbXBQcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdC5uYW1lLCBwcm9qZWN0LmNvbG9yKTtcbiAgICBmb3IgKGxldCB0YXNrIG9mIHByb2plY3QudGFza0xpc3QpIHtcbiAgICAgICAgdGVtcFByb2plY3QuYWRkVGFzayhcbiAgICAgICAgICAgIG5ldyBUYXNrKFxuICAgICAgICAgICAgICAgIHRhc2sudGl0bGUsIFxuICAgICAgICAgICAgICAgIHRhc2suZGVzY3JpcHRpb24sIFxuICAgICAgICAgICAgICAgIHRhc2suZHVlRGF0ZSwgXG4gICAgICAgICAgICAgICAgdGFzay5waW5uZWQsIFxuICAgICAgICAgICAgICAgIHRhc2suY29tcGxldGVkXG4gICAgICAgICAgICAgICAgKSk7XG4gICAgfVxuICAgIHVzZXJQcm9qZWN0cy5wdXNoKHRlbXBQcm9qZWN0KTtcbn1cblxuY29uc3QgRE9NU3R1ZmYgPSB7XG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgZm9yIChsZXQgcHJvamVjdCBvZiB1c2VyUHJvamVjdHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RFbCA9IHRoaXMuZ2VuZXJhdGVQcm9qZWN0RWwocHJvamVjdCk7XG4gICAgICAgICAgICBwcm9qZWN0RWwuZGF0YXNldC5pbmRleCA9IGluZGV4Kys7XG4gICAgICAgICAgICB0YXJnZXQuYXBwZW5kKHByb2plY3RFbCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNsZWFyKCkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gICAgICAgIHdoaWxlICh0YXJnZXQuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAgICAgICB0YXJnZXQucmVtb3ZlQ2hpbGQodGFyZ2V0LmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBnZW5lcmF0ZVRhc2tFbCh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHBpbm5lZCwgY29tcGxldGVkLCBwcm9qZWN0Q29sb3IpIHtcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzaycpO1xuICAgICAgICBjb25zdCBjbG9uZSA9IHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBjb25zdCBwaW5CdXR0b24gPSBjbG9uZS5xdWVyeVNlbGVjdG9yKCcucGluLWJ1dHRvbicpO1xuICAgICAgICBjb25zdCBjb21wbGV0ZUJ1dHRvbiA9IGNsb25lLnF1ZXJ5U2VsZWN0b3IoJy5jb21wbGV0ZS1idXR0b24nKTtcbiAgICAgICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGNsb25lLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCB0aXRsZUVsID0gY2xvbmUucXVlcnlTZWxlY3RvcignLnRhc2stdGl0bGUnKTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25FbCA9IGNsb25lLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgIGNvbnN0IGR1ZURhdGVFbCA9IGNsb25lLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWR1ZS1kYXRlJyk7XG4gICAgICAgIGNvbnN0IGV4cGFuZEJ1dHRvbiA9IGNsb25lLnF1ZXJ5U2VsZWN0b3IoJy5leHBhbmQtYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IGVkaXRCdXR0b24gPSBjbG9uZS5xdWVyeVNlbGVjdG9yKCcuZWRpdC1idXR0b24nKTtcbiAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gY2xvbmUucXVlcnlTZWxlY3RvcignLmRlbGV0ZS1idXR0b24nKVxuICAgICAgICAvLyBBZGQgY29tcGxldGVkIGNsYXNzIGlmIHRhc2sgaXMgY29tcGxldGVkXG4gICAgICAgIGlmIChjb21wbGV0ZWQpIHtcbiAgICAgICAgY29tcGxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkJyk7XG4gICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQWRkIHBpbm5lZCBjbGFzcyBpZiB0YXNrIGlzIHBpbm5lZFxuICAgICAgICBpZiAocGlubmVkKSB7XG4gICAgICAgICAgICBwaW5CdXR0b24uY2xhc3NMaXN0LmFkZCgncGlubmVkJyk7XG4gICAgICAgICAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Bpbm5lZCcpO1xuICAgICAgICB9XG4gICAgICAgIC8vIE1ha2UgYnV0dG9ucyB0aGUgYXBwcm9wcmlhdGUgY29sb3JcbiAgICAgICAgY29tcGxldGVCdXR0b24uc3R5bGUuZmlsbCA9IHByb2plY3RDb2xvcjtcbiAgICAgICAgY29tcGxldGVCdXR0b24uc3R5bGUuc3Ryb2tlID0gcHJvamVjdENvbG9yO1xuICAgICAgICBwaW5CdXR0b24uc3R5bGUuZmlsbCA9IHByb2plY3RDb2xvcjtcbiAgICAgICAgcGluQnV0dG9uLnN0eWxlLnN0cm9rZSA9IHByb2plY3RDb2xvcjtcbiAgICAgICAgLy8gRmlsbCB0aGUgdGFzayBkYXRhXG4gICAgICAgIHRpdGxlRWwudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICAgICAgZGVzY3JpcHRpb25FbC50ZXh0Q29udGVudCA9IFxuICAgICAgICBkZXNjcmlwdGlvbjtcbiAgICAgICAgaWYgKGR1ZURhdGUpIHtcbiAgICAgICAgICAgIGR1ZURhdGVFbC50ZXh0Q29udGVudCA9IGBEdWUgRGF0ZTogJHtkdWVEYXRlfWA7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQXR0YWNoIGV2ZW50bGlzdGVuZXJzXG4gICAgICAgIGNvbXBsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlVG9nZ2xlQ29tcGxldGVkKTtcbiAgICAgICAgcGluQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlVG9nZ2xlUGlubmVkKTtcbiAgICAgICAgZXhwYW5kQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlRXhwYW5kVGFzayk7XG4gICAgICAgIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVPcGVuVGFza0VkaXRvcik7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZURlbGV0ZVRhc2spO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRhc2tDb250YWluZXI7XG4gICAgfSxcbiAgICBnZW5lcmF0ZVByb2plY3RFbChwcm9qZWN0KSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0RWwuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpXG4gICAgICAgIGNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdEhlYWRlci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWhlYWRlcicpO1xuICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgbmFtZS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICAgICAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza0xpc3QuY2xhc3NMaXN0LmFkZCgnbGlzdC1jb250YWluZXInKTtcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBvcHRpb25zIGJ1dHRvblxuICAgICAgICBjb25zdCBvcHRpb25zQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIG9wdGlvbnNCdXR0b24udGV4dENvbnRlbnQgPSAnLi4uJztcbiAgICAgICAgb3B0aW9uc0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdvcHRpb25zLWJ1dHRvbicpO1xuICAgICAgICBvcHRpb25zQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlT3B0aW9uc0J1dHRvbilcbiAgICAgICAgLy8gTG9vcCB0aHJvdWdoIHRhc2tzIGFuZCBwb3B1bGF0ZSB0aGUgdGFzayBsaXN0IGVsZW1lbnRzXG4gICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgIGZvciAobGV0IHRhc2sgb2YgcHJvamVjdC50YXNrTGlzdCkge1xuICAgICAgICAgICAgY29uc3QgdGFza0VsID0gdGhpcy5nZW5lcmF0ZVRhc2tFbChcbiAgICAgICAgICAgICAgICB0YXNrLnRpdGxlLCBcbiAgICAgICAgICAgICAgICB0YXNrLmRlc2NyaXB0aW9uLCBcbiAgICAgICAgICAgICAgICB0YXNrLmR1ZURhdGUsIFxuICAgICAgICAgICAgICAgIHRhc2sucGlubmVkLCBcbiAgICAgICAgICAgICAgICB0YXNrLmNvbXBsZXRlZCxcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmNvbG9yXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIC8vIEFkZCBhbiBpbmRleCBkYXRhc2V0IHRvIGVhY2ggdGFzayBlbGVtZW50XG4gICAgICAgICAgICB0YXNrRWwuZGF0YXNldC5pbmRleCA9IGluZGV4Kys7XG4gICAgICAgICAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZCh0YXNrRWwpOyAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgcHJvamVjdEhlYWRlci5hcHBlbmQobmFtZSwgb3B0aW9uc0J1dHRvbilcbiAgICAgICAgcHJvamVjdEVsLmFwcGVuZChwcm9qZWN0SGVhZGVyLCB0YXNrTGlzdCk7XG5cbiAgICAgICAgLy8gQWRkIGNyZWF0aW9uIGZvcm1cbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlLWZvcm0nKTtcbiAgICAgICAgY29uc3QgY2xvbmUgPSB0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgY29uc3QgY3JlYXRlQnV0dG9uID0gY2xvbmUucXVlcnlTZWxlY3RvcignI2NyZWF0ZS1idXR0b24nKTtcbiAgICAgICAgY29uc3QgZXhwYW5kQnV0dG9uID0gY2xvbmUucXVlcnlTZWxlY3RvcignI2V4cGFuZC1mb3JtJylcbiAgICAgICAgY29uc3QgZm9ybSA9IGNsb25lLnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgICAgICAgY3JlYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgXG4gICAgICAgICAgICAoZXZlbnQpPT57aGFuZGxlQ3JlYXRlVGFzayhldmVudCwgZm9ybSl9KTtcbiAgICAgICAgZXhwYW5kQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlRXhwYW5kRm9ybSk7XG4gICAgICAgIHByb2plY3RFbC5hcHBlbmRDaGlsZChjbG9uZSk7XG4gICAgICAgIHJldHVybiBwcm9qZWN0RWw7XG4gICAgfSxcbiAgICB0b2dnbGVDb21wbGV0ZWQodG9nZ2xlQ29tcGxldGVkRWwpIHtcbiAgICAgICAgY29uc3QgdGFza0NvbnRhaW5lciA9IHRvZ2dsZUNvbXBsZXRlZEVsLmNsb3Nlc3QoJy50YXNrLWNvbnRhaW5lcicpO1xuICAgICAgICB0b2dnbGVDb21wbGV0ZWRFbC5jbGFzc0xpc3QudG9nZ2xlKCdjb21wbGV0ZWQnKTtcbiAgICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdjb21wbGV0ZWQnKVxuICAgIH0sXG4gICAgdG9nZ2xlUGlubmVkKHRvZ2dsZVBpbm5lZEVsKSB7XG4gICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSB0b2dnbGVQaW5uZWRFbC5jbG9zZXN0KCcudGFzay1jb250YWluZXInKTtcbiAgICAgICAgdG9nZ2xlUGlubmVkRWwuY2xhc3NMaXN0LnRvZ2dsZSgncGlubmVkJyk7XG4gICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgncGlubmVkJylcbiAgICB9LFxuICAgIG9wZW5Qcm9qZWN0Rm9ybSgpIHtcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXByb2plY3QnKTtcbiAgICAgICAgY29uc3QgY2xvbmUgPSB0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZChjbG9uZSk7XG4gICAgICAgIGNvbnN0IGNyZWF0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlLXByb2plY3QnKTtcbiAgICAgICAgY29uc3QgY2FuY2VsUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW5jZWwtcHJvamVjdCcpO1xuICAgICAgICBjcmVhdGVQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlUHJvamVjdCk7XG4gICAgICAgIGNhbmNlbFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBET01TdHVmZi5jbG9zZVByb2plY3RGb3JtKTtcbiAgICB9LFxuICAgIGNsb3NlUHJvamVjdEZvcm0oKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsdXItb3ZlcmxheScpO1xuICAgICAgICBwcm9qZWN0Rm9ybS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHByb2plY3RGb3JtKTtcbiAgICB9LFxuICAgIG9wZW5UYXNrRWRpdG9yKHByb2plY3RJbmRleCwgdGFza0luZGV4KSB7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGFzaycpO1xuICAgICAgICBjb25zdCBjbG9uZSA9IHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpO1xuXG4gICAgICAgIC8vIEZpbGwgZm9ybSBpbnB1dCB2YWx1ZXMgd2l0aCB0YXNrIGRhdGFcbiAgICAgICAgY29uc3QgdGFza09iaiA9IHVzZXJQcm9qZWN0c1twcm9qZWN0SW5kZXhdLmdldFRhc2sodGFza0luZGV4KTtcbiAgICAgICAgY2xvbmUucXVlcnlTZWxlY3RvcignI3RpdGxlJykuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHRhc2tPYmoudGl0bGUpO1xuICAgICAgICBjbG9uZS5xdWVyeVNlbGVjdG9yKCcjZGVzYycpLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB0YXNrT2JqLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgY2xvbmUucXVlcnlTZWxlY3RvcignI2R1ZS1kYXRlJykuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHRhc2tPYmouZHVlRGF0ZSk7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZENoaWxkKGNsb25lKTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FuY2VsLWVkaXQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIERPTVN0dWZmLmNsb3NlVGFza0VkaXRvcik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb25maXJtLWVkaXQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCk9PntoYW5kbGVDb25maXJtRWRpdFRhc2soZXZlbnQsIHRhc2tPYmopfSlcblxuICAgIH0sXG4gICAgY2xvc2VUYXNrRWRpdG9yKCkge1xuICAgICAgICBjb25zdCBlZGl0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibHVyLW92ZXJsYXknKTtcbiAgICAgICAgZWRpdEZvcm0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlZGl0Rm9ybSk7XG4gICAgfSxcbiAgICBvcGVuUHJvamVjdE9wdGlvbnMocHJvamVjdEVsKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldExpc3QgPSBwcm9qZWN0RWwucXVlcnlTZWxlY3RvcignLmxpc3QtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29wdGlvbnMtbWVudScpO1xuICAgICAgICBjb25zdCBjbG9uZSA9IHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBjb25zdCBlZGl0QnV0dG9uRWwgPSBjbG9uZS5xdWVyeVNlbGVjdG9yKCcuZWRpdC1idXR0b24nKTtcbiAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uRWwgPSBjbG9uZS5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlLWJ1dHRvbicpO1xuICAgICAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXJzXG4gICAgICAgIGVkaXRCdXR0b25FbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCk9PntET01TdHVmZi5vcGVuUHJvamVjdEVkaXRvcihwcm9qZWN0RWwuZGF0YXNldC5pbmRleCl9KVxuICAgICAgICBkZWxldGVCdXR0b25FbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCk9PntET01TdHVmZi5vcGVuUHJvamVjdERlbGV0ZXIocHJvamVjdEVsLmRhdGFzZXQuaW5kZXgpfSlcbiAgICAgICAgdGFyZ2V0TGlzdC5hcHBlbmRDaGlsZChjbG9uZSk7XG4gICAgfSxcbiAgICBjbG9zZVByb2plY3RPcHRpb25zKHByb2plY3RFbCkge1xuICAgICAgICBjb25zdCBvcHRpb25zTWVudUVsID0gcHJvamVjdEVsLnF1ZXJ5U2VsZWN0b3IoJy5vcHRpb25zLWNvbnRhaW5lcicpO1xuICAgICAgICBvcHRpb25zTWVudUVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQob3B0aW9uc01lbnVFbCk7XG4gICAgfSxcbiAgICBvcGVuUHJvamVjdEVkaXRvcihwcm9qZWN0SW5kZXgpIHtcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1wcm9qZWN0Jyk7XG4gICAgICAgIGNvbnN0IGNsb25lID0gdGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIGNvbnN0IHByb2plY3RPYmogPSB1c2VyUHJvamVjdHNbcHJvamVjdEluZGV4XTtcbiAgICAgICAgLy8gRmlsbCBmaWVsZHMgd2l0aCBwcm9qZWN0IHZhbHVlc1xuICAgICAgICBjbG9uZS5xdWVyeVNlbGVjdG9yKCcjbmFtZScpLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBwcm9qZWN0T2JqLm5hbWUpO1xuICAgICAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXJzXG4gICAgICAgIGNsb25lLnF1ZXJ5U2VsZWN0b3IoJyNjYW5jZWwtZWRpdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgRE9NU3R1ZmYuY2xvc2VQcm9qZWN0RWRpdG9yKTtcbiAgICAgICAgY2xvbmUucXVlcnlTZWxlY3RvcignI2NvbmZpcm0tZWRpdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KT0+e2hhbmRsZUNvbmZpcm1FZGl0UHJvamVjdChldmVudCwgcHJvamVjdE9iail9KVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYXBwZW5kQ2hpbGQoY2xvbmUpO1xuICAgIH0sXG4gICAgY2xvc2VQcm9qZWN0RWRpdG9yKCkge1xuICAgICAgICBjb25zdCBlZGl0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibHVyLW92ZXJsYXknKTtcbiAgICAgICAgZWRpdEZvcm0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlZGl0Rm9ybSk7XG4gICAgfSxcbiAgICBvcGVuUHJvamVjdERlbGV0ZXIocHJvamVjdEluZGV4KSB7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RlbGV0ZS1wcm9qZWN0Jyk7XG4gICAgICAgIGNvbnN0IGNsb25lID0gdGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lcnNcbiAgICAgICAgY2xvbmUucXVlcnlTZWxlY3RvcignI2NhbmNlbC1lZGl0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBET01TdHVmZi5jbG9zZVByb2plY3REZWxldGVyKTtcbiAgICAgICAgY2xvbmUucXVlcnlTZWxlY3RvcignI2NvbmZpcm0tZWRpdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KT0+e2hhbmRsZUNvbmZpcm1EZWxldGVQcm9qZWN0KGV2ZW50LCBwcm9qZWN0SW5kZXgpfSlcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZENoaWxkKGNsb25lKTtcbiAgICB9LFxuICAgIGNsb3NlUHJvamVjdERlbGV0ZXIoKSB7XG4gICAgICAgIGNvbnN0IGRlbGV0ZUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmx1ci1vdmVybGF5Jyk7XG4gICAgICAgIGRlbGV0ZUZvcm0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkZWxldGVGb3JtKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVRvZ2dsZUNvbXBsZXRlZChldmVudCkge1xuICAgIC8vIGN1cnJlbnRUYXJnZXQgaXMgbmVlZGVkIGluc3RlYWQgdG8gdGFyZ2V0IG90aGVyd2lzZSBzdmcgcGF0aCBpcyB0aGUgdGFyZ2V0XG4gICAgY29uc3QgdGFza0luZGV4ID0gZXZlbnQuY3VycmVudFRhcmdldC5jbG9zZXN0KCcudGFzay1jb250YWluZXInKS5kYXRhc2V0LmluZGV4O1xuICAgIGNvbnN0IHByb2plY3RJbmRleCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuY2xvc2VzdCgnLnByb2plY3QnKS5kYXRhc2V0LmluZGV4XG4gICAgY29uc3QgdGFyZ2V0VGFza09iamVjdCA9IHVzZXJQcm9qZWN0c1twcm9qZWN0SW5kZXhdLmdldFRhc2sodGFza0luZGV4KTtcbiAgICB0YXJnZXRUYXNrT2JqZWN0LnRvZ2dsZUNvbXBsZXRlZCgpO1xuICAgIC8vIERPTSBwb3J0aW9uIG9mIGV2ZW50IGhhbmRsZXJcbiAgICBET01TdHVmZi50b2dnbGVDb21wbGV0ZWQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgLy8gU3RvcmFnZSBwb3J0aW9uIG9mIGV2ZW50IGhhbmRsZXJcbiAgICBzdG9yYWdlQ29udHJvbGxlci5zdG9yZVVzZXJQcm9qZWN0cyh1c2VyUHJvamVjdHMpO1xufVxuZnVuY3Rpb24gaGFuZGxlVG9nZ2xlUGlubmVkKGV2ZW50KSB7XG4gICAgY29uc3QgdGFza0luZGV4ID0gZXZlbnQuY3VycmVudFRhcmdldC5jbG9zZXN0KCcudGFzay1jb250YWluZXInKS5kYXRhc2V0LmluZGV4O1xuICAgIGNvbnN0IHByb2plY3RJbmRleCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuY2xvc2VzdCgnLnByb2plY3QnKS5kYXRhc2V0LmluZGV4XG4gICAgY29uc3QgdGFyZ2V0VGFza09iamVjdCA9IHVzZXJQcm9qZWN0c1twcm9qZWN0SW5kZXhdLmdldFRhc2sodGFza0luZGV4KTtcbiAgICB0YXJnZXRUYXNrT2JqZWN0LnRvZ2dsZVBpbm5lZCgpO1xuICAgIC8vIERPTSBwb3J0aW9uIG9mIGV2ZW50IGhhbmRsZXJcbiAgICBET01TdHVmZi50b2dnbGVQaW5uZWQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgLy8gU3RvcmFnZSBwb3J0aW9uIG9mIGV2ZW50IGhhbmRsZXJcbiAgICBzdG9yYWdlQ29udHJvbGxlci5zdG9yZVVzZXJQcm9qZWN0cyh1c2VyUHJvamVjdHMpO1xufVxuZnVuY3Rpb24gaGFuZGxlQ3JlYXRlVGFzayhldmVudCwgZm9ybSkge1xuICAgICAgICAvLyBUYWtlIHRoZSBmb3JtIGRhdGEgYW5kIGNyZWF0ZSBhIG5ldyB0YXNrXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xuICAgICAgICAvLyByZXF1aXJlIHRhc2tzIHRvIGhhdmUgYSB0aXRsZVxuICAgICAgICBpZiAoIWZvcm1EYXRhLmdldCgndGl0bGUnKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayhcbiAgICAgICAgICAgIGZvcm1EYXRhLmdldCgndGl0bGUnKSxcbiAgICAgICAgICAgIGZvcm1EYXRhLmdldCgnZGVzYycpLFxuICAgICAgICAgICAgZm9ybURhdGEuZ2V0KCdkdWVEYXRlJyksXG4gICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgIClcbiAgICAgICAgY29uc29sZS5sb2cobmV3VGFzayk7XG4gICAgICAgIC8vIEFkZCB0aGUgdGFzayB0byB0aGUgcHJvamVjdCBhbmQgdXBkYXRlXG4gICAgICAgIGNvbnN0IHByb2plY3RJbmRleCA9IGZvcm0ucGFyZW50Tm9kZS5kYXRhc2V0LmluZGV4O1xuICAgICAgICB1c2VyUHJvamVjdHNbcHJvamVjdEluZGV4XS5hZGRUYXNrKG5ld1Rhc2spO1xuICAgICAgICBET01TdHVmZi51cGRhdGUoKTtcbiAgICAgICAgc3RvcmFnZUNvbnRyb2xsZXIuc3RvcmVVc2VyUHJvamVjdHModXNlclByb2plY3RzKTtcbiAgICB9XG5mdW5jdGlvbiBoYW5kbGVEZWxldGVUYXNrKGV2ZW50KSB7XG4gICAgY29uc3QgdGFza0luZGV4ID0gZXZlbnQuY3VycmVudFRhcmdldC5jbG9zZXN0KCcudGFzay1jb250YWluZXInKS5kYXRhc2V0LmluZGV4O1xuICAgIGNvbnN0IHByb2plY3RJbmRleCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuY2xvc2VzdCgnLnByb2plY3QnKS5kYXRhc2V0LmluZGV4O1xuICAgIGNvbnN0IHRhcmdldFByb2plY3RPYmplY3QgPSB1c2VyUHJvamVjdHNbcHJvamVjdEluZGV4XTtcbiAgICB0YXJnZXRQcm9qZWN0T2JqZWN0LnJlbW92ZVRhc2sodGFza0luZGV4KTtcbiAgICBET01TdHVmZi51cGRhdGUoKTtcbiAgICBzdG9yYWdlQ29udHJvbGxlci5zdG9yZVVzZXJQcm9qZWN0cyh1c2VyUHJvamVjdHMpO1xufVxuZnVuY3Rpb24gaGFuZGxlRXhwYW5kVGFzayhldmVudCkge1xuICAgIGNvbnN0IGV4cGFuZEJ1dHRvbiA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuY2xvc2VzdCgnLnRhc2stY29udGFpbmVyJyk7XG4gICAgY29uc3QgY29sbGFwc2libGUgPSB0YXNrQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jb2xsYXBzaWJsZScpXG4gICAgZXhwYW5kQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2V4cGFuZGVkJyk7XG4gICAgY29sbGFwc2libGUuY2xhc3NMaXN0LnRvZ2dsZSgnZXhwYW5kZWQnKTtcbn1cbmZ1bmN0aW9uIGhhbmRsZUV4cGFuZEZvcm0oZXZlbnQpIHtcbiAgICBjb25zdCBleHBhbmRCdXR0b24gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBleHBhbmRCdXR0b24ucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlLWZvcm0nKTtcbiAgICBleHBhbmRCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnZXhwYW5kZWQnKTtcbiAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2V4cGFuZGVkJyk7XG59XG5mdW5jdGlvbiBoYW5kbGVPcGVuVGFza0VkaXRvcihldmVudCkge1xuICAgIGNvbnN0IHRhc2tJbmRleCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuY2xvc2VzdCgnLnRhc2stY29udGFpbmVyJykuZGF0YXNldC5pbmRleDtcbiAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBldmVudC5jdXJyZW50VGFyZ2V0LmNsb3Nlc3QoJy5wcm9qZWN0JykuZGF0YXNldC5pbmRleDtcbiAgICBET01TdHVmZi5vcGVuVGFza0VkaXRvcihwcm9qZWN0SW5kZXgsIHRhc2tJbmRleCk7XG59XG5mdW5jdGlvbiBoYW5kbGVDb25maXJtRWRpdFRhc2soZXZlbnQsIHRhc2spIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXktZm9ybScpO1xuICAgICAvLyBUYWtlIHRoZSBmb3JtIGRhdGFcbiAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XG4gICAgIC8vIHJlcXVpcmUgdGFza3MgdG8gaGF2ZSBhIHRpdGxlXG4gICAgIGlmICghZm9ybURhdGEuZ2V0KCd0aXRsZScpKSB7XG4gICAgICAgICByZXR1cm47XG4gICAgIH1cbiAgICAgLy8gVXBkYXRlIHRoZSB0YXNrIGRhdGFcbiAgICAgdGFzay50aXRsZSA9IGZvcm1EYXRhLmdldCgndGl0bGUnKTtcbiAgICAgdGFzay5kZXNjcmlwdGlvbiA9IGZvcm1EYXRhLmdldCgnZGVzYycpO1xuICAgICB0YXNrLmR1ZURhdGUgPSBmb3JtRGF0YS5nZXQoJ2R1ZS1kYXRlJyk7XG4gICAgIC8vIHVwZGF0ZSBkb20sIGNsb3NlIGZvcm0gYW5kIHNhdmUgdG8gc3RvcmFnZVxuICAgICBET01TdHVmZi51cGRhdGUoKTtcbiAgICAgRE9NU3R1ZmYuY2xvc2VUYXNrRWRpdG9yKCk7XG4gICAgIHN0b3JhZ2VDb250cm9sbGVyLnN0b3JlVXNlclByb2plY3RzKHVzZXJQcm9qZWN0cyk7XG59XG5mdW5jdGlvbiBoYW5kbGVPcHRpb25zQnV0dG9uKGV2ZW50KSB7XG4gICAgY29uc3QgdGFyZ2V0UHJvaiA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuY2xvc2VzdCgnLnByb2plY3QnKTtcbiAgICAvLyBDaGVjayBpZiB0aGUgbWVudSBpcyBvcGVuIGFuZCBjbG9zZSBpdCBpZiBpdCBpc1xuICAgIGlmICh0YXJnZXRQcm9qLnF1ZXJ5U2VsZWN0b3IoJy5vcHRpb25zLWNvbnRhaW5lcicpKSB7XG4gICAgICAgIERPTVN0dWZmLmNsb3NlUHJvamVjdE9wdGlvbnModGFyZ2V0UHJvaik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBET01TdHVmZi5vcGVuUHJvamVjdE9wdGlvbnModGFyZ2V0UHJvaik7XG4gICAgfVxufVxuZnVuY3Rpb24gaGFuZGxlQ29uZmlybUVkaXRQcm9qZWN0KGV2ZW50LCBwcm9qZWN0KSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5LWZvcm0nKTtcbiAgICAvLyBUYWtlIHRoZSBmb3JtIGRhdGFcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcbiAgICAvLyByZXF1aXJlIHRhc2tzIHRvIGhhdmUgYSB0aXRsZVxuICAgIGlmICghZm9ybURhdGEuZ2V0KCduYW1lJykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBVcGRhdGUgdGhlIHByb2plY3QgZGF0YVxuICAgIHByb2plY3QubmFtZSA9IGZvcm1EYXRhLmdldCgnbmFtZScpO1xuICAgIHByb2plY3QuY29sb3IgPSBmb3JtRGF0YS5nZXQoJ25ldy1wcm9qZWN0LWNvbG9yJyk7XG4gICAgLy8gdXBkYXRlIGRvbSwgY2xvc2UgZm9ybSBhbmQgc2F2ZSB0byBzdG9yYWdlXG4gICAgRE9NU3R1ZmYudXBkYXRlKCk7XG4gICAgRE9NU3R1ZmYuY2xvc2VQcm9qZWN0RWRpdG9yKCk7XG4gICAgc3RvcmFnZUNvbnRyb2xsZXIuc3RvcmVVc2VyUHJvamVjdHModXNlclByb2plY3RzKTtcbn1cbmZ1bmN0aW9uIGhhbmRsZUNvbmZpcm1EZWxldGVQcm9qZWN0KGV2ZW50LCBwcm9qZWN0SW5kZXgpIHtcbiAgICB1c2VyUHJvamVjdHMuc3BsaWNlKHByb2plY3RJbmRleCwgMSk7XG4gICAgc3RvcmFnZUNvbnRyb2xsZXIuc3RvcmVVc2VyUHJvamVjdHModXNlclByb2plY3RzKTtcbiAgICBET01TdHVmZi5jbG9zZVByb2plY3REZWxldGVyKCk7XG4gICAgRE9NU3R1ZmYudXBkYXRlKCk7XG59XG4vLyBNYXliZSBzZXBhcmF0ZSBpbnRvIGRpZmZlcmVudCBmdW5jdGlvbnNcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoKSB7XG4gICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QnKTtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShwcm9qZWN0Rm9ybSk7XG4gICAgaWYgKGZvcm1EYXRhLmdldCgnbmV3LXByb2plY3QtdGl0bGUnKSkge1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoXG4gICAgICAgICAgICBmb3JtRGF0YS5nZXQoJ25ldy1wcm9qZWN0LXRpdGxlJyksXG4gICAgICAgICAgICBmb3JtRGF0YS5nZXQoJ25ldy1wcm9qZWN0LWNvbG9yJylcbiAgICAgICAgKVxuICAgICAgICB1c2VyUHJvamVjdHMudW5zaGlmdChuZXdQcm9qZWN0KTtcbiAgICAgICAgc3RvcmFnZUNvbnRyb2xsZXIuc3RvcmVVc2VyUHJvamVjdHModXNlclByb2plY3RzKTtcbiAgICAgICAgRE9NU3R1ZmYuY2xvc2VQcm9qZWN0Rm9ybSgpXG4gICAgICAgIERPTVN0dWZmLnVwZGF0ZSgpO1xuICAgIH1cblxufVxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXByb2plY3QnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIERPTVN0dWZmLm9wZW5Qcm9qZWN0Rm9ybSk7XG5cblxuRE9NU3R1ZmYudXBkYXRlKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9