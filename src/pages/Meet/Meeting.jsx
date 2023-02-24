import { JitsiMeeting } from "@jitsi/react-sdk";
import { useGetProfileQuery } from "features/profile/profileApi";
import { useRef } from "react";
import { useParams } from "react-router-dom";

export default function Meeting() {
  const { id } = useParams();
  const { data, isFetching } = useGetProfileQuery();
  const frameRef = useRef(null);

  if (isFetching) return <h1>Loading user info</h1>;

  return (
    <div className="fixed inset-0 z-50 bg-white h-[100vh] w-[100vw]">
      <JitsiMeeting
        roomName={id}
        configOverwrite={{
          startWithAudioMuted: true,
          disableModeratorIndicator: true,
          startScreenSharing: true,
          enableEmailInStats: false,
          gravatar: {
            baseUrl: "https://i.pravatar.cc/300",
            disabled: false,
          },
        }}
        interfaceConfigOverwrite={{
          DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
          HIDE_DEEP_LINKING_LOGO: false,
          JITSI_WATERMARK_LINK: "https://fasaf.org",
          SHOW_BRAND_WATERMARK: false,

          SHOW_DEEP_LINKING_IMAGE: false,
          SHOW_JITSI_WATERMARK: false,
          SHOW_POWERED_BY: false,
          SHOW_PROMOTIONAL_CLOSE_PAGE: false,
        }}
        userInfo={{
          displayName: data.data.name,
          avatarURL: "https://i.pravatar.cc/300",
        }}
        onApiReady={(externalApi) => {}}
        getIFrameRef={(iframeRef) => {
          iframeRef.style.height = "100%";
        }}
      />
    </div>
  );
}
