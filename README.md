# Binance Trading Test

## Steps

- Download and install [VSCode](https://code.visualstudio.com/)
- Download and install [NodeJS](https://nodejs.org/en) (Pick LTS)
- Download and install [home brew](https://github.com/Homebrew/brew/releases/download/4.1.22/Homebrew-4.1.22.pkg)
- Open Terminal on Mac, type following

```sh
brew install git
cd ~/Desktop
mkdir test
cd test
git clone https://github.com/sailor95/binance-trading-test.git
cd binance-trading-test
npm install
```

- Go to Binance and create a new API (don't close browser tab or the secret will be hidden)
- Go to <https://www.whatismyip.com.tw/tw/> and add your current IP to the whitelist on Binance API management dashboard
- Under `binance-trading-test` folder, create a file named `.env`
- Add the following code to `.env` and save file

```sh
API_KEY="<your api key here>"
API_SECRET="<your secret here>"
```

- In Terminal, under the path `~/Desktop/test/binance-trading-test`, type the following command

```sh
node index.js
```

- If success, Terminal will show, check order on Binance app

```text
New tick for BNB/USDT...
Created limit buy order for 1@100USDT
```

- If failed, check the error message, and check balance is sufficient in spot wallet
