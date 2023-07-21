# test-backend
 
## Dependencies

- **cors**: Enables Cross-Origin Resource Sharing (CORS) for handling cross-domain data sharing.
- **express**: A popular web application framework for Node.js, simplifying route creation and request handling.
- **express-async-handler**: A utility module that simplifies error handling for asynchronous request handlers in Express.
- **pg**: A PostgreSQL client library for Node.js, facilitating communication with PostgreSQL databases.
- **pgtools**: Provides tools for working with PostgreSQL databases, simplifying administrative tasks.
- **sequelize**: An ORM library for Node.js that simplifies database operations, particularly with relational databases like PostgreSQL.

##### DevDependencies

- **nodemon**: A development tool that automatically restarts the server when source code changes, improving the development workflow.




## Common script to enable automatic server restarts whenever there are changes in the code:
```
npm run dev
```

## Common script to start the application or server:
```
npm start
```


## /database/utils/configDB.js:
```
// Database configuration

const dbName = 'your-database-name';
const dbUser = 'your-user-name';
const dbPwd = 'your-database-password';

module.exports = {
  dbName,
  dbUser,
  dbPwd,
}; 
```
