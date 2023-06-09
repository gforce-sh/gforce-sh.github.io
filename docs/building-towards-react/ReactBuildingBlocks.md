---
sidebar_position: 3
slug: composition-data-event-lifecycle
---

# Composition, Data management and Event lifecycle

### 2. React Components

React lets us split UI into independent, reusable pieces called 'Components`, so that we can think about each piece in isolation nd test each component in isolation.

```
const App = () => {
  return <p>Hello React</p>;
};
```

A react component is simply the declaration of a component as above. In this case, it's a ***Functional component***, but can be a ***Class component*** too. **A functional component is declared as a JavaScript function which returns JSX**.

### 3. React Element

Components can be composed of other components. This is what makes React modular. In order to render a component inside another component, we place the child component name inside *angular brackets* this way:

```
const Greeting = () => {
  return <p>Hello React</p>;
};

const App = () => {
  return <Greeting />;
};
```

React elements are real Javascript objects, and beneath the syntactic sugar, React is just calling`React.createElement()` to create a new React element.

### 4. Props

Props enables components to exchange information between each other. 'Props' is the name give by react to an object that a parent component will always pass its child component. We can pass individual pieces of data to a child component as keys of the Prop object.

In the example above, `text` is one such defined prop, who's value is set to 'Hello React' and is passed down from the `App` component to the `Greeting` component. `Greeting` could be re-written as:

```
const Greeting = ({ text }) => {
  return <p>{text}</p>;
};

const App = () => {
  return <Greeting text="Hello React" />;
};
```

:::info
When writing the `Greeting` component above, we are destructuring the props object. Destructuring is a Javascript syntactic sugar. The component can we re-written as:
```
    const Greeting = (props) => {
        const text = props.text;
        return <p>{text}</p>;
    }
```
:::

### 5. State

A React application would typically need to maintain some state information. For example, if you are booking a transport on Grab, the application would need to store the following information in state before it calls an API to make a booking:

- Customer's name and id
- Current location
- Destination
- Type of transport request (4-seater, premium, van etc)

In React, a state is a simple JS object, that can be stored interally (or locally) in a component.

- A state should be private to the component it is created in.
- If we violate this principle of encapsulation, we end up with tighly coupled code that is hard to interpret, change and exted. **We don't want to do this**.

Using React hooks, we can create a state in a component as follows:

```
import { useState } from 'react'

const App = () => {
    const [state, setState] = useState("");

    return (
        <div>
            <button onClick={() => setState("Hello React")}>Click me to set state!</Button>
            <p>{state}</p>
        </div>
    );
};
```

We'll see it in action in the demo later.

### 6. Rendering a virtual DOM

A React application is composed of such components and elements. React reads these components and formulates a 'virtual DOM', that it then attaches to one DOM node specified by HTML. This attachment is done as follows:

HTML

```
    <div id="root"></div>
```

JSX

```
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
```

### 7. Event Lifecycle


### 8. React Hooks
