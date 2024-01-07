import "./index.css";

function App() {
  return <Login />;
}

function Login() {
  return (
    <div className="flex">
      <div id="illustration">
        <img
          className="h-screen"
          src="./illustration.svg"
          alt="illustration"
        ></img>
      </div>
      <div id="login-form" className="ml-[91px] font-NunitoSans flex flex-col">
        <img
          className="mt-[89px] h-[72px] w-[72px]"
          src="./Group 1686550876.svg"
          alt="group"
        ></img>
        <div>
          <h2 className="mt-3 text-[36px] font-[700] text-[#525252]">
            Login to your account
          </h2>
          <h6 className="font-[400] text-[16px] text-[#525252]">
            See what is going on with your business
          </h6>
          <button className="flex border border-[#E8E8E8] p-[10px] w-[420px] justify-center items-center rounded-[5px] mt-5">
            <img src="./image 2.svg" alt="image2"></img>
            <label className="ml-[13px] text-[14px] font-[700] text-[#828282]">
              Continue with Google
            </label>
          </button>
          <div className="flex justify-center my-4">
            <label className="text-[12px] font-[600] text-[#A1A1A1] ">
              ------------- or Sign in with Email -------------
            </label>
          </div>
          <div>
            <label className="text-[14px] text-[#828282] font-[600]">
              Email
            </label>
            <input
              className="block border border-[#E8E8E8] p-[10px] w-[420px] justify-center rounded-[5px]"
              type="email"
              placeholder="mail@abc.com"
            ></input>
          </div>
          <div className="mt-3">
            <label className="text-[14px] text-[#828282] font-[600]">
              Password
            </label>
            <input
              className="block border border-[#E8E8E8] p-[10px] w-[420px] justify-center rounded-[5px]"
              type="password"
              placeholder="**********"
            ></input>
          </div>
          <div className="flex flex-row items-center mt-1">
            <input
              className="accent-[#7F265B] mr-[8px] h-[12px] w-[12px]"
              type="checkbox"
            ></input>
            <label className="text-[#A1A1A1] font-[400] text-[12px] grow">
              Remember Me
            </label>
            <a href="#null" className=" text-[#7F265B] font-[600] text-[12px]">
              <label>Forgot Password?</label>
            </a>
          </div>
          <button className="bg-[#7F265B] text-white rounded-[6px] w-[420px] h-[50px] mt-4 font-[800] text-[18px]">
            Login
          </button>
        </div>
        <div className="flex justify-center mt-auto mb-7">
          <label className="font-[400] text-[18px]">Not Registered Yet?</label>
          <a className="ml-[10px]" href="#null">
            <label className="text-[#7F265B] font-[600] text-[18px]">
              Create an account
            </label>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
