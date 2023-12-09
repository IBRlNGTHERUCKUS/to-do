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
        const main = document.querySelector('main');
        for (let listContainer of main.childNodes) {
            while (listContainer.hasChildNodes()) {
                listContainer.removeChild(listContainer.firstChild)
            }
        }
    },
    generateListItem(title, desc, dueDate) {
        // Create the elements
        const itemContainer = document.createElement('div');
        const markCompleted = document.createElement('button');
        const itemTitle = document.createElement('h2');
        const expandItem = document.createElement('button');
        const itemDesc = document.createElement('p');
        const itemDueDate = document.createElement('p');
        // Add the classes
        itemContainer.classList.add('item-container');
        markCompleted.classList.add('mark-completed');
        expandItem.classList.add('expand-item');
        itemTitle.classList.add('item-title');
        itemDesc.classList.add('item-desc', 'hidden', 'hideable');
        itemDueDate.classList.add('item-due-date', 'hidden', 'hideable');
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
        itemContainer.append(markCompleted, itemTitle, expandItem, itemDesc, itemDueDate);
        return itemContainer;
    }
}

//import {StorageController} from "./StorageController";
function handleMarkCompleted(event) {
    const itemIndex = event.target.parentNode.dataset.index;
    const itemType = event.target.parentNode.dataset.type;
    // remove item from list, change it's type, then readd it
    const item = _toDoList__WEBPACK_IMPORTED_MODULE_0__.toDoList.removeListItem(itemType, itemIndex);
    item.changeType('completed');
    _toDoList__WEBPACK_IMPORTED_MODULE_0__.toDoList.addListItem(item);
    DOMStuff.clearAll();
    DOMStuff.updateAll();
    //StorageController.update();
}
function handleCreate() {
    // Take the form data and create a new list item
    const formEl = document.querySelector('form');
    const formData = new FormData(formEl);
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
}

function handleExpandItem(event) {
    const targetItem = event.target.parentNode;
    for (let item of targetItem.childNodes) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxXQUFXLFNBQVM7O0FBRXBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7OztVQ3RFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjhDOztBQUU5QztBQUNBO0FBQ0EscURBQXFELEtBQUs7QUFDMUQ7QUFDQSx5QkFBeUIsK0NBQVE7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVSxtQkFBbUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsK0NBQVE7QUFDekI7QUFDQSxJQUFJLCtDQUFRO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwrQ0FBUTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLCtDQUFRO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy90b0RvTGlzdC5qcyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vL2ltcG9ydCB7U3RvcmFnZX0gZnJvbSAnLi9zdG9yYWdlLmpzJ1xuXG5jb25zdCB0b0RvTGlzdCA9IHtcbiAgICBnZW5lcmFsIDogW10sXG4gICAgcHJpb3JpdHkgOiBbXSxcbiAgICBjb21wbGV0ZWQgOiBbXSxcbiAgICAvLyBBZGRzIGxpc3QgaXRlbXMgdG8gcmVzcGVjdGl2ZSBsaXN0cyBiYXNlZCBvbiB0eXBlXG4gICAgYWRkTGlzdEl0ZW0obGlzdEl0ZW0pIHtcbiAgICAgICAgdGhpc1tsaXN0SXRlbS50eXBlXS5wdXNoKGxpc3RJdGVtKTtcbiAgICB9LFxuICAgIHJlbW92ZUxpc3RJdGVtKHR5cGUsIGluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzW3R5cGVdLnNwbGljZShpbmRleCwgMSlbMF07XG4gICAgfSxcbiAgICBnZXRJdGVtKHR5cGUsIGluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzW3R5cGVdW2luZGV4XTtcbiAgICB9XG59XG5cblxuXG5jbGFzcyBsaXN0SXRlbSB7XG4gICAgY29uc3RydWN0b3IodHlwZSwgdGl0bGUsIGRlc2MsIGR1ZURhdGUpIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2MgPSBkZXNjO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIH1cbiAgICBjaGFuZ2VUeXBlKG5ld1R5cGUpIHtcbiAgICAgICAgdGhpcy50eXBlID0gbmV3VHlwZTtcbiAgICB9XG59XG5cbmNvbnN0IHRlc3RKU09OID0ge1xuICAgIGl0ZW1MaXN0OiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdwcmlvcml0eScsXG4gICAgICAgICAgICB0aXRsZTogJ3dhbGsgdGhlIGdyYXNzJyxcbiAgICAgICAgICAgIGRlc2M6ICdUYWtlIGZvciB3YWxrIElNUE9SVEFOVCcsXG4gICAgICAgICAgICBkdWVEYXRlOiAnMTIvMjcnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdwcmlvcml0eScsXG4gICAgICAgICAgICB0aXRsZTogJ3dhdGVyIHRoZSBkb2cnLFxuICAgICAgICAgICAgZGVzYzogJ3N1cGVyIGltcG9ydGFudCBwb3VyIGl0IGFsbCcsXG4gICAgICAgICAgICBkdWVEYXRlOiAnMS8xMidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2dlbmVyYWwnLFxuICAgICAgICAgICAgdGl0bGU6ICdtYWtlIGRvcml0b3MnLFxuICAgICAgICAgICAgZGVzYzogJ2N1dCBpbnRvIHRyaWFuZ2xlcycsXG4gICAgICAgICAgICBkdWVEYXRlOiAnMi8xMCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ3ByaW9yaXR5JyxcbiAgICAgICAgICAgIHRpdGxlOiAndGFrZSBhIGhpa2UnLFxuICAgICAgICAgICAgZGVzYzogJ0RPIElUIE5PVyEhJyxcbiAgICAgICAgICAgIGR1ZURhdGU6ICdub3cnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdjb21wbGV0ZWQnLFxuICAgICAgICAgICAgdGl0bGU6ICdyb3cgYSBib2F0JyxcbiAgICAgICAgICAgIGRlc2M6ICdhbHJlYWR5IGRpZCBpdCcsXG4gICAgICAgICAgICBkdWVEYXRlOiAnZG9uZSdcbiAgICAgICAgfSxcbiAgICBdXG5cbn1cblxuZm9yIChsZXQgaXRlbSBvZiB0ZXN0SlNPTi5pdGVtTGlzdCkge1xuICAgIHRvRG9MaXN0LmFkZExpc3RJdGVtKG5ldyBsaXN0SXRlbShpdGVtLnR5cGUsIGl0ZW0udGl0bGUsIGl0ZW0uZGVzYywgaXRlbS5kdWVEYXRlKSk7XG59XG5cbmV4cG9ydCB7dG9Eb0xpc3QsIGxpc3RJdGVtfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHt0b0RvTGlzdCwgbGlzdEl0ZW19IGZyb20gXCIuL3RvRG9MaXN0XCI7XG5cbmNvbnN0IERPTVN0dWZmID0ge1xuICAgIHVwZGF0ZSh0eXBlKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3R5cGV9YCk7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0b0RvTGlzdFt0eXBlXSkge1xuICAgICAgICAgICAgY29uc3QgdGVtcCA9IHRoaXMuZ2VuZXJhdGVMaXN0SXRlbShcbiAgICAgICAgICAgICAgICBpdGVtLnRpdGxlLCBcbiAgICAgICAgICAgICAgICBpdGVtLmRlc2MsIFxuICAgICAgICAgICAgICAgIGl0ZW0uZHVlRGF0ZVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgdGVtcC5kYXRhc2V0LmluZGV4ID0gaSsrO1xuICAgICAgICAgICAgdGVtcC5kYXRhc2V0LnR5cGUgPSB0eXBlO1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRlbXApO1xuICAgICAgICB9XG4gICAgfSxcbiAgICB1cGRhdGVBbGwoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlKCdnZW5lcmFsJyk7XG4gICAgICAgIHRoaXMudXBkYXRlKCdwcmlvcml0eScpO1xuICAgICAgICB0aGlzLnVwZGF0ZSgnY29tcGxldGVkJyk7XG4gICAgfSxcbiAgICBjbGVhckFsbCgpIHtcbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICAgICAgZm9yIChsZXQgbGlzdENvbnRhaW5lciBvZiBtYWluLmNoaWxkTm9kZXMpIHtcbiAgICAgICAgICAgIHdoaWxlIChsaXN0Q29udGFpbmVyLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICAgICAgICAgIGxpc3RDb250YWluZXIucmVtb3ZlQ2hpbGQobGlzdENvbnRhaW5lci5maXJzdENoaWxkKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBnZW5lcmF0ZUxpc3RJdGVtKHRpdGxlLCBkZXNjLCBkdWVEYXRlKSB7XG4gICAgICAgIC8vIENyZWF0ZSB0aGUgZWxlbWVudHNcbiAgICAgICAgY29uc3QgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBtYXJrQ29tcGxldGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IGl0ZW1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIGNvbnN0IGV4cGFuZEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY29uc3QgaXRlbURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IGl0ZW1EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAvLyBBZGQgdGhlIGNsYXNzZXNcbiAgICAgICAgaXRlbUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpdGVtLWNvbnRhaW5lcicpO1xuICAgICAgICBtYXJrQ29tcGxldGVkLmNsYXNzTGlzdC5hZGQoJ21hcmstY29tcGxldGVkJyk7XG4gICAgICAgIGV4cGFuZEl0ZW0uY2xhc3NMaXN0LmFkZCgnZXhwYW5kLWl0ZW0nKTtcbiAgICAgICAgaXRlbVRpdGxlLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tdGl0bGUnKTtcbiAgICAgICAgaXRlbURlc2MuY2xhc3NMaXN0LmFkZCgnaXRlbS1kZXNjJywgJ2hpZGRlbicsICdoaWRlYWJsZScpO1xuICAgICAgICBpdGVtRHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCdpdGVtLWR1ZS1kYXRlJywgJ2hpZGRlbicsICdoaWRlYWJsZScpO1xuICAgICAgICAvLyBGaWxsIHRoZSBkYXRhXG4gICAgICAgIG1hcmtDb21wbGV0ZWQudGV4dENvbnRlbnQgPSAnTWFyayBDb21wbGV0ZWQnXG4gICAgICAgIGV4cGFuZEl0ZW0udGV4dENvbnRlbnQgPSAnZXhwYW5kJztcbiAgICAgICAgaXRlbVRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgICAgIGl0ZW1EZXNjLnRleHRDb250ZW50ID0gZGVzYztcbiAgICAgICAgaXRlbUR1ZURhdGUudGV4dENvbnRlbnQgPSBkdWVEYXRlO1xuICAgICAgICAvLyBBdHRhY2ggZXZlbnRsaXN0ZW5lcnNcbiAgICAgICAgbWFya0NvbXBsZXRlZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZU1hcmtDb21wbGV0ZWQpO1xuICAgICAgICBleHBhbmRJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlRXhwYW5kSXRlbSlcbiAgICAgICAgLy8gQXR0YWNoIHRoZSBlbGVtZW50c1xuICAgICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZChtYXJrQ29tcGxldGVkLCBpdGVtVGl0bGUsIGV4cGFuZEl0ZW0sIGl0ZW1EZXNjLCBpdGVtRHVlRGF0ZSk7XG4gICAgICAgIHJldHVybiBpdGVtQ29udGFpbmVyO1xuICAgIH1cbn1cblxuLy9pbXBvcnQge1N0b3JhZ2VDb250cm9sbGVyfSBmcm9tIFwiLi9TdG9yYWdlQ29udHJvbGxlclwiO1xuZnVuY3Rpb24gaGFuZGxlTWFya0NvbXBsZXRlZChldmVudCkge1xuICAgIGNvbnN0IGl0ZW1JbmRleCA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmRhdGFzZXQuaW5kZXg7XG4gICAgY29uc3QgaXRlbVR5cGUgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5kYXRhc2V0LnR5cGU7XG4gICAgLy8gcmVtb3ZlIGl0ZW0gZnJvbSBsaXN0LCBjaGFuZ2UgaXQncyB0eXBlLCB0aGVuIHJlYWRkIGl0XG4gICAgY29uc3QgaXRlbSA9IHRvRG9MaXN0LnJlbW92ZUxpc3RJdGVtKGl0ZW1UeXBlLCBpdGVtSW5kZXgpO1xuICAgIGl0ZW0uY2hhbmdlVHlwZSgnY29tcGxldGVkJyk7XG4gICAgdG9Eb0xpc3QuYWRkTGlzdEl0ZW0oaXRlbSk7XG4gICAgRE9NU3R1ZmYuY2xlYXJBbGwoKTtcbiAgICBET01TdHVmZi51cGRhdGVBbGwoKTtcbiAgICAvL1N0b3JhZ2VDb250cm9sbGVyLnVwZGF0ZSgpO1xufVxuZnVuY3Rpb24gaGFuZGxlQ3JlYXRlKCkge1xuICAgIC8vIFRha2UgdGhlIGZvcm0gZGF0YSBhbmQgY3JlYXRlIGEgbmV3IGxpc3QgaXRlbVxuICAgIGNvbnN0IGZvcm1FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtRWwpO1xuICAgIGNvbnN0IG5ld0l0ZW0gPSBuZXcgbGlzdEl0ZW0oXG4gICAgICAgIGZvcm1EYXRhLmdldCgndHlwZScpLFxuICAgICAgICBmb3JtRGF0YS5nZXQoJ3RpdGxlJyksXG4gICAgICAgIGZvcm1EYXRhLmdldCgnZGVzYycpLFxuICAgICAgICAnZmlsbGVyIGRhdGUnXG4gICAgKVxuICAgIC8vIEFkZCB0aGUgaXRlbSB0byB0aGUgbGlzdCBhbmQgdXBkYXRlXG4gICAgdG9Eb0xpc3QuYWRkTGlzdEl0ZW0obmV3SXRlbSk7XG4gICAgRE9NU3R1ZmYuY2xlYXJBbGwoKTtcbiAgICBET01TdHVmZi51cGRhdGVBbGwoKTtcbiAgICAvLyB1cGRhdGUgc3RvcmFnZVxufVxuXG5mdW5jdGlvbiBoYW5kbGVFeHBhbmRGb3JtKCkge1xuICAgIGNvbnN0IGV4cGFuZGVkRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5leHBhbmRlZC1mb3JtJyk7XG4gICAgZXhwYW5kZWRGb3JtLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVFeHBhbmRJdGVtKGV2ZW50KSB7XG4gICAgY29uc3QgdGFyZ2V0SXRlbSA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlO1xuICAgIGZvciAobGV0IGl0ZW0gb2YgdGFyZ2V0SXRlbS5jaGlsZE5vZGVzKSB7XG4gICAgICAgIC8vIE9ubHkgaGlkZSB0aGUgaXRlbSBwcm9wZXJ0aWVzIHRoYXQgYXJlIGhpZGVhYmxlXG4gICAgICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucygnaGlkZWFibGUnKSkge1xuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgY3JlYXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZS1idXR0b24nKTtcbmNyZWF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNyZWF0ZSk7XG5jb25zdCBleHBhbmRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2V4cGFuZC1idXR0b24nKTtcbmV4cGFuZEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVFeHBhbmRGb3JtKTtcbkRPTVN0dWZmLnVwZGF0ZUFsbCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==