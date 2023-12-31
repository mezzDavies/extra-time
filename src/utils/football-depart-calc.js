export default function footballDepartureTimeCalculator(
  kickOffTime,
  isWalking = false
) {
  if (!kickOffTime) return "";

  const splitKOTime = kickOffTime.split(":");
  const kOHours = splitKOTime[0];
  const kOMins = splitKOTime[1];

  const kickOffTimeInSeconds = convertKOTimeToSeconds(kOHours, kOMins);

  const arrivalTimeInSeconds = kickOffTimeInSeconds - 8100;

  let travelTimeInSeconds = 0;
  isWalking ? (travelTimeInSeconds = 4200) : (travelTimeInSeconds = 1800);

  let timeToLeaveInSeconds = arrivalTimeInSeconds - travelTimeInSeconds;

  if (
    kickOffTimeInSeconds >= 68400 &&
    kickOffTimeInSeconds <= 72000 &&
    !isWalking
  ) {
    timeToLeaveInSeconds -= 900;
  }

  const timeToLeave = convertSecondsToTime(timeToLeaveInSeconds);
  const arrivalTime = convertSecondsToTime(arrivalTimeInSeconds);

  return `Set off no later than ${timeToLeave} to arrive at ${arrivalTime}`;
}

function convertKOTimeToSeconds(hours, minutes) {
  return +hours * 60 * 60 + +minutes * 60;
}

function convertSecondsToTime(seconds) {
  return new Date(seconds * 1000).toISOString().slice(11, 16);
}
