import Leaf from './leaf.png';

const image={
    position:'relative',
    left:1110,
    bottom:60,
  }
function Banner(props) {
    return <div>
    <nav style={{...props.style, fontSize: props.textSize}}>{props.children}</nav>
    <img style={image} src={Leaf} alt=""/>
    </div>
  }
  export default Banner