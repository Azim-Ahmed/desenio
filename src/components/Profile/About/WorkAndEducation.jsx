import OverViewCard from "components/Shared/About/OverViewCard";
import OverViewCardSkeleton from "./OverViewCardSkeleton";
import OverViewLayout from "./OverViewLayout";
import workIcon from "../../../assets/images/workIcon.svg";
import studyIcon from "../../../assets/images/studyIcon.svg";
import { useProfileUpdateContext } from "context/UpdateProfileInfo";
import UpdateModal from "./UpdateModal";
import { useEffect, useState } from "react";

export default function WorkAndEducation() {
  const {
    isUpdateSuccess,
    isUpdating,
    state: me,
    setState: setMe,
    isProfileDataSuccess,
    isProfileDataLoading,
    isProfileDataFetching,
    handleUpdateWorkAt,
    handleUpdateStudyAt,
  } = useProfileUpdateContext();
  console.log("🚀 ~ file: WorkAndEducation.jsx:22 ~ WorkAndEducation ~ me", me);

  const [open, setOpen] = useState(false);
  const [studyModal, setStudyModal] = useState(false);

  const [value, setValue] = useState({
    work_at: me?.work_at,
    study_at: me?.study_at,
  });

  console.log(
    "🚀 ~ file: WorkAndEducation.jsx:31 ~ WorkAndEducation ~ value",
    value
  );

  useEffect(() => {
    if (me.work_at || me.study_at) {
      setValue({
        work_at: me?.work_at,
        study_at: me?.study_at,
      });
    }
  }, [me.work_at, me.study_at]);

  useEffect(() => {
    if (isUpdateSuccess) {
      setOpen(false);
      setStudyModal(false);
    }
  }, [isUpdateSuccess]);

  return (
    <>
      <UpdateModal
        value={value.work_at}
        setValue={setValue}
        open={open}
        name="work_at"
        setOpen={setOpen}
        isUpdating={isUpdating}
        handleChangeFunc={handleUpdateWorkAt}
        title="Where you work now?"
      />

      <UpdateModal
        value={value.study_at}
        setValue={setValue}
        open={studyModal}
        name="study_at"
        setOpen={setStudyModal}
        isUpdating={isUpdating}
        handleChangeFunc={handleUpdateStudyAt}
        title="Where you study now?"
      />

      <OverViewLayout>
        {isProfileDataSuccess ? (
          <>
            <OverViewCard
              Icon={workIcon}
              title={me.work_at ? me.work_at : "Your work place here"}
              privacy="friends"
              menu
              edit
              me={me.work_at}
              setMe={setMe}
              isUpdating={isUpdating}
              setOpen={setOpen}
            />

            <OverViewCard
              Icon={studyIcon}
              title={me.study_at ? me.study_at : "Your university"}
              privacy="friends"
              menu
              edit
              me={me.study_at}
              setMe={setMe}
              isUpdating={isUpdating}
              setOpen={setStudyModal}
            />
          </>
        ) : isProfileDataFetching || isProfileDataLoading || isUpdating ? (
          <>
            {new Array(5).fill(1).map((_, idx) => (
              <OverViewCardSkeleton key={idx} />
            ))}
          </>
        ) : (
          <OverViewCardSkeleton />
        )}
      </OverViewLayout>
    </>
  );
}
