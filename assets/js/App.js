import getData from "./getData.js";
import print from "./print.js";
import getUserDetailsHtml from "./getUserDetailsHtml.js";
import textareaHandleHtml from "./textareaHandleHtml.js";
import printAndOutputArea from "./printAndOutputArea.js";

let userDetailsData = {};
export default function App() {
  const root = document.getElementById("root");

  if (getData().name && getData().classNumber && getData().topic) {
    root.innerHTML = textareaHandleHtml + printAndOutputArea;
    handleTaskAndPrintArea();
  } else {
    root.innerHTML = getUserDetailsHtml;
    showForm();
  }
}

function showForm() {
  const get_user_details = document.getElementById("get_user_details");
  const form = get_user_details.querySelector("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const date = new Date();
    userDetailsData.name = e.target[0].value.toUpperCase();
    userDetailsData.classNumber = e.target[1].value;
    userDetailsData.topic = e.target[2].value;
    userDetailsData.data = "";
    userDetailsData.accountCreated = `${date.toLocaleTimeString()} ${date.toDateString()}`;
    localStorage.setItem("user_data", JSON.stringify(userDetailsData));
    window.location.reload();
  });
}
function handleTaskAndPrintArea() {
  const editor = document.getElementById("editor");
  const delete_accountBtn = document.getElementById("delete_account");
  const clear_taskBtn = document.getElementById("clear_task");
  const printBtn = document.getElementById("print");
  const print_area = document.querySelector("#print_area");
  const card = print_area.querySelector(".card");
  const show_text = document.querySelector("#show_text");
  const liveOutput = show_text.querySelector("#live_data");

  // textarea past don't allow
  editor.onpaste = (e) => e.preventDefault();

  // check data isAble
  if (getData().data) {
    show_text.classList.remove("d-none");
  }
  // print userProfile
  card.innerHTML = `<div class="card-header">User Profile</div>
  <div class="card-body">
    <h5 class="card-title">${getData().name}</h5>
    <p class="card-text"><b>Class Number:</b> ${getData().classNumber}</p>
    <p class="card-text"><b>Topic:</b> ${getData().topic}</p>
    <p class="card-text"><b>Website URL:</b> ${window.location.origin}</p>
  </div>
  <div class="card-footer text-muted">Account Created on ${
    getData().accountCreated
  }</div>`;

  // previous data show
  editor.value = getData().data;
  liveOutput.innerText = getData().data;

  // clear your task
  clear_taskBtn.addEventListener("click", function () {
    const isConform = confirm("Are you sure? Do you want to delete your data?");
    if (isConform) {
      userDetailsData = getData();
      userDetailsData.data = "";
      localStorage.setItem("user_data", JSON.stringify(userDetailsData));
      editor.value = getData().data;
      show_text.classList.add("d-none");
    }
  });
  // print your task
  printBtn.addEventListener("click", function (e) {
    print("print_area");
    window.location.reload();
  });

  // delete your account and all data
  delete_accountBtn.addEventListener("click", function () {
    const isConform = confirm(
      "Are you sure? Do you want to delete your account and all data?"
    );
    if (isConform) {
      localStorage.removeItem("user_data");
      window.location.reload();
    }
  });
  // show live data in output
  editor.addEventListener("keyup", function (e) {
    if (e.target.value.trim("").length > 0) {
      show_text.classList.remove("d-none");
    } else {
      show_text.classList.add("d-none");
    }
    liveOutput.innerText = e.target.value;
    userDetailsData = getData();
    userDetailsData.data = e.target.value;
    localStorage.setItem("user_data", JSON.stringify(userDetailsData));
  });
}
