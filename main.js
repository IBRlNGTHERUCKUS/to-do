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
            const projectEl = this.generateprojectEl(project);
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
            // Create the elements
            const taskContainer = document.createElement('div');
            const toggleCompleted = document.createElement('button');
            const togglePinned = document.createElement('button');
            const taskContent = document.createElement('div');
            const toggleExpanded = document.createElement('button');
            const titleEl = document.createElement('h2');
            const descriptionEl = document.createElement('p');
            const dueDateEl = document.createElement('p');
            // Add the classes
            taskContainer.classList.add('task-container');
            toggleCompleted.classList.add('toggle-completed', 'icon');
            togglePinned.classList.add('toggle-pinned', 'icon');
            taskContent.classList.add('task-content')
            titleEl.classList.add('title');
            descriptionEl.classList.add('description', 'hidden', 'hideable');
            dueDateEl.classList.add('due-date', 'hidden', 'hideable');
            toggleExpanded.classList.add('icon')
            // Pinned/not pinned
            if (pinned) {
                togglePinned.classList.add('pinned');
                taskContainer.classList.add('pinned');
            }
            // Completed/not completed
            if (completed) {
                toggleCompleted.classList.add('completed');
                taskContainer.classList.add('completed');
            }
            // Fill the data
            toggleExpanded.textContent = 'V';
            titleEl.textContent = title;
            descriptionEl.textContent = description;
            dueDateEl.textContent = dueDate;
            // Attach eventlisteners
            toggleCompleted.addEventListener('click', handleToggleCompleted);
            togglePinned.addEventListener('click', handleTogglePinned);
            toggleExpanded.addEventListener('click', handleExpandTask);
            // Attach the elements
            taskContent.append(titleEl, descriptionEl, dueDateEl);
            taskContainer.append(toggleCompleted, togglePinned, taskContent, toggleExpanded);
            return taskContainer;
    },
    generateprojectEl(project) {
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
    const taskIndex = event.target.parentNode.dataset.index;
    const projectIndex = event.target.parentNode.parentNode.parentNode.dataset.index
    const targetTaskObject = userProjects[projectIndex].getTask(taskIndex);
    targetTaskObject.toggleCompleted();
    // DOM portion of event handler
    DOMStuff.toggleCompleted(event.target);
    DOMStuff.update();
    // Storage portion of event handler
    _storageController__WEBPACK_IMPORTED_MODULE_2__.storageController.storeUserProjects(userProjects);
}
function handleTogglePinned(event) {
    const taskIndex = event.target.parentNode.dataset.index;
    const projectIndex = event.target.parentNode.parentNode.parentNode.dataset.index
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
    const taskData = event.target.parentNode.querySelector('.task-content');

    for (let data of taskData.childNodes) {
        // Only hide the task data that is hideable
        if (data.classList.contains('hideable')) {
            data.classList.toggle('hidden');
        }
    }
}


DOMStuff.update();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENtQztBQUNuQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ1JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ053QztBQUNOO0FBQ21COztBQUVyRDtBQUNBO0FBQ0EsSUFBSSxpRUFBaUI7QUFDckIsMEJBQTBCLGlFQUFpQjtBQUMzQztBQUNBO0FBQ0E7QUFDQSxlQUFlLG9EQUFxQjtBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qiw2Q0FBTztBQUNuQztBQUNBO0FBQ0EsZ0JBQWdCLDBDQUFJO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDBCQUEwQjtBQUNoRDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlFQUFpQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksaUVBQWlCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsMENBQUk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpQjtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLGtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9zdG9yYWdlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGNvbG9yKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuY29sb3IgPSAncmVkJztcbiAgICAgICAgdGhpcy50YXNrTGlzdCA9IFtdO1xuICAgIH1cbiAgICBhZGRUYXNrKHRhc2spIHtcbiAgICAgICAgdGhpcy50YXNrTGlzdC5wdXNoKHRhc2spO1xuICAgIH1cbiAgICByZW1vdmVUYXNrKGluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tMaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICAgIGdldFRhc2soaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza0xpc3RbaW5kZXhdO1xuICAgIH1cbn1cblxuXG5cbmNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbj0nJywgZHVlRGF0ZT0nJywgcGlubmVkPWZhbHNlLCBjb21wbGV0ZWQ9ZmFsc2UpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucGlubmVkID0gcGlubmVkO1xuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcbiAgICB9XG4gICAgaXNDb21wbGV0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlZDtcbiAgICB9XG4gICAgdG9nZ2xlQ29tcGxldGVkKCkge1xuICAgICAgICBjb25zdCBvcHBvc2l0ZSA9ICEodGhpcy5jb21wbGV0ZWQpO1xuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IG9wcG9zaXRlO1xuICAgIH1cbiAgICB0b2dnbGVQaW5uZWQoKSB7XG4gICAgICAgIGNvbnN0IG9wcG9zaXRlID0gISh0aGlzLnBpbm5lZCk7XG4gICAgICAgIHRoaXMucGlubmVkID0gb3Bwb3NpdGU7XG4gICAgfVxufVxuXG5leHBvcnQge1Byb2plY3QsIFRhc2t9IiwiaW1wb3J0IHVzZXJEYXRhIGZyb20gJy4vdGVzdC5qc29uJztcbmNvbnN0IHN0b3JhZ2VDb250cm9sbGVyID0ge1xuICAgIHN0b3JlVXNlclByb2plY3RzKHVzZXJQcm9qZWN0cykge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlclByb2plY3RzJywgSlNPTi5zdHJpbmdpZnkodXNlclByb2plY3RzKSk7XG4gICAgfSxcbiAgICBnZXRVc2VyUHJvamVjdHMoKSB7XG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJQcm9qZWN0c1wiKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7c3RvcmFnZUNvbnRyb2xsZXJ9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtQcm9qZWN0LCBUYXNrfSBmcm9tIFwiLi9Qcm9qZWN0XCI7XG5pbXBvcnQgdGVzdEpTT04gZnJvbSBcIi4vdGVzdC5qc29uXCJcbmltcG9ydCB7c3RvcmFnZUNvbnRyb2xsZXJ9IGZyb20gJy4vc3RvcmFnZUNvbnRyb2xsZXInXG5cbi8vIEZldGNoIHRoZSB1c2VyIGRhdGEgZnJvbSBsb2NhbCBzdG9yYWdlXG5sZXQgdXNlckRhdGE7XG5pZiAoc3RvcmFnZUNvbnRyb2xsZXIuZ2V0VXNlclByb2plY3RzKCkpIHtcbiAgICB1c2VyRGF0YSA9IEpTT04ucGFyc2Uoc3RvcmFnZUNvbnRyb2xsZXIuZ2V0VXNlclByb2plY3RzKCkpXG59XG4vLyBJZiB1bmF2YWlsYWJsZSB1c2UgYmFzaWMgdGVtcGxhdGVcbmVsc2Uge1xuICAgIHVzZXJEYXRhID0gdGVzdEpTT04udXNlclByb2plY3RzO1xufVxuXG4vLyBQb3B1bGF0ZSB1c2VyUHJvamVjdHMgYXJyYXkgd2l0aCBQcm9qZWN0IG9iamVjdHMgdXNpbmcgdXNlckRhdGFcbmNvbnN0IHVzZXJQcm9qZWN0cyA9IFtdO1xuY29uc29sZS5sb2codXNlckRhdGEpO1xuZm9yIChsZXQgcHJvamVjdCBvZiB1c2VyRGF0YSkge1xuICAgIGNvbnN0IHRlbXBQcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdC5uYW1lLCBwcm9qZWN0LmNvbG9yKTtcbiAgICBmb3IgKGxldCB0YXNrIG9mIHByb2plY3QudGFza0xpc3QpIHtcbiAgICAgICAgdGVtcFByb2plY3QuYWRkVGFzayhcbiAgICAgICAgICAgIG5ldyBUYXNrKFxuICAgICAgICAgICAgICAgIHRhc2sudGl0bGUsIFxuICAgICAgICAgICAgICAgIHRhc2suZGVzYywgXG4gICAgICAgICAgICAgICAgdGFzay5kdWVEYXRlLCBcbiAgICAgICAgICAgICAgICB0YXNrLnBpbm5lZCwgXG4gICAgICAgICAgICAgICAgdGFzay5jb21wbGV0ZWRcbiAgICAgICAgICAgICAgICApKTtcbiAgICB9XG4gICAgdXNlclByb2plY3RzLnB1c2godGVtcFByb2plY3QpO1xufVxuXG5jb25zdCBET01TdHVmZiA9IHtcbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgICAgICBsZXQgaW5kZXggPSAwO1xuICAgICAgICBmb3IgKGxldCBwcm9qZWN0IG9mIHVzZXJQcm9qZWN0cykge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdEVsID0gdGhpcy5nZW5lcmF0ZXByb2plY3RFbChwcm9qZWN0KTtcbiAgICAgICAgICAgIHByb2plY3RFbC5kYXRhc2V0LmluZGV4ID0gaW5kZXgrKztcbiAgICAgICAgICAgIHRhcmdldC5hcHBlbmQocHJvamVjdEVsKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICAgICAgd2hpbGUgKHRhcmdldC5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgICAgIHRhcmdldC5yZW1vdmVDaGlsZCh0YXJnZXQuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGdlbmVyYXRlVGFza0VsKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcGlubmVkLCBjb21wbGV0ZWQpIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSB0aGUgZWxlbWVudHNcbiAgICAgICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IHRvZ2dsZUNvbXBsZXRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgY29uc3QgdG9nZ2xlUGlubmVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBjb25zdCB0YXNrQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3QgdG9nZ2xlRXhwYW5kZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb25FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGNvbnN0IGR1ZURhdGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIC8vIEFkZCB0aGUgY2xhc3Nlc1xuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgdG9nZ2xlQ29tcGxldGVkLmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZS1jb21wbGV0ZWQnLCAnaWNvbicpO1xuICAgICAgICAgICAgdG9nZ2xlUGlubmVkLmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZS1waW5uZWQnLCAnaWNvbicpO1xuICAgICAgICAgICAgdGFza0NvbnRlbnQuY2xhc3NMaXN0LmFkZCgndGFzay1jb250ZW50JylcbiAgICAgICAgICAgIHRpdGxlRWwuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uRWwuY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nLCAnaGlkZGVuJywgJ2hpZGVhYmxlJyk7XG4gICAgICAgICAgICBkdWVEYXRlRWwuY2xhc3NMaXN0LmFkZCgnZHVlLWRhdGUnLCAnaGlkZGVuJywgJ2hpZGVhYmxlJyk7XG4gICAgICAgICAgICB0b2dnbGVFeHBhbmRlZC5jbGFzc0xpc3QuYWRkKCdpY29uJylcbiAgICAgICAgICAgIC8vIFBpbm5lZC9ub3QgcGlubmVkXG4gICAgICAgICAgICBpZiAocGlubmVkKSB7XG4gICAgICAgICAgICAgICAgdG9nZ2xlUGlubmVkLmNsYXNzTGlzdC5hZGQoJ3Bpbm5lZCcpO1xuICAgICAgICAgICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncGlubmVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBDb21wbGV0ZWQvbm90IGNvbXBsZXRlZFxuICAgICAgICAgICAgaWYgKGNvbXBsZXRlZCkge1xuICAgICAgICAgICAgICAgIHRvZ2dsZUNvbXBsZXRlZC5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQnKTtcbiAgICAgICAgICAgICAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRmlsbCB0aGUgZGF0YVxuICAgICAgICAgICAgdG9nZ2xlRXhwYW5kZWQudGV4dENvbnRlbnQgPSAnVic7XG4gICAgICAgICAgICB0aXRsZUVsLnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbkVsLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG4gICAgICAgICAgICBkdWVEYXRlRWwudGV4dENvbnRlbnQgPSBkdWVEYXRlO1xuICAgICAgICAgICAgLy8gQXR0YWNoIGV2ZW50bGlzdGVuZXJzXG4gICAgICAgICAgICB0b2dnbGVDb21wbGV0ZWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVUb2dnbGVDb21wbGV0ZWQpO1xuICAgICAgICAgICAgdG9nZ2xlUGlubmVkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlVG9nZ2xlUGlubmVkKTtcbiAgICAgICAgICAgIHRvZ2dsZUV4cGFuZGVkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlRXhwYW5kVGFzayk7XG4gICAgICAgICAgICAvLyBBdHRhY2ggdGhlIGVsZW1lbnRzXG4gICAgICAgICAgICB0YXNrQ29udGVudC5hcHBlbmQodGl0bGVFbCwgZGVzY3JpcHRpb25FbCwgZHVlRGF0ZUVsKTtcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kKHRvZ2dsZUNvbXBsZXRlZCwgdG9nZ2xlUGlubmVkLCB0YXNrQ29udGVudCwgdG9nZ2xlRXhwYW5kZWQpO1xuICAgICAgICAgICAgcmV0dXJuIHRhc2tDb250YWluZXI7XG4gICAgfSxcbiAgICBnZW5lcmF0ZXByb2plY3RFbChwcm9qZWN0KSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgbmFtZS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICAgICAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza0xpc3QuY2xhc3NMaXN0LmFkZCgnbGlzdC1jb250YWluZXInKTtcbiAgICAgICAgLy8gTG9vcCB0aHJvdWdoIHRhc2tzIGFuZCBwb3B1bGF0ZSB0aGUgdGFzayBsaXN0IGVsZW1lbnRzXG4gICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgIGZvciAobGV0IHRhc2sgb2YgcHJvamVjdC50YXNrTGlzdCkge1xuICAgICAgICAgICAgY29uc3QgdGFza0VsID0gdGhpcy5nZW5lcmF0ZVRhc2tFbChcbiAgICAgICAgICAgICAgICB0YXNrLnRpdGxlLCBcbiAgICAgICAgICAgICAgICB0YXNrLmRlc2NyaXB0aW9uLCBcbiAgICAgICAgICAgICAgICB0YXNrLmR1ZURhdGUsIFxuICAgICAgICAgICAgICAgIHRhc2sucGlubmVkLCBcbiAgICAgICAgICAgICAgICB0YXNrLmNvbXBsZXRlZFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAvLyBBZGQgYW4gaW5kZXggZGF0YXNldCB0byBlYWNoIHRhc2sgZWxlbWVudFxuICAgICAgICAgICAgdGFza0VsLmRhdGFzZXQuaW5kZXggPSBpbmRleCsrO1xuICAgICAgICAgICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQodGFza0VsKTsgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIHByb2plY3RFbC5hcHBlbmQobmFtZSwgdGFza0xpc3QpO1xuXG4gICAgICAgIC8vIEFkZCBjcmVhdGlvbiBmb3JtXG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZS1mb3JtJyk7XG4gICAgICAgIGNvbnN0IGNsb25lID0gdGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIGNvbnN0IGNyZWF0ZUJ1dHRvbiA9IGNsb25lLnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUtYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBjbG9uZS5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gICAgICAgIGNyZWF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFxuICAgICAgICAgICAgKGV2ZW50KT0+e2hhbmRsZUNyZWF0ZShldmVudCwgZm9ybSl9KTtcbiAgICAgICAgcHJvamVjdEVsLmFwcGVuZENoaWxkKGNsb25lKTtcbiAgICAgICAgcmV0dXJuIHByb2plY3RFbDtcbiAgICB9LFxuICAgIHRvZ2dsZUNvbXBsZXRlZCh0b2dnbGVDb21wbGV0ZWRFbCkge1xuICAgICAgICB0b2dnbGVDb21wbGV0ZWRFbC5jbGFzc0xpc3QudG9nZ2xlKCdjb21wbGV0ZWQnKTtcbiAgICAgICAgLy90b2dnbGVDb21wbGV0ZWRFbC5wYXJlbnROb2RlLmNsYXNzTGlzdC50b2dnbGUoJ2NvbXBsZXRlZCcpXG4gICAgfSxcbiAgICB0b2dnbGVQaW5uZWQodG9nZ2xlUGlubmVkRWwpIHtcbiAgICAgICAgdG9nZ2xlUGlubmVkRWwuY2xhc3NMaXN0LnRvZ2dsZSgncGlubmVkJyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVUb2dnbGVDb21wbGV0ZWQoZXZlbnQpIHtcbiAgICBjb25zdCB0YXNrSW5kZXggPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5kYXRhc2V0LmluZGV4O1xuICAgIGNvbnN0IHByb2plY3RJbmRleCA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5kYXRhc2V0LmluZGV4XG4gICAgY29uc3QgdGFyZ2V0VGFza09iamVjdCA9IHVzZXJQcm9qZWN0c1twcm9qZWN0SW5kZXhdLmdldFRhc2sodGFza0luZGV4KTtcbiAgICB0YXJnZXRUYXNrT2JqZWN0LnRvZ2dsZUNvbXBsZXRlZCgpO1xuICAgIC8vIERPTSBwb3J0aW9uIG9mIGV2ZW50IGhhbmRsZXJcbiAgICBET01TdHVmZi50b2dnbGVDb21wbGV0ZWQoZXZlbnQudGFyZ2V0KTtcbiAgICBET01TdHVmZi51cGRhdGUoKTtcbiAgICAvLyBTdG9yYWdlIHBvcnRpb24gb2YgZXZlbnQgaGFuZGxlclxuICAgIHN0b3JhZ2VDb250cm9sbGVyLnN0b3JlVXNlclByb2plY3RzKHVzZXJQcm9qZWN0cyk7XG59XG5mdW5jdGlvbiBoYW5kbGVUb2dnbGVQaW5uZWQoZXZlbnQpIHtcbiAgICBjb25zdCB0YXNrSW5kZXggPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5kYXRhc2V0LmluZGV4O1xuICAgIGNvbnN0IHByb2plY3RJbmRleCA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5kYXRhc2V0LmluZGV4XG4gICAgY29uc3QgdGFyZ2V0VGFza09iamVjdCA9IHVzZXJQcm9qZWN0c1twcm9qZWN0SW5kZXhdLmdldFRhc2sodGFza0luZGV4KTtcbiAgICB0YXJnZXRUYXNrT2JqZWN0LnRvZ2dsZVBpbm5lZCgpO1xuICAgIC8vIERPTSBwb3J0aW9uIG9mIGV2ZW50IGhhbmRsZXJcbiAgICBET01TdHVmZi50b2dnbGVQaW5uZWQoZXZlbnQudGFyZ2V0KTtcbiAgICBET01TdHVmZi51cGRhdGUoKTtcbiAgICAvLyBTdG9yYWdlIHBvcnRpb24gb2YgZXZlbnQgaGFuZGxlclxuICAgIHN0b3JhZ2VDb250cm9sbGVyLnN0b3JlVXNlclByb2plY3RzKHVzZXJQcm9qZWN0cyk7XG59XG5mdW5jdGlvbiBoYW5kbGVDcmVhdGUoZXZlbnQsIGZvcm0pIHtcbiAgICAgICAgLy8gVGFrZSB0aGUgZm9ybSBkYXRhIGFuZCBjcmVhdGUgYSBuZXcgdGFza1xuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcbiAgICAgICAgLy8gcmVxdWlyZSB0YXNrcyB0byBoYXZlIGEgdGl0bGVcbiAgICAgICAgaWYgKCFmb3JtRGF0YS5nZXQoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdUYXNrID0gbmV3IFRhc2soXG4gICAgICAgICAgICBmb3JtRGF0YS5nZXQoJ3RpdGxlJyksXG4gICAgICAgICAgICBmb3JtRGF0YS5nZXQoJ2Rlc2MnKSxcbiAgICAgICAgICAgIGZvcm1EYXRhLmdldCgnZHVlRGF0ZScpLFxuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICApXG4gICAgICAgIC8vIEFkZCB0aGUgdGFzayB0byB0aGUgcHJvamVjdCBhbmQgdXBkYXRlXG4gICAgICAgIGNvbnN0IHByb2plY3RJbmRleCA9IGZvcm0ucGFyZW50Tm9kZS5kYXRhc2V0LmluZGV4O1xuICAgICAgICB1c2VyUHJvamVjdHNbcHJvamVjdEluZGV4XS5hZGRUYXNrKG5ld1Rhc2spO1xuICAgICAgICBET01TdHVmZi51cGRhdGUoKTtcbiAgICAgICAgc3RvcmFnZUNvbnRyb2xsZXIuc3RvcmVVc2VyUHJvamVjdHModXNlclByb2plY3RzKTtcbiAgICB9XG5mdW5jdGlvbiBoYW5kbGVFeHBhbmRUYXNrKGV2ZW50KSB7XG4gICAgY29uc3QgdGFza0RhdGEgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcudGFzay1jb250ZW50Jyk7XG5cbiAgICBmb3IgKGxldCBkYXRhIG9mIHRhc2tEYXRhLmNoaWxkTm9kZXMpIHtcbiAgICAgICAgLy8gT25seSBoaWRlIHRoZSB0YXNrIGRhdGEgdGhhdCBpcyBoaWRlYWJsZVxuICAgICAgICBpZiAoZGF0YS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGVhYmxlJykpIHtcbiAgICAgICAgICAgIGRhdGEuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuRE9NU3R1ZmYudXBkYXRlKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9