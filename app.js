const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>CI/CD App</title>
      <style>
        body {
          margin: 0;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #667eea, #764ba2);
          font-family: Arial, sans-serif;
          color: white;
        }
        .card {
          background: rgba(255, 255, 255, 0.1);
          padding: 40px;
          border-radius: 15px;
          text-align: center;
          box-shadow: 0 8px 20px rgba(0,0,0,0.3);
        }
        h1 {
          margin-bottom: 10px;
          font-size: 28px;
        }
        p {
          font-size: 18px;
          opacity: 0.9;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>🚀 Jenkins CI/CD Success</h1>
        <p>Hello from <strong>Anandu</strong> & <strong>Barath</strong></p>
      </div>
    </body>
    </html>
  `);
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
