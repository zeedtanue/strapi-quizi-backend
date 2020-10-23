module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        uri: 'mongodb://dev:quiziappanddoctorwho@clusterinitial-shard-00-00.qggyk.mongodb.net:27017,clusterinitial-shard-00-01.qggyk.mongodb.net:27017,clusterinitial-shard-00-02.qggyk.mongodb.net:27017/quiz-backend?ssl=true&replicaSet=atlas-mdl8d3-shard-0&authSource=admin&retryWrites=true&w=majority'
      },
      options: {

        ssl: env.bool( false),
      },
    },
  },
});