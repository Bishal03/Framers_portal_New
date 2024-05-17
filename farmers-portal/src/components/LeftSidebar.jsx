import {menu } from '../data';
import { Link } from 'react-router-dom';
const LeftSidebar = () => {
  return (
    <div className="mt-2">
      <div className="px-4 rounded-box">
        <div className="bg-[url('https://www.farmer.gov.in/imagedefault/containerbg.jpg')] text-black border-2 border-olive-green">
          <div className="border-2">
            {menu.map((item) => (
              <div className="" key={item.id}>
                <h1 className="menu heading_icon_agri_horti text-white bg-emerald-800">{item.title}</h1>
                <ul className="menu w-full flex flex-col">
                  {item.listItems.map((listItem) => (
                    <li className="" key={listItem.id}>
                      <Link to={listItem.url}>{listItem.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftSidebar