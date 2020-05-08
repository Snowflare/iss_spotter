// index.js
const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  //console.log('It worked! Returned IP:' , ip);
  fetchCoordsByIP(ip,(error, cord) => {
    if (error) {
      console.log("It didn't work!" , error);
      return;
    }
    //console.log('It worked! Returned cordinate:' , cord);
    fetchISSFlyOverTimes(cord,(error, flyover)=>{
      if (error) {
        console.log("It didn't work!" , error);
        return;
      }
      //console.log('It worked! Returned flyovers:' , flyover);
      nextISSTimesForMyLocation(error, flyover, (error, passTimes, duration) => {
        if (error) {
          return console.log("It didn't work!", error);
        }
        // success, print out the deets!
        console.log(`Next pass at ${passTimes}(Pacific Daylight Time) for ${duration} seconds!`);
      });
      
    });
  });
});