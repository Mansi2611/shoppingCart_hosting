import { useEffect, useState } from "react";
import Spinner from "../Components/Spinner";
import Product from "../Components/Product"

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading,setLoading]=useState(false);  
  // as data is in array format we are defining it over here as empty 
  const[posts,setPosts] = useState([])

  async function fetchProductData(){

    setLoading(true);
      try{
        const res = await fetch(API_URL);
        const data = await res.json()

        //setting posts as data
        setPosts(data);
        console.log(data)
      }
      catch{
        console.log("error in fetching data");
        setPosts([]);
      }
      setLoading(false);
  }


  // to get data once after render 
  useEffect(()=>{
    fetchProductData();
  },[])
  return(
    <div>
   {
     loading?<Spinner></Spinner>:
      posts.length > 0 ? (<div className="grid xs:grid-cols-1 sm:grid-cols-2
      md:grid-cols-3 lg:grid-cols-4 grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
        {
       posts.map((post)=>(
          <Product key={post.id} post={post}></Product>
       ))
        }
      
      </div>) :( <div className="flex justify-center items-center">
        data not forund
      </div>)
     
   }
    </div>
  )
};

export default Home;
