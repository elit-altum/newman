/* eslint-disable */

// Socket.io middleware for authenticating a JWT

const jwt = require('jsonwebtoken')

const authMiddleware = (socket, next) => {
  const token = socket.handshake.auth.token;
  let payload;

  try {
    payload = jwt.verify(token, "insertSecretKeyHere");
    socket.payload = payload;

    if(payload) {
      next();
    }
  } catch(err) {
    next(new Error('Unauthorized access. Only newman processes may use this channel.'))
  }
};


module.exports =  authMiddleware;