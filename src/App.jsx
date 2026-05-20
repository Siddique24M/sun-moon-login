import { useState } from 'react';
import { FaUser, FaKey, FaGoogle, FaFacebook, FaGithub } from 'react-icons/fa6';

export default function SunMoonLoginPage() {
  const [isHovered, setIsHovered] = useState(false);

  // Background Styles separated for clean transition mapping
  const nightBackground = {
    backgroundImage: `url(/src/assets/images/RightBigMountainNight.png), url(/src/assets/images/moon.png), url(/src/assets/images/RightSmallMountainNight.png), url(/src/assets/images/LeftSmallMountainNight.png), url(/src/assets/images/SmallSun.png), url(/src/assets/images/leftBigMountainNight.png), url(/src/assets/images/space.png)`,
    backgroundSize: '50%, 15%, 50%, 50%, 25%, 50%, 100% 100%',
    backgroundPosition: '0% 105%, 2% 5%, 35% 105%, 65% 105%, 80% 120%, 100% 105%, 0% 0%',
    backgroundRepeat: 'no-repeat',
  };

  const dayBackground = {
    backgroundImage: `url(/src/assets/images/RightBigMountainDay.png), url(/src/assets/images/moon.png), url(/src/assets/images/RightSmallMountainDay.png), url(/src/assets/images/LeftSmallMountainDay.png), url(/src/assets/images/SmallSun.png), url(/src/assets/images/leftBigMountainDay.png), url(/src/assets/images/CartoonSky.png)`,
    backgroundSize: '50%, 6%, 50%, 50%, 40%, 50%, 100% 100%',
    backgroundPosition: '-20% 105%, 10% 95%, 15% 105%, 85% 105%, 115% -120%, 120% 105%, 0% 0%',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className="relative flex h-screen w-screen items-center justify-center font-product-sans">
      
      {/* Background Container */}
      <div 
        className="absolute inset-0 z-0 transition-all duration-4000 ease-in-out"
        style={isHovered ? dayBackground : nightBackground}
      />

      {/* Login Form Container */}
      <form 
        className="group relative z-10 flex h-[65vh] w-[30vw] min-w-[320px] flex-col items-center justify-evenly rounded-[15px] border-2 border-white bg-transparent backdrop-blur-[10px] shadow-[0_0_10px_white] transition-all duration-250 hover:border-black hover:shadow-[0_0_10px_black]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h1 className="text-4xl text-white drop-shadow-[0_0_10px_black] transition-colors duration-250 group-hover:text-black">
          Login
        </h1>

        {/* Username Field */}
        <div className="relative w-4/5">
          <input 
            type="text" 
            placeholder="Username" 
            className="w-full border-b-2 border-white bg-transparent p-2.5 text-lg text-white outline-none transition-all duration-250 placeholder:text-xl placeholder:text-white hover:scale-105 group-hover:border-black group-hover:text-black group-hover:placeholder:text-black"
          />
          <FaUser className="absolute right-4 top-1/2 -translate-y-1/2 text-white transition-colors duration-250 group-hover:text-black" />
        </div>

        {/* Password Field */}
        <div className="relative w-4/5">
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full border-b-2 border-white bg-transparent p-2.5 text-lg text-white outline-none transition-all duration-250 placeholder:text-xl placeholder:text-white hover:scale-105 group-hover:border-black group-hover:text-black group-hover:placeholder:text-black"
          />
          <FaKey className="absolute right-4 top-1/2 -translate-y-1/2 text-white transition-colors duration-250 group-hover:text-black" />
        </div>

        <a href="#" className="text-white no-underline transition-colors duration-250 group-hover:text-black">
          Forget Password?
        </a>

        <button 
          type="button" 
          className="h-[10%] w-4/5 rounded-[10px] border-2 bg-darkblue text-[17px] text-white outline-none transition-colors duration-250 group-hover:bg-whitesmoke group-hover:text-black"
        >
          Submit
        </button>

        <p className="text-white transition-colors duration-250 group-hover:text-black">
          or continue with
        </p>

        {/* Social Login Icons */}
        <div className="flex h-[10%] w-4/5 items-center justify-evenly">
          <span className="flex h-[70%] w-1/5 items-center justify-center rounded-[10px] bg-transparent text-white border-2 transition-colors duration-250 group-hover:border-black group-hover:bg-transparent group-hover:text-black">
            <FaGoogle className="text-xl transition-colors duration-250" />
          </span>
          <span className="flex h-[70%] w-1/5 items-center justify-center rounded-[10px] bg-transparent text-white border-2 transition-colors duration-250 group-hover:border-black group-hover:bg-transparent group-hover:text-black ">
            <FaFacebook className="text-xl transition-colors duration-250" />
          </span>
          <span className="flex h-[70%] w-1/5 items-center justify-center rounded-[10px] bg-transparent text-white border-2 transition-colors duration-250 group-hover:border-black group-hover:bg-transparent group-hover:text-black ">
            <FaGithub className="text-xl transition-colors duration-250" />
          </span>
        </div>

        <p className="text-white transition-colors duration-250 group-hover:text-black">
          Don't have an Account?
        </p>
        
        <a href="#" className="text-white no-underline transition-colors duration-250 group-hover:text-black">
          Register for free
        </a>
      </form>
    </div>
  );
}