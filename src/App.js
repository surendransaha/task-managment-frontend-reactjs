

import { useState } from "react";
import axios from "axios";


function MyComponent() {
  
  const [data, setData] = useState([]);

useEffect(() => {
    axios.get("https://random-data-api.com/api/v2/users").then((response) => {
      setData(response.data);
    });
  }, []);


  return <div>{data.map((d) => <p>{d.text}</p>)}</div>;
}




export default MyComponent;