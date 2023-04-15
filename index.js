const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const AdminModel = require('./models/Admin');
const UserModel = require('./models/User');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://dcsenadheera:RTvb56@companiondb.vwefz4y.mongodb.net/CompanionDB', {
    useNewUrlParser: true,
});

app.post('/checkAdminAccess', (req, res) => {

    const { username, password } = req.body;

    AdminModel.findOne({
        adminUserName: username,
        adminPassword: password
    })
        .then(user => {
            if(user != null){
                res.send("success");
            }
            else{
                res.send("fail");
            }
        })
        .catch(err => {
            res.send(err);
        });
});

app.post('/createUser', async (req, res) => {

    // const {userFname, userLname, userEmail, userPassword, userCountry} = req.body;
    // console.log(userFname, userLname, userEmail, userPassword, userCountry);

    const userFname = req.body.userFname;
    const userLname = req.body.userLname;
    const userEmail = req.body.userEmail;
    const userPassword = req.body.userPassword;
    const userCountry = req.body.userCountry;

    const user = new UserModel({
        userFirstName: userFname,
        userLastName: userLname,
        userEmail: userEmail,
        userPassword: userPassword,
        userCountry: userCountry
    });

    try {
        await user.save();
        res.send("Inserted Data");
    } catch (err) {
        console.log(err);
    }
});

app.get('/checkUser', (req, res) => {

    const { username } = req.body;

    UserModel.findOne({
        userFirstName: username,
    })
        .then(user => {
            if(user != null){
                res.send("success");
            }
            else{
                res.send("fail");
            }
        })
        .catch(err => {
            res.send(err);
        });
});

app.put('/update', async (req, res) => {

    const username = req.body.userName;
    const id = req.body.id;

    try {
        await user.findById(id, (err, updatedUser) => {
            updatedUser.userName = newUserName;
            updatedUser.save();
            res.send("Updated");
        });
    } catch (err) {
        console.log(err);
    }
});

app.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;

    await UserModel.findByIdAndRemove(id).exec();
    res.send("Deleted");
});

const port = 3001;

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});


