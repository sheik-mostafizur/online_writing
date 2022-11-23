export default function () {
  return localStorage.getItem("user_data")
    ? JSON.parse(localStorage.getItem("user_data"))
    : "";
}
