# Type Narrowing

## 1. Introduction

- Process of reducing type of a variable from broader type to a specific type.
- Enables TS compiler to be make sure of what type it will be through type guard or conditions.

## 2. Detailed Explanation

What is the `typeof` an array and `null`? The answer is `object`, than how it can be identified type of coming value in a function or block of code with union i.e. `string[] | null` here type narrowing comes in discussion.

Let say a function of receiving string or number:

```typescript
const print = (value: string | number) => {
  return value.toUpperCase();
};
```

Here type of value can be either string or number then how can make the uppercase of a number if type of coming value is number?

Here we can do it using:

### 1. Type Guard

```typescript
const print = (value: string | number) => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else {
    return value;
  }
};
```

Checking and confirming the type of coming value whether is number or string and performing action according to type.

### 2. `instanceof`

instanceof operator workd well with an instance/object of class. here whether the coming value is an instance of a particular class

```typescript
class Dog {
  bark() {
    console.log("Woof!");
  }
}

class Cat {
  meow() {
    console.log("Meow!");
  }
}

const makeSound = (animal: Dog | Cat) => {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
};

makeSound(new Dog()); // Woof!
makeSound(new Cat()); // Meow!
```

### 3. `in` Operator

in operator works well in and object whether a specific property exists in an object and narrowing its type accordingly

```typescript
type Bird = { fly: () => {} };
type Fish = { swim: () => {} };

const move = (animal: Bird | Fish) => {
  if ("fly" in animal) {
    animal.fly();
    return;
  }

  animal.swim();
};
```

## 3. Conclusion

- Type narrowing reduces a broader type to a more specific type.
- instanceof checks whether a value is an instance of a class.
- in checks whether a specific property exists in an object.
- Type guards are used to check and narrow types.
