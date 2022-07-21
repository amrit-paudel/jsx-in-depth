
import "./Pet.css"

// A component that will accept an array
// containing the objects which holds the 
// information about each pet type

export function Pet(props) {

    const pets = props.petsInfo; 

    return (<div className = "petsContainer" >
        <h1> My Pets </h1> 
        {
            pets.map((eachpet) => { return(
                
                <div key={eachpet.name} className={ "eachpet "+eachpet.name }>
                    <h2> Name : {eachpet.name} </h2>
                    <h2> Type : {eachpet.type} </h2>
                    <img src={eachpet.image}  alt={eachpet.name+" image" }  />
                    <h2> {eachpet.description} </h2>
                    <ul className = "skills" >
                        <h3> Skills </h3>
                        {

                            eachpet.skills.map((item,index) => <li key={index} > {item} </li>  )
                        }
                    </ul>


                </div>
            ) })
        }
    </div>)
}
