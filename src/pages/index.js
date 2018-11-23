import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import './index.css'

const IndexPage = () => (
    <Layout>
        <div className='aboutMe'>
            <h3>About Me</h3>
            <Link to="/cv/">CV</Link>
            <Link to="/open-source/">Open Source</Link>
        </div>
        <div className='coolCode'>
            <h3>Cool Code</h3>
            <Link to="/shake/">Shake Animation</Link>
        </div>
    </Layout>
)

export default IndexPage
