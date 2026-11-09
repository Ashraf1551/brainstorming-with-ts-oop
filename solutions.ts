const multiplyValue = (value: number, multiplier?: number): number => {
  if (typeof multiplier === "number") {
    return value * multiplier;
  }

  return value * 2;
};

const processInput = (input: string | number | boolean): string | number => {
  if (typeof input === "string") {
    return input.trim().toLowerCase();
  } else if (typeof input === "number") {
    return input * 10;
  } else {
    return input ? "Active" : "Inactive";
  }
};

const formatCoordinate = (val: readonly [number, number, string]): string => {
  return `Location: ${val[2]} (${val[0]}, ${val[1]})`;
};

function concatenateArrays<T>(...arrays: T[][]): T[] {
  let result: T[] = [];

  for (let i = 0; i < arrays.length; i++) {
    result = result.concat(arrays[i]);
  }

  return result;
}

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (
  courses: Course[],
  minStudents: number,
): Course[] => {
  return courses.filter((course) => {
    return course.isPublished === true && course.students >= minStudents;
  });
};

function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map(function (item) {
    return item[key];
  });
}

class Employee {
  constructor(
    protected name: string,
    private baseSalary: number,
  ) {}

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    baseSalary: number,
    private department: string,
  ) {
    super(name, baseSalary);
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

function validateAgeAsync(age: number): Promise<string> {
  return new Promise((resolve, reject) => {
    if (age < 18) {
      reject(new Error("Access Denied: Must be 18 or older"));
      return;
    }

    setTimeout(() => {
      resolve("Access Granted");
    }, 1000);
  });
}
