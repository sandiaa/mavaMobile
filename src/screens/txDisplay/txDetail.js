import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { useFonts } from "expo-font";
import { formatDate } from "../../helpers/formatDate";
import { formatTxStatus } from "../../helpers/formatTxStatus";

import NotActive from "../../images/icons/notActive.svg";
import Rejected from "../../images/icons/rejected.svg";
import Done from "../../images/icons/done.svg";
import Rework from "../../images/icons/rework.svg";

import axios from "../../apis/baseURL";

const TxDetail = ({ navigation, route }) => {
  const txItem = route.params;
  const [detailsLoaded, setDetailsLoaded] = useState(false);
  const [txStatus, setTxStatus] = useState({});
  const [finalStatus, setFinalStatus] = useState("");

  const setTxStatusState = (status) => {
    const txState = formatTxStatus(status);
    setTxStatus(txState);
  };

  const fetchData = async () => {
    await axios.get(`/getTxStatus?id=${txItem.txId}`).then((res) => {
      setDetailsLoaded(true);
      if (txItem.sender) {
        const finalStatus = res.data.message.metadata.senderStatus;
        setFinalStatus(finalStatus);
        setTxStatusState(finalStatus);
      }
      (err) => {
        setDetailsLoaded(true);
        console.log(err);
      };
    });
  };

  useEffect(() => {
    fetchData();
    return () => {
      setDetailsLoaded(false);
    };
  }, [txItem]);

  const [loaded] = useFonts({
    MontserratSemiBold: require("../../../assets/fonts/Montserrat-SemiBold.ttf"),
    MontserratRegular: require("../../../assets/fonts/Montserrat-Regular.ttf"),
    MontserratMedium: require("../../../assets/fonts/Montserrat-Medium.ttf"),
    MontserratBold: require("../../../assets/fonts/Montserrat-Bold.ttf"),
    MontserratSemiBoldItalic: require("../../../assets/fonts/Montserrat-SemiBoldItalic.ttf"),
  });

  if (!loaded) {
    return null;
  }
  const StatusBlock = (item) => {
    return (
      <View style={styles.statusBlock}>
        <Text style={styles.statusText}>{item.status}</Text>
        <View style={styles.statusIcon}>
          {item.value ? (
            finalStatus == "REWORK" ? (
              <Rework />
            ) : (
              <Done />
            )
          ) : (
            <NotActive />
          )}
        </View>
      </View>
    );
  };
  const renderButtonView = () => {
    return (
      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.acceptButton}>
          <Text style={[styles.buttonText, { color: "#ffffff" }]}>ACCEPT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rejectButton}>
          <Text style={[styles.buttonText, { color: "#000000" }]}>REJECT</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.mainView}>
      {detailsLoaded ? (
        <View>
          <View style={styles.headerView}>
            <Text style={styles.title}>
              {txItem.sender ? "You are paying" : "You are paid by"}
            </Text>
            <Text style={styles.titleName}>{txItem.receiverName}</Text>
          </View>
          <Text style={styles.amount}>
            {txItem.receiverCurrency == "INR" ? "₹" : "£"} {txItem.amount}
          </Text>
          <Text style={styles.descTitle}>For</Text>
          <Text style={styles.desc}>{txItem.description}</Text>
          {txItem.paymentMode == "deliver" ? (
            <View>
              <Text style={styles.descTitle}>Delivered on</Text>
              <Text style={styles.desc}>{formatDate(txItem.createdAt)}</Text>
            </View>
          ) : (
            <View>
              <Text style={styles.descTitle}>Promised on</Text>
              <Text style={styles.desc}>{formatDate(txItem.createdAt)}</Text>
              <Text style={styles.descTitle}>Expiring on</Text>
              <Text style={styles.desc}>{formatDate(txItem.expiry)}</Text>
            </View>
          )}
          <Text style={styles.descTitle}>Status</Text>
          <View style={styles.statusView}>
            <View style={styles.statusSubView}>
              <StatusBlock status={"Requested"} value={txStatus.requested} />
              <StatusBlock status={"Accepted"} value={txStatus.accepted} />
            </View>
            <View style={styles.statusSubView}>
              <StatusBlock status={"Submitted"} value={txStatus.submitted} />
              <StatusBlock status={"Reviewed"} value={txStatus.reviewed} />
            </View>
            <View style={styles.statusSubView}>
              <StatusBlock status={"Task Done"} value={txStatus.taskDone} />
              <StatusBlock status={"Delivered"} value={txStatus.delivered} />
            </View>
          </View>
          {renderButtonView()}
        </View>
      ) : (
        <View style={{ marginTop: 25 }}>
          <ActivityIndicator size={"large"} color={"#000000"} />
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  mainView: {
    height: "100%",
    backgroundColor: "#ffffff",
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 100,
  },
  buttonText: {
    fontSize: 23,
    fontFamily: "MontserratSemiBold",
    letterSpacing: 1.73,
    textAlign: "center",
  },
  acceptButton: {
    height: 64,
    width: 150,
    backgroundColor: "#000000",
    justifyContent: "center",
    marginHorizontal: 20,
    borderRadius: 10,
    elevation: 1,
  },
  rejectButton: {
    height: 64,
    width: 150,
    backgroundColor: "#e6e6e6",
    justifyContent: "center",
    marginHorizontal: 20,
    borderRadius: 10,
    elevation: 1,
  },
  headerView: {
    height: 90,
    backgroundColor: "#000000",
  },
  title: {
    fontSize: 18,
    fontFamily: "MontserratSemiBold",
    letterSpacing: 0.45,
    color: "#ffffff",
    textAlign: "center",
  },
  titleName: {
    fontSize: 30,
    fontFamily: "MontserratMedium",
    letterSpacing: 2.25,
    color: "#ffffff",
    textAlign: "center",
    marginTop: 8,
  },
  amount: {
    fontSize: 35,
    fontFamily: "MontserratBold",
    letterSpacing: 3.35,
    color: "#000000",
    textAlign: "center",
    marginTop: 23,
  },
  descTitle: {
    fontSize: 23,
    fontFamily: "MontserratMedium",
    letterSpacing: 1.73,
    color: "#000000",
    marginTop: 18,
    marginLeft: 40,
  },
  desc: {
    fontSize: 20,
    fontFamily: "MontserratBold",
    letterSpacing: 1.5,
    color: "#000000",
    marginLeft: 40,
  },
  statusView: {
    flexDirection: "column",
    alignItems: "center",
  },
  statusSubView: {
    flexDirection: "row",
    marginTop: 20,
  },
  statusBlock: {
    width: 130,
    height: 20,
    flexDirection: "row",
    marginHorizontal: 20,
  },
  statusIcon: {
    width: 16,
    height: 16,
    marginLeft: 20,
    borderRadius: 8,
  },
  statusText: {
    fontSize: 15,
    fontFamily: "MontserratSemiBoldItalic",
    letterSpacing: 1.13,
    color: "#000000",
    width: 100,
  },
});

export default TxDetail;
