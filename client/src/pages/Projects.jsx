import CallToAction from '../components/CallToAction';

export default function Projects() {
  return (
    <div className='min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3 text-left'>
        <h1 className='text-sprinklerblue text-5xl font-bold lg:text-7xl mb-5'>Proyectos</h1>
        <h2 className='text-xl font-bold lg:text-4xl mb-5'>Busco mantenerme en constante actualización para aplicar los conocimientos adquiridos</h2>
        <p className='text-md text-black1 text-left'>Comparto algunos proyectos y aprendizajes de fullstack, frontend, backend, HTML, CSS, JavaScript, TypeScript, React, Three.js, MongoDB, MySQL, Python y más!</p>
      <CallToAction />
    </div>
  )
}