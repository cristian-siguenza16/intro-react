import Button from "@/components/Button";
import CatCard from "@/components/CatCard";

export default function Home() {
  const names = ["Pepito", "Juanito", "Fernandita", "Luisito"];
  return (
    /*
    <main>
    <h1>Hello world</h1>
      <ul>
        <li>Primer punto</li>
        <li>Segundo punto</li>
        <li>Tercer punto</li>
      </ul>
      <div className="flex flex-col justify-start items-start">
        <Button name="Pepito">Hola pepito</Button>
        <Button name="Juanito">Hola juanito</Button>
        <Button name="Fernandita">Hola fernandita</Button>
        <Button name="Luisito">Hola luisito</Button>
        <Button>Hola no tengo nombre</Button>
      </div>
      <div className="flex flex-col justify-start items-start">
        {
          names.map((name, index) => {
            return (
              <Button key={index} name={name}>Hola {name}</Button>
            );
          })
        }
      </div>
    </main>
    */
   <main>
     <h1>Listado de gatos</h1>
     <div>
      <CatCard id="OXYvRd7oD" src="https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg"/>
     </div>
   </main>
  );
}
