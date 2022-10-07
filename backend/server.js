import  express  from 'express';
import dotenv from "dotenv";
import path from 'path';
import connectDB from "./config/db.js"
import routes from './route.js';

dotenv.config();
connectDB()

const app = express();
app.use(express.json()) //body parsing converting json file into javascript readable language.



app.use('/api',routes)
const __dirname = path.resolve();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')));
 
  app.get('*', (req, res) => {
   res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });
 } else {
  app.get('/', (req, res) => {
   res.send('API is running');
  });
 }
 


const PORT = process.env.PORT || 5000;

app.listen(5000, () => {
  console.log(`Server running on port ${PORT}`);
});