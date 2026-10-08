module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { fullName, rollNo, course, email, semester } = req.body || {};

  if (!fullName || !rollNo || !course || !email || !semester) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  // Logs to Vercel production logs
  console.log('Registered Student Record:', {
    fullName,
    rollNo,
    course,
    email,
    semester,
    registeredAt: new Date().toISOString()
  });

  return res.status(200).json({
    success: true,
    message: 'Student details recorded successfully!'
  });
};