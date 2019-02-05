import React from "react";

const Vocab = props => (
  <div className="vocab-container">
    <div className="vocab">
      <h1>Vocabulary Library</h1>
      <div className="javascript-vocab">
        <h2>JavaScript Vocabulary</h2>
        <ol>
          <li>
            Javascript - an object-oriented computer programming language
            commonly used to create interactive effects within web browsers
          </li>
          <li>Variables - holds data values and it can be changed anytime</li>
          <li>
            Primitive Data Types - String, Number, Boolean, Null, Undefined
          </li>
          <li>Non-primitive Data Type - Object, Date, Array</li>
          <li>
            Booleans - can have only two values, true or false; it is useful in
            controlling program flow using conditional statements like if..else,
            switch, while, do..while.
          </li>
          <li>
            String - is textual content; must be enclosed in single or double
            quotation marks
          </li>
          <li>
            Number - represents integer, float, hexadecimal, octal or
            exponential value
          </li>
          <li>
            Object - is a collection of properties, and a property is an
            association between a name (or key) and a value
          </li>
          <li>
            Array - is a data structure that we use to represent a list of items
          </li>
          <li>
            Function - set of statements that performs a task or calculates a
            value
          </li>
          <li>
            Parameters - variables listed as a part of the function definition
          </li>
          <li>
            Arguments - are values passed to the function when it is invoked
          </li>
          <li>
            Conditionals - control behavior in JavaScript and determine whether
            or not pieces of code can run
          </li>
          <li>If Condition - the most common type of conditional is the if statement, which only runs if the condition enclosed in parentheses () is truthy; you can extend an if statement with an else or an else if statement, which adds another block to run when the if conditional doesn’t pass</li>
          <li>Switch - is a conditional statement like if statement; it is useful when you want to execute one of the multiple code blocks based on the return value of a specified expression.</li>
          <li>Scope - is the accessibility of variables, functions, and objects in some particular part of your code during runtime; two types of scopes are global scopes and local scopes</li>
          <li>Javascript loops - for: loops through a block of code a number of times , for/in: loops through the properties of an object, while:  loops through a block of code while a specified condition is true, do/while: loops through a block of code once, and then repeats the loop while a specified condition is true</li>
          <li>Built-in objects - are collections of methods and properties that JavaScript provides</li>
          <li>Logical operators- there are three logical operators and they are: the and operator (&&),the or operator (||), the not operator, otherwise known as the bang operator (!)</li>
          <li>DOM - The Document Object Model (DOM) is an application programming interface (API) for valid HTML and well-formed XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated</li>
        </ol>
      </div>
      <div className="react-vocab">
        <h2>React Vocabulary</h2>
        <ol>
          <li>
            React - React.js is a JavaScript library. It was developed by
            engineers at Facebook
          </li>
          <li>
            ReactDOM - is the name of a JavaScript library. This library
            contains several React-specific methods, all of which deal with the
            DOM in some way or another.
          </li>
          <li>
            Virtual DOM object- is a representation of a DOM object, like a
            lightweight copy
          </li>
          <li>JSX - is a syntax extension to JavaScript. </li>
          <li />
        </ol>
      </div>
    </div>
  </div>
);

export default Vocab;
