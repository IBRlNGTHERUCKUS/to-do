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
                task.desc, 
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
        // Add the task to the project and update
        const projectIndex = form.parentNode.dataset.index;
        userProjects[projectIndex].addTask(newTask);
        DOMStuff.update();
        _storageController__WEBPACK_IMPORTED_MODULE_2__.storageController.storeUserProjects(userProjects);
    }
function handleExpandTask(event) {
    const taskContent = event.currentTarget.parentNode.querySelector('.task-content');
    const hideableEls = taskContent.querySelectorAll('.hideable');
    console.log(hideableEls)
    for (let el of hideableEls) {
        el.classList.toggle('hidden');
    }
}


DOMStuff.update();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENtQztBQUNuQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ1JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ053QztBQUNOO0FBQ21COztBQUVyRDtBQUNBO0FBQ0EsSUFBSSxpRUFBaUI7QUFDckIsMEJBQTBCLGlFQUFpQjtBQUMzQztBQUNBO0FBQ0E7QUFDQSxlQUFlLG9EQUFxQjtBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qiw2Q0FBTztBQUNuQztBQUNBO0FBQ0EsZ0JBQWdCLDBDQUFJO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDBCQUEwQjtBQUNoRDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksaUVBQWlCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpRUFBaUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwwQ0FBSTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0Esa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9Qcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3N0b3JhZ2VDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgY29sb3IpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5jb2xvciA9ICdyZWQnO1xuICAgICAgICB0aGlzLnRhc2tMaXN0ID0gW107XG4gICAgfVxuICAgIGFkZFRhc2sodGFzaykge1xuICAgICAgICB0aGlzLnRhc2tMaXN0LnB1c2godGFzayk7XG4gICAgfVxuICAgIHJlbW92ZVRhc2soaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gICAgZ2V0VGFzayhpbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy50YXNrTGlzdFtpbmRleF07XG4gICAgfVxufVxuXG5cblxuY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uPScnLCBkdWVEYXRlPScnLCBwaW5uZWQ9ZmFsc2UsIGNvbXBsZXRlZD1mYWxzZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5waW5uZWQgPSBwaW5uZWQ7XG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xuICAgIH1cbiAgICBpc0NvbXBsZXRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGVkO1xuICAgIH1cbiAgICB0b2dnbGVDb21wbGV0ZWQoKSB7XG4gICAgICAgIGNvbnN0IG9wcG9zaXRlID0gISh0aGlzLmNvbXBsZXRlZCk7XG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gb3Bwb3NpdGU7XG4gICAgfVxuICAgIHRvZ2dsZVBpbm5lZCgpIHtcbiAgICAgICAgY29uc3Qgb3Bwb3NpdGUgPSAhKHRoaXMucGlubmVkKTtcbiAgICAgICAgdGhpcy5waW5uZWQgPSBvcHBvc2l0ZTtcbiAgICB9XG59XG5cbmV4cG9ydCB7UHJvamVjdCwgVGFza30iLCJpbXBvcnQgdXNlckRhdGEgZnJvbSAnLi90ZXN0Lmpzb24nO1xuY29uc3Qgc3RvcmFnZUNvbnRyb2xsZXIgPSB7XG4gICAgc3RvcmVVc2VyUHJvamVjdHModXNlclByb2plY3RzKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyUHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeSh1c2VyUHJvamVjdHMpKTtcbiAgICB9LFxuICAgIGdldFVzZXJQcm9qZWN0cygpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclByb2plY3RzXCIpO1xuICAgIH1cbn1cblxuZXhwb3J0IHtzdG9yYWdlQ29udHJvbGxlcn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge1Byb2plY3QsIFRhc2t9IGZyb20gXCIuL1Byb2plY3RcIjtcbmltcG9ydCB0ZXN0SlNPTiBmcm9tIFwiLi90ZXN0Lmpzb25cIlxuaW1wb3J0IHtzdG9yYWdlQ29udHJvbGxlcn0gZnJvbSAnLi9zdG9yYWdlQ29udHJvbGxlcidcblxuLy8gRmV0Y2ggdGhlIHVzZXIgZGF0YSBmcm9tIGxvY2FsIHN0b3JhZ2VcbmxldCB1c2VyRGF0YTtcbmlmIChzdG9yYWdlQ29udHJvbGxlci5nZXRVc2VyUHJvamVjdHMoKSkge1xuICAgIHVzZXJEYXRhID0gSlNPTi5wYXJzZShzdG9yYWdlQ29udHJvbGxlci5nZXRVc2VyUHJvamVjdHMoKSlcbn1cbi8vIElmIHVuYXZhaWxhYmxlIHVzZSBiYXNpYyB0ZW1wbGF0ZVxuZWxzZSB7XG4gICAgdXNlckRhdGEgPSB0ZXN0SlNPTi51c2VyUHJvamVjdHM7XG59XG5cbi8vIFBvcHVsYXRlIHVzZXJQcm9qZWN0cyBhcnJheSB3aXRoIFByb2plY3Qgb2JqZWN0cyB1c2luZyB1c2VyRGF0YVxuY29uc3QgdXNlclByb2plY3RzID0gW107XG5jb25zb2xlLmxvZyh1c2VyRGF0YSk7XG5mb3IgKGxldCBwcm9qZWN0IG9mIHVzZXJEYXRhKSB7XG4gICAgY29uc3QgdGVtcFByb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0Lm5hbWUsIHByb2plY3QuY29sb3IpO1xuICAgIGZvciAobGV0IHRhc2sgb2YgcHJvamVjdC50YXNrTGlzdCkge1xuICAgICAgICB0ZW1wUHJvamVjdC5hZGRUYXNrKFxuICAgICAgICAgICAgbmV3IFRhc2soXG4gICAgICAgICAgICAgICAgdGFzay50aXRsZSwgXG4gICAgICAgICAgICAgICAgdGFzay5kZXNjLCBcbiAgICAgICAgICAgICAgICB0YXNrLmR1ZURhdGUsIFxuICAgICAgICAgICAgICAgIHRhc2sucGlubmVkLCBcbiAgICAgICAgICAgICAgICB0YXNrLmNvbXBsZXRlZFxuICAgICAgICAgICAgICAgICkpO1xuICAgIH1cbiAgICB1c2VyUHJvamVjdHMucHVzaCh0ZW1wUHJvamVjdCk7XG59XG5cbmNvbnN0IERPTVN0dWZmID0ge1xuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgIGZvciAobGV0IHByb2plY3Qgb2YgdXNlclByb2plY3RzKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0RWwgPSB0aGlzLmdlbmVyYXRlUHJvamVjdEVsKHByb2plY3QpO1xuICAgICAgICAgICAgcHJvamVjdEVsLmRhdGFzZXQuaW5kZXggPSBpbmRleCsrO1xuICAgICAgICAgICAgdGFyZ2V0LmFwcGVuZChwcm9qZWN0RWwpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjbGVhcigpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgICAgICB3aGlsZSAodGFyZ2V0Lmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICAgICAgdGFyZ2V0LnJlbW92ZUNoaWxkKHRhcmdldC5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZ2VuZXJhdGVUYXNrRWwodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwaW5uZWQsIGNvbXBsZXRlZCkge1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrJyk7XG4gICAgICAgIGNvbnN0IGNsb25lID0gdGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIGNvbnN0IHBpbkJ1dHRvbiA9IGNsb25lLnF1ZXJ5U2VsZWN0b3IoJy5waW4tYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IGNvbXBsZXRlQnV0dG9uID0gY2xvbmUucXVlcnlTZWxlY3RvcignLmNvbXBsZXRlLWJ1dHRvbicpO1xuICAgICAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gY2xvbmUucXVlcnlTZWxlY3RvcignLnRhc2stY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IHRpdGxlRWwgPSBjbG9uZS5xdWVyeVNlbGVjdG9yKCcudGFzay10aXRsZScpO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkVsID0gY2xvbmUucXVlcnlTZWxlY3RvcignLnRhc2stZGVzY3JpcHRpb24nKTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZUVsID0gY2xvbmUucXVlcnlTZWxlY3RvcignLnRhc2stZHVlLWRhdGUnKTtcbiAgICAgICAgY29uc3QgZXhwYW5kQnV0dG9uID0gY2xvbmUucXVlcnlTZWxlY3RvcignLmV4cGFuZC1idXR0b24nKTtcbiAgICAgICAgLy8gQWRkIGNvbXBsZXRlZCBjbGFzcyBpZiB0YXNrIGlzIGNvbXBsZXRlZFxuICAgICAgICBpZiAoY29tcGxldGVkKSB7XG4gICAgICAgIGNvbXBsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZCcpO1xuICAgICAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZCcpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFkZCBwaW5uZWQgY2xhc3MgaWYgdGFzayBpcyBwaW5uZWRcbiAgICAgICAgaWYgKHBpbm5lZCkge1xuICAgICAgICAgICAgcGluQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Bpbm5lZCcpO1xuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwaW5uZWQnKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaWxsIHRoZSB0YXNrIGRhdGFcbiAgICAgICAgdGl0bGVFbC50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgICAgICBkZXNjcmlwdGlvbkVsLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG4gICAgICAgIGR1ZURhdGVFbC50ZXh0Q29udGVudCA9IGR1ZURhdGU7XG4gICAgICAgIC8vIEF0dGFjaCBldmVudGxpc3RlbmVyc1xuICAgICAgICBjb21wbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVRvZ2dsZUNvbXBsZXRlZCk7XG4gICAgICAgIHBpbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVRvZ2dsZVBpbm5lZCk7XG4gICAgICAgIGV4cGFuZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUV4cGFuZFRhc2spO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRhc2tDb250YWluZXI7XG4gICAgfSxcbiAgICBnZW5lcmF0ZVByb2plY3RFbChwcm9qZWN0KSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgbmFtZS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICAgICAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza0xpc3QuY2xhc3NMaXN0LmFkZCgnbGlzdC1jb250YWluZXInKTtcbiAgICAgICAgLy8gTG9vcCB0aHJvdWdoIHRhc2tzIGFuZCBwb3B1bGF0ZSB0aGUgdGFzayBsaXN0IGVsZW1lbnRzXG4gICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgIGZvciAobGV0IHRhc2sgb2YgcHJvamVjdC50YXNrTGlzdCkge1xuICAgICAgICAgICAgY29uc3QgdGFza0VsID0gdGhpcy5nZW5lcmF0ZVRhc2tFbChcbiAgICAgICAgICAgICAgICB0YXNrLnRpdGxlLCBcbiAgICAgICAgICAgICAgICB0YXNrLmRlc2NyaXB0aW9uLCBcbiAgICAgICAgICAgICAgICB0YXNrLmR1ZURhdGUsIFxuICAgICAgICAgICAgICAgIHRhc2sucGlubmVkLCBcbiAgICAgICAgICAgICAgICB0YXNrLmNvbXBsZXRlZFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAvLyBBZGQgYW4gaW5kZXggZGF0YXNldCB0byBlYWNoIHRhc2sgZWxlbWVudFxuICAgICAgICAgICAgdGFza0VsLmRhdGFzZXQuaW5kZXggPSBpbmRleCsrO1xuICAgICAgICAgICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQodGFza0VsKTsgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIHByb2plY3RFbC5hcHBlbmQobmFtZSwgdGFza0xpc3QpO1xuXG4gICAgICAgIC8vIEFkZCBjcmVhdGlvbiBmb3JtXG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZS1mb3JtJyk7XG4gICAgICAgIGNvbnN0IGNsb25lID0gdGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIGNvbnN0IGNyZWF0ZUJ1dHRvbiA9IGNsb25lLnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUtYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBjbG9uZS5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gICAgICAgIGNyZWF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFxuICAgICAgICAgICAgKGV2ZW50KT0+e2hhbmRsZUNyZWF0ZShldmVudCwgZm9ybSl9KTtcbiAgICAgICAgcHJvamVjdEVsLmFwcGVuZENoaWxkKGNsb25lKTtcbiAgICAgICAgcmV0dXJuIHByb2plY3RFbDtcbiAgICB9LFxuICAgIHRvZ2dsZUNvbXBsZXRlZCh0b2dnbGVDb21wbGV0ZWRFbCkge1xuICAgICAgICB0b2dnbGVDb21wbGV0ZWRFbC5jbGFzc0xpc3QudG9nZ2xlKCdjb21wbGV0ZWQnKTtcbiAgICAgICAgLy90b2dnbGVDb21wbGV0ZWRFbC5wYXJlbnROb2RlLmNsYXNzTGlzdC50b2dnbGUoJ2NvbXBsZXRlZCcpXG4gICAgfSxcbiAgICB0b2dnbGVQaW5uZWQodG9nZ2xlUGlubmVkRWwpIHtcbiAgICAgICAgdG9nZ2xlUGlubmVkRWwuY2xhc3NMaXN0LnRvZ2dsZSgncGlubmVkJyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVUb2dnbGVDb21wbGV0ZWQoZXZlbnQpIHtcbiAgICAvLyBjdXJyZW50VGFyZ2V0IGlzIG5lZWRlZCBpbnN0ZWFkIHRvIHRhcmdldCBvdGhlcndpc2Ugc3ZnIHBhdGggaXMgdGhlIHRhcmdldFxuICAgIGNvbnN0IHRhc2tJbmRleCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5kYXRhc2V0LmluZGV4O1xuICAgIGNvbnN0IHByb2plY3RJbmRleCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuZGF0YXNldC5pbmRleFxuICAgIGNvbnN0IHRhcmdldFRhc2tPYmplY3QgPSB1c2VyUHJvamVjdHNbcHJvamVjdEluZGV4XS5nZXRUYXNrKHRhc2tJbmRleCk7XG4gICAgdGFyZ2V0VGFza09iamVjdC50b2dnbGVDb21wbGV0ZWQoKTtcbiAgICAvLyBET00gcG9ydGlvbiBvZiBldmVudCBoYW5kbGVyXG4gICAgRE9NU3R1ZmYudG9nZ2xlQ29tcGxldGVkKGV2ZW50LnRhcmdldCk7XG4gICAgRE9NU3R1ZmYudXBkYXRlKCk7XG4gICAgLy8gU3RvcmFnZSBwb3J0aW9uIG9mIGV2ZW50IGhhbmRsZXJcbiAgICBzdG9yYWdlQ29udHJvbGxlci5zdG9yZVVzZXJQcm9qZWN0cyh1c2VyUHJvamVjdHMpO1xufVxuZnVuY3Rpb24gaGFuZGxlVG9nZ2xlUGlubmVkKGV2ZW50KSB7XG4gICAgY29uc3QgdGFza0luZGV4ID0gZXZlbnQuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLmRhdGFzZXQuaW5kZXg7XG4gICAgY29uc3QgcHJvamVjdEluZGV4ID0gZXZlbnQuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5kYXRhc2V0LmluZGV4XG4gICAgY29uc3QgdGFyZ2V0VGFza09iamVjdCA9IHVzZXJQcm9qZWN0c1twcm9qZWN0SW5kZXhdLmdldFRhc2sodGFza0luZGV4KTtcbiAgICB0YXJnZXRUYXNrT2JqZWN0LnRvZ2dsZVBpbm5lZCgpO1xuICAgIC8vIERPTSBwb3J0aW9uIG9mIGV2ZW50IGhhbmRsZXJcbiAgICBET01TdHVmZi50b2dnbGVQaW5uZWQoZXZlbnQudGFyZ2V0KTtcbiAgICBET01TdHVmZi51cGRhdGUoKTtcbiAgICAvLyBTdG9yYWdlIHBvcnRpb24gb2YgZXZlbnQgaGFuZGxlclxuICAgIHN0b3JhZ2VDb250cm9sbGVyLnN0b3JlVXNlclByb2plY3RzKHVzZXJQcm9qZWN0cyk7XG59XG5mdW5jdGlvbiBoYW5kbGVDcmVhdGUoZXZlbnQsIGZvcm0pIHtcbiAgICAgICAgLy8gVGFrZSB0aGUgZm9ybSBkYXRhIGFuZCBjcmVhdGUgYSBuZXcgdGFza1xuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcbiAgICAgICAgLy8gcmVxdWlyZSB0YXNrcyB0byBoYXZlIGEgdGl0bGVcbiAgICAgICAgaWYgKCFmb3JtRGF0YS5nZXQoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdUYXNrID0gbmV3IFRhc2soXG4gICAgICAgICAgICBmb3JtRGF0YS5nZXQoJ3RpdGxlJyksXG4gICAgICAgICAgICBmb3JtRGF0YS5nZXQoJ2Rlc2MnKSxcbiAgICAgICAgICAgIGZvcm1EYXRhLmdldCgnZHVlRGF0ZScpLFxuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICApXG4gICAgICAgIC8vIEFkZCB0aGUgdGFzayB0byB0aGUgcHJvamVjdCBhbmQgdXBkYXRlXG4gICAgICAgIGNvbnN0IHByb2plY3RJbmRleCA9IGZvcm0ucGFyZW50Tm9kZS5kYXRhc2V0LmluZGV4O1xuICAgICAgICB1c2VyUHJvamVjdHNbcHJvamVjdEluZGV4XS5hZGRUYXNrKG5ld1Rhc2spO1xuICAgICAgICBET01TdHVmZi51cGRhdGUoKTtcbiAgICAgICAgc3RvcmFnZUNvbnRyb2xsZXIuc3RvcmVVc2VyUHJvamVjdHModXNlclByb2plY3RzKTtcbiAgICB9XG5mdW5jdGlvbiBoYW5kbGVFeHBhbmRUYXNrKGV2ZW50KSB7XG4gICAgY29uc3QgdGFza0NvbnRlbnQgPSBldmVudC5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLnRhc2stY29udGVudCcpO1xuICAgIGNvbnN0IGhpZGVhYmxlRWxzID0gdGFza0NvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnLmhpZGVhYmxlJyk7XG4gICAgY29uc29sZS5sb2coaGlkZWFibGVFbHMpXG4gICAgZm9yIChsZXQgZWwgb2YgaGlkZWFibGVFbHMpIHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgfVxufVxuXG5cbkRPTVN0dWZmLnVwZGF0ZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==