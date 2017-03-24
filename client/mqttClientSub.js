var mqtt = require('mqtt');

var port = 1883;
var host = 'localhost';
var clientSub = mqtt.connect([{port : 1883, host : 'localhost'}]);
//主题订阅
var topic = "mqtt/lessonOne";
//与服务进行连接
clientSub.on('connect', function() {
    console.log('我订阅了主题lessOne');
    //订阅服务器主题
    clientSub.subscribe(topic);
    //接受该主题下的发布信息
    clientSub.on('message', function(topic, message) {
        console.log("我收到了主题" + topic + '发布的消息： ' + message);
        //断开连接
        //clientSub.end();
    });

});