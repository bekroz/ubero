import Image from 'next/image';
import style from './style';
import avatar from '../../constants/images/avatar.png';
import { BsPerson } from 'react-icons/bs';

const currentWalletOwner = '0xD3912981mc3uyi213nd894XD';

function Navbar() {
	return (
		<div className={style.wrapper}>
			<div className={style.leftMenu}>
				<div className={style.logo}>Ubero</div>
				<div className={style.menuItem}>Ride</div>
				<div className={style.menuItem}>Drive</div>
				<div className={style.menuItem}>More</div>
			</div>
			<div className={style.rightMenu}>
				<div className={style.menuItem}>Help</div>
				<div className={style.menuItem}>BEK</div>
				<div className={style.userImageContainer}></div>
				<Image
					className={style.userImage}
					src={avatar}
					width={40}
					height={40}
					alt='your avatar pic'
				/>
			</div>
			{currentWalletOwner ? (
				<div>
					{currentWalletOwner.slice(0, 6)}...{currentWalletOwner.slice(39)}
				</div>
			) : (
				<div style={style.loginBtn}>
					<BsPerson />
					<span className={style.loginText}>Log In</span>
				</div>
			)}
		</div>
	);
}

export default Navbar;
