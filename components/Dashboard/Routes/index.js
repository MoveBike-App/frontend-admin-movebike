import React, { useEffect, useState } from 'react'
import Post from './Route'
import { getAllRoutes } from '/services/routes/routes'
import AddRoute from './AddRoute'

export default function Route () {
  const [currentRoute, setCurrentRoute] = useState({})
  const [routes, setRoutes] = useState([])
  const [addRoute, setAddRoute] = useState(false)
  const [editRoute, setEditRoute] = useState(false)
  const handleClose = () => {
    setAddRoute(false)
  }
  const handleEditClose = () => {
    setEditRoute(false)
  }

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

  const refreshTable = (route) => {
    for (let i = 0; i < routes.length; i++) {
      if (routes[i]._id === route._id) {
        routes[i] = route
        setRoutes(routes)
        return
      }
    }
    routes[routes.length] = route
    setRoutes(routes)
  }
  return (
    <main className='container-fluid card-section pt-1 pb-2 bookings'>
      <section className='container'>
        <div className='col-12 ms-3'>
          <h2 className='mt-4 dashboard__title'>Rutas turísticas</h2>

          <button
            className='btn btn-movebike contained'
            onClick={() => {
              setAddRoute(true)
            }}
          >
            <i className='fa-solid fa-plus me-2' />
            Agregar ruta
          </button>
        </div>
        <div className='row mx-auto'>
          {routes
            .map((post) => (
              <Post
                key={post._id}
                post={post}
                deleteRouteState={deleteRouteState}
                refreshTable={refreshTable}
                showFormEdit={
                  (route) => {
                    setCurrentRoute(route)
                    setEditRoute(true)
                  }

                }
              />
            ))
            .reverse()}

        </div>
        <AddRoute
          edit={false}
          show={addRoute}
          handleClose={handleClose}
          handleClick={handleClose}
          onHide={handleClose}
          refreshTable={refreshTable}
        />
        <AddRoute
          edit={false}
          show={editRoute}
          handleClose={handleEditClose}
          handleClick={handleEditClose}
          onHide={handleEditClose}
          handleCloseEdit={() => setEditRoute(false)}
          refreshTable={refreshTable}
          route={currentRoute}
        />
      </section>
    </main>
  )
}
