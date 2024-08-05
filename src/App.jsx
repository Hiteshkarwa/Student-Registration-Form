import FormDataDisplay from "./Components/FormDataDisplay";
import StudentRegistrationForm from "./Components/StudentRegistrationForm";
import { FormProvider } from "./Store/UserContext";
function App() {
  return (
    <>
      <FormProvider>
        {/* Registration Form */}
        <StudentRegistrationForm />
        {/* Display the user data coming from form */}
        <FormDataDisplay />
      </FormProvider>
    </>
  );
}

export default App;
