module.exports = {
  "verbose": true,
  "plugins": {
    "istanbul": {
      "dir": "./coverage",
      "reporters": [
        "text-summary",
        "lcov",
        "html"
      ],
      "include": [
        "mqtt-connection.html"
      ],
      "exclude": []
    },
    "local": {
      "skipSeleniumInstall": false,
      "persistent": true,
      "browsers": [
        "chrome"
      ]
    }
  }
};