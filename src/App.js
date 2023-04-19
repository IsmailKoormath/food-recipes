import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, ListGroup } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import Detail from "./componets/Detail";
// import Recipe from "./componets/Recipe";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search,setSearch] =useState("")
  const [query,setQuery] =useState('chicken')

  useEffect(() => {
    base();
  }, [query]);

  const base = async () => {
    await axios
      .get(
        `https://api.edamam.com/api/recipes/v2/?type=public&q=${query}&app_id=8c123e87&app_key=c15f6377dd7bfb27f6022128fb4a09a2`
      )
      .then((response) => {
        console.log(response.data.hits);
        setRecipes(response.data.hits);
      });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(search)
    setSearch("")
  };

  return (
    <div className="App">
      
        <h1 className="heading">FOOD RECIPE</h1>
        <form onSubmit={handleSubmit}className= "search-form">
          <input className="search-bar" type="text" onChange={(e)=>setSearch(e.target.value)}/>
          <button type="submit" className="search-button">search</button>
        </form>
        <div >
          <div className="recipes" >
 {recipes.map((res)=>(

    <Card  style={{ width: '18rem', cursor:"pointer" }}key={res.recipe.label} className="card">
    <Card.Img variant="top" src={res.recipe.image}/>
    
    <ListGroup className="list-group-flush" >
      <ListGroup.Item style={{fontSize:"18px",fontWeight:"600"}}>{res.recipe.label}</ListGroup.Item>
      <ListGroup.Item>{res.recipe.ingredientLines}</ListGroup.Item>
      <ListGroup.Item>{res.recipe.calories}</ListGroup.Item>
      <ListGroup.Item>Real sample</ListGroup.Item>
    </ListGroup>
    
  </Card>
 
))} 
</div>
     </div> 
 
      {/* {recipes.map(recipe=>{
      <Recipe title={recipe.recipe.label} image={recipe.recipe.image} calories={recipe.recipe.calories}/>
       */}
       {/* <Router>
        <Routes>
          <Route path="/detail/:id" element={<Detail/>}></Route>
        </Routes>
       </Router> */}

<Detail/>
    
    </div>
  );
}
export default App;

