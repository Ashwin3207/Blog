import { useState, useEffect} from "react";
import Bloglist from "./Bloglist";
import useFetch from "./UseFetch";




const Home = () => {
    //let name ='Mario';

        // const [name,setName] = useState('Mario');
        // let [age,setAge] = useState(20);
//     const handleClick = () =>
//     {
    //   setName('Luigi');
    
//     }
//     const handleClickAgain =(name)=>
//     {
//         console.log('hello ' + name);
//     }
//     const ageChar = ()=> 
// {
//     setAge(++age);
// }

const {data : blogs,isPending,error}=useFetch('http://localhost:8000/blogs')

    return (  

        
      
        <div className="home">
           
            
            {/* <p>Age is {age}</p>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={()=>handleClickAgain('mario')}>Another button</button>
            <button onClick={ageChar}>Age Char</button> */}
           {isPending && <div id="loading">Loading...</div>}
           {error && <div id="error">{error}</div>}
           {blogs && <Bloglist blogs={blogs} title="All Blogs"/>}
           {blogs && <Bloglist blogs={blogs.filter((blog)=>blog.author==='Srish')}  title="Srish blogs"/>}
           {blogs && <Bloglist blogs={blogs.filter((blog)=>blog.author==='Ash')}  title="Ash blogs"/>}



        </div>
    );
}
 
export default Home;