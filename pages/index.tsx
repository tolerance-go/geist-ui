import { css } from '@emotion/css'
import { MenuData } from '@fenxing/scripts/typings'
import { menuData } from 'gen/menuData'

const renderMenu = (data: MenuData[], deep = 0) => {
   return (
      <ul>
         {data.map((item) => {
            if (deep === 0 && item.url === '/') {
               return null
            }
            return (
               <li key={item.key}>
                  {!item.meta.isGroup ? (
                     <a href={item.url} target={'_blank'} rel='noreferrer'>
                        {item.name}
                     </a>
                  ) : (
                     item.name
                  )}
                  {renderMenu(item.children, deep + 1)}
               </li>
            )
         })}
      </ul>
   )
}

export default function Layout() {
   return (
      <div
         className={css`
            display: flex;
            justify-content: center;
            align-items: center;
         `}
      >
         <div
            className={css`
               width: 50%;
            `}
         >
            <h1>ui-stories</h1>
            <h3>demos</h3>
            {renderMenu(menuData.filter(item => item.url !== '/en-us' && item.url !== '/zh-cn'))}
         </div>
      </div>
   )
}
