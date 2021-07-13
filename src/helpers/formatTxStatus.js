export const formatTxStatus = (status) => {
  var res = {};
  if (status == "REQUESTED" || status == "PENDING") {
    res = {
      requested: true,
      accepted: false,
      submitted: false,
      reviewed: false,
      taskDone: false,
      delivered: false,
    };
  } else if (status == "WORKING") {
    res = {
      requested: true,
      accepted: true,
      submitted: false,
      reviewed: false,
      taskDone: false,
      delivered: false,
    };
  } else if (
    status == "TO REVIEW" ||
    status == "REVIEWING" ||
    status == "REWORK"
  ) {
    res = {
      requested: true,
      accepted: true,
      submitted: true,
      reviewed: false,
      taskDone: false,
      delivered: false,
    };
  } else if (status == "REVIEWED") {
    res = {
      requested: true,
      accepted: true,
      submitted: true,
      reviewed: true,
      taskDone: false,
      delivered: false,
    };
  } else if (status == "DELIVERED") {
    res = {
      requested: true,
      accepted: true,
      submitted: true,
      reviewed: true,
      taskDone: true,
      delivered: true,
    };
  } else if (status == "REFUNDED" || status == "REJECTED") {
    res = {
      requested: true,
      accepted: false,
      submitted: false,
      reviewed: false,
      taskDone: false,
      delivered: false,
    };
  }
  return res;
};
