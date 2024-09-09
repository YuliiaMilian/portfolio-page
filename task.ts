// 1.	Define User Types:
// •	Create three TypeScript interfaces/types to represent the different user roles:
// •	Admin: Should have properties name, email, and a method createUser(user: User): void.
// •	Moderator: Should have properties name, email, and a method banUser(user: User): void.
// •	RegularUser: Should have properties name, email, and a method viewContent(): void.
// •	Use TypeScript type or interface to define these user roles.

type Admin = {
  name: string,
  email: string,
  createUser(user: User): void;
}

type Moderator = {
  name: string,
  email: string,
  banUser(contentId: string): void;
}

type RegularUser = {
  name: string,
  email: string,
  viewContent(): void;
}

// 2.	Union Type for Users:
// 	•	Create a union type User that can represent either an Admin, Moderator, or RegularUser.

type User = Admin | Moderator | RegularUser;

// 3.	Type Guards:
// 	•	Write type guard functions to distinguish between the three user roles. For example, isAdmin(user: User): user is Admin, isModerator(user: User): user is Moderator, etc.

const isAdmin = (user: User): user is Admin => {
  return 'createUser' in user;
}

const isModerator = (user: User): user is Moderator => {
  return 'banUser' in user;
}

const isRegularUser = (user: User): user is RegularUser => {
  return 'viewContent' in user;
}

// 4.	User Management Functions:
// •	Implement the following functions using your type guards:
// •	performAdminTask(user: User, task: () => void): void - Checks if the user is an Admin. If true, performs the given task; otherwise, logs an error.
// •	moderateContent(user: User, contentId: string): void - Checks if the user is a Moderator. If true, bans the content with the provided ID; otherwise, logs an error.
// •	viewContentAsUser(user: User): void - Checks if the user is a RegularUser. If true, allows viewing the content; otherwise, logs an error.

const performAdminTask = (user: User, task: () => void): void => {
  if (isAdmin(user)) {
    task();
  } else {
    throw Error();
  }
}

const moderateContent = (user: User, contentId: string): void => {
  if (isModerator(user)) {
    user.banUser(contentId);
  } else {
    throw Error();
  }
}

const viewContentAsUser = (user: User): void => {
  if (isRegularUser(user)) {
    user.viewContent();
  } else {
    throw Error();
  }
}

// 5.	Type Combinations:
// 	•	Create a type combination (intersection type) for a special role SuperUser who has the abilities of both an Admin and a Moderator.
// 	•	Implement a function superUserTask(user: SuperUser, task: () => void): void that allows a SuperUser to perform any admin or moderator task.

type SuperUser = Admin & Moderator;

const superUserTask = (user: SuperUser, task: () => void): void => {
  if (isAdmin(user) || isModerator(user)) {
    task();
  } else {
    throw Error();
  }
}

// 1- Create a function that accepts a UserNew object but allows any property to be optional.
interface UserNew {
  id: number;
  name: string;
  age: number;
  email: string;
}

type UserOptional = Partial<UserNew>;

let fun = (user: UserOptional) => {
};


// 2- Create a function that returns only selected properties from a Product object.
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

type SelectedProperties = Pick<Product, 'name'>;

let getSelectedProperties = (items: Product): SelectedProperties => {
  return {
    name: items.name
  };
};


// 3- Create a function that returns a Person object, excluding sensitive data like the socialSecurityNumber.
interface Person {
  name: string;
  age: number;
  socialSecurityNumber: string;
}
 type ExcludingSecurityNumber = Omit <Person, 'socialSecurityNumber'>;

 let data = (properties: Person): ExcludingSecurityNumber => {
  return {
    name: 'Yuliia',
    age: 24
  }
 }


// 4- Make a Config object immutable.
interface Config {
  apiKey: string;
  baseUrl: string;
  timeout: number;
}

type ImmutableConfig = Readonly<Config>;

let config: ImmutableConfig = {
  apiKey: 'ttt',
  baseUrl: 'uuu',
  timeout: 14,
}

//config.apiKey = 'yyy'; //read-only property


// 5- Create a type that represents a dictionary where the keys are strings, and the values are numbers.

type Strings = 'date' | 'numbers' | 'year';

type Value = 1 | 2 | 7;

type NewPoint = Record<Strings, Value>;

let point: NewPoint = {
  date: 1,
  numbers: 2,
  year: 7
}


// 6- Create a type that excludes specific values from a union of string literals.
type AvailableColors = "red" | "green" | "blue" | "yellow";

type SpecificValues = Exclude<AvailableColors, "red">;

//let colors: SpecificValues = "red"; //Type '"red"' is not assignable to type 'SpecificValues'


// 7- Create a type that extracts only certain values from a union of string literals.
type AvailableColor = "red" | "green" | "blue" | "yellow";

type ExtractsValues = Extract<AvailableColor, "green" | "yellow" >;

let newColors: ExtractsValues = "green";
let color: ExtractsValues = "yellow";


// 8- Create a type that removes null and undefined from a union type
type Address = string | null | undefined;

type NotNull = NonNullable<Address>;

//let value: NotNull = null //Type 'null' is not assignable to type 'string'.