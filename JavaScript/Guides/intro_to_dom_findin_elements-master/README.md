# Introduction to the DOM

The Document Object Model (DOM) is a programming interface for HTML documents (and XML documents), and JavaScript is a programming language. The DOM represents the structure of a document (such as an HTML document) in a tree-like format, and provides a way for programming languages like JavaScript to access and manipulate the elements of the document. Because the DOM and JavaScript serve different purposes, the DOM methods and properties for manipulating the DOM are not considered part of the JavaScript language. Instead, they are part of the DOM API, which allows JavaScript to interact with the structure of a document.

A programming interface (API) is a set of rules and protocols that allow different software programs to communicate with each other. In the case of the Document Object Model (DOM), the API provides a way for a programming language like JavaScript to access and manipulate the elements of an HTML document, such as adding, removing, or modifying elements.

## The HTML DOM & the DOM API

When a web page is loaded, the browser creates a representation of the page in memory, known as the Document Object Model (DOM). The **DOM** is a hierarchical tree-like structure that consists of a root node (the document object), and child nodes that represent the elements, attributes, and text content of the page.

The **DOM API** provides a set of methods and properties that can be used to access and manipulate the elements of the DOM. For example, the getElementById method can be used to retrieve a specific element from the DOM by its ID, while the innerHTML property can be used to change the content of an element.

JavaScript can use these methods and properties to interact with the structure of a document, such as changing the text of a button or adding a new element to the page.

For example, the following JavaScript code uses the getElementById method to access the element with the ID "myButton" and changes its text content to "Click me!":

```
let button = document.getElementById("myButton");
button.innerHTML = "Click me!";
```

In this way, the DOM API allows JavaScript to access and manipulate the elements of the DOM, making it possible to create dynamic and interactive web pages.



### HTML elements vs Nodes

In HTML, elements are the basic building blocks of a webpage. They consist of a start tag, content, and an end tag. For example, the paragraph element is represented by the "p" tag and the content inside the "p" tags is the content of the paragraph.

Nodes, on the other hand, are a way to represent the structure of an HTML document in a tree-like format, where each element and its content are represented as a node. Each node has a parent, child, and sibling relationship with the other nodes in the tree.

Both elements and nodes are used to create the structure and content of a webpage, but elements are used to create the actual content, while nodes are used to represent the structure of the document. In common, both elements and nodes are used for the same purpose, creating structure and content for a webpage.



### HTMLCollection & NodeList

In JavaScript, HTMLCollection and NodeList are both types of object collections that represent a group of elements in an HTML document.

An HTMLCollection is a collection of HTML elements, which is returned by methods such as getElementsByTagName, getElementsByName, and getElementsByClassName. These methods are available on the document object and allow you to access elements in the HTML document based on the element's tag name, name attribute, or class name. HTMLCollection is a live collection, which means that the collection is updated automatically when the elements in the document are modified.

A NodeList is a collection of nodes, which is returned by methods such as querySelectorAll and getElementsByTagNameNS. These methods are also available on the document object and allow you to access elements in the HTML document based on CSS selectors or by namespace[^1]. Like HTMLCollection, NodeList is also a live collection.

Both HTMLCollection and NodeList are similar in that they both represent a group of elements in the document, but they have some differences in their usage and functionality.

HTMLCollection is mainly used to access elements by the element tag, name attribute, and class name. It is mainly used with getElementsByTagName, getElementsByName, and getElementsByClassName.

NodeList is mainly used to access elements by CSS selectors or by namespace. It is mainly used with querySelectorAll and getElementsByTagNameNS.

HTMLCollection and NodeList are not arrays, but they have similar properties and methods to arrays, such as length, item(), and [].

In summary, both HTMLCollection and NodeList are object collections that allow you to access elements in an HTML document in a similar way, but they have different methods and properties, and are designed for different types of access to elements.

[^1]: What is a namespace? 
A namespace is a way of naming elements in an XML or HTML document in such a way that the names **do not conflict** with other elements in the document. It allows different elements to have the same name as long as they are in different namespaces. The namespace is typically represented by a URI (Uniform Resource Identifier), which is a string that uniquely identifies the namespace. In the context of the provided sentence, the NodeList is used to access elements in an HTML or XML document by their CSS selectors or by their namespace, which is identified by a URI.
Let's say you have an HTML document that has multiple elements with the class "my-class". Without namespaces, if multiple elements in the page have the same class "my-class", you will not be able to distinguish them from one another. However, if you assign a namespace to these elements, you can access them more easily and accurately. For example, you could have different namespaces for different sections of the page, such as "header", "body", and "footer". Then, you can use the namespace along with the class to target specific elements, like so: header.my-class, body.my-class, footer.my-class.
This way, you could target the specific elements you want while avoiding naming conflicts with other elements that have the same class.