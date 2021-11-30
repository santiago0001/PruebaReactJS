

function BarraPrincipal(props) {
  return (
    <div> <h1> {props.titulo} </h1> 
      <br/>
      <button >Aceptar</button>

    </div>
    
  );
}

BarraPrincipal.defaultProps = {
  porDefecto: "Sin props",
};

export default BarraPrincipal;
