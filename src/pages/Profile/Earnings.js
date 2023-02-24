import { Outlet } from "react-router-dom";
import SideNav from "../../components/core/SideNav/SideNav";

const items = [
    {title: "Wallet Address", link: "wallet-address"},
    {title: "Total Balance", link: "balance"},
    {title: "Earning History", link: "earning_history"},
]
export default function Earnings() {
  return (
    <div class="grid grid-cols-7 gap-6 py-4">
      {/* sidebar start */}
      <SideNav title="Earnings" item={items} />
      {/* sidebar end */}

      {/* main content start  */}
      <Outlet />
      {/* main content end  */}
    </div>
  )
}
