export const formatContact = (data) => {
  var newArray = [];
  var count = 0;
  var i;
  data.forEach((element) => {
    if (typeof element.phoneNumbers !== "undefined") {
      element.phoneNumbers.forEach((num) => {
        i = newArray.findIndex(
          (obj) =>
            obj.number.replace(/[^0-9]/g, "") ===
            num.number.replace(/[^0-9]/g, "")
        );
        if (i > -1 === false) {
          count = count + 1;

          var contact = {
            id: count,
            firstName: element.firstName,
            lastName: element.lastName,
            number: num.number,
          };
          newArray.push(contact);
        }
      });
    }
  });
  return newArray;
};
