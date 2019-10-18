---
path: "/blog/first-post"
draft: true
date: "2019-10-13"
title: "Express Server"
author: "Edgar Rojas"
tags: ['tech','react']  
image: '../../images/express.png'
excerpt: "Creating a server with node express..."
---
### The Express Server


To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.

The function signature is:

```js
console.log("Hello World");
```

## Default NodeJS server

```js
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```