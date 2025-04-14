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

  async function addToken() {
    console.log("Hi");
      try {
        // wasAdded is a boolean. Like any RPC method, an error may be thrown.
        const wasAdded = await ethereum.request({
          method: 'wallet_watchAsset',
          params: {
            type: 'ERC20', // Initially only supports ERC20, but eventually more!
            options: {
              address: address, // The address that the token is at.
              symbol: 'LYT', // A ticker symbol or shorthand, up to 5 chars.
              decimals: 18, // The number of decimals in the token
            },
          },
        });

        if (wasAdded) {
          console.log('Thanks for your interest!');
        } else {
          console.log('Your loss!');
        }
      } catch (error) {
        console.log(error);
      }
  }
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <body>
        <img
          className="mx-auto w-full"
          src="https://premium-storefronts.s3.amazonaws.com/storefronts/my-store-b83c5e/assets/bg_home_banner.jpeg"
          alt="cryptocurrency"
        />

        <button
          className="w-full bg-pink-500 text-white text-2xl font-bold py-2 px-12 rounded h-24"
          onClick={() => addToken()}
        >
          Add Token
        </button>
      </body>
    </>
  );
};

export default Home;
