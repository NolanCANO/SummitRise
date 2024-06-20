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
    {
      name: 'Admin User',
      email: "admin@admin.fr", 
      password: "password", 
      admin: true,
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      work: 'Software Engineer at Ynov Campus',
      location: 'Toulouse, France',
      university: 'Ynov Campus',
    }
]

let comments = []

app.post('/register', (req, res) => {
  const { name, email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send('Email and password are required');
  }

  const userExists = users.some(user => user.email === email);

  if (userExists) {
    return res.status(409).send('User already exists');
  }

  const user = {
    name: name,
    email: email,
    password: password,
    admin: false,
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    work: 'Software Engineer at Ynov Campus',
    location: 'Toulouse, France',
    university: 'Ynov Campus',
  }

  users.push(user)
  console.log(users);
  const token = jwt.sign(user, secretKey, { expiresIn: '1h' });

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

  const token = jwt.sign(user, secretKey, { expiresIn: '1h' });
  console.log('User logged in:', email);

  return res.status(200).json({ token });
});

// Route pour obtenir les commentaires
app.get('/comments', (req, res) => {
  console.log('Fetching comments');
  res.json(comments);
});

// Route pour ajouter un commentaire
app.post('/comments', (req, res) => {
  const { name, rating, comment } = req.body;
  const newComment = { name, rating, comment };
  comments.push(newComment);
  console.log('Comment added:', newComment);
  res.status(201).json(newComment);
});

app.delete('/comments/:index', (req, res) => {
  const index = parseInt(req.params.index, 10);

  console.log("Deleting comment: ", index);

  if (index >= 0 && index < comments.length) {
    comments.splice(index, 1);
    res.status(200).json(comments);
  } else {
    res.status(404).send('Comment not found');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
