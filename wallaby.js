module.exports = () => {
    return {
      files: ['index.js'],
      tests: ['/test/**/*.spec.js'],
      env: {
        type: 'node'
      }
    }
  }