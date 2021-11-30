
import './App.css';

function App(props) {
  return (
    <div> {props.porDefecto}
      <br/>
      <button >Aceptar</button>

    </div>
    
  );
}

App.defaultProps = {
  porDefecto: "Defecto",
};

export default App;
