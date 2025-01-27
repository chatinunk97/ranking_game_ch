import BlobComponent from "./BlobComponent";

const BlobBackground = () => {
  return (
    <>
      {" "}
      <BlobComponent
        position={"-translate-x-24"}
        id={"leftChoice"}
      >
        <stop offset="0%" stopColor="#FF4500" />
        <stop offset="100%" stopColor="#FFD700" />
      </BlobComponent>
      <BlobComponent
        position={" translate-x-36"}
        id={"rightChoice"}
      >
        <stop offset="0%" stopColor="#800080" />
        <stop offset="100%" stopColor="#0000FF" />
      </BlobComponent>
    </>
  );
};

export default BlobBackground;
