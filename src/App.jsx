import { signInWithGoogle } from "./firebase";

function Listen(ev) {
  setTimeout(function () {
    if (w && !w.closed) {
      w.focus();
    }
  }, 50);
}
function Click() {
  w = window.open("/", "hadialog", "width=10,height=10,modal=yes");
  window.addEventListener("click", Listen);
}

function App() {
  return (
    <>
      <button onClick={signInWithGoogle}>Sign in with google</button>
      <h1>{localStorage.getItem("name")}</h1>
      <h1>{localStorage.getItem("email")}</h1>
      <img src={localStorage.getItem("profile")} />
    </>
  );
}

export default App;
