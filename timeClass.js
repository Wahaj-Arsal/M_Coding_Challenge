/** @format */

class Time {
  constructor(hour, minute, second) {
    this.hour = hour;
    this.minute = minute;
    this.second = second;
  }
  normalise() {
    let newSec = this.second - parseInt(this.second / 60) * 60;
    let newMin = this.minute + parseInt(this.second / 60);
    let remainingMinute = newMin - parseInt(newMin / 60) * 60;
    let newHour = this.hour + parseInt(newMin / 60);
    let remainingHour = newHour - parseInt(newHour / 24) * 24;
    return `${remainingHour}:${remainingMinute}:${newSec}`;
  }
  scale(seconds) {
    this.second = this.second + seconds;
    return time.normalise();
  }
}
let time = new Time(1, 30, 20);
console.log(time.normalise());
console.log(time.scale(400));
