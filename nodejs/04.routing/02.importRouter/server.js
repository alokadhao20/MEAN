// Bring in our dependencies
const app = require('express')();
const user = require('./userRouter');

//  Connect all our routes to our application
app.use('/api/user', user);

// Turn on that server!
app.listen(3000, () => {
  console.log('App listening on port 3000');
});