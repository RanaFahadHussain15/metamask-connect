import { useAccount } from "wagmi";
import { Account } from "../../components/Address";
import { Connect } from "../../components/Connect";
import { NetworkSwitcher } from "../../components/NetworkSwitcher";
import { SendToken } from "../../components/SendToken";

export default function Metamask() {
  const { isConnected } = useAccount();

  if (isConnected) {
    return (
      <>
      <SendToken />
        <Account />
        <NetworkSwitcher />
        <Connect />

      </>
    );
  }

  return (
    <div>
      <Connect />
    </div>
  );
}
