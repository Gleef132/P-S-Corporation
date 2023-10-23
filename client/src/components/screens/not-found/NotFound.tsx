import { FC } from 'react'
import cl from './NotFound.module.scss'
import NotFound from '@/components/ui/not-found/NotFound'

const NotFoundPage: FC = () => {
  return (
    <div className={cl.page}>
      <NotFound text='Page not found!' />
    </div>
  )
}

export default NotFoundPage