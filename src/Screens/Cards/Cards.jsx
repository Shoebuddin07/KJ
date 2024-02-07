import CollectionCard from "../../Components/Cards/CollectionsCard/CollectionsCard";
import ExploreCard from "../../Components/Cards/ExploreCard/ExploreCard";
import GiftCard from "../../Components/Cards/GiftCard/GiftCard";
import OfferCard from "../../Components/Cards/OfferCard/OfferCard";
import videobg from "../../assets/bgvideo.webm";

const Cards = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        gap: "13px",
        marginTop: "15px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          width: "47%",
        }}
      >
        <GiftCard />
        <GiftCard />
        <GiftCard />
        <GiftCard />
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "50%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <OfferCard />
        <OfferCard />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",

        }}
        className="video-container"
      >
        <video
          style={{ margin: 'auto', borderRadius: "50px", }}
          src={videobg}
          autoPlay
          loop
          muted
        ></video>
      </div>
      <div
        style={{ width: '100%', display: 'flex', flexWrap: 'wrap', gap: '5px' }}
      >
        <ExploreCard />
        <ExploreCard />
        <ExploreCard />
        <ExploreCard />
        <ExploreCard />
        <ExploreCard />
      </div>

      <div
        style={{ width: '100%', display: 'flex', flexWrap: 'wrap', gap: '5px' }}
      >
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
      </div>
    </div>
  );
};

export default Cards;
