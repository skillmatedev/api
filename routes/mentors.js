const express = require('express');
const MentorModel = require('../models/mentors'); 
const mongoose = require('mongoose');

const router = express.Router();


//test

router.get('/',async(req,res)=>{
    res.send('running')
})

// GET Mentor by email
router.get('/get/:email', async (req, res) => {
  const { email } = req.params;
  try {
    const mentor = await MentorModel.findOne({ email });
    if (!mentor) {
      return res.status(404).json({ error: 'Mentor not found' });
    }
    res.json(mentor);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch mentor' });
  }
});

// POST Create a new mentor
router.post('/create', async (req, res) => {
  const body = req.body;

  try {
    const newMentor = new MentorModel(body);
    await newMentor.save();
    res.status(201).json(newMentor);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create mentor' });
  }
});

// PATCH Update a mentor by email
router.patch('/update/:email', async (req, res) => {
  const { email } = req.params;
  const body = req.body;

  try {
    const updatedMentor = await MentorModel.findOneAndUpdate(
      { email },
      body,
      { new: true } // Return the updated document
    );

    if (!updatedMentor) {
      return res.status(404).json({ error: 'Mentor not found' });
    }

    res.json(updatedMentor);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: `Error: ${error instanceof Error ? error.message : 'Unknown error'}`,
    });
  }
});

module.exports = router;
