import "./styles.css";

import { useState } from "react";

export default function App() {
  var touristSpots = {
    Odisha: [
      {
        name: "Bhubneswar",
        description:
          "Bhubaneswar, the temple city of India, once known for its architecture and grand temples, is presently a thriving centre for commerce and business.",
        imageUrl:
          "https://imgs.search.brave.com/E3UqJEjrG6LXGtS6Tx-6myBhdcNVI1fE4Qd07slks8U/rs:fit:1200:700:1/g:ce/aHR0cHM6Ly9yZXMt/My5jbG91ZGluYXJ5/LmNvbS9lbmNoYW50/aW5nL2ltYWdlcy93/XzE2MDAsaF83MDAs/Y19maWxsL2V0LXdl/Yi8yMDE1LzA1L2Jo/dWJhbmVzd2FyLTEv/ZGVzdGluYXRpb24t/Ymh1YmFuZXN3YXIt/ZWFzdC1pbmRpYS5q/cGc"
      },
      {
        name: "Puri",
        description:
          "Puri in Odisha is one of the four must-visit pilgrimage sites for Hindus because of Jagannath Temple that forms the part of Char Dham in India.",
        imageUrl:
          "https://imgs.search.brave.com/jPxPsOMN36emcTgi99G-yWPliLMSh9qSGej_BVjeoJ0/rs:fit:553:311:1/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vcGhvdG9z/L2R5bmFtaWMtZ29s/ZGVuLXNlYS1iZWFj/aC1hdC1wdXJpLW9k/aXNoYS1pbmRpYS1w/aWN0dXJlLWlkMTE2/OTM3OTQ0Nz9rPTYm/bT0xMTY5Mzc5NDQ3/JnM9MTcwNjY3YSZ3/PTAmaD1ycEY3dDZz/YkI3eWZ5X3JMUkpG/N28zYkRFYWItVDdi/dFVjVWVqQW5faGg4/PQ"
      },
      {
        name: "Cuttack",
        description:
          "Referred to as the cultural capital of Odisha, Cuttack is a commercial city with plenty of impressive tourist attractions.",
        imageUrl:
          "https://imgs.search.brave.com/Ke2uN1fFlvRuwe0Zbnpt8rNdCY1NiuDWefg_eMaN-wI/rs:fit:1101:648:1/g:ce/aHR0cHM6Ly93d3cu/cmV2di5jby5pbi9i/bG9ncy93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMC8wNS9DdXR0/YWNrLmpwZw"
      },
      {
        name: "Konark",
        description:
          "Konark, in the state of Orissa is renowned world over for the Sun Temple which is also a UNESCO World Heritage Site, the Annual dance festival and its beautiful sandy beaches.",
        imageUrl:
          "https://imgs.search.brave.com/RjdEIGde7sbQcYUADFu5g6wcn-gW5whdCv3JD0Tn-JA/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/aW5jcmVlZGlibGVp/bmRpYS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjAvMTIv/U3VuLVRlbXBsZS1L/b25hcmsxLXNjYWxl/ZC5qcGc"
      },
      {
        name: "Rourkela",
        description:
          "Surrounded by hills and rivers, the city of Rourkela is located in the state of Odisha. Popularly called as the 'Steel City of Odisha' and Ispat Nagar, it is one of the first cities of the country to become commercialized for steel production. ",
        imageUrl: "https://d368ufu7xgcs86.cloudfront.net/13082-1558132702.jpg"
      }
    ],
    Mumbai: [
      {
        name: "Marine Drive",
        description:
          "Starting from the north of Nariman Point and ending at the famous Chowpatty beach, the Marine Drive is a 3km long arc shaped road along the sea coast of South Mumbai. ",
        imageUrl:
          "https://imgs.search.brave.com/znEuKGOuW2YEq_2T1Ep6DaR5tfvhr_wrygc8DF6fkho/rs:fit:1200:720:1/g:ce/aHR0cHM6Ly9jZG4u/ZG5haW5kaWEuY29t/L3NpdGVzL2RlZmF1/bHQvZmlsZXMvc3R5/bGVzL2Z1bGwvcHVi/bGljLzIwMTgvMDcv/MTEvNzAzMjUyLW1h/cmluZWRyaXZlLTA3/MTExOC5qcGc"
      },
      {
        name: "Elephanta Caves",
        description:
          "An UNESCO World Heritage Site, Elephanta Caves is a specimen of rock cut art and architecture from the times of medieval India. It is an island and is located at a distance of 11km from the city of Mumbai.",
        imageUrl:
          "https://www.adotrip.com/public/images/areas/5c53e4197796e-Elephanta%20Caves%20Tours.jpg"
      },

      {
        name: "Gateway of India",
        description:
          "One of the most distinguished monument in Mumbai, The Gateway of India was built in 1924. Now it has become a popular tourist hub in the city. Located at Apollo Bunder Waterfront, the monument overlooks the Arabian Sea in the most beautiful way.",
        imageUrl:
          "https://www.adotrip.com/public/images/areas/5c53ea499d713-Gateway%20Of%20India%20Tours.jpg"
      },
      {
        name: "Kanheri Caves",
        description:
          "Located in the Sanjay Gandhi National Park, the Kanheri Caves in Mumbai is a group of alcoves and rock-cut monuments that illustrate the Buddhist influence on the Indian art and culture.",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Kanheri_Caves_prayer_hall.JPG/1024px-Kanheri_Caves_prayer_hall.JPG"
      },

      {
        name: "Hanging Gardens",
        description:
          "Marked by bushes trimmed into shapes of various animals and proximity to the Arabian Sea are the Hanging Gardens, opposite the Kamla Nehru park. ",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Mumbai_03-2016_22_Hanging_Garden.jpg/1024px-Mumbai_03-2016_22_Hanging_Garden.jpg"
      }
    ],
    Karnataka: [
      {
        name: "Mysore",
        description:
          "Famously known as The City of Palaces, it wouldn’t be wrong to say that Mysore, currently Mysuru, is one of the most important places in the country regarding ancient reigns.",
        imageUrl:
          "https://imgs.search.brave.com/HV6Q_NWsg2K1ep2GRzchJVOMBdYnj1ObQThnFyvjpKc/rs:fit:1200:1080:1/g:ce/aHR0cHM6Ly93d3cu/dHJhdmVsYW5kbGVp/c3VyZWluZGlhLmlu/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE5/LzExL015c29yZS1Q/YWxhY2UtZmVhdHVy/ZS5qcGc"
      },
      {
        name: "Coorg",
        description:
          "Located amidst imposing mountains in Karnataka with a perpetually misty landscape, Coorg is a popular coffee producing hill station.",
        imageUrl:
          "https://imgs.search.brave.com/gh6P1lwCeuK4vwaRdE9Ds-fULf2DzOXAJc2nrE8Y0aY/rs:fit:1200:804:1/g:ce/aHR0cHM6Ly9qZndv/bmxpbmUuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzA3/L2Nvb3JnLWFydGNs/ZS5qcGc"
      },
      {
        name: "Badami",
        description:
          "Located in a valley of rugged red sandstone, surrounding the Agastya Lake, Badami (formerly known as Vatapi) is an archaeological delight owing to its beautifully crafted sandstone cave temples, fortresses and carvings.",
        imageUrl:
          "https://imgs.search.brave.com/-_EpqsvuLnx9sTYRbaAAI5Zx_fT5QGuY49flPgjAVjw/rs:fit:1200:985:1/g:ce/aHR0cHM6Ly93d3cu/a2FybmF0YWthdG91/cmlzbS5vcmcvd3At/Y29udGVudC91cGxv/YWRzLzIwMjAvMTAv/Qmhvb3RhbmF0aGEt/QmFkYW1pLmpwZw"
      },
      {
        name: "Hampi",
        description:
          "Hampi, the city of ruins, is a UNESCO World Heritage Site. Situated in the shadowed depth of hills and valleys in the state of Karnataka, this place is a historical delight for travellers. ",
        imageUrl:
          "https://imgs.search.brave.com/Oi-XmAdd-m3SyjbFWaiQ2wZxgLt5Knqahj3vMhkhXmU/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/dHJpcHNhdnZ5LmNv/bS90aG1iL0hEeUY1/WkhQT2c4N3BaTkFM/ZGJySHRYOWFsZz0v/MjEyMXgxNDE0L2Zp/bHRlcnM6ZmlsbChh/dXRvLDEpL0dldHR5/SW1hZ2VzLTcyODkw/NjE2OS01OWEwMzVk/NTBkMzI3YTAwMTAw/NjM2OTQuanBn"
      },
      {
        name: "Gokarna",
        description:
          "With its pristine beaches and breathtaking landscapes, Gokarna is a Hindu pilgrimage town in Karnataka and a newly found hub for beach lovers and hippies.",
        imageUrl:
          "https://imgs.search.brave.com/qF-FAY6W9CdR2e9v8DKT3cmhspaTFr3RY4zD9p8aOv0/rs:fit:1200:628:1/g:ce/aHR0cHM6Ly9zdGF0/aWMyLnRyaXBvdG8u/Y29tL21lZGlhL3Ry/YW5zZmVyL2ltZy9P/Z0RhdGEvMTUzNzE1/MzA2MV9mYWFjZWJv/b2syXzExLnBuZw"
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
        <h2>Click any state button to see the tourist spots in that state.</h2>
      </div>
      <div className="title-container">
        <button
          className="title-button state1"
          name="Odisha"
          onClick={showTouristPlaces}
        >
          Odisha
        </button>
        <button
          className="title-button state2"
          name="Mumbai"
          onClick={showTouristPlaces}
        >
          Mumbai
        </button>
        <button
          className="title-button state3"
          name="Karnataka"
          onClick={showTouristPlaces}
        >
          Karnataka
        </button>
      </div>
      <hr></hr>
      <ul className="places">
        {Object.values(touristSpots[state]).map((place) => (
          <li className="place" key = {place.name}>
            <img
              className="place-Image"
              src={place.imageUrl}
              alt="not available"
            ></img>
            <h2 className="place-title">{place.name}</h2>
            <p className="place-description">{place.description}</p>
          </li>
        ))}
      </ul>
    <footer className="footer">
        Made by <a href="https://pratik-dash-portfolio.netlify.app/">Pratik</a>{" "}
        using React JS
        <ul className="social-links">
          <li>
            <a href="https://twitter.com/Prateek24675372" target="_blank">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/pratik-dash-5a7217134/"
              target="_blank"
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>
          <li>
            <a href="https://github.com/Pratik-Dash" target="_blank">
              {" "}
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
