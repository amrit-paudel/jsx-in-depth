
import { AboutReact } from "./AboutReact";
// and we import that component here in this component
import { Pet } from "./Pet";



const pets = [
  {
    name: "Molly",
    type: "cat",
    description: "Molly is a cute little sweet cat",
    skills: ["meow", "purr", "play dead"],
    image: "/images/cat.jpg",

  },
  {
    name:"Sunny",
    type:"Dog",
    description:"Sunny is a nice loyal and obedient dog",
    skills:[ "fetch","play dead","roll over" ],
    image:"/images/dog.jpg",
  },
  {
    name:"Rocket",
    type:"Racoon",
    description:"Rocket is a smart Racoon",
    skills:[ "solve puzzle","rolling balls" ],
    image:"/images/racoon.jpg",
  }
];



function App() {
  return (
    <div className="App">
      <Pet petsInfo = {pets} />

    </div>
  );
}

export default App;

