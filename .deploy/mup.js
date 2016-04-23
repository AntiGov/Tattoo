module.exports = {
  servers: {
    one: {
      host: '107.170.36.101',
      username: 'root',
      password: 'demBoyz',
      // pem: './mykey',
    },
  },

  meteor: {
    name: 'DRWelcomingCenter',
    path: '../',
    servers: {
      one: {},
    },
    env: {
      ROOT_URL: 'http://welcome.dentonradio.com',
      MONGO_URL: 'mongodb://localhost/meteor'
    },
  },
    mongo: {
    oplog: true,
    port: 27017,
    servers: {
      one: {},
    },
  },
};
