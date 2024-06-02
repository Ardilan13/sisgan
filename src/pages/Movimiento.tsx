import FetchData from "../api/FetchData";
import Loading from "../components/Loading";
import Table from "../components/Table";

export default function Movimiento() {
  const { data, loading } = FetchData("/health/say-hello");

  if (loading) {
    return <Loading />;
  }

  const dataTable = data ? data : [];

  return <Table data={dataTable} />;
}
