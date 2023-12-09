/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/toDoList.js":
/*!*************************!*\
  !*** ./src/toDoList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   listItem: () => (/* binding */ listItem),
/* harmony export */   toDoList: () => (/* binding */ toDoList)
/* harmony export */ });
///import {Storage} from './storage.js'

const toDoList = {
    general : [],
    priority : [],
    completed : [],
    // Adds list items to respective lists based on type
    addListItem(listItem) {
        this[listItem.type].push(listItem);
    },
    removeListItem(type, index) {
        return this[type].splice(index, 1)[0];
    },
    getItem(type, index) {
        return this[type][index];
    }
}



class listItem {
    constructor(type, title, desc, dueDate) {
        this.type = type;
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
    }
    changeType(newType) {
        this.type = newType;
    }
}

const testJSON = {
    itemList: [
        {
            type: 'priority',
            title: 'walk the grass',
            desc: 'Take for walk IMPORTANT',
            dueDate: '12/27'
        },
        {
            type: 'priority',
            title: 'water the dog',
            desc: 'super important pour it all',
            dueDate: '1/12'
        },
        {
            type: 'general',
            title: 'make doritos',
            desc: 'cut into triangles',
            dueDate: '2/10'
        },
        {
            type: 'priority',
            title: 'take a hike',
            desc: 'DO IT NOW!!',
            dueDate: 'now'
        },
        {
            type: 'completed',
            title: 'row a boat',
            desc: 'already did it',
            dueDate: 'done'
        },
    ]

}

for (let item of testJSON.itemList) {
    toDoList.addListItem(new listItem(item.type, item.title, item.desc, item.dueDate));
}



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
/* harmony import */ var _toDoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDoList */ "./src/toDoList.js");


const DOMStuff = {
    update(type) {
        const container = document.querySelector(`#${type}`);
        let i = 0;
        for (let item of _toDoList__WEBPACK_IMPORTED_MODULE_0__.toDoList[type]) {
            const temp = this.generateListItem(
                item.title, 
                item.desc, 
                item.dueDate
            )
            temp.dataset.index = i++;
            temp.dataset.type = type;
            container.appendChild(temp);
        }
    },
    updateAll() {
        this.update('general');
        this.update('priority');
        this.update('completed');
    },
    clearAll() {
        const listContainers = document.querySelectorAll('.list-container');
        for (let listContainer of listContainers) {
            while (listContainer.hasChildNodes()) {
                listContainer.removeChild(listContainer.firstChild)
            }
        }
    },
    generateListItem(title, desc, dueDate) {
        // Create the elements
        const itemContainer = document.createElement('div');
        const markCompleted = document.createElement('button');
        const itemContent = document.createElement('div');
        const itemTitle = document.createElement('h2');
        const expandItem = document.createElement('button');
        const itemDesc = document.createElement('p');
        const itemDueDate = document.createElement('p');
        // Add the classes
        itemContainer.classList.add('item-container');
        markCompleted.classList.add('mark-completed');
        itemContent.classList.add('item-content')
        itemTitle.classList.add('item-title');
        itemDesc.classList.add('item-desc', 'hidden', 'hideable');
        itemDueDate.classList.add('item-due-date', 'hidden', 'hideable');
        expandItem.classList.add('expand-item');
        // Fill the data
        markCompleted.textContent = 'Mark Completed'
        expandItem.textContent = 'expand';
        itemTitle.textContent = title;
        itemDesc.textContent = desc;
        itemDueDate.textContent = dueDate;
        // Attach eventlisteners
        markCompleted.addEventListener('click', handleMarkCompleted);
        expandItem.addEventListener('click', handleExpandItem)
        // Attach the elements
        itemContent.append(itemTitle, itemDesc, itemDueDate)
        itemContainer.append(markCompleted, itemContent, expandItem);
        return itemContainer;
    }
}

//import {StorageController} from "./StorageController";
function handleMarkCompleted(event) {
    const itemIndex = event.target.parentNode.dataset.index;
    const itemType = event.target.parentNode.dataset.type;
    // remove item from list, change it's type, then readd it
    const item = _toDoList__WEBPACK_IMPORTED_MODULE_0__.toDoList.removeListItem(itemType, itemIndex);
    // Allow toggling between completed/uncompleted
    if (itemType == 'completed') {
        item.changeType('general');
    }
    else {
        item.changeType('completed');
    
    }
    _toDoList__WEBPACK_IMPORTED_MODULE_0__.toDoList.addListItem(item);
    DOMStuff.clearAll();
    DOMStuff.updateAll();
    //StorageController.update();
}
function handleCreate() {
    // Take the form data and create a new list item
    const formEl = document.querySelector('form');
    const formData = new FormData(formEl);
    if (!formData.get('title')) {
        return;
    }
    const newItem = new _toDoList__WEBPACK_IMPORTED_MODULE_0__.listItem(
        formData.get('type'),
        formData.get('title'),
        formData.get('desc'),
        'filler date'
    )
    // Add the item to the list and update
    _toDoList__WEBPACK_IMPORTED_MODULE_0__.toDoList.addListItem(newItem);
    DOMStuff.clearAll();
    DOMStuff.updateAll();
    // update storage
}

function handleExpandForm() {
    const expandedForm = document.querySelector('.expanded-form');
    expandedForm.classList.toggle('hidden');
    // Toggle expand button behavior
    const expandButton = document.querySelector('#expand-button');
    if (expandButton.textContent == 'Expand') {
        expandButton.textContent = 'Minimize';
    }
    else {
        expandButton.textContent = 'Expand'
    }
}

function handleExpandItem(event) {
    const targetItem = event.target.parentNode;
    for (let item of targetItem.querySelector('.item-content').childNodes) {
        // Only hide the item properties that are hideable
        if (item.classList.contains('hideable')) {
            item.classList.toggle('hidden');
        }
    }
}

const createButton = document.querySelector('#create-button');
createButton.addEventListener('click', handleCreate);
const expandForm = document.querySelector('#expand-button');
expandForm.addEventListener('click', handleExpandForm);
DOMStuff.updateAll();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxXQUFXLFNBQVM7O0FBRXBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7OztVQ3RFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjhDOztBQUU5QztBQUNBO0FBQ0EscURBQXFELEtBQUs7QUFDMUQ7QUFDQSx5QkFBeUIsK0NBQVE7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVSxtQkFBbUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsK0NBQVE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksK0NBQVE7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLCtDQUFRO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksK0NBQVE7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy90b0RvTGlzdC5qcyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vL2ltcG9ydCB7U3RvcmFnZX0gZnJvbSAnLi9zdG9yYWdlLmpzJ1xuXG5jb25zdCB0b0RvTGlzdCA9IHtcbiAgICBnZW5lcmFsIDogW10sXG4gICAgcHJpb3JpdHkgOiBbXSxcbiAgICBjb21wbGV0ZWQgOiBbXSxcbiAgICAvLyBBZGRzIGxpc3QgaXRlbXMgdG8gcmVzcGVjdGl2ZSBsaXN0cyBiYXNlZCBvbiB0eXBlXG4gICAgYWRkTGlzdEl0ZW0obGlzdEl0ZW0pIHtcbiAgICAgICAgdGhpc1tsaXN0SXRlbS50eXBlXS5wdXNoKGxpc3RJdGVtKTtcbiAgICB9LFxuICAgIHJlbW92ZUxpc3RJdGVtKHR5cGUsIGluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzW3R5cGVdLnNwbGljZShpbmRleCwgMSlbMF07XG4gICAgfSxcbiAgICBnZXRJdGVtKHR5cGUsIGluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzW3R5cGVdW2luZGV4XTtcbiAgICB9XG59XG5cblxuXG5jbGFzcyBsaXN0SXRlbSB7XG4gICAgY29uc3RydWN0b3IodHlwZSwgdGl0bGUsIGRlc2MsIGR1ZURhdGUpIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2MgPSBkZXNjO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIH1cbiAgICBjaGFuZ2VUeXBlKG5ld1R5cGUpIHtcbiAgICAgICAgdGhpcy50eXBlID0gbmV3VHlwZTtcbiAgICB9XG59XG5cbmNvbnN0IHRlc3RKU09OID0ge1xuICAgIGl0ZW1MaXN0OiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdwcmlvcml0eScsXG4gICAgICAgICAgICB0aXRsZTogJ3dhbGsgdGhlIGdyYXNzJyxcbiAgICAgICAgICAgIGRlc2M6ICdUYWtlIGZvciB3YWxrIElNUE9SVEFOVCcsXG4gICAgICAgICAgICBkdWVEYXRlOiAnMTIvMjcnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdwcmlvcml0eScsXG4gICAgICAgICAgICB0aXRsZTogJ3dhdGVyIHRoZSBkb2cnLFxuICAgICAgICAgICAgZGVzYzogJ3N1cGVyIGltcG9ydGFudCBwb3VyIGl0IGFsbCcsXG4gICAgICAgICAgICBkdWVEYXRlOiAnMS8xMidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2dlbmVyYWwnLFxuICAgICAgICAgICAgdGl0bGU6ICdtYWtlIGRvcml0b3MnLFxuICAgICAgICAgICAgZGVzYzogJ2N1dCBpbnRvIHRyaWFuZ2xlcycsXG4gICAgICAgICAgICBkdWVEYXRlOiAnMi8xMCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ3ByaW9yaXR5JyxcbiAgICAgICAgICAgIHRpdGxlOiAndGFrZSBhIGhpa2UnLFxuICAgICAgICAgICAgZGVzYzogJ0RPIElUIE5PVyEhJyxcbiAgICAgICAgICAgIGR1ZURhdGU6ICdub3cnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdjb21wbGV0ZWQnLFxuICAgICAgICAgICAgdGl0bGU6ICdyb3cgYSBib2F0JyxcbiAgICAgICAgICAgIGRlc2M6ICdhbHJlYWR5IGRpZCBpdCcsXG4gICAgICAgICAgICBkdWVEYXRlOiAnZG9uZSdcbiAgICAgICAgfSxcbiAgICBdXG5cbn1cblxuZm9yIChsZXQgaXRlbSBvZiB0ZXN0SlNPTi5pdGVtTGlzdCkge1xuICAgIHRvRG9MaXN0LmFkZExpc3RJdGVtKG5ldyBsaXN0SXRlbShpdGVtLnR5cGUsIGl0ZW0udGl0bGUsIGl0ZW0uZGVzYywgaXRlbS5kdWVEYXRlKSk7XG59XG5cbmV4cG9ydCB7dG9Eb0xpc3QsIGxpc3RJdGVtfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHt0b0RvTGlzdCwgbGlzdEl0ZW19IGZyb20gXCIuL3RvRG9MaXN0XCI7XG5cbmNvbnN0IERPTVN0dWZmID0ge1xuICAgIHVwZGF0ZSh0eXBlKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3R5cGV9YCk7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0b0RvTGlzdFt0eXBlXSkge1xuICAgICAgICAgICAgY29uc3QgdGVtcCA9IHRoaXMuZ2VuZXJhdGVMaXN0SXRlbShcbiAgICAgICAgICAgICAgICBpdGVtLnRpdGxlLCBcbiAgICAgICAgICAgICAgICBpdGVtLmRlc2MsIFxuICAgICAgICAgICAgICAgIGl0ZW0uZHVlRGF0ZVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgdGVtcC5kYXRhc2V0LmluZGV4ID0gaSsrO1xuICAgICAgICAgICAgdGVtcC5kYXRhc2V0LnR5cGUgPSB0eXBlO1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRlbXApO1xuICAgICAgICB9XG4gICAgfSxcbiAgICB1cGRhdGVBbGwoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlKCdnZW5lcmFsJyk7XG4gICAgICAgIHRoaXMudXBkYXRlKCdwcmlvcml0eScpO1xuICAgICAgICB0aGlzLnVwZGF0ZSgnY29tcGxldGVkJyk7XG4gICAgfSxcbiAgICBjbGVhckFsbCgpIHtcbiAgICAgICAgY29uc3QgbGlzdENvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlzdC1jb250YWluZXInKTtcbiAgICAgICAgZm9yIChsZXQgbGlzdENvbnRhaW5lciBvZiBsaXN0Q29udGFpbmVycykge1xuICAgICAgICAgICAgd2hpbGUgKGxpc3RDb250YWluZXIuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAgICAgICAgICAgbGlzdENvbnRhaW5lci5yZW1vdmVDaGlsZChsaXN0Q29udGFpbmVyLmZpcnN0Q2hpbGQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGdlbmVyYXRlTGlzdEl0ZW0odGl0bGUsIGRlc2MsIGR1ZURhdGUpIHtcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBlbGVtZW50c1xuICAgICAgICBjb25zdCBpdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IG1hcmtDb21wbGV0ZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY29uc3QgaXRlbUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgaXRlbVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgY29uc3QgZXhwYW5kSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb25zdCBpdGVtRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgaXRlbUR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIC8vIEFkZCB0aGUgY2xhc3Nlc1xuICAgICAgICBpdGVtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tY29udGFpbmVyJyk7XG4gICAgICAgIG1hcmtDb21wbGV0ZWQuY2xhc3NMaXN0LmFkZCgnbWFyay1jb21wbGV0ZWQnKTtcbiAgICAgICAgaXRlbUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnaXRlbS1jb250ZW50JylcbiAgICAgICAgaXRlbVRpdGxlLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tdGl0bGUnKTtcbiAgICAgICAgaXRlbURlc2MuY2xhc3NMaXN0LmFkZCgnaXRlbS1kZXNjJywgJ2hpZGRlbicsICdoaWRlYWJsZScpO1xuICAgICAgICBpdGVtRHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCdpdGVtLWR1ZS1kYXRlJywgJ2hpZGRlbicsICdoaWRlYWJsZScpO1xuICAgICAgICBleHBhbmRJdGVtLmNsYXNzTGlzdC5hZGQoJ2V4cGFuZC1pdGVtJyk7XG4gICAgICAgIC8vIEZpbGwgdGhlIGRhdGFcbiAgICAgICAgbWFya0NvbXBsZXRlZC50ZXh0Q29udGVudCA9ICdNYXJrIENvbXBsZXRlZCdcbiAgICAgICAgZXhwYW5kSXRlbS50ZXh0Q29udGVudCA9ICdleHBhbmQnO1xuICAgICAgICBpdGVtVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICAgICAgaXRlbURlc2MudGV4dENvbnRlbnQgPSBkZXNjO1xuICAgICAgICBpdGVtRHVlRGF0ZS50ZXh0Q29udGVudCA9IGR1ZURhdGU7XG4gICAgICAgIC8vIEF0dGFjaCBldmVudGxpc3RlbmVyc1xuICAgICAgICBtYXJrQ29tcGxldGVkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlTWFya0NvbXBsZXRlZCk7XG4gICAgICAgIGV4cGFuZEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVFeHBhbmRJdGVtKVxuICAgICAgICAvLyBBdHRhY2ggdGhlIGVsZW1lbnRzXG4gICAgICAgIGl0ZW1Db250ZW50LmFwcGVuZChpdGVtVGl0bGUsIGl0ZW1EZXNjLCBpdGVtRHVlRGF0ZSlcbiAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmQobWFya0NvbXBsZXRlZCwgaXRlbUNvbnRlbnQsIGV4cGFuZEl0ZW0pO1xuICAgICAgICByZXR1cm4gaXRlbUNvbnRhaW5lcjtcbiAgICB9XG59XG5cbi8vaW1wb3J0IHtTdG9yYWdlQ29udHJvbGxlcn0gZnJvbSBcIi4vU3RvcmFnZUNvbnRyb2xsZXJcIjtcbmZ1bmN0aW9uIGhhbmRsZU1hcmtDb21wbGV0ZWQoZXZlbnQpIHtcbiAgICBjb25zdCBpdGVtSW5kZXggPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5kYXRhc2V0LmluZGV4O1xuICAgIGNvbnN0IGl0ZW1UeXBlID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuZGF0YXNldC50eXBlO1xuICAgIC8vIHJlbW92ZSBpdGVtIGZyb20gbGlzdCwgY2hhbmdlIGl0J3MgdHlwZSwgdGhlbiByZWFkZCBpdFxuICAgIGNvbnN0IGl0ZW0gPSB0b0RvTGlzdC5yZW1vdmVMaXN0SXRlbShpdGVtVHlwZSwgaXRlbUluZGV4KTtcbiAgICAvLyBBbGxvdyB0b2dnbGluZyBiZXR3ZWVuIGNvbXBsZXRlZC91bmNvbXBsZXRlZFxuICAgIGlmIChpdGVtVHlwZSA9PSAnY29tcGxldGVkJykge1xuICAgICAgICBpdGVtLmNoYW5nZVR5cGUoJ2dlbmVyYWwnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGl0ZW0uY2hhbmdlVHlwZSgnY29tcGxldGVkJyk7XG4gICAgXG4gICAgfVxuICAgIHRvRG9MaXN0LmFkZExpc3RJdGVtKGl0ZW0pO1xuICAgIERPTVN0dWZmLmNsZWFyQWxsKCk7XG4gICAgRE9NU3R1ZmYudXBkYXRlQWxsKCk7XG4gICAgLy9TdG9yYWdlQ29udHJvbGxlci51cGRhdGUoKTtcbn1cbmZ1bmN0aW9uIGhhbmRsZUNyZWF0ZSgpIHtcbiAgICAvLyBUYWtlIHRoZSBmb3JtIGRhdGEgYW5kIGNyZWF0ZSBhIG5ldyBsaXN0IGl0ZW1cbiAgICBjb25zdCBmb3JtRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybUVsKTtcbiAgICBpZiAoIWZvcm1EYXRhLmdldCgndGl0bGUnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG5ld0l0ZW0gPSBuZXcgbGlzdEl0ZW0oXG4gICAgICAgIGZvcm1EYXRhLmdldCgndHlwZScpLFxuICAgICAgICBmb3JtRGF0YS5nZXQoJ3RpdGxlJyksXG4gICAgICAgIGZvcm1EYXRhLmdldCgnZGVzYycpLFxuICAgICAgICAnZmlsbGVyIGRhdGUnXG4gICAgKVxuICAgIC8vIEFkZCB0aGUgaXRlbSB0byB0aGUgbGlzdCBhbmQgdXBkYXRlXG4gICAgdG9Eb0xpc3QuYWRkTGlzdEl0ZW0obmV3SXRlbSk7XG4gICAgRE9NU3R1ZmYuY2xlYXJBbGwoKTtcbiAgICBET01TdHVmZi51cGRhdGVBbGwoKTtcbiAgICAvLyB1cGRhdGUgc3RvcmFnZVxufVxuXG5mdW5jdGlvbiBoYW5kbGVFeHBhbmRGb3JtKCkge1xuICAgIGNvbnN0IGV4cGFuZGVkRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5leHBhbmRlZC1mb3JtJyk7XG4gICAgZXhwYW5kZWRGb3JtLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgIC8vIFRvZ2dsZSBleHBhbmQgYnV0dG9uIGJlaGF2aW9yXG4gICAgY29uc3QgZXhwYW5kQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2V4cGFuZC1idXR0b24nKTtcbiAgICBpZiAoZXhwYW5kQnV0dG9uLnRleHRDb250ZW50ID09ICdFeHBhbmQnKSB7XG4gICAgICAgIGV4cGFuZEJ1dHRvbi50ZXh0Q29udGVudCA9ICdNaW5pbWl6ZSc7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBleHBhbmRCdXR0b24udGV4dENvbnRlbnQgPSAnRXhwYW5kJ1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlRXhwYW5kSXRlbShldmVudCkge1xuICAgIGNvbnN0IHRhcmdldEl0ZW0gPSBldmVudC50YXJnZXQucGFyZW50Tm9kZTtcbiAgICBmb3IgKGxldCBpdGVtIG9mIHRhcmdldEl0ZW0ucXVlcnlTZWxlY3RvcignLml0ZW0tY29udGVudCcpLmNoaWxkTm9kZXMpIHtcbiAgICAgICAgLy8gT25seSBoaWRlIHRoZSBpdGVtIHByb3BlcnRpZXMgdGhhdCBhcmUgaGlkZWFibGVcbiAgICAgICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRlYWJsZScpKSB7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCBjcmVhdGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlLWJ1dHRvbicpO1xuY3JlYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ3JlYXRlKTtcbmNvbnN0IGV4cGFuZEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZXhwYW5kLWJ1dHRvbicpO1xuZXhwYW5kRm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUV4cGFuZEZvcm0pO1xuRE9NU3R1ZmYudXBkYXRlQWxsKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9