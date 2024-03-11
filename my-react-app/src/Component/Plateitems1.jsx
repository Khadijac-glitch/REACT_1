import Fleur1 from './fleur1.jpeg'
import Star from './etoile (1).png';
import Star2 from './evaluation.png';
const element={
    position:'relative',
    bottom:25,
   }
   const plateitems={
    position:'relative',
    left:360,
    bottom:380,
   }
   const img={
    width:200,
    height:200,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    }
function Plateitem1() {
    return <div style={plateitems}>
      <img style={img}src={Fleur1} alt=""/>
      <div>
      <p>Produit1</p>
     <img src={Star} alt=""/><br/>
     <img  style={element}src={Star2} alt=""/><br/>
     <button style={element}>Ajouter</button>
      </div>
    </div>
  }
  export default Plateitem1
