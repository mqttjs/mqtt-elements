![mqtt-elements](https://raw.githubusercontent.com/mqttjs/mqtt-elements/67266290fe6a0b6b3ff51418efb7c1c0662c78c5/assets/mqtt-elements.png)
=======


# mqtt-elements

Polymer elements to establish a MQTT connection to an MQTT broker. 

## Install

```
bower install --save mqttjs/mqtt-elements
```

## Import

```
<link rel="import" href="../mqtt-elements/mqtt-elements.html">
```

## Usage

```
    <mqtt-connection auto url="ws://127.0.0.1:3005">
        <mqtt-subscription
            topic="foo/bar"
            number-of-messages="Infinity"
            last-message="{{lastMessage}}"
            messages="{{messages}}"
            subscribed="{{subscribed}}"></mqtt-subscription>
        <mqtt-publish 
            auto
            retained
            topic="foo/bar"
            payload="Hello world!"
            qos="1"></mqtt-publish>        
    </mqtt-connection>
```

## Development
 
```
mkdir mqtt-wrapper && cd mqtt-wrapper 
git clone https://github.com/mqttjs/mqtt-elements.git
cd mqtt-elements
cp debug.bowerrc .bowerrc
npm install
bower install
grunt serve
```


#### Update annd bundel MQTT.js

```
 browserify node_modules/mqtt/mqtt.js -o dist/mqtt.js

```

#### Update and bundel mqemitter
```
 browserify node_modules/mqemitter/mqemitter.js --standalone MQEmitter -o dist/mqemitter.js 
 
```
