/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
    storeUserLists(userLists) {
        localStorage.setItem('myData', JSON.stringify(userLists));
    },
    getUserLists() {
        return localStorage.getItem("myData");
    }
}



/***/ }),

/***/ "./src/taskList.js":
/*!*************************!*\
  !*** ./src/taskList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Task: () => (/* binding */ Task),
/* harmony export */   taskList: () => (/* binding */ taskList)
/* harmony export */ });
class taskList {
    constructor(name, color) {
        this.name = name;
        this.color = 'red';
        this.list = [];
    }
    addTask(task) {
        this.list.push(task);
    }
    removeTask(index) {
        return this.list.splice(index, 1);
    }
    getTask(index) {
        return this.list[index];
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

/***/ "./src/test.json":
/*!***********************!*\
  !*** ./src/test.json ***!
  \***********************/
/***/ ((module) => {

module.exports = JSON.parse('{"userLists":[{"name":"General","color":"blue","list":[{"title":"Wash the car","desc":"Use turtle wax to get a nice finish","dueDate":"Tuesday night","pinned":true,"completed":false},{"title":"Feed the dogs","desc":"Mix wet and dry food","dueDate":"Tonight","pinned":false,"completed":true},{"title":"Make Dinner","desc":"Cook something new","dueDate":"9:00PM","pinned":false,"completed":false}]},{"name":"School","color":"orange","list":[{"title":"Do homework","desc":"Chapter 90 page 6","dueDate":"Wednesday","pinned":true,"completed":false},{"title":"Make powerpoint","desc":"Subject is how javascript is hard","dueDate":"Tonight","pinned":false,"completed":true}]}]}');

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
/* harmony import */ var _taskList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskList */ "./src/taskList.js");
/* harmony import */ var _test_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test.json */ "./src/test.json");
/* harmony import */ var _storageController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storageController */ "./src/storageController.js");




// Fetch the user data
let userData;
if (_storageController__WEBPACK_IMPORTED_MODULE_2__.storageController.getUserLists()) {
    userData = JSON.parse(_storageController__WEBPACK_IMPORTED_MODULE_2__.storageController.getUserLists())
}
console.log(userData);

const userLists = [];
for (let userList of userData) {
    const tempObj = new _taskList__WEBPACK_IMPORTED_MODULE_0__.taskList(userList.name, userList.color);
    for (let task of userList.list) {
        tempObj.addTask(
            new _taskList__WEBPACK_IMPORTED_MODULE_0__.Task(
                task.title, 
                task.desc, 
                task.dueDate, 
                task.pinned, 
                task.completed
                ));
    }
    userLists.push(tempObj);
}
console.log(userLists);

// console.log(testJSON.userLists);
// const userLists = [];
// for (let userList of testJSON.userLists) {
//     const tempObj = new taskList(userList.name, userList.color);
//     for (let task of userList.list) {
//         tempObj.addTask(
//             new Task(
//                 task.title, 
//                 task.desc, 
//                 task.dueDate, 
//                 task.pinned, 
//                 task.completed
//                 ));
//     }
//     userLists.push(tempObj);
// }


const DOMStuff = {
    update() {
        this.clear();
        const target = document.querySelector('main');
        let index = 0;
        for (let list of userLists) {
            const tempList = this.generateTaskListEl(list);
            tempList.dataset.index = index++;
            target.append(tempList)
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
    // Maybe seperate into two functions, where one fills in data
    // and another generates the DOM structure
    generateTaskListEl(taskList) {
        const taskListEl = document.createElement('div');
        const name = document.createElement('h1');
        name.textContent = taskList.name;
        const list = document.createElement('div');
        list.classList.add('list-container');
        // Loop through tasks and populate the list
        let index = 0;
        for (let task of taskList.list) {
            const tempTaskEl = this.generateTaskEl(
                task.title, 
                task.description, 
                task.dueDate, 
                task.pinned, 
                task.completed
                );
            // Add an index dataset
            tempTaskEl.dataset.index = index++;
            list.appendChild(tempTaskEl);        
        }
        taskListEl.append(name, list);

        // Add creation form
        const template = document.querySelector('#create-form');
        const clone = template.content.cloneNode(true);
        const createButton = clone.querySelector('#create-button');
        const form = clone.querySelector('form');
        createButton.addEventListener('click', 
            (event)=>{handleCreate(event, form)});
        taskListEl.appendChild(clone);
        return taskListEl;
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
    const targetTaskIndex = event.target.parentNode.dataset.index;
    const targetListIndex = event.target.parentNode.parentNode.parentNode.dataset.index
    const targetTaskObject = userLists[targetListIndex].getTask(targetTaskIndex);
    targetTaskObject.toggleCompleted();
    // DOM portion of event handler
    DOMStuff.toggleCompleted(event.target);
    DOMStuff.update();
    _storageController__WEBPACK_IMPORTED_MODULE_2__.storageController.storeUserLists(userLists);
}
function handleTogglePinned(event) {
    const targetTaskIndex = event.target.parentNode.dataset.index;
    const targetListIndex = event.target.parentNode.parentNode.parentNode.dataset.index
    const targetTaskObject = userLists[targetListIndex].getTask(targetTaskIndex);
    targetTaskObject.togglePinned();
    // DOM portion of event handler
    DOMStuff.togglePinned(event.target);
    DOMStuff.update();
    _storageController__WEBPACK_IMPORTED_MODULE_2__.storageController.storeUserLists(userLists);
}
function handleCreate(event, form) {
        // Take the form data and create a new list task
        const formData = new FormData(form);
        if (!formData.get('title')) {
            return;
        }
        const newTask = new _taskList__WEBPACK_IMPORTED_MODULE_0__.Task(
            formData.get('title'),
            formData.get('desc'),
            'filler date',
            false,
            false
        )
        // Add the task to the list and update
        const targetListIndex = form.parentNode.dataset.index;
        userLists[targetListIndex].addTask(newTask);
        DOMStuff.update();
        _storageController__WEBPACK_IMPORTED_MODULE_2__.storageController.storeUserLists(userLists);
    }
function handleExpandTask(event) {
    const taskData = event.target.parentNode.querySelector('.task-content');

    console.log(taskData);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ04wQztBQUNSO0FBQ21COztBQUVyRDtBQUNBO0FBQ0EsSUFBSSxpRUFBaUI7QUFDckIsMEJBQTBCLGlFQUFpQjtBQUMzQztBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsK0NBQVE7QUFDaEM7QUFDQTtBQUNBLGdCQUFnQiwyQ0FBSTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsMEJBQTBCO0FBQ2hEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlFQUFpQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlFQUFpQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwyQ0FBSTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlCO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxrQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLy4vc3JjL3N0b3JhZ2VDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3Rhc2tMaXN0LmpzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZXJEYXRhIGZyb20gJy4vdGVzdC5qc29uJztcbmNvbnN0IHN0b3JhZ2VDb250cm9sbGVyID0ge1xuICAgIHN0b3JlVXNlckxpc3RzKHVzZXJMaXN0cykge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlEYXRhJywgSlNPTi5zdHJpbmdpZnkodXNlckxpc3RzKSk7XG4gICAgfSxcbiAgICBnZXRVc2VyTGlzdHMoKSB7XG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm15RGF0YVwiKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7c3RvcmFnZUNvbnRyb2xsZXJ9OyIsImNsYXNzIHRhc2tMaXN0IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBjb2xvcikge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmNvbG9yID0gJ3JlZCc7XG4gICAgICAgIHRoaXMubGlzdCA9IFtdO1xuICAgIH1cbiAgICBhZGRUYXNrKHRhc2spIHtcbiAgICAgICAgdGhpcy5saXN0LnB1c2godGFzayk7XG4gICAgfVxuICAgIHJlbW92ZVRhc2soaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgICBnZXRUYXNrKGluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxpc3RbaW5kZXhdO1xuICAgIH1cbn1cblxuXG5cbmNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbj0nJywgZHVlRGF0ZT0nJywgcGlubmVkPWZhbHNlLCBjb21wbGV0ZWQ9ZmFsc2UpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucGlubmVkID0gcGlubmVkO1xuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcbiAgICB9XG4gICAgaXNDb21wbGV0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlZDtcbiAgICB9XG4gICAgdG9nZ2xlQ29tcGxldGVkKCkge1xuICAgICAgICBjb25zdCBvcHBvc2l0ZSA9ICEodGhpcy5jb21wbGV0ZWQpO1xuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IG9wcG9zaXRlO1xuICAgIH1cbiAgICB0b2dnbGVQaW5uZWQoKSB7XG4gICAgICAgIGNvbnN0IG9wcG9zaXRlID0gISh0aGlzLnBpbm5lZCk7XG4gICAgICAgIHRoaXMucGlubmVkID0gb3Bwb3NpdGU7XG4gICAgfVxufVxuXG5leHBvcnQge3Rhc2tMaXN0LCBUYXNrfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHt0YXNrTGlzdCwgVGFza30gZnJvbSBcIi4vdGFza0xpc3RcIjtcbmltcG9ydCB0ZXN0SlNPTiBmcm9tIFwiLi90ZXN0Lmpzb25cIlxuaW1wb3J0IHtzdG9yYWdlQ29udHJvbGxlcn0gZnJvbSAnLi9zdG9yYWdlQ29udHJvbGxlcidcblxuLy8gRmV0Y2ggdGhlIHVzZXIgZGF0YVxubGV0IHVzZXJEYXRhO1xuaWYgKHN0b3JhZ2VDb250cm9sbGVyLmdldFVzZXJMaXN0cygpKSB7XG4gICAgdXNlckRhdGEgPSBKU09OLnBhcnNlKHN0b3JhZ2VDb250cm9sbGVyLmdldFVzZXJMaXN0cygpKVxufVxuY29uc29sZS5sb2codXNlckRhdGEpO1xuXG5jb25zdCB1c2VyTGlzdHMgPSBbXTtcbmZvciAobGV0IHVzZXJMaXN0IG9mIHVzZXJEYXRhKSB7XG4gICAgY29uc3QgdGVtcE9iaiA9IG5ldyB0YXNrTGlzdCh1c2VyTGlzdC5uYW1lLCB1c2VyTGlzdC5jb2xvcik7XG4gICAgZm9yIChsZXQgdGFzayBvZiB1c2VyTGlzdC5saXN0KSB7XG4gICAgICAgIHRlbXBPYmouYWRkVGFzayhcbiAgICAgICAgICAgIG5ldyBUYXNrKFxuICAgICAgICAgICAgICAgIHRhc2sudGl0bGUsIFxuICAgICAgICAgICAgICAgIHRhc2suZGVzYywgXG4gICAgICAgICAgICAgICAgdGFzay5kdWVEYXRlLCBcbiAgICAgICAgICAgICAgICB0YXNrLnBpbm5lZCwgXG4gICAgICAgICAgICAgICAgdGFzay5jb21wbGV0ZWRcbiAgICAgICAgICAgICAgICApKTtcbiAgICB9XG4gICAgdXNlckxpc3RzLnB1c2godGVtcE9iaik7XG59XG5jb25zb2xlLmxvZyh1c2VyTGlzdHMpO1xuXG4vLyBjb25zb2xlLmxvZyh0ZXN0SlNPTi51c2VyTGlzdHMpO1xuLy8gY29uc3QgdXNlckxpc3RzID0gW107XG4vLyBmb3IgKGxldCB1c2VyTGlzdCBvZiB0ZXN0SlNPTi51c2VyTGlzdHMpIHtcbi8vICAgICBjb25zdCB0ZW1wT2JqID0gbmV3IHRhc2tMaXN0KHVzZXJMaXN0Lm5hbWUsIHVzZXJMaXN0LmNvbG9yKTtcbi8vICAgICBmb3IgKGxldCB0YXNrIG9mIHVzZXJMaXN0Lmxpc3QpIHtcbi8vICAgICAgICAgdGVtcE9iai5hZGRUYXNrKFxuLy8gICAgICAgICAgICAgbmV3IFRhc2soXG4vLyAgICAgICAgICAgICAgICAgdGFzay50aXRsZSwgXG4vLyAgICAgICAgICAgICAgICAgdGFzay5kZXNjLCBcbi8vICAgICAgICAgICAgICAgICB0YXNrLmR1ZURhdGUsIFxuLy8gICAgICAgICAgICAgICAgIHRhc2sucGlubmVkLCBcbi8vICAgICAgICAgICAgICAgICB0YXNrLmNvbXBsZXRlZFxuLy8gICAgICAgICAgICAgICAgICkpO1xuLy8gICAgIH1cbi8vICAgICB1c2VyTGlzdHMucHVzaCh0ZW1wT2JqKTtcbi8vIH1cblxuXG5jb25zdCBET01TdHVmZiA9IHtcbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgICAgICBsZXQgaW5kZXggPSAwO1xuICAgICAgICBmb3IgKGxldCBsaXN0IG9mIHVzZXJMaXN0cykge1xuICAgICAgICAgICAgY29uc3QgdGVtcExpc3QgPSB0aGlzLmdlbmVyYXRlVGFza0xpc3RFbChsaXN0KTtcbiAgICAgICAgICAgIHRlbXBMaXN0LmRhdGFzZXQuaW5kZXggPSBpbmRleCsrO1xuICAgICAgICAgICAgdGFyZ2V0LmFwcGVuZCh0ZW1wTGlzdClcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICAgICAgd2hpbGUgKHRhcmdldC5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgICAgIHRhcmdldC5yZW1vdmVDaGlsZCh0YXJnZXQuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGdlbmVyYXRlVGFza0VsKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcGlubmVkLCBjb21wbGV0ZWQpIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSB0aGUgZWxlbWVudHNcbiAgICAgICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IHRvZ2dsZUNvbXBsZXRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgY29uc3QgdG9nZ2xlUGlubmVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBjb25zdCB0YXNrQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3QgdG9nZ2xlRXhwYW5kZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb25FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGNvbnN0IGR1ZURhdGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIC8vIEFkZCB0aGUgY2xhc3Nlc1xuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgdG9nZ2xlQ29tcGxldGVkLmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZS1jb21wbGV0ZWQnLCAnaWNvbicpO1xuICAgICAgICAgICAgdG9nZ2xlUGlubmVkLmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZS1waW5uZWQnLCAnaWNvbicpO1xuICAgICAgICAgICAgdGFza0NvbnRlbnQuY2xhc3NMaXN0LmFkZCgndGFzay1jb250ZW50JylcbiAgICAgICAgICAgIHRpdGxlRWwuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uRWwuY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nLCAnaGlkZGVuJywgJ2hpZGVhYmxlJyk7XG4gICAgICAgICAgICBkdWVEYXRlRWwuY2xhc3NMaXN0LmFkZCgnZHVlLWRhdGUnLCAnaGlkZGVuJywgJ2hpZGVhYmxlJyk7XG4gICAgICAgICAgICB0b2dnbGVFeHBhbmRlZC5jbGFzc0xpc3QuYWRkKCdpY29uJylcbiAgICAgICAgICAgIC8vIFBpbm5lZC9ub3QgcGlubmVkXG4gICAgICAgICAgICBpZiAocGlubmVkKSB7XG4gICAgICAgICAgICAgICAgdG9nZ2xlUGlubmVkLmNsYXNzTGlzdC5hZGQoJ3Bpbm5lZCcpO1xuICAgICAgICAgICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncGlubmVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBDb21wbGV0ZWQvbm90IGNvbXBsZXRlZFxuICAgICAgICAgICAgaWYgKGNvbXBsZXRlZCkge1xuICAgICAgICAgICAgICAgIHRvZ2dsZUNvbXBsZXRlZC5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQnKTtcbiAgICAgICAgICAgICAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRmlsbCB0aGUgZGF0YVxuICAgICAgICAgICAgdG9nZ2xlRXhwYW5kZWQudGV4dENvbnRlbnQgPSAnVic7XG4gICAgICAgICAgICB0aXRsZUVsLnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbkVsLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG4gICAgICAgICAgICBkdWVEYXRlRWwudGV4dENvbnRlbnQgPSBkdWVEYXRlO1xuICAgICAgICAgICAgLy8gQXR0YWNoIGV2ZW50bGlzdGVuZXJzXG4gICAgICAgICAgICB0b2dnbGVDb21wbGV0ZWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVUb2dnbGVDb21wbGV0ZWQpO1xuICAgICAgICAgICAgdG9nZ2xlUGlubmVkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlVG9nZ2xlUGlubmVkKTtcbiAgICAgICAgICAgIHRvZ2dsZUV4cGFuZGVkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlRXhwYW5kVGFzayk7XG4gICAgICAgICAgICAvLyBBdHRhY2ggdGhlIGVsZW1lbnRzXG4gICAgICAgICAgICB0YXNrQ29udGVudC5hcHBlbmQodGl0bGVFbCwgZGVzY3JpcHRpb25FbCwgZHVlRGF0ZUVsKTtcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kKHRvZ2dsZUNvbXBsZXRlZCwgdG9nZ2xlUGlubmVkLCB0YXNrQ29udGVudCwgdG9nZ2xlRXhwYW5kZWQpO1xuICAgICAgICAgICAgcmV0dXJuIHRhc2tDb250YWluZXI7XG4gICAgfSxcbiAgICAvLyBNYXliZSBzZXBlcmF0ZSBpbnRvIHR3byBmdW5jdGlvbnMsIHdoZXJlIG9uZSBmaWxscyBpbiBkYXRhXG4gICAgLy8gYW5kIGFub3RoZXIgZ2VuZXJhdGVzIHRoZSBET00gc3RydWN0dXJlXG4gICAgZ2VuZXJhdGVUYXNrTGlzdEVsKHRhc2tMaXN0KSB7XG4gICAgICAgIGNvbnN0IHRhc2tMaXN0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSB0YXNrTGlzdC5uYW1lO1xuICAgICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxpc3QuY2xhc3NMaXN0LmFkZCgnbGlzdC1jb250YWluZXInKTtcbiAgICAgICAgLy8gTG9vcCB0aHJvdWdoIHRhc2tzIGFuZCBwb3B1bGF0ZSB0aGUgbGlzdFxuICAgICAgICBsZXQgaW5kZXggPSAwO1xuICAgICAgICBmb3IgKGxldCB0YXNrIG9mIHRhc2tMaXN0Lmxpc3QpIHtcbiAgICAgICAgICAgIGNvbnN0IHRlbXBUYXNrRWwgPSB0aGlzLmdlbmVyYXRlVGFza0VsKFxuICAgICAgICAgICAgICAgIHRhc2sudGl0bGUsIFxuICAgICAgICAgICAgICAgIHRhc2suZGVzY3JpcHRpb24sIFxuICAgICAgICAgICAgICAgIHRhc2suZHVlRGF0ZSwgXG4gICAgICAgICAgICAgICAgdGFzay5waW5uZWQsIFxuICAgICAgICAgICAgICAgIHRhc2suY29tcGxldGVkXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIC8vIEFkZCBhbiBpbmRleCBkYXRhc2V0XG4gICAgICAgICAgICB0ZW1wVGFza0VsLmRhdGFzZXQuaW5kZXggPSBpbmRleCsrO1xuICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZCh0ZW1wVGFza0VsKTsgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIHRhc2tMaXN0RWwuYXBwZW5kKG5hbWUsIGxpc3QpO1xuXG4gICAgICAgIC8vIEFkZCBjcmVhdGlvbiBmb3JtXG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZS1mb3JtJyk7XG4gICAgICAgIGNvbnN0IGNsb25lID0gdGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIGNvbnN0IGNyZWF0ZUJ1dHRvbiA9IGNsb25lLnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUtYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBjbG9uZS5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gICAgICAgIGNyZWF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFxuICAgICAgICAgICAgKGV2ZW50KT0+e2hhbmRsZUNyZWF0ZShldmVudCwgZm9ybSl9KTtcbiAgICAgICAgdGFza0xpc3RFbC5hcHBlbmRDaGlsZChjbG9uZSk7XG4gICAgICAgIHJldHVybiB0YXNrTGlzdEVsO1xuICAgIH0sXG4gICAgdG9nZ2xlQ29tcGxldGVkKHRvZ2dsZUNvbXBsZXRlZEVsKSB7XG4gICAgICAgIHRvZ2dsZUNvbXBsZXRlZEVsLmNsYXNzTGlzdC50b2dnbGUoJ2NvbXBsZXRlZCcpO1xuICAgICAgICAvL3RvZ2dsZUNvbXBsZXRlZEVsLnBhcmVudE5vZGUuY2xhc3NMaXN0LnRvZ2dsZSgnY29tcGxldGVkJylcbiAgICB9LFxuICAgIHRvZ2dsZVBpbm5lZCh0b2dnbGVQaW5uZWRFbCkge1xuICAgICAgICB0b2dnbGVQaW5uZWRFbC5jbGFzc0xpc3QudG9nZ2xlKCdwaW5uZWQnKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVRvZ2dsZUNvbXBsZXRlZChldmVudCkge1xuICAgIGNvbnN0IHRhcmdldFRhc2tJbmRleCA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmRhdGFzZXQuaW5kZXg7XG4gICAgY29uc3QgdGFyZ2V0TGlzdEluZGV4ID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmRhdGFzZXQuaW5kZXhcbiAgICBjb25zdCB0YXJnZXRUYXNrT2JqZWN0ID0gdXNlckxpc3RzW3RhcmdldExpc3RJbmRleF0uZ2V0VGFzayh0YXJnZXRUYXNrSW5kZXgpO1xuICAgIHRhcmdldFRhc2tPYmplY3QudG9nZ2xlQ29tcGxldGVkKCk7XG4gICAgLy8gRE9NIHBvcnRpb24gb2YgZXZlbnQgaGFuZGxlclxuICAgIERPTVN0dWZmLnRvZ2dsZUNvbXBsZXRlZChldmVudC50YXJnZXQpO1xuICAgIERPTVN0dWZmLnVwZGF0ZSgpO1xuICAgIHN0b3JhZ2VDb250cm9sbGVyLnN0b3JlVXNlckxpc3RzKHVzZXJMaXN0cyk7XG59XG5mdW5jdGlvbiBoYW5kbGVUb2dnbGVQaW5uZWQoZXZlbnQpIHtcbiAgICBjb25zdCB0YXJnZXRUYXNrSW5kZXggPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5kYXRhc2V0LmluZGV4O1xuICAgIGNvbnN0IHRhcmdldExpc3RJbmRleCA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5kYXRhc2V0LmluZGV4XG4gICAgY29uc3QgdGFyZ2V0VGFza09iamVjdCA9IHVzZXJMaXN0c1t0YXJnZXRMaXN0SW5kZXhdLmdldFRhc2sodGFyZ2V0VGFza0luZGV4KTtcbiAgICB0YXJnZXRUYXNrT2JqZWN0LnRvZ2dsZVBpbm5lZCgpO1xuICAgIC8vIERPTSBwb3J0aW9uIG9mIGV2ZW50IGhhbmRsZXJcbiAgICBET01TdHVmZi50b2dnbGVQaW5uZWQoZXZlbnQudGFyZ2V0KTtcbiAgICBET01TdHVmZi51cGRhdGUoKTtcbiAgICBzdG9yYWdlQ29udHJvbGxlci5zdG9yZVVzZXJMaXN0cyh1c2VyTGlzdHMpO1xufVxuZnVuY3Rpb24gaGFuZGxlQ3JlYXRlKGV2ZW50LCBmb3JtKSB7XG4gICAgICAgIC8vIFRha2UgdGhlIGZvcm0gZGF0YSBhbmQgY3JlYXRlIGEgbmV3IGxpc3QgdGFza1xuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcbiAgICAgICAgaWYgKCFmb3JtRGF0YS5nZXQoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdUYXNrID0gbmV3IFRhc2soXG4gICAgICAgICAgICBmb3JtRGF0YS5nZXQoJ3RpdGxlJyksXG4gICAgICAgICAgICBmb3JtRGF0YS5nZXQoJ2Rlc2MnKSxcbiAgICAgICAgICAgICdmaWxsZXIgZGF0ZScsXG4gICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgIClcbiAgICAgICAgLy8gQWRkIHRoZSB0YXNrIHRvIHRoZSBsaXN0IGFuZCB1cGRhdGVcbiAgICAgICAgY29uc3QgdGFyZ2V0TGlzdEluZGV4ID0gZm9ybS5wYXJlbnROb2RlLmRhdGFzZXQuaW5kZXg7XG4gICAgICAgIHVzZXJMaXN0c1t0YXJnZXRMaXN0SW5kZXhdLmFkZFRhc2sobmV3VGFzayk7XG4gICAgICAgIERPTVN0dWZmLnVwZGF0ZSgpO1xuICAgICAgICBzdG9yYWdlQ29udHJvbGxlci5zdG9yZVVzZXJMaXN0cyh1c2VyTGlzdHMpO1xuICAgIH1cbmZ1bmN0aW9uIGhhbmRsZUV4cGFuZFRhc2soZXZlbnQpIHtcbiAgICBjb25zdCB0YXNrRGF0YSA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWNvbnRlbnQnKTtcblxuICAgIGNvbnNvbGUubG9nKHRhc2tEYXRhKTtcbiAgICBmb3IgKGxldCBkYXRhIG9mIHRhc2tEYXRhLmNoaWxkTm9kZXMpIHtcbiAgICAgICAgLy8gT25seSBoaWRlIHRoZSB0YXNrIGRhdGEgdGhhdCBpcyBoaWRlYWJsZVxuICAgICAgICBpZiAoZGF0YS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGVhYmxlJykpIHtcbiAgICAgICAgICAgIGRhdGEuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuRE9NU3R1ZmYudXBkYXRlKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9