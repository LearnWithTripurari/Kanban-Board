In JavaScript, you can manipulate the Document Object Model (DOM) using a variety of APIs and methods to interact with the HTML and XML content of a web page. These APIs allow you to access, modify, and manipulate elements and their attributes on a web page. Here are some of the core DOM manipulation methods and APIs:

1. **Selecting Elements:**
    - `document.getElementById(id)`: Retrieves an element by its unique `id` attribute.
    - `document.querySelector(selector)`: Returns the first element that matches the specified CSS selector.
    - `document.querySelectorAll(selector)`: Returns a NodeList of all elements that match the selector.

2. **Accessing and Modifying Element Properties:**
    - `element.innerHTML`: Gets or sets the HTML content within an element.
    - `element.textContent`: Gets or sets the text content within an element.
    - `element.value`: Gets or sets the value of form elements (input, textarea, etc.).
    - `element.getAttribute(attr)`: Retrieves the value of a specified attribute.
    - `element.setAttribute(attr, value)`: Sets the value of a specified attribute.

3. **Manipulating Element Structure:**
    - `document.createElement(tagName)`: Creates a new element with the specified tag name.
    - `element.appendChild(child)`: Adds a child element to another element.
    - `element.removeChild(child)`: Removes a child element from its parent.
    - `element.replaceChild(newChild, oldChild)`: Replaces one child element with another.
    - `element.parentElement`: Access the parent element of an element.
    - `element.nextElementSibling` and `element.previousElementSibling`: Access adjacent sibling elements.

4. **Adding and Removing Classes:**
    - `element.classList.add(className)`: Adds a CSS class to an element.
    - `element.classList.remove(className)`: Removes a CSS class from an element.
    - `element.classList.toggle(className)`: Toggles a CSS class on or off.
    - `element.classList.contains(className)`: Checks if an element has a specific CSS class.

5. **Event Handling:**
    - `element.addEventListener(event, callback)`: Attaches an event listener to an element.
    - `element.removeEventListener(event, callback)`: Removes an event listener from an element.
    - Event properties like `onclick`, `onchange`, etc., can be used to assign event handlers.

6. **Style Manipulation:**
    - `element.style.property`: Access and modify the inline CSS styles of an element.
    - `element.style.cssText`: Gets or sets the entire inline style attribute of an element.

7. **Traversing the DOM:**
    - Methods like `element.querySelector()`, `element.querySelectorAll()`, and properties like `element.parentNode`, `element.childNodes`, and more can be used for navigating the DOM tree.

These are just some of the fundamental methods and APIs for manipulating the DOM in JavaScript. The DOM is a complex and extensive API, so you may want to refer to the Mozilla Developer Network (MDN) documentation for more in-depth information and examples: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model