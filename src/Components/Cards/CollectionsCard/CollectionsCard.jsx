import "./CollectionsCard.css";

const CollectionCard = ({ width, image }) => {
  return (
    <div
      className="CollectionCard"
      style={{
        width: width ? width : "33%",
        height: "400px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: image && `url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {!image && <h3>Collections Card</h3>}
    </div>
  );
};

export default CollectionCard;
