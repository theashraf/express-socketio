# express-socketio

[![Build Status](https://travis-ci.org/theashraf/express-socketio.svg?branch=master)](https://travis-ci.org/theashraf/express-socketio)

express-socketio demo

# Features

- [x] broadcasting text messages between connected peers
- [x] broadcasting files between connected peers

# Installation

```bash
git clone https://github.com/theashraf/express-socketio
cd express-socketio
npm run setup && npm start
```

then visit http://localhost:3000/

# Development

```bash
git clone https://github.com/theashraf/express-socketio
cd express-socketio
cp sample.env .env
npm run install && npm run dev
```

# Deployment

```bash
export SERVER = domain.com
export USER = deploy
./deploy.sh
```

# Contribution

1. Fork the project
2. Create your feature branch (`git checkout -b feature/fooBar`), or hotfix branch (`git checkout -b hotfix/fooBar`)
3. Commit your changes (`npm run commit`)
4. Push to the feature branch (`git push origin feature/fooBar`), or hotfix branch (`git push origin hotfix/fooBar`)
5. Create a new Pull Request
