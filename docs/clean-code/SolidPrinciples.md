---
sidebar_position: 1
slug: solid-principles
---

# SOLID

Object-Oriented Design is about modelling concepts with classes/objects, and
managing their dependencies. It is a set of coding techniques that arrange
dependencies such that objects can tolerate future changes.

### Single Responsibility Principle

![](https://res.cloudinary.com/dldviopcu/image/upload/v1733416095/Pasted_image_20241205230942.png)

Don't put functions/ methods, that change for different reasons, in the same
class; ie. a class should have only one reason to change
If for eg. we change `reportHours` func (for instance to change the format from
decimal to fractional hours - 'and a half'), the change shouldn't
impact `calcPay`.

---

### Open/Closed Principle

Modules should be open for extension, but closed for modification.

Write classes in such a way that when you need to extend it to support more
functionality, you don 't have to change its existing code / implementation.

_Bad_

```java
class Shape {
}

class Circle extends Shape {
}

class Square extends Shape {
}

class DrawAllShapes {
    drawAllShapes(Shape[] shapes) {
        for (type in shapes) {
            switch (type) {
                case square:
                    square.drawSquare()
                case circle:
                    circle.drawCircle()
            }
        }
    }
}
```

Issue: When adding new shape `Oval`, `Square` and `Circle` classes will also
need to be recompiled, and the switch statement will need to be modified.

_Good_ (if we only care about adding new shapes)

```java
class Shape {
    draw()
}

class Circle extends Shape {
    draw()
}

class Square extends Shape {
    draw()
}

class DrawAllShapes {
    drawAllShapes(Shape[] shapes) {
        for (shape in shapes) {
            shape.draw()
        }
    }
```

Now, adding `Oval` class will not need any modification in
class `DrawAllShapes`. It can just be included in the input shape list arg.

**Note:**
If we want to draw all squares first (ordering), we could have built an
abstraction in the current `DrawAllShapes` class to handle it. This indicates
that we need to have some idea of the "axis of movement" when writing a
class and using OOP to protect us from changing requirements.

---

### Liskov Substitution Principle

Objects of a superclass should be replaceable by objects of a subclass without
affecting the <u>correctness</u> of the program.

![](https://res.cloudinary.com/dldviopcu/image/upload/v1733416095/Pasted_image_20241205233122.png)

---

### Interface Segregation Principle

Uncle Bob: “Clients should not be forced to depend upon interfaces that they do
not \[entirely] use“.

It aims to reduce the side effects of using larger interfaces by breaking the
application interfaces into smaller ones. Each class or interface should serve a
single purpose.

[Baeldung](https://www.baeldung.com/java-interface-segregation): Precise
application design and correct abstraction is the key behind the Interface
Segregation Principle.**Though it’ll take more time and effort in the design
phase of an application and might increase the code complexity, in the end, we
get a flexible code.**

As more features come in, we need to add a LoanPayment service:

```java
public interface Payment {
    // original methods
    void initiatePayments();

    Object status();

    List<Object> getPayments();

    // new methods added as more features come in
    void intiateLoanSettlement();

    void initiateRePayment();
}

public class LoanPayment implements Payment {
    @Override
    public void initiatePayments() {
        throw new UnsupportedOperationException("This is not a bank payment");
    }

    @Override
    public Object status() {
        // ...
    }
    // other methods...
}

public class BankPayment implements Payment {
    @Override
    public void initiatePayments() {
        // ...
    }

    @Override
    public Object status() {
        // ...
    }

    // other methods...
    @Override
    public void intiateLoanSettlement() {
        throw new UnsupportedOperationException("This is not a loan payment");
    }
}
```

Note that the_BankPayment_implementation now has implemented the new methods.
And since it does not need them and has no logic for them, it’s**just throwing
an UnsupportedOperationException. This is where we start violating the
principle.**

Improved:

```java
public interface Payment {
    Object status();

    List<Object> getPayments();
}

public interface Bank extends Payment {
    void initiatePayments();
}

public interface Loan extends Payment {
    void intiateLoanSettlement();

    void initiateRePayment();
}

public class BankPayment implements Bank {
    @Override
    public void initiatePayments() {
        // ...
    }

    @Override
    public Object status() {
        // ...
    }

    @Override
    public List<Object> getPayments() {
        // ...
    }
}

public class LoanPayment implements Loan {
    @Override
    public void intiateLoanSettlement() {
        // ...
    }

    @Override
    public void initiateRePayment() {
        // ...
    }

    @Override
    public Object status() {
        // ...
    }

    @Override
    public List<Object> getPayments() {
        // ...
    }
}
```

---

### Dependency Inversion Principle

Dependency Inversion is the strategy of depending upon interfaces or abstract
functions and classes rather than upon concrete functions and classes.
Components should work in isolation.

![](https://res.cloudinary.com/dldviopcu/image/upload/v1733416095/Pasted_image_20241206002932.png)

should be re-modelled into

![](https://res.cloudinary.com/dldviopcu/image/upload/v1733416095/Pasted_image_20241206003011.png)

In code form:

```java
interface InterfaceB {
    method()
}

class ClassB implements InterfaceB {
    // fields, constructor and methods
}

class ObjectA {
    InterfaceB objectB;

    ObjectA(InterfaceB objectB) {
        this.objectB = objectB;
    }
    //...
}
```

[From Baeldung](https://www.baeldung.com/cs/dip#why-is-the-dependency-inversion-principle-important)
**Why Is the Dependency Inversion Principle Important?**
When we write code for applications, we might split our logic into multiple
modules. Nonetheless, this will result in a code with dependencies. One
motivation behind DIP is to prevent us from depending upon modules that often
change. Concrete classes change frequently, while abstractions and interfaces
change much less. For example, operations like bug fixing, code recompiling, or
merging different branches will be much easier.

However, there is more to it. DIP is key to achieving loosely coupled and
maintainable systems alongside concepts such
as Polymorphism or Dependency injection.

---
