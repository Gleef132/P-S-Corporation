// import Layout from '@/components/layout/Layout';
import Popup from '@/components/ui/popup/Popup';
import dynamic from 'next/dynamic'
import { setupStore } from '@/store/store'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { StrictMode } from 'react';
import NextNProgress from 'nextjs-progressbar';

const store = setupStore();

const DynamicLayout = dynamic(() => import('@/components/layout/Layout'), {
	ssr: false
})


export default function App({ Component, pageProps }: AppProps) {
	return (
		<StrictMode>
			<Provider store={store}>
				<NextNProgress color='#14CAD5' />
				<DynamicLayout>
					<Component {...pageProps} />
				</DynamicLayout>
				<Popup />
			</Provider>
		</StrictMode>
	)
}
