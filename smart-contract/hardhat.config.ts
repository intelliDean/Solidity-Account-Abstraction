import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";
import { vars } from "hardhat/config";


const config: HardhatUserConfig = {
 solidity: "0.8.20",
 networks: {
    sepolia: {
      url: vars.get("SEPOLIA_URL"),
      accounts: [`0x${vars.get("PRIVATE_KEY")}`],
    },
 },
 etherscan: {
    apiKey: vars.get("ETHERSCAN_API_KEY")
 },
};

export default config;