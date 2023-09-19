function getDayName(dateString) {
  let dayArr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return dayArr[new Date(dateString).getDay()];
}
