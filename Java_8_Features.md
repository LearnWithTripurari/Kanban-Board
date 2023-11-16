# Java 8 Features :-
1. ### Lambda Expression
2. ### Functional Interfaces
3. ### Streams API
4. ### Default Methods in Interface
5. ### Static methods in Interface
6. ### Method References
7. ### Optional
8. ### New Date and Time API
9. ### Nashorn JavaScript Engine
10. ### BASE64 Encode Decode

---
## Lambda Expression: Anonymous function

Lambda expressions in Java provide a concise way to express instances of single-method interfaces (functional interfaces).

A functional interface is an interface with only one abstract method.
Before Java 8, if you wanted to implement the method of a functional interface, you had to create an anonymous inner class, which could lead to verbose and less readable code.

Lambda expressions were introduced to address this issue and make the code more concise and expressive.

> Not having any name

> Not having any return type

> Not having any modifier

### *Example :-*

(parameters) -> expression

(parameters) -> { statements; }

---
**If body have only one statement**

```bash
 () -> System.out.println("Lambda Expression");
 
 (String str) -> {return str.length();}
 // OR
 str -> str.length();
 ```
---



---

