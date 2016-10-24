module.exports = {
  "verbose": false,
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
      "skipSeleniumInstall": true,
          "persistent": true,
          "browsers": [
        "chrome"
      ]
    }
  }
};