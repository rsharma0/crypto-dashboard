const express = require('express');
const router = express.Router();
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  'https://nvzfdpegdjxvspctcyzt.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im52emZkcGVnZGp4dnNwY3RjeXp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc1MjkwMTQsImV4cCI6MjA2MzEwNTAxNH0.x_GiKB3vmmLRMqxfquGNFIpvYNtKVEMp8jFgaLx3vaQ'
);

// GET from Supabase
router.get('/', async (req, res) => {
  const { data, error } = await supabase.from('portfolio').select('*');
  if (error) return res.status(500).json({ error });
  res.json(data);
});

// POST to Supabase
router.post('/add', async (req, res) => {
  const { coin, amount } = req.body;
  const { data, error } = await supabase
    .from('portfolio')
    .insert([{ coin, amount }]);
  if (error) return res.status(500).json({ error });
  res.json(data);
});

module.exports = router;
