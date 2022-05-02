import React from 'react';
import styles from './Main.module.css';
import {useEffect , useState} from 'react';
import useFetchUser from '../../customHooks/useFetchUser';

function Main() {

  const [inputValue, setInputValue] = useState('');
  const [users , errors , FetchUsers] = useFetchUser(inputValue);

  useEffect(() => {
    FetchUsers(inputValue)
  }, [inputValue])

  return (
    <div className={styles.container}>
      <label htmlFor="srch">Search for users</label>
      <input className={styles.searchbar}
             id="srch" type='text' 
             placeholder="Search for users" 
             value={inputValue}
             onChange={(e) => setInputValue(e.target.value)}/>

       {users.length !== 0 && users.slice(0,10).map(item => <a 
               key={item.id} 
               href={item.html_url} 
               className={styles.users}
               target="_blank" 
               rel="noreferrer">
                      <img src={item.avatar_url} alt="avatar"/>
                      <p>{item.login}</p>
                    </a>)}
        {errors ? errors : null}
    </div>
    
  )
}

export default Main