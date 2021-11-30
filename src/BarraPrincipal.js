import './style/BarraPrincipal.css';

function BarraPrincipal(props) {
  return (
    <div className="Home"> 
    
    <h1 className="Titulo"> {props.titulo} </h1> 
      <br/>
      <button >Aceptar</button>

    </div>
    
  );
}

BarraPrincipal.defaultProps = {
  porDefecto: "Sin props",
};

export default BarraPrincipal;
