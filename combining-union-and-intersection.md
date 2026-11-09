# Union and Intersection Types in TypeScript

## 1. Introduction

- Union and Intersection are two important features of TypeScript.
- Union (`|`) allows a variable to have multiple possible types.
- Intersection (`&`) combines multiple types into one type.

## 2. Detailed Explanation

### 1. Union Type (`|`)

Union type allows a variable to accept one of multiple types. It means the value can be either one type or another.

```typescript
type UserId = string | number;

const user1: UserId = "user123";
const user2: UserId = 101;
```

Here, `UserId` can accept either a string or a number.

### 2. Intersection Type (`&`)

Intersection type combines multiple types into one. It means an object must contain all the properties of the combined types.

```typescript
type User = {
  name: string;
  email: string;
};

type Admin = {
  role: string;
  permissions: string[];
};

type AdminUser = User & Admin;

const admin: AdminUser = {
  name: "Emon",
  email: "emon@example.com",
  role: "admin",
  permissions: ["read", "write"],
};
```

Here, `AdminUser` combines both `User` and `Admin` types. Therefore, the object must contain all the properties from both types.

### 3. Combining Union and Intersection

We can also combine both operators to create more flexible types.

```typescript
type Guest = {
  name: string;
};

type Member = {
  userId: number;
};

type User = Guest & (Member | { email: string });
```

Here, the object must have `name` and either `userId` or `email`.

## 3. Conclusion

- Union (`|`) allows multiple possible types.
- Intersection (`&`) combines multiple types.
- Union requires one of the possible types.
- Intersection requires all combined type properties.
- Both help create flexible and reusable types.
