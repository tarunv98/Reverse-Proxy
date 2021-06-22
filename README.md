# Reverse Proxy (HTTP)
Host filtration + Activity tracking

*This is a Simple HTTP Reverse Proxy application built on NodeJS*

**Instructions:**

1. Download/Clone the repo to a folder.
2. In that folder run the proxy.js
```
   $ npm run start-proxy
```   

3. Run your HTTP application if exists or Run the test server
   Go to testserver folder and run testHTTPServer.js
```   
   $ npm run start-http-test
 ```  
   (Test server runs on port 27017)
   To see how it is go localhost:27017 in the browser
4. Now open your browser and go to localhost:8888 (which is proxy server) you will see the same as localhost:27017

:v:That's It!!!!:v:

5. *Filteration:* To add any IP address that you want to block connection, add them in [here](./conf/blockedips.json).

All the activity to your HTTP server are logged to logs.txt file.

**NOTE:** THIS WORKS ONLY WITH HTTP SERVERS
