var mqtt = require('mqtt');

//主题
var topic = "mqtt/lessonOne";
var port = 1883;
var host = 'localhost';
var client = mqtt.connect([{port : 1883, host : "localhost"}]);
client.on('connect', function() {
    //对相关主题进行消息发布
    console.log('我连接到server了，发布主题lessOne');
    client.publish(topic, '大家好!');
    client.end();
});