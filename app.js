const {get} = require("https");

get("https://google.com", res => {
  res.on("data", chunk => {
    console.log(`Chunk Data: ${chunk}`);
  });

  res.on("end", () => {
    console.log("No more data");
  });
});
