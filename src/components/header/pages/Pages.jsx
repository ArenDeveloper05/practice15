import { useNavigate } from "react-router-dom"
import { CONFIG } from "../../../config"

const Pages = () => {
  const navigate = useNavigate();
  return (
    <div className="pages-dropdown row">
      <ul>
        {
            CONFIG.pagesListConfig.map(({id, title}) => {
               return (
                <li key={id} onClick={() => {
                  if(id === 1) navigate('/about')
                }}>
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
