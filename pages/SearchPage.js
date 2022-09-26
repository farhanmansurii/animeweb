import React, { useEffect, useState } from 'react'
import { Button, Input,Text } from '@chakra-ui/react'
import Link from 'next/link'

function SearchPage() {
  const [search, setSearch] = useState('')
  const [searchList, setSearchList] = useState([])
  const URL='https://consumet-api.herokuapp.com/anime/gogoanime/'

  useEffect(() => {
    fetch(URL + search)
    .then((response) => response.json())
    .then((animelist) =>setSearchList(animelist.results));
    return () => {
    }
  }, [search])
  
  return (<>
  
    <Input variant='flushed' bg='inherit' placeholder='Search Any Anime/Movie' input={search} onChange={(e) => setSearch(e.target.value)} />
    <Text>{search}</Text>
    {searchList.map((e)=><>
    
      <Link key={e.id} href={`/details?id=${e.id}`}><Button >{e.title}</Button></Link>
    </>
    )}
  </>

  )
}

export default SearchPage

