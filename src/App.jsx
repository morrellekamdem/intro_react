import { Component } from "react";
class Photopro extends Component{
    render() {
        return(
        <>
        <img src="chaussure.jpeg"/>
        </> 
        ) 
    };
       
} 
class App extends Component{
    render(){
        return(
            <>
            <Photopro/>
            <App/>
            </> 
        )

    };
} 
export default  App;    
        
    
  

  


