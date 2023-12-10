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

module.exports = JSON.parse('{"userLists":[{"name":"General","color":"blue","list":[]}]}');

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
// If unavailable use basic template
else {
    userData = _test_json__WEBPACK_IMPORTED_MODULE_1__.userLists;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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azovL3RvLWRvLy4vc3JjL3Rhc2tMaXN0LmpzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZXJEYXRhIGZyb20gJy4vdGVzdC5qc29uJztcbmNvbnN0IHN0b3JhZ2VDb250cm9sbGVyID0ge1xuICAgIHN0b3JlVXNlckxpc3RzKHVzZXJMaXN0cykge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlEYXRhJywgSlNPTi5zdHJpbmdpZnkodXNlckxpc3RzKSk7XG4gICAgfSxcbiAgICBnZXRVc2VyTGlzdHMoKSB7XG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm15RGF0YVwiKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7c3RvcmFnZUNvbnRyb2xsZXJ9OyIsImNsYXNzIHRhc2tMaXN0IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBjb2xvcikge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmNvbG9yID0gJ3JlZCc7XG4gICAgICAgIHRoaXMubGlzdCA9IFtdO1xuICAgIH1cbiAgICBhZGRUYXNrKHRhc2spIHtcbiAgICAgICAgdGhpcy5saXN0LnB1c2godGFzayk7XG4gICAgfVxuICAgIHJlbW92ZVRhc2soaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgICBnZXRUYXNrKGluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxpc3RbaW5kZXhdO1xuICAgIH1cbn1cblxuXG5cbmNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbj0nJywgZHVlRGF0ZT0nJywgcGlubmVkPWZhbHNlLCBjb21wbGV0ZWQ9ZmFsc2UpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucGlubmVkID0gcGlubmVkO1xuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcbiAgICB9XG4gICAgaXNDb21wbGV0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlZDtcbiAgICB9XG4gICAgdG9nZ2xlQ29tcGxldGVkKCkge1xuICAgICAgICBjb25zdCBvcHBvc2l0ZSA9ICEodGhpcy5jb21wbGV0ZWQpO1xuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IG9wcG9zaXRlO1xuICAgIH1cbiAgICB0b2dnbGVQaW5uZWQoKSB7XG4gICAgICAgIGNvbnN0IG9wcG9zaXRlID0gISh0aGlzLnBpbm5lZCk7XG4gICAgICAgIHRoaXMucGlubmVkID0gb3Bwb3NpdGU7XG4gICAgfVxufVxuXG5leHBvcnQge3Rhc2tMaXN0LCBUYXNrfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHt0YXNrTGlzdCwgVGFza30gZnJvbSBcIi4vdGFza0xpc3RcIjtcbmltcG9ydCB0ZXN0SlNPTiBmcm9tIFwiLi90ZXN0Lmpzb25cIlxuaW1wb3J0IHtzdG9yYWdlQ29udHJvbGxlcn0gZnJvbSAnLi9zdG9yYWdlQ29udHJvbGxlcidcblxuLy8gRmV0Y2ggdGhlIHVzZXIgZGF0YVxubGV0IHVzZXJEYXRhO1xuaWYgKHN0b3JhZ2VDb250cm9sbGVyLmdldFVzZXJMaXN0cygpKSB7XG4gICAgdXNlckRhdGEgPSBKU09OLnBhcnNlKHN0b3JhZ2VDb250cm9sbGVyLmdldFVzZXJMaXN0cygpKVxufVxuLy8gSWYgdW5hdmFpbGFibGUgdXNlIGJhc2ljIHRlbXBsYXRlXG5lbHNlIHtcbiAgICB1c2VyRGF0YSA9IHRlc3RKU09OLnVzZXJMaXN0cztcbn1cbmNvbnNvbGUubG9nKHVzZXJEYXRhKTtcblxuY29uc3QgdXNlckxpc3RzID0gW107XG5mb3IgKGxldCB1c2VyTGlzdCBvZiB1c2VyRGF0YSkge1xuICAgIGNvbnN0IHRlbXBPYmogPSBuZXcgdGFza0xpc3QodXNlckxpc3QubmFtZSwgdXNlckxpc3QuY29sb3IpO1xuICAgIGZvciAobGV0IHRhc2sgb2YgdXNlckxpc3QubGlzdCkge1xuICAgICAgICB0ZW1wT2JqLmFkZFRhc2soXG4gICAgICAgICAgICBuZXcgVGFzayhcbiAgICAgICAgICAgICAgICB0YXNrLnRpdGxlLCBcbiAgICAgICAgICAgICAgICB0YXNrLmRlc2MsIFxuICAgICAgICAgICAgICAgIHRhc2suZHVlRGF0ZSwgXG4gICAgICAgICAgICAgICAgdGFzay5waW5uZWQsIFxuICAgICAgICAgICAgICAgIHRhc2suY29tcGxldGVkXG4gICAgICAgICAgICAgICAgKSk7XG4gICAgfVxuICAgIHVzZXJMaXN0cy5wdXNoKHRlbXBPYmopO1xufVxuY29uc29sZS5sb2codXNlckxpc3RzKTtcblxuLy8gY29uc29sZS5sb2codGVzdEpTT04udXNlckxpc3RzKTtcbi8vIGNvbnN0IHVzZXJMaXN0cyA9IFtdO1xuLy8gZm9yIChsZXQgdXNlckxpc3Qgb2YgdGVzdEpTT04udXNlckxpc3RzKSB7XG4vLyAgICAgY29uc3QgdGVtcE9iaiA9IG5ldyB0YXNrTGlzdCh1c2VyTGlzdC5uYW1lLCB1c2VyTGlzdC5jb2xvcik7XG4vLyAgICAgZm9yIChsZXQgdGFzayBvZiB1c2VyTGlzdC5saXN0KSB7XG4vLyAgICAgICAgIHRlbXBPYmouYWRkVGFzayhcbi8vICAgICAgICAgICAgIG5ldyBUYXNrKFxuLy8gICAgICAgICAgICAgICAgIHRhc2sudGl0bGUsIFxuLy8gICAgICAgICAgICAgICAgIHRhc2suZGVzYywgXG4vLyAgICAgICAgICAgICAgICAgdGFzay5kdWVEYXRlLCBcbi8vICAgICAgICAgICAgICAgICB0YXNrLnBpbm5lZCwgXG4vLyAgICAgICAgICAgICAgICAgdGFzay5jb21wbGV0ZWRcbi8vICAgICAgICAgICAgICAgICApKTtcbi8vICAgICB9XG4vLyAgICAgdXNlckxpc3RzLnB1c2godGVtcE9iaik7XG4vLyB9XG5cblxuY29uc3QgRE9NU3R1ZmYgPSB7XG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgZm9yIChsZXQgbGlzdCBvZiB1c2VyTGlzdHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHRlbXBMaXN0ID0gdGhpcy5nZW5lcmF0ZVRhc2tMaXN0RWwobGlzdCk7XG4gICAgICAgICAgICB0ZW1wTGlzdC5kYXRhc2V0LmluZGV4ID0gaW5kZXgrKztcbiAgICAgICAgICAgIHRhcmdldC5hcHBlbmQodGVtcExpc3QpXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNsZWFyKCkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gICAgICAgIHdoaWxlICh0YXJnZXQuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAgICAgICB0YXJnZXQucmVtb3ZlQ2hpbGQodGFyZ2V0LmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBnZW5lcmF0ZVRhc2tFbCh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHBpbm5lZCwgY29tcGxldGVkKSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgdGhlIGVsZW1lbnRzXG4gICAgICAgICAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCB0b2dnbGVDb21wbGV0ZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGNvbnN0IHRvZ2dsZVBpbm5lZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgY29uc3QgdGFza0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IHRvZ2dsZUV4cGFuZGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBjb25zdCB0aXRsZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBjb25zdCBkdWVEYXRlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAvLyBBZGQgdGhlIGNsYXNzZXNcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFzay1jb250YWluZXInKTtcbiAgICAgICAgICAgIHRvZ2dsZUNvbXBsZXRlZC5jbGFzc0xpc3QuYWRkKCd0b2dnbGUtY29tcGxldGVkJywgJ2ljb24nKTtcbiAgICAgICAgICAgIHRvZ2dsZVBpbm5lZC5jbGFzc0xpc3QuYWRkKCd0b2dnbGUtcGlubmVkJywgJ2ljb24nKTtcbiAgICAgICAgICAgIHRhc2tDb250ZW50LmNsYXNzTGlzdC5hZGQoJ3Rhc2stY29udGVudCcpXG4gICAgICAgICAgICB0aXRsZUVsLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbkVsLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJywgJ2hpZGRlbicsICdoaWRlYWJsZScpO1xuICAgICAgICAgICAgZHVlRGF0ZUVsLmNsYXNzTGlzdC5hZGQoJ2R1ZS1kYXRlJywgJ2hpZGRlbicsICdoaWRlYWJsZScpO1xuICAgICAgICAgICAgdG9nZ2xlRXhwYW5kZWQuY2xhc3NMaXN0LmFkZCgnaWNvbicpXG4gICAgICAgICAgICAvLyBQaW5uZWQvbm90IHBpbm5lZFxuICAgICAgICAgICAgaWYgKHBpbm5lZCkge1xuICAgICAgICAgICAgICAgIHRvZ2dsZVBpbm5lZC5jbGFzc0xpc3QuYWRkKCdwaW5uZWQnKTtcbiAgICAgICAgICAgICAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Bpbm5lZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQ29tcGxldGVkL25vdCBjb21wbGV0ZWRcbiAgICAgICAgICAgIGlmIChjb21wbGV0ZWQpIHtcbiAgICAgICAgICAgICAgICB0b2dnbGVDb21wbGV0ZWQuY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkJyk7XG4gICAgICAgICAgICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEZpbGwgdGhlIGRhdGFcbiAgICAgICAgICAgIHRvZ2dsZUV4cGFuZGVkLnRleHRDb250ZW50ID0gJ1YnO1xuICAgICAgICAgICAgdGl0bGVFbC50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgICAgICAgICAgZGVzY3JpcHRpb25FbC50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgZHVlRGF0ZUVsLnRleHRDb250ZW50ID0gZHVlRGF0ZTtcbiAgICAgICAgICAgIC8vIEF0dGFjaCBldmVudGxpc3RlbmVyc1xuICAgICAgICAgICAgdG9nZ2xlQ29tcGxldGVkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlVG9nZ2xlQ29tcGxldGVkKTtcbiAgICAgICAgICAgIHRvZ2dsZVBpbm5lZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVRvZ2dsZVBpbm5lZCk7XG4gICAgICAgICAgICB0b2dnbGVFeHBhbmRlZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUV4cGFuZFRhc2spO1xuICAgICAgICAgICAgLy8gQXR0YWNoIHRoZSBlbGVtZW50c1xuICAgICAgICAgICAgdGFza0NvbnRlbnQuYXBwZW5kKHRpdGxlRWwsIGRlc2NyaXB0aW9uRWwsIGR1ZURhdGVFbCk7XG4gICAgICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZCh0b2dnbGVDb21wbGV0ZWQsIHRvZ2dsZVBpbm5lZCwgdGFza0NvbnRlbnQsIHRvZ2dsZUV4cGFuZGVkKTtcbiAgICAgICAgICAgIHJldHVybiB0YXNrQ29udGFpbmVyO1xuICAgIH0sXG4gICAgLy8gTWF5YmUgc2VwZXJhdGUgaW50byB0d28gZnVuY3Rpb25zLCB3aGVyZSBvbmUgZmlsbHMgaW4gZGF0YVxuICAgIC8vIGFuZCBhbm90aGVyIGdlbmVyYXRlcyB0aGUgRE9NIHN0cnVjdHVyZVxuICAgIGdlbmVyYXRlVGFza0xpc3RFbCh0YXNrTGlzdCkge1xuICAgICAgICBjb25zdCB0YXNrTGlzdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICBuYW1lLnRleHRDb250ZW50ID0gdGFza0xpc3QubmFtZTtcbiAgICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsaXN0LmNsYXNzTGlzdC5hZGQoJ2xpc3QtY29udGFpbmVyJyk7XG4gICAgICAgIC8vIExvb3AgdGhyb3VnaCB0YXNrcyBhbmQgcG9wdWxhdGUgdGhlIGxpc3RcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgZm9yIChsZXQgdGFzayBvZiB0YXNrTGlzdC5saXN0KSB7XG4gICAgICAgICAgICBjb25zdCB0ZW1wVGFza0VsID0gdGhpcy5nZW5lcmF0ZVRhc2tFbChcbiAgICAgICAgICAgICAgICB0YXNrLnRpdGxlLCBcbiAgICAgICAgICAgICAgICB0YXNrLmRlc2NyaXB0aW9uLCBcbiAgICAgICAgICAgICAgICB0YXNrLmR1ZURhdGUsIFxuICAgICAgICAgICAgICAgIHRhc2sucGlubmVkLCBcbiAgICAgICAgICAgICAgICB0YXNrLmNvbXBsZXRlZFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAvLyBBZGQgYW4gaW5kZXggZGF0YXNldFxuICAgICAgICAgICAgdGVtcFRhc2tFbC5kYXRhc2V0LmluZGV4ID0gaW5kZXgrKztcbiAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQodGVtcFRhc2tFbCk7ICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICB0YXNrTGlzdEVsLmFwcGVuZChuYW1lLCBsaXN0KTtcblxuICAgICAgICAvLyBBZGQgY3JlYXRpb24gZm9ybVxuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUtZm9ybScpO1xuICAgICAgICBjb25zdCBjbG9uZSA9IHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBjb25zdCBjcmVhdGVCdXR0b24gPSBjbG9uZS5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlLWJ1dHRvbicpO1xuICAgICAgICBjb25zdCBmb3JtID0gY2xvbmUucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICAgICAgICBjcmVhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBcbiAgICAgICAgICAgIChldmVudCk9PntoYW5kbGVDcmVhdGUoZXZlbnQsIGZvcm0pfSk7XG4gICAgICAgIHRhc2tMaXN0RWwuYXBwZW5kQ2hpbGQoY2xvbmUpO1xuICAgICAgICByZXR1cm4gdGFza0xpc3RFbDtcbiAgICB9LFxuICAgIHRvZ2dsZUNvbXBsZXRlZCh0b2dnbGVDb21wbGV0ZWRFbCkge1xuICAgICAgICB0b2dnbGVDb21wbGV0ZWRFbC5jbGFzc0xpc3QudG9nZ2xlKCdjb21wbGV0ZWQnKTtcbiAgICAgICAgLy90b2dnbGVDb21wbGV0ZWRFbC5wYXJlbnROb2RlLmNsYXNzTGlzdC50b2dnbGUoJ2NvbXBsZXRlZCcpXG4gICAgfSxcbiAgICB0b2dnbGVQaW5uZWQodG9nZ2xlUGlubmVkRWwpIHtcbiAgICAgICAgdG9nZ2xlUGlubmVkRWwuY2xhc3NMaXN0LnRvZ2dsZSgncGlubmVkJyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVUb2dnbGVDb21wbGV0ZWQoZXZlbnQpIHtcbiAgICBjb25zdCB0YXJnZXRUYXNrSW5kZXggPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5kYXRhc2V0LmluZGV4O1xuICAgIGNvbnN0IHRhcmdldExpc3RJbmRleCA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5kYXRhc2V0LmluZGV4XG4gICAgY29uc3QgdGFyZ2V0VGFza09iamVjdCA9IHVzZXJMaXN0c1t0YXJnZXRMaXN0SW5kZXhdLmdldFRhc2sodGFyZ2V0VGFza0luZGV4KTtcbiAgICB0YXJnZXRUYXNrT2JqZWN0LnRvZ2dsZUNvbXBsZXRlZCgpO1xuICAgIC8vIERPTSBwb3J0aW9uIG9mIGV2ZW50IGhhbmRsZXJcbiAgICBET01TdHVmZi50b2dnbGVDb21wbGV0ZWQoZXZlbnQudGFyZ2V0KTtcbiAgICBET01TdHVmZi51cGRhdGUoKTtcbiAgICBzdG9yYWdlQ29udHJvbGxlci5zdG9yZVVzZXJMaXN0cyh1c2VyTGlzdHMpO1xufVxuZnVuY3Rpb24gaGFuZGxlVG9nZ2xlUGlubmVkKGV2ZW50KSB7XG4gICAgY29uc3QgdGFyZ2V0VGFza0luZGV4ID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuZGF0YXNldC5pbmRleDtcbiAgICBjb25zdCB0YXJnZXRMaXN0SW5kZXggPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuZGF0YXNldC5pbmRleFxuICAgIGNvbnN0IHRhcmdldFRhc2tPYmplY3QgPSB1c2VyTGlzdHNbdGFyZ2V0TGlzdEluZGV4XS5nZXRUYXNrKHRhcmdldFRhc2tJbmRleCk7XG4gICAgdGFyZ2V0VGFza09iamVjdC50b2dnbGVQaW5uZWQoKTtcbiAgICAvLyBET00gcG9ydGlvbiBvZiBldmVudCBoYW5kbGVyXG4gICAgRE9NU3R1ZmYudG9nZ2xlUGlubmVkKGV2ZW50LnRhcmdldCk7XG4gICAgRE9NU3R1ZmYudXBkYXRlKCk7XG4gICAgc3RvcmFnZUNvbnRyb2xsZXIuc3RvcmVVc2VyTGlzdHModXNlckxpc3RzKTtcbn1cbmZ1bmN0aW9uIGhhbmRsZUNyZWF0ZShldmVudCwgZm9ybSkge1xuICAgICAgICAvLyBUYWtlIHRoZSBmb3JtIGRhdGEgYW5kIGNyZWF0ZSBhIG5ldyBsaXN0IHRhc2tcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XG4gICAgICAgIGlmICghZm9ybURhdGEuZ2V0KCd0aXRsZScpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKFxuICAgICAgICAgICAgZm9ybURhdGEuZ2V0KCd0aXRsZScpLFxuICAgICAgICAgICAgZm9ybURhdGEuZ2V0KCdkZXNjJyksXG4gICAgICAgICAgICAnZmlsbGVyIGRhdGUnLFxuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICApXG4gICAgICAgIC8vIEFkZCB0aGUgdGFzayB0byB0aGUgbGlzdCBhbmQgdXBkYXRlXG4gICAgICAgIGNvbnN0IHRhcmdldExpc3RJbmRleCA9IGZvcm0ucGFyZW50Tm9kZS5kYXRhc2V0LmluZGV4O1xuICAgICAgICB1c2VyTGlzdHNbdGFyZ2V0TGlzdEluZGV4XS5hZGRUYXNrKG5ld1Rhc2spO1xuICAgICAgICBET01TdHVmZi51cGRhdGUoKTtcbiAgICAgICAgc3RvcmFnZUNvbnRyb2xsZXIuc3RvcmVVc2VyTGlzdHModXNlckxpc3RzKTtcbiAgICB9XG5mdW5jdGlvbiBoYW5kbGVFeHBhbmRUYXNrKGV2ZW50KSB7XG4gICAgY29uc3QgdGFza0RhdGEgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcudGFzay1jb250ZW50Jyk7XG5cbiAgICBjb25zb2xlLmxvZyh0YXNrRGF0YSk7XG4gICAgZm9yIChsZXQgZGF0YSBvZiB0YXNrRGF0YS5jaGlsZE5vZGVzKSB7XG4gICAgICAgIC8vIE9ubHkgaGlkZSB0aGUgdGFzayBkYXRhIHRoYXQgaXMgaGlkZWFibGVcbiAgICAgICAgaWYgKGRhdGEuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRlYWJsZScpKSB7XG4gICAgICAgICAgICBkYXRhLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbkRPTVN0dWZmLnVwZGF0ZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==