const MoltinGateway = require('@moltin/sdk').gateway;
exports.Moltin = MoltinGateway({
  client_id: 'XXXXXXXXXXXXXX',
  client_secret: 'XXXXXXXXXXXXXXXXX',
});

exports.mongodbUri = 'localhost:27017/dev'
