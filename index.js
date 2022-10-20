const SerpApi = require("google-search-results-nodejs");
const search = new SerpApi.GoogleSearch(process.env.API_KEY);

const params = {
  engine: "google_maps_reviews",
  data_id: "0x89c259af336b3341:0xa4969e07ce3108de",
};

const callback = function (data) {
  console.log(data["reviews"]);
};

// Show result as JSON
search.json(params, callback);
