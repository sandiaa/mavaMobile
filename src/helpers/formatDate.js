export const formatDate = (dateSelected) => {
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
  `1`;
  var today = dd + " " + months[dateSelected.getMonth()] + ", " + yyyy;

  return today;
};
