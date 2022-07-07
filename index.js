function updateTimer() {

    const stopDate  = Date.parse("July 9, 2022 11:30:00");
    const currentDate     = new Date();
    const diff    = stopDate - currentDate;
    /* Calcs  */
    const days  = Math.floor( diff / (1000*60*60*24) );
    const hours = Math.floor( diff / (1000*60*60) );

    let d = days;
    let h = hours - days  * 24;

    /* append data to span */
    document.getElementById("time-left").textContent = `
        ${d} Days ${h} Hours 
    `
  }
  updateTimer();
  /* Run updateTimer function every 10 seconds */
  setInterval('updateTimer()', 10000 );