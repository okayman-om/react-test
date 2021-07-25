import "./styles.css";
import Header from "./TheHeader";
import Form from "./TheForm";
import ViewUser from "./ViewUser";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Header></Header>
        <Form></Form>
        <ViewUser></ViewUser>
      </div>
    </div>
  );
};

export default App;
