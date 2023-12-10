/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

module.exports = JSON.parse('{"userLists":[{"name":"General","color":"blue","list":[{"title":"Wash the car","desc":"Use turtle wax to get a nice finish","dueDate":"Tuesday night","pinned":true,"completed":false},{"title":"Feed the dogs","desc":"Mix wet and dry food","dueDate":"Tonight","pinned":false,"completed":true},{"title":"Make Dinner","desc":"Cook something new","dueDate":"9:00PM","pinned":false,"completed":false}]}]}');

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



// Fetch the user data
console.log(_test_json__WEBPACK_IMPORTED_MODULE_1__.userLists);
const userLists = [];
for (let userList of _test_json__WEBPACK_IMPORTED_MODULE_1__.userLists) {
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
    //StorageController.update()
}
function handleTogglePinned(event) {
    const targetTaskIndex = event.target.parentNode.dataset.index;
    const targetListIndex = event.target.parentNode.parentNode.parentNode.dataset.index
    const targetTaskObject = userLists[targetListIndex].getTask(targetTaskIndex);
    targetTaskObject.togglePinned();
    // DOM portion of event handler
    DOMStuff.togglePinned(event.target);
    DOMStuff.update();
    //StorageController.update()
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
        testList.addTask(newTask);
        DOMStuff.update();
        // update storage
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

// const DOMStuff = {
// function handleCreate() {
//     // Take the form data and create a new list task
//     const formEl = document.querySelector('form');
//     const formData = new FormData(formEl);
//     if (!formData.get('title')) {
//         return;
//     }
//     const newtask = new listtask(
//         formData.get('type'),
//         formData.get('title'),
//         formData.get('desc'),
//         'filler date'
//     )
//     // Add the task to the list and update
//     toDoList.addListtask(newtask);
//     DOMStuff.clearAll();
//     DOMStuff.updateAll();
//     // update storage
// }

// function handleExpandForm() {
//     const expandedForm = document.querySelector('.expanded-form');
//     expandedForm.classList.toggle('hidden');
//     // Toggle expand button behavior
//     const expandButton = document.querySelector('#expand-button');
//     if (expandButton.textContent == 'Expand') {
//         expandButton.textContent = 'Minimize';
//     }
//     else {
//         expandButton.textContent = 'Expand'
//     }
// }

// function handleexpandTask(event) {
//     const targettask = event.target.parentNode;
//     for (let task of targettask.querySelector('.task-content').childNodes) {
//         // Only hide the task properties that are hideable
//         if (task.classList.contains('hideable')) {
//             task.classList.toggle('hidden');
//         }
//     }
// }
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3RDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ04wQztBQUNSOztBQUVsQztBQUNBLFlBQVksaURBQWtCO0FBQzlCO0FBQ0EscUJBQXFCLGlEQUFrQjtBQUN2Qyx3QkFBd0IsK0NBQVE7QUFDaEM7QUFDQTtBQUNBLGdCQUFnQiwyQ0FBSTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDBCQUEwQjtBQUNoRDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDJDQUFJO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdGFza0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyB0YXNrTGlzdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgY29sb3IpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5jb2xvciA9ICdyZWQnO1xuICAgICAgICB0aGlzLmxpc3QgPSBbXTtcbiAgICB9XG4gICAgYWRkVGFzayh0YXNrKSB7XG4gICAgICAgIHRoaXMubGlzdC5wdXNoKHRhc2spO1xuICAgIH1cbiAgICByZW1vdmVUYXNrKGluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gICAgZ2V0VGFzayhpbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy5saXN0W2luZGV4XTtcbiAgICB9XG59XG5cblxuXG5jbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb249JycsIGR1ZURhdGU9JycsIHBpbm5lZD1mYWxzZSwgY29tcGxldGVkPWZhbHNlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnBpbm5lZCA9IHBpbm5lZDtcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XG4gICAgfVxuICAgIGlzQ29tcGxldGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZWQ7XG4gICAgfVxuICAgIHRvZ2dsZUNvbXBsZXRlZCgpIHtcbiAgICAgICAgY29uc3Qgb3Bwb3NpdGUgPSAhKHRoaXMuY29tcGxldGVkKTtcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSBvcHBvc2l0ZTtcbiAgICB9XG4gICAgdG9nZ2xlUGlubmVkKCkge1xuICAgICAgICBjb25zdCBvcHBvc2l0ZSA9ICEodGhpcy5waW5uZWQpO1xuICAgICAgICB0aGlzLnBpbm5lZCA9IG9wcG9zaXRlO1xuICAgIH1cbn1cblxuZXhwb3J0IHt0YXNrTGlzdCwgVGFza30iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7dGFza0xpc3QsIFRhc2t9IGZyb20gXCIuL3Rhc2tMaXN0XCI7XG5pbXBvcnQgdGVzdEpTT04gZnJvbSBcIi4vdGVzdC5qc29uXCJcblxuLy8gRmV0Y2ggdGhlIHVzZXIgZGF0YVxuY29uc29sZS5sb2codGVzdEpTT04udXNlckxpc3RzKTtcbmNvbnN0IHVzZXJMaXN0cyA9IFtdO1xuZm9yIChsZXQgdXNlckxpc3Qgb2YgdGVzdEpTT04udXNlckxpc3RzKSB7XG4gICAgY29uc3QgdGVtcE9iaiA9IG5ldyB0YXNrTGlzdCh1c2VyTGlzdC5uYW1lLCB1c2VyTGlzdC5jb2xvcik7XG4gICAgZm9yIChsZXQgdGFzayBvZiB1c2VyTGlzdC5saXN0KSB7XG4gICAgICAgIHRlbXBPYmouYWRkVGFzayhcbiAgICAgICAgICAgIG5ldyBUYXNrKFxuICAgICAgICAgICAgICAgIHRhc2sudGl0bGUsIFxuICAgICAgICAgICAgICAgIHRhc2suZGVzYywgXG4gICAgICAgICAgICAgICAgdGFzay5kdWVEYXRlLCBcbiAgICAgICAgICAgICAgICB0YXNrLnBpbm5lZCwgXG4gICAgICAgICAgICAgICAgdGFzay5jb21wbGV0ZWRcbiAgICAgICAgICAgICAgICApKTtcbiAgICB9XG4gICAgdXNlckxpc3RzLnB1c2godGVtcE9iaik7XG59XG5cblxuY29uc3QgRE9NU3R1ZmYgPSB7XG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgZm9yIChsZXQgbGlzdCBvZiB1c2VyTGlzdHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHRlbXBMaXN0ID0gdGhpcy5nZW5lcmF0ZVRhc2tMaXN0RWwobGlzdCk7XG4gICAgICAgICAgICB0ZW1wTGlzdC5kYXRhc2V0LmluZGV4ID0gaW5kZXgrKztcbiAgICAgICAgICAgIHRhcmdldC5hcHBlbmQodGVtcExpc3QpXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNsZWFyKCkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gICAgICAgIHdoaWxlICh0YXJnZXQuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAgICAgICB0YXJnZXQucmVtb3ZlQ2hpbGQodGFyZ2V0LmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBnZW5lcmF0ZVRhc2tFbCh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHBpbm5lZCwgY29tcGxldGVkKSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgdGhlIGVsZW1lbnRzXG4gICAgICAgICAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCB0b2dnbGVDb21wbGV0ZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGNvbnN0IHRvZ2dsZVBpbm5lZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgY29uc3QgdGFza0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IHRvZ2dsZUV4cGFuZGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBjb25zdCB0aXRsZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBjb25zdCBkdWVEYXRlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAvLyBBZGQgdGhlIGNsYXNzZXNcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFzay1jb250YWluZXInKTtcbiAgICAgICAgICAgIHRvZ2dsZUNvbXBsZXRlZC5jbGFzc0xpc3QuYWRkKCd0b2dnbGUtY29tcGxldGVkJywgJ2ljb24nKTtcbiAgICAgICAgICAgIHRvZ2dsZVBpbm5lZC5jbGFzc0xpc3QuYWRkKCd0b2dnbGUtcGlubmVkJywgJ2ljb24nKTtcbiAgICAgICAgICAgIHRhc2tDb250ZW50LmNsYXNzTGlzdC5hZGQoJ3Rhc2stY29udGVudCcpXG4gICAgICAgICAgICB0aXRsZUVsLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbkVsLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJywgJ2hpZGRlbicsICdoaWRlYWJsZScpO1xuICAgICAgICAgICAgZHVlRGF0ZUVsLmNsYXNzTGlzdC5hZGQoJ2R1ZS1kYXRlJywgJ2hpZGRlbicsICdoaWRlYWJsZScpO1xuICAgICAgICAgICAgdG9nZ2xlRXhwYW5kZWQuY2xhc3NMaXN0LmFkZCgnaWNvbicpXG4gICAgICAgICAgICAvLyBQaW5uZWQvbm90IHBpbm5lZFxuICAgICAgICAgICAgaWYgKHBpbm5lZCkge1xuICAgICAgICAgICAgICAgIHRvZ2dsZVBpbm5lZC5jbGFzc0xpc3QuYWRkKCdwaW5uZWQnKTtcbiAgICAgICAgICAgICAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Bpbm5lZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQ29tcGxldGVkL25vdCBjb21wbGV0ZWRcbiAgICAgICAgICAgIGlmIChjb21wbGV0ZWQpIHtcbiAgICAgICAgICAgICAgICB0b2dnbGVDb21wbGV0ZWQuY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkJyk7XG4gICAgICAgICAgICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEZpbGwgdGhlIGRhdGFcbiAgICAgICAgICAgIHRvZ2dsZUV4cGFuZGVkLnRleHRDb250ZW50ID0gJ1YnO1xuICAgICAgICAgICAgdGl0bGVFbC50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgICAgICAgICAgZGVzY3JpcHRpb25FbC50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgZHVlRGF0ZUVsLnRleHRDb250ZW50ID0gZHVlRGF0ZTtcbiAgICAgICAgICAgIC8vIEF0dGFjaCBldmVudGxpc3RlbmVyc1xuICAgICAgICAgICAgdG9nZ2xlQ29tcGxldGVkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlVG9nZ2xlQ29tcGxldGVkKTtcbiAgICAgICAgICAgIHRvZ2dsZVBpbm5lZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVRvZ2dsZVBpbm5lZCk7XG4gICAgICAgICAgICB0b2dnbGVFeHBhbmRlZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUV4cGFuZFRhc2spO1xuICAgICAgICAgICAgLy8gQXR0YWNoIHRoZSBlbGVtZW50c1xuICAgICAgICAgICAgdGFza0NvbnRlbnQuYXBwZW5kKHRpdGxlRWwsIGRlc2NyaXB0aW9uRWwsIGR1ZURhdGVFbCk7XG4gICAgICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZCh0b2dnbGVDb21wbGV0ZWQsIHRvZ2dsZVBpbm5lZCwgdGFza0NvbnRlbnQsIHRvZ2dsZUV4cGFuZGVkKTtcbiAgICAgICAgICAgIHJldHVybiB0YXNrQ29udGFpbmVyO1xuICAgIH0sXG4gICAgLy8gTWF5YmUgc2VwZXJhdGUgaW50byB0d28gZnVuY3Rpb25zLCB3aGVyZSBvbmUgZmlsbHMgaW4gZGF0YVxuICAgIC8vIGFuZCBhbm90aGVyIGdlbmVyYXRlcyB0aGUgRE9NIHN0cnVjdHVyZVxuICAgIGdlbmVyYXRlVGFza0xpc3RFbCh0YXNrTGlzdCkge1xuICAgICAgICBjb25zdCB0YXNrTGlzdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICBuYW1lLnRleHRDb250ZW50ID0gdGFza0xpc3QubmFtZTtcbiAgICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsaXN0LmNsYXNzTGlzdC5hZGQoJ2xpc3QtY29udGFpbmVyJyk7XG4gICAgICAgIC8vIExvb3AgdGhyb3VnaCB0YXNrcyBhbmQgcG9wdWxhdGUgdGhlIGxpc3RcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgZm9yIChsZXQgdGFzayBvZiB0YXNrTGlzdC5saXN0KSB7XG4gICAgICAgICAgICBjb25zdCB0ZW1wVGFza0VsID0gdGhpcy5nZW5lcmF0ZVRhc2tFbChcbiAgICAgICAgICAgICAgICB0YXNrLnRpdGxlLCBcbiAgICAgICAgICAgICAgICB0YXNrLmRlc2NyaXB0aW9uLCBcbiAgICAgICAgICAgICAgICB0YXNrLmR1ZURhdGUsIFxuICAgICAgICAgICAgICAgIHRhc2sucGlubmVkLCBcbiAgICAgICAgICAgICAgICB0YXNrLmNvbXBsZXRlZFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAvLyBBZGQgYW4gaW5kZXggZGF0YXNldFxuICAgICAgICAgICAgdGVtcFRhc2tFbC5kYXRhc2V0LmluZGV4ID0gaW5kZXgrKztcbiAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQodGVtcFRhc2tFbCk7ICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICB0YXNrTGlzdEVsLmFwcGVuZChuYW1lLCBsaXN0KTtcblxuICAgICAgICAvLyBBZGQgY3JlYXRpb24gZm9ybVxuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUtZm9ybScpO1xuICAgICAgICBjb25zdCBjbG9uZSA9IHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBjb25zdCBjcmVhdGVCdXR0b24gPSBjbG9uZS5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlLWJ1dHRvbicpO1xuICAgICAgICBjb25zdCBmb3JtID0gY2xvbmUucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICAgICAgICBjcmVhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBcbiAgICAgICAgICAgIChldmVudCk9PntoYW5kbGVDcmVhdGUoZXZlbnQsIGZvcm0pfSk7XG4gICAgICAgIHRhc2tMaXN0RWwuYXBwZW5kQ2hpbGQoY2xvbmUpO1xuICAgICAgICByZXR1cm4gdGFza0xpc3RFbDtcbiAgICB9LFxuICAgIHRvZ2dsZUNvbXBsZXRlZCh0b2dnbGVDb21wbGV0ZWRFbCkge1xuICAgICAgICB0b2dnbGVDb21wbGV0ZWRFbC5jbGFzc0xpc3QudG9nZ2xlKCdjb21wbGV0ZWQnKTtcbiAgICAgICAgLy90b2dnbGVDb21wbGV0ZWRFbC5wYXJlbnROb2RlLmNsYXNzTGlzdC50b2dnbGUoJ2NvbXBsZXRlZCcpXG4gICAgfSxcbiAgICB0b2dnbGVQaW5uZWQodG9nZ2xlUGlubmVkRWwpIHtcbiAgICAgICAgdG9nZ2xlUGlubmVkRWwuY2xhc3NMaXN0LnRvZ2dsZSgncGlubmVkJyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVUb2dnbGVDb21wbGV0ZWQoZXZlbnQpIHtcbiAgICBjb25zdCB0YXJnZXRUYXNrSW5kZXggPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5kYXRhc2V0LmluZGV4O1xuICAgIGNvbnN0IHRhcmdldExpc3RJbmRleCA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5kYXRhc2V0LmluZGV4XG4gICAgY29uc3QgdGFyZ2V0VGFza09iamVjdCA9IHVzZXJMaXN0c1t0YXJnZXRMaXN0SW5kZXhdLmdldFRhc2sodGFyZ2V0VGFza0luZGV4KTtcbiAgICB0YXJnZXRUYXNrT2JqZWN0LnRvZ2dsZUNvbXBsZXRlZCgpO1xuICAgIC8vIERPTSBwb3J0aW9uIG9mIGV2ZW50IGhhbmRsZXJcbiAgICBET01TdHVmZi50b2dnbGVDb21wbGV0ZWQoZXZlbnQudGFyZ2V0KTtcbiAgICBET01TdHVmZi51cGRhdGUoKTtcbiAgICAvL1N0b3JhZ2VDb250cm9sbGVyLnVwZGF0ZSgpXG59XG5mdW5jdGlvbiBoYW5kbGVUb2dnbGVQaW5uZWQoZXZlbnQpIHtcbiAgICBjb25zdCB0YXJnZXRUYXNrSW5kZXggPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5kYXRhc2V0LmluZGV4O1xuICAgIGNvbnN0IHRhcmdldExpc3RJbmRleCA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5kYXRhc2V0LmluZGV4XG4gICAgY29uc3QgdGFyZ2V0VGFza09iamVjdCA9IHVzZXJMaXN0c1t0YXJnZXRMaXN0SW5kZXhdLmdldFRhc2sodGFyZ2V0VGFza0luZGV4KTtcbiAgICB0YXJnZXRUYXNrT2JqZWN0LnRvZ2dsZVBpbm5lZCgpO1xuICAgIC8vIERPTSBwb3J0aW9uIG9mIGV2ZW50IGhhbmRsZXJcbiAgICBET01TdHVmZi50b2dnbGVQaW5uZWQoZXZlbnQudGFyZ2V0KTtcbiAgICBET01TdHVmZi51cGRhdGUoKTtcbiAgICAvL1N0b3JhZ2VDb250cm9sbGVyLnVwZGF0ZSgpXG59XG5mdW5jdGlvbiBoYW5kbGVDcmVhdGUoZXZlbnQsIGZvcm0pIHtcbiAgICAgICAgLy8gVGFrZSB0aGUgZm9ybSBkYXRhIGFuZCBjcmVhdGUgYSBuZXcgbGlzdCB0YXNrXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xuICAgICAgICBpZiAoIWZvcm1EYXRhLmdldCgndGl0bGUnKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayhcbiAgICAgICAgICAgIGZvcm1EYXRhLmdldCgndGl0bGUnKSxcbiAgICAgICAgICAgIGZvcm1EYXRhLmdldCgnZGVzYycpLFxuICAgICAgICAgICAgJ2ZpbGxlciBkYXRlJyxcbiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgKVxuICAgICAgICAvLyBBZGQgdGhlIHRhc2sgdG8gdGhlIGxpc3QgYW5kIHVwZGF0ZVxuICAgICAgICB0ZXN0TGlzdC5hZGRUYXNrKG5ld1Rhc2spO1xuICAgICAgICBET01TdHVmZi51cGRhdGUoKTtcbiAgICAgICAgLy8gdXBkYXRlIHN0b3JhZ2VcbiAgICB9XG5mdW5jdGlvbiBoYW5kbGVFeHBhbmRUYXNrKGV2ZW50KSB7XG4gICAgY29uc3QgdGFza0RhdGEgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcudGFzay1jb250ZW50Jyk7XG5cbiAgICBjb25zb2xlLmxvZyh0YXNrRGF0YSk7XG4gICAgZm9yIChsZXQgZGF0YSBvZiB0YXNrRGF0YS5jaGlsZE5vZGVzKSB7XG4gICAgICAgIC8vIE9ubHkgaGlkZSB0aGUgdGFzayBkYXRhIHRoYXQgaXMgaGlkZWFibGVcbiAgICAgICAgaWYgKGRhdGEuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRlYWJsZScpKSB7XG4gICAgICAgICAgICBkYXRhLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbkRPTVN0dWZmLnVwZGF0ZSgpO1xuXG4vLyBjb25zdCBET01TdHVmZiA9IHtcbi8vIGZ1bmN0aW9uIGhhbmRsZUNyZWF0ZSgpIHtcbi8vICAgICAvLyBUYWtlIHRoZSBmb3JtIGRhdGEgYW5kIGNyZWF0ZSBhIG5ldyBsaXN0IHRhc2tcbi8vICAgICBjb25zdCBmb3JtRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4vLyAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybUVsKTtcbi8vICAgICBpZiAoIWZvcm1EYXRhLmdldCgndGl0bGUnKSkge1xuLy8gICAgICAgICByZXR1cm47XG4vLyAgICAgfVxuLy8gICAgIGNvbnN0IG5ld3Rhc2sgPSBuZXcgbGlzdHRhc2soXG4vLyAgICAgICAgIGZvcm1EYXRhLmdldCgndHlwZScpLFxuLy8gICAgICAgICBmb3JtRGF0YS5nZXQoJ3RpdGxlJyksXG4vLyAgICAgICAgIGZvcm1EYXRhLmdldCgnZGVzYycpLFxuLy8gICAgICAgICAnZmlsbGVyIGRhdGUnXG4vLyAgICAgKVxuLy8gICAgIC8vIEFkZCB0aGUgdGFzayB0byB0aGUgbGlzdCBhbmQgdXBkYXRlXG4vLyAgICAgdG9Eb0xpc3QuYWRkTGlzdHRhc2sobmV3dGFzayk7XG4vLyAgICAgRE9NU3R1ZmYuY2xlYXJBbGwoKTtcbi8vICAgICBET01TdHVmZi51cGRhdGVBbGwoKTtcbi8vICAgICAvLyB1cGRhdGUgc3RvcmFnZVxuLy8gfVxuXG4vLyBmdW5jdGlvbiBoYW5kbGVFeHBhbmRGb3JtKCkge1xuLy8gICAgIGNvbnN0IGV4cGFuZGVkRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5leHBhbmRlZC1mb3JtJyk7XG4vLyAgICAgZXhwYW5kZWRGb3JtLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuLy8gICAgIC8vIFRvZ2dsZSBleHBhbmQgYnV0dG9uIGJlaGF2aW9yXG4vLyAgICAgY29uc3QgZXhwYW5kQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2V4cGFuZC1idXR0b24nKTtcbi8vICAgICBpZiAoZXhwYW5kQnV0dG9uLnRleHRDb250ZW50ID09ICdFeHBhbmQnKSB7XG4vLyAgICAgICAgIGV4cGFuZEJ1dHRvbi50ZXh0Q29udGVudCA9ICdNaW5pbWl6ZSc7XG4vLyAgICAgfVxuLy8gICAgIGVsc2Uge1xuLy8gICAgICAgICBleHBhbmRCdXR0b24udGV4dENvbnRlbnQgPSAnRXhwYW5kJ1xuLy8gICAgIH1cbi8vIH1cblxuLy8gZnVuY3Rpb24gaGFuZGxlZXhwYW5kVGFzayhldmVudCkge1xuLy8gICAgIGNvbnN0IHRhcmdldHRhc2sgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZTtcbi8vICAgICBmb3IgKGxldCB0YXNrIG9mIHRhcmdldHRhc2sucXVlcnlTZWxlY3RvcignLnRhc2stY29udGVudCcpLmNoaWxkTm9kZXMpIHtcbi8vICAgICAgICAgLy8gT25seSBoaWRlIHRoZSB0YXNrIHByb3BlcnRpZXMgdGhhdCBhcmUgaGlkZWFibGVcbi8vICAgICAgICAgaWYgKHRhc2suY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRlYWJsZScpKSB7XG4vLyAgICAgICAgICAgICB0YXNrLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==