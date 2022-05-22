import * as React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { container } from './layout.module.css'

interface ILayoutProps {
  pageTitle: string;
  children: any;
}

const Layout:React.FC<ILayoutProps> = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div className={container}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <header>{data.site.siteMetadata.title}</header>
      <nav>
        <ul>
          <li><Link to="/" activeStyle={{color: 'red'}}>Home</Link></li>
          <li><Link to="/about" activeStyle={{color: 'blue'}} state={{frome: 'showshow'}}>About</Link></li>
          <li><Link to="/blog" activeStyle={{color: 'red'}} partiallyActive={true}>Blog</Link></li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}
export default Layout