const path = require('path');
const express = require('express');

const userRouter=require('./routes/userRouter');
const {hostrouter}=require('./routes/hostRouter');
const rootDir=require('./utils/pathUtils');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded());
app.use( userRouter);
app.use('/host', hostrouter);
app.use(express.static(path.join(rootDir, 'public')));

app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found' });
});
const port=3000;
app.listen(port,()=>{
  console.log(`Server is running on http://localhost:${port}`);
});
