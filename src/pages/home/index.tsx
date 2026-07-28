import { Button, Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router'

const Home = () => {
  // hook
  const { data } = useQuery({
    queryKey: ['InitialData'],
    queryFn: () => ({
      name: 'udhay'
    })
  })

  // hook
  const navigate = useNavigate()

  // cb
  const fetchUsers = () => {
    return fetch('https://jsonplaceholder.typicode.com/sers')
  }

  const fetchAlbums = () => {
    return fetch('https://jsonplaceholder.typicode.com/lbums')
  }

  const fetchPhotoes = () => {
    return fetch('https://jsonplaceholder.typicode.com/hotos')
  }

  const fetchCb = useCallback(() => {
    // fetchAlbums()
    //   .then((e) => {
    //     if (e.ok) return e.json()
    //     return new Error('Error in fetch Albums')
    //   })
    //   .then((e) => {
    //     console.log(e, 'albums')
    //     fetchPhotoes()
    //       .then((e) => {
    //         if (e.ok) return e.json()
    //         return new Error('Error in fetch photoes')
    //       })
    //       .then((e) => {
    //         console.log(e, 'photoes')
    //         fetchUsers()
    //           .then((e) => {
    //             if (e.ok) return e.json()
    //             return new Error('Error in fetch users')
    //           })
    //           .then((e) => {
    //             console.log(e, 'users')
    //           })
    //       })
    //   })
    //   .catch((e) => console.log(e, 'error'))
    fetchAlbums()
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error in fetch Albums')
        }
        return response.json()
      })
      .then((albums) => {
        console.log(albums)

        return fetchPhotoes()
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error in fetch Photos')
        }
        return response.json()
      })
      .then((photos) => {
        console.log(photos)

        return fetchUsers()
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error in fetch Users')
        }
        return response.json()
      })
      .then((users) => {
        console.log(users)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  // effect
  useEffect(() => {
    fetchCb()
  }, [fetchCb])

  return (
    <>
      <Typography variant="h4">{data && data.name} version 6</Typography>
      <Button onClick={() => navigate('/login')}>Login</Button>
    </>
  )
}

export default Home
