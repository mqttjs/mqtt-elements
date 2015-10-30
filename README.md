![mqtt-elements](https://raw.githubusercontent.com/mqttjs/mqtt-elements/67266290fe6a0b6b3ff51418efb7c1c0662c78c5/assets/mqtt-elements.png)
=======

Polymer elements to establish a MQTT connection to a MQTT broker.
 
## API

[API documentation](http://mqttjs.github.io/mqtt-elements/bower_components/mqtt-elements/)

## Install

```
bower install --save mqtt-elements
```

## Import

```
<link rel="import" href="../mqtt-elements/mqtt-elements.html">
```

## Usage

```
    <mqtt-connection auto url="ws://HOST:PORT">
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

### Connect 

```
<mqtt-connection url="ws://HOST:PORT"></mqtt-connection>
```

The method `<mqtt-connection>#connect` has to be called manually to establish the MQTT connection to the MQTT broker. 
Set `<mqtt-connection>#auto` flag to make the MQTT connection as soon as possible.   


### Connect with Username / Password

```
    <mqtt-connection
        url="ws://HOST:PORT"
        options='{"username": "USERNAME", "password": "PASSWORD"}'
        with-credentials
        auto>
    </mqtt-connection>
```

OR

```
    <mqtt-connection
        url="ws://HOST:PORT"
        username="USERNAME"
        password="PASSWORD"
        with-credentials
        auto>
    </mqtt-connection>
```

The flag `<mqtt-connection>#withCredentials` indecates the MQTT connection to wait until a username and password for 
the connection is supplied.

### Publish

The following example will publish on the topic »mqtt/elements« with the payload »Publishing via a HTML element«.
Every time when `<mqtt-publish>#payload` changes the element will publish a new MQTT message to the topic »mqtt/elements«.
If the `<mqtt-publish>#auto` flag is not set - `<mqtt-publish>#publish` has to be called to publish a MQTT message to the topic 

```
<mqtt-connection
    url="ws://HOST:PORT"
    auto>
  <mqtt-publish topic="mqtt/elements" payload="Publishing via a HTML element" auto></mqtt-publish>
</mqtt-connection>
```

#### Publish on multiple topic

A `<mqtt-connection>` element can hold any number of `<mqtt-publish>` elements to publish to different topics.
 
```
<mqtt-connection
    url="ws://HOST:PORT"
    auto>
  <mqtt-publish topic="foo/bar" payload="this is easy" auto></mqtt-publish>
  <mqtt-publish topic="client/status" payload="online" qos="1" auto></mqtt-publish>
  <mqtt-publish topic="client/location" payload="{'foo': 'bar'}" auto></mqtt-publish>
</mqtt-connection>
```

#### Publish a retained message

To publish a message with the RETAINED flag set to true add the `<mqtt-publish>#retained` flag.

```
<mqtt-connection
    url="ws://HOST:PORT"
    auto>
    <mqtt-publish topic="foo/bar" payload="this is easy" retained auto></mqtt-publish>
</mqtt-connection>
```

### Subscribe

```
 <mqtt-connection
     url="ws://HOST:PORT"
     auto>
   <mqtt-subscription topic="foo/bar"></mqtt-subscription>
 </mqtt-connection>
```

The last message to the topic will be save in `<mqtt-subscription>#lastMessage`. The `<mqtt-subscription>` stores the 
last `n` messages within the `<mqtt-subscription>#messages` array. Set `<mqtt-subscription>#numberOfMessages` to the 
number of messages that should be saved in `<mqtt-subscription>#messages`. To save every message received on the topic 
set `<mqtt-subscription>#numberOfMessages` to `Infinity`. 
      
## Media
    
* [MQTT Client Library Encyclopedia](http://www.hivemq.com/blog/mqtt-client-library-encyclopedia-mqttelements?utm_medium=social&utm_source=github-mqttjs)

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


#### Bundel MQTT.js, MQEmitter and Store

```
browserify -r ./node_modules/mqtt/lib/store.js:Store -r mqtt -r MQEmitter > dist/mqtt-elements-bundle.js

```

