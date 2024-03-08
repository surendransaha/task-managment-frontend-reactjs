

// import { useState, useEffect } from "react";
// import axios from "axios";


// function MyComponent() {
  
//   const [data, setData] = useState([]);

// // useEffect(() => {



// //     axios.get("https://random-data-api.com/api/v2/users").then((response) => {

     
      
// //       setData(response.data);

     
      
// //     });

  

    

// //   }, []);


// useEffect(() => {


//   greet()

    
// }, []);

// async  function greet() {

//   await axios.get("https://random-data-api.com/api/v2/users")
//     .then((response) => {
//       setData([response.data]);
//     })
//     .catch((error) => {
//       console.error("Error fetching data:", error);
//     });


// }


// console.log(data)


//   return  <>

// <div>
//   <p>hh</p>
//   { data  && data.map((d) => {

// return <p>{d.gender}</p>
//   }
  
  
//   )}
  
//   </div>

//   </>
  
  
 
// }




// export default MyComponent;






import './App.css';
import React, { useState } from "react";

function App() {
  const [items, setItems] = useState([
    { id: 1, name: "Apples", quantity: 3 },
    { id: 2, name: "Bananas", quantity: 6 },
    { id: 3, name: "Oranges", quantity: 2 },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newItemName, setNewItemName] = useState("");
  const [newItemQuantity, setNewItemQuantity] = useState("");
  
   const handlenewItemQuantityOnchage = (item) => {
   	
   	
     setNewItemQuantity(item)
   	
   }
   
   const handlenewItemNameOnchage = (item) => {
   
    setNewItemName(item)
   	
   	
   }

  const handleAddItem = () => {
    const newItem = {
      id: Date.now(),
      name: newItemName,
      quantity: parseInt(newItemQuantity),
    };

    console.log(newItem)
    setItems([...items, newItem]);
    setNewItemName("");
    setNewItemQuantity("");
    setShowAddForm(false);
    
  };

  const handleEditItem = (itemId, newName, newQuantity) => {
    const updatedItems = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, name: newName, quantity: newQuantity };
      } else {
        return item;
      }
    });
    setItems(updatedItems);
  };

  const handleDeleteItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  };
  
  const handleAddItemButton = () => {
  	
  	//const [showAddForm, setShowAddForm] = useState(false);
  	
  	  	setShowAddForm(!showAddForm)
  	
  	
  }

  return (
    <div>
     <h1>My Shopping List App TEST</h1>
      <div>
        {/* Add proper functionality for "Add Item" button */ }
        <button onClick={handleAddItemButton} >Add Item</button>
        {showAddForm && (
          <div data-testid="add-new-item-row">
            <input
              type="text"
              placeholder="Item name"
              onChange={(e) => handlenewItemNameOnchage(e.target.value)}

              // Set the new Item name

              
            />
            <input
              type="number"
              placeholder="Quantity"
              onChange={(e) => handlenewItemQuantityOnchage(e.target.value)}
              
              // Set the new Item quantity

            />
            <button onClick={handleAddItem}>Add</button>
          </div>
        )}
      </div>
      <ShoppingList
        items={items}
        onEdit={handleEditItem}
        onDelete={handleDeleteItem}
      />
    </div>
  );
}

function ShoppingList(props) {
  const [editItemId, setEditItemId] = useState(null);
  const [editItemName, setEditItemName] = useState('');
  const [editItemQuantity, setEditItemQuantity] = useState(0);

  const handleEditStart = (id, name, quantity) => {
    setEditItemId(id);
    setEditItemName(name);
    setEditItemQuantity(quantity);
  };

  const handleEditSave = () => {
    props.onEdit(editItemId, editItemName, editItemQuantity);
    setEditItemId(null);
    setEditItemName('');
    setEditItemQuantity(0);
  };

  const handleEditCancel = () => {
    setEditItemId(null);
    setEditItemName('');
    setEditItemQuantity(0);
  };


  const handleDeleteButton = (id) => {

    let filteredArray = props.items.filter(item => item.id !== id)
    //this.setState({people: filteredArray});

    props.items = filteredArray


    console.log(filteredArray)
  };

  return (
    <div>
      <table data-testid="table">
        <thead>
          <tr>
            <th>Items</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.items.map((item) => (
            <tr key={item.id}>
              {editItemId === item.id ? (
                <td colSpan="3">
                  <input
                    type="text"
                    placeholder={item.name}
                    value={editItemName}
                    onChange={(e) => setEditItemName(e.target.value)}
                  />
                  <input
                    type="number"
                    placeholder={item.quantity}
                    value={editItemQuantity}
                    onChange={(e) => setEditItemQuantity(e.target.value)}
                  />
                  <button onClick={handleEditSave}>Save</button>
                  <button onClick={handleEditCancel}>Cancel</button>
                </td>
              ) : (
                <>
                  <td>{item.name}</td>
                  <td style={{ textAlign: 'center' }}>{item.quantity}</td>
                  <td>

                  {/* Add proper functionality for "Edit" button */}

                  <button id='edit_button' >Edit</button>

                  {/* Add proper functionality for "Delete" button */}

                  <button onClick={(e) => handleDeleteButton(item.id)} >Delete</button> 
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default App;

