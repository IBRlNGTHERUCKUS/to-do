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
    openProjectOptions(projectIndex) {

    },
    closeProjectOptions() {

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EsNEJBQTRCLDBDQUFJO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksaUVBQWlCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxpRUFBaUI7QUFDdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiw2Q0FBTztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlCO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0Esa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9Qcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3N0b3JhZ2VDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgY29sb3IpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgICAgICB0aGlzLnRhc2tMaXN0ID0gW107XG4gICAgfVxuICAgIGFkZFRhc2sodGFzaykge1xuICAgICAgICB0aGlzLnRhc2tMaXN0LnB1c2godGFzayk7XG4gICAgfVxuICAgIHJlbW92ZVRhc2soaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gICAgZ2V0VGFzayhpbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy50YXNrTGlzdFtpbmRleF07XG4gICAgfVxufVxuXG5jbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb249JycsIGR1ZURhdGU9JycsIHBpbm5lZD1mYWxzZSwgY29tcGxldGVkPWZhbHNlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnBpbm5lZCA9IHBpbm5lZDtcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XG4gICAgfVxuICAgIGlzQ29tcGxldGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZWQ7XG4gICAgfVxuICAgIHRvZ2dsZUNvbXBsZXRlZCgpIHtcbiAgICAgICAgY29uc3Qgb3Bwb3NpdGUgPSAhKHRoaXMuY29tcGxldGVkKTtcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSBvcHBvc2l0ZTtcbiAgICB9XG4gICAgdG9nZ2xlUGlubmVkKCkge1xuICAgICAgICBjb25zdCBvcHBvc2l0ZSA9ICEodGhpcy5waW5uZWQpO1xuICAgICAgICB0aGlzLnBpbm5lZCA9IG9wcG9zaXRlO1xuICAgIH1cbn1cblxuZXhwb3J0IHtQcm9qZWN0LCBUYXNrfSIsImltcG9ydCB1c2VyRGF0YSBmcm9tICcuL3Rlc3QuanNvbic7XG5jb25zdCBzdG9yYWdlQ29udHJvbGxlciA9IHtcbiAgICBzdG9yZVVzZXJQcm9qZWN0cyh1c2VyUHJvamVjdHMpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJQcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHVzZXJQcm9qZWN0cykpO1xuICAgIH0sXG4gICAgZ2V0VXNlclByb2plY3RzKCkge1xuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyUHJvamVjdHNcIik7XG4gICAgfVxufVxuXG5leHBvcnQge3N0b3JhZ2VDb250cm9sbGVyfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7UHJvamVjdCwgVGFza30gZnJvbSBcIi4vUHJvamVjdFwiO1xuaW1wb3J0IHRlc3RKU09OIGZyb20gXCIuL3Rlc3QuanNvblwiXG5pbXBvcnQge3N0b3JhZ2VDb250cm9sbGVyfSBmcm9tICcuL3N0b3JhZ2VDb250cm9sbGVyJ1xuXG4vLyBGZXRjaCB0aGUgdXNlciBkYXRhIGZyb20gbG9jYWwgc3RvcmFnZVxubGV0IHVzZXJEYXRhO1xuaWYgKHN0b3JhZ2VDb250cm9sbGVyLmdldFVzZXJQcm9qZWN0cygpKSB7XG4gICAgdXNlckRhdGEgPSBKU09OLnBhcnNlKHN0b3JhZ2VDb250cm9sbGVyLmdldFVzZXJQcm9qZWN0cygpKVxufVxuLy8gSWYgdW5hdmFpbGFibGUgdXNlIGJhc2ljIHRlbXBsYXRlXG5lbHNlIHtcbiAgICB1c2VyRGF0YSA9IHRlc3RKU09OLnVzZXJQcm9qZWN0cztcbn1cblxuLy8gUG9wdWxhdGUgdXNlclByb2plY3RzIGFycmF5IHdpdGggUHJvamVjdCBvYmplY3RzIHVzaW5nIHVzZXJEYXRhXG5jb25zdCB1c2VyUHJvamVjdHMgPSBbXTtcbmNvbnNvbGUubG9nKHVzZXJEYXRhKTtcbmZvciAobGV0IHByb2plY3Qgb2YgdXNlckRhdGEpIHtcbiAgICBjb25zdCB0ZW1wUHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3QubmFtZSwgcHJvamVjdC5jb2xvcik7XG4gICAgZm9yIChsZXQgdGFzayBvZiBwcm9qZWN0LnRhc2tMaXN0KSB7XG4gICAgICAgIHRlbXBQcm9qZWN0LmFkZFRhc2soXG4gICAgICAgICAgICBuZXcgVGFzayhcbiAgICAgICAgICAgICAgICB0YXNrLnRpdGxlLCBcbiAgICAgICAgICAgICAgICB0YXNrLmRlc2NyaXB0aW9uLCBcbiAgICAgICAgICAgICAgICB0YXNrLmR1ZURhdGUsIFxuICAgICAgICAgICAgICAgIHRhc2sucGlubmVkLCBcbiAgICAgICAgICAgICAgICB0YXNrLmNvbXBsZXRlZFxuICAgICAgICAgICAgICAgICkpO1xuICAgIH1cbiAgICB1c2VyUHJvamVjdHMucHVzaCh0ZW1wUHJvamVjdCk7XG59XG5cbmNvbnN0IERPTVN0dWZmID0ge1xuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgIGZvciAobGV0IHByb2plY3Qgb2YgdXNlclByb2plY3RzKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0RWwgPSB0aGlzLmdlbmVyYXRlUHJvamVjdEVsKHByb2plY3QpO1xuICAgICAgICAgICAgcHJvamVjdEVsLmRhdGFzZXQuaW5kZXggPSBpbmRleCsrO1xuICAgICAgICAgICAgdGFyZ2V0LmFwcGVuZChwcm9qZWN0RWwpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjbGVhcigpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgICAgICB3aGlsZSAodGFyZ2V0Lmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICAgICAgdGFyZ2V0LnJlbW92ZUNoaWxkKHRhcmdldC5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZ2VuZXJhdGVUYXNrRWwodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwaW5uZWQsIGNvbXBsZXRlZCwgcHJvamVjdENvbG9yKSB7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2snKTtcbiAgICAgICAgY29uc3QgY2xvbmUgPSB0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgY29uc3QgcGluQnV0dG9uID0gY2xvbmUucXVlcnlTZWxlY3RvcignLnBpbi1idXR0b24nKTtcbiAgICAgICAgY29uc3QgY29tcGxldGVCdXR0b24gPSBjbG9uZS5xdWVyeVNlbGVjdG9yKCcuY29tcGxldGUtYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBjbG9uZS5xdWVyeVNlbGVjdG9yKCcudGFzay1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgdGl0bGVFbCA9IGNsb25lLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLXRpdGxlJyk7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uRWwgPSBjbG9uZS5xdWVyeVNlbGVjdG9yKCcudGFzay1kZXNjcmlwdGlvbicpO1xuICAgICAgICBjb25zdCBkdWVEYXRlRWwgPSBjbG9uZS5xdWVyeVNlbGVjdG9yKCcudGFzay1kdWUtZGF0ZScpO1xuICAgICAgICBjb25zdCBleHBhbmRCdXR0b24gPSBjbG9uZS5xdWVyeVNlbGVjdG9yKCcuZXhwYW5kLWJ1dHRvbicpO1xuICAgICAgICBjb25zdCBlZGl0QnV0dG9uID0gY2xvbmUucXVlcnlTZWxlY3RvcignLmVkaXQtYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGNsb25lLnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGUtYnV0dG9uJylcbiAgICAgICAgLy8gQWRkIGNvbXBsZXRlZCBjbGFzcyBpZiB0YXNrIGlzIGNvbXBsZXRlZFxuICAgICAgICBpZiAoY29tcGxldGVkKSB7XG4gICAgICAgIGNvbXBsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZCcpO1xuICAgICAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZCcpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFkZCBwaW5uZWQgY2xhc3MgaWYgdGFzayBpcyBwaW5uZWRcbiAgICAgICAgaWYgKHBpbm5lZCkge1xuICAgICAgICAgICAgcGluQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Bpbm5lZCcpO1xuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwaW5uZWQnKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBNYWtlIGJ1dHRvbnMgdGhlIGFwcHJvcHJpYXRlIGNvbG9yXG4gICAgICAgIGNvbXBsZXRlQnV0dG9uLnN0eWxlLmZpbGwgPSBwcm9qZWN0Q29sb3I7XG4gICAgICAgIGNvbXBsZXRlQnV0dG9uLnN0eWxlLnN0cm9rZSA9IHByb2plY3RDb2xvcjtcbiAgICAgICAgcGluQnV0dG9uLnN0eWxlLmZpbGwgPSBwcm9qZWN0Q29sb3I7XG4gICAgICAgIHBpbkJ1dHRvbi5zdHlsZS5zdHJva2UgPSBwcm9qZWN0Q29sb3I7XG4gICAgICAgIC8vIEZpbGwgdGhlIHRhc2sgZGF0YVxuICAgICAgICB0aXRsZUVsLnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgICAgIGRlc2NyaXB0aW9uRWwudGV4dENvbnRlbnQgPSBcbiAgICAgICAgZGVzY3JpcHRpb247XG4gICAgICAgIGlmIChkdWVEYXRlKSB7XG4gICAgICAgICAgICBkdWVEYXRlRWwudGV4dENvbnRlbnQgPSBgRHVlIERhdGU6ICR7ZHVlRGF0ZX1gO1xuICAgICAgICB9XG4gICAgICAgIC8vIEF0dGFjaCBldmVudGxpc3RlbmVyc1xuICAgICAgICBjb21wbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVRvZ2dsZUNvbXBsZXRlZCk7XG4gICAgICAgIHBpbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVRvZ2dsZVBpbm5lZCk7XG4gICAgICAgIGV4cGFuZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUV4cGFuZFRhc2spO1xuICAgICAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlT3BlblRhc2tFZGl0b3IpO1xuICAgICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVEZWxldGVUYXNrKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0YXNrQ29udGFpbmVyO1xuICAgIH0sXG4gICAgZ2VuZXJhdGVQcm9qZWN0RWwocHJvamVjdCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdEVsLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKVxuICAgICAgICBjb25zdCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2plY3RIZWFkZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1oZWFkZXInKTtcbiAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tMaXN0LmNsYXNzTGlzdC5hZGQoJ2xpc3QtY29udGFpbmVyJyk7XG4gICAgICAgIC8vIENyZWF0ZSB0aGUgb3B0aW9ucyBidXR0b25cbiAgICAgICAgY29uc3Qgb3B0aW9uc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBvcHRpb25zQnV0dG9uLnRleHRDb250ZW50ID0gJy4uLic7XG4gICAgICAgIG9wdGlvbnNCdXR0b24uY2xhc3NMaXN0LmFkZCgnb3B0aW9ucy1idXR0b24nKTtcbiAgICAgICAgLy8gTG9vcCB0aHJvdWdoIHRhc2tzIGFuZCBwb3B1bGF0ZSB0aGUgdGFzayBsaXN0IGVsZW1lbnRzXG4gICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgIGZvciAobGV0IHRhc2sgb2YgcHJvamVjdC50YXNrTGlzdCkge1xuICAgICAgICAgICAgY29uc3QgdGFza0VsID0gdGhpcy5nZW5lcmF0ZVRhc2tFbChcbiAgICAgICAgICAgICAgICB0YXNrLnRpdGxlLCBcbiAgICAgICAgICAgICAgICB0YXNrLmRlc2NyaXB0aW9uLCBcbiAgICAgICAgICAgICAgICB0YXNrLmR1ZURhdGUsIFxuICAgICAgICAgICAgICAgIHRhc2sucGlubmVkLCBcbiAgICAgICAgICAgICAgICB0YXNrLmNvbXBsZXRlZCxcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmNvbG9yXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIC8vIEFkZCBhbiBpbmRleCBkYXRhc2V0IHRvIGVhY2ggdGFzayBlbGVtZW50XG4gICAgICAgICAgICB0YXNrRWwuZGF0YXNldC5pbmRleCA9IGluZGV4Kys7XG4gICAgICAgICAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZCh0YXNrRWwpOyAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgcHJvamVjdEhlYWRlci5hcHBlbmQobmFtZSwgb3B0aW9uc0J1dHRvbilcbiAgICAgICAgcHJvamVjdEVsLmFwcGVuZChwcm9qZWN0SGVhZGVyLCB0YXNrTGlzdCk7XG5cbiAgICAgICAgLy8gQWRkIGNyZWF0aW9uIGZvcm1cbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlLWZvcm0nKTtcbiAgICAgICAgY29uc3QgY2xvbmUgPSB0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgY29uc3QgY3JlYXRlQnV0dG9uID0gY2xvbmUucXVlcnlTZWxlY3RvcignI2NyZWF0ZS1idXR0b24nKTtcbiAgICAgICAgY29uc3QgZXhwYW5kQnV0dG9uID0gY2xvbmUucXVlcnlTZWxlY3RvcignI2V4cGFuZC1mb3JtJylcbiAgICAgICAgY29uc3QgZm9ybSA9IGNsb25lLnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgICAgICAgY3JlYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgXG4gICAgICAgICAgICAoZXZlbnQpPT57aGFuZGxlQ3JlYXRlVGFzayhldmVudCwgZm9ybSl9KTtcbiAgICAgICAgZXhwYW5kQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlRXhwYW5kRm9ybSk7XG4gICAgICAgIHByb2plY3RFbC5hcHBlbmRDaGlsZChjbG9uZSk7XG4gICAgICAgIHJldHVybiBwcm9qZWN0RWw7XG4gICAgfSxcbiAgICB0b2dnbGVDb21wbGV0ZWQodG9nZ2xlQ29tcGxldGVkRWwpIHtcbiAgICAgICAgY29uc3QgdGFza0NvbnRhaW5lciA9IHRvZ2dsZUNvbXBsZXRlZEVsLmNsb3Nlc3QoJy50YXNrLWNvbnRhaW5lcicpO1xuICAgICAgICB0b2dnbGVDb21wbGV0ZWRFbC5jbGFzc0xpc3QudG9nZ2xlKCdjb21wbGV0ZWQnKTtcbiAgICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdjb21wbGV0ZWQnKVxuICAgIH0sXG4gICAgdG9nZ2xlUGlubmVkKHRvZ2dsZVBpbm5lZEVsKSB7XG4gICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSB0b2dnbGVQaW5uZWRFbC5jbG9zZXN0KCcudGFzay1jb250YWluZXInKTtcbiAgICAgICAgdG9nZ2xlUGlubmVkRWwuY2xhc3NMaXN0LnRvZ2dsZSgncGlubmVkJyk7XG4gICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgncGlubmVkJylcbiAgICB9LFxuICAgIG9wZW5Qcm9qZWN0Rm9ybSgpIHtcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXByb2plY3QnKTtcbiAgICAgICAgY29uc3QgY2xvbmUgPSB0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZChjbG9uZSk7XG4gICAgICAgIGNvbnN0IGNyZWF0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlLXByb2plY3QnKTtcbiAgICAgICAgY29uc3QgY2FuY2VsUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW5jZWwtcHJvamVjdCcpO1xuICAgICAgICBjcmVhdGVQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlUHJvamVjdCk7XG4gICAgICAgIGNhbmNlbFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBET01TdHVmZi5jbG9zZVByb2plY3RGb3JtKTtcbiAgICB9LFxuICAgIGNsb3NlUHJvamVjdEZvcm0oKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsdXItb3ZlcmxheScpO1xuICAgICAgICBwcm9qZWN0Rm9ybS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHByb2plY3RGb3JtKTtcbiAgICB9LFxuICAgIG9wZW5UYXNrRWRpdG9yKHByb2plY3RJbmRleCwgdGFza0luZGV4KSB7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGFzaycpO1xuICAgICAgICBjb25zdCBjbG9uZSA9IHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpO1xuXG4gICAgICAgIC8vIEZpbGwgZm9ybSBpbnB1dCB2YWx1ZXMgd2l0aCB0YXNrIGRhdGFcbiAgICAgICAgY29uc3QgdGFza09iaiA9IHVzZXJQcm9qZWN0c1twcm9qZWN0SW5kZXhdLmdldFRhc2sodGFza0luZGV4KTtcbiAgICAgICAgY2xvbmUucXVlcnlTZWxlY3RvcignI3RpdGxlJykuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHRhc2tPYmoudGl0bGUpO1xuICAgICAgICBjbG9uZS5xdWVyeVNlbGVjdG9yKCcjZGVzYycpLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB0YXNrT2JqLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgY2xvbmUucXVlcnlTZWxlY3RvcignI2R1ZS1kYXRlJykuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHRhc2tPYmouZHVlRGF0ZSk7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZENoaWxkKGNsb25lKTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FuY2VsLWVkaXQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIERPTVN0dWZmLmNsb3NlVGFza0VkaXRvcik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb25maXJtLWVkaXQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCk9PntoYW5kbGVDb25maXJtRWRpdFRhc2soZXZlbnQsIHRhc2tPYmopfSlcblxuICAgIH0sXG4gICAgY2xvc2VUYXNrRWRpdG9yKCkge1xuICAgICAgICBjb25zdCBlZGl0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibHVyLW92ZXJsYXknKTtcbiAgICAgICAgZWRpdEZvcm0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlZGl0Rm9ybSk7XG4gICAgfSxcbiAgICBvcGVuUHJvamVjdE9wdGlvbnMocHJvamVjdEluZGV4KSB7XG5cbiAgICB9LFxuICAgIGNsb3NlUHJvamVjdE9wdGlvbnMoKSB7XG5cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVRvZ2dsZUNvbXBsZXRlZChldmVudCkge1xuICAgIC8vIGN1cnJlbnRUYXJnZXQgaXMgbmVlZGVkIGluc3RlYWQgdG8gdGFyZ2V0IG90aGVyd2lzZSBzdmcgcGF0aCBpcyB0aGUgdGFyZ2V0XG4gICAgY29uc3QgdGFza0luZGV4ID0gZXZlbnQuY3VycmVudFRhcmdldC5jbG9zZXN0KCcudGFzay1jb250YWluZXInKS5kYXRhc2V0LmluZGV4O1xuICAgIGNvbnN0IHByb2plY3RJbmRleCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuY2xvc2VzdCgnLnByb2plY3QnKS5kYXRhc2V0LmluZGV4XG4gICAgY29uc3QgdGFyZ2V0VGFza09iamVjdCA9IHVzZXJQcm9qZWN0c1twcm9qZWN0SW5kZXhdLmdldFRhc2sodGFza0luZGV4KTtcbiAgICB0YXJnZXRUYXNrT2JqZWN0LnRvZ2dsZUNvbXBsZXRlZCgpO1xuICAgIC8vIERPTSBwb3J0aW9uIG9mIGV2ZW50IGhhbmRsZXJcbiAgICBET01TdHVmZi50b2dnbGVDb21wbGV0ZWQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgLy8gU3RvcmFnZSBwb3J0aW9uIG9mIGV2ZW50IGhhbmRsZXJcbiAgICBzdG9yYWdlQ29udHJvbGxlci5zdG9yZVVzZXJQcm9qZWN0cyh1c2VyUHJvamVjdHMpO1xufVxuZnVuY3Rpb24gaGFuZGxlVG9nZ2xlUGlubmVkKGV2ZW50KSB7XG4gICAgY29uc3QgdGFza0luZGV4ID0gZXZlbnQuY3VycmVudFRhcmdldC5jbG9zZXN0KCcudGFzay1jb250YWluZXInKS5kYXRhc2V0LmluZGV4O1xuICAgIGNvbnN0IHByb2plY3RJbmRleCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuY2xvc2VzdCgnLnByb2plY3QnKS5kYXRhc2V0LmluZGV4XG4gICAgY29uc3QgdGFyZ2V0VGFza09iamVjdCA9IHVzZXJQcm9qZWN0c1twcm9qZWN0SW5kZXhdLmdldFRhc2sodGFza0luZGV4KTtcbiAgICB0YXJnZXRUYXNrT2JqZWN0LnRvZ2dsZVBpbm5lZCgpO1xuICAgIC8vIERPTSBwb3J0aW9uIG9mIGV2ZW50IGhhbmRsZXJcbiAgICBET01TdHVmZi50b2dnbGVQaW5uZWQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgLy8gU3RvcmFnZSBwb3J0aW9uIG9mIGV2ZW50IGhhbmRsZXJcbiAgICBzdG9yYWdlQ29udHJvbGxlci5zdG9yZVVzZXJQcm9qZWN0cyh1c2VyUHJvamVjdHMpO1xufVxuZnVuY3Rpb24gaGFuZGxlQ3JlYXRlVGFzayhldmVudCwgZm9ybSkge1xuICAgICAgICAvLyBUYWtlIHRoZSBmb3JtIGRhdGEgYW5kIGNyZWF0ZSBhIG5ldyB0YXNrXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xuICAgICAgICAvLyByZXF1aXJlIHRhc2tzIHRvIGhhdmUgYSB0aXRsZVxuICAgICAgICBpZiAoIWZvcm1EYXRhLmdldCgndGl0bGUnKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayhcbiAgICAgICAgICAgIGZvcm1EYXRhLmdldCgndGl0bGUnKSxcbiAgICAgICAgICAgIGZvcm1EYXRhLmdldCgnZGVzYycpLFxuICAgICAgICAgICAgZm9ybURhdGEuZ2V0KCdkdWVEYXRlJyksXG4gICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgIClcbiAgICAgICAgY29uc29sZS5sb2cobmV3VGFzayk7XG4gICAgICAgIC8vIEFkZCB0aGUgdGFzayB0byB0aGUgcHJvamVjdCBhbmQgdXBkYXRlXG4gICAgICAgIGNvbnN0IHByb2plY3RJbmRleCA9IGZvcm0ucGFyZW50Tm9kZS5kYXRhc2V0LmluZGV4O1xuICAgICAgICB1c2VyUHJvamVjdHNbcHJvamVjdEluZGV4XS5hZGRUYXNrKG5ld1Rhc2spO1xuICAgICAgICBET01TdHVmZi51cGRhdGUoKTtcbiAgICAgICAgc3RvcmFnZUNvbnRyb2xsZXIuc3RvcmVVc2VyUHJvamVjdHModXNlclByb2plY3RzKTtcbiAgICB9XG5mdW5jdGlvbiBoYW5kbGVEZWxldGVUYXNrKGV2ZW50KSB7XG4gICAgY29uc3QgdGFza0luZGV4ID0gZXZlbnQuY3VycmVudFRhcmdldC5jbG9zZXN0KCcudGFzay1jb250YWluZXInKS5kYXRhc2V0LmluZGV4O1xuICAgIGNvbnN0IHByb2plY3RJbmRleCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuY2xvc2VzdCgnLnByb2plY3QnKS5kYXRhc2V0LmluZGV4O1xuICAgIGNvbnN0IHRhcmdldFByb2plY3RPYmplY3QgPSB1c2VyUHJvamVjdHNbcHJvamVjdEluZGV4XTtcbiAgICB0YXJnZXRQcm9qZWN0T2JqZWN0LnJlbW92ZVRhc2sodGFza0luZGV4KTtcbiAgICBET01TdHVmZi51cGRhdGUoKTtcbiAgICBzdG9yYWdlQ29udHJvbGxlci5zdG9yZVVzZXJQcm9qZWN0cyh1c2VyUHJvamVjdHMpO1xufVxuZnVuY3Rpb24gaGFuZGxlRXhwYW5kVGFzayhldmVudCkge1xuICAgIGNvbnN0IGV4cGFuZEJ1dHRvbiA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuY2xvc2VzdCgnLnRhc2stY29udGFpbmVyJyk7XG4gICAgY29uc3QgY29sbGFwc2libGUgPSB0YXNrQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jb2xsYXBzaWJsZScpXG4gICAgZXhwYW5kQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2V4cGFuZGVkJyk7XG4gICAgY29sbGFwc2libGUuY2xhc3NMaXN0LnRvZ2dsZSgnZXhwYW5kZWQnKTtcbn1cbmZ1bmN0aW9uIGhhbmRsZUV4cGFuZEZvcm0oZXZlbnQpIHtcbiAgICBjb25zdCBleHBhbmRCdXR0b24gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBleHBhbmRCdXR0b24ucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlLWZvcm0nKTtcbiAgICBleHBhbmRCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnZXhwYW5kZWQnKTtcbiAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2V4cGFuZGVkJyk7XG59XG5mdW5jdGlvbiBoYW5kbGVPcGVuVGFza0VkaXRvcihldmVudCkge1xuICAgIGNvbnN0IHRhc2tJbmRleCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuY2xvc2VzdCgnLnRhc2stY29udGFpbmVyJykuZGF0YXNldC5pbmRleDtcbiAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBldmVudC5jdXJyZW50VGFyZ2V0LmNsb3Nlc3QoJy5wcm9qZWN0JykuZGF0YXNldC5pbmRleDtcbiAgICBET01TdHVmZi5vcGVuVGFza0VkaXRvcihwcm9qZWN0SW5kZXgsIHRhc2tJbmRleCk7XG59XG5mdW5jdGlvbiBoYW5kbGVDb25maXJtRWRpdFRhc2soZXZlbnQsIHRhc2spIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXktZm9ybScpO1xuICAgICAvLyBUYWtlIHRoZSBmb3JtIGRhdGFcbiAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XG4gICAgIC8vIHJlcXVpcmUgdGFza3MgdG8gaGF2ZSBhIHRpdGxlXG4gICAgIGlmICghZm9ybURhdGEuZ2V0KCd0aXRsZScpKSB7XG4gICAgICAgICByZXR1cm47XG4gICAgIH1cbiAgICAgLy8gVXBkYXRlIHRoZSB0YXNrIGRhdGFcbiAgICAgdGFzay50aXRsZSA9IGZvcm1EYXRhLmdldCgndGl0bGUnKTtcbiAgICAgdGFzay5kZXNjcmlwdGlvbiA9IGZvcm1EYXRhLmdldCgnZGVzYycpO1xuICAgICB0YXNrLmR1ZURhdGUgPSBmb3JtRGF0YS5nZXQoJ2R1ZS1kYXRlJyk7XG4gICAgIC8vIHVwZGF0ZSBkb20sIGNsb3NlIGZvcm0gYW5kIHNhdmUgdG8gc3RvcmFnZVxuICAgICBET01TdHVmZi51cGRhdGUoKTtcbiAgICAgRE9NU3R1ZmYuY2xvc2VUYXNrRWRpdG9yKCk7XG4gICAgIHN0b3JhZ2VDb250cm9sbGVyLnN0b3JlVXNlclByb2plY3RzKHVzZXJQcm9qZWN0cyk7XG59XG5cbi8vIE1heWJlIHNlcGFyYXRlIGludG8gZGlmZmVyZW50IGZ1bmN0aW9uc1xuZnVuY3Rpb24gY3JlYXRlUHJvamVjdCgpIHtcbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdCcpO1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHByb2plY3RGb3JtKTtcbiAgICBpZiAoZm9ybURhdGEuZ2V0KCduZXctcHJvamVjdC10aXRsZScpKSB7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChcbiAgICAgICAgICAgIGZvcm1EYXRhLmdldCgnbmV3LXByb2plY3QtdGl0bGUnKSxcbiAgICAgICAgICAgIGZvcm1EYXRhLmdldCgnbmV3LXByb2plY3QtY29sb3InKVxuICAgICAgICApXG4gICAgICAgIHVzZXJQcm9qZWN0cy51bnNoaWZ0KG5ld1Byb2plY3QpO1xuICAgICAgICBzdG9yYWdlQ29udHJvbGxlci5zdG9yZVVzZXJQcm9qZWN0cyh1c2VyUHJvamVjdHMpO1xuICAgICAgICBET01TdHVmZi5jbG9zZVByb2plY3RGb3JtKClcbiAgICAgICAgRE9NU3R1ZmYudXBkYXRlKCk7XG4gICAgfVxuXG59XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtcHJvamVjdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgRE9NU3R1ZmYub3BlblByb2plY3RGb3JtKTtcblxuXG5ET01TdHVmZi51cGRhdGUoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=