import React, { useEffect, useState } from 'react'
import { Input,Text } from '@chakra-ui/react'
const Search = () => {
  const [search, setSearch] = useState('')
  const URL='https://consumet-api.herokuapp.com/anime/gogoanime/'

  useEffect(() => {
    fetch(URL + search).then((res)=>console.log(res))
    
  
    return () => {
    }
  }, [search])
  
  return (<>
  
    <Input variant='flushed' bg='inherit' placeholder='Flushed' input={search} onChange={(e) => setSearch(e.target.value)} />
    <Text>{search}</Text>
  </>

  )
}

export default Search
