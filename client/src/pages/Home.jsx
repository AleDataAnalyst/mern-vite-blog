import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className='min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3 text-left'>
        <h1 className='text-sprinklerblue text-5xl font-bold lg:text-7xl mb-5'>codesprinkler</h1>
        <h2 className='text-xl font-bold lg:text-4xl mb-5'>Un portafolio en constante crecimiento de proyectos y código</h2>
        <p>
          Encontrarás artículos sobre mi experiencia de reskilling de diseñadora a programadora, realizando proyectos en bootcamps de Análisis de Datos y Desarrollo Web Fullstack con Tecnologías Inmersivas y aprendiendo lenguajes de programación como Javascript y Python.
        </p>
        <Link
          to='/search'
          className='link'
        >
          Ver todos los artículos
        </Link>
      </div>
      <div className='p-3 dark:bg-sprinklermint bg-gray-100'>
        <CallToAction />
      </div>

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Publicaciones Recientes</h2>
            <div className='flex flex-wrap gap-4'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-sprinklergreenyellow hover:underline text-center'
            >
              Ver todos los artículos
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
