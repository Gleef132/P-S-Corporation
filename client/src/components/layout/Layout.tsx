import { FC, PropsWithChildren, useEffect } from 'react';
import Footer from './footer/Footer';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { searchTitleSlice } from '@/store/reducers/SearchTitleSlice';
import { trainingApi } from '@/services/TrainingService';
import Alert from '../ui/alert/Alert';
import Header from './header/Header';

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const { message: alertKey } = useAppSelector((state) => state.alertReducer);
	const { saveSearchTitles } = searchTitleSlice.actions;
	const { data } = trainingApi.useGetAllTitlesQuery('');
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (!data) return;
		dispatch(saveSearchTitles(data!));
	}, [data]);

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
