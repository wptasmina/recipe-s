import Buttons from './Buttons';
import banner from '/banner.png'

export default function Banner() {
  return (
    <>
      <div className="min-h-screen lg:py-10 py-4  ">
        <div className="relative block">
          <img
            src={banner}
            alt="banner-image"
            className="min-h-screen object-cover w-full bg-no-repete block rounded-xl "
          />
        </div>
        <div className="absolute lg:px-0 px-6 top-[50%] lg:w-2/3  md:w-[90%]  left-0 right-0 z-10 flex flex-col justify-center items-center mx-auto space-y-5 ">
          <h1 className="text-white md:text-5xl text-2xl md:font-extrabold font-bold text-center tracking-wider md:leading-tight">
            Discover an exceptional cooking class tailored for you
          </h1>
          <p className="text-white md:text-lg text-xs text-center md:leading-relaxed lg:tracking-wider">
            The sauce is rich, flavorful and it pairs perfectly with the
            chicken. Marry Me Chicken is a great dish for a special occasion or
            for a weeknight meal when you want to impress your family and
            friends.
          </p>
          <Buttons />
        </div>
      </div>
    </>
  );
  }
