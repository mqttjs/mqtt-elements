#!/bin/bash
set -o pipefail

npm test
polylint --input demo/index.html