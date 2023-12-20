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

module.exports = JSON.parse('{"userProjects":[{"name":"General","color":"blue","taskList":[]}]}');

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
        dueDateEl.textContent = `Due Date: ${dueDate}`;
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
        const name = document.createElement('h1');
        name.textContent = project.name;
        const taskList = document.createElement('div');
        taskList.classList.add('list-container');
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
        projectEl.append(name, taskList);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFBUSxpRUFBaUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlFQUFpQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssaUVBQWlCO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsNkNBQU87QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpQjtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBLGtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9zdG9yYWdlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGNvbG9yKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy50YXNrTGlzdCA9IFtdO1xuICAgIH1cbiAgICBhZGRUYXNrKHRhc2spIHtcbiAgICAgICAgdGhpcy50YXNrTGlzdC5wdXNoKHRhc2spO1xuICAgIH1cbiAgICByZW1vdmVUYXNrKGluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tMaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICAgIGdldFRhc2soaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza0xpc3RbaW5kZXhdO1xuICAgIH1cbn1cblxuY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uPScnLCBkdWVEYXRlPScnLCBwaW5uZWQ9ZmFsc2UsIGNvbXBsZXRlZD1mYWxzZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5waW5uZWQgPSBwaW5uZWQ7XG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xuICAgIH1cbiAgICBpc0NvbXBsZXRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGVkO1xuICAgIH1cbiAgICB0b2dnbGVDb21wbGV0ZWQoKSB7XG4gICAgICAgIGNvbnN0IG9wcG9zaXRlID0gISh0aGlzLmNvbXBsZXRlZCk7XG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gb3Bwb3NpdGU7XG4gICAgfVxuICAgIHRvZ2dsZVBpbm5lZCgpIHtcbiAgICAgICAgY29uc3Qgb3Bwb3NpdGUgPSAhKHRoaXMucGlubmVkKTtcbiAgICAgICAgdGhpcy5waW5uZWQgPSBvcHBvc2l0ZTtcbiAgICB9XG59XG5cbmV4cG9ydCB7UHJvamVjdCwgVGFza30iLCJpbXBvcnQgdXNlckRhdGEgZnJvbSAnLi90ZXN0Lmpzb24nO1xuY29uc3Qgc3RvcmFnZUNvbnRyb2xsZXIgPSB7XG4gICAgc3RvcmVVc2VyUHJvamVjdHModXNlclByb2plY3RzKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyUHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeSh1c2VyUHJvamVjdHMpKTtcbiAgICB9LFxuICAgIGdldFVzZXJQcm9qZWN0cygpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclByb2plY3RzXCIpO1xuICAgIH1cbn1cblxuZXhwb3J0IHtzdG9yYWdlQ29udHJvbGxlcn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge1Byb2plY3QsIFRhc2t9IGZyb20gXCIuL1Byb2plY3RcIjtcbmltcG9ydCB0ZXN0SlNPTiBmcm9tIFwiLi90ZXN0Lmpzb25cIlxuaW1wb3J0IHtzdG9yYWdlQ29udHJvbGxlcn0gZnJvbSAnLi9zdG9yYWdlQ29udHJvbGxlcidcblxuLy8gRmV0Y2ggdGhlIHVzZXIgZGF0YSBmcm9tIGxvY2FsIHN0b3JhZ2VcbmxldCB1c2VyRGF0YTtcbmlmIChzdG9yYWdlQ29udHJvbGxlci5nZXRVc2VyUHJvamVjdHMoKSkge1xuICAgIHVzZXJEYXRhID0gSlNPTi5wYXJzZShzdG9yYWdlQ29udHJvbGxlci5nZXRVc2VyUHJvamVjdHMoKSlcbn1cbi8vIElmIHVuYXZhaWxhYmxlIHVzZSBiYXNpYyB0ZW1wbGF0ZVxuZWxzZSB7XG4gICAgdXNlckRhdGEgPSB0ZXN0SlNPTi51c2VyUHJvamVjdHM7XG59XG5cbi8vIFBvcHVsYXRlIHVzZXJQcm9qZWN0cyBhcnJheSB3aXRoIFByb2plY3Qgb2JqZWN0cyB1c2luZyB1c2VyRGF0YVxuY29uc3QgdXNlclByb2plY3RzID0gW107XG5jb25zb2xlLmxvZyh1c2VyRGF0YSk7XG5mb3IgKGxldCBwcm9qZWN0IG9mIHVzZXJEYXRhKSB7XG4gICAgY29uc3QgdGVtcFByb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0Lm5hbWUsIHByb2plY3QuY29sb3IpO1xuICAgIGZvciAobGV0IHRhc2sgb2YgcHJvamVjdC50YXNrTGlzdCkge1xuICAgICAgICB0ZW1wUHJvamVjdC5hZGRUYXNrKFxuICAgICAgICAgICAgbmV3IFRhc2soXG4gICAgICAgICAgICAgICAgdGFzay50aXRsZSwgXG4gICAgICAgICAgICAgICAgdGFzay5kZXNjcmlwdGlvbiwgXG4gICAgICAgICAgICAgICAgdGFzay5kdWVEYXRlLCBcbiAgICAgICAgICAgICAgICB0YXNrLnBpbm5lZCwgXG4gICAgICAgICAgICAgICAgdGFzay5jb21wbGV0ZWRcbiAgICAgICAgICAgICAgICApKTtcbiAgICB9XG4gICAgdXNlclByb2plY3RzLnB1c2godGVtcFByb2plY3QpO1xufVxuXG5jb25zdCBET01TdHVmZiA9IHtcbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgICAgICBsZXQgaW5kZXggPSAwO1xuICAgICAgICBmb3IgKGxldCBwcm9qZWN0IG9mIHVzZXJQcm9qZWN0cykge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdEVsID0gdGhpcy5nZW5lcmF0ZVByb2plY3RFbChwcm9qZWN0KTtcbiAgICAgICAgICAgIHByb2plY3RFbC5kYXRhc2V0LmluZGV4ID0gaW5kZXgrKztcbiAgICAgICAgICAgIHRhcmdldC5hcHBlbmQocHJvamVjdEVsKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICAgICAgd2hpbGUgKHRhcmdldC5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgICAgIHRhcmdldC5yZW1vdmVDaGlsZCh0YXJnZXQuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGdlbmVyYXRlVGFza0VsKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcGlubmVkLCBjb21wbGV0ZWQsIHByb2plY3RDb2xvcikge1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrJyk7XG4gICAgICAgIGNvbnN0IGNsb25lID0gdGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIGNvbnN0IHBpbkJ1dHRvbiA9IGNsb25lLnF1ZXJ5U2VsZWN0b3IoJy5waW4tYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IGNvbXBsZXRlQnV0dG9uID0gY2xvbmUucXVlcnlTZWxlY3RvcignLmNvbXBsZXRlLWJ1dHRvbicpO1xuICAgICAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gY2xvbmUucXVlcnlTZWxlY3RvcignLnRhc2stY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IHRpdGxlRWwgPSBjbG9uZS5xdWVyeVNlbGVjdG9yKCcudGFzay10aXRsZScpO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkVsID0gY2xvbmUucXVlcnlTZWxlY3RvcignLnRhc2stZGVzY3JpcHRpb24nKTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZUVsID0gY2xvbmUucXVlcnlTZWxlY3RvcignLnRhc2stZHVlLWRhdGUnKTtcbiAgICAgICAgY29uc3QgZXhwYW5kQnV0dG9uID0gY2xvbmUucXVlcnlTZWxlY3RvcignLmV4cGFuZC1idXR0b24nKTtcbiAgICAgICAgY29uc3QgZWRpdEJ1dHRvbiA9IGNsb25lLnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWJ1dHRvbicpO1xuICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBjbG9uZS5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlLWJ1dHRvbicpXG4gICAgICAgIC8vIEFkZCBjb21wbGV0ZWQgY2xhc3MgaWYgdGFzayBpcyBjb21wbGV0ZWRcbiAgICAgICAgaWYgKGNvbXBsZXRlZCkge1xuICAgICAgICBjb21wbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQnKTtcbiAgICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQnKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBZGQgcGlubmVkIGNsYXNzIGlmIHRhc2sgaXMgcGlubmVkXG4gICAgICAgIGlmIChwaW5uZWQpIHtcbiAgICAgICAgICAgIHBpbkJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwaW5uZWQnKTtcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncGlubmVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTWFrZSBidXR0b25zIHRoZSBhcHByb3ByaWF0ZSBjb2xvclxuICAgICAgICBjb21wbGV0ZUJ1dHRvbi5zdHlsZS5maWxsID0gcHJvamVjdENvbG9yO1xuICAgICAgICBjb21wbGV0ZUJ1dHRvbi5zdHlsZS5zdHJva2UgPSBwcm9qZWN0Q29sb3I7XG4gICAgICAgIHBpbkJ1dHRvbi5zdHlsZS5maWxsID0gcHJvamVjdENvbG9yO1xuICAgICAgICBwaW5CdXR0b24uc3R5bGUuc3Ryb2tlID0gcHJvamVjdENvbG9yO1xuICAgICAgICAvLyBGaWxsIHRoZSB0YXNrIGRhdGFcbiAgICAgICAgdGl0bGVFbC50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgICAgICBkZXNjcmlwdGlvbkVsLnRleHRDb250ZW50ID0gXG4gICAgICAgIGRlc2NyaXB0aW9uO1xuICAgICAgICBkdWVEYXRlRWwudGV4dENvbnRlbnQgPSBgRHVlIERhdGU6ICR7ZHVlRGF0ZX1gO1xuICAgICAgICAvLyBBdHRhY2ggZXZlbnRsaXN0ZW5lcnNcbiAgICAgICAgY29tcGxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVUb2dnbGVDb21wbGV0ZWQpO1xuICAgICAgICBwaW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVUb2dnbGVQaW5uZWQpO1xuICAgICAgICBleHBhbmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVFeHBhbmRUYXNrKTtcbiAgICAgICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZU9wZW5UYXNrRWRpdG9yKTtcbiAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlRGVsZXRlVGFzayk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGFza0NvbnRhaW5lcjtcbiAgICB9LFxuICAgIGdlbmVyYXRlUHJvamVjdEVsKHByb2plY3QpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2plY3RFbC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0JylcbiAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tMaXN0LmNsYXNzTGlzdC5hZGQoJ2xpc3QtY29udGFpbmVyJyk7XG4gICAgICAgIC8vIExvb3AgdGhyb3VnaCB0YXNrcyBhbmQgcG9wdWxhdGUgdGhlIHRhc2sgbGlzdCBlbGVtZW50c1xuICAgICAgICBsZXQgaW5kZXggPSAwO1xuICAgICAgICBmb3IgKGxldCB0YXNrIG9mIHByb2plY3QudGFza0xpc3QpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tFbCA9IHRoaXMuZ2VuZXJhdGVUYXNrRWwoXG4gICAgICAgICAgICAgICAgdGFzay50aXRsZSwgXG4gICAgICAgICAgICAgICAgdGFzay5kZXNjcmlwdGlvbiwgXG4gICAgICAgICAgICAgICAgdGFzay5kdWVEYXRlLCBcbiAgICAgICAgICAgICAgICB0YXNrLnBpbm5lZCwgXG4gICAgICAgICAgICAgICAgdGFzay5jb21wbGV0ZWQsXG4gICAgICAgICAgICAgICAgcHJvamVjdC5jb2xvclxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAvLyBBZGQgYW4gaW5kZXggZGF0YXNldCB0byBlYWNoIHRhc2sgZWxlbWVudFxuICAgICAgICAgICAgdGFza0VsLmRhdGFzZXQuaW5kZXggPSBpbmRleCsrO1xuICAgICAgICAgICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQodGFza0VsKTsgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIHByb2plY3RFbC5hcHBlbmQobmFtZSwgdGFza0xpc3QpO1xuXG4gICAgICAgIC8vIEFkZCBjcmVhdGlvbiBmb3JtXG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZS1mb3JtJyk7XG4gICAgICAgIGNvbnN0IGNsb25lID0gdGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIGNvbnN0IGNyZWF0ZUJ1dHRvbiA9IGNsb25lLnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUtYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IGV4cGFuZEJ1dHRvbiA9IGNsb25lLnF1ZXJ5U2VsZWN0b3IoJyNleHBhbmQtZm9ybScpXG4gICAgICAgIGNvbnN0IGZvcm0gPSBjbG9uZS5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gICAgICAgIGNyZWF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFxuICAgICAgICAgICAgKGV2ZW50KT0+e2hhbmRsZUNyZWF0ZVRhc2soZXZlbnQsIGZvcm0pfSk7XG4gICAgICAgIGV4cGFuZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUV4cGFuZEZvcm0pO1xuICAgICAgICBwcm9qZWN0RWwuYXBwZW5kQ2hpbGQoY2xvbmUpO1xuICAgICAgICByZXR1cm4gcHJvamVjdEVsO1xuICAgIH0sXG4gICAgdG9nZ2xlQ29tcGxldGVkKHRvZ2dsZUNvbXBsZXRlZEVsKSB7XG4gICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSB0b2dnbGVDb21wbGV0ZWRFbC5jbG9zZXN0KCcudGFzay1jb250YWluZXInKTtcbiAgICAgICAgdG9nZ2xlQ29tcGxldGVkRWwuY2xhc3NMaXN0LnRvZ2dsZSgnY29tcGxldGVkJyk7XG4gICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnY29tcGxldGVkJylcbiAgICB9LFxuICAgIHRvZ2dsZVBpbm5lZCh0b2dnbGVQaW5uZWRFbCkge1xuICAgICAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gdG9nZ2xlUGlubmVkRWwuY2xvc2VzdCgnLnRhc2stY29udGFpbmVyJyk7XG4gICAgICAgIHRvZ2dsZVBpbm5lZEVsLmNsYXNzTGlzdC50b2dnbGUoJ3Bpbm5lZCcpO1xuICAgICAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ3Bpbm5lZCcpXG4gICAgfSxcbiAgICBvcGVuUHJvamVjdEZvcm0oKSB7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy1wcm9qZWN0Jyk7XG4gICAgICAgIGNvbnN0IGNsb25lID0gdGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hcHBlbmQoY2xvbmUpO1xuICAgICAgICBjb25zdCBjcmVhdGVQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZS1wcm9qZWN0Jyk7XG4gICAgICAgIGNvbnN0IGNhbmNlbFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FuY2VsLXByb2plY3QnKTtcbiAgICAgICAgY3JlYXRlUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZVByb2plY3QpO1xuICAgICAgICBjYW5jZWxQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgRE9NU3R1ZmYuY2xvc2VQcm9qZWN0Rm9ybSk7XG4gICAgfSxcbiAgICBjbG9zZVByb2plY3RGb3JtKCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibHVyLW92ZXJsYXknKTtcbiAgICAgICAgcHJvamVjdEZvcm0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChwcm9qZWN0Rm9ybSk7XG4gICAgfSxcbiAgICBvcGVuVGFza0VkaXRvcihwcm9qZWN0SW5kZXgsIHRhc2tJbmRleCkge1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2snKTtcbiAgICAgICAgY29uc3QgY2xvbmUgPSB0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKTtcblxuICAgICAgICAvLyBGaWxsIGZvcm0gaW5wdXQgdmFsdWVzIHdpdGggdGFzayBkYXRhXG4gICAgICAgIGNvbnN0IHRhc2tPYmogPSB1c2VyUHJvamVjdHNbcHJvamVjdEluZGV4XS5nZXRUYXNrKHRhc2tJbmRleCk7XG4gICAgICAgIGNsb25lLnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB0YXNrT2JqLnRpdGxlKTtcbiAgICAgICAgY2xvbmUucXVlcnlTZWxlY3RvcignI2Rlc2MnKS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdGFza09iai5kZXNjcmlwdGlvbik7XG4gICAgICAgIGNsb25lLnF1ZXJ5U2VsZWN0b3IoJyNkdWUtZGF0ZScpLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB0YXNrT2JqLmR1ZURhdGUpO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hcHBlbmRDaGlsZChjbG9uZSk7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbmNlbC1lZGl0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBET01TdHVmZi5jbG9zZVRhc2tFZGl0b3IpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29uZmlybS1lZGl0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpPT57aGFuZGxlQ29uZmlybUVkaXRUYXNrKGV2ZW50LCB0YXNrT2JqKX0pXG5cbiAgICB9LFxuICAgIGNsb3NlVGFza0VkaXRvcigpIHtcbiAgICAgICAgY29uc3QgZWRpdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmx1ci1vdmVybGF5Jyk7XG4gICAgICAgIGVkaXRGb3JtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWRpdEZvcm0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlVG9nZ2xlQ29tcGxldGVkKGV2ZW50KSB7XG4gICAgLy8gY3VycmVudFRhcmdldCBpcyBuZWVkZWQgaW5zdGVhZCB0byB0YXJnZXQgb3RoZXJ3aXNlIHN2ZyBwYXRoIGlzIHRoZSB0YXJnZXRcbiAgICBjb25zdCB0YXNrSW5kZXggPSBldmVudC5jdXJyZW50VGFyZ2V0LmNsb3Nlc3QoJy50YXNrLWNvbnRhaW5lcicpLmRhdGFzZXQuaW5kZXg7XG4gICAgY29uc3QgcHJvamVjdEluZGV4ID0gZXZlbnQuY3VycmVudFRhcmdldC5jbG9zZXN0KCcucHJvamVjdCcpLmRhdGFzZXQuaW5kZXhcbiAgICBjb25zdCB0YXJnZXRUYXNrT2JqZWN0ID0gdXNlclByb2plY3RzW3Byb2plY3RJbmRleF0uZ2V0VGFzayh0YXNrSW5kZXgpO1xuICAgIHRhcmdldFRhc2tPYmplY3QudG9nZ2xlQ29tcGxldGVkKCk7XG4gICAgLy8gRE9NIHBvcnRpb24gb2YgZXZlbnQgaGFuZGxlclxuICAgIERPTVN0dWZmLnRvZ2dsZUNvbXBsZXRlZChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAvLyBTdG9yYWdlIHBvcnRpb24gb2YgZXZlbnQgaGFuZGxlclxuICAgIHN0b3JhZ2VDb250cm9sbGVyLnN0b3JlVXNlclByb2plY3RzKHVzZXJQcm9qZWN0cyk7XG59XG5mdW5jdGlvbiBoYW5kbGVUb2dnbGVQaW5uZWQoZXZlbnQpIHtcbiAgICBjb25zdCB0YXNrSW5kZXggPSBldmVudC5jdXJyZW50VGFyZ2V0LmNsb3Nlc3QoJy50YXNrLWNvbnRhaW5lcicpLmRhdGFzZXQuaW5kZXg7XG4gICAgY29uc3QgcHJvamVjdEluZGV4ID0gZXZlbnQuY3VycmVudFRhcmdldC5jbG9zZXN0KCcucHJvamVjdCcpLmRhdGFzZXQuaW5kZXhcbiAgICBjb25zdCB0YXJnZXRUYXNrT2JqZWN0ID0gdXNlclByb2plY3RzW3Byb2plY3RJbmRleF0uZ2V0VGFzayh0YXNrSW5kZXgpO1xuICAgIHRhcmdldFRhc2tPYmplY3QudG9nZ2xlUGlubmVkKCk7XG4gICAgLy8gRE9NIHBvcnRpb24gb2YgZXZlbnQgaGFuZGxlclxuICAgIERPTVN0dWZmLnRvZ2dsZVBpbm5lZChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAvLyBTdG9yYWdlIHBvcnRpb24gb2YgZXZlbnQgaGFuZGxlclxuICAgIHN0b3JhZ2VDb250cm9sbGVyLnN0b3JlVXNlclByb2plY3RzKHVzZXJQcm9qZWN0cyk7XG59XG5mdW5jdGlvbiBoYW5kbGVDcmVhdGVUYXNrKGV2ZW50LCBmb3JtKSB7XG4gICAgICAgIC8vIFRha2UgdGhlIGZvcm0gZGF0YSBhbmQgY3JlYXRlIGEgbmV3IHRhc2tcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XG4gICAgICAgIC8vIHJlcXVpcmUgdGFza3MgdG8gaGF2ZSBhIHRpdGxlXG4gICAgICAgIGlmICghZm9ybURhdGEuZ2V0KCd0aXRsZScpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKFxuICAgICAgICAgICAgZm9ybURhdGEuZ2V0KCd0aXRsZScpLFxuICAgICAgICAgICAgZm9ybURhdGEuZ2V0KCdkZXNjJyksXG4gICAgICAgICAgICBmb3JtRGF0YS5nZXQoJ2R1ZURhdGUnKSxcbiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgKVxuICAgICAgICBjb25zb2xlLmxvZyhuZXdUYXNrKTtcbiAgICAgICAgLy8gQWRkIHRoZSB0YXNrIHRvIHRoZSBwcm9qZWN0IGFuZCB1cGRhdGVcbiAgICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gZm9ybS5wYXJlbnROb2RlLmRhdGFzZXQuaW5kZXg7XG4gICAgICAgIHVzZXJQcm9qZWN0c1twcm9qZWN0SW5kZXhdLmFkZFRhc2sobmV3VGFzayk7XG4gICAgICAgIERPTVN0dWZmLnVwZGF0ZSgpO1xuICAgICAgICBzdG9yYWdlQ29udHJvbGxlci5zdG9yZVVzZXJQcm9qZWN0cyh1c2VyUHJvamVjdHMpO1xuICAgIH1cbmZ1bmN0aW9uIGhhbmRsZURlbGV0ZVRhc2soZXZlbnQpIHtcbiAgICBjb25zdCB0YXNrSW5kZXggPSBldmVudC5jdXJyZW50VGFyZ2V0LmNsb3Nlc3QoJy50YXNrLWNvbnRhaW5lcicpLmRhdGFzZXQuaW5kZXg7XG4gICAgY29uc3QgcHJvamVjdEluZGV4ID0gZXZlbnQuY3VycmVudFRhcmdldC5jbG9zZXN0KCcucHJvamVjdCcpLmRhdGFzZXQuaW5kZXg7XG4gICAgY29uc3QgdGFyZ2V0UHJvamVjdE9iamVjdCA9IHVzZXJQcm9qZWN0c1twcm9qZWN0SW5kZXhdO1xuICAgIHRhcmdldFByb2plY3RPYmplY3QucmVtb3ZlVGFzayh0YXNrSW5kZXgpO1xuICAgIERPTVN0dWZmLnVwZGF0ZSgpO1xuICAgIHN0b3JhZ2VDb250cm9sbGVyLnN0b3JlVXNlclByb2plY3RzKHVzZXJQcm9qZWN0cyk7XG59XG5mdW5jdGlvbiBoYW5kbGVFeHBhbmRUYXNrKGV2ZW50KSB7XG4gICAgY29uc3QgZXhwYW5kQnV0dG9uID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZXZlbnQuY3VycmVudFRhcmdldC5jbG9zZXN0KCcudGFzay1jb250YWluZXInKTtcbiAgICBjb25zdCBjb2xsYXBzaWJsZSA9IHRhc2tDb250YWluZXIucXVlcnlTZWxlY3RvcignLmNvbGxhcHNpYmxlJylcbiAgICBleHBhbmRCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnZXhwYW5kZWQnKTtcbiAgICBjb2xsYXBzaWJsZS5jbGFzc0xpc3QudG9nZ2xlKCdleHBhbmRlZCcpO1xufVxuZnVuY3Rpb24gaGFuZGxlRXhwYW5kRm9ybShldmVudCkge1xuICAgIGNvbnN0IGV4cGFuZEJ1dHRvbiA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGV4cGFuZEJ1dHRvbi5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtZm9ybScpO1xuICAgIGV4cGFuZEJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdleHBhbmRlZCcpO1xuICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnZXhwYW5kZWQnKTtcbn1cbmZ1bmN0aW9uIGhhbmRsZU9wZW5UYXNrRWRpdG9yKGV2ZW50KSB7XG4gICAgY29uc3QgdGFza0luZGV4ID0gZXZlbnQuY3VycmVudFRhcmdldC5jbG9zZXN0KCcudGFzay1jb250YWluZXInKS5kYXRhc2V0LmluZGV4O1xuICAgIGNvbnN0IHByb2plY3RJbmRleCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuY2xvc2VzdCgnLnByb2plY3QnKS5kYXRhc2V0LmluZGV4O1xuICAgIERPTVN0dWZmLm9wZW5UYXNrRWRpdG9yKHByb2plY3RJbmRleCwgdGFza0luZGV4KTtcbn1cbmZ1bmN0aW9uIGhhbmRsZUNvbmZpcm1FZGl0VGFzayhldmVudCwgdGFzaykge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheS1mb3JtJyk7XG4gICAgIC8vIFRha2UgdGhlIGZvcm0gZGF0YVxuICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcbiAgICAgLy8gcmVxdWlyZSB0YXNrcyB0byBoYXZlIGEgdGl0bGVcbiAgICAgaWYgKCFmb3JtRGF0YS5nZXQoJ3RpdGxlJykpIHtcbiAgICAgICAgIHJldHVybjtcbiAgICAgfVxuICAgICAvLyBVcGRhdGUgdGhlIHRhc2sgZGF0YVxuICAgICB0YXNrLnRpdGxlID0gZm9ybURhdGEuZ2V0KCd0aXRsZScpO1xuICAgICB0YXNrLmRlc2NyaXB0aW9uID0gZm9ybURhdGEuZ2V0KCdkZXNjJyk7XG4gICAgIHRhc2suZHVlRGF0ZSA9IGZvcm1EYXRhLmdldCgnZHVlLWRhdGUnKTtcbiAgICAgLy8gdXBkYXRlIGRvbSwgY2xvc2UgZm9ybSBhbmQgc2F2ZSB0byBzdG9yYWdlXG4gICAgIERPTVN0dWZmLnVwZGF0ZSgpO1xuICAgICBET01TdHVmZi5jbG9zZVRhc2tFZGl0b3IoKTtcbiAgICAgc3RvcmFnZUNvbnRyb2xsZXIuc3RvcmVVc2VyUHJvamVjdHModXNlclByb2plY3RzKTtcbn1cblxuLy8gTWF5YmUgc2VwYXJhdGUgaW50byBkaWZmZXJlbnQgZnVuY3Rpb25zXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KCkge1xuICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0Jyk7XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEocHJvamVjdEZvcm0pO1xuICAgIGlmIChmb3JtRGF0YS5nZXQoJ25ldy1wcm9qZWN0LXRpdGxlJykpIHtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KFxuICAgICAgICAgICAgZm9ybURhdGEuZ2V0KCduZXctcHJvamVjdC10aXRsZScpLFxuICAgICAgICAgICAgZm9ybURhdGEuZ2V0KCduZXctcHJvamVjdC1jb2xvcicpXG4gICAgICAgIClcbiAgICAgICAgdXNlclByb2plY3RzLnVuc2hpZnQobmV3UHJvamVjdCk7XG4gICAgICAgIHN0b3JhZ2VDb250cm9sbGVyLnN0b3JlVXNlclByb2plY3RzKHVzZXJQcm9qZWN0cyk7XG4gICAgICAgIERPTVN0dWZmLmNsb3NlUHJvamVjdEZvcm0oKVxuICAgICAgICBET01TdHVmZi51cGRhdGUoKTtcbiAgICB9XG5cbn1cblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1wcm9qZWN0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBET01TdHVmZi5vcGVuUHJvamVjdEZvcm0pO1xuXG5cbkRPTVN0dWZmLnVwZGF0ZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==