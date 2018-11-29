import { withRouter } from 'next/router'

const Page = withRouter((props) => (
  <div>
    <h1>{props.router.query.slug}</h1>
    <p>This is the blog post content.</p>
  </div>
));

export default Page
