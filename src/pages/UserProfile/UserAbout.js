import { Outlet } from "react-router-dom";
import AboutSidebar from "../../components/UserProfile/About/AboutSidebar";

export default function UserAbout() {
  return (
    <div class="grid grid-cols-7 gap-6 py-4">
      {/* sidebar start */}
      <AboutSidebar />
      {/* sidebar end */}

      {/* main content start  */}
      <Outlet />
      {/* main content end  */}
    </div>
  );
}
