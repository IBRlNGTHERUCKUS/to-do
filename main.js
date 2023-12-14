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
        descriptionEl.textContent = description;
        dueDateEl.textContent = `Due Date: ${dueDate}`;
        // Attach eventlisteners
        completeButton.addEventListener('click', handleToggleCompleted);
        pinButton.addEventListener('click', handleTogglePinned);
        expandButton.addEventListener('click', handleExpandTask);
        deleteButton.addEventListener('click', handleDelete);
        
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
function handleDelete(event) {
    const taskIndex = event.currentTarget.parentNode.parentNode.dataset.index;
    const projectIndex = event.currentTarget.parentNode.parentNode.parentNode.parentNode.dataset.index;
    const targetProjectObject = userProjects[projectIndex];
    targetProjectObject.removeTask(taskIndex);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENtQztBQUNuQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ1JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ053QztBQUNOO0FBQ21COztBQUVyRDtBQUNBO0FBQ0EsSUFBSSxpRUFBaUI7QUFDckIsMEJBQTBCLGlFQUFpQjtBQUMzQztBQUNBO0FBQ0E7QUFDQSxlQUFlLG9EQUFxQjtBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qiw2Q0FBTztBQUNuQztBQUNBO0FBQ0EsZ0JBQWdCLDBDQUFJO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxRQUFRO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsMEJBQTBCO0FBQ2hEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpRUFBaUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlFQUFpQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDBDQUFJO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksaUVBQWlCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLGtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9zdG9yYWdlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGNvbG9yKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuY29sb3IgPSAncmVkJztcbiAgICAgICAgdGhpcy50YXNrTGlzdCA9IFtdO1xuICAgIH1cbiAgICBhZGRUYXNrKHRhc2spIHtcbiAgICAgICAgdGhpcy50YXNrTGlzdC5wdXNoKHRhc2spO1xuICAgIH1cbiAgICByZW1vdmVUYXNrKGluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tMaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICAgIGdldFRhc2soaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza0xpc3RbaW5kZXhdO1xuICAgIH1cbn1cblxuXG5cbmNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbj0nJywgZHVlRGF0ZT0nJywgcGlubmVkPWZhbHNlLCBjb21wbGV0ZWQ9ZmFsc2UpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucGlubmVkID0gcGlubmVkO1xuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcbiAgICB9XG4gICAgaXNDb21wbGV0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlZDtcbiAgICB9XG4gICAgdG9nZ2xlQ29tcGxldGVkKCkge1xuICAgICAgICBjb25zdCBvcHBvc2l0ZSA9ICEodGhpcy5jb21wbGV0ZWQpO1xuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IG9wcG9zaXRlO1xuICAgIH1cbiAgICB0b2dnbGVQaW5uZWQoKSB7XG4gICAgICAgIGNvbnN0IG9wcG9zaXRlID0gISh0aGlzLnBpbm5lZCk7XG4gICAgICAgIHRoaXMucGlubmVkID0gb3Bwb3NpdGU7XG4gICAgfVxufVxuXG5leHBvcnQge1Byb2plY3QsIFRhc2t9IiwiaW1wb3J0IHVzZXJEYXRhIGZyb20gJy4vdGVzdC5qc29uJztcbmNvbnN0IHN0b3JhZ2VDb250cm9sbGVyID0ge1xuICAgIHN0b3JlVXNlclByb2plY3RzKHVzZXJQcm9qZWN0cykge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlclByb2plY3RzJywgSlNPTi5zdHJpbmdpZnkodXNlclByb2plY3RzKSk7XG4gICAgfSxcbiAgICBnZXRVc2VyUHJvamVjdHMoKSB7XG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJQcm9qZWN0c1wiKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7c3RvcmFnZUNvbnRyb2xsZXJ9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtQcm9qZWN0LCBUYXNrfSBmcm9tIFwiLi9Qcm9qZWN0XCI7XG5pbXBvcnQgdGVzdEpTT04gZnJvbSBcIi4vdGVzdC5qc29uXCJcbmltcG9ydCB7c3RvcmFnZUNvbnRyb2xsZXJ9IGZyb20gJy4vc3RvcmFnZUNvbnRyb2xsZXInXG5cbi8vIEZldGNoIHRoZSB1c2VyIGRhdGEgZnJvbSBsb2NhbCBzdG9yYWdlXG5sZXQgdXNlckRhdGE7XG5pZiAoc3RvcmFnZUNvbnRyb2xsZXIuZ2V0VXNlclByb2plY3RzKCkpIHtcbiAgICB1c2VyRGF0YSA9IEpTT04ucGFyc2Uoc3RvcmFnZUNvbnRyb2xsZXIuZ2V0VXNlclByb2plY3RzKCkpXG59XG4vLyBJZiB1bmF2YWlsYWJsZSB1c2UgYmFzaWMgdGVtcGxhdGVcbmVsc2Uge1xuICAgIHVzZXJEYXRhID0gdGVzdEpTT04udXNlclByb2plY3RzO1xufVxuXG4vLyBQb3B1bGF0ZSB1c2VyUHJvamVjdHMgYXJyYXkgd2l0aCBQcm9qZWN0IG9iamVjdHMgdXNpbmcgdXNlckRhdGFcbmNvbnN0IHVzZXJQcm9qZWN0cyA9IFtdO1xuY29uc29sZS5sb2codXNlckRhdGEpO1xuZm9yIChsZXQgcHJvamVjdCBvZiB1c2VyRGF0YSkge1xuICAgIGNvbnN0IHRlbXBQcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdC5uYW1lLCBwcm9qZWN0LmNvbG9yKTtcbiAgICBmb3IgKGxldCB0YXNrIG9mIHByb2plY3QudGFza0xpc3QpIHtcbiAgICAgICAgdGVtcFByb2plY3QuYWRkVGFzayhcbiAgICAgICAgICAgIG5ldyBUYXNrKFxuICAgICAgICAgICAgICAgIHRhc2sudGl0bGUsIFxuICAgICAgICAgICAgICAgIHRhc2suZGVzY3JpcHRpb24sIFxuICAgICAgICAgICAgICAgIHRhc2suZHVlRGF0ZSwgXG4gICAgICAgICAgICAgICAgdGFzay5waW5uZWQsIFxuICAgICAgICAgICAgICAgIHRhc2suY29tcGxldGVkXG4gICAgICAgICAgICAgICAgKSk7XG4gICAgfVxuICAgIHVzZXJQcm9qZWN0cy5wdXNoKHRlbXBQcm9qZWN0KTtcbn1cblxuY29uc3QgRE9NU3R1ZmYgPSB7XG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgZm9yIChsZXQgcHJvamVjdCBvZiB1c2VyUHJvamVjdHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RFbCA9IHRoaXMuZ2VuZXJhdGVQcm9qZWN0RWwocHJvamVjdCk7XG4gICAgICAgICAgICBwcm9qZWN0RWwuZGF0YXNldC5pbmRleCA9IGluZGV4Kys7XG4gICAgICAgICAgICB0YXJnZXQuYXBwZW5kKHByb2plY3RFbCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNsZWFyKCkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gICAgICAgIHdoaWxlICh0YXJnZXQuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAgICAgICB0YXJnZXQucmVtb3ZlQ2hpbGQodGFyZ2V0LmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBnZW5lcmF0ZVRhc2tFbCh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHBpbm5lZCwgY29tcGxldGVkKSB7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2snKTtcbiAgICAgICAgY29uc3QgY2xvbmUgPSB0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgY29uc3QgcGluQnV0dG9uID0gY2xvbmUucXVlcnlTZWxlY3RvcignLnBpbi1idXR0b24nKTtcbiAgICAgICAgY29uc3QgY29tcGxldGVCdXR0b24gPSBjbG9uZS5xdWVyeVNlbGVjdG9yKCcuY29tcGxldGUtYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBjbG9uZS5xdWVyeVNlbGVjdG9yKCcudGFzay1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgdGl0bGVFbCA9IGNsb25lLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLXRpdGxlJyk7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uRWwgPSBjbG9uZS5xdWVyeVNlbGVjdG9yKCcudGFzay1kZXNjcmlwdGlvbicpO1xuICAgICAgICBjb25zdCBkdWVEYXRlRWwgPSBjbG9uZS5xdWVyeVNlbGVjdG9yKCcudGFzay1kdWUtZGF0ZScpO1xuICAgICAgICBjb25zdCBleHBhbmRCdXR0b24gPSBjbG9uZS5xdWVyeVNlbGVjdG9yKCcuZXhwYW5kLWJ1dHRvbicpO1xuICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBjbG9uZS5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlLWJ1dHRvbicpXG4gICAgICAgIC8vIEFkZCBjb21wbGV0ZWQgY2xhc3MgaWYgdGFzayBpcyBjb21wbGV0ZWRcbiAgICAgICAgaWYgKGNvbXBsZXRlZCkge1xuICAgICAgICBjb21wbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQnKTtcbiAgICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQnKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBZGQgcGlubmVkIGNsYXNzIGlmIHRhc2sgaXMgcGlubmVkXG4gICAgICAgIGlmIChwaW5uZWQpIHtcbiAgICAgICAgICAgIHBpbkJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwaW5uZWQnKTtcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncGlubmVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmlsbCB0aGUgdGFzayBkYXRhXG4gICAgICAgIHRpdGxlRWwudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICAgICAgZGVzY3JpcHRpb25FbC50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuICAgICAgICBkdWVEYXRlRWwudGV4dENvbnRlbnQgPSBgRHVlIERhdGU6ICR7ZHVlRGF0ZX1gO1xuICAgICAgICAvLyBBdHRhY2ggZXZlbnRsaXN0ZW5lcnNcbiAgICAgICAgY29tcGxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVUb2dnbGVDb21wbGV0ZWQpO1xuICAgICAgICBwaW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVUb2dnbGVQaW5uZWQpO1xuICAgICAgICBleHBhbmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVFeHBhbmRUYXNrKTtcbiAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlRGVsZXRlKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0YXNrQ29udGFpbmVyO1xuICAgIH0sXG4gICAgZ2VuZXJhdGVQcm9qZWN0RWwocHJvamVjdCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tMaXN0LmNsYXNzTGlzdC5hZGQoJ2xpc3QtY29udGFpbmVyJyk7XG4gICAgICAgIC8vIExvb3AgdGhyb3VnaCB0YXNrcyBhbmQgcG9wdWxhdGUgdGhlIHRhc2sgbGlzdCBlbGVtZW50c1xuICAgICAgICBsZXQgaW5kZXggPSAwO1xuICAgICAgICBmb3IgKGxldCB0YXNrIG9mIHByb2plY3QudGFza0xpc3QpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tFbCA9IHRoaXMuZ2VuZXJhdGVUYXNrRWwoXG4gICAgICAgICAgICAgICAgdGFzay50aXRsZSwgXG4gICAgICAgICAgICAgICAgdGFzay5kZXNjcmlwdGlvbiwgXG4gICAgICAgICAgICAgICAgdGFzay5kdWVEYXRlLCBcbiAgICAgICAgICAgICAgICB0YXNrLnBpbm5lZCwgXG4gICAgICAgICAgICAgICAgdGFzay5jb21wbGV0ZWRcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgLy8gQWRkIGFuIGluZGV4IGRhdGFzZXQgdG8gZWFjaCB0YXNrIGVsZW1lbnRcbiAgICAgICAgICAgIHRhc2tFbC5kYXRhc2V0LmluZGV4ID0gaW5kZXgrKztcbiAgICAgICAgICAgIHRhc2tMaXN0LmFwcGVuZENoaWxkKHRhc2tFbCk7ICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBwcm9qZWN0RWwuYXBwZW5kKG5hbWUsIHRhc2tMaXN0KTtcblxuICAgICAgICAvLyBBZGQgY3JlYXRpb24gZm9ybVxuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUtZm9ybScpO1xuICAgICAgICBjb25zdCBjbG9uZSA9IHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBjb25zdCBjcmVhdGVCdXR0b24gPSBjbG9uZS5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlLWJ1dHRvbicpO1xuICAgICAgICBjb25zdCBmb3JtID0gY2xvbmUucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICAgICAgICBjcmVhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBcbiAgICAgICAgICAgIChldmVudCk9PntoYW5kbGVDcmVhdGUoZXZlbnQsIGZvcm0pfSk7XG4gICAgICAgIHByb2plY3RFbC5hcHBlbmRDaGlsZChjbG9uZSk7XG4gICAgICAgIHJldHVybiBwcm9qZWN0RWw7XG4gICAgfSxcbiAgICB0b2dnbGVDb21wbGV0ZWQodG9nZ2xlQ29tcGxldGVkRWwpIHtcbiAgICAgICAgdG9nZ2xlQ29tcGxldGVkRWwuY2xhc3NMaXN0LnRvZ2dsZSgnY29tcGxldGVkJyk7XG4gICAgICAgIC8vdG9nZ2xlQ29tcGxldGVkRWwucGFyZW50Tm9kZS5jbGFzc0xpc3QudG9nZ2xlKCdjb21wbGV0ZWQnKVxuICAgIH0sXG4gICAgdG9nZ2xlUGlubmVkKHRvZ2dsZVBpbm5lZEVsKSB7XG4gICAgICAgIHRvZ2dsZVBpbm5lZEVsLmNsYXNzTGlzdC50b2dnbGUoJ3Bpbm5lZCcpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlVG9nZ2xlQ29tcGxldGVkKGV2ZW50KSB7XG4gICAgLy8gY3VycmVudFRhcmdldCBpcyBuZWVkZWQgaW5zdGVhZCB0byB0YXJnZXQgb3RoZXJ3aXNlIHN2ZyBwYXRoIGlzIHRoZSB0YXJnZXRcbiAgICBjb25zdCB0YXNrSW5kZXggPSBldmVudC5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUuZGF0YXNldC5pbmRleDtcbiAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBldmVudC5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmRhdGFzZXQuaW5kZXhcbiAgICBjb25zdCB0YXJnZXRUYXNrT2JqZWN0ID0gdXNlclByb2plY3RzW3Byb2plY3RJbmRleF0uZ2V0VGFzayh0YXNrSW5kZXgpO1xuICAgIHRhcmdldFRhc2tPYmplY3QudG9nZ2xlQ29tcGxldGVkKCk7XG4gICAgLy8gRE9NIHBvcnRpb24gb2YgZXZlbnQgaGFuZGxlclxuICAgIERPTVN0dWZmLnRvZ2dsZUNvbXBsZXRlZChldmVudC50YXJnZXQpO1xuICAgIERPTVN0dWZmLnVwZGF0ZSgpO1xuICAgIC8vIFN0b3JhZ2UgcG9ydGlvbiBvZiBldmVudCBoYW5kbGVyXG4gICAgc3RvcmFnZUNvbnRyb2xsZXIuc3RvcmVVc2VyUHJvamVjdHModXNlclByb2plY3RzKTtcbn1cbmZ1bmN0aW9uIGhhbmRsZVRvZ2dsZVBpbm5lZChldmVudCkge1xuICAgIGNvbnN0IHRhc2tJbmRleCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5kYXRhc2V0LmluZGV4O1xuICAgIGNvbnN0IHByb2plY3RJbmRleCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuZGF0YXNldC5pbmRleFxuICAgIGNvbnN0IHRhcmdldFRhc2tPYmplY3QgPSB1c2VyUHJvamVjdHNbcHJvamVjdEluZGV4XS5nZXRUYXNrKHRhc2tJbmRleCk7XG4gICAgdGFyZ2V0VGFza09iamVjdC50b2dnbGVQaW5uZWQoKTtcbiAgICAvLyBET00gcG9ydGlvbiBvZiBldmVudCBoYW5kbGVyXG4gICAgRE9NU3R1ZmYudG9nZ2xlUGlubmVkKGV2ZW50LnRhcmdldCk7XG4gICAgRE9NU3R1ZmYudXBkYXRlKCk7XG4gICAgLy8gU3RvcmFnZSBwb3J0aW9uIG9mIGV2ZW50IGhhbmRsZXJcbiAgICBzdG9yYWdlQ29udHJvbGxlci5zdG9yZVVzZXJQcm9qZWN0cyh1c2VyUHJvamVjdHMpO1xufVxuZnVuY3Rpb24gaGFuZGxlQ3JlYXRlKGV2ZW50LCBmb3JtKSB7XG4gICAgICAgIC8vIFRha2UgdGhlIGZvcm0gZGF0YSBhbmQgY3JlYXRlIGEgbmV3IHRhc2tcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XG4gICAgICAgIC8vIHJlcXVpcmUgdGFza3MgdG8gaGF2ZSBhIHRpdGxlXG4gICAgICAgIGlmICghZm9ybURhdGEuZ2V0KCd0aXRsZScpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKFxuICAgICAgICAgICAgZm9ybURhdGEuZ2V0KCd0aXRsZScpLFxuICAgICAgICAgICAgZm9ybURhdGEuZ2V0KCdkZXNjJyksXG4gICAgICAgICAgICBmb3JtRGF0YS5nZXQoJ2R1ZURhdGUnKSxcbiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgKVxuICAgICAgICBjb25zb2xlLmxvZyhuZXdUYXNrKTtcbiAgICAgICAgLy8gQWRkIHRoZSB0YXNrIHRvIHRoZSBwcm9qZWN0IGFuZCB1cGRhdGVcbiAgICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gZm9ybS5wYXJlbnROb2RlLmRhdGFzZXQuaW5kZXg7XG4gICAgICAgIHVzZXJQcm9qZWN0c1twcm9qZWN0SW5kZXhdLmFkZFRhc2sobmV3VGFzayk7XG4gICAgICAgIERPTVN0dWZmLnVwZGF0ZSgpO1xuICAgICAgICBzdG9yYWdlQ29udHJvbGxlci5zdG9yZVVzZXJQcm9qZWN0cyh1c2VyUHJvamVjdHMpO1xuICAgIH1cbmZ1bmN0aW9uIGhhbmRsZURlbGV0ZShldmVudCkge1xuICAgIGNvbnN0IHRhc2tJbmRleCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmRhdGFzZXQuaW5kZXg7XG4gICAgY29uc3QgcHJvamVjdEluZGV4ID0gZXZlbnQuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmRhdGFzZXQuaW5kZXg7XG4gICAgY29uc3QgdGFyZ2V0UHJvamVjdE9iamVjdCA9IHVzZXJQcm9qZWN0c1twcm9qZWN0SW5kZXhdO1xuICAgIHRhcmdldFByb2plY3RPYmplY3QucmVtb3ZlVGFzayh0YXNrSW5kZXgpO1xuICAgIERPTVN0dWZmLnVwZGF0ZSgpO1xuICAgIHN0b3JhZ2VDb250cm9sbGVyLnN0b3JlVXNlclByb2plY3RzKHVzZXJQcm9qZWN0cyk7XG59XG5mdW5jdGlvbiBoYW5kbGVFeHBhbmRUYXNrKGV2ZW50KSB7XG4gICAgY29uc3QgZXhwYW5kQnV0dG9uID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICBjb25zdCB0YXNrQ29udGVudCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcudGFzay1jb250ZW50Jyk7XG4gICAgY29uc3QgaGlkZWFibGVFbHMgPSB0YXNrQ29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGlkZWFibGUnKTtcbiAgICBleHBhbmRCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnZXhwYW5kZWQnKTtcbiAgICBjb25zb2xlLmxvZyhoaWRlYWJsZUVscylcbiAgICBmb3IgKGxldCBlbCBvZiBoaWRlYWJsZUVscykge1xuICAgICAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICB9XG59XG5cblxuRE9NU3R1ZmYudXBkYXRlKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9