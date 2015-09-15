# NodeTunes

## What is the project about?

This is an in-class project at NSS.

The project is a music database collection using MongoDB.  It allows the user to enter artists, albums, and songs and display the database results.

## What technologies does the project use?

NPM, Node.js, Express.js, EJS, Body-parser, MongoDB, jQuery, and Foundation.

## Download and install:

*If you don't have NPM yet, from terminal:*

````curl https://npmjs.org/install.sh | sh````

*In your browser, navigate to:*
>https://github.com/ldmcdaniel/NodeTunes

*In the top-right corner of the page, click Fork.*

*In your designated code directory, type:*

````git clone https://github.com/Your-Username/NodeTunes````

*From Terminal:*

````cd NodeTunes/````

````npm install````

````bower install````

*Install MongoDB following these directions:*

>http://docs.mongodb.org/master/installation/

_Then, in terminal:_

````mongod````

*In another terminal window:*

````mongo````

````use nodeTunes````

````db.createCollection("artists")````

````db.createCollection("albums")````

````db.createCollection("songs")````

````use albums````

*In another terminal window:*

````nodemon app.js````

*Go to this url in the browser:*

````http://localhost:3000````
