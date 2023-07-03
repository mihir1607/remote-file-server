# remote-file-server
A file server that can be used to store and retrieve files when required by an application's backend.

Type the following command to start the server when in the root directory-
```
npm run start
```
This will start the application at port 3000. The app will then listen for any uploads or downloads requested for a file.  
## URL endpoints
The 2 URL endpoints are mentioned in ``/routes/file.js``.
* / uploadfile : used to upload files to server
* /downloadfile : used to retrieve files saved earlier
