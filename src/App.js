import "./App.css";
import { Alert } from "./components/Alert";
import { Button } from "./components/Button/Button";
import { Header } from "./components/Header/Header";
import { ProductFilterItem } from "./components/ProductFilter/ProductFilterItem/productFilterItem";
import WeeklySongListItem from "./components/WeeklySongListItem/WeeklySongListItem";

function App() {
  return (
    <div className="App">
      <WeeklySongListItem
        order="01"
        title="Em Không Thể"
        singer="Tiên Tiên, Touliver"
        viewCount={3000}
      />
      <br />
      <Button label="Button render app" primary />
      <Header label="Dang nhap" />
      {/* <ProductFilterItem /> */}
      <Alert width={"200px"} message="messae" type="warning" />
    </div>
  );
}

export default App;
