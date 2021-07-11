export const formatDate = (date) => {
  const dateSelected = new Date(date);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var dd = String(dateSelected.getDate()).padStart(2, "0");
  var yyyy = dateSelected.getFullYear();
  var today = dd + " " + months[dateSelected.getMonth()] + ", " + yyyy;

  return today;
};
