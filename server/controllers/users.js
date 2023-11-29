import User from "../models/User.js";
import nodemailer from 'nodemailer'
/* READ */
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getUserFriends = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    const friends = await Promise.all(
      user.friends.map((id) => User.findById(id))
    );
    const formattedFriends = friends.map(
      ({ _id, firstName, lastName, occupation, location, picturePath }) => {
        return { _id, firstName, lastName, occupation, location, picturePath };
      }
    );
    res.status(200).json(formattedFriends);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* UPDATE */
export const addRemoveFriend = async (req, res) => {
  try {
    const { id, friendId } = req.params;
    const user = await User.findById(id);
    const friend = await User.findById(friendId);

    if (user.friends.includes(friendId)) {
      user.friends = user.friends.filter((id) => id !== friendId);
      friend.friends = friend.friends.filter((id) => id !== id);
    } else {
      user.friends.push(friendId);
      friend.friends.push(id);
    }
    await user.save();
    await friend.save();

    const friends = await Promise.all(
      user.friends.map((id) => User.findById(id))
    );
    const formattedFriends = friends.map(
      ({ _id, firstName, lastName, occupation, location, picturePath }) => {
        return { _id, firstName, lastName, occupation, location, picturePath };
      }
    );

    res.status(200).json(formattedFriends);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
export const payment = async (req, res) => {
  const { id } = req.params;
    const user = await User.findById(id);
console.log(user)
const updatedUser = await User.findByIdAndUpdate(
  id,
  { status: "pro" }, // Update status to "pro"
  { new: true }
);
console.log(updatedUser,'iss')
if (!updatedUser) {
  return res.status(404).json({ message: "User not found" });
}
  try{
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'sales@hubhawks.com',
        pass: 'rkcknmtciawqanpq'
      }
});
transporter.verify((err, success) => {
  err
    ? console.log(err)
    : console.log(`=== Server is ready to take messages: ${success} ===`);
});
console.log(req.body, 'h');

let mailOptions = {
  from: `${user.email}`,
  to: `${user.email}`,
  subject: `Activate Discount for Him`,
  html: `<strong><br>Activate Discount for this email${req.body.count} `,
  };

  
   
  transporter.sendMail(mailOptions, function(error, info){
      if (error)
      {
        res.json({status: true, respMesg: 'Email Sent Successfully'})
      } 
      else
      {
        res.json({status: true, respMesg: 'Email Sent Successfully'})
      }
   
    });
  }
  catch{
console.log('error')
  }
}
