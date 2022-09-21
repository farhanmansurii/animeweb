import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Text, Image } from '@chakra-ui/react'
function details() {
  const [deets, setDeets] = useState([])
  const [name, setName] = useState([])
  const eps = []
  const router = useRouter()
  const animename = router.query.id
  const URL = "https://api.enime.moe/anime/"
  React.useEffect(() => {
    fetch(URL + animename).then((response) => response.json())
      .then((animelist) => setDeets(animelist))
      return () => {
      }
    }, [])

  return (
    <div>

      <Text>{deets.description}
      </Text>

    </div>
  )
}

export default details
