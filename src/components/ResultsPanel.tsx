export default function ResultsPanel() {
  return (
    <section className="w-[70rem] h-40 rounded-2xl bg-white absolute bottom-[-25%] shadow-xl">
      <div className="flex flex-wrap justify-center h-24 m-8 gap-7">
        <div className="w-60 border-r">
          <h2>IP ADDRESS</h2>
          <p>192.212.174.101</p>
        </div>
        <div className="w-60 border-r">
          <h2>LOCATION</h2>
          <p>Brooklyn, NY 10001</p>
        </div>
        <div className="w-60 border-r">
          <h2>TIMEZONE</h2>
          <p>UTC -05:00</p>
        </div>
        <div className="w-60">
          <h2>ISP</h2>
          <p>SpaceX Starlink</p>
        </div>
      </div>
    </section>
  );
}