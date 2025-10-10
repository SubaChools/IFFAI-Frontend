import bgImg from "../assets/images/AI2.jpg";
import sideImg from "../assets/images/learnAI.jpg";

const RegNow: React.FC = () => {
  return (
    <section className="w-full "
    style={{ backgroundImage: `url(${bgImg})`, }}>
      <div className="container mx-auto px-2 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* ✅ Left: Text Content */}
         <div className="h-90">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 flex flex-col  h-full w-full">
            <h2 className="text-4xl text-green-500 uppercase md:text-4xl font-extrabold drop-shadow-lg mb-8">
            Start learning 
          </h2>
          <p className="text-lg md:text-xl text-black-800 mb-10">
            Sign up for a free IFFAI account to unlock dozens of online courses, digital tools,
            virtual events, and thought leadership insights to accelerate your career.
          </p>

          {/* ✅ Centered Button */}
          <div className="flex justify-center ">
            <a href="/register">
            <button className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition">
              Register Now
            </button>
            </a>
          </div>
        </div>
        </div>

        {/* ✅ Right: Big Image */}
        <div className="h-full ">
          <img
            src={sideImg}
            alt="AI"
            className="w-full max-w-lg rounded-2xl rounded-tl-full rounded-tr-full rounded-bl-full object-cover shadow-lg"
         
         />
        </div>
      </div>
    </section>
  );
}
export default RegNow;
