import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs';
export default function FooterCom() {
  return (
    <Footer container className='border-t-2 border-sprinklergreenyellow'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
            <Link
              to='/'
              className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'
            >
              <img
                src="/images/logo/logocodesprinklerhorizontal.svg" // Imagen logo
                alt="CodeSprinkler"
                className="mr-2 inline-block w-60"
              />
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
              <Footer.Title title='Enlaces' className='text-sprinklerblue'/>
              <Footer.LinkGroup col>
                <Footer.Link
                  className='footer-link'
                  href='/acerca'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Acerca
                </Footer.Link>
                <Footer.Link
                  className='footer-link'
                  href='/proyectos'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Proyectos
                </Footer.Link>
                <Footer.Link
                  className='footer-link'
                  href='/contacto'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Contacto
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Sígueme' className='text-sprinklerblue' />
              <Footer.LinkGroup col>
                <Footer.Link
                  className='footer-link'
                  href='https://www.github.com/AleDataAnalyst'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Github
                </Footer.Link>
                <Footer.Link className='footer-link' href='#'>LinkedIn</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Legal' className='text-sprinklerblue' />
              <Footer.LinkGroup col>
                <Footer.Link className='footer-link' href='#'>Política de Privacidad</Footer.Link>
                <Footer.Link className='footer-link' href='#'>Términos &amp; Condiciones</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between text-sprinklermint'>
          <Footer.Copyright
            href='#'
            by="codesprinkler"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon className='socialicon' href='#' icon={BsFacebook}  />
            <Footer.Icon className='socialicon' href='#' icon={BsInstagram} />
            <Footer.Icon className='socialicon' href='#' icon={BsTwitter} />
            <Footer.Icon className='socialicon' href='https://github.com/AleDataAnalyst' icon={BsGithub} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
