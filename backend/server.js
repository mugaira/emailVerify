import  express  from 'express';
import dotenv from "dotenv";
import connectDB from "./config/db.js"
import routes from './route.js';

dotenv.config();
connectDB()

const app = express();
app.use(express.json()) //body parsing converting json file into javascript readable language.

app.get('/', (req, res) => {
  res.send('API is running');
});

app.use('/api',routes)


const PORT = process.env.PORT || 5000;

app.listen(5000, () => {
  console.log(`Server running on port ${PORT}`);
});