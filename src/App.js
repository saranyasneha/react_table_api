import './App.css';
import Axios from "axios";
import React, { useEffect, useState } from 'react';
import Pagination from './components/Pagination';
import Sort from './components/Sort';
import GlobalSearch from './components/GlobalSearch';

const App=()=> {
  const [sorted,setsorted]=useState({sortedField:"id",reversed:false});
  const [users,setUsers]=useState([]);
  const [search,setSearch]=useState("");
  const usersPerPage=5;
  const [currentPage,setCurrentPage]=useState(1)
  const [columnSearch,setColumnSearch]=useState("");

  const numberOfTotalPages=Math.ceil(users.length/usersPerPage);
  const pages=[...Array(numberOfTotalPages+1).keys()].slice(1);
  const indexOfLastUser=currentPage*usersPerPage;
  const indexOfFirstUser=indexOfLastUser-usersPerPage;
  
const getUserData= async ()=>{
   try{
    const data=await Axios.get("https://jsonplaceholder.typicode.com/users");
   setUsers(data.data);
  }
  catch(e){
    console.log(e);
  }
 };

 useEffect(()=>{
  getUserData();
 },[]);
 
 return (
<div className='App'>
<div className='search'>
    <input
    type="text" 
    className='seach-box'
    placeholder="Search...."
    onChange={(e)=>{
       setSearch(e.target.value);
    }}/>
</div>
<div className='table-container'>
  <table>
  <thead>
    <Sort users={users} 
    setUsers={setUsers} 
    sorted={sorted}  search={search} setSearch={setSearch}
    setsorted={setsorted} />
 </thead>
  <tbody> 
    <GlobalSearch indexOfLastUser={indexOfLastUser}  
    indexOfFirstUser={indexOfFirstUser}
    search={search}
    users={users} />
  </tbody>
</table>
</div>
<Pagination currentPage={currentPage}
 setCurrentPage={setCurrentPage} 
 numberOfTotalPages={numberOfTotalPages} 
 pages={pages} />
</div>
)};
export default App;
