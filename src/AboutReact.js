


export function AboutReact(props){
    let num = 0;
    const fruits = [ "Apple","Mango","Orage" ];

    const intro = {
        name:"Amrit poudel",
        age:"22",
        addr:"Chitwan"
    }

    return <div>
        <h1>{ String(undefined) }</h1>
        {
            num ? <h2> Hello </h2>:<h2> Hi </h2>
        }
        {
            fruits.map( (item)=> <p key={item} >  {item} </p> )
        }
         
        {   
            Object.keys(intro).map( (keyItem) => <h1 key = { String(keyItem) } > {intro[keyItem]} </h1> )
        }

    </div>
}

