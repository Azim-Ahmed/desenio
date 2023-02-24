import Button from "components/Reusable/Button";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { SelectSideBar } from "components/Design";
/**
 *@function App.jsx
 *@author Azim
 *
 **/
const Design = () => {
  const [sidebarChanges, setSidebarChanges] = useState(0);
  const [mainPreview, setMainPreview] = useState({});
  const sidebarData = [
    {
      logo: "ic:outline-photo-size-select-actual",
      id: 1,
      title: "SELECT BACKGROUND",
    },
    {
      logo: "bi:grid-1x2-fill",
      id: 2,
      title: "SELECT PICTURE WALL",
    },
    {
      logo: "mdi:circle-box-outline",
      id: 3,
      title: "SELECT DESIGN",
    },
    {
      logo: "lucide:rectangle-vertical",
      id: 4,
      title: "FRAME YOUR DESIGNS",
    },
  ];

  const backgroundImages = [
    {
      id: 1,
      image: "https://gwt.desenio.com/backgrounds/6-blue.jpg",
      color: "blue",
      selected: "background",
    },
    {
      id: 2,
      image: "https://gwt.desenio.com/backgrounds/6-blue.jpg",
      color: "white",
      selected: "background",
    },
    {
      id: 3,
      image: "https://gwt.desenio.com/backgrounds/6-blue.jpg",
      color: "gray",
      selected: "background",
    },
  ];
  const selectBackground = [
    {
      id: 1,
      preview:
        "https://res.cloudinary.com/desenio/image/upload/w_400/backgrounds/4-grey.jpg",
      images: [
        {
          color: "gray",
          image: "https://gwt.desenio.com/backgrounds/4-grey.jpg",
          background: "rgb(181, 181, 181)",
          previewId: 1,
        },
        {
          color: "white",
          image: "https://gwt.desenio.com/backgrounds/4-white.jpg",
          background: "white",
          previewId: 2,
        },
        {
          color: "blue",
          previewId: 3,
          image: "https://gwt.desenio.com/backgrounds/4-blue.jpg",
          background: "rgb(156, 205, 216)",
        },
        {
          color: "green",
          previewId: 4,
          image: "https://gwt.desenio.com/backgrounds/4-green.jpg",
          background: "rgb(174, 199, 187)",
        },
        {
          color: "pink",
          previewId: 5,
          image: "https://gwt.desenio.com/backgrounds/4-pink.jpg",
          background: "rgb(224, 195, 195)",
        },
      ],
    },
    {
      id: 2,
      preview:
        "https://res.cloudinary.com/desenio/image/upload/w_400/backgrounds/5-grey.jpg",
      images: [
        {
          color: "gray",
          image: "https://gwt.desenio.com/backgrounds/5-grey.jpg",
          background: "rgb(181, 181, 181)",
          previewId: 1,
        },
        {
          color: "blue",
          image: "https://gwt.desenio.com/backgrounds/5-blue.jpg",
          background: "rgb(156, 205, 216)",
          previewId: 2,
        },
        {
          color: "white",
          image: "https://gwt.desenio.com/backgrounds/5-white.jpg",
          background: "white",
          previewId: 3,
        },
        {
          color: "pink",
          image: "https://gwt.desenio.com/backgrounds/5-pink.jpg",
          background: "rgb(224, 195, 195)",
          previewId: 4,
        },
      ],
    },
    {
      id: 3,
      preview:
        "https://res.cloudinary.com/desenio/image/upload/w_400/backgrounds/6-grey.jpg",
      images: [
        {
          color: "gray",
          image: "https://gwt.desenio.com/backgrounds/6-grey.jpg",
          background: "rgb(181, 181, 181)",
          previewId: 1,
        },
        {
          color: "blue",
          image: "https://gwt.desenio.com/backgrounds/6-blue.jpg",
          background: "rgb(156, 205, 216)",
          previewId: 2,
        },
      ],
    },
    {
      id: 4,
      preview:
        "https://res.cloudinary.com/desenio/image/upload/w_400/backgrounds/7-grey.jpg",
      images: [
        {
          color: "gray",
          image: "https://gwt.desenio.com/backgrounds/7-grey.jpg",
          background: "rgb(181, 181, 181)",
          previewId: 1,
        },
        {
          color: "blue",
          image: "https://gwt.desenio.com/backgrounds/7-blue.jpg",
          background: "rgb(156, 205, 216)",
          previewId: 2,
        },
        {
          color: "pink",
          image: "https://gwt.desenio.com/backgrounds/7-pink.jpg",
          background: "rgb(224, 195, 195)",
          previewId: 3,
        },
      ],
    },
    {
      id: 5,
      preview:
        "https://res.cloudinary.com/desenio/image/upload/w_400/backgrounds/8-grey.jpg",
      images: [
        {
          color: "gray",
          image: "https://gwt.desenio.com/backgrounds/8-grey.jpg",
          background: "rgb(181, 181, 181)",
          previewId: 1,
        },
        {
          color: "white",
          image: "https://gwt.desenio.com/backgrounds/8-white.jpg",
          background: "white",
          previewId: 2,
        },
        {
          color: "blue",
          image: "https://gwt.desenio.com/backgrounds/8-blue.jpg",
          background: "rgb(156, 205, 216)",
          previewId: 3,
        },
        {
          color: "pink",
          image: "https://gwt.desenio.com/backgrounds/8-pink.jpg",
          background: "rgb(224, 195, 195)",
          previewId: 4,
        },
      ],
    },
    {
      id: 6,
      preview:
        "https://res.cloudinary.com/desenio/image/upload/w_400/backgrounds/9-grey.jpg",
      images: [
        {
          color: "gray",
          background: "rgb(181, 181, 181)",
          image: "https://gwt.desenio.com/backgrounds/9-grey.jpg",
          previewId: 1,
        },
        {
          color: "blue",
          background: "rgb(156, 205, 216)",
          image: "https://gwt.desenio.com/backgrounds/9-blue.jpg",
          previewId: 2,
        },
        {
          color: "white",
          image: "https://gwt.desenio.com/backgrounds/9-white.jpg",
          background: "white",
          previewId: 3,
        },
        {
          color: "pink",
          background: "rgb(224, 195, 195)",
          image: "https://gwt.desenio.com/backgrounds/9-pink.jpg",
          previewId: 4,
        },
      ],
    },
    {
      id: 7,
      preview:
        "https://res.cloudinary.com/desenio/image/upload/w_400/backgrounds/10-grey.jpg",
      images: [
        {
          color: "gray",
          background: "rgb(181, 181, 181)",
          image: "https://gwt.desenio.com/backgrounds/10-grey.jpg",
          previewId: 1,
        },
        {
          color: "dark",
          background: "rgb(109, 107, 107)",
          image: "https://gwt.desenio.com/backgrounds/10-dark.jpg",
          previewId: 2,
        },
        {
          color: "blue",
          background: "rgb(156, 205, 216)",
          image: "https://gwt.desenio.com/backgrounds/10-blue.jpg",
          previewId: 3,
        },
        {
          background: "rgb(174, 199, 187)",
          color: "green",
          image: "https://gwt.desenio.com/backgrounds/10-green.jpg",
          previewId: 4,
        },
      ],
    },
  ];

  const selectPictureWall = [
    {
      id: 1,
      gridItems: 2,
      ratios: ["50X70", "50X70"],
      background: "gray",
      preview: "https://gwt.desenio.com/walls/2-50x70.png",
    },
    {
      id: 2,
      gridItems: 2,
      ratios: ["70X100", "70X100"],
      background: "gray",
      preview: "https://gwt.desenio.com/walls/2-70x100.png",
    },
    {
      id: 3,
      gridItems: 3,
      ratios: ["50X70", "50X70", "50X70"],
      background: "gray",
      preview: "https://gwt.desenio.com/walls/3-50x70.png",
    },
    {
      id: 4,
      gridItems: 3,
      ratios: ["50X70", "70X100", "50X70"],
      background: "gray",
      preview: "https://gwt.desenio.com/walls/3-mixed.png",
    },
    {
      id: 5,
      gridItems: 4,
      ratios: ["30X40", "30X40", "30X40", "30X40"],
      background: "gray",
      preview: "https://gwt.desenio.com/walls/4-30x40.png",
    },
    {
      id: 6,
      gridItems: 3,
      ratios: ["30X40", "50X70", "50X70", "30X40"],
      background: "gray",
      preview: "https://gwt.desenio.com/walls/4-mixed.png",
    },
  ];
  const handleSelectItem = (item) => {
    setSidebarChanges(item.id);
  };
  const handleSelectBackground = (item, items) => {
    if (!items) {
      setMainPreview({
        id: item.id,
        preview: item.images[0].image,
        previewId: item.images[0].previewId,
      });
    } else {
      setMainPreview({
        id: item.id,
        preview: items.image,
        previewId: items.previewId,
      });
    }
  };
  return (
    <section
      style={{
        height: "100%",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <div class="flex ">
        <div class=" text-[#888888] w-[calc(20%-1px)]">
          <div className="border-r-1 h-[100vh] flex justify-between flex-col margin-auto bg-white">
            <div>
              <div
                style={{
                  textAlign: "center",
                  padding: "10px 0 5px",
                  cursor: "pointer",
                }}
                className="flex justify-center"
              >
                <img
                  className="max-h-[29px] w-auto"
                  src="https://checkout.desenio.se/frontend/view_desktop/design/logos/desenio-logo-black.svg"
                  alt=""
                />
              </div>
              {sidebarChanges === 0 && (
                <div>
                  {sidebarData.map((item) => (
                    <div
                      className="flex flex-col justify-center items-center"
                      style={{
                        padding: "17px 20px",
                        cursor: "pointer",
                        transition: "color .25s ease",
                        position: "relative",
                      }}
                      onClick={() => handleSelectItem(item)}
                    >
                      <div>
                        <Icon icon={item.logo} width="31" height="41" />
                      </div>
                      <div className="pt-2">{item.id}</div>
                      <div className="p-1">
                        <p className="text-[12px]">{item.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {sidebarChanges === 1 && (
                <>
                  <div>
                    <SelectSideBar
                      wording="1. SELECT BACKGROUND"
                      onClick={() => setSidebarChanges(0)}
                    />
                    <div className="overflow-y-auto max-h-[800px]">
                      {selectBackground.map((item) => (
                        <div
                          className="flex flex-col justify-center items-center"
                          style={{
                            padding: "8px 20px",
                            transition: "color .25s ease",
                            position: "relative",
                          }}
                        >
                          <img
                            onClick={() => handleSelectBackground(item)}
                            className="cursor-pointer"
                            src={item.preview}
                            alt="oof"
                          />
                          {mainPreview.id === item.id && (
                            <div className="flex justify-start items-start gap-2 mt-3">
                              {item.images.map((items) => (
                                <div className="relative">
                                  <div
                                    onClick={() =>
                                      handleSelectBackground(item, items)
                                    }
                                    className="cursor-pointer"
                                    style={{
                                      background: items.background,
                                      height: "30px",
                                      width: "30px",
                                      border: "1px solid rgba(0, 0, 0, 0.1)",
                                    }}
                                  ></div>
                                  {mainPreview.previewId ===
                                    items.previewId && (
                                    <div className="absolute top-[-4px]">
                                      <Icon
                                        icon="material-symbols:check-small-rounded"
                                        width="31"
                                        height="41"
                                      />
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-center pt-3 items-center">
                      <button
                        className="flex justify-center items-center"
                        style={{
                          padding: "17px 3px",
                          width: "90%",
                          background: " #000",
                          color: "#fff",
                          fontSize: "12px",
                          marginBottom: "10px",
                        }}
                        onClick={() => setSidebarChanges(2)}
                      >
                        NEXT
                      </button>
                    </div>
                  </div>
                </>
              )}
              {sidebarChanges === 2 && (
                <>
                  <div>
                    <SelectSideBar
                      wording=" 2. SELECT PICTURE WALL"
                      onClick={() => setSidebarChanges(0)}
                    />
                    <div className="overflow-y-auto max-h-[750px]">
                      {selectPictureWall.map((item) => (
                        <div
                          className="flex flex-col justify-center items-center"
                          style={{
                            padding: "17px 20px",
                            cursor: "pointer",
                            transition: "color .25s ease",
                            position: "relative",
                          }}
                          onClick={() => handleSelectItem(item)}
                        >
                          <img src={item.preview} alt="oof" />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-center flex-col pt-3 items-center">
                      <button
                        className="flex justify-center items-center"
                        style={{
                          padding: "17px 3px",
                          width: "90%",
                          background: " #000",
                          color: "#fff",
                          fontSize: "12px",
                          marginBottom: "10px",
                        }}
                        onClick={() => setSidebarChanges(3)}
                      >
                        NEXT
                      </button>

                      <button
                        className="flex justify-center items-center"
                        style={{
                          padding: "17px 3px",
                          width: "90%",
                          border: "1px solid #000",
                          color: "#000",
                          fontSize: "12px",
                          marginBottom: "10px",
                        }}
                        onClick={() => setSidebarChanges(1)}
                      >
                        PREVIOUS
                      </button>
                    </div>
                  </div>
                </>
              )}
              {sidebarChanges === 3 && (
                <>
                  <div>
                    <SelectSideBar
                      wording="3. SELECT DESIGNS"
                      onClick={() => setSidebarChanges(0)}
                    />
                    <div className="overflow-y-auto max-h-[750px]">
                      {selectPictureWall.map((item) => (
                        <div
                          className="flex flex-col justify-center items-center"
                          style={{
                            padding: "17px 20px",
                            cursor: "pointer",
                            transition: "color .25s ease",
                            position: "relative",
                          }}
                          onClick={() => handleSelectItem(item)}
                        >
                          <img src={item.preview} alt="oof" />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-center flex-col pt-3 items-center">
                      <button
                        className="flex justify-center items-center"
                        style={{
                          padding: "17px 3px",
                          width: "90%",
                          background: " #000",
                          color: "#fff",
                          fontSize: "12px",
                          marginBottom: "10px",
                        }}
                        onClick={() => setSidebarChanges(3)}
                      >
                        NEXT
                      </button>

                      <button
                        className="flex justify-center items-center"
                        style={{
                          padding: "17px 3px",
                          width: "90%",
                          // background: " #000",
                          border: "1px solid #000",
                          color: "#000",
                          fontSize: "12px",
                          marginBottom: "10px",
                        }}
                        onClick={() => setSidebarChanges(2)}
                      >
                        PREVIOUS
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
            {sidebarChanges === 0 && (
              <div>
                <p className="text-center  text-2xl text-black pb-1">0 USD</p>
                <div className="flex justify-center items-center">
                  <button
                    className="flex justify-center items-center"
                    style={{
                      padding: "17px 3px",
                      width: "90%",
                      background: " #000",
                      color: "#fff",
                      fontSize: "12px",
                      marginBottom: "10px",
                    }}
                  >
                    ADD TO
                    <Icon icon="icon-park-solid:buy" width="31" height="17" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div class=" text-black w-[80%]">
          <div className="h-[71px]">
            <div className="flex justify-between ">
              <div className="flex">
                <Button
                  icon="material-symbols:keyboard-arrow-down"
                  wording="SAVED GALLERY WALLS"
                />
                <Button icon="ic:outline-save-all" wording="SAVE" />
                <Button icon="ri:share-forward-fill" wording="SHARE" />
                <Button icon="bi:grid-1x2-fill" wording="CREATIVE NEW" />
              </div>

              <div className="flex items-center mt-1">
                <div className="relative">
                  <p className=" text-sm absolute top-[-16px] right-[2px]">0</p>
                  <Icon icon="icon-park-solid:buy" width="31" height="17" />
                </div>
                <button
                  style={{
                    margin: "1px 6px 0 10px",
                    padding: "12px 44px",
                    lineHeight: "normal",
                    height: "auto",
                    position: "relative",
                    fontSize: "12px",
                    fontWeight: "400",
                    zIndex: "99",
                    fontFamily:
                      "Raleway,Helvetica Neue,Helvetica,Arial,sans-serif",
                    background: "#000",
                    color: "#fff",
                  }}
                >
                  CHECKOUT {0} USD
                </button>
              </div>
            </div>
            <div className="p-[10px]">
              <p
                style={{
                  color: "#b3b3b3",
                  fontSize: "9px",
                  letterSpacing: "1px",
                  cursor: "pointer",
                }}
              >
                WALL ART / INSPIRATION /{" "}
                <span className="text-[#222222]">CREATE YOUR GALLERY WALL</span>
              </p>
            </div>
          </div>
          <div
            className=" background__css"
            style={{
              background: `url(${
                mainPreview.preview
                  ? mainPreview.preview
                  : "https://gwt.desenio.com/general/welcome-bg.jpg"
              }) no-repeat`,
              width: "100%",
              height: "100%",
              transition: "background-image .2s ease-in",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Design;
