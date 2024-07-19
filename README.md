# js-learning
learning javascript



dom 
JavaScript provides a variety of functions for manipulating the Document Object Model (DOM). Here are some of the most commonly used DOM functions:

### Selecting Elements
1. **`getElementById`**
   ```javascript
   const element = document.getElementById('id');
   ```

2. **`getElementsByClassName`**
   ```javascript
   const elements = document.getElementsByClassName('className');
   ```

3. **`getElementsByTagName`**
   ```javascript
   const elements = document.getElementsByTagName('tagName');
   ```

4. **`querySelector`**
   ```javascript
   const element = document.querySelector('selector');
   ```

5. **`querySelectorAll`**
   ```javascript
   const elements = document.querySelectorAll('selector');
   ```

### Creating and Modifying Elements
1. **`createElement`**
   ```javascript
   const newElement = document.createElement('tagName');
   ```

2. **`createTextNode`**
   ```javascript
   const textNode = document.createTextNode('text');
   ```

3. **`appendChild`**
   ```javascript
   parentElement.appendChild(newElement);
   ```

4. **`insertBefore`**
   ```javascript
   parentElement.insertBefore(newElement, referenceElement);
   ```

5. **`removeChild`**
   ```javascript
   parentElement.removeChild(childElement);
   ```

6. **`replaceChild`**
   ```javascript
   parentElement.replaceChild(newElement, oldElement);
   ```

### Manipulating Attributes
1. **`getAttribute`**
   ```javascript
   const value = element.getAttribute('attributeName');
   ```

2. **`setAttribute`**
   ```javascript
   element.setAttribute('attributeName', 'value');
   ```

3. **`removeAttribute`**
   ```javascript
   element.removeAttribute('attributeName');
   ```

### Manipulating Class Names
1. **`classList.add`**
   ```javascript
   element.classList.add('className');
   ```

2. **`classList.remove`**
   ```javascript
   element.classList.remove('className');
   ```

3. **`classList.toggle`**
   ```javascript
   element.classList.toggle('className');
   ```

4. **`classList.contains`**
   ```javascript
   const hasClass = element.classList.contains('className');
   ```

### Event Handling
1. **`addEventListener`**
   ```javascript
   element.addEventListener('event', function);
   ```

2. **`removeEventListener`**
   ```javascript
   element.removeEventListener('event', function);
   ```

### Inner Content
1. **`innerHTML`**
   ```javascript
   element.innerHTML = 'new HTML content';
   ```

2. **`innerText` / `textContent`**
   ```javascript
   element.innerText = 'new text content';
   element.textContent = 'new text content';
   ```

### Styling
1. **`style`**
   ```javascript
   element.style.property = 'value';
   ```

### Traversing the DOM
1. **`parentNode`**
   ```javascript
   const parent = element.parentNode;
   ```

2. **`childNodes`**
   ```javascript
   const children = element.childNodes;
   ```

3. **`firstChild` / `lastChild`**
   ```javascript
   const firstChild = element.firstChild;
   const lastChild = element.lastChild;
   ```

4. **`nextSibling` / `previousSibling`**
   ```javascript
   const nextSibling = element.nextSibling;
   const previousSibling = element.previousSibling;
   ```

5. **`children`**
   ```javascript
   const children = element.children;
   ```

These functions and properties allow you to effectively manipulate and traverse the DOM to create dynamic and interactive web pages.
