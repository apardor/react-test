import Button from "./Button"

const Header = ({ title }) =>{
 
  return (<header>
    <h1 className="h1">{title}</h1>
    <Button color="red" text="hello" />
    <Button color="green" text="my" />
    <Button color="yellow" text="little" />
    <Button color="cyan" text="friend" />
  </header>)
}

export default Header
