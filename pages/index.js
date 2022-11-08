import LoginCard from '../components/LoginCard'
import Image from 'next/image'

export default function Login () {
  return (
    <section className='container-fluid login-section' id='login'>
      <section className='container mx-auto'>
        <div className='row align-items-center'>
          <div className='col-6'>
            <div className="text-center">
          <Image
          className='mt-5 mb-5'
          src='/assets/logos/logo-movebike-black.webp'
          alt='Logo footer'
          layout='filla'
          width={160}
          height={45}
        />
        </div>
            <div className='container-fluid'>
              <LoginCard />
            </div>
          </div>
          <div className='col-6 login-section__bg' />
        </div>
      </section>
    </section>
  )
}
