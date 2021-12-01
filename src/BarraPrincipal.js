import './style/BarraPrincipal.css';
import logo from './img/logoreact.png';
import arsat from './img/logoArsat.png';

function BarraPrincipal(props) {
  return (
    <div className="Home"> 
   
    <img className="logoReact" src={logo}/>
    <h1 className="Titulo"> {props.titulo} </h1>    
    <img className="LogoArsat" src={arsat}/>

    </div>
    
  );
}

BarraPrincipal.defaultProps = {
  porDefecto: "Sin props",
};

export default BarraPrincipal;
