const MoltinGateway = require('@moltin/sdk').gateway;
exports.Moltin = MoltinGateway({
  client_id: 'O7VXR9S8yguuFRGAr0MVntxV1S81xmSSz6TTJwtzSc',
  client_secret: 'Xonz2lZne7fNmeLbrOemCvHAm9W9bRweW1snXHFw5L',
});

exports.mongodbUri = 'localhost:27017/dev'
