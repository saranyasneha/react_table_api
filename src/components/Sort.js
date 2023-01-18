import '../App.css';
import downArrow from '../images/downarrow.png';
import upArrow from '../images/upArrow.png';

const Sort=({users,setUsers,sorted,setsorted,search,setSearch})=>{

    const sortById=()=>{
        setsorted({sortedField:"id",reversed:!sorted.reversed});
        users.sort((userA,userB)=>{
         if(sorted.reversed){
           return userA.id-userB.id;
         }
         return userB.id-userA.id;
        });
        setUsers(users);
       }
       
       const sortByName=()=>{
         setsorted({sortedField:"name",reversed:!sorted.reversed});
         users.sort((userA,userB)=>{
         const nameA=`${userA.name}`;
         const nameB=`${userB.name}`;
         if(sorted.reversed){
           return nameB.localeCompare(nameA);
         }
         return nameA.localeCompare(nameB);
        });
        setUsers(users);
        }
       
       const sortByUserName=()=>{
         setsorted({sortedField:"username",reversed:!sorted.reversed});
        
        users.sort((userA,userB)=>{
         const userNameA=`${userA.username}`;
         const userNameB=`${userB.username}`;
         if(sorted.reversed){
           return userNameB.localeCompare(userNameA);
         }
         return userNameA.localeCompare(userNameB);
        });
        setUsers(users);
        }
       
       const sortByCity=()=>{
         setsorted({sortedField:"city",reversed:!sorted.reversed});
         users.sort((userA,userB)=>{
         const cityA=`${userA.address.city}`;
         const cityB=`${userB.address.city}`;
         if(sorted.reversed){
           return cityB.localeCompare(cityA);
         }
         return cityA.localeCompare(cityB);
        });
       setUsers(users);
        }
       
        const sortByWebsite=()=>{
         setsorted({sortedField:"website",reversed:!sorted.reversed});
         users.sort((userA,userB)=>{
         const websiteA=`${userA.website}`;
         const websiteB=`${userB.website}`;
         if(sorted.reversed){
           return websiteB.localeCompare(websiteA);
         }
         return websiteA.localeCompare(websiteB);
        });
        setUsers(users);
        }
        const Arrow = () => <img src={sorted.reversed ? upArrow : downArrow} alt=""/>
      
    return (
<tr>
    <th className='headId' onClick={sortById}>Id
      {sorted.sortedField=="id"?Arrow():null}
      
    </th>

    <th onClick={sortByName}>Name 
      {sorted.sortedField=="name"?Arrow():null}
      
    </th>

    <th onClick={sortByUserName}>User Name
      {sorted.sortedField=="username"?Arrow():null} 
      
    </th>

    <th onClick={sortByCity}>City
      {sorted.sortedField=="city"?Arrow():null}
      
    </th>
    <th>Phone</th>
    <th onClick={sortByWebsite}>Website
    {sorted.sortedField=="website"?Arrow():null}
   </th>
  </tr>
    )
}
export default Sort;