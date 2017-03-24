var mosca = require('mosca')

var ascoltatore = {
  //using ascoltatore
  type: 'mongo',        
  url: 'mongodb://localhost:27017/mqtt',
  pubsubCollection: 'ascoltatori',
  mongo: {}
};

var moscaSettings = {
  port: 1883,
  backend: ascoltatore,
  persistence: {
    factory: mosca.persistence.Mongo,
    url: 'mongodb://localhost:27017/mqtt'
  }
};

var server = new mosca.Server(moscaSettings);
server.on('ready', setup);

server.on('clientConnected', function(client) {
    console.log('client connected', client.id);     
});

// 收到消息后触发
server.on('published', function(packet, client) {
  console.log('Published', packet.payload);
});

// MQTT服务端准备完成后触发
function setup() {
  console.log('Mosca server is up and running')
}