# JavaScript Code Projects

This folder contains 10 simple JavaScript projects. Each project helps you learn and practice different JavaScript concepts. Here is a summary of each project, what it does, and the main things used to build it.

---

## 1. Todo List

**What is it?**
- A simple app to add, edit, complete, and delete tasks.

**Main things used:**
- `localStorage` to save your tasks even after refreshing the page.
- `JSON.parse` and `JSON.stringify` to store and get tasks from localStorage.
- Event listeners for buttons (add, edit, complete, delete).
- Word count limit and clear button for input.

**How it works:**
- You type a task and add it to the list.
- You can mark tasks as complete, edit them, or delete them.
- The app remembers your tasks using localStorage.

---

## 2. Counter App

**What is it?**
- A number counter that you can increase, decrease, reset, or double.

**Main things used:**
- Event listeners for button clicks.
- If-else statements to check limits (min and max values).
- Disabling buttons when limits are reached.
- Changing color based on the value (positive, negative, zero).

**How it works:**
- Click buttons to change the number.
- The number can't go below -10 or above 10.
- The color changes based on the number.

---

## 3. Character Counter

**What is it?**
- An app that counts the number of characters or words you type.

**Main things used:**
- Event listeners for input changes.
- String methods like `.length` and `.split()` to count characters or words.
- Showing the count live as you type.
- Limiting the number of characters or words.

**How it works:**
- Type in the box and see the count update instantly.
- You can't type more than the set limit.

---

## 4. Color Flipper

**What is it?**
- An app that changes the background color to a random color when you click a button.

**Main things used:**
- Arrays to store color values or generating random colors.
- Math functions like `Math.random()` to pick a color.
- Event listeners for button clicks.
- DOM manipulation to change the background color.

**How it works:**
- Click a button and the background color changes to a new random color.
- You can see the color code displayed on the screen.

---

## 5. Accordion FAQ

**What is it?**
- An FAQ section where you can click on questions to show or hide the answers. Only one answer opens at a time, but you can also expand or collapse all with buttons.

**Main things used:**
- Event listeners for mouse clicks and keyboard keys (Enter/Space) for accessibility.
- Adding and removing CSS classes to show or hide answers.
- Functions to open all or close all items at once.
- Simple logic to make sure only one answer is open at a time (for better user experience).

**Why these are used:**
- Event listeners let you react to user actions (clicks and key presses).
- Toggling classes is an easy way to show/hide content using CSS.
- Keyboard support makes the FAQ usable for everyone, not just mouse users.
- The open/close all buttons help users quickly see or hide all answers.

**How it works:**
- Click a question or press Enter/Space to open its answer.
- Only one answer is open at a time, unless you use the expand/collapse all buttons.

---

## 6. Modal Popup

**What is it?**
- A system to show popup modals for messages, information, or loading screens. You can open different modals, close them, and see a loading animation.

**Main things used:**
- Event listeners for button clicks and keyboard (Escape key) to open/close modals.
- Functions to show a specific modal or hide all modals.
- Overlay to darken the background and focus on the popup.
- Simulated loading with setTimeout and a spinner animation.
- Accessibility: close modals with Escape key or by clicking outside the modal.

**Why these are used:**
- Event listeners make the modals interactive and easy to control.
- Overlay and modal logic help focus user attention and improve user experience.
- Loading simulation shows how to handle waiting for data or actions.
- Accessibility features make the popup system usable for everyone.

**How it works:**
- Click a button to open a modal popup.
- You can close the modal by clicking the close button, clicking outside, or pressing Escape.
- The loading modal shows a spinner for a few seconds, then closes automatically.

---

## 7. Image Carousel

**What is it?**
- An app to show a set of images that you can scroll through. It has navigation buttons, dots, thumbnails, auto-play, keyboard, and swipe support.

**Main things used:**
- Event listeners for button clicks, keyboard keys, mouse hover, and touch (swipe).
- Dynamic creation of dots and thumbnails for navigation.
- Functions to go to next, previous, or specific slide.
- Auto-play with `setInterval` to change slides automatically.
- CSS transitions for smooth sliding effect.

**Why these are used:**
- Event listeners make the carousel interactive for users on desktop and mobile.
- Dynamic elements (dots, thumbnails) help users see and control which image is shown.
- Auto-play keeps the carousel moving, but pauses on hover for better control.
- Keyboard and swipe support make it accessible and easy to use for everyone.

**Keywords explained:**
- `Event listener`: Lets you run code when something happens (like a click or key press).
- `setInterval`: Runs code repeatedly after a set time (used for auto-play).
- `transform`: Moves elements smoothly for sliding effect.
- `touchstart`/`touchend`: Used for mobile swipe detection.
- `querySelectorAll`: Selects multiple elements from the page.

**How it works:**
- Click arrows, dots, or thumbnails to change images.
- The carousel auto-plays, but stops when you hover.
- Use keyboard arrows or swipe on mobile to navigate.

---

## 8. Form Validator

**What is it?**
- A signup form that checks your input for username, email, and password. It gives instant feedback, shows password strength, and saves your input while you type.

**Main things used:**
- Event listeners for input and form submission.
- Validation functions to check if the input is correct (like email format, password match, etc).
- `localStorage` to save form data as you type, so you don't lose it if you refresh.
- Password strength meter to show how strong your password is.
- Show/hide password feature with a checkbox.
- Real-time error messages and success highlights.

**Why these are used:**
- Validation helps users fill out the form correctly and prevents mistakes.
- Saving data in `localStorage` improves user experience by keeping their progress.
- Real-time feedback makes the form easy and friendly to use.
- Password strength and show/hide features help users create better passwords.

**Keywords explained:**
- `Event listener`: Runs code when you type, click, or submit.
- `localStorage`: Stores data in the browser so it stays after refresh.
- `Validation`: Checking if the input is correct (like a valid email or matching passwords).
- `addEventListener`: Method to listen for events (like input or submit).
- `classList`: Used to add or remove CSS classes for styling errors or success.

**How it works:**
- Type in the form and see errors or success instantly.
- Password strength bar updates as you type.
- Your input is saved automatically and restored if you reload.
- Click the checkbox to show or hide your password.
- On successful submit, the form clears and data is removed from storage.

---
## 9. Quiz App
**What is it?**

- An interactive quiz where you answer questions, see your score, and try to beat your high score. You can filter by difficulty and category.
Main things used:

-Event listeners for button clicks and option selection.
-Filtering questions based on difficulty and category.
-Timer for each question (counts down from 30 seconds).
-Dynamic loading of questions and options.
-High score saving with localStorage.
-Visual feedback for correct/incorrect answers.

**Why these are used:**

Filtering lets you choose the type of questions you want.
Timers add challenge and excitement.
Dynamic loading makes the quiz flexible and easy to update.
High score tracking motivates you to improve.
Visual feedback helps you learn from mistakes.
Keywords explained:

Event listener: Runs code when you click buttons or select answers.
localStorage: Stores your high score in the browser.
filter: Used to select questions based on your choices.
setInterval: Runs code every second for the timer.
innerHTML: Updates the page with new questions and results.
How it works:

Choose difficulty and category, then start the quiz.
Answer each question before the timer runs out.
See your score and high score at the end.
Restart the quiz to try again
