const express = require('express');
const router = express.Router();

// Mock database
let items = [
  {
    first_name : "Luffy",
    last_name: "Mamaco"
  },
  {
    first_name : "OH MY GOD",
    last_name: "DAMN"
  }
];

// Create
router.post('/items', (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.status(201).json(newItem);
});

// Read all
router.get('/items', (req, res) => {
  res.json(items);
});

// Read one
router.get('/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (item) {
    res.json(item);
  } else {
    res.status(404).send('Item not found');
  }
});

// Update
router.put('/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (item) {
    Object.assign(item, req.body);
    res.json(item);
  } else {
    res.status(404).send('Item not found');
  }
});

// Delete
router.delete('/items/:id', (req, res) => {
  const index = items.findIndex(i => i.id === parseInt(req.params.id));
  if (index !== -1) {
    items.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).send('Item not found');
  }
});

module.exports = router;
