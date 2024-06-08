# Notes
* npm init -y for package.json
* npm i express dotenv mongoose bcryptjs jsonwebtoken cookie-parser
* npm i -D nodemon
* npm i express-async-handler

# asyncHandler
* mongoose function return a promise
* we wrap it around our handlers and it will handle the errors

# middleware
* when you put error as the first parameter the express framework knows its your custom middleware

# mongoose 
* everything with mongoose will be async
* all model methods return promise

# status code
* The 201 status code is an HTTP response status code that indicates a request was successful and resulted in the creation of a new resource. It's also known as the "Created" status code