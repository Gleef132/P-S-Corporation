import { FC, PropsWithChildren, useEffect } from 'react';
import Footer from './footer/Footer';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { searchTitleSlice } from '@/store/reducers/SearchTitleSlice';
import { trainingApi } from '@/services/TrainingService';
import Alert from '../alert/Alert';
import Header from './header/Header';

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const { message: alertKey } = useAppSelector((state) => state.alertReducer);
	const { saveSearchTitles, changeIsLoading, changeError } = searchTitleSlice.actions;
	const { data, isLoading, isError } = trainingApi.useGetAllTitlesQuery('')
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(changeIsLoading(isLoading));
		if (isError) {
			dispatch(changeError('An error occurred while loading data'))
		}
		if (!data) return;
		dispatch(saveSearchTitles({ titles: data?.titles, isLoading: isLoading }));
	}, [data, isLoading, isError]);

	return (
		<>
			<Alert key={alertKey} />
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
