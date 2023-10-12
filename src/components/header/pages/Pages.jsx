import { CONFIG } from "../../../config"

const Pages = () => {
  return (
    <div className="pages-dropdown row">
      <ul>
        {
            CONFIG.pagesListConfig.map(({id, title}) => {
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

export default Pages
