import type { NextPage } from "next";
import Head from "next/head";

import { ethers } from "ethers";
import { useEffect, useState } from "react";
import axios from "axios";
import Web3Modal from "web3modal";

import { address } from "../../hardhat/config";

import test from "../../hardhat/artifacts/contracts/main.sol/LTYToken.json";

let rpcEndpoint = null;
if (process.env.NEXT_PUBLIC_WORKSPACE_URL) {
  rpcEndpoint = process.env.NEXT_PUBLIC_WORKSPACE_URL;
}
const Home: NextPage = () => {
	useEffect(() => {}, []);
	  async function buyItem(price1) {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    const price = ethers.utils.parseUnits(price1.toString(), "ether");
    const tokenContract = new ethers.Contract(address, test.abi, signer);
    const transaction = await tokenContract.buying({
      value: price,
    });

    await transaction.wait();
    console.log(signer._address);
  }
	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<script src="https://cdn.tailwindcss.com"></script>
				<link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"></link>
			</Head>
			<body>

				<div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
					<div className="rounded overflow-hidden shadow-lg">
						<img className="w-full" src="https://m.media-amazon.com/images/I/81XSik9qsFL._SL1500_.jpg" alt="sideTable" />
						<div className="px-6 py-4">
							<div className="font-bold italic text-xl mb-2">Home Decor Wooden Stool Set</div>
							<p className="text-gray-700 italic text-base text-xl">
								This Versatile Stool can also be used outdoors in a Garden or a Balcony or cafeterias and lounges.
							</p>
						</div>
						<div className="px-6 pt-2 pb-2">
							<span className="italic inline-block px-3 py-1 font-semibold text-gray-700 mb-1 text-xl">Ξ 700</span>
							<button className="inline-block bg-gray-200 rounded-full px-5 py-1 italic font-semibold text-gray-700 mr-2 mb-2 text-2xl" onClick={() => buyItem(700)}>Buy</button>
						</div>
					</div>

					<div className="rounded overflow-hidden shadow-lg">
						<img className="w-full" src="https://m.media-amazon.com/images/I/51eoKWxpEQL._SL1302_.jpg" alt="whiteTable" />
						<div className="px-6 py-4 pt-16">
							<div className="font-bold italic text-xl mb-2">Antique Wooden Side Table</div>
							<p className="text-gray-700 italic text-base text-xl">
								This multipurpose table can be used for any showpiece on it, plant stand and more.
							</p>
						</div>
						<div className="px-6 pt-2.5 pb-2">
							<span className="italic inline-block px-3 py-1 font-semibold text-gray-700 mb-1 text-xl">Ξ 500</span>
							<button className="inline-block bg-gray-200 rounded-full px-5 py-1 italic font-semibold text-gray-700 mr-2 mb-2 text-2xl" onClick={() => buyItem(500)}>Buy</button>
						</div>
					</div>

					<div className="rounded overflow-hidden shadow-lg">
						<img className="w-full" src="https://m.media-amazon.com/images/I/61FnRCxpp+L._SL1200_.jpg" alt="polishStool" />
						<div className="px-6 py-3 pt-4">
							<div className="font-bold italic text-xl mb-2">Brown Solid Wood Stool</div>
							<p className="text-gray-700 italic text-base text-xl">
								The fiber grains are packed tightly such that the surface has a very high level of polish and is also friendly to waxing.
							</p>
						</div>
						<div className="px-6 pt-1 pb-2">
							<span className="italic inline-block px-3 py-1 font-semibold text-gray-700 mb-1 text-xl">Ξ 1400</span>
							<button className="inline-block bg-gray-200 rounded-full px-5 py-1 italic font-semibold text-gray-700 mr-2 mb-2 text-2xl" onClick={() => buyItem(1400)}>Buy</button>
						</div>
					</div>
				</div>


				<div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
					<div className="rounded overflow-hidden shadow-lg">
						<img className="w-full" src="https://m.media-amazon.com/images/I/710lt9GF1UL._SL1500_.jpg" alt="keyHanger" />
						<div className="px-6 py-4">
							<div className="font-bold italic text-xl mb-2">Home Key Hanger</div>
							<p className="text-gray-700 italic text-base text-xl">
								Perfect for hanging keys and other small objects, with a lovely desgin and finish.
							</p>
						</div>
						<div className="px-6 pt-2 pb-2">
							<span className="italic inline-block px-3 py-1 font-semibold text-gray-700 mb-1 text-xl">Ξ 300</span>
							<button className="inline-block bg-gray-200 rounded-full px-5 py-1 italic font-semibold text-gray-700 mr-2 mb-2 text-2xl" onClick={() => buyItem(300)}>Buy</button>
						</div>
					</div>

					<div className="rounded overflow-hidden shadow-lg">
						<img className="w-full" src="https://m.media-amazon.com/images/I/61R4ABc6VYL._SL1100_.jpg" alt="yellowBags" />
						<div className="px-6 py-4">
							<div className="font-bold italic text-xl mb-2">Yellow Bean Bag Pair</div>
							<p className="text-gray-700 italic text-base text-xl">
								This bean bag pair is made of a soft and durable material, a perfect addition to your room.
							</p>
						</div>
						<div className="px-6 pt-2 pb-2">
							<span className="italic inline-block px-3 py-1 font-semibold text-gray-700 mb-1 text-xl">Ξ 2000</span>
							<button className="inline-block bg-gray-200 rounded-full px-5 py-1 italic font-semibold text-gray-700 mr-2 mb-2 text-2xl" onClick={() => buyItem(2000)}>Buy</button>
						</div>
					</div>

					<div className="rounded overflow-hidden shadow-lg">
						<img className="w-full" src="https://m.media-amazon.com/images/I/61tL+ARsFdL._SL1000_.jpg" alt="foldChair" />
						<div className="px-6 py-4">
							<div className="font-bold italic text-xl mb-2">Foldable Wooden Chair</div>
							<p className="text-gray-700 italic text-base text-xl">
								Made of durable wood, this chair is foldable and can be used for sitting or standing.
							</p>
						</div>
						<div className="px-6 pt-1.5 pb-2">
							<span className="italic inline-block px-3 py-1 font-semibold text-gray-700 mb-1 text-xl">Ξ 800</span>
							<button className="inline-block bg-gray-200 rounded-full px-5 py-1 italic font-semibold text-gray-700 mr-2 mb-2 text-2xl" onClick={() => buyItem(800)}>Buy</button>
						</div>
					</div>
				</div>
			</body>
		</>
	);
};

export default Home;
