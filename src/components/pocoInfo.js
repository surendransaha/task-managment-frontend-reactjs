import React, { useEffect, useState } from "react";



const PocoInfo =  function() {

    const [listResponse, SetListResponse] = useState([]);


    useEffect(()=>{

        fetchData();
        

    },[]);


    const fetchData = async() => {

        const response =  await fetch(`https://pokeapi.co/api/v2/pokemon-form/${1}/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result =  await response.json();

      console.log(result);
      SetListResponse(result); 



    }


    


    return (
        <div>
            <h1>POGO LIST</h1>
            <p>Name : { listResponse && listResponse.name ? listResponse.name : "" }</p>
            <p>Order : { listResponse && listResponse.order ? listResponse.order : "" }</p>
            <p>P.Url : { listResponse && listResponse.pokemon ? listResponse.pokemon.url : "" }</p>


            {/* <button type="button" onClick={IncDec("decrement")} > Decrement</button>
            <button type="button" onClick={IncDec("increment")}> Increment</button> */}

            {/* {
            listResponse && listResponse.map((item)=>{

                return (
                    <ul>
                <ul/>
                )
                

            });
            } */}





        </div>
    );

};


export default PocoInfo;