<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/CommanderAstern/APA-HackVerse/">
    <img src="https://cryptologos.cc/logos/polygon-matic-logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Loyalty Program</h3>

  <p align="center">
    A hackathon project made for Hackverse 3.0
    <br />
    <a href="https://github.com/CommanderAstern/APA-HackVerse/issues">Report Bug</a>
    ·
    <a href="https://github.com/CommanderAstern/APA-HackVerse/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Tech Stack</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Create a DApp that helps businesses deploy a marketplace specifically for loyalty rewards. When a customer buys a product from a shop, they are rewarded with a certain amount of loyalty points which they can redeem in the loyalty shop to purchase specific things from the loyalty shop. 

We will make this like an API of sorts where it is effortless to integrate it to their existing website/platform.

We will also be making a website for demonstration purposes. Loyalty points can also be implemented as an ERC-20 token.

The loyalty rewards being on the blockchain can reduce the chances of customers exploiting the system, such as finding an infinite money glitch.
As the transactions are easily visible on the blockchain, we can also add bug bounties which will further enforce security.

Contract is deployed on the Mumbai Testnet also [0xE851C8E489eb0ee57A1ba1A219f50Fdee6fed5be](https://mumbai.polygonscan.com/address/0xE851C8E489eb0ee57A1ba1A219f50Fdee6fed5be)

<p align="right">(<a href="#top">back to top</a>)</p>


### TechStack

🎨 __Front-end:__
MetaMask, Ethers.js, Next.js (React), HTML5, Tailwind CSS.

👷‍♂️ __Smart Contracts:__
Hardhat, Ethers.js, TypeChain, OpenZeppelin, Mocha, Chai, Waffle.
<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* [Node.js](https://nodejs.org/)
* [MetaMask](https://metamask.io/)
* Yarn
  ```
  npm install --global yarn
  ```
### Libraries and Dependencies
So first of all we use yarn for all the version dependencies 
```
yarn install
```
The version of node required
```
>= 16.0.0 && <= 17.0.0
```

List of all dependencies
```
ethers
ethereum
react
web3
typescript
hardhat
mocha
ethereum-waffle
chai
solc
axios
next
doenv
ipfs-http-client
```

### Installation

`For Windows: you MUST start the project by running Git Bash.`

After cloning the repository, 



Execute the following command in the root directory of 
the project:
```
yarn dev
```
Open another terminal, and execute the following command in the root directory of the project:
```
yarn deploy
```

Use the local host url to run the website on a chrome based browser.

Using the metamask extension, import any of the dummy accounts through the private key and then connect to the local host.

After the website is loaded, go to the homepage and add the loyalty points token to your wallet.

`You are now ready to freely purchase and redeem items from the business using your metamask wallet!`



<!-- ROADMAP -->
## Roadmap

- [ ] Use IPFS, for making system more decentralised and efficient
- [ ] Improve Asthetics
- [ ] Make an API of our website so could be businesses easily
- [ ] Adding more schemes and different loyalty programs to fit need of every business.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Best-README-Template](https://github.com/othneildrew/Best-README-Template)


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/CommanderAstern/APA-HackVerse.svg?style=for-the-badge
[contributors-url]: https://github.com/CommanderAstern/APA-HackVerse/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/CommanderAstern/APA-HackVerse.svg?style=for-the-badge
[forks-url]: https://github.com/CommanderAstern/APA-HackVerse/network/members
[stars-shield]: https://img.shields.io/github/stars/CommanderAstern/APA-HackVerse.svg?style=for-the-badge
[stars-url]: https://github.com/CommanderAstern/APA-HackVerse/stargazers
[issues-shield]: https://img.shields.io/github/issues/CommanderAstern/APA-HackVerse.svg?style=for-the-badge
[issues-url]: https://github.com/CommanderAstern/APA-HackVerse/issues
[product-screenshot]: screenshot.png
