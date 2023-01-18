
 const GlobalSearch=({indexOfFirstUser,indexOfLastUser,search,users})=>{
    const visibleUsers=users.slice(indexOfFirstUser,indexOfLastUser);
    const searchName=(item)=>{
        if(search === ""){
          return item;
        }
        else if(
          search==item.id||
          item.name.toLowerCase().includes(search.toLowerCase())||
          item.username.toLowerCase().includes(search.toLowerCase())||
          item.address.city.toLowerCase().includes(search.toLowerCase())||
          search==item.phone||
          item.website.toLowerCase().includes(search.toLowerCase())
        ){
          return item;
        }
       }
     return (
        visibleUsers.filter((item)=>searchName(item)).map((item)=>{
            return (
       <tr>
         <td className='dataId'>{item.id}</td>
         <td>{item.name}</td>
         <td>{item.username}</td>
         <td>{item.address.city}</td>
         <td>{item.phone}</td>
         <td>{item.website}</td>
       </tr>);
        })
    );
}
export default GlobalSearch;