/*
 * The content reducer will always return an array of con's no matter what
 * You need to return something, so if there are no con's then just return an empty array
 * */

export default function () {
    return [
        {
            con: 0,
            text: "This Website is running off my Desktop in a Node Server and is the starting point of my new cutting edge React-Redux-Mongo-Webpack Developers Environment complete with compilers, automated asset optimization and deployment. So far I am just barely getting started. MongoDB has been added in as the back-end.",
            text2: "What is a Redux? Redux is a predictable state container for JavaScript App's. (If you're looking for a WordPress framework, check out Redux Framework.) It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.",
            text3: "What is react? React is a declarative, efficient, and flexible JavaScript library for building user interfaces. ... Your components tell React what you want to render – then React will efficiently update and render just the right components when your data changes.",
            text4: "Emulated page to page navigation is achieved using react-router. The site is indeed a single page that appears to be several pages."
        },
        {
            con: 1,
            text: "The Modern Application Stack - ReactJS, ES6 & JSX to Build a UI (the rise of MERN). In our toolbox will also be Babel, Webpack, and MongoDB, Mongoose and more.",
            text2: "Database: Mongo and Mongoose are installed for the Back end. several articles refer to Mongo as the best choice for an object oriented database."
        },
        {
            con: 2,
            text: "Using Mongoose with Webpack Issue #3404",
            text1: '"This problem will most certainly extend beyond Mongoose to any library that attempts to load a binary file and Webpack, in its attempt to walk the dependency graph, tries to resolve this dependency", https://github.com/webpack/webpack/issues/3404',
            text2: "If you load mongoose in the browser (by either doing import mongoose from 'mongoose' or require('mongoose'), Webpack will complain: WARNING in ./~/mongoose/lib/drivers/index.js 8:11 Critical dependency: the request of a dependency is an expression",
            text3: "This problem proved to be quite challenging to overcome and took a lot of research, debugging, and testing.",
            text4: '"The fix: This is a work around but it does work!! -- new DefinePlugin({"typeof window": "BACKSLASH"objectBACKSLASH""})". Replace BACKSLASH with the character of course. This code goes in your webpack.config.js. Webpack is the modern way to go so, I did not want to compromise my ecosystem.',
            text5: "My problems got even more complicated. It seems I will be using api calls to communicate from front to back and all this has been for not! Learning is in the journey not the destination. Learn a lot indeed. It seems my approach has been all wrong and the front and back ends should be separate."
        }
    ]
}
