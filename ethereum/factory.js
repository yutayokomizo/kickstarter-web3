import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x6055ce78d03721b1f36C69a155066A9AD7ecFb6d"
);

export default instance;
