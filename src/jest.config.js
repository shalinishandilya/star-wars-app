module.exports = {
    "coverageThreshold": {
        "global": {
            "lines": 80
        }
    },
    moduleNameMapper: {
        axios: 'axios/dist/node/axios.cjs'
    },
    setupFilesAfterEnv: ['src/jest.setup.js'],
  };
  