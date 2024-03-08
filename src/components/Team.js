import React, { useState, useEffect} from 'react';
import { Button } from 'reactstrap';
import Adminstrator from './Adminstrator';
import Member from './Member';
import axios from 'axios';


export default function Team () {

    const [teamSearch, setTeamSearch] = useState("");
    const [filteredTeamList, setFilteredTeamList] = useState(null);
    const [teamList, setTeamList] = useState(null);
    const [teamListGrid, setTeamListGrid] = useState(null);
    

    useEffect(() => {
      TeamList();
    }, []);


    function TeamList() {
      
      axios
          .get('https://mocki.io/v1/ddb7e0a8-e218-4e36-b1be-b902cdb1c098')
          .then(response => {
            const list = response.data;
            setTeamList(list);
            setTeamListGrid(list);
          })
          .catch(error => {
            console.error("Error  team list", error);
          });


    }

   
    const OnSearchTeam = (event) => {

        setTeamSearch(event.target.value);

        if(event.target.value) {

            const searchQuery = event.target.value.toLowerCase();
            const filteredList = teamList.filter(member => 
              member.first_name.toLowerCase().includes(searchQuery) ||
              member.last_name.toLowerCase().includes(searchQuery) ||
              member.email.toLowerCase().includes(searchQuery)
            );
            setFilteredTeamList(filteredList);

        }else{

          setFilteredTeamList(teamList);

        }


        setTeamListGrid(filteredTeamList);


       // console.log("teamList==>", filteredTeamList)

 
    };
    



    return <section>

<nav className="navbar navbar-expand-lg navbar-light bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand team-heading" href="#">Team</a>

    <form className="d-flex">
        <input className="form-control" type="search" placeholder="Search" value={teamSearch} onChange={OnSearchTeam} aria-label="Search"/>
    </form>

  </div>
</nav>


<div className="jumbotron text-center">

<Adminstrator list={teamListGrid && teamListGrid.filter(member => member.role === 'admin')}/>

<Member list={teamListGrid && teamListGrid.filter(member => member.role === 'member')}/>

</div>

{/* <Button color="danger">Danger!</Button> */}

        

    </section>
}