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
//    buildOptions: {
//     serverOnly: true
//    },
    env: {
      ROOT_URL: 'http://welcome.dentonradio.com',
      MONGO_URL: 'mongodb://mongodb.dentonradio.com/welcome'
    },
  }
};
