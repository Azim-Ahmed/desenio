import { Outlet } from "react-router-dom";
import AboutSidebar from "../../components/Profile/About/AboutSidebar";

export default function About() {
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
