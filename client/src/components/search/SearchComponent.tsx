import { FC, useEffect, useRef, useState } from 'react'
import cl from './SearchComponent.module.scss'
import SearchLogo from 'public/search.svg'
import ArrowBack from 'public/arrow-back.svg'
import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { notFoundSlice } from '@/store/reducers/NotFoundSlice'
import Loader from '../ui/loader/Loader'

const SearchComponent: FC = () => {

	const [value, setValue] = useState<string>('')
	const [copyValue, setCopyValue] = useState<string>('')
	const [searchLinkActiveIndex, setSearchLinkActiveIndex] = useState<number>(-1)
	const [isShowMobileSearch, setIsShowMobileSearch] = useState<boolean>(false)

	const { titles, isLoading, error } = useAppSelector(state => state.searchTitleSlice)

	const { push, query } = useRouter()
	const dispatch = useAppDispatch()
	const { searchNotFoundChange } = notFoundSlice.actions

	const ref = useRef<null | HTMLDivElement>(null)

	useEffect(() => {
		if (typeof query.search_query === 'string') {
			setValue(query.search_query as string || '')
		}
	}, [query])


	const searchKeyHandle = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.code === 'Enter' && value) {
			if (!foundTitles.length && value) {
				dispatch(searchNotFoundChange(true))
			} else {
				dispatch(searchNotFoundChange(false))
			}
			setCopyValue(value)
			hiddenSearchMobile()
			e.currentTarget.blur()
			push({
				pathname: '/search',
				query: { search_query: value }
			}, undefined, { shallow: true })
		}
		const lastIndex = (foundTitles.length - 1) > 10 ? 10 : foundTitles.length - 1
		if (e.code === 'ArrowUp') {
			e.preventDefault()
			if (searchLinkActiveIndex === -1) {
				setCopyValue(value)
				setValue(foundTitles[lastIndex])
				setSearchLinkActiveIndex(lastIndex)
				return
			}
			if (searchLinkActiveIndex === 0) {
				setValue(copyValue)
				setSearchLinkActiveIndex(-1)
				return
			}
			setValue(foundTitles[searchLinkActiveIndex - 1])
			setSearchLinkActiveIndex(searchLinkActiveIndex - 1)
		}
		if (e.code === 'ArrowDown') {
			if (searchLinkActiveIndex === -1) {
				setCopyValue(value)
				setValue(foundTitles[0])
				setSearchLinkActiveIndex(0)
				return
			}
			if (searchLinkActiveIndex === lastIndex) {
				setValue(copyValue)
				setSearchLinkActiveIndex(-1)
				return
			}
			setValue(foundTitles[searchLinkActiveIndex + 1])
			setSearchLinkActiveIndex(searchLinkActiveIndex + 1)
		}
	}

	const searchClickHandle = (e: React.MouseEvent<HTMLDivElement | HTMLLIElement>, isLink: boolean) => {
		let searchQuery = isLink ? e.currentTarget.textContent : value
		e.preventDefault()
		if (searchQuery) {
			if (!foundTitles.length && value) {
				dispatch(searchNotFoundChange(true))
			} else {
				dispatch(searchNotFoundChange(false))
			}
			hiddenSearchMobile()
			push({
				pathname: '/search',
				query: { search_query: searchQuery }
			}, undefined, { shallow: true })
		}
	}

	const showSearchMobile = () => {
		if (ref.current) {
			ref.current.classList.add(cl.active)
			document.body.style.overflow = "hidden";
		}
	}

	const hiddenSearchMobile = () => {
		if (ref.current) {
			ref.current.classList.remove(cl.active)
			document.body.style.overflow = "";
		}
	}

	useEffect(() => {
		if (window.innerWidth < 600) {
			setIsShowMobileSearch(true)
		}
		window.addEventListener('resize', () => {
			if (window.innerWidth < 600) {
				setIsShowMobileSearch(true)
			} else {
				setIsShowMobileSearch(false)
			}
		})
	}, [])

	const foundTitles = titles ? titles?.filter((title) => title.includes(copyValue.toLowerCase())) : []

	return (
		<div className={cl.search}>
			<div className={cl.search__body}>
				{!isShowMobileSearch ?
					<>
						<label className={!foundTitles?.length && value ? cl.search__content : `${cl.search__content} ${cl.active}`} htmlFor="headerSearch" >
							<div className={cl.search__content__icon}>
								<SearchLogo />
							</div>
							<input placeholder="Enter a query" type="text" className={cl.search__input}
								id='headerSearch'
								value={value}
								onKeyDown={searchKeyHandle}
								onChange={(e) => {
									setValue(e.target.value)
									setCopyValue(e.target.value)
								}}
								autoComplete='off'
								tabIndex={1}
							/>
							<div className={cl.search__list}>
								{isLoading || error ?
									<div className={cl.search__loader}>
										{error ?
											error :
											<Loader />
										}
									</div> :
									foundTitles?.map((title, index) => index <= 10 ?
										<li key={index} className={searchLinkActiveIndex === index ? `${cl.search__link} ${cl.active}` : cl.search__link} onClick={(e) => searchClickHandle(e, true)}>
											<div className={cl.search__link__icon}><SearchLogo /></div>
											<span>{title}</span>
										</li>
										: null
									)
								}
							</div>
						</label>
						<div className={cl.search__icon} onClick={(e) => searchClickHandle(e, false)} tabIndex={2} onKeyDown={searchKeyHandle}>
							<SearchLogo />
						</div>
					</> :
					<div className={cl.search__mobile__body} ref={ref}>
						<div className={cl.search__mobile__content}>
							<div className={cl.search__mobile__input}>
								<button className={cl.search__mobile__back__btn} onClick={hiddenSearchMobile}>
									<ArrowBack />
								</button>
								<input placeholder="Enter a query" type="text" className={cl.search__input}
									id='headerSearch'
									value={value}
									onKeyUp={searchKeyHandle}
									onChange={(e) => {
										setValue(e.target.value)
										setCopyValue(e.target.value)
									}}
									autoComplete='off'
								/>
								<div className={cl.search__mobile__input__icon} onClick={(e) => searchClickHandle(e, false)}>
									<SearchLogo />
								</div>
							</div>
							<ul className={cl.search__mobile__list}>
								{isLoading ?
									<div className={cl.search__loader}>
										{error ?
											error :
											<Loader />
										}
									</div> :
									foundTitles?.map((title, index) => index <= 25 ?
										<li key={index} className={cl.search__mobile__link} onClick={(e) => searchClickHandle(e, true)}>{title}</li>
										: null
									)
								}
							</ul>
						</div>
						<button className={cl.search__mobile__btn} onClick={showSearchMobile}>
							<SearchLogo />
						</button>
					</div>
				}
			</div>
		</div>
	)
}

export default SearchComponent