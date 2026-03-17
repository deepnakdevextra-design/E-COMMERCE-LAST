import heroImg from "../assets/pics.jpg";

export default function Main() {

  const stats = [
    { number: "200+", label: "International Brands" },
    { number: "2,000+", label: "High-Quality Products" },
    { number: "30,000+", label: "Happy Customers" },
  ];

  return (
    <div className="w-auto flex justify-center  bg-[#F2F0F1]">

      <div className='max-w-300  px-10 h-auto flex  items-center justify-between '>

        {/* LEFT SIDE */}
        <div className=" w-1/2 ">

          <h1 className="text-[64px]  leading-16 fond-integral tracking-[0] font-extrabold">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>

<div>
  <p className="text-[#00000099] mt-6 leading-5.5 w-136 text-[16px]">Browse through our diverse range of meticulously crafted garments, 
    designed to bring out your individuality and cater to your sense of style.</p>

    <button className="bg-black h-13 rounded-full mt-6 font-medium w-52 flex items-center justify-center transition hover:bg-gray-800 text-white">Shop now</button>


</div>

          {/* Stats Section */}
          <div className="flex gap-10 mt-10">

            {stats.map((item, index) => (
              
              <div>

                <h2 className="text-3xl font-bold">
                  {item.number}
                </h2>

                <p className="text-gray-500 text-sm">
                  {item.label}
             
                </p>

              </div>
            ))}

          </div>

        </div>
      
        

        {/* RIGHT SIDE IMAGE */}
        <div className="w-1/2 flex justify-end">
          <img src={heroImg} alt="fashion" className="w-112.5" />
        </div>

      </div>
    </div>
  );
}