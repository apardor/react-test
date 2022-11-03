import Button from "./Button"
import Tasks from "./Tasks";

const Header = ({ title, onAdd, showAssprop }) =>{
 
  return (<header>
    <h1 className="h1">{title}</h1>
    <Button color={showAssprop ? "green" : "red"} text={showAssprop ? "Add" : "Close"} onClick={ onAdd }/>
  </header>)
}

export default Header
