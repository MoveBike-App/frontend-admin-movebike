import React, { useEffect, useState } from 'react'
const axios = require('axios')
import Post from './Route'




export default function Route() {
    const [posts, setPosts] = useState([])
    const URL = 'http://localhost:8080/'
    useEffect(() => {
      axios
        .get(`${URL}routes`)
        .then(function (response) {
          const routes = response.data.data.routes;
          setPosts(routes);
        })
        .catch((error) => {})
    }, [])
  return (
    <section className='container'>
            <h2 className='mt-4'>Rutas turísticas</h2>
            <button
                className='btn btn-movebike contained'
                /* onClick={() => setAddMoto(true)} */
              >
                <i className='fa-solid fa-plus me-2' />
                Agregar ruta
              </button>
              <main className="container-fluid mt-3">
        <div className="row mx-auto">
         {posts
                  .map((post) => (
                    <Post
                      key={post._id}
                      title={post.title}
                      image={post.image}
                      description={post.description}
                      createdAt={post.createdAt}
                    />
                  ))
                  .reverse()}
                    </div>
      </main>
    </section>
                  )
}
