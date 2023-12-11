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
        descriptionEl.textContent = description;
        dueDateEl.textContent = dueDate;
        // Attach eventlisteners
        completeButton.addEventListener('click', handleToggleCompleted);
        pinButton.addEventListener('click', handleTogglePinned);
        expandButton.addEventListener('click', handleExpandTask);
        
        return taskContainer;
    },
    generateProjectEl(project) {
        const projectEl = document.createElement('div');
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
        const form = clone.querySelector('form');
        createButton.addEventListener('click', 
            (event)=>{handleCreate(event, form)});
        projectEl.appendChild(clone);
        return projectEl;
    },
    toggleCompleted(toggleCompletedEl) {
        toggleCompletedEl.classList.toggle('completed');
        //toggleCompletedEl.parentNode.classList.toggle('completed')
    },
    togglePinned(togglePinnedEl) {
        togglePinnedEl.classList.toggle('pinned');
    }
}

function handleToggleCompleted(event) {
    // currentTarget is needed instead to target otherwise svg path is the target
    const taskIndex = event.currentTarget.parentNode.dataset.index;
    const projectIndex = event.currentTarget.parentNode.parentNode.parentNode.dataset.index
    const targetTaskObject = userProjects[projectIndex].getTask(taskIndex);
    targetTaskObject.toggleCompleted();
    // DOM portion of event handler
    DOMStuff.toggleCompleted(event.target);
    DOMStuff.update();
    // Storage portion of event handler
    _storageController__WEBPACK_IMPORTED_MODULE_2__.storageController.storeUserProjects(userProjects);
}
function handleTogglePinned(event) {
    const taskIndex = event.currentTarget.parentNode.dataset.index;
    const projectIndex = event.currentTarget.parentNode.parentNode.parentNode.dataset.index
    const targetTaskObject = userProjects[projectIndex].getTask(taskIndex);
    targetTaskObject.togglePinned();
    // DOM portion of event handler
    DOMStuff.togglePinned(event.target);
    DOMStuff.update();
    // Storage portion of event handler
    _storageController__WEBPACK_IMPORTED_MODULE_2__.storageController.storeUserProjects(userProjects);
}
function handleCreate(event, form) {
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
function handleExpandTask(event) {
    const expandButton = event.currentTarget;
    const taskContent = event.currentTarget.parentNode.querySelector('.task-content');
    const hideableEls = taskContent.querySelectorAll('.hideable');
    expandButton.classList.toggle('expanded');
    console.log(hideableEls)
    for (let el of hideableEls) {
        el.classList.toggle('hidden');
    }
}


DOMStuff.update();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENtQztBQUNuQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ1JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ053QztBQUNOO0FBQ21COztBQUVyRDtBQUNBO0FBQ0EsSUFBSSxpRUFBaUI7QUFDckIsMEJBQTBCLGlFQUFpQjtBQUMzQztBQUNBO0FBQ0E7QUFDQSxlQUFlLG9EQUFxQjtBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qiw2Q0FBTztBQUNuQztBQUNBO0FBQ0EsZ0JBQWdCLDBDQUFJO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDBCQUEwQjtBQUNoRDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksaUVBQWlCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpRUFBaUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwwQ0FBSTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0Esa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9Qcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3N0b3JhZ2VDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgY29sb3IpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5jb2xvciA9ICdyZWQnO1xuICAgICAgICB0aGlzLnRhc2tMaXN0ID0gW107XG4gICAgfVxuICAgIGFkZFRhc2sodGFzaykge1xuICAgICAgICB0aGlzLnRhc2tMaXN0LnB1c2godGFzayk7XG4gICAgfVxuICAgIHJlbW92ZVRhc2soaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gICAgZ2V0VGFzayhpbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy50YXNrTGlzdFtpbmRleF07XG4gICAgfVxufVxuXG5cblxuY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uPScnLCBkdWVEYXRlPScnLCBwaW5uZWQ9ZmFsc2UsIGNvbXBsZXRlZD1mYWxzZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5waW5uZWQgPSBwaW5uZWQ7XG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xuICAgIH1cbiAgICBpc0NvbXBsZXRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGVkO1xuICAgIH1cbiAgICB0b2dnbGVDb21wbGV0ZWQoKSB7XG4gICAgICAgIGNvbnN0IG9wcG9zaXRlID0gISh0aGlzLmNvbXBsZXRlZCk7XG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gb3Bwb3NpdGU7XG4gICAgfVxuICAgIHRvZ2dsZVBpbm5lZCgpIHtcbiAgICAgICAgY29uc3Qgb3Bwb3NpdGUgPSAhKHRoaXMucGlubmVkKTtcbiAgICAgICAgdGhpcy5waW5uZWQgPSBvcHBvc2l0ZTtcbiAgICB9XG59XG5cbmV4cG9ydCB7UHJvamVjdCwgVGFza30iLCJpbXBvcnQgdXNlckRhdGEgZnJvbSAnLi90ZXN0Lmpzb24nO1xuY29uc3Qgc3RvcmFnZUNvbnRyb2xsZXIgPSB7XG4gICAgc3RvcmVVc2VyUHJvamVjdHModXNlclByb2plY3RzKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyUHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeSh1c2VyUHJvamVjdHMpKTtcbiAgICB9LFxuICAgIGdldFVzZXJQcm9qZWN0cygpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclByb2plY3RzXCIpO1xuICAgIH1cbn1cblxuZXhwb3J0IHtzdG9yYWdlQ29udHJvbGxlcn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge1Byb2plY3QsIFRhc2t9IGZyb20gXCIuL1Byb2plY3RcIjtcbmltcG9ydCB0ZXN0SlNPTiBmcm9tIFwiLi90ZXN0Lmpzb25cIlxuaW1wb3J0IHtzdG9yYWdlQ29udHJvbGxlcn0gZnJvbSAnLi9zdG9yYWdlQ29udHJvbGxlcidcblxuLy8gRmV0Y2ggdGhlIHVzZXIgZGF0YSBmcm9tIGxvY2FsIHN0b3JhZ2VcbmxldCB1c2VyRGF0YTtcbmlmIChzdG9yYWdlQ29udHJvbGxlci5nZXRVc2VyUHJvamVjdHMoKSkge1xuICAgIHVzZXJEYXRhID0gSlNPTi5wYXJzZShzdG9yYWdlQ29udHJvbGxlci5nZXRVc2VyUHJvamVjdHMoKSlcbn1cbi8vIElmIHVuYXZhaWxhYmxlIHVzZSBiYXNpYyB0ZW1wbGF0ZVxuZWxzZSB7XG4gICAgdXNlckRhdGEgPSB0ZXN0SlNPTi51c2VyUHJvamVjdHM7XG59XG5cbi8vIFBvcHVsYXRlIHVzZXJQcm9qZWN0cyBhcnJheSB3aXRoIFByb2plY3Qgb2JqZWN0cyB1c2luZyB1c2VyRGF0YVxuY29uc3QgdXNlclByb2plY3RzID0gW107XG5jb25zb2xlLmxvZyh1c2VyRGF0YSk7XG5mb3IgKGxldCBwcm9qZWN0IG9mIHVzZXJEYXRhKSB7XG4gICAgY29uc3QgdGVtcFByb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0Lm5hbWUsIHByb2plY3QuY29sb3IpO1xuICAgIGZvciAobGV0IHRhc2sgb2YgcHJvamVjdC50YXNrTGlzdCkge1xuICAgICAgICB0ZW1wUHJvamVjdC5hZGRUYXNrKFxuICAgICAgICAgICAgbmV3IFRhc2soXG4gICAgICAgICAgICAgICAgdGFzay50aXRsZSwgXG4gICAgICAgICAgICAgICAgdGFzay5kZXNjcmlwdGlvbiwgXG4gICAgICAgICAgICAgICAgdGFzay5kdWVEYXRlLCBcbiAgICAgICAgICAgICAgICB0YXNrLnBpbm5lZCwgXG4gICAgICAgICAgICAgICAgdGFzay5jb21wbGV0ZWRcbiAgICAgICAgICAgICAgICApKTtcbiAgICB9XG4gICAgdXNlclByb2plY3RzLnB1c2godGVtcFByb2plY3QpO1xufVxuXG5jb25zdCBET01TdHVmZiA9IHtcbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgICAgICBsZXQgaW5kZXggPSAwO1xuICAgICAgICBmb3IgKGxldCBwcm9qZWN0IG9mIHVzZXJQcm9qZWN0cykge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdEVsID0gdGhpcy5nZW5lcmF0ZVByb2plY3RFbChwcm9qZWN0KTtcbiAgICAgICAgICAgIHByb2plY3RFbC5kYXRhc2V0LmluZGV4ID0gaW5kZXgrKztcbiAgICAgICAgICAgIHRhcmdldC5hcHBlbmQocHJvamVjdEVsKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICAgICAgd2hpbGUgKHRhcmdldC5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgICAgIHRhcmdldC5yZW1vdmVDaGlsZCh0YXJnZXQuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGdlbmVyYXRlVGFza0VsKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcGlubmVkLCBjb21wbGV0ZWQpIHtcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzaycpO1xuICAgICAgICBjb25zdCBjbG9uZSA9IHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBjb25zdCBwaW5CdXR0b24gPSBjbG9uZS5xdWVyeVNlbGVjdG9yKCcucGluLWJ1dHRvbicpO1xuICAgICAgICBjb25zdCBjb21wbGV0ZUJ1dHRvbiA9IGNsb25lLnF1ZXJ5U2VsZWN0b3IoJy5jb21wbGV0ZS1idXR0b24nKTtcbiAgICAgICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGNsb25lLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCB0aXRsZUVsID0gY2xvbmUucXVlcnlTZWxlY3RvcignLnRhc2stdGl0bGUnKTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25FbCA9IGNsb25lLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgIGNvbnN0IGR1ZURhdGVFbCA9IGNsb25lLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWR1ZS1kYXRlJyk7XG4gICAgICAgIGNvbnN0IGV4cGFuZEJ1dHRvbiA9IGNsb25lLnF1ZXJ5U2VsZWN0b3IoJy5leHBhbmQtYnV0dG9uJyk7XG4gICAgICAgIC8vIEFkZCBjb21wbGV0ZWQgY2xhc3MgaWYgdGFzayBpcyBjb21wbGV0ZWRcbiAgICAgICAgaWYgKGNvbXBsZXRlZCkge1xuICAgICAgICBjb21wbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQnKTtcbiAgICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQnKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBZGQgcGlubmVkIGNsYXNzIGlmIHRhc2sgaXMgcGlubmVkXG4gICAgICAgIGlmIChwaW5uZWQpIHtcbiAgICAgICAgICAgIHBpbkJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwaW5uZWQnKTtcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncGlubmVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmlsbCB0aGUgdGFzayBkYXRhXG4gICAgICAgIHRpdGxlRWwudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICAgICAgZGVzY3JpcHRpb25FbC50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuICAgICAgICBkdWVEYXRlRWwudGV4dENvbnRlbnQgPSBkdWVEYXRlO1xuICAgICAgICAvLyBBdHRhY2ggZXZlbnRsaXN0ZW5lcnNcbiAgICAgICAgY29tcGxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVUb2dnbGVDb21wbGV0ZWQpO1xuICAgICAgICBwaW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVUb2dnbGVQaW5uZWQpO1xuICAgICAgICBleHBhbmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVFeHBhbmRUYXNrKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0YXNrQ29udGFpbmVyO1xuICAgIH0sXG4gICAgZ2VuZXJhdGVQcm9qZWN0RWwocHJvamVjdCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tMaXN0LmNsYXNzTGlzdC5hZGQoJ2xpc3QtY29udGFpbmVyJyk7XG4gICAgICAgIC8vIExvb3AgdGhyb3VnaCB0YXNrcyBhbmQgcG9wdWxhdGUgdGhlIHRhc2sgbGlzdCBlbGVtZW50c1xuICAgICAgICBsZXQgaW5kZXggPSAwO1xuICAgICAgICBmb3IgKGxldCB0YXNrIG9mIHByb2plY3QudGFza0xpc3QpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tFbCA9IHRoaXMuZ2VuZXJhdGVUYXNrRWwoXG4gICAgICAgICAgICAgICAgdGFzay50aXRsZSwgXG4gICAgICAgICAgICAgICAgdGFzay5kZXNjcmlwdGlvbiwgXG4gICAgICAgICAgICAgICAgdGFzay5kdWVEYXRlLCBcbiAgICAgICAgICAgICAgICB0YXNrLnBpbm5lZCwgXG4gICAgICAgICAgICAgICAgdGFzay5jb21wbGV0ZWRcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgLy8gQWRkIGFuIGluZGV4IGRhdGFzZXQgdG8gZWFjaCB0YXNrIGVsZW1lbnRcbiAgICAgICAgICAgIHRhc2tFbC5kYXRhc2V0LmluZGV4ID0gaW5kZXgrKztcbiAgICAgICAgICAgIHRhc2tMaXN0LmFwcGVuZENoaWxkKHRhc2tFbCk7ICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBwcm9qZWN0RWwuYXBwZW5kKG5hbWUsIHRhc2tMaXN0KTtcblxuICAgICAgICAvLyBBZGQgY3JlYXRpb24gZm9ybVxuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUtZm9ybScpO1xuICAgICAgICBjb25zdCBjbG9uZSA9IHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBjb25zdCBjcmVhdGVCdXR0b24gPSBjbG9uZS5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlLWJ1dHRvbicpO1xuICAgICAgICBjb25zdCBmb3JtID0gY2xvbmUucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICAgICAgICBjcmVhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBcbiAgICAgICAgICAgIChldmVudCk9PntoYW5kbGVDcmVhdGUoZXZlbnQsIGZvcm0pfSk7XG4gICAgICAgIHByb2plY3RFbC5hcHBlbmRDaGlsZChjbG9uZSk7XG4gICAgICAgIHJldHVybiBwcm9qZWN0RWw7XG4gICAgfSxcbiAgICB0b2dnbGVDb21wbGV0ZWQodG9nZ2xlQ29tcGxldGVkRWwpIHtcbiAgICAgICAgdG9nZ2xlQ29tcGxldGVkRWwuY2xhc3NMaXN0LnRvZ2dsZSgnY29tcGxldGVkJyk7XG4gICAgICAgIC8vdG9nZ2xlQ29tcGxldGVkRWwucGFyZW50Tm9kZS5jbGFzc0xpc3QudG9nZ2xlKCdjb21wbGV0ZWQnKVxuICAgIH0sXG4gICAgdG9nZ2xlUGlubmVkKHRvZ2dsZVBpbm5lZEVsKSB7XG4gICAgICAgIHRvZ2dsZVBpbm5lZEVsLmNsYXNzTGlzdC50b2dnbGUoJ3Bpbm5lZCcpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlVG9nZ2xlQ29tcGxldGVkKGV2ZW50KSB7XG4gICAgLy8gY3VycmVudFRhcmdldCBpcyBuZWVkZWQgaW5zdGVhZCB0byB0YXJnZXQgb3RoZXJ3aXNlIHN2ZyBwYXRoIGlzIHRoZSB0YXJnZXRcbiAgICBjb25zdCB0YXNrSW5kZXggPSBldmVudC5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUuZGF0YXNldC5pbmRleDtcbiAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBldmVudC5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmRhdGFzZXQuaW5kZXhcbiAgICBjb25zdCB0YXJnZXRUYXNrT2JqZWN0ID0gdXNlclByb2plY3RzW3Byb2plY3RJbmRleF0uZ2V0VGFzayh0YXNrSW5kZXgpO1xuICAgIHRhcmdldFRhc2tPYmplY3QudG9nZ2xlQ29tcGxldGVkKCk7XG4gICAgLy8gRE9NIHBvcnRpb24gb2YgZXZlbnQgaGFuZGxlclxuICAgIERPTVN0dWZmLnRvZ2dsZUNvbXBsZXRlZChldmVudC50YXJnZXQpO1xuICAgIERPTVN0dWZmLnVwZGF0ZSgpO1xuICAgIC8vIFN0b3JhZ2UgcG9ydGlvbiBvZiBldmVudCBoYW5kbGVyXG4gICAgc3RvcmFnZUNvbnRyb2xsZXIuc3RvcmVVc2VyUHJvamVjdHModXNlclByb2plY3RzKTtcbn1cbmZ1bmN0aW9uIGhhbmRsZVRvZ2dsZVBpbm5lZChldmVudCkge1xuICAgIGNvbnN0IHRhc2tJbmRleCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5kYXRhc2V0LmluZGV4O1xuICAgIGNvbnN0IHByb2plY3RJbmRleCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuZGF0YXNldC5pbmRleFxuICAgIGNvbnN0IHRhcmdldFRhc2tPYmplY3QgPSB1c2VyUHJvamVjdHNbcHJvamVjdEluZGV4XS5nZXRUYXNrKHRhc2tJbmRleCk7XG4gICAgdGFyZ2V0VGFza09iamVjdC50b2dnbGVQaW5uZWQoKTtcbiAgICAvLyBET00gcG9ydGlvbiBvZiBldmVudCBoYW5kbGVyXG4gICAgRE9NU3R1ZmYudG9nZ2xlUGlubmVkKGV2ZW50LnRhcmdldCk7XG4gICAgRE9NU3R1ZmYudXBkYXRlKCk7XG4gICAgLy8gU3RvcmFnZSBwb3J0aW9uIG9mIGV2ZW50IGhhbmRsZXJcbiAgICBzdG9yYWdlQ29udHJvbGxlci5zdG9yZVVzZXJQcm9qZWN0cyh1c2VyUHJvamVjdHMpO1xufVxuZnVuY3Rpb24gaGFuZGxlQ3JlYXRlKGV2ZW50LCBmb3JtKSB7XG4gICAgICAgIC8vIFRha2UgdGhlIGZvcm0gZGF0YSBhbmQgY3JlYXRlIGEgbmV3IHRhc2tcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XG4gICAgICAgIC8vIHJlcXVpcmUgdGFza3MgdG8gaGF2ZSBhIHRpdGxlXG4gICAgICAgIGlmICghZm9ybURhdGEuZ2V0KCd0aXRsZScpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKFxuICAgICAgICAgICAgZm9ybURhdGEuZ2V0KCd0aXRsZScpLFxuICAgICAgICAgICAgZm9ybURhdGEuZ2V0KCdkZXNjJyksXG4gICAgICAgICAgICBmb3JtRGF0YS5nZXQoJ2R1ZURhdGUnKSxcbiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgKVxuICAgICAgICBjb25zb2xlLmxvZyhuZXdUYXNrKTtcbiAgICAgICAgLy8gQWRkIHRoZSB0YXNrIHRvIHRoZSBwcm9qZWN0IGFuZCB1cGRhdGVcbiAgICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gZm9ybS5wYXJlbnROb2RlLmRhdGFzZXQuaW5kZXg7XG4gICAgICAgIHVzZXJQcm9qZWN0c1twcm9qZWN0SW5kZXhdLmFkZFRhc2sobmV3VGFzayk7XG4gICAgICAgIERPTVN0dWZmLnVwZGF0ZSgpO1xuICAgICAgICBzdG9yYWdlQ29udHJvbGxlci5zdG9yZVVzZXJQcm9qZWN0cyh1c2VyUHJvamVjdHMpO1xuICAgIH1cbmZ1bmN0aW9uIGhhbmRsZUV4cGFuZFRhc2soZXZlbnQpIHtcbiAgICBjb25zdCBleHBhbmRCdXR0b24gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgIGNvbnN0IHRhc2tDb250ZW50ID0gZXZlbnQuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWNvbnRlbnQnKTtcbiAgICBjb25zdCBoaWRlYWJsZUVscyA9IHRhc2tDb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oaWRlYWJsZScpO1xuICAgIGV4cGFuZEJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdleHBhbmRlZCcpO1xuICAgIGNvbnNvbGUubG9nKGhpZGVhYmxlRWxzKVxuICAgIGZvciAobGV0IGVsIG9mIGhpZGVhYmxlRWxzKSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgIH1cbn1cblxuXG5ET01TdHVmZi51cGRhdGUoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=