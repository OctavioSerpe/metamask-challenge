import { InjectedConnector } from "@web3-react/injected-connector";

export const injectedConnector = new InjectedConnector({
    // @link = https://docs.metamask.io/guide/ethereum-provider.html#chain-ids
    supportedChainIds: [4],
});