Hello,

This is a Simple HTTP Reverse Proxy application built on NodeJS

1. Download/Clone the repo to a folder.
2. In that folder run the proxy.js

   $ node proxy.js
   
3. Run your HTTP application if exists or Run the test server
   Go to testserver folder and run testHTTPServer.js
   
   $ node testHTTPServer.js
   
   (Test server runs on port 27017)
   To see how it is go localhost:27017 in the browser
4. Now open your browser and go to localhost:8888 (which is proxy server) you will see the same as localhost:27017

That's It!!!!

All the activity to your HTTP server are logged to logs.txt file.

NOTE: THIS WORKS ONLY WITH HTTP SERVERS
