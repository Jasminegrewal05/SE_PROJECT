

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/test", (req,res)=>{
    res.send({message: "Backend connected"});
});

app.listen(5000, ()=>{
    console.log("server running on port 5000");
});

// mongoose.connect("mongodb://127.0.0.1:27017/pratigya", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => console.log("MongoDB connected"))
// .catch(err => console.log("DB Error:", err));



// const userSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     password: String,
//     role: String  
// });


// const studentSchema = new mongoose.Schema({
//     name: String,
//     fatherName: String,
//     birthDate: String,
//     address: String,
//     phone: String
// });

// const User = mongoose.model("User", userSchema);
// const Student = mongoose.model("Student", studentSchema);

// app.post("/login", async (req, res) => {
//     const { email, password } = req.body;

//     if (!email.endsWith("@gmail.com"))
//         return res.json({ success: false, message: "Only Gmail accounts allowed!" });

//     const user = await User.findOne({ email });
//     if (!user) return res.json({ success: false, message: "User not found" });

//     const match = await bcrypt.compare(password, user.password);
//     if (!match) return res.json({ success: false, message: "Wrong password" });

//     res.json({
//         success: true,
//         message: "Login successful",
//         role: user.role,
//         name: user.name
//     });
// });


// app.post("/create-user", async (req, res) => {
//     const { name, email, password, role } = req.body;

//     if (!email.endsWith("@gmail.com"))
//         return res.json({ success: false, message: "Use Gmail only!" });

//     const encrypted = await bcrypt.hash(password, 10);

//     const newUser = new User({
//         name,
//         email,
//         password: encrypted,
//         role
//     });

//     await newUser.save();
//     res.json({ success: true, message: `${role} account created successfully!` });
// });

// app.post("/add-student", async (req, res) => {
//     const student = new Student(req.body);
//     await student.save();
//     res.json({ success: true, message: "Student added successfully!" });
// });


// app.get("/students", async (req, res) => {
//     const students = await Student.find();
//     res.json(students);
// });


// app.delete("/remove-student/:name", async (req, res) => {
//     const studentName = req.params.name;
//     await Student.deleteOne({ name: studentName });
//     res.json({ success: true, message: `${studentName} removed!` });
// });


// app.get("/logout", (req, res) => {
//     res.json({ success: true, message: "Logged out" });
// });


// app.post("/upload-content", (req, res) => {
//     // You will add file upload later
//     res.json({ success: true, message: "Content uploaded (dummy)" });
// });


// app.listen(5000, () => {
//     console.log("Server running on http://localhost:5000");
// });