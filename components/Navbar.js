import React, { useState } from 'react';
import { Button } from './Button'
import styles from './Navbar.module.css'
import { NavBarData } from './NavBarData'
import { SideBarData } from './SideBarData'
import Link from 'next/link'
import { FaBars } from 'react-icons/fa'
import { useWindowSize } from '../utils/CustomHooks'

function Navbar() {

	const [sideBar, setSideBar] = useState(false);
	const showSideBar = () => setSideBar(!sideBar);
	const [button] = useState(true);
	{/*Custom hook responsible for detecting small screen like mobiles*/ }
	const size = useWindowSize();

	return (
		<>
			<div className={styles['navbar']}>
				<div className={styles['title-container']}>
					{/*Left section of the navbar, responsible for the logo or company name*/}
					<Link href={'/'} onClick={() => { setSideBar(false) }} passHref >
						{/*Changes depending on the width of the screen*/}
						{size.width > 600 ? <span className={styles['app-title']}>Nord Szczecin - Kuchnie na wymiar</span> : <span className={styles['app-title']}>Nord</span>}
					</Link>
				</div>
				{size.width > 600 ?

					<div className={styles['navBar-menu']}>
						<ul className={styles['navBar-menu-items']}>
							{NavBarData.map((item, index) => {
								return (
									<li key={index} className={styles['nav-text-top']}>
										<Link href={item.path} onClick={() => { setSideBar(false) }} passHref >
											<span className={[styles['navBar-menu-item-title'], ['p--display']].join(" ")}>{item.title}</span>
										</Link>
									</li>
								)
							})}
						</ul>

					</div>
					:
					<div className={styles['menu-icon']}>
						<FaBars onClick={() => { setSideBar(!sideBar) }} />
					</div>
				}
			</div>
			{/*Display side bar only if opened and only if on mobile*/}
			{<div className={sideBar ? [styles['sideBar-menu'], styles['sideBar-active']].join(" ") : [styles['sideBar-menu'], styles['sideBar-hidden']].join(" ")}>
				<ul className={styles['sideBar-menu-items']}>
					{SideBarData.map((item, index) => {
						return (
							<li key={index} className={styles['sideBar-menu-item']}>
								<Link href={item.path} onClick={() => { setSideBar(false) }} passHref >
									<span className={[styles['sideBar-menu-item-text'], ['p--display']].join(" ")}>{item.title}</span>
								</Link>
							</li>
						)
					})}
				</ul>
			</div>}
		</>
	)
}

function NavbarSinglePage() {

	const [sideBar, setSideBar] = useState(false);
	const showSideBar = () => setSideBar(!sideBar);
	const [button] = useState(true);
	{/*Custom hook responsible for detecting small screen like mobiles*/ }
	const size = useWindowSize();

	return (
		<>
			<div className={styles['navbar']}>
				<div className={styles['title-container']}>
					{/*Left section of the navbar, responsible for the logo or company name*/}
					<Link href={'/'} onClick={() => { setSideBar(false) }} passHref >
						{/*Changes depending on the width of the screen*/}
						{size.width > 600 ? <span className={styles['app-title']}>Nord Szczecin - Kuchnie na wymiar</span> : <span className={styles['app-title']}>Nord</span>}
					</Link>
				</div>
				{size.width > 600 ?

					<div className={styles['navBar-menu']}>
						<ul className={styles['navBar-menu-items']}>
							{NavBarData.map((item, index) => {
								return (
									<li key={index} className={styles['nav-text-top']}>
										<a href={`#${item.path}`} onClick={(e) => {
											e.preventDefault();
											document.querySelector(`#${item.path}`).scrollIntoView({
												behavior: "smooth"
											});
										}} >
											<span className={[styles['navBar-menu-item-title'], ['p--display']].join(" ")}>{item.title}</span>
										</a>
									</li>
								)
							})}
						</ul>

					</div>
					:
					<div className={styles['menu-icon']}>
						<FaBars onClick={() => { setSideBar(!sideBar) }} />
					</div>
				}
			</div>
			{/*Display side bar only if opened and only if on mobile*/}
			{<div className={sideBar ? [styles['sideBar-menu'], styles['sideBar-active']].join(" ") : [styles['sideBar-menu'], styles['sideBar-hidden']].join(" ")}>
				<ul className={styles['sideBar-menu-items']}>
					{SideBarData.map((item, index) => {
						return (
							<li key={index} className={styles['sideBar-menu-item']}>
								<Link href={'#'+item.path} onClick={() => {setSideBar(!sideBar)}} passHref >
									<span onClick={() => {setSideBar(!sideBar)}} className={[styles['sideBar-menu-item-text'], ['p--display']].join(" ")} >{item.title}</span>
								</Link>
							</li>
						)
					})}
				</ul>
			</div>}
		</>
	)
}


export { Navbar, NavbarSinglePage }