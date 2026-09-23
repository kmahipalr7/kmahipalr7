const http = require('node:http');
const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');

const port = 3000;
const dataDirectory = path.join(__dirname, 'data');
const usersFile = path.join(dataDirectory, 'users.json');
const demoUser = {
  fullName: 'Alex Johnson',
  email: 'alex@example.com',
  passwordHash: hashPassword('Password1'),
  createdAt: new Date().toISOString(),
};

function hashPassword(password) {
  return crypto.createHash('sha256').update(password).digest('hex');
}

function loadUsers() {
  fs.mkdirSync(dataDirectory, { recursive: true });

  if (!fs.existsSync(usersFile)) {
    fs.writeFileSync(usersFile, JSON.stringify([demoUser], null, 2));
  }

  return JSON.parse(fs.readFileSync(usersFile, 'utf8'));
}

function saveUsers(users) {
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
}

function sendJson(response, statusCode, body) {
  response.writeHead(statusCode, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:4200',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
  });
  response.end(JSON.stringify(body));
}

function readBody(request) {
  return new Promise((resolve, reject) => {
    let body = '';

    request.on('data', (chunk) => {
      body += chunk;
    });
    request.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch {
        reject(new Error('Invalid JSON'));
      }
    });
    request.on('error', reject);
  });
}

const server = http.createServer(async (request, response) => {
  if (request.method === 'OPTIONS') {
    sendJson(response, 204, {});
    return;
  }

  if (request.method === 'GET' && request.url === '/api/health') {
    sendJson(response, 200, { ok: true, service: 'zomato-demo-api' });
    return;
  }

  if (request.method !== 'POST' || !['/api/register', '/api/login'].includes(request.url)) {
    sendJson(response, 404, { message: 'Endpoint not found' });
    return;
  }

  try {
    const body = await readBody(request);
    const email = String(body.email || '').trim().toLowerCase();
    const password = String(body.password || '');
    const users = loadUsers();

    if (!email || !password) {
      sendJson(response, 400, { message: 'Email and password are required' });
      return;
    }

    if (request.url === '/api/register') {
      const fullName = String(body.fullName || '').trim();

      if (!fullName) {
        sendJson(response, 400, { message: 'Full name is required' });
        return;
      }

      if (users.some((user) => user.email === email)) {
        sendJson(response, 409, { message: 'An account with this email already exists' });
        return;
      }

      users.push({
        fullName,
        email,
        passwordHash: hashPassword(password),
        createdAt: new Date().toISOString(),
      });
      saveUsers(users);
      sendJson(response, 201, { ok: true, user: { fullName, email } });
      return;
    }

    const user = users.find(
      (candidate) => candidate.email === email && candidate.passwordHash === hashPassword(password),
    );

    if (!user) {
      sendJson(response, 401, { message: 'Incorrect email or password' });
      return;
    }

    sendJson(response, 200, { ok: true, user: { fullName: user.fullName, email: user.email } });
  } catch (error) {
    sendJson(response, 500, { message: error.message });
  }
});

server.listen(port, () => {
  console.log(`Zomato demo API running at http://localhost:${port}`);
});
