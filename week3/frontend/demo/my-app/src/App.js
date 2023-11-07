import { getImageUrl } from "./utils.js";

function Profile({
  name,
  imageId,
  profession,
  awards,
  discovery,
  imageSize = 70,
}) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={getImageUrl(imageId)}
        alt={name}
        width={imageSize}
        height={imageSize}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: {awards.length} </b>
          {awards.join(", ")}
        </li>
        <li>
          <b>Discovered: </b>
          {discovery}
        </li>
      </ul>
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        className="profile"
        imageId="szV5sdG"
        name="Maria Skłodowska-Curie"
        profession="physicist and chemist"
        discovery="polonium (chemical element)"
        awards={[
          "Nobel Prize in Physics",
          "Davy Medal",
          "Matteucci Medal",
          "Elliott Cresson Medal",
        ]}
      />
      <Profile
        className="profile"
        imageId={"YfeOqp2"}
        name="Katsuko Saruhashi"
        proffesion="geochemist"
        discovery={"Saruhashi's Table"}
        awards={["Miyaki prize", "Tanaka prize"]}
      >
        /
      </Profile>
    </div>
  );
}
