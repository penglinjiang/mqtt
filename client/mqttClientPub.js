var mqtt = require('mqtt');

//主题
var topic = "mqtt/lessonOne";
var port = 1883;
var host = 'localhost';
var client = mqtt.createClient(port, host);
client.on('connect', function() {
    //对相关主题进行消息发布
    client.publish(topic, '大家好!');
    client.end();
});