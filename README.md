# test-backend
Common script to enable automatic server restarts whenever there are changes in the code:
```
npm run dev
```

Common script to start the application or server:
```
npm start
```


/database/utils/configDB.js:
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