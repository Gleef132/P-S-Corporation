import Head from 'next/head'
import { FC } from 'react'
import { getMetaData } from './GetMetaData'

interface IMeta {
  pageName: string;
}

const Meta: FC<IMeta> = ({ pageName }) => {

  const { title, description, keywords, linkImage: image, linkImageType: type } = getMetaData(pageName)
  const linkImage = image ? image : `${process.env.NEXT_PUBLIC_SERVER_STATIC}/logo.svg`
  const linkImageType = type ? type : `image/svg`

  return (
    <Head>
      <title>{title}</title>
      <link rel='shortcut icon' type={linkImageType} href={linkImage} />
      <meta name='keywords' content={keywords} />
      {description
        ?
        <>
          <meta name='description' content={description} />
          <meta name='og:title' content={title} />
          <meta name='og:description' content={description} />
        </>
        :
        <meta name='robots' content='noindex, nofollow' />
      }
    </Head>
  )
}

export default Meta