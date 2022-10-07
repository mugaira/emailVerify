import dotenv from 'dotenv';
import connectDB from "./config/db.js";
import users from "./data/user.js";
import User from "./model/userModel.js";
dotenv.config();

connectDB();

const importData = async () => {
 try {
  await User.deleteMany();
  await User.insertMany(users);
  
  console.log('Data Imported'); 
  process.exit();

 } catch (error) {
  console.log(`${error}`);
  process.exit(1);
 }
};

const destroyData = async () => {
 try {
  await User.deleteMany();

  console.log('Data Destroyed');
  process.exit();
 } catch (error) {
  console.log(`${error}`);
  process.exit(1);
 }
}


if(process.argv[2] === '-d'){
 destroyData();
}
else{
 importData();
}
