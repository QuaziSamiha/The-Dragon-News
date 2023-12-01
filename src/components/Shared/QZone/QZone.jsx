import qzone1 from "../../../assets/QZone1.png";
import qzone2 from "../../../assets/QZone2.png";
import qzone3 from "../../../assets/QZone3.png";
function QZone() {
  return (
    <>
      <section className="bg-secondary text-center my-4 py-4">
        <h4>Q-Zone</h4>
        <div>
          <img src={qzone1} alt="" />
          <img src={qzone2} alt="" />
          <img src={qzone3} alt="" />
        </div>
      </section>
    </>
  );
}

export default QZone;
