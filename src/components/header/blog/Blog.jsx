import CONFIG from "../../../config"

const Blog = () => {
  return (
    <div className="blog-dropdown row">
      <ul>
        {
            CONFIG.blogListConfig.map(({id, title}) => {
               return (
                <li key={id}>
                    {title}
                </li>
               ) 
            })
        }
      </ul>
    </div>
  )
}

export default Blog
