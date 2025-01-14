# Getting Started with React and Vite

React is a powerful library for building user interfaces, and Vite is a modern build tool that offers an extremely fast development experience. In this guide, we'll walk through setting up a new React project with Vite.

## Why Vite?

Vite offers several advantages over traditional build tools:
- Lightning-fast hot module replacement (HMR)
- Out-of-the-box TypeScript support
- Optimized build process
- Rich plugin ecosystem

## Setting Up Your Project

To create a new React project with Vite, you can use the following command:

```bash
npm create vite@latest my-react-app -- --template react
```

This will set up a new project with all the necessary dependencies and configurations.

### Project Structure

Your project structure will look like this:

```
my-react-app/
├── node_modules/
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── vite.config.js
```

## Features

| Feature | Description |
|---------|-------------|
| HMR | Lightning-fast hot module replacement |
| TypeScript | Built-in TypeScript support |
| Optimization | Optimized build process |
| Plugins | Rich plugin ecosystem |

## Code Example

Here's a simple React component:

```jsx
import React from 'react'

function App() {
  return (
    <div>
      <h1>Hello Vite + React!</h1>
    </div>
  )
}

export default App
```