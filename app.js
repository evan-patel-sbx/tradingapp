const finnhub = require('finnhub');

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = "ca3esh2ad3i06dm2irr0"
const finnhubClient = new finnhub.DefaultApi()

finnhubClient.companyBasicFinancials("AAPL", "all", (error, data, response) => {
  console.log(data)
});
