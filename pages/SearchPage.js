import React, { useEffect, useState } from 'react'
import { Button, Input,Text } from '@chakra-ui/react'
import Link from 'next/link'

function SearchPage() {
  const [search, setSearch] = useState('')
  const [searchList, setSearchList] = useState([])
  const URL='https://api.enime.moe/search/'

  useEffect(() => {
    fetch(URL + search)
    .then((response) => response.json())
    .then((animelist) =>setSearchList(animelist.data));
    return () => {
    }
  }, [search])
  
  return (<>
  <Link href='/'>
        <Button> back to Home</Button>
        </Link>
    <Input variant='flushed' bg='inherit' placeholder='Search Any Anime/Movie' input={search} onChange={(e) => setSearch(e.target.value)} />
    <Text>{search}</Text>
    {searchList?.map((e, index)=><>
    
      <Link key={index} href={`/details?id=${e.id}`}><Button >{e.title.userPreferred}</Button></Link>
    </>
    )}
  </>

  )
}

export default SearchPage

