module.exports = {
  VERSION: process.env.hasOwnProperty('APP_VERSION') ? process.env.APP_VERSION : 'DEV',
  // The root URL for API calls, ending with a '/' - for example: `"https://www.kvmix.com:8081/myservice/"`.
  // If this URL is left empty (""), then it will be relative to the current context.
  // If you use an API server, in `prod` mode, you will need to enable CORS
  SERVER_API_URL: '',
};
