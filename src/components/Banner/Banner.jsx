import img1 from "../../../public/assets/images/banner/1.jpg";
import img2 from "../../../public/assets/images/banner/2.jpg";
import img3 from "../../../public/assets/images/banner/3.jpg";
import img4 from "../../../public/assets/images/banner/4.jpg";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full h-[600px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full rounded-xl" />
          {/* For Slide 1 */}

          <div className="absolute h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]  left-0 top-0">
            <div className="mt-24 ml-28">
              <h2 className="text-6xl font-bold mb-4 text-white">
                Affordable <br /> Price For Car <br /> Servicing
              </h2>
              <p className="text-2xl text-white">
                There are many variations of passages of available, but <br />{" "}
                the majority have suffered alteration in some form
              </p>
              <div className="flex gap-10 mt-12">
                <div>
                  <button className="btn bg-[#FF3811]">Discover More</button>
                </div>
                <div>
                  <button className="btn btn-outline btn-success text-white">
                    Success
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute  flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle mr-4">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle bg-[#FF3811]">
              ❯
            </a>
          </div>
        </div>
        {/* slide 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full" />
          <div className="absolute h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]  left-0 top-0">
            <div className="mt-24 ml-28">
              <h2 className="text-6xl font-bold mb-4 text-white">
                Affordable <br /> Price For Car <br /> Servicing
              </h2>
              <p className="text-2xl text-white">
                There are many variations of passages of available, but <br />{" "}
                the majority have suffered alteration in some form
              </p>
              <div className="flex gap-10 mt-12">
                <div>
                  <button className="btn bg-[#FF3811]">Discover More</button>
                </div>
                <div>
                  <button className="btn btn-outline btn-success text-white">
                    Success
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute  flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle mr-4">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle bg-[#FF3811]">
              ❯
            </a>
          </div>
        </div>
        {/* slide 3 */}
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full" />
          <div className="absolute h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]  left-0 top-0">
            <div className="mt-24 ml-28">
              <h2 className="text-6xl font-bold mb-4 text-white">
                Affordable <br /> Price For Car <br /> Servicing
              </h2>
              <p className="text-2xl text-white">
                There are many variations of passages of available, but <br />{" "}
                the majority have suffered alteration in some form
              </p>
              <div className="flex gap-10 mt-12">
                <div>
                  <button className="btn bg-[#FF3811]">Discover More</button>
                </div>
                <div>
                  <button className="btn btn-outline btn-success text-white">
                    Success
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute  flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle mr-4">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle bg-[#FF3811]">
              ❯
            </a>
          </div>
        </div>
        {/* slide 4 */}
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full" />
          <div className="absolute h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]  left-0 top-0">
            <div className="mt-24 ml-28">
              <h2 className="text-6xl font-bold mb-4 text-white">
                Affordable <br /> Price For Car <br /> Servicing
              </h2>
              <p className="text-2xl text-white">
                There are many variations of passages of available, but <br />{" "}
                the majority have suffered alteration in some form
              </p>
              <div className="flex gap-10 mt-12">
                <div>
                  <button className="btn bg-[#FF3811]">Discover More</button>
                </div>
                <div>
                  <button className="btn btn-outline btn-success text-white">
                    Success
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute  flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle mr-4">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle bg[#FF3811]">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
