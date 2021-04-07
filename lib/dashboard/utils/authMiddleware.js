/* eslint-disable */

// Socket.io middleware for authenticating a JWT

const jwt = require('jsonwebtoken')

const authMiddleware = (socket, next) => {
  const token = socket.handshake.auth.token;
  let isValid;

  try {
    isValid = jwt.verify(token, "insertSecretKeyHere");
    if(isValid) {
      next();
    }
  } catch(err) {
    next(new Error('Unauthorized access. Only newman processes may use this channel.'))
  }
};


module.exports =  authMiddleware;