## React Boilerplate

### Features

- Create React App

### How To Use This Boilerplate

1. Clone this repository

2. Install Dependencies

```
// start in root folder

npm install
cd client
npm install
```

3. Create config file at `~/config/dev.js`

4. Contents of config file - necessary for application to work

```javascript
module.exports = {
  PORT_FRONTEND: '3000 is create-react-app default',
  PORT_BACKEND: 'development backend server port',
  PROD_URL: 'http(s) address of production site (can be entered later)',
  MONGO_URI: 'mongoDB uri',
  GOOGLE_CLIENT_ID: 'create google oauth client',
  GOOGLE_CLIENT_SECRET: 'create google oauth client',
  JWT_SECRET: 'random string to encode JWTs'
}
```

5. From root run `npm run dev` to start server and client concurrently
