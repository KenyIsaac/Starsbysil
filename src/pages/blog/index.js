import React from 'react';
import Layout from '../../components/Layout';
import BlogRoll from '../../components/BlogRoll';
import Hero from '../../components/Hero';
import blog from '../../../static/img/blog-writing.jpg';

const BlogIndexPage = () => (
  <Layout title={'Starsbysil | Blog'}>
    <Hero title={'Blog'} background={blog} isHalfHero />
    <section className='page-container'>
      <BlogRoll />
    </section>
  </Layout>
);

export default BlogIndexPage;