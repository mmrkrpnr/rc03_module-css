import Card from "./components/card/Card";
import data from "./utils/data";

function App() {
  console.log(data);

  return (
    <>
      {data.map((item) => (
        <Card
          key={item.id}
          lang={item.language}
          img={item.img}
          btnName={item.btnName}
        />
      ))}
    </>
  );
}

export default App;
