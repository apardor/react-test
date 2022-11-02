import Button from "./Button"
import Tasks from "./Tasks";

const Header = ({ title }) =>{
  const onClick = () =>{
    console.log('Click');
  }
 
  return (<header>
    <h1 className="h1">{title}</h1>
    <Button color="red" text="hello" onClick={onClick}/>
    <Button color="green" text="my" />
    <Button color="yellow" text="little" />
    <Button color="cyan" text="friend" />
  </header>)
}

export default Header
