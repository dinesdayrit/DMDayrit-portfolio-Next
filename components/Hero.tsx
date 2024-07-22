export default function Hero() {
  return (
    <div
      className="flex items-center bg-cover"
      style={{
        backgroundImage: `url('/herobg.jpg')`,
        width: "100%",
        height: "100vh",
      }}
      id="home"
    >
      <div className="px-16 md:px-32 max-w-7xl">
        <h2 className="font-serif font-bold text-4xl md:text-6xl text-stone-100 lg:text-7xl">
          Hello, <br />
          I'm Dines!
        </h2>
        <p className="md:text-lg ml-3 mr-3 text-white">
          A Web Developer{" "}
          <span className="text-orange-500 font-bold inline-flex typing-animation">
            <span className="typed-text">React.js | Node.js</span>
          </span>
        </p>
      </div>
    </div>
  );
}
