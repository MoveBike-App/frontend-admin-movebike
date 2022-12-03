import React, { useEffect, useState } from 'react'
import Post from './Route'
import { getAllRoutes } from '/services/routes/routes'

export default function Route () {
  const [routes, setRoutes] = useState([])
  
  const getRoutes = async () => {
    try {
      const response = await getAllRoutes()
      const { data: { routes } } = await response.json()
      setRoutes(routes)
    } catch (error) {}
  }
  const deleteRouteState = (deletedId) => {
    setRoutes(routes.filter(r => r._id !== deletedId))
  }
  useEffect(() => {
    getRoutes()
  }, [])
 

  return (
    <section className='container'>
      <h2 className='mt-4'>Rutas turísticas</h2>
      <button
        className='btn btn-movebike contained'
      >
        <i className='fa-solid fa-plus me-2' />
        Agregar ruta
      </button>
      <main className='container-fluid mt-3'>
        <div className='row mx-auto'>
          {routes
            .map((post) => (
              <Post
                key={post._id}
                title={post.title}
                image={post.image}
                description={post.description}
                createdAt={post.createdAt}
                deletePost={post._id}
                deleteRouteState={deleteRouteState}

              />

            ))
            .reverse()}

        </div>
      </main>
    </section>
  )
}
