### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?

with promises

- What is a Promise?
promise of future value 

- What are the differences between an async function and a regular function?
An async function will always return a promise whereas a regular function will not.

- What is the difference between Node.js and Express.js?
node.js is a part of js and it can run a serverside env and express.js is a framework of node to build web apps

- What is the error-first callback pattern?
A pattern where Node callbacks will have the error as the first parameter. 

- What is middleware?
Middleware are functions that run in the middle of a request response cycle.

- What does the `next` function do?
allows the next piece of middleware to run

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
the function and var names could be more descriptive 