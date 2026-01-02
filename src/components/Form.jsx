import { useAuth } from "../context/AuthContext";
import Greeting from "./Greeting";
import LoginForm from "./LoginForm";
import UploadForm from "./UploadForm";

function Form() {
  const { user } = useAuth();

  function getUploadUI() {
    return (
      <>
        <Greeting />
        <UploadForm />
      </>
    );
  }
  return (
    <>
      <div
        id="form-area"
        className="mx-auto w-[80%] flex flex-col justify-center items-center mt-30 md:mt-50"
      >
        {user ? getUploadUI() : <LoginForm />}
      </div>
    </>
  );
}

export default Form;
