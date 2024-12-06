---
sidebar_position: 2
slug: more-useful-principles
---

# More Principles

Object-Oriented Design is about modelling concepts with classes/objects, and
managing their dependencies. It is a set of coding techniques that arrange
dependencies such that objects can tolerate future changes.

## More Important Principles

### Law of Demeter

([source](https://www.baeldung.com/java-demeter-law#:~:text=The%20Law%20of%20Demeter%20is,interact%20with%20its%20immediate%20dependencies.))

- Aka principle of least knowledge.
- Goal: to build components that are less dependent on each other and loosely
  coupled.
- Recommends that objects should avoid accessing the internal data and methods
  of other objects. Instead, an object should only interact with its immediate
  dependencies.

Instead of

```java
Expenses expenses = new Expenses(100, 10);
Employee employee = new Employee();

employee.

getDepartment().

getManager().

approveExpense(expenses);
```

we should write

```java
Expenses expenses = new Expenses(100, 10);
Manager manager = new Manager();
Employee employee = new Employee(manager);

employee.

submitExpense(expenses);
```

The Law says that a method_X_of class_C_should only invoke the methods of:

- Class_C_itself
- An object created by*X*
- An object passed as an argument to*X*
- An object held in an instance variable of*C*
- A static field

![](https://res.cloudinary.com/dldviopcu/image/upload/v1733416093/CleanCode-20240807170810292.png)

![](https://res.cloudinary.com/dldviopcu/image/upload/v1733416093/CleanCode-20240807170840991.png)

![](https://res.cloudinary.com/dldviopcu/image/upload/v1733416093/CleanCode-20240807170920857.png)

![](https://res.cloudinary.com/dldviopcu/image/upload/v1733416093/CleanCode-20240807170946795.png)

![](https://res.cloudinary.com/dldviopcu/image/upload/v1733416093/CleanCode-20240807171007110.png)

Basically, don't let one class or method look into and expose the
implementation (methods, vars, state) of another class. When chaining, this
might be the case. Might - there's an exception for the builder pattern:

```java
BankAccount newAccount = new BankAccount
        .BankAccountBuilder("Jon", "22738022275")
        .withEmail("jon@example.com")
        .wantNewsletter(true)
        .build();
```

Above, \*
\*the[builder pattern](https://www.baeldung.com/creational-design-patterns#builder)
doesn’t violate the Law of Demeter if the builder is instantiated locally\*\*.
One
of the rules states that “Method*X_of class_C_should only invoke the methods of
an object created by_X*“.

Additionally, there are chained calls
in[Fluent APIs](https://www.baeldung.com/java-fluent-interface-vs-builder-pattern).
**Fluent APIs don’t violate the Law of Demeter if the chained calls are on
locally created objects**. But when the chained calls are on a non-locally
instantiated object or returns a different object, then it violates the Law of
Demeter.

Also, there are cases where we could violate the Law of Demeter when dealing
with data structures.**The typical data structure usage, like instantiating,
mutating, and accessing them locally, doesn’t violate the Law of Demeter**. In a
case where we’re calling a method on an object obtained from a data structure,
then the Law of Demeter may be violated.

From Thoughtworks:

![](https://res.cloudinary.com/dldviopcu/image/upload/v1733416093/CleanCode-20240807181746971.png)

---

### Avoid Hasty Generalisations

- **Prefer duplication**: If you're unsure about the correct abstraction, it's
  better to have duplicated code temporarily until you fully understand the
  commonalities and requirements for abstraction.
- **Identify commonalities**: Look for patterns and similarities in the
  duplicated code. When you notice parts that can be generalized, you'll be in a
  better position to provide meaningful abstractions.
- **Consider future requirements**: Instead of prematurely optimizing for
  performance or designing the "perfect" API, focus on code that can easily
  adapt to future changes.
- **Avoid premature abstractions**: If you abstract too early, you might end up
  with complex code that's difficult to maintain. Wait until you have a good
  understanding of the use cases before creating abstractions.
- **Mindful Abstraction**: When the commonalities are clear, it's the right time
  to create abstractions. Abstract out the shared functionality into functions
  or modules that accurately capture the essence of the problem.
  ([Source](https://www.franciscomoretti.com/code-tips/avoid-hasty-abstractions-aha))

---

### Prefer composition over inheritance

Inheritance models an "is-a" relationship, which can lead to complexity and code
duplication. Composition, on the other hand, models a "has-a" relationship,
promoting flexibility and maintainability by combining existing components. Keep
this in mind.

---
