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