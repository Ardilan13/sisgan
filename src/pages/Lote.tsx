import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import FetchData from "../api/FetchData";
import Table from "../components/Table";
import Notification from "../components/Notification";

export default function Lote() {
  const { data, loading, error } = FetchData("/lots");
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState({
    message: "",
    color: "",
  });

  useEffect(() => {
    if (error) {
      setNotificationMessage({
        message: "An error occurred: " + error,
        color: "error",
      });
      setShowNotification(true);
    }
  }, [error]);

  if (loading) {
    return <Loading />;
  }

  let dataTable = data ? data : [];
  dataTable = dataTable.map((item) => {
    return {
      id: item.id,
      lote: item.lotName,
      "fecha de creacion": item.creationDate,
    };
  });

  return (
    <div>
      {showNotification && (
        <Notification
          message={notificationMessage.message}
          color={notificationMessage.color}
        />
      )}
      <Table
        fullData={data ? data : []}
        data={dataTable}
        link={"/registrar-lote"}
        del={"/lots/delete"}
      />
    </div>
  );
}
