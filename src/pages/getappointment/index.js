import React from 'react';
import Layout from '../../components/Layout';
import Hero from '../../components/Hero';
import contact from '../../../static/img/contact.jpg';
import { Form } from '../../components/Form';
import ContactInfo from '../../components/ContactInfo';
import { BackgroundTitle } from '../../components/BackgroundTitle';


const GetAppointment = () => (
  <Layout title={'Starsbysil | Citas'} description={'Meltem Ulutaş ile iletişime geçin. Psikolog randevusu oluşturun. Psikolojik destek almak için iletişime geçin.'}>
    <Hero title={'Citas'} background={contact} isHalfHero />
    <div className='page-container'>
      <BackgroundTitle title={'Citas'} />
      <h1 className='highlighted'>Aparte su cita</h1>
      <section className='contact flex mobile-column-direction'>
        <div className='contact-info'>
          <ContactInfo />
        </div>
        <Form/>
      </section>
    </div>
  </Layout>
);
export default GetAppointment;