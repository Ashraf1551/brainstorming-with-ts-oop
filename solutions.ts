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
