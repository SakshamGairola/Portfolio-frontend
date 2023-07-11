import React from "react";

import DiscordSvg from "../svgComponents/DiscordSvg";
import FacebookSvg from "../svgComponents/FacebookSvg";
// import InstagramSvg from "../svgComponents/InstagramSvg";
// import PatreonSvg from "../svgComponents/PatreonSvg";
import TwitterSvg from "../svgComponents/TwitterSvg";


function Footer() {
	const footerItems = [
		{ name: 'Discord community', href: 'https://discord.com/', svgIcon: <DiscordSvg /> },  //discord
		{ name: "Facebook", href: "#", svgIcon: <FacebookSvg /> },          //facebook
		// { name: 'Instagram', href: '#', svgIcon: <InstagramSvg /> },        //instagram
		// { name: 'Patreon', href: '#', svgIcon: <PatreonSvg /> },            //patreon
		{ name: 'Twitter', href: '#', svgIcon: <TwitterSvg /> },            //twitter
	];

	return (
		<>
			<footer className="bg-white dark:bg-gray-900">
				<div className="mx-auto w-full max-w-screen-xl p-4 py-4 lg:py-4">
					<div className="sm:flex sm:items-center sm:justify-between">
						<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
							© 2023{" "}
							<a
								href="https://flowbite.com/"
								className="hover:underline"
							>
								Flowbite™
							</a>
							. All Rights Reserved.
						</span>
						<div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
							{footerItems.map((item) => (
								<a
									key={item.name}
									href={item.href}
									className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                                    target="_blank"
								>
									{item.svgIcon}
									<span className="sr-only">{item.name}</span>
								</a>
							))}
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}

export default Footer;
