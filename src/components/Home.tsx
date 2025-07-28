import Dashboard from "./DashBoard";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10 px-4">
      <div className="w-full max-w-[1280px] min-h-[400px] md:min-h-[600px] lg:min-h-[725px] space-y-6">
        <Dashboard />
      </div>
    </div>
  );
};

export default Home;
