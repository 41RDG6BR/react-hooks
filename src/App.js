import React, {useState, useEffect} from 'react';
import './App.css';

const useFetch =(url)=>{
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  //similar to componentDidMount and componentDidUpdate
  useEffect(()=>{
    //Update the document title using the browser API
    // document.title = `You clicked ${count} times`
    (async function() {
      try{
        const response = await fetch(url)
        const data = await response.json()
        // const item = data.results[0]
        const [item] = data.results
        setData(item) 
        setLoading(false)
      } catch (e) {
        console.error( "404 Not Found");
      }
   })();
  }, [])

  return {data, loading}
}

const App = () => {
  
  // const [count, setCount] = useState(0)
  const {data, loading} = useFetch('https://api.randomuser.me')

  return (
    <div className="App">
    {/* <p>You clicked {count} times</p> */}
    {/* <button onClick={()=>{setCount(count + 1)}}>Click me</button> */}
      {loading ? <div>...loading</div> : <div>{data.name.first}</div>}
    </div>
  );
}

export default App;
