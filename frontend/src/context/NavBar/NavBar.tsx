import { useRouter } from "next/router";
import Link from "next/link";

import { ToastContainer } from "react-toastify";
import { MetaMask } from "./MetaMask";
import { DarkModeToggle } from "src/helpers/DarkModeToggle";

export const NavBar = () => {
	const { asPath: path } = useRouter();

	return (
		<>
			{/* <ToastContainer /> */}
			<header
				className="flex justify-around items-center py-3
				border-b-2 border-gray-100 dark:border-gray-700 bg-gradient-to-r from-cyan-200 via-stone-300 to-orange-400" id="myDIV"
			>
				<nav>
					<ul className="flex justify-around text-center">
						<li className={path === "/" ? "active-nav" : "nav-item"}>
							<Link href="/">Home</Link>
						</li>
						<li className={path === "/marketplace" ? "active-nav" : "nav-item"}>
							<Link href="/marketplace">Marketplace</Link>
						</li>
						<li className={path === "/redeem" ? "active-nav" : "nav-item"}>
							<Link href="/redeem">Redeem</Link>
						</li>
					</ul>
				</nav>
				<div className="flex items-center">
					{/* <MetaMask /> */}
					<div className="ml-5">
						<DarkModeToggle />
					</div>
				</div>
			</header>
		</>
	);
};
