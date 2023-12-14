# Todo List Web Application

Welcome to our Todo List application! 📝 This project is your go-to solution for efficient task management, meticulously crafted for a streamlined daily routine.

## Features

- **AddTodoModal:** Quickly add tasks using a sleek modal for effortless task input.

- **MyCard:** Visualize your tasks with style using the attractive card component, featuring priority indicators and delete functionality.

- **Description:** Dive into task specifics with a detailed modal, presenting crucial information such as title, description, priority, and due date.

- **MyInput:** Simplify task filtering and searching with a powerful input group featuring a dropdown, dynamically updating your task list.

- **MyNavbar:** Navigate through the app seamlessly with an intuitive navbar, providing easy access to essential functionalities.

- **TodoListProvider:** Effortlessly manage login status, user credentials, todos, and search terms with the TodoListProvider context.

- **AppRoutes:** Define application routes based on user authentication status, ensuring a smooth user experience.

- **App:** Initialize the application, manage user sessions, and render main routes for a user-friendly experience.

- **Home:** Explore the home component, showcasing a comprehensive Todo list with features like add, complete, and delete.

- **Login:** Securely log in to the application with a dedicated login component, ensuring a seamless and protected user authentication process.

- **NotFound:** Encounter a gracefully designed 404 Not Found page with a message and a link to navigate back to the home page.

Experience the ease and elegance of organized task management. Let our Todo List be your trusted companion in staying on top of your daily agenda.

For detailed documentation, including function parameters and usage, refer to the [JsDoc documentation](https://docs-rg7swyfto-felipyan19.vercel.app/).

## Getting Started

To start managing your tasks with our Todo List, follow these simple steps:

1. Clone the repository: `git clone https://github.com/your-username/todo-list.git`
2. Install dependencies: `npm install`
3. Run the application: `npm start`

Feel free to explore the codebase, delve into the components, and tailor the project to suit your task management needs.

Happy organizing! 🚀

### Table of Contents

*   [AddTodoModal][1]
    *   [Parameters][2]
*   [MyCard][3]
    *   [Parameters][4]
*   [Description][5]
    *   [Parameters][6]
*   [MyInput][7]
*   [handleSearchChange][8]
    *   [Parameters][9]
*   [handleSearch][10]
*   [handleDropdownChange][11]
    *   [Parameters][12]
*   [renderInputGroup][13]
*   [MyNavbar][14]
*   [TodoListProvider][15]
    *   [Parameters][16]
*   [AppRoutes][17]
*   [App][18]
*   [Home][19]
*   [handleSubmit][20]
    *   [Parameters][21]
*   [handleSubmit][22]
    *   [Parameters][23]
*   [onDelete][24]
    *   [Parameters][25]
*   [onComplete][26]
    *   [Parameters][27]
*   [Login][28]
*   [toggleShowPassword][29]
*   [NotFound][30]

## AddTodoModal

Renders a modal dialog for adding a new todo item.

### Parameters

*   `$0` **[Object][31]**&#x20;

    *   `$0.showModal` &#x20;
    *   `$0.handleClose` &#x20;
    *   `$0.handleSubmit` &#x20;
*   `showModal` **[boolean][32]** Controls the visibility of the modal
*   `handleClose` **[function][33]** Function to call on modal close
*   `handleSubmit` **[function][33]** Function to call on form submit

Returns **JSX.Element** A modal component with a form for adding a todo

## MyCard

Renders a card component with task details, including priority
indicators, completion status, and delete functionality.

### Parameters

*   `props` **[Object][31]** Contains task details and event handlers.

Returns **ReactElement** A card representing a single task.

## Description

Renders a modal with a title, description, priority, and due date.
It has a close button which hides the modal and a button to
acknowledge the information presented. It also dynamically
assigns a text color class based on the priority level.

### Parameters

*   `$0` **[Object][31]**&#x20;

    *   `$0.props` &#x20;
    *   `$0.setShow` &#x20;
    *   `$0.show` &#x20;
*   `props` **[object][31]** Contains title, description, priority,
    and dueDate.
*   `setShow` **[function][33]** Function to set the visibility of
    the modal.
*   `show` **[boolean][32]** Determines if the modal is visible.

Returns **JSX.Element** A modal component with dynamic content
and styling.

## MyInput

`MyInput` is a functional React component that renders an input group
with a dropdown allowing the user to search and filter todos by name,
priority, or date. It uses context to manage and update the list of
todos based on the search criteria.

Returns **JSX.Element** The search input group within a container and
navbar for filtering todos.

## handleSearchChange

Updates the search term state based on user input.

### Parameters

*   `event` **[object][31]** The input event triggering the
    change.

Returns **void**&#x20;

## handleSearch

Triggers a search operation based on the search term. If the
search term is different from the last term, it resets the
last term and updates the search. It then filters the todos
by the search term if it's not an empty string; otherwise,
it resets to the original todos from localStorage.

There are no parameters or return values as this function
relies on and manipulates state within its scope.

## handleDropdownChange

Handles the change event on a dropdown, updating
the title and resetting the search term.

### Parameters

*   `eventKey` **[string][34]** The key of the selected
    dropdown item.
*   `event` **[Object][31]** The event object containing
    the target text.

## renderInputGroup

Renders an input group based on the dropdownTitle state.
If the dropdownTitle is 'Nombre', a text search input is
rendered. If it's 'Prioridad', a priority select drop-down
is rendered. If it's 'Fecha', a date picker is rendered.

Returns **JSX.Element** The input group element for the
corresponding dropdownTitle value.

## MyNavbar

Represents the navigation bar in a Todo List application,
using context for user state and providing a logout
functionality.

## TodoListProvider

Provides context for a TodoList including state for login
status, login values, todo items, and search term. Wraps
child components with TodoListContext.Provider.

### Parameters

*   `props` **[object][31]** Contains children components.

    *   `props.children` &#x20;

Returns **JSX.Element** A TodoListContext.Provider component
wrapping children.

## AppRoutes

Defines the routing structure for the application based on the
authentication status from the TodoListContext.

Returns **JSX.Element** The routes to render, depending on login status.

## App

Initializes the application, sets user session in local storage,
and renders the main routes wrapped in the TodoListProvider and
BrowserRouter.

Returns **JSX.Element** The root component of the application.

## Home

Home component rendering a Todo list with add, complete,
and delete functionality, along with local storage sync.

## handleSubmit

Handles the submission of a form by preventing the
default form submission, appending a 'completada'
field to the form data, updating the context's todos
state, and persisting the new todos to localStorage.

### Parameters

*   `event` **[Event][35]** The submit event from the form.

Returns **void**&#x20;

## handleSubmit

Handles the form submission event by preventing the default
form submission, checking if the current session matches the
context's valueinlogin, and navigating to the home page if
the credentials are correct, otherwise alerts the user.

### Parameters

*   `event` **[Event][35]** The event object from the form submit.

## onDelete

Deletes a todo item by its index from the list
and updates local storage.

### Parameters

*   `index` **[number][36]** The index of the todo to delete.

Returns **void**&#x20;

## onComplete

Toggles the completion status of a todo item by index,
updates the todos in the context, and saves the new state
to localStorage. It also triggers a toast notification.

### Parameters

*   `index` **[number][36]** The index of the todo to toggle.

## Login

Renders the login component, provides UI for user
authentication, and navigates to the home page upon
successful login.

## toggleShowPassword

Toggles the state of password visibility.

## NotFound

Renders a 404 Not Found page component with a message
and a link to the home page.

[1]: #addtodomodal

[2]: #parameters

[3]: #mycard

[4]: #parameters-1

[5]: #description

[6]: #parameters-2

[7]: #myinput

[8]: #handlesearchchange

[9]: #parameters-3

[10]: #handlesearch

[11]: #handledropdownchange

[12]: #parameters-4

[13]: #renderinputgroup

[14]: #mynavbar

[15]: #todolistprovider

[16]: #parameters-5

[17]: #approutes

[18]: #app

[19]: #home

[20]: #handlesubmit

[21]: #parameters-6

[22]: #handlesubmit-1

[23]: #parameters-7

[24]: #ondelete

[25]: #parameters-8

[26]: #oncomplete

[27]: #parameters-9

[28]: #login

[29]: #toggleshowpassword

[30]: #notfound

[31]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[32]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean

[33]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function

[34]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[35]: https://developer.mozilla.org/docs/Web/API/Event

[36]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number
