import "./styles.css";
import Rosto from "./rosto.jpg";

function Header(){
    return <header>
                <div className="headerTitle">
                    <spam>Meu Blog</spam>
                </div>
                <div className="headerImage">
                    <img src={Rosto} alt="Rosto de uma pessoa"/>
                </div>
    
    </header>;
}

export default Header;