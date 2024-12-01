---
sidebar_position: 6
slug: /conceptual-review
---

# The big picture

:::tip
"What makes a good programmer is how they think about the bigger picture and pay
attention to breaking changes, and how
to rollback in case of a problem."
:::

### What does the big picture of our emoji app look like?

![flow](./lab/assets/emoji-demo-flow-diagram.png)

The architecture of components, how they are composed and how they communicate
with each other is critical in building a
scalable application. Realising this architecture is generally not step one. We
should have an idea of what the
design of our application will look like just as we're starting to implement the
app, but this will likely evolve and
improve as the granular details of our implementation become clearer, as we
begin to identify code that overlaps in our
implementation, or as the business requirements evolve over time. We need to
constantly **refactor** our implementation
to reflect a cleaner and more understandable design, _and we
generally only have clarity of this final architecture just prior to the final
refactor_. It is therefore imperative
that we write code in an agile manner, following OOP and SOLID principles. This
ensures we can make changes sustainably
and with the least effort.

Ultimately, as you spend more time working on React applications, how you reach
the "big picture" will become clearer
to you.

#### How did we refactor our demo app?

We initially placed all our UI JSX to show 1 emoji row directly inside `App`,
when we wanted to just get the application up and running. First, we refactored
this UI into the `EmojiRow` component. Subsequently, our `App` component
consisted of several `EmojiRow`s and the Input components. Our second refactor
was to group `Input` and `EmojiRow`s inside a new `EmojiSearch` component. This
added semantic meaning by separating the responsibility of `App`
and `EmojiSearch`. This also gave us a clean enough architecture to
integrate `Routes` into `App` in exercise 3.

### Examples of how we used key development concepts of React in our demo?

#### 1. Modularisation

`EmojiRow` formed into a modular component, that we then used with the
Javascript `.map()` method to re-instantiate
multiple times for all emojis

#### 2. Declarative vs Imperative

`EmojiRow` was re-instantiated for each emoji that the endpoint returned. We
didn't have to keep track of how many rows
we needed to create in HTML every time we changed the input. We just _declared_
what the row should look like, and React
handled the rest for every emoji the server returned.

#### 3. Component re-usability

We were able to reuse `EmojiRow` and `List` multiple times. Even `Loader`
and `Placeholder` that we imported
from `semantic-ui` are modular re-usable components that we can "plug-and-play"
anywhere in our app.

#### 4. Component hierarchy

This allows us to separate concerns of functionality.

- We were able to abstract away logic to route to different components by
  wrapping our search and details pages
  inside `<Routes/>`.
- We carried out all the external data fetching in parent
  component `EmojiSearch`, and passed the data to
  child `EmojiRow`s.

#### 5. Flow of information

![data](./lab/assets/flow-of-data-demo.png)
