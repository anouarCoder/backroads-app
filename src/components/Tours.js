import Title from "./Title";
import { tours } from "../data";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title firstWord="featured" secondWord="tours" />
      <div className="section-center featured-center">
        {tours.map(tour => (
          <article className="tour-card" key={tour.id}>
            <div className="tour-img-container">
              <img src={tour.image} className="tour-img" alt={tour.name} />
              <p className="tour-date">{tour.date}</p>
            </div>
            <div className="tour-info">
              <div className="tour-title">
                <h4>{tour.name}</h4>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                vitae tempore voluptatum maxime reprehenderit eum quod
                exercitationem fugit, qui corporis.
              </p>
              <div className="tour-footer">
                <p>
                  <span>
                    <i className={tour.icon}></i>
                  </span>
                  {tour.location}
                </p>
                <p>{tour.duration}</p>
                <p>{tour.cost}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
export default Tours;
