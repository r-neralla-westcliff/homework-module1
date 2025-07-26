  function currentTime() {
            var d = new Date();
            var hr = d.getHours();
            var min = d.getMinutes();
            var sec = d.getSeconds();
            var ampm;
            var utchr = d.getUTCHours();
            var timeDiff = hr - utchr
            var adjTimeDiff = (timeDiff < 0) ? Math.abs(timeDiff) : timeDiff;
            var timeZone;

            if (sec < 10) {
                sec = "0" + sec;
            }
            if (min < 10) {
                min = "0" + min;
            }

            if (hr == 0) {
                hr = 12;
                ampm = "AM";
            } else if (hr == 12) {
                ampm = "PM";
            } else if (hr > 12) {
                hr -= 12;
                ampm = "PM";
            } else {
                ampm = "AM";
            }

            console.log(timeDiff)

            if (adjTimeDiff === 5) {
                timeZone = "EST";
            } else if (adjTimeDiff === 6) {
                timeZone = "CST";
            } else if (adjTimeDiff === 7) {
                timeZone = "MST";
            } else if (adjTimeDiff === 8) {
                timeZone = "PST";
            }
            var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timeZone;
            document.getElementById("clock").innerText = time;
        }
        setInterval(currentTime, 1000);