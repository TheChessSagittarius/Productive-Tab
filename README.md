# Productivity Dashboard
Simple and clean personal dashboard inspired by designs from the Momentum extension on Chrome Web Store designed to help increase productivity.

## Features
* **Real-Time Clock & Date:** Dynamic clock that updates every second and is set to your local time. Uses a 24 hour clock with hour : minute : second display
* **Google Search Bar:** Embedded Search bar for accessibility. Search directly opens in a new tab.
* **Daily Focus Tracker** Set your main focus for today which automatically saves to your localStorage with Javascript enabling you to keep your focus objective even when refreshing or reopening the Productivity Dashboard.
* **Smart To-Do List:**
    * Add and delete daily tasks
    * Checkbox to strikethrough completed daily goals
    * Automatic chronological sorting so goals appear in the order that you input them
    * Smart completion goal sorting where completed goals move to the bottom of the to-do list so you can focus on incomplete goals
    * Goals stored through localStorage with Javascript so you don't lose your goals when refreshing or reopening
* **Custom Quick Links:** Fast access shortcut buttons which bring you to Github, Slack, and LeetCode as some of the most-used developer and productivity tools
* **2-Column Layout:** Optimized side-by-side format to fill up the Dashboard efficiently while ensuring that everything remains on a page without having to scroll. Includes a personal (you can also make it motivational) quote at the top of the Dashboard.

## Tools/Languages
* **HTML5:** Standard structure layout with <!DOCTYPE html> to declare the use of modern HTML5. Everything is organized within the main body tag which is divided into its sub-categories of left-column and right-column. These are div class tags to house all the features on the left and right columns within the page. The HTML file also links styles.css and script.js so styling and coded features can be added to the base HTML script
* **CSS:** CSS employed for formatting, alignment, fonts, font colors, and background images. Styling with CSS Grid and Flexbox for dynamic resizing and display based on tab size. also used text-shadow function to style headers and make them pop on the page.
* **JavaScript:** Vanilla JS used for creating dynamic resizing display for the smart-todo list. Also used to store main task and todo list goals by storing and calling localStorage to append elements to the list.

## Installation
To run or test the project locally:
1. **Clone Repository**
   ```bash
   git clone https://github.com/TheChessSagittarius/Productive-Tab

2. **Navigate to project folder**
   ```bash
   cd Productive-Tab

3. **Open the project**
   * Open index.html directly in your web browser
   * Use live-server extension (ex: VS Code Live-Server) for automatic updates when modifying code


