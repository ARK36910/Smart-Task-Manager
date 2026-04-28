# VanillaTask

VanillaTask is a modern task management web application built with **HTML, CSS, and JavaScript**. It provides secure user authentication, password validation, and an interactive **Kanban-style dashboard** for organizing tasks efficiently.

## Features

* **User Authentication**

  * Sign up with username, email, and password
  * Login system using localStorage
  * Password confirmation and validation
  * Password strength indicator

* **Task Management Dashboard**

  * Kanban board with three columns:

    * To Do
    * In Progress
    * Done
  * Drag-and-drop task movement
  * Add new tasks dynamically
  * Task priorities:

    * High
    * Medium
    * Low
  * Real-time task count updates

* **Modern UI/UX**

  * Dark-themed responsive interface
  * Gradient branding design
  * Interactive modal for task creation
  * Profile display with user initials

## Tech Stack

* **HTML5**
* **CSS3**
* **Vanilla JavaScript**
* **localStorage API**

## Project Structure

```bash
VanillaTask/
│
├── login.html
├── signup.html
├── dashboard.html
├── styles.css
├── login.js
├── signup.js
└── main.js
```

## How It Works

### Authentication

* User data is stored locally in the browser using `localStorage`
* Signup validates:

  * Username presence
  * Email presence
  * Password length
  * Password confirmation

### Dashboard

* Preloaded sample tasks
* Tasks can be:

  * Added
  * Dragged between columns
  * Prioritized
  * Organized visually

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/VanillaTask.git
```

2. Open the project folder.

3. Run `signup.html` or `login.html` in your browser.

## Future Improvements

* Backend database integration
* Multi-user support
* Task editing and deletion
* Due dates and deadlines
* Search and filtering
* Mobile optimization
* Cloud sync
