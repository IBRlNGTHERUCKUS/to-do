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
        this.color = 'red';
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
    generateTaskEl(title, description, dueDate, pinned, completed) {
        const template = document.querySelector('#task');
        const clone = template.content.cloneNode(true);
        const pinButton = clone.querySelector('.pin-button');
        const completeButton = clone.querySelector('.complete-button');
        const taskContainer = clone.querySelector('.task-container');
        const titleEl = clone.querySelector('.task-title');
        const descriptionEl = clone.querySelector('.task-description');
        const dueDateEl = clone.querySelector('.task-due-date');
        const expandButton = clone.querySelector('.expand-button');
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
        // Fill the task data
        titleEl.textContent = title;
        descriptionEl.textContent = 
        description;
        dueDateEl.textContent = `Due Date: ${dueDate}`;
        // Attach eventlisteners
        completeButton.addEventListener('click', handleToggleCompleted);
        pinButton.addEventListener('click', handleTogglePinned);
        expandButton.addEventListener('click', handleExpandTask);
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
                task.completed
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


DOMStuff.update();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENtQztBQUNuQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ1JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ053QztBQUNOO0FBQ21COztBQUVyRDtBQUNBO0FBQ0EsSUFBSSxpRUFBaUI7QUFDckIsMEJBQTBCLGlFQUFpQjtBQUMzQztBQUNBO0FBQ0E7QUFDQSxlQUFlLG9EQUFxQjtBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qiw2Q0FBTztBQUNuQztBQUNBO0FBQ0EsZ0JBQWdCLDBDQUFJO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLFFBQVE7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsOEJBQThCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpRUFBaUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpRUFBaUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwwQ0FBSTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlFQUFpQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxrQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLy4vc3JjL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc3RvcmFnZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBjb2xvcikge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmNvbG9yID0gJ3JlZCc7XG4gICAgICAgIHRoaXMudGFza0xpc3QgPSBbXTtcbiAgICB9XG4gICAgYWRkVGFzayh0YXNrKSB7XG4gICAgICAgIHRoaXMudGFza0xpc3QucHVzaCh0YXNrKTtcbiAgICB9XG4gICAgcmVtb3ZlVGFzayhpbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy50YXNrTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgICBnZXRUYXNrKGluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tMaXN0W2luZGV4XTtcbiAgICB9XG59XG5cblxuXG5jbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb249JycsIGR1ZURhdGU9JycsIHBpbm5lZD1mYWxzZSwgY29tcGxldGVkPWZhbHNlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnBpbm5lZCA9IHBpbm5lZDtcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XG4gICAgfVxuICAgIGlzQ29tcGxldGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZWQ7XG4gICAgfVxuICAgIHRvZ2dsZUNvbXBsZXRlZCgpIHtcbiAgICAgICAgY29uc3Qgb3Bwb3NpdGUgPSAhKHRoaXMuY29tcGxldGVkKTtcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSBvcHBvc2l0ZTtcbiAgICB9XG4gICAgdG9nZ2xlUGlubmVkKCkge1xuICAgICAgICBjb25zdCBvcHBvc2l0ZSA9ICEodGhpcy5waW5uZWQpO1xuICAgICAgICB0aGlzLnBpbm5lZCA9IG9wcG9zaXRlO1xuICAgIH1cbn1cblxuZXhwb3J0IHtQcm9qZWN0LCBUYXNrfSIsImltcG9ydCB1c2VyRGF0YSBmcm9tICcuL3Rlc3QuanNvbic7XG5jb25zdCBzdG9yYWdlQ29udHJvbGxlciA9IHtcbiAgICBzdG9yZVVzZXJQcm9qZWN0cyh1c2VyUHJvamVjdHMpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJQcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHVzZXJQcm9qZWN0cykpO1xuICAgIH0sXG4gICAgZ2V0VXNlclByb2plY3RzKCkge1xuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyUHJvamVjdHNcIik7XG4gICAgfVxufVxuXG5leHBvcnQge3N0b3JhZ2VDb250cm9sbGVyfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7UHJvamVjdCwgVGFza30gZnJvbSBcIi4vUHJvamVjdFwiO1xuaW1wb3J0IHRlc3RKU09OIGZyb20gXCIuL3Rlc3QuanNvblwiXG5pbXBvcnQge3N0b3JhZ2VDb250cm9sbGVyfSBmcm9tICcuL3N0b3JhZ2VDb250cm9sbGVyJ1xuXG4vLyBGZXRjaCB0aGUgdXNlciBkYXRhIGZyb20gbG9jYWwgc3RvcmFnZVxubGV0IHVzZXJEYXRhO1xuaWYgKHN0b3JhZ2VDb250cm9sbGVyLmdldFVzZXJQcm9qZWN0cygpKSB7XG4gICAgdXNlckRhdGEgPSBKU09OLnBhcnNlKHN0b3JhZ2VDb250cm9sbGVyLmdldFVzZXJQcm9qZWN0cygpKVxufVxuLy8gSWYgdW5hdmFpbGFibGUgdXNlIGJhc2ljIHRlbXBsYXRlXG5lbHNlIHtcbiAgICB1c2VyRGF0YSA9IHRlc3RKU09OLnVzZXJQcm9qZWN0cztcbn1cblxuLy8gUG9wdWxhdGUgdXNlclByb2plY3RzIGFycmF5IHdpdGggUHJvamVjdCBvYmplY3RzIHVzaW5nIHVzZXJEYXRhXG5jb25zdCB1c2VyUHJvamVjdHMgPSBbXTtcbmNvbnNvbGUubG9nKHVzZXJEYXRhKTtcbmZvciAobGV0IHByb2plY3Qgb2YgdXNlckRhdGEpIHtcbiAgICBjb25zdCB0ZW1wUHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3QubmFtZSwgcHJvamVjdC5jb2xvcik7XG4gICAgZm9yIChsZXQgdGFzayBvZiBwcm9qZWN0LnRhc2tMaXN0KSB7XG4gICAgICAgIHRlbXBQcm9qZWN0LmFkZFRhc2soXG4gICAgICAgICAgICBuZXcgVGFzayhcbiAgICAgICAgICAgICAgICB0YXNrLnRpdGxlLCBcbiAgICAgICAgICAgICAgICB0YXNrLmRlc2NyaXB0aW9uLCBcbiAgICAgICAgICAgICAgICB0YXNrLmR1ZURhdGUsIFxuICAgICAgICAgICAgICAgIHRhc2sucGlubmVkLCBcbiAgICAgICAgICAgICAgICB0YXNrLmNvbXBsZXRlZFxuICAgICAgICAgICAgICAgICkpO1xuICAgIH1cbiAgICB1c2VyUHJvamVjdHMucHVzaCh0ZW1wUHJvamVjdCk7XG59XG5cbmNvbnN0IERPTVN0dWZmID0ge1xuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgIGZvciAobGV0IHByb2plY3Qgb2YgdXNlclByb2plY3RzKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0RWwgPSB0aGlzLmdlbmVyYXRlUHJvamVjdEVsKHByb2plY3QpO1xuICAgICAgICAgICAgcHJvamVjdEVsLmRhdGFzZXQuaW5kZXggPSBpbmRleCsrO1xuICAgICAgICAgICAgdGFyZ2V0LmFwcGVuZChwcm9qZWN0RWwpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjbGVhcigpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgICAgICB3aGlsZSAodGFyZ2V0Lmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICAgICAgdGFyZ2V0LnJlbW92ZUNoaWxkKHRhcmdldC5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZ2VuZXJhdGVUYXNrRWwodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwaW5uZWQsIGNvbXBsZXRlZCkge1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrJyk7XG4gICAgICAgIGNvbnN0IGNsb25lID0gdGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIGNvbnN0IHBpbkJ1dHRvbiA9IGNsb25lLnF1ZXJ5U2VsZWN0b3IoJy5waW4tYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IGNvbXBsZXRlQnV0dG9uID0gY2xvbmUucXVlcnlTZWxlY3RvcignLmNvbXBsZXRlLWJ1dHRvbicpO1xuICAgICAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gY2xvbmUucXVlcnlTZWxlY3RvcignLnRhc2stY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IHRpdGxlRWwgPSBjbG9uZS5xdWVyeVNlbGVjdG9yKCcudGFzay10aXRsZScpO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkVsID0gY2xvbmUucXVlcnlTZWxlY3RvcignLnRhc2stZGVzY3JpcHRpb24nKTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZUVsID0gY2xvbmUucXVlcnlTZWxlY3RvcignLnRhc2stZHVlLWRhdGUnKTtcbiAgICAgICAgY29uc3QgZXhwYW5kQnV0dG9uID0gY2xvbmUucXVlcnlTZWxlY3RvcignLmV4cGFuZC1idXR0b24nKTtcbiAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gY2xvbmUucXVlcnlTZWxlY3RvcignLmRlbGV0ZS1idXR0b24nKVxuICAgICAgICAvLyBBZGQgY29tcGxldGVkIGNsYXNzIGlmIHRhc2sgaXMgY29tcGxldGVkXG4gICAgICAgIGlmIChjb21wbGV0ZWQpIHtcbiAgICAgICAgY29tcGxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkJyk7XG4gICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQWRkIHBpbm5lZCBjbGFzcyBpZiB0YXNrIGlzIHBpbm5lZFxuICAgICAgICBpZiAocGlubmVkKSB7XG4gICAgICAgICAgICBwaW5CdXR0b24uY2xhc3NMaXN0LmFkZCgncGlubmVkJyk7XG4gICAgICAgICAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Bpbm5lZCcpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZpbGwgdGhlIHRhc2sgZGF0YVxuICAgICAgICB0aXRsZUVsLnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgICAgIGRlc2NyaXB0aW9uRWwudGV4dENvbnRlbnQgPSBcbiAgICAgICAgZGVzY3JpcHRpb247XG4gICAgICAgIGR1ZURhdGVFbC50ZXh0Q29udGVudCA9IGBEdWUgRGF0ZTogJHtkdWVEYXRlfWA7XG4gICAgICAgIC8vIEF0dGFjaCBldmVudGxpc3RlbmVyc1xuICAgICAgICBjb21wbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVRvZ2dsZUNvbXBsZXRlZCk7XG4gICAgICAgIHBpbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVRvZ2dsZVBpbm5lZCk7XG4gICAgICAgIGV4cGFuZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUV4cGFuZFRhc2spO1xuICAgICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVEZWxldGVUYXNrKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0YXNrQ29udGFpbmVyO1xuICAgIH0sXG4gICAgZ2VuZXJhdGVQcm9qZWN0RWwocHJvamVjdCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdEVsLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKVxuICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgbmFtZS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICAgICAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza0xpc3QuY2xhc3NMaXN0LmFkZCgnbGlzdC1jb250YWluZXInKTtcbiAgICAgICAgLy8gTG9vcCB0aHJvdWdoIHRhc2tzIGFuZCBwb3B1bGF0ZSB0aGUgdGFzayBsaXN0IGVsZW1lbnRzXG4gICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgIGZvciAobGV0IHRhc2sgb2YgcHJvamVjdC50YXNrTGlzdCkge1xuICAgICAgICAgICAgY29uc3QgdGFza0VsID0gdGhpcy5nZW5lcmF0ZVRhc2tFbChcbiAgICAgICAgICAgICAgICB0YXNrLnRpdGxlLCBcbiAgICAgICAgICAgICAgICB0YXNrLmRlc2NyaXB0aW9uLCBcbiAgICAgICAgICAgICAgICB0YXNrLmR1ZURhdGUsIFxuICAgICAgICAgICAgICAgIHRhc2sucGlubmVkLCBcbiAgICAgICAgICAgICAgICB0YXNrLmNvbXBsZXRlZFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAvLyBBZGQgYW4gaW5kZXggZGF0YXNldCB0byBlYWNoIHRhc2sgZWxlbWVudFxuICAgICAgICAgICAgdGFza0VsLmRhdGFzZXQuaW5kZXggPSBpbmRleCsrO1xuICAgICAgICAgICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQodGFza0VsKTsgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIHByb2plY3RFbC5hcHBlbmQobmFtZSwgdGFza0xpc3QpO1xuXG4gICAgICAgIC8vIEFkZCBjcmVhdGlvbiBmb3JtXG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZS1mb3JtJyk7XG4gICAgICAgIGNvbnN0IGNsb25lID0gdGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIGNvbnN0IGNyZWF0ZUJ1dHRvbiA9IGNsb25lLnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUtYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IGV4cGFuZEJ1dHRvbiA9IGNsb25lLnF1ZXJ5U2VsZWN0b3IoJyNleHBhbmQtZm9ybScpXG4gICAgICAgIGNvbnN0IGZvcm0gPSBjbG9uZS5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gICAgICAgIGNyZWF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFxuICAgICAgICAgICAgKGV2ZW50KT0+e2hhbmRsZUNyZWF0ZVRhc2soZXZlbnQsIGZvcm0pfSk7XG4gICAgICAgIGV4cGFuZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUV4cGFuZEZvcm0pO1xuICAgICAgICBwcm9qZWN0RWwuYXBwZW5kQ2hpbGQoY2xvbmUpO1xuICAgICAgICByZXR1cm4gcHJvamVjdEVsO1xuICAgIH0sXG4gICAgdG9nZ2xlQ29tcGxldGVkKHRvZ2dsZUNvbXBsZXRlZEVsKSB7XG4gICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSB0b2dnbGVDb21wbGV0ZWRFbC5jbG9zZXN0KCcudGFzay1jb250YWluZXInKTtcbiAgICAgICAgdG9nZ2xlQ29tcGxldGVkRWwuY2xhc3NMaXN0LnRvZ2dsZSgnY29tcGxldGVkJyk7XG4gICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnY29tcGxldGVkJylcbiAgICB9LFxuICAgIHRvZ2dsZVBpbm5lZCh0b2dnbGVQaW5uZWRFbCkge1xuICAgICAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gdG9nZ2xlUGlubmVkRWwuY2xvc2VzdCgnLnRhc2stY29udGFpbmVyJyk7XG4gICAgICAgIHRvZ2dsZVBpbm5lZEVsLmNsYXNzTGlzdC50b2dnbGUoJ3Bpbm5lZCcpO1xuICAgICAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ3Bpbm5lZCcpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVUb2dnbGVDb21wbGV0ZWQoZXZlbnQpIHtcbiAgICAvLyBjdXJyZW50VGFyZ2V0IGlzIG5lZWRlZCBpbnN0ZWFkIHRvIHRhcmdldCBvdGhlcndpc2Ugc3ZnIHBhdGggaXMgdGhlIHRhcmdldFxuICAgIGNvbnN0IHRhc2tJbmRleCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuY2xvc2VzdCgnLnRhc2stY29udGFpbmVyJykuZGF0YXNldC5pbmRleDtcbiAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBldmVudC5jdXJyZW50VGFyZ2V0LmNsb3Nlc3QoJy5wcm9qZWN0JykuZGF0YXNldC5pbmRleFxuICAgIGNvbnN0IHRhcmdldFRhc2tPYmplY3QgPSB1c2VyUHJvamVjdHNbcHJvamVjdEluZGV4XS5nZXRUYXNrKHRhc2tJbmRleCk7XG4gICAgdGFyZ2V0VGFza09iamVjdC50b2dnbGVDb21wbGV0ZWQoKTtcbiAgICAvLyBET00gcG9ydGlvbiBvZiBldmVudCBoYW5kbGVyXG4gICAgRE9NU3R1ZmYudG9nZ2xlQ29tcGxldGVkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgIC8vIFN0b3JhZ2UgcG9ydGlvbiBvZiBldmVudCBoYW5kbGVyXG4gICAgc3RvcmFnZUNvbnRyb2xsZXIuc3RvcmVVc2VyUHJvamVjdHModXNlclByb2plY3RzKTtcbn1cbmZ1bmN0aW9uIGhhbmRsZVRvZ2dsZVBpbm5lZChldmVudCkge1xuICAgIGNvbnN0IHRhc2tJbmRleCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuY2xvc2VzdCgnLnRhc2stY29udGFpbmVyJykuZGF0YXNldC5pbmRleDtcbiAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBldmVudC5jdXJyZW50VGFyZ2V0LmNsb3Nlc3QoJy5wcm9qZWN0JykuZGF0YXNldC5pbmRleFxuICAgIGNvbnN0IHRhcmdldFRhc2tPYmplY3QgPSB1c2VyUHJvamVjdHNbcHJvamVjdEluZGV4XS5nZXRUYXNrKHRhc2tJbmRleCk7XG4gICAgdGFyZ2V0VGFza09iamVjdC50b2dnbGVQaW5uZWQoKTtcbiAgICAvLyBET00gcG9ydGlvbiBvZiBldmVudCBoYW5kbGVyXG4gICAgRE9NU3R1ZmYudG9nZ2xlUGlubmVkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgIC8vIFN0b3JhZ2UgcG9ydGlvbiBvZiBldmVudCBoYW5kbGVyXG4gICAgc3RvcmFnZUNvbnRyb2xsZXIuc3RvcmVVc2VyUHJvamVjdHModXNlclByb2plY3RzKTtcbn1cbmZ1bmN0aW9uIGhhbmRsZUNyZWF0ZVRhc2soZXZlbnQsIGZvcm0pIHtcbiAgICAgICAgLy8gVGFrZSB0aGUgZm9ybSBkYXRhIGFuZCBjcmVhdGUgYSBuZXcgdGFza1xuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcbiAgICAgICAgLy8gcmVxdWlyZSB0YXNrcyB0byBoYXZlIGEgdGl0bGVcbiAgICAgICAgaWYgKCFmb3JtRGF0YS5nZXQoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdUYXNrID0gbmV3IFRhc2soXG4gICAgICAgICAgICBmb3JtRGF0YS5nZXQoJ3RpdGxlJyksXG4gICAgICAgICAgICBmb3JtRGF0YS5nZXQoJ2Rlc2MnKSxcbiAgICAgICAgICAgIGZvcm1EYXRhLmdldCgnZHVlRGF0ZScpLFxuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICApXG4gICAgICAgIGNvbnNvbGUubG9nKG5ld1Rhc2spO1xuICAgICAgICAvLyBBZGQgdGhlIHRhc2sgdG8gdGhlIHByb2plY3QgYW5kIHVwZGF0ZVxuICAgICAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBmb3JtLnBhcmVudE5vZGUuZGF0YXNldC5pbmRleDtcbiAgICAgICAgdXNlclByb2plY3RzW3Byb2plY3RJbmRleF0uYWRkVGFzayhuZXdUYXNrKTtcbiAgICAgICAgRE9NU3R1ZmYudXBkYXRlKCk7XG4gICAgICAgIHN0b3JhZ2VDb250cm9sbGVyLnN0b3JlVXNlclByb2plY3RzKHVzZXJQcm9qZWN0cyk7XG4gICAgfVxuZnVuY3Rpb24gaGFuZGxlRGVsZXRlVGFzayhldmVudCkge1xuICAgIGNvbnN0IHRhc2tJbmRleCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuY2xvc2VzdCgnLnRhc2stY29udGFpbmVyJykuZGF0YXNldC5pbmRleDtcbiAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBldmVudC5jdXJyZW50VGFyZ2V0LmNsb3Nlc3QoJy5wcm9qZWN0JykuZGF0YXNldC5pbmRleDtcbiAgICBjb25zdCB0YXJnZXRQcm9qZWN0T2JqZWN0ID0gdXNlclByb2plY3RzW3Byb2plY3RJbmRleF07XG4gICAgdGFyZ2V0UHJvamVjdE9iamVjdC5yZW1vdmVUYXNrKHRhc2tJbmRleCk7XG4gICAgRE9NU3R1ZmYudXBkYXRlKCk7XG4gICAgc3RvcmFnZUNvbnRyb2xsZXIuc3RvcmVVc2VyUHJvamVjdHModXNlclByb2plY3RzKTtcbn1cbmZ1bmN0aW9uIGhhbmRsZUV4cGFuZFRhc2soZXZlbnQpIHtcbiAgICBjb25zdCBleHBhbmRCdXR0b24gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBldmVudC5jdXJyZW50VGFyZ2V0LmNsb3Nlc3QoJy50YXNrLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGNvbGxhcHNpYmxlID0gdGFza0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY29sbGFwc2libGUnKVxuICAgIGV4cGFuZEJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdleHBhbmRlZCcpO1xuICAgIGNvbGxhcHNpYmxlLmNsYXNzTGlzdC50b2dnbGUoJ2V4cGFuZGVkJyk7XG59XG5mdW5jdGlvbiBoYW5kbGVFeHBhbmRGb3JtKGV2ZW50KSB7XG4gICAgY29uc3QgZXhwYW5kQnV0dG9uID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZXhwYW5kQnV0dG9uLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLmNyZWF0ZS1mb3JtJyk7XG4gICAgZXhwYW5kQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2V4cGFuZGVkJyk7XG4gICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdleHBhbmRlZCcpO1xufVxuXG5cbkRPTVN0dWZmLnVwZGF0ZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==