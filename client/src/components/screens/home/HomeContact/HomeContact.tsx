import { FC } from 'react'
import cl from './HomeContact.module.scss'
import GithubSvg from 'public/github.svg'
import LocationSvg from 'public/location.svg'
import EmailSvg from 'public/email.svg'
import TelephoneSvg from 'public/telephone.svg'

const HomeContact: FC = () => {

	return (
		<div className={cl.contact} id='contact'>
			<div className={`${cl.contact__container} _container`}>
				<div className={cl.contact__content}>
					<form className={cl.contact__form}>
						<div className={cl.contact__form__items}>
							<div className={cl.contact__form__item} >
								<div className={cl.contact__form__item__title}>Name</div>
								<input type="text" className={cl.contact__form__item__input} />
							</div>
							<div className={cl.contact__form__item} >
								<div className={cl.contact__form__item__title}>Email</div>
								<input type="text" className={cl.contact__form__item__input} />
							</div>
						</div>
						<div className={cl.contact__form__item} >
							<div className={cl.contact__form__item__title}>Address</div>
							<input type="text" className={cl.contact__form__item__input} />
						</div>
						<div className={cl.contact__form__item} >
							<div className={cl.contact__form__item__title}>Message</div>
							<textarea className={cl.contact__form__item__textarea} />
						</div>
						<button onClick={(e) => e.preventDefault()} type="submit" className={cl.contact__btn}>Submit</button>
					</form>
					<div className={cl.contact__items}>
						<div className={cl.contact__item}>
							<div className={cl.contact__item__svg}>
								<LocationSvg />
							</div>
							<h2 className={cl.contact__item__title}>
								Address
							</h2>
							<p className={cl.contact__item__text}>SoHo 94 Broadway St
								New York,NY 1001</p>
						</div>
						<div className={cl.contact__item}>
							<div className={cl.contact__item__svg}>
								<TelephoneSvg />
							</div>
							<h2 className={cl.contact__item__title}>
								Number
							</h2>
							<p className={cl.contact__item__text}>+996(706)24-24-23
								<br />
								+7-92-211-105-00</p>
						</div>
						<div className={cl.contact__item}>
							<div className={cl.contact__item__svg}>
								<GithubSvg />
							</div>
							<h2 className={cl.contact__item__title}>
								Out Github
							</h2>
							<a target={'_blank'} href='https://github.com/Gleef132' className={cl.contact__item__link}>
								https://github.com/Gleef132
							</a>
						</div>
						<div className={cl.contact__item}>
							<div className={cl.contact__item__svg}>
								<EmailSvg />
							</div>
							<h2 className={cl.contact__item__title}>
								Email
							</h2>
							<div className={cl.contact__item__link}>
								P&S_Corporation@mail.com
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HomeContact