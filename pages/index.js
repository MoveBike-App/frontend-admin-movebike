import LoginCard from '../components/LoginCard'
import Image from 'next/image'

export default function Login () {
  return (
    <main className='container-fluid login-section login-section__card-bg' id='login'>
      <section className='container'>
        <div className='row align-items-center'>
          <div className='col 12 col-lg-6'>
            <div className="text-center">
          <Image
          className='mt-5 mb-5 login-section__logo'
          src='/assets/logos/logo-movebike-black.webp'
          alt='Logo main'
          width={160}
          height={45}
        />
        </div>
            <div className='container-fluid'>
              <LoginCard />
            </div>
          </div>
          <div className='col-12 col-lg-6 login-section__bg d-none d-lg-block' />
        </div>
      </section>
    </main>
  )
}
