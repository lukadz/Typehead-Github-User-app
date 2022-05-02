import { useState } from 'react'

function useFetchUser(inputValue) {
const [users, setUsers] = useState([])
const [errors , setErrors] = useState("")

async function FetchUsers(){
  try{
    let response = await fetch(`https://api.github.com/search/users?q=${inputValue}`,{ 
      headers: {
        Authorization: `token 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`,
      },
      })
    if(response.status === 403) setErrors("Error due to Rate Limit")
    if(response.status === 200) setErrors("")

    response = await response.json();
    
    if(response.items) setUsers(response.items)
    if(!inputValue) setUsers([])

  }catch{
    setErrors("fetch doesn't execute")
  }
}
  return [users , errors , FetchUsers]
}

export default useFetchUser