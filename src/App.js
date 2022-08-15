import "./styles.css";

import { useState } from "react";

export default function App() {
  var touristSpots = {
    Odisha: [
      {
        name: "Bhubneswar",
        description:
          "Bhubaneswar, the temple city of India, once known for its architecture and grand temples, is presently a thriving centre for commerce and business."
      },
      {
        name: "Puri",
        description:
          "Puri in Odisha is one of the four must-visit pilgrimage sites for Hindus because of Jagannath Temple that forms the part of Char Dham in India."
      },
      {
        name: "Cuttack",
        description:
          "Referred to as the cultural capital of Odisha, Cuttack is a commercial city with plenty of impressive tourist attractions."
      },
      {
        name: "Konark",
        description:
          "Konark, in the state of Orissa is renowned world over for the Sun Temple which is also a UNESCO World Heritage Site, the Annual dance festival and its beautiful sandy beaches."
      },
      {
        name: "Rourkela",
        description:
          "Surrounded by hills and rivers, the city of Rourkela is located in the state of Odisha. Popularly called as the 'Steel City of Odisha' and Ispat Nagar, it is one of the first cities of the country to become commercialized for steel production. "
      }
    ],
    Mumbai: [
      {
        name: "Marine Drive",
        description:
          "Starting from the north of Nariman Point and ending at the famous Chowpatty beach, the Marine Drive is a 3km long arc shaped road along the sea coast of South Mumbai. "
      },
      {
        name: "Elephanta Caves",
        description:
          "An UNESCO World Heritage Site, Elephanta Caves is a specimen of rock cut art and architecture from the times of medieval India. It is an island and is located at a distance of 11km from the city of Mumbai."
      },
      {
        name: "Gateway of India",
        description:
          "One of the most distinguished monument in Mumbai, The Gateway of India was built in 1924. Now it has become a popular tourist hub in the city. Located at Apollo Bunder Waterfront, the monument overlooks the Arabian Sea in the most beautiful way."
      },
      {
        name: "Kanheri Caves",
        description:
          "Located in the Sanjay Gandhi National Park, the Kanheri Caves in Mumbai is a group of alcoves and rock-cut monuments that illustrate the Buddhist influence on the Indian art and culture."
      },

      {
        name: "Hanging Gardens",
        description:
          "Marked by bushes trimmed into shapes of various animals and proximity to the Arabian Sea are the Hanging Gardens, opposite the Kamla Nehru park. "
      }
    ],
    Karnataka: [
      {
        name: "Mysore",
        description:
          "Famously known as The City of Palaces, it wouldn’t be wrong to say that Mysore, currently Mysuru, is one of the most important places in the country regarding ancient reigns."
      },
      {
        name: "Coorg",
        description:
          "Located amidst imposing mountains in Karnataka with a perpetually misty landscape, Coorg is a popular coffee producing hill station."
      },
      {
        name: "Badami",
        description:
          "Located in a valley of rugged red sandstone, surrounding the Agastya Lake, Badami (formerly known as Vatapi) is an archaeological delight owing to its beautifully crafted sandstone cave temples, fortresses and carvings."
      },
      {
        name: "Hampi",
        description:
          "Hampi, the city of ruins, is a UNESCO World Heritage Site. Situated in the shadowed depth of hills and valleys in the state of Karnataka, this place is a historical delight for travellers. "
      },
      {
        name: "Gokarna",
        description:
          "With its pristine beaches and breathtaking landscapes, Gokarna is a Hindu pilgrimage town in Karnataka and a newly found hub for beach lovers and hippies."
      }
    ],
    "": ""
  };

  var [state, setState] = useState("");

  function showTouristPlaces(event) {
    var value = event.target.name;
    setState(value);
  }
  return (
    <div className="App">
      <header className="hero">
        <div>
          <h1>Holiday Destinations</h1>
        </div>
      </header>
      <div className="info-heading">
        <h2>Click any button to see the tourist spots in that state.</h2>
      </div>
      <div className="title-container">
        <button
          className="title-button odisha"
          name="Odisha"
          onClick={showTouristPlaces}
        >
          Odisha
        </button>
        <button
          className="title-button mumbai"
          name="Mumbai"
          onClick={showTouristPlaces}
        >
          Mumbai
        </button>
        <button
          className="title-button karnataka"
          name="Karnataka"
          onClick={showTouristPlaces}
        >
          Karnataka
        </button>
      </div>
      <hr></hr>
      <ul class="places">
        {Object.values(touristSpots[state]).map((place) => (
          <li className="place">
            <h2 className="place-title">{place.name}</h2>
            <p className="place-description">{place.description}</p>
          </li>
        ))}
      </ul>
      <footer className="footer">Made by Pratik using React JS</footer>
    </div>
  );
}
