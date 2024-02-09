import KJCards from "../../Components/Cards/BestOfKJ/KJCards";
import CollectionCard from "../../Components/Cards/CollectionsCard/CollectionsCard";
import ExploreCard from "../../Components/Cards/ExploreCard/ExploreCard";
import GiftCard from "../../Components/Cards/GiftCard/GiftCard";
import OfferCard from "../../Components/Cards/OfferCard/OfferCard";
import CustomSlider from "../../Components/Slider/CustomSlider";
import videobg from "../../assets/bgvideo.webm";
import "./Cards.css";

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
        className="GiftCard"
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
        className="OfferCard"
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
          style={{ margin: "auto", borderRadius: "50px" }}
          src={videobg}
          autoPlay
          loop
          muted
        ></video>
      </div>
      <div
        className="ExploreCard"
        style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          gap: "5px",
          background: "transparent",
        }}
      >
        <ExploreCard />
        <ExploreCard />
        <ExploreCard />
        <ExploreCard />
        <ExploreCard />
        <ExploreCard />
      </div>

      <div
        className="CollectionsCard"
        style={{ width: "100%", display: "flex", flexWrap: "wrap", gap: "5px" }}
      >
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          gap: "5px",
          padding: "0px 7px",
        }}
      >
        <OfferCard />
        <OfferCard />
        <OfferCard />
        <OfferCard />
        <OfferCard />
        <OfferCard />
      </div>
      <div
        className="video-container"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          // background:'black'
          // height:'fit-content'
        }}
      >
        <video
          autoPlay
          loop
          muted
          style={{
            width: "100%",
            height: "90%",
          }}
          src="https://media.istockphoto.com/id/1182078398/video/dark-blue-and-bronze-tech-abstract-corporate-arrows-motion-background.mp4?s=mp4-480x480-is&k=20&c=Y0wCg9vVAuThp_EO76moKQnrrOlHvgWzZTIiu1GIKcg="
        ></video>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: "3px",
        }}
      >
        <CollectionCard
          bg="linear-gradient(to right, rgb(27, 4, 43), rgb(2, 105, 105))"
          width="48%"
          image="https://cdn.caratlane.com/media/static/images/V4/2023/CL/12_DEC/HP%20banner/Down_1/Rings.jpg"
        />
        <CollectionCard
          bg="linear-gradient(to right, rgb(27, 4, 43), rgb(2, 105, 105))"
          width="48%"
        />
      </div>
      <div
        style={{
          width: "97%",
          margin: "10px ",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          color: "white",
          cursor: "pointer",
          borderRadius: "7px",
          background:
            "linear-gradient(to right, rgb(27, 4, 43), rgb(2, 105, 105))",
          padding: "13px",
        }}
      >
        <div>
          <h3 style={{ fontWeight: "500", fontSize: "1.5rem" }}>
            Unsure Which Design to Pick
          </h3>
          <p>Book A Free Home Trial!</p>
          <button
            style={{ background: "black", color: "white", fontWeight: "400" }}
          >
            {" "}
            Schedule Appoinment{" "}
          </button>
        </div>
        <div>
          <h3 style={{ fontWeight: "500", fontSize: "1.5rem" }}>
            Come Visit us at our Store
          </h3>
          <p>Click Below To Locate Us!</p>
          <button className="Custom-btn"> Kubra Jewellers </button>
        </div>
      </div>
      <div
        className="Gold-Exchange"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          background:
            "linear-gradient(to right, rgb(27, 4, 43), rgb(2, 105, 105))",
        }}
      >
        <div style={{ width: "47%", textAlign: "center" }}>
          <h3>
            <span style={{ fontSize: "4.5rem" }}> GOLD</span>
            <br /> EXCHANGE PROGRAM
          </h3>
        </div>
        <div style={{ width: "47%" }}>
          <span> A Stylish Upgrade </span>
          <br />
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            maxime minus quis? Omnis, eius commodi?Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Omnis, veritatis ut! Quaerat, quam?
            Quaerat, blanditiis?
          </p>
          <button className="Custom-btn">Know More </button>
        </div>
      </div>
      <div className="About-us">
        <h3
          style={{
            fontSize: "3rem",
            fontWeight: "400",
            color: "rgb(190, 174, 82)",
          }}
        >
          Kubra Jewellers
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
          doloremque deleniti delectus sunt sapiente enim perspiciatis id
          veritatis placeat. In nulla nesciunt iusto tempore id maiores,
          repellendus quaerat, provident inventore est minus. Enim.
        </p>
        <button className="Custom-btn">Know more</button>
      </div>
      <div className="SignUp">
        <h3
          style={{
            fontSize: "3rem",
            fontWeight: "400",
          }}
        >
          SignUp To KJ
        </h3>
        <div className="SignInBox">
          <input
            className="Custom-input"
            type="text"
            placeholder="happyuser@gmail.com"
          ></input>
          <button className="Custom-btn">SignUp</button>
        </div>
      </div>
      <div className="bestOfKJ">
        <div className="kjCards">
        <KJCards/>
        </div>
      </div>
    </div>
  );
};

export default Cards;
