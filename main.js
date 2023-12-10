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

module.exports = JSON.parse('{"taskList":{"name":"General","color":"blue","list":[{"title":"Wash the car","desc":"Use turtle wax to get a nice finish","dueDate":"Tuesday night","pinned":true,"completed":false},{"title":"Feed the dogs","desc":"Mix wet and dry food","dueDate":"Tonight","pinned":false,"completed":true},{"title":"Make Dinner","desc":"Cook something new","dueDate":"9:00PM","pinned":false,"completed":false}]}}');

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
console.log(_test_json__WEBPACK_IMPORTED_MODULE_1__);
const testList = new _taskList__WEBPACK_IMPORTED_MODULE_0__.taskList(_test_json__WEBPACK_IMPORTED_MODULE_1__.taskList.name, _test_json__WEBPACK_IMPORTED_MODULE_1__.taskList.color);
for (let task of _test_json__WEBPACK_IMPORTED_MODULE_1__.taskList.list) {
    testList.addTask(
        new _taskList__WEBPACK_IMPORTED_MODULE_0__.Task(
            task.title, 
            task.desc, 
            task.dueDate, 
            task.pinned, 
            task.completed
            ));
}
console.log(testList);

const DOMStuff = {
    update() {
        this.clear();
        const target = document.querySelector('main');
        target.append(this.generateTaskListEl(testList));
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
            const expandTask = document.createElement('button');
            const titleEl = document.createElement('h2');
            const descriptionEl = document.createElement('p');
            const dueDateEl = document.createElement('p');
            // Add the classes
            taskContainer.classList.add('task-container');
            toggleCompleted.classList.add('toggle-completed', 'icon');
            togglePinned.classList.add('toggle-pinned', 'icon');
            taskContent.classList.add('task-content')
            titleEl.classList.add('title');
            descriptionEl.classList.add('description', 'hidden');
            dueDateEl.classList.add('due-date', 'hidden');
            expandTask.classList.add('icon')

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
            expandTask.textContent = 'V';
            titleEl.textContent = title;
            descriptionEl.textContent = description;
            dueDateEl.textContent = dueDate;
            // Attach eventlisteners
            toggleCompleted.addEventListener('click', handleToggleCompleted);
            togglePinned.addEventListener('click', handleTogglePinned);
            //expandTask.addEventListener('click', handleExpandTask);
            // Attach the elements
            taskContent.append(titleEl, descriptionEl, dueDateEl);
            taskContainer.append(toggleCompleted, togglePinned, taskContent, expandTask);
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
    // Will need to change out testList to ???
    const targetTaskObject = testList.getTask(targetTaskIndex)
    targetTaskObject.toggleCompleted();
    // DOM portion of event handler
    DOMStuff.toggleCompleted(event.target);
    DOMStuff.update();
    //StorageController.update()
}
function handleTogglePinned(event) {
    const targetTaskIndex = event.target.parentNode.dataset.index;
    // Will need to change out testList to ???
    const targetTaskObject = testList.getTask(targetTaskIndex)
    targetTaskObject.togglePinned();
    // DOM portion of event handler
    DOMStuff.togglePinned(event.target);
    DOMStuff.update();
    //StorageController.update()
}


DOMStuff.update();

// const DOMStuff = {
//     update(type) {
//         const container = document.querySelector(`#${type}`);
//         let i = 0;
//         for (let task of toDoList[type]) {
//             const temp = this.generateListtask(
//                 task.title, 
//                 task.desc, 
//                 task.dueDate
//             )
//             temp.dataset.index = i++;
//             temp.dataset.type = type;
//             container.appendChild(temp);
//         }
//     },
//     updateAll() {
//         this.update('general');
//         this.update('priority');
//         this.update('completed');
//     },
//     clearAll() {
//         const listContainers = document.querySelectorAll('.list-container');
//         for (let listContainer of listContainers) {
//             while (listContainer.hasChildNodes()) {
//                 listContainer.removeChild(listContainer.firstChild)
//             }
//         }
//     },

// //import {StorageController} from "./StorageController";
// function handletoggleCompleted(event) {
//     const taskIndex = event.target.parentNode.dataset.index;
//     const taskType = event.target.parentNode.dataset.type;
//     // remove task from list, change it's type, then readd it
//     const task = toDoList.removeListtask(taskType, taskIndex);
//     // Allow toggling between completed/uncompleted
//     if (taskType == 'completed') {
//         task.changeType('general');
//     }
//     else {
//         task.changeType('completed');
    
//     }
//     toDoList.addListtask(task);
//     DOMStuff.clearAll();
//     DOMStuff.updateAll();
//     //StorageController.update();
// }
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

// const createButton = document.querySelector('#create-button');
// createButton.addEventListener('click', handleCreate);
// const expandForm = document.querySelector('#expand-button');
// expandForm.addEventListener('click', handleExpandForm);
// DOMStuff.updateAll();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZG8vLi9zcmMvdGFza0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyB0YXNrTGlzdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgY29sb3IpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5jb2xvciA9ICdyZWQnO1xuICAgICAgICB0aGlzLmxpc3QgPSBbXTtcbiAgICB9XG4gICAgYWRkVGFzayh0YXNrKSB7XG4gICAgICAgIHRoaXMubGlzdC5wdXNoKHRhc2spO1xuICAgIH1cbiAgICByZW1vdmVUYXNrKGluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gICAgZ2V0VGFzayhpbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy5saXN0W2luZGV4XTtcbiAgICB9XG59XG5cblxuXG5jbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb249JycsIGR1ZURhdGU9JycsIHBpbm5lZD1mYWxzZSwgY29tcGxldGVkPWZhbHNlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnBpbm5lZCA9IHBpbm5lZDtcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XG4gICAgfVxuICAgIGlzQ29tcGxldGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZWQ7XG4gICAgfVxuICAgIHRvZ2dsZUNvbXBsZXRlZCgpIHtcbiAgICAgICAgY29uc3Qgb3Bwb3NpdGUgPSAhKHRoaXMuY29tcGxldGVkKTtcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSBvcHBvc2l0ZTtcbiAgICB9XG4gICAgdG9nZ2xlUGlubmVkKCkge1xuICAgICAgICBjb25zdCBvcHBvc2l0ZSA9ICEodGhpcy5waW5uZWQpO1xuICAgICAgICB0aGlzLnBpbm5lZCA9IG9wcG9zaXRlO1xuICAgIH1cbn1cblxuZXhwb3J0IHt0YXNrTGlzdCwgVGFza30iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7dGFza0xpc3QsIFRhc2t9IGZyb20gXCIuL3Rhc2tMaXN0XCI7XG5pbXBvcnQgdGVzdEpTT04gZnJvbSBcIi4vdGVzdC5qc29uXCJcblxuLy8gRmV0Y2ggdGhlIHVzZXIgZGF0YVxuY29uc29sZS5sb2codGVzdEpTT04pO1xuY29uc3QgdGVzdExpc3QgPSBuZXcgdGFza0xpc3QodGVzdEpTT04udGFza0xpc3QubmFtZSwgdGVzdEpTT04udGFza0xpc3QuY29sb3IpO1xuZm9yIChsZXQgdGFzayBvZiB0ZXN0SlNPTi50YXNrTGlzdC5saXN0KSB7XG4gICAgdGVzdExpc3QuYWRkVGFzayhcbiAgICAgICAgbmV3IFRhc2soXG4gICAgICAgICAgICB0YXNrLnRpdGxlLCBcbiAgICAgICAgICAgIHRhc2suZGVzYywgXG4gICAgICAgICAgICB0YXNrLmR1ZURhdGUsIFxuICAgICAgICAgICAgdGFzay5waW5uZWQsIFxuICAgICAgICAgICAgdGFzay5jb21wbGV0ZWRcbiAgICAgICAgICAgICkpO1xufVxuY29uc29sZS5sb2codGVzdExpc3QpO1xuXG5jb25zdCBET01TdHVmZiA9IHtcbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgICAgICB0YXJnZXQuYXBwZW5kKHRoaXMuZ2VuZXJhdGVUYXNrTGlzdEVsKHRlc3RMaXN0KSk7XG4gICAgfSxcbiAgICBjbGVhcigpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgICAgICB3aGlsZSAodGFyZ2V0Lmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICAgICAgdGFyZ2V0LnJlbW92ZUNoaWxkKHRhcmdldC5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZ2VuZXJhdGVUYXNrRWwodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwaW5uZWQsIGNvbXBsZXRlZCkge1xuICAgICAgICAgICAgLy8gQ3JlYXRlIHRoZSBlbGVtZW50c1xuICAgICAgICAgICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3QgdG9nZ2xlQ29tcGxldGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBjb25zdCB0b2dnbGVQaW5uZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCBleHBhbmRUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBjb25zdCB0aXRsZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBjb25zdCBkdWVEYXRlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAvLyBBZGQgdGhlIGNsYXNzZXNcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFzay1jb250YWluZXInKTtcbiAgICAgICAgICAgIHRvZ2dsZUNvbXBsZXRlZC5jbGFzc0xpc3QuYWRkKCd0b2dnbGUtY29tcGxldGVkJywgJ2ljb24nKTtcbiAgICAgICAgICAgIHRvZ2dsZVBpbm5lZC5jbGFzc0xpc3QuYWRkKCd0b2dnbGUtcGlubmVkJywgJ2ljb24nKTtcbiAgICAgICAgICAgIHRhc2tDb250ZW50LmNsYXNzTGlzdC5hZGQoJ3Rhc2stY29udGVudCcpXG4gICAgICAgICAgICB0aXRsZUVsLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbkVsLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJywgJ2hpZGRlbicpO1xuICAgICAgICAgICAgZHVlRGF0ZUVsLmNsYXNzTGlzdC5hZGQoJ2R1ZS1kYXRlJywgJ2hpZGRlbicpO1xuICAgICAgICAgICAgZXhwYW5kVGFzay5jbGFzc0xpc3QuYWRkKCdpY29uJylcblxuICAgICAgICAgICAgLy8gUGlubmVkL25vdCBwaW5uZWRcbiAgICAgICAgICAgIGlmIChwaW5uZWQpIHtcbiAgICAgICAgICAgICAgICB0b2dnbGVQaW5uZWQuY2xhc3NMaXN0LmFkZCgncGlubmVkJyk7XG4gICAgICAgICAgICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwaW5uZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIENvbXBsZXRlZC9ub3QgY29tcGxldGVkXG4gICAgICAgICAgICBpZiAoY29tcGxldGVkKSB7XG4gICAgICAgICAgICAgICAgdG9nZ2xlQ29tcGxldGVkLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZCcpO1xuICAgICAgICAgICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBGaWxsIHRoZSBkYXRhXG4gICAgICAgICAgICBleHBhbmRUYXNrLnRleHRDb250ZW50ID0gJ1YnO1xuICAgICAgICAgICAgdGl0bGVFbC50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgICAgICAgICAgZGVzY3JpcHRpb25FbC50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgZHVlRGF0ZUVsLnRleHRDb250ZW50ID0gZHVlRGF0ZTtcbiAgICAgICAgICAgIC8vIEF0dGFjaCBldmVudGxpc3RlbmVyc1xuICAgICAgICAgICAgdG9nZ2xlQ29tcGxldGVkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlVG9nZ2xlQ29tcGxldGVkKTtcbiAgICAgICAgICAgIHRvZ2dsZVBpbm5lZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVRvZ2dsZVBpbm5lZCk7XG4gICAgICAgICAgICAvL2V4cGFuZFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVFeHBhbmRUYXNrKTtcbiAgICAgICAgICAgIC8vIEF0dGFjaCB0aGUgZWxlbWVudHNcbiAgICAgICAgICAgIHRhc2tDb250ZW50LmFwcGVuZCh0aXRsZUVsLCBkZXNjcmlwdGlvbkVsLCBkdWVEYXRlRWwpO1xuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmQodG9nZ2xlQ29tcGxldGVkLCB0b2dnbGVQaW5uZWQsIHRhc2tDb250ZW50LCBleHBhbmRUYXNrKTtcbiAgICAgICAgICAgIHJldHVybiB0YXNrQ29udGFpbmVyO1xuICAgIH0sXG4gICAgLy8gTWF5YmUgc2VwZXJhdGUgaW50byB0d28gZnVuY3Rpb25zLCB3aGVyZSBvbmUgZmlsbHMgaW4gZGF0YVxuICAgIC8vIGFuZCBhbm90aGVyIGdlbmVyYXRlcyB0aGUgRE9NIHN0cnVjdHVyZVxuICAgIGdlbmVyYXRlVGFza0xpc3RFbCh0YXNrTGlzdCkge1xuICAgICAgICBjb25zdCB0YXNrTGlzdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICBuYW1lLnRleHRDb250ZW50ID0gdGFza0xpc3QubmFtZTtcbiAgICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsaXN0LmNsYXNzTGlzdC5hZGQoJ2xpc3QtY29udGFpbmVyJyk7XG4gICAgICAgIC8vIExvb3AgdGhyb3VnaCB0YXNrcyBhbmQgcG9wdWxhdGUgdGhlIGxpc3RcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgZm9yIChsZXQgdGFzayBvZiB0YXNrTGlzdC5saXN0KSB7XG4gICAgICAgICAgICBjb25zdCB0ZW1wVGFza0VsID0gdGhpcy5nZW5lcmF0ZVRhc2tFbChcbiAgICAgICAgICAgICAgICB0YXNrLnRpdGxlLCBcbiAgICAgICAgICAgICAgICB0YXNrLmRlc2NyaXB0aW9uLCBcbiAgICAgICAgICAgICAgICB0YXNrLmR1ZURhdGUsIFxuICAgICAgICAgICAgICAgIHRhc2sucGlubmVkLCBcbiAgICAgICAgICAgICAgICB0YXNrLmNvbXBsZXRlZFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAvLyBBZGQgYW4gaW5kZXggZGF0YXNldFxuICAgICAgICAgICAgdGVtcFRhc2tFbC5kYXRhc2V0LmluZGV4ID0gaW5kZXgrKztcbiAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQodGVtcFRhc2tFbCk7ICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICB0YXNrTGlzdEVsLmFwcGVuZChuYW1lLCBsaXN0KTtcblxuICAgICAgICAvLyBBZGQgY3JlYXRpb24gZm9ybVxuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUtZm9ybScpO1xuICAgICAgICBjb25zdCBjbG9uZSA9IHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICB0YXNrTGlzdEVsLmFwcGVuZENoaWxkKGNsb25lKTtcbiAgICAgICAgcmV0dXJuIHRhc2tMaXN0RWw7XG4gICAgfSxcbiAgICB0b2dnbGVDb21wbGV0ZWQodG9nZ2xlQ29tcGxldGVkRWwpIHtcbiAgICAgICAgdG9nZ2xlQ29tcGxldGVkRWwuY2xhc3NMaXN0LnRvZ2dsZSgnY29tcGxldGVkJyk7XG4gICAgICAgIC8vdG9nZ2xlQ29tcGxldGVkRWwucGFyZW50Tm9kZS5jbGFzc0xpc3QudG9nZ2xlKCdjb21wbGV0ZWQnKVxuICAgIH0sXG4gICAgdG9nZ2xlUGlubmVkKHRvZ2dsZVBpbm5lZEVsKSB7XG4gICAgICAgIHRvZ2dsZVBpbm5lZEVsLmNsYXNzTGlzdC50b2dnbGUoJ3Bpbm5lZCcpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlVG9nZ2xlQ29tcGxldGVkKGV2ZW50KSB7XG4gICAgY29uc3QgdGFyZ2V0VGFza0luZGV4ID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuZGF0YXNldC5pbmRleDtcbiAgICAvLyBXaWxsIG5lZWQgdG8gY2hhbmdlIG91dCB0ZXN0TGlzdCB0byA/Pz9cbiAgICBjb25zdCB0YXJnZXRUYXNrT2JqZWN0ID0gdGVzdExpc3QuZ2V0VGFzayh0YXJnZXRUYXNrSW5kZXgpXG4gICAgdGFyZ2V0VGFza09iamVjdC50b2dnbGVDb21wbGV0ZWQoKTtcbiAgICAvLyBET00gcG9ydGlvbiBvZiBldmVudCBoYW5kbGVyXG4gICAgRE9NU3R1ZmYudG9nZ2xlQ29tcGxldGVkKGV2ZW50LnRhcmdldCk7XG4gICAgRE9NU3R1ZmYudXBkYXRlKCk7XG4gICAgLy9TdG9yYWdlQ29udHJvbGxlci51cGRhdGUoKVxufVxuZnVuY3Rpb24gaGFuZGxlVG9nZ2xlUGlubmVkKGV2ZW50KSB7XG4gICAgY29uc3QgdGFyZ2V0VGFza0luZGV4ID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuZGF0YXNldC5pbmRleDtcbiAgICAvLyBXaWxsIG5lZWQgdG8gY2hhbmdlIG91dCB0ZXN0TGlzdCB0byA/Pz9cbiAgICBjb25zdCB0YXJnZXRUYXNrT2JqZWN0ID0gdGVzdExpc3QuZ2V0VGFzayh0YXJnZXRUYXNrSW5kZXgpXG4gICAgdGFyZ2V0VGFza09iamVjdC50b2dnbGVQaW5uZWQoKTtcbiAgICAvLyBET00gcG9ydGlvbiBvZiBldmVudCBoYW5kbGVyXG4gICAgRE9NU3R1ZmYudG9nZ2xlUGlubmVkKGV2ZW50LnRhcmdldCk7XG4gICAgRE9NU3R1ZmYudXBkYXRlKCk7XG4gICAgLy9TdG9yYWdlQ29udHJvbGxlci51cGRhdGUoKVxufVxuXG5cbkRPTVN0dWZmLnVwZGF0ZSgpO1xuXG4vLyBjb25zdCBET01TdHVmZiA9IHtcbi8vICAgICB1cGRhdGUodHlwZSkge1xuLy8gICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0eXBlfWApO1xuLy8gICAgICAgICBsZXQgaSA9IDA7XG4vLyAgICAgICAgIGZvciAobGV0IHRhc2sgb2YgdG9Eb0xpc3RbdHlwZV0pIHtcbi8vICAgICAgICAgICAgIGNvbnN0IHRlbXAgPSB0aGlzLmdlbmVyYXRlTGlzdHRhc2soXG4vLyAgICAgICAgICAgICAgICAgdGFzay50aXRsZSwgXG4vLyAgICAgICAgICAgICAgICAgdGFzay5kZXNjLCBcbi8vICAgICAgICAgICAgICAgICB0YXNrLmR1ZURhdGVcbi8vICAgICAgICAgICAgIClcbi8vICAgICAgICAgICAgIHRlbXAuZGF0YXNldC5pbmRleCA9IGkrKztcbi8vICAgICAgICAgICAgIHRlbXAuZGF0YXNldC50eXBlID0gdHlwZTtcbi8vICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZW1wKTtcbi8vICAgICAgICAgfVxuLy8gICAgIH0sXG4vLyAgICAgdXBkYXRlQWxsKCkge1xuLy8gICAgICAgICB0aGlzLnVwZGF0ZSgnZ2VuZXJhbCcpO1xuLy8gICAgICAgICB0aGlzLnVwZGF0ZSgncHJpb3JpdHknKTtcbi8vICAgICAgICAgdGhpcy51cGRhdGUoJ2NvbXBsZXRlZCcpO1xuLy8gICAgIH0sXG4vLyAgICAgY2xlYXJBbGwoKSB7XG4vLyAgICAgICAgIGNvbnN0IGxpc3RDb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpc3QtY29udGFpbmVyJyk7XG4vLyAgICAgICAgIGZvciAobGV0IGxpc3RDb250YWluZXIgb2YgbGlzdENvbnRhaW5lcnMpIHtcbi8vICAgICAgICAgICAgIHdoaWxlIChsaXN0Q29udGFpbmVyLmhhc0NoaWxkTm9kZXMoKSkge1xuLy8gICAgICAgICAgICAgICAgIGxpc3RDb250YWluZXIucmVtb3ZlQ2hpbGQobGlzdENvbnRhaW5lci5maXJzdENoaWxkKVxuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9XG4vLyAgICAgfSxcblxuLy8gLy9pbXBvcnQge1N0b3JhZ2VDb250cm9sbGVyfSBmcm9tIFwiLi9TdG9yYWdlQ29udHJvbGxlclwiO1xuLy8gZnVuY3Rpb24gaGFuZGxldG9nZ2xlQ29tcGxldGVkKGV2ZW50KSB7XG4vLyAgICAgY29uc3QgdGFza0luZGV4ID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuZGF0YXNldC5pbmRleDtcbi8vICAgICBjb25zdCB0YXNrVHlwZSA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmRhdGFzZXQudHlwZTtcbi8vICAgICAvLyByZW1vdmUgdGFzayBmcm9tIGxpc3QsIGNoYW5nZSBpdCdzIHR5cGUsIHRoZW4gcmVhZGQgaXRcbi8vICAgICBjb25zdCB0YXNrID0gdG9Eb0xpc3QucmVtb3ZlTGlzdHRhc2sodGFza1R5cGUsIHRhc2tJbmRleCk7XG4vLyAgICAgLy8gQWxsb3cgdG9nZ2xpbmcgYmV0d2VlbiBjb21wbGV0ZWQvdW5jb21wbGV0ZWRcbi8vICAgICBpZiAodGFza1R5cGUgPT0gJ2NvbXBsZXRlZCcpIHtcbi8vICAgICAgICAgdGFzay5jaGFuZ2VUeXBlKCdnZW5lcmFsJyk7XG4vLyAgICAgfVxuLy8gICAgIGVsc2Uge1xuLy8gICAgICAgICB0YXNrLmNoYW5nZVR5cGUoJ2NvbXBsZXRlZCcpO1xuICAgIFxuLy8gICAgIH1cbi8vICAgICB0b0RvTGlzdC5hZGRMaXN0dGFzayh0YXNrKTtcbi8vICAgICBET01TdHVmZi5jbGVhckFsbCgpO1xuLy8gICAgIERPTVN0dWZmLnVwZGF0ZUFsbCgpO1xuLy8gICAgIC8vU3RvcmFnZUNvbnRyb2xsZXIudXBkYXRlKCk7XG4vLyB9XG4vLyBmdW5jdGlvbiBoYW5kbGVDcmVhdGUoKSB7XG4vLyAgICAgLy8gVGFrZSB0aGUgZm9ybSBkYXRhIGFuZCBjcmVhdGUgYSBuZXcgbGlzdCB0YXNrXG4vLyAgICAgY29uc3QgZm9ybUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuLy8gICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm1FbCk7XG4vLyAgICAgaWYgKCFmb3JtRGF0YS5nZXQoJ3RpdGxlJykpIHtcbi8vICAgICAgICAgcmV0dXJuO1xuLy8gICAgIH1cbi8vICAgICBjb25zdCBuZXd0YXNrID0gbmV3IGxpc3R0YXNrKFxuLy8gICAgICAgICBmb3JtRGF0YS5nZXQoJ3R5cGUnKSxcbi8vICAgICAgICAgZm9ybURhdGEuZ2V0KCd0aXRsZScpLFxuLy8gICAgICAgICBmb3JtRGF0YS5nZXQoJ2Rlc2MnKSxcbi8vICAgICAgICAgJ2ZpbGxlciBkYXRlJ1xuLy8gICAgIClcbi8vICAgICAvLyBBZGQgdGhlIHRhc2sgdG8gdGhlIGxpc3QgYW5kIHVwZGF0ZVxuLy8gICAgIHRvRG9MaXN0LmFkZExpc3R0YXNrKG5ld3Rhc2spO1xuLy8gICAgIERPTVN0dWZmLmNsZWFyQWxsKCk7XG4vLyAgICAgRE9NU3R1ZmYudXBkYXRlQWxsKCk7XG4vLyAgICAgLy8gdXBkYXRlIHN0b3JhZ2Vcbi8vIH1cblxuLy8gZnVuY3Rpb24gaGFuZGxlRXhwYW5kRm9ybSgpIHtcbi8vICAgICBjb25zdCBleHBhbmRlZEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXhwYW5kZWQtZm9ybScpO1xuLy8gICAgIGV4cGFuZGVkRm9ybS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbi8vICAgICAvLyBUb2dnbGUgZXhwYW5kIGJ1dHRvbiBiZWhhdmlvclxuLy8gICAgIGNvbnN0IGV4cGFuZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNleHBhbmQtYnV0dG9uJyk7XG4vLyAgICAgaWYgKGV4cGFuZEJ1dHRvbi50ZXh0Q29udGVudCA9PSAnRXhwYW5kJykge1xuLy8gICAgICAgICBleHBhbmRCdXR0b24udGV4dENvbnRlbnQgPSAnTWluaW1pemUnO1xuLy8gICAgIH1cbi8vICAgICBlbHNlIHtcbi8vICAgICAgICAgZXhwYW5kQnV0dG9uLnRleHRDb250ZW50ID0gJ0V4cGFuZCdcbi8vICAgICB9XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGhhbmRsZWV4cGFuZFRhc2soZXZlbnQpIHtcbi8vICAgICBjb25zdCB0YXJnZXR0YXNrID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGU7XG4vLyAgICAgZm9yIChsZXQgdGFzayBvZiB0YXJnZXR0YXNrLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWNvbnRlbnQnKS5jaGlsZE5vZGVzKSB7XG4vLyAgICAgICAgIC8vIE9ubHkgaGlkZSB0aGUgdGFzayBwcm9wZXJ0aWVzIHRoYXQgYXJlIGhpZGVhYmxlXG4vLyAgICAgICAgIGlmICh0YXNrLmNsYXNzTGlzdC5jb250YWlucygnaGlkZWFibGUnKSkge1xuLy8gICAgICAgICAgICAgdGFzay5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vIH1cblxuLy8gY29uc3QgY3JlYXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZS1idXR0b24nKTtcbi8vIGNyZWF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNyZWF0ZSk7XG4vLyBjb25zdCBleHBhbmRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2V4cGFuZC1idXR0b24nKTtcbi8vIGV4cGFuZEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVFeHBhbmRGb3JtKTtcbi8vIERPTVN0dWZmLnVwZGF0ZUFsbCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==