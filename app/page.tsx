import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroGallery from "./components/HeroGallery";
import CarouselOne from "./components/CarouselOne";
import Footer from "./components/Footer";
import CarouselVilla from "./components/CarouselVilla";

export default function Home() {
  return (
    <div className="w-full">
      <div className="flex items-center relative">
        <div className="relative w-full h-screen">
          <Image
            src={"/images/hero-image.png"}
            alt="hero-image"
            loading="lazy"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-50 "></div>
        <Navbar />
        <div className="left-0 absolute md:ml-28 md:mr-0 md:text-start text-center ml-10 mr-10">
          <p className={` text-white md:text-2xl text-base`}>BECOME A HOST</p>
          <h1 className="md:text-5xl text-3xl text-white mt-5 font-semibold">
            Your end-to-end solution for
          </h1>
          <h2 className="md:text-5xl text-3xl text-white font-semibold">
            property management
          </h2>
        </div>
      </div>

      {/* Gallery Banner */}
      <div className="pl-40 pr-40">
        <div className="flex justify-center">
          <div className="md:-mt-[160px] mt-20">
            <HeroGallery />
          </div>
        </div>
      </div>

      <section>
        <div className="md:mt-[200px] mt-20 ">
          <CarouselVilla />
        </div>
      </section>

      {/* Gallery Slider */}
      <section className="bg-[url('/images/bg-img.png')] h-screen w-full bg-cover md:mt-44 mt-10">
        <div className="flex">
          <div className="overflow-hidden mt-20 lg:mt-[130px]">
            <div className="md:flex md:ml-9 lg:pl-[100px] md:pr-[100px] mx-10 md:mx-0">
              <div className="flex flex-col justify-center">
                <h3 id="become_a_host" className="tracking-wider text-xl">
                  LOREM IPSUM
                </h3>
                <h3
                  id="experience"
                  className="text-3xl md:text-6xl font-semibold text-[#5590c8] mt-5"
                >
                  Experiences
                </h3>
                <h3 className="text-4xl  md:text-6xl tracking-tight mt-2 md:font-light">
                  Of Your Lifetime
                </h3>
                <p className="lg:w-[30rem] text-xl text-slate-400 mt-10">
                  Lorem ipsum dolor sit amet consectetur. Sed pretium sed
                  viverra urna. Laoreet sit pulvinar sapien ornare aenean quam
                  in.
                </p>
                <button className="bg-[#2f74a8] w-[300px] h-[80px] rounded-full mt-11 p-5 text-white tracking-widest hover:text-black hover:bg-white hover:border-2 border-black">
                  MORE EXPERIENCE
                </button>
              </div>
              <div className="mt-10 md:mt-0">
                <CarouselOne />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Can We Help */}
      <section className="lg:mt-[100px] w-full mt-20">
        <div className="flex justify-center">
          <div className="hidden lg:block">
            <div className="relative w-[200px] h-[200px] ml-[500px]">
              <Image
                src={"/images/ayunan.png"}
                alt="hero-image"
                loading="lazy"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
            <div className="flex ml-[100px] -mt-[120px]">
              <div className="relative w-[300px] h-[300px]">
                <Image
                  src={"/images/gazebo-pool.png"}
                  alt="hero-image"
                  loading="lazy"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
              <div className="relative w-[200px] h-[200px] ml-[200px] mt-[50px]">
                <Image
                  src={"/images/retangle2.png"}
                  alt="hero-image"
                  loading="lazy"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="flex -mt-[130px]">
              <div className="relative w-[250px] mt-[50px] h-[150px] -z-10">
                <Image
                  src={"/images/retangle1.png"}
                  alt="hero-image"
                  loading="lazy"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
              <div className="relative w-[350px] h-[350px] ml-[50px]">
                <Image
                  src={"/images/women-pool.png"}
                  alt="hero-image"
                  loading="lazy"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="flex mx-10 lg:mx-0">
            <div className="ml-0 lg:ml-[100px] lg:mt-[70px]">
              <h3 id="about_us" className="tracking-wider text-xl">
                LOREM IPSUM
              </h3>
              <h3 className="text-4xl lg:text-6xl  mt-5">How Can</h3>
              <h3 className="text-4xl lg:text-6xl tracking-tight mt-2 ">
                We <span className="text-[#5590c8]">Help You ?</span>
              </h3>
              <p className="lg:w-[30rem] text-xl text-slate-400 mt-10">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. optio,
                eum eos praesentium nostrum incidunt alias voluptates, porro
                quisquam voluptate id. Modi, perferendis quia saepe doloribus
                aspernatur recusandae!
              </p>
              <button className="bg-[#2f74a8] w-[300px] h-[80px] rounded-full mt-11 p-5 text-white tracking-widest hover:text-black hover:bg-white hover:border-2 border-black">
                CONTACT US
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#2f74a8] to-[#51a2e0] md:p-20 p-10 mt-36">
        <Footer />
      </section>
    </div>
  );
}
