import "./Home.css";
import React from "react";

interface EventData {
  title: string;
  date: string;
  link: string;
  tag: string;
  image: string;
}

const Home = () => {
  const [events] = React.useState<EventData[]>([
    {
      title:
        "Caravane de la propriété industrielle de la créativité et de l innovation",
      date: "2022-05-15",
      link: "http://www.fpt.ac.ma/index.php/caravane+de+la+propri%c3%a9t%c3%a9+industrielle++de+la+cr%c3%a9ativit%c3%a9+et+de+l+innovation",
      tag: "Innovation",
      image: "http://www.fpt.ac.ma/uploads/news/Programme_Caravanne_OMPI.jpg",
    },
    {
      title: "3rd International Scientific Day of Taroudant 2022",
      date: "2022-05-13",
      link: "http://www.fpt.ac.ma/index.php/caravane+de+la+propri%c3%a9t%c3%a9+industrielle++de+la+cr%c3%a9ativit%c3%a9+et+de+l+innovation",
      tag: "Science",
      image: "http://www.fpt.ac.ma/uploads/news/ISDT_3eme.jpg",
    },
    {
      title: "INTÉGRER LA VIE PROFESSIONNELLEET LA RÉUSSIR",
      date: "2022-05-13",
      link: "http://www.fpt.ac.ma/index.php/int%c3%89grer+la+vie+professionnelleet+la+r%c3%89ussir",
      tag: "Professional",
      image: "http://www.fpt.ac.ma/uploads/news/Event_Affiche.jpg",
    },
    {
      title: "SEMINAR Big Data and Artificial Intelligence for Smart Cities",
      date: "2022-03-15",
      link: "http://www.fpt.ac.ma/index.php/seminar+big+data+and+artificial+intelligence+for+smart+cities",
      tag: "Big Data and AI",
      image: "http://www.fpt.ac.ma/uploads/news/A4_EVENT28032022_.png",
    },
  ]);

  return (
    <div>
      <div className="container">
        <header className="blog-header lh-1 py-3">
          <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
            <div className="col-md-6 px-0">
              <h1 className="display-4 fst-italic">Events board 22</h1>
              <p className="lead mb-0 text-white fw-bold">
                Faculté Polydisciplinaire de Taroudant
              </p>
            </div>
          </div>
        </header>
      </div>

      <main className="container">
        <div className="row mb-2">
          {events.map((event) => (
            <EventCard event={event} />
          ))}
        </div>
      </main>
    </div>
  );
};

interface EventCardProps {
  event: EventData;
}

const EventCard = (props: EventCardProps) => {
  const { event } = props;
  return (
    <div className="col-md-6">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-success">
            {event.tag}
          </strong>
          <h3 className="mb-0">{event.title}</h3>
          <div className="mb-4 text-muted">{event.date}</div>
          <a href={event.link} className="fw-bold ">
            Continue reading
          </a>
        </div>
        <div className="col-auto d-none d-lg-block">
          <img
            style={{ width: "200px", height: "250px", objectFit: "contain" }}
            className="bd-placeholder-img img-responsive"
            src={event.image}
            alt="Event thumbnail"
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
