const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors()); 
app.use(bodyParser.json());

const secretKey = 'your_secret_key'; // Replace with your actual secret key

let users = [
    {email: "admin@admin.fr", password: "admin", admin: true}
]

app.post('/register', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send('Email and password are required');
  }

  const userExists = users.some(user => user.email === email);

  if (userExists) {
    return res.status(409).send('User already exists');
  }

  users.push({
    email: email,
    password: password,
    admin: false
  })
  console.log(users);
  const token = jwt.sign({ email: email, password: password, admin: false }, secretKey, { expiresIn: '1h' });

  return res.status(201).json({ token });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(400).send('Email and password are required');
    }
  
    const user = users.find(user => user.email === email && user.password === password);
  
    if (!user) {
      return res.status(401).send('Invalid credentials');
    }
  
    const token = jwt.sign({ email: email, password: password, admin: user.admin }, secretKey, { expiresIn: '1h' });
  
    return res.status(200).json({ token });
  });
  

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
