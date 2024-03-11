import Fleur1 from './fleur1.jpeg'
import Star from './etoile (1).png';
import Star2 from './evaluation.png';

const plateitem={
    position:'relative',
    left:730,
    bottom:740,
  
  }
  const element={
    position:'relative',
    bottom:25,
   }
   const img={
    width:200,
    height:200,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    }

function Plateitem2() {
    return <div style={plateitem}>
      <img  style={img} src={Fleur1} alt=""/>
      <div>
      <p>Produit2</p>
     <img src={Star} alt=""/><br/>
     <img  style={element}src={Star2} alt=""/><br/>
     <button style={element}>Ajouter</button>
      </div>
    </div>
  }
  export default Plateitem2