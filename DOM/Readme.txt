🎃 What is DOM?
- The Document Object Model (DOM) is a programming interface for HTML(Hypertext Markup Language) 
and XML(Extensible markup language) documents. It defines the logical structure of 
documents and the way a document is accessed and manipulated.

- Note: It is called a Logical structure because DOM doesn’t specify any relationship 
between objects. 

- DOM is a way to represent the webpage in a structured hierarchical way so that it 
will become easier for programmers and users to glide through the document. With DOM,
we can easily access and manipulate tags, IDs, classes, Attributes, or Elements of 
HTML using commands or methods provided by the Document object. Using DOM, the 
JavaScript gets access to HTML as well as CSS of the web page and can also add 
behavior to the HTML elements. So basically Document Object Model is an API that 
represents and interacts with HTML or XML documents.





🎃 Why DOM is required?
- HTML is used to structure the web pages and JavaScript is used to add behavior to our 
web pages. When an HTML file is loaded into the browser, the JavaScript can not 
understand the HTML document directly. So, a corresponding document is created(DOM). 
DOM is basically the representation of the same HTML document but in a different 
format with the use of objects. JavaScript interprets DOM easily i.e. JavaScript can 
not understand the tags(<h1>H</h1>) in HTML document but can understand object h1 in 
DOM. Now, JavaScript can access each of the objects (h1, p, etc) by using different 
functions.

- Structure of DOM: DOM can be thought of as a Tree or Forest(more than one tree). 
The term structure model is sometimes used to describe the tree-like representation 
of a document.  Each branch of the tree ends in a node, and each node contains objects  
Event listeners can be added to nodes and triggered on an occurrence of a given event.
One important property of DOM structure models is structural isomorphism: if any two DOM 
implementations are used to create a representation of the same document, they will 
create the same structure model, with precisely the same objects and relationships.





🎃 Why called an Object Model?
- Documents are modeled using objects, and the model includes not only the structure of 
a document but also the behavior of a document and the objects of which it is composed 
like tag elements with attributes in HTML.

- Properties of DOM: Let’s see the properties of the document object that can be accessed 
and modified by the document object.

- Properties of DOM
Window Object: Window Object is object of the browser which is always at top of the 
hierarchy.  It is like an API that is used to set and access all the properties and 
methods of the browser. It is automatically created by the browser.
Document object: When an HTML document is loaded into a window, it becomes a 
document object. The ‘document’ object has various properties that refer to other 
objects which allow access to and modification of the content of the web page. 
If there is a need to access any element in an HTML page, we always start with 
accessing the ‘document’ object. Document object is property of window object.
Form Object: It is represented by form tags.
Link Object: It is represented by link tags.
Anchor Object: It is represented by a href tags.
Form Control Elements: Form can have many control elements such as text fields, 
buttons, radio buttons, checkboxes, etc.
