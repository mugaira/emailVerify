import asyncHandler from 'express-async-handler';
import User from './model/userModel.js';
import jwt from 'jsonwebtoken';
import generateToken from './utils.js';
import nodemailer from 'nodemailer';

const testAccount = await nodemailer.createTestAccount();

 const transporter = nodemailer.createTransport({
     // host: "smtp.gmail.com",
     // port: "465",
     // secure: true,
     service:'gmail',
     auth: {
         user: "babc97081",
         pass: "abcd9876"
     },
     tls:{rejectUnauthorized:false}
 })

const authUser = asyncHandler(async (req, res) => {
  const { email, password, gmail } = req.body;
  console.log(gmail);

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      email: user.email,
      token: generateToken(user._id),
    });
    const mailOptions = {
      from: `'Verify your Email' <mugairainamdar@gmail.com> `,
      to:gmail,
      subject: 'verify email',
      html: `<h2>thank you</h2>
            <a href ='http://${req.headers.host}/changepasswordl?token=${user.token}'>change password</a>`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('verification mail send to your gmail');
      }
    });
  } else {
    res.status(401); //Unauthorized
    throw new Error('Invalid email or password');
  }
});


const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updateUser = await user.save();

    res.json({
      _id: updateUser._id,
      token: generateToken(updateUser._id),
    });
  } else {
    res.status(404);
    throw new Error('User Not Found');
  }
});

export { authUser, updateUserProfile };
