# mqtt-elements
Polymer elements for MQTT

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


### Bundel MQTT.js

#### Bundel mqemitter
```
 browserify node_modules/mqemitter/mqemitter.js --standalone MQEmitter -o dist/mqemitter.js 
 
```
