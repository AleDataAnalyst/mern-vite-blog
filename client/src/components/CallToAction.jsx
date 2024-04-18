import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-sprinklermint justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                ¿Quieres conectar con más desarrolladores?
            </h2>
            <p className='text-black1 my-2'>
                Mira estos consejos para hacer networking en el sector tecnológico.
            </p>
            <Button className='border-2 border-solid border-sprinklerpink text-sprinklerpink hover:bg-sprinklerpink hover:text-sprinklergreenyellow focus:outline-none focus:ring focus:ring-sprinklerpink focus:ring-opacity-75 rounded-tl-xl rounded-bl-none' >
                <a href="#" target='_blank' rel='noopener noreferrer'>
                    Networking para encontrar empleo
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://cdn.pixabay.com/photo/2023/12/28/19/34/pink-8474790_1280.jpg" />
        </div>
    </div>
  )
}