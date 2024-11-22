# React Native Layout Practice

This project is a React Native task designed for practicing layout, Flexbox, and styling concepts. The app displays a styled view with user information, a transaction summary, and a "Continue" button.

## Project Structure
```
reactnative-task/ 
├── assets/             # Contains image assets 
├── .gitignore          # Ignored files for version control 
├── App.tsx             # Entry point of the app 
├── MainView.tsx        # Main layout and UI logic 
├── babel.config.js     # Babel configuration 
├── package.json        # Dependencies and scripts 
├── package-lock.json   # Locked dependency tree 
├── postcss.config.js   # PostCSS configuration 
├── tailwind.config.js  # Tailwind CSS configuration 
├── tsconfig.json       # TypeScript configuration 
└── README.md           # Project description
```

## Prerequisites

- Node.js installed (preferably the latest LTS version).
- Expo CLI or React Native CLI installed globally.

## Features

- Layout design using Flexbox.
- Styling with the `StyleSheet` API in React Native.
- Use of `View`, `Text`, `Image`, and `TouchableOpacity` components.
- Practice importing and displaying local assets.

## Preview

The layout includes:
- A header image displayed in a round container.
- User details (e.g., recipient name, sender details, transaction details).
- A styled "Continue" button at the bottom of the layout.

### Components and Styling
**Flexbox Layout:** The layout is implemented using Flexbox properties (flex, alignItems, justifyContent) for responsive design.
***Styling:** All styles are defined in the StyleSheet.create() method for modular and scalable styling.
**Local Assets: **Images (round.jpg, john.png) are loaded using require().
**Main Components**
**Header Image: **A round image representing the recipient.
**User Information:** Displays the transaction success message, recipient name, sender name, and email.
**Transaction Details:** Includes the transaction date and reference number.
**Button:** A TouchableOpacity styled as a button with an action handler.