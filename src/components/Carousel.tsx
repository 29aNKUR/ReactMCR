import { useState } from "react";

const data = [
  "https://images.pexels.com/photos/719396/pexels-photo-719396.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://i.pinimg.com/236x/ce/00/c2/ce00c26ab211f6be2da9fa2c4121713b.jpg",
  "https://wallpapers.com/images/featured/hd-a5u9zq0a0ymy2dug.jpg",
  "https://e0.pxfuel.com/wallpapers/781/241/desktop-wallpaper-nature-beautiful-natural-nature-thumbnail.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRFUR6CMpA6Dqxx-SEaYdTUUSwEBWBJgSCqA&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMXwXcwzjv6l6kvmR1RLZQFMW2w3fSHxlJ4Q&usqp=CAU",
];


const Carousel = () => {

  const [image, setImage] = useState('');
  const [index, setIndex] = useState(0);

  const handleNext = () => {

      if(index >=0 && index < data.length-1){
        setIndex(index + 1);
      } else {
        setIndex(0)
      }
  }

  const handlePrev = () => {

  }
  
  return (
    <div>
      <div className="flex justify-center">
        <div>
          <button className="text-white bg-blue-800 px-4 py-1 rounded-md" onClick={handlePrev}>
            Previous
          </button>
        </div>

        {/* {data.map((image, index) => (
          <img src={image} alt="photo" key={index} />
        ))} */}

        <img src={data[index]} alt="" className="object-contain aspect-auto"/>
        <div>
          <button className="text-white bg-blue-800 px-4 py-1 rounded-md" onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
