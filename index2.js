const { nextISSTimesForMyLocation } = require('./iss_promised');

// see index.js for printPassTimes
// copy it from there, or better yet, moduralize and require it in both files

// Call
nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  }).catch((error) => {
    console.log("It didn't work: ", error.message);
  });
  
const printPassTimes = function(passTimes) {
  for (let i of passTimes) {
    //const pass = new Date(i.risetime + new Date().getTime());
    const datetime = new Date(0);
    datetime.setUTCSeconds(i.risetime);
    console.log(`Next pass at ${datetime}(Pacific Daylight Time) for ${i.duration} seconds!`);
  }
};