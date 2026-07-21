# ✅ To-Do List

A simple, minimalist to-do list application with localStorage persistence.

## 🚀 Features

- **Add Tasks**: Input field with add button or Enter key
- **Complete Tasks**: Checkbox to mark tasks as done
- **Delete Tasks**: Remove individual tasks
- **Statistics**: Total, completed, and pending task counts
- **Clear Completed**: Remove all completed tasks
- **Clear All**: Remove all tasks (with confirmation)
- **Persistent Storage**: Tasks saved in localStorage
- **Minimalist Design**: Clean, modern interface
- **Responsive**: Works on all devices

## 💾 localStorage Explanation

### What is localStorage?

`localStorage` is a web storage API that allows websites to store key-value pairs in the browser. Data stored in localStorage persists even after the browser is closed and reopened.

### How It Works in This App

#### Saving Tasks
```javascript
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}