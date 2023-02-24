import { useGetFriendRequestQuery } from "features/friends/friendsApi";
import { useGetHomeProfilesQuery } from "features/homepage/homeApi";
import young1 from "../../../assets/images/young-1.png";
import young2 from "../../../assets/images/young-2.png";
import young3 from "../../../assets/images/young-3.png";
import young4 from "../../../assets/images/young-4.png";
import young5 from "../../../assets/images/young-5.png";
import FriendRequest from "../FriendRequest";
import SuggestedFriendCard from "../SuggestedFriendCard";
import DoubleTickSvg from "./../../../components/Shared/Svg/DoubleTickSvg";
import InvitePeopleSvg from "./../../../components/Shared/Svg/InvitePeopleSvg";

const SocialRightBar = () => {
  const { data, isFetching } = useGetFriendRequestQuery();
  const { data: users, isFetching: isUsersFetching } =
  useGetHomeProfilesQuery();

  return (
    <div>
      <div class="col-span-1 h-screen overflow-y-auto sticky top-0">
        {/* right-sidebar-part-1 */}
        <div class="px-2 py-4 mb-4 bg-[#FFFFFF] shadow-md rounded-sm">
          <div className="flex items-center justify-between mb-4">
            <h6 className="text-[14px] font-medium text-[#8F8F8F]">
              Invite Meeting
            </h6>
            <InvitePeopleSvg />
          </div>
          {/* search-bar */}
          <div
            style={{ border: "0.5px solid #000000" }}
            className="flex items-center rounded-sm w-[100%] px-3 mb-4 "
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-[#8F8F8F] dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <input
              className="w-[100%] bg-transparent outline-none pl-3 placeholder:text-[#8F8F8F] placeholder:text-[11px] border-0 focus:ring-0"
              type="text"
              placeholder="Search..."
            />
          </div>
          <div className="flex items-center justify-between gap-3 mb-4">
            <div className="flex items-center justify-between">
              <img className="rounded-md" src={young5} alt="" />
              <div className="px-2">
                <p className="text-[12px] text-[#000000]">Hisoka</p>
                <p className="text-[8px] text-[#8F8F8F]">Founder of asus</p>
              </div>
            </div>
            <button className="btn btn-xl h-[25px] min-h-[25px] rounded-sm bg-[#DEDEDE] hover:bg-[#DEDEDE] border-none text-center text-[#000] w-[5%] text-[12px] normal-case">
              Add
            </button>
          </div>
          <div className="flex items-center justify-between gap-3 mb-4">
            <div className="flex items-center justify-between">
              <img className="rounded-md " src={young3} alt="" />
              <div className="px-2">
                <p className="text-[12px] text-[#000000]">Kushina Uzumak</p>
                <p className="text-[8px] text-[#8F8F8F]">Co-Founder</p>
              </div>
            </div>
            <button className="btn btn-xl h-[25px] min-h-[25px] rounded-sm bg-[#DEDEDE] hover:bg-[#DEDEDE] border-none text-center text-[#000] w-[5%] text-[12px] normal-case">
              Add
            </button>
          </div>
          <div className="flex items-center justify-between gap-3 mb-4">
            <div className="flex items-center justify-between">
              <img className="rounded-md " src={young1} alt="" />
              <div className="px-2">
                <p className="text-[12px] text-[#000000]">Kushina Uzumak</p>
                <p className="text-[8px] text-[#8F8F8F]">Co-Founder</p>
              </div>
            </div>
            <button className="btn btn-xl h-[25px] min-h-[25px] rounded-sm bg-[#DEDEDE] hover:bg-[#DEDEDE] border-none text-center text-[#000] w-[5%] text-[12px] normal-case">
              Add
            </button>
          </div>
          <div className="flex items-center justify-between gap-3 mb-4">
            <div className="flex items-center justify-between">
              <img className="rounded-md " src={young4} alt="" />
              <div className="px-2">
                <p className="text-[12px] text-[#000000]">Shinobu Oshino</p>
                <p className="text-[8px] text-[#8F8F8F]">Co-Founder</p>
              </div>
            </div>
            <button className="btn btn-xl h-[25px] min-h-[25px] rounded-sm bg-[#DEDEDE] hover:bg-[#DEDEDE] border-none text-center text-[#000] w-[5%] text-[12px] normal-case">
              Add
            </button>
          </div>
          <div className="flex items-center justify-between gap-3 mb-4">
            <div className="flex items-center justify-between">
              <img className="rounded-md " src={young2} alt="" />
              <div className="px-2">
                <p className="text-[12px] text-[#000000]">Spike Spiegel</p>
                <p className="text-[8px] text-[#8F8F8F]">Co-Founder</p>
              </div>
            </div>
            <button className="btn btn-xl h-[25px] min-h-[25px] rounded-sm bg-[#DEDEDE] hover:bg-[#DEDEDE] border-none text-center text-[#000] w-[5%] text-[12px] normal-case">
              Add
            </button>
          </div>

          <button className="btn btn-sm rounded-md bg-[#000000] hover:bg-[#000000] text-center w-[100%] text-[12px] normal-case">
            Arrange meeting
          </button>
        </div>

        {/* right-sidebar-part-2 */}
        <div class="px-2 py-4 mb-4 bg-[#FFFFFF] shadow-md rounded-sm">
          <h6 className="text-[14px] font-medium mb-4 text-[#000000]">
            Meeting history
          </h6>
          <div className="flex items-center justify-between gap-3 mb-4">
            <div className="flex items-center justify-between">
              <img className="rounded-md " src={young1} alt="" />
              <div className="px-2">
                <p className="text-[12px] text-[#000000]">89654321</p>
                <p className="text-[8px] text-[#8F8F8F]">
                  12 November at 2:30 pm
                </p>
              </div>
            </div>
            <button className="btn btn-xl h-[25px] min-h-[25px] rounded-sm bg-[#FFD700] hover:bg-[#FFD700] border-none text-center text-[#000] w-[5%] text-[12px] normal-case">
              Join
            </button>
          </div>
          <div className="flex items-center justify-between gap-3 mb-4">
            <div className="flex items-center justify-between">
              <img className="rounded-md " src={young2} alt="" />
              <div className="px-2">
                <p className="text-[12px] text-[#000000]">89654321 </p>
                <p className="text-[8px] text-[#8F8F8F]">
                  10 November at 5:00 pm
                </p>
              </div>
            </div>
            <button className="btn btn-xl h-[25px] min-h-[25px] rounded-sm bg-[#FFD700] hover:bg-[#FFD700] border-none text-center text-[#000] w-[5%] text-[12px] normal-case">
              Join
            </button>
          </div>
          <div className="flex items-center justify-between gap-3 mb-4">
            <div className="flex items-center justify-between">
              <img className="rounded-md " src={young4} alt="" />
              <div className="px-2">
                <p className="text-[12px] text-[#000000]">89654321 </p>
                <p className="text-[8px] text-[#8F8F8F]">
                  10 November at 5:00 pm
                </p>
              </div>
            </div>
            <button className="btn btn-xl h-[25px] min-h-[25px] rounded-sm bg-[#FFD700] hover:bg-[#FFD700] border-none text-center text-[#000] w-[5%] text-[12px] normal-case">
              Join
            </button>
          </div>
        </div>

        {/* right-sidebar-part-3 */}
        <div class="mb-4 px-2 py-4 bg-[#FFFFFF] shadow-md rounded-sm">
          <div className="flex items-center justify-between mb-4">
            <h6 className="text-[14px] font-medium text-[#8F8F8F]">
              Friend Request ({data?.data.length})
            </h6>
            <span className="text-[12px] text-[#76A2CB]">See all</span>
          </div>

          {isFetching ? (
            <>
              {new Array(5).fill(0).map((_, index) => (
                <div
                  className="flex items-center justify-between gap-2 mb-4"
                  key={index}
                >
                  <div className="w-12 h-12 bg-gray-300 rounded-lg animate-pulse" />

                  <div className="flex-1">
                    <div className="w-20 h-3 bg-gray-300 rounded animate-pulse" />
                    <div className="w-16 h-2 mt-1 bg-gray-300 rounded animate-pulse" />
                  </div>
                </div>
              ))}
            </>
          ) : (
            <>
              {data?.data.map((item) => (
                <FriendRequest item={item} />
              ))}
            </>
          )}
        </div>

        {/* right-sidebar-part-4 */}
        <div class="px-2 py-4 mb-4 bg-[#FFFFFF] shadow-md rounded-sm">
          <div className="flex items-center justify-between mb-4">
            <h6 className="text-[14px] font-medium text-[#8F8F8F]">
              Suggested Friends
            </h6>
            <span className="text-[12px] text-[#76A2CB]">See all</span>
          </div>

          {isUsersFetching ? (
            <>
              {new Array(5).fill(0).map((_, index) => (
                <div
                  className="flex items-center justify-between gap-2 mb-4"
                  key={index}
                >
                  <div className="w-12 h-12 bg-gray-300 rounded-lg animate-pulse" />

                  <div className="flex-1">
                    <div className="w-20 h-3 bg-gray-300 rounded animate-pulse" />
                    <div className="w-16 h-2 mt-1 bg-gray-300 rounded animate-pulse" />
                  </div>
                </div>
              ))}
            </>
          ) : (
            <>
              {users?.data
                ?.slice()
                ?.sort(() => Math.random() - 0.5)
                ?.slice(0, 5)
                ?.map((user, idx) => (
                  <SuggestedFriendCard {...user} key={idx} />
                ))}
            </>
          )}
        </div>

        {/* right-sidebar-part-5 */}
        <div class="px-2 py-4 mb-4 bg-[#FFFFFF] shadow-md rounded-sm">
          <h6 className="text-[14px] mb-4 font-medium text-[#8F8F8F]">
            Recent Chat
          </h6>
          <div className="flex items-center justify-between gap-3 mb-4">
            <div className="flex items-center justify-between">
              <img className="rounded-md " src={young5} alt="" />
              <div className="px-2">
                <p className="text-[12px] text-[#000000]">Hisoka ulluysda</p>
                <p className="text-[8px] text-[#8F8F8F]">Founder of asus</p>
              </div>
            </div>
            <div class="bg-[#CC0025] text-[#FFFFFF] w-[20px] h-[20px] text-[12px] text-center text-dark rounded-[100%] flex items-center justify-center">
              4
            </div>
          </div>
          <div className="flex items-center justify-between gap-3 mb-4">
            <div className="flex items-center justify-between">
              <img className="rounded-md " src={young3} alt="" />
              <div className="px-2">
                <p className="text-[12px] text-[#000000]">Kushina Uzumak</p>
                <p className="text-[8px] text-[#8F8F8F]">Co-Founder</p>
              </div>
            </div>
            <DoubleTickSvg />
          </div>
          <div className="flex items-center justify-between gap-3 mb-4">
            <div className="flex items-center justify-between">
              <img className="rounded-md " src={young1} alt="" />
              <div className="px-2">
                <p className="text-[12px] text-[#000000]">
                  Hitagi Senjougahara
                </p>
                <p className="text-[8px] text-[#8F8F8F]">Co-Founder</p>
              </div>
            </div>
            <DoubleTickSvg />
          </div>
          <div className="flex items-center justify-between gap-3 mb-4">
            <div className="flex items-center justify-between">
              <img className="rounded-md " src={young4} alt="" />
              <div className="px-2">
                <p className="text-[12px] text-[#000000]">Shinobu Oshino</p>
                <p className="text-[8px] text-[#8F8F8F]">Co-Founder</p>
              </div>
            </div>
            <DoubleTickSvg />
          </div>
        </div>

        {/* not used for now */}
        {/* <div class="mt-2 ">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-medium mb-2 text-[#444]">
                  Community
                </h2>
                <i
                  onClick={toggleCommunity}
                  class={`fa-solid ${
                    showCommunity ? "fa-chevron-up " : "fa-chevron-down"
                  } pr-2`}
                ></i>
              </div>
              <div
                className={`${
                  showCommunity ? "block" : "hidden"
                } bg-[#FFFFFF] rounded shadow-sm py-3 grid grid-cols-3 gap-3`}
              >
                <div className="text-center">
                  <i class="fa-solid fa-calendar-day"></i>
                  <p>Events</p>
                </div>
                <div className="text-center">
                  <i class="fa-solid fa-file-lines"></i>
                  <p>Blogs</p>
                </div>
                <div className="text-center">
                  <i class="fa-solid fa-shop"></i>
                  <p>Markets</p>
                </div>
                <div className="text-center">
                  <i class="fa-solid fa-comments"></i>
                  <p>Forum</p>
                </div>
                <div className="text-center">
                  <i class="fa-solid fa-file-pen"></i>
                  <p>My Article</p>
                </div>
                <div className="text-center">
                  <i class="fa-brands fa-product-hunt"></i>
                  <p>My Products</p>
                </div>
                <div className="text-center">
                  <i class="fa-solid fa-people-group"></i>
                  <p>My Groups</p>
                </div>
                <div className="text-center">
                  <i class="fa-regular fa-file-lines"></i>
                  <p>My Pages</p>
                </div>
              </div>
            </div> */}
      </div>
    </div>
  );
};

export default SocialRightBar;
