// @flow strict
import Link from 'next/link';

function Footer() {
  return (
    <div className="relative border-t bg-[#000000] border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-[#ffc65c] to-transparent"></div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm">
            © Portfolio by <Link target="_blank" href="https://www.linkedin.com/in/taufeeq28/" className="text-[#ffc65c]">Taufeeq Ahmed</Link>
          </p>
          <div className="flex items-center gap-5 mt-4">
            
          </div>
        </div>
      </div>
    </div >
  );
};

export default Footer;
