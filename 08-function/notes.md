# **1️ Function Components (Most Important)**

A function component is simply a JavaScript function that returns JSX (HTML-like syntax).

## *Why function components?*

Lightweight
Easy to read
Recommended by React
Work with Hooks (useState, useEffect)

✔ Example:

function Greeting() {
  return <h1>Hello User 👋</h1>;
}
You use it like:
<Greeting />

## *Key Points:*

Must start with capital letter
Must return JSX
Cannot return multiple elements unless wrapped inside <div> or <> </>

# **Event Handler Functions**

These functions run when a user interacts with your page:
Clicking a button
Typing in an input
Submitting a form
Hovering

✔ Example:
function App() {
  function handleClick() {
    alert("Button Clicked!");
  }

  return <button onClick={handleClick}>Click Me</button>;
}

## *Key Points:*

Event names are camelCase (onClick, onChange, onSubmit)
You pass the function reference, not function call
✔ onClick={handleClick}
❌ onClick={handleClick()}

# **State Update Functions (useState)**

React uses Hooks to manage data inside components.
The most common hook:
const [value, setValue] = useState(initialValue);

✔ Example:
function Counter() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);  // updates the UI
  }

  return (
    <>
      <h2>{count}</h2>
      <button onClick={increase}>Increase</button>
    </>
  );
}

## *Key Points:*

setCount() is a state update function
When state updates → component re-renders automatically
You never manually change UI — React does that

# **Functions Passed as Props**

This is how parent and child components communicate.
Parent → passes function
Child → calls function

✔ Parent:
function Parent() {
  function sayHello() {
    alert("Hello from Parent!");
  }

  return <Child onHello={sayHello} />;
}

✔ Child:
function Child({ onHello }) {
  return <button onClick={onHello}>Click Child</button>;
}

## *Why used?*

Child wants to change parent state
Component-to-component communication
Used in large apps to control behavior

## **Inline Arrow Functions in JSX**

Used for quick one-line actions.

✔ Example:
<button onClick={() => alert("Inline Clicked")}>
  Click
</button>

## *Why used?*

When you need to pass arguments
When action is simple
✔ Passing arguments example:
<button onClick={() => greet("Vivek")}>
  Say Hello
</button>

