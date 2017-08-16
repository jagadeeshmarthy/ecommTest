const MoltinGateway = require('@moltin/sdk').gateway;
exports.Moltin = MoltinGateway({
  client_id: 'XXXXXXXXXXXXX',
  client_secret: 'XXXXXXXXXXXXXXX'
});

exports.mongodbUri = 'localhost:27017/dev'
