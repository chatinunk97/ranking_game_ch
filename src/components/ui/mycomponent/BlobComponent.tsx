const BlobComponent = () => {
  return (
    <svg
      className="absolute translate-x-36 translate-y-20 scale-125"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      {" "}
      <defs>
        <linearGradient id="purpleToBlue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#800080" />
          <stop offset="100%" stop-color="#0000FF" />
        </linearGradient>
      </defs>
      <path
        fill="url(#purpleToBlue)"
        d="M35.6,-46.5C47.3,-40.5,58.8,-31.7,65.9,-19.2C73,-6.7,75.7,9.4,71.9,24C68,38.7,57.7,51.9,44.6,61.2C31.5,70.5,15.8,75.9,-1.4,77.8C-18.6,79.8,-37.2,78.3,-44.7,67.2C-52.1,56,-48.4,35.3,-52.9,18C-57.4,0.8,-70,-13,-70.9,-27C-71.9,-41,-61.2,-55.3,-47.4,-60.6C-33.6,-66,-16.8,-62.6,-2.4,-59.2C11.9,-55.8,23.9,-52.6,35.6,-46.5Z"
        transform="translate(100 100)"
      />
    </svg>
  );
};

export default BlobComponent;
