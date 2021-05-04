# A React guide to component deconstruction and breakdown

In this `create-react-app` project we have a basic template, located in `public/index.html`.  This template will be used as basis
to our exercises. Feel free to get familiar and run this project locally.

# Setup

Download or clone this repo and run `npm install` before running any command, such as `npm start` to run the server, so you can access `http://localhost:3000/`

# Folder structure

 * `public/`: This is where we have the static parts of the project. We have some of the `css` needed, but the 'main' css file is in `src/index.css`, more on that on the class 😁
 * `src/`: This is where we have the main application files such as:
    * `index.js` the main file, aka entry point, and where we kickstart the react part with `ReactDOM` to render on our `public/index.html`
    * `App.js` our 'core' file where we will be doing some work on the class
    * `index.css` where the 'core' styling is, you don't have to bother with css in this class, it is all provided
    * `images/` where some of the images needed for the `index.css` more on why we have `public/images` and `src/images` on the class 😀