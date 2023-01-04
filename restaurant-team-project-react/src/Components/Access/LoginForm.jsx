import { useState } from "preact/hooks";

export default function LoginComponent(props) {
  const [isTypingForm, setIsTyping] = useState(false);
  const [inputValues, setInputValues] = useState({
    typedLogin: "",
    typedPassword: "",
  });

  function giveAdminAccess() {
    props.onAuthorisation("admin");
    resetInput();
  }

  function submitHandler(event) {
    event.preventDefault();
    if (
      event.target.login.value !== "admin" ||
      event.target.password.value !== "admin"
    ) {
      resetInput();
      alert("Wrong login or password");
    } else {
      giveAdminAccess();
    }
  }

  function resetInput() {
    setInputValues({ typedLogin: "", typedPassword: "" });
  }

  return (
    <div>
      {isTypingForm || (
        <button onClick={() => setIsTyping(true)}> Login as admin </button>
      )}
      {isTypingForm && (
        <form onSubmit={submitHandler}>
          <label>Login</label>
          <input type="text" name="login" value={inputValues.typedLogin} />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={inputValues.typedPassword}
          />
          <input type="submit" />
          <button type="reset" onClick={() => setIsTyping(false)}>
            Cancel
          </button>
        </form>
      )}
    </div>
  );
}
