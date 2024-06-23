import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const BlogPostPage = ({ id }: { id: number }) => {
  return (
    <>
      <Metadata title="BlogPost" description="BlogPost page" />

      <h1>BlogPostPage - {id}</h1>
      <p>
        Find me in <code>./web/src/pages/BlogPostPage/BlogPostPage.tsx</code>
      </p>
      <p>
        My default route is named <code>blogPost</code>, link to me with `
        <Link to={routes.blogPost({ id })}>BlogPost</Link>`
      </p>
    </>
  )
}

export default BlogPostPage
