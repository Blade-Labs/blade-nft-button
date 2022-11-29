<p></p>
<p align="left">
  <a href="https://www.bladewallet.io/" target="_blank">
    <img width="77px" src="./src/img/blade-logo.svg"/>
  </a>
</p>

# blade-nft-purchase
Library for adding NFT purchase button using BladeWallet and Moonpay in Hedera network.


## Getting started

1. Find the file "index[hash].js" in "Docs" folder, download it.

2. Fit into your project by init script or add "script" tag to your markup with the path to your file. Example 👇.
```html
  <script src="./scripts/index[hash].js"></script>
```

3. Create a tag in your markup that contains attributes with parameters. Example 👇
```html
  <div
    class="blade-nft-purchase"
    data-use-testnet="false"
    data-dapp-code="1234"
    data-dapp-nonce="1234"
    data-token-id="0.0.151515"
    data-serial="1"
    data-price="10.55"
    data-currency="usd">
  </div>
```

| Tag                | Value                           |
|:-------------------|:--------------------------------|
| `class`            | "blade-nft-purchase" (required) |
| `data-use-testnet` | boolean (required)              |
| `data-dapp-code`   | string (required)               |
| `data-dapp-nonce`  | string (optional)               |
| `data-token-id`    | string (required)               |
| `data-serial`      | number (optional)               |
| `data-price`       | number (required)               |
| `data-currency`    | string (optional)               |

To get your personal dApp code, contact us: <support@bladewallet.io> / [contact page][4].

## Demo / local testing

Check out our [Demo][2] or start local version:
download / clone project, and
``` bash
npm install
npm run dev
```

## Links
* [Blade wallet][3]
* [Contact us][4]
* [Demo NFT Purchase][1]

[1]: <https://blade-labs.github.io/blade-nft-purchase>
[2]: <https://github.com/Blade-Labs/blade-nft-purchase>
[3]: <https://www.bladewallet.io/>
[4]: <https://www.bladewallet.io/contact/>
