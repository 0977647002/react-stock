const getDay = () => {
  let day = new Date();
  day.setDate(day.getDate() - 1);
  let m = day.getMonth() + 1;
  if (m < 10) {
    m = "0" + m;
  }
  let d = day.getDate();
  if (d < 10) {
    d = "0" + d;
  }
  return day.getFullYear().toString() + m + d;
};

export default getDay;
