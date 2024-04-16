import React from 'react';
import CodeWords from '../components/canvas/CodeWords';

export default function About() {
  return (
    <div className='min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3'>
      <h1 className='text-sprinklerblue text-5xl font-bold lg:text-7xl mb-5'>Acerca de codesprinkler</h1>
      <h2 className='text-xl font-bold lg:text-4xl mb-5'>Busco mantenerme en constante actualización para aplicar los conocimientos adquiridos</h2>
      <div className='text-md text-darkgray flex flex-col gap-6 text-left'>
        <p>
          Te doy la bienvenida a este espacio donde comparto mi experiencia de crecimiento personal y profesional aprendiendo a programar.
        </p>

        <p>
          Encontrarás artículos y tutoriales relacionados con desarrollo web, el sector tecnológico, transformación digital, lenguajes de programación, nuevas tecnologías, diseño, networking y más. ¡No olvides suscribirte para tener contenido fresco!
        </p>

        <p>
          Te invito a participar en mis publicaciones, dejando tus comentarios e interactuando con más visitantes. Una comunidad puede colaborar entre sí para alcanzar mejoras de desarrollo conjunto.
        </p>

        <CodeWords />
      </div>
    </div>
  );
}
