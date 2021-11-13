/*
  Relevant examples
  https://docs.mapbox.com/mapbox-gl-js/example/custom-marker-icons/
  https://docs.mapbox.com/mapbox-gl-js/api/markers/
  https://docs.mapbox.com/mapbox-gl-js/example/popup-on-click/
  https://docs.mapbox.com/mapbox-gl-js/example/popup/
  https://docs.mapbox.com/mapbox-gl-js/example/center-on-feature/
*/
mapboxgl.accessToken =
  "pk.eyJ1IjoiY3VzYWlsIiwiYSI6ImNrdGc5aDVzNTBnMXkycG9sZWxxdzRtejQifQ.TVmAAT0FjWRPjakxOHHJqA";

const geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        name: "Will Salcedo | Navigation | Class of 2023",
        title: "Full Team Lead at CUSail",
        description:
          "Will is a Freshman from the Jersey Shore. Aside from being a pro at\
          putting in beach umbrellas, he also enjoys playing ping-pong and\
          marching trumpet in the BRMB.",
        iconSize: [50, 50],
        source: "/images/alumni/will.png",
      },
      geometry: {
        type: "Point",
        coordinates: [-76.48281091928457, 42.4439627618661],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Srikar Yallala | Business and Operations | Class of 2023",
        title: "Software Engineer at Tech Company",
        description:
          "Srikar is from Omaha, Nebraska. Outside of\
        CUSail, he is a part of Cayuga Capital and enjoys watching\
        soccer and basketball.",
        iconSize: [50, 50],
        source: "/images/alumni/srikar.png",
      },
      geometry: {
        type: "Point",
        coordinates: [-122.41939396668471, 37.77194981145066],
      },
    },
    // {
    //   type: "Feature",
    //   properties: {
    //     name: "Meghana Gavirneni | Business and Operations | Class of 2023",
    //     title: "Philosopher at Philosophists Inc.",
    //     description:
    //       "Meghana is a sophomore from Ithaca, NY. In her\
    //     free time she enjoys visiting the local gorges, watching\
    //     Netflix, and most of all eating grilled cheese.",
    //     iconSize: [50, 50],
    //     source: "/images/headshots/meghana.jpg",
    //   },
    //   geometry: {
    //     type: "Point",
    //     coordinates: [-74.00567219902246, 40.71474287940977],
    //   },
    // },
    {
      type: "Feature",
      properties: {
        name: "Aleksandra Nasiukiewicz | Mechanical | Class of 2023",
        title: "Subteam Lead at CUSail",
        description:
          "Aleksandra “Ola” is from Queens New York. Originally from Poland,\
          she loves making Polish cultural foods and hiking the Tatry\
          mountains. She also enjoys rock climbing and watching historical\
          dramas.",
        iconSize: [50, 50],
        source: "/images/alumni/aleksandra.png",
      },
      geometry: {
        type: "Point",
        coordinates: [-74.00567219902246, 40.71474287940977],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Crystal Wu | Business and Operations | Class of 2022",
        title: "Designer at Da Designers",
        description:
          "Crystal is from a hamlet in Dutchess County, New York. She\
          like fun earrings, smoothies, and watching movies. Outside\
          of CUSail, she also involved with Alpha Phi Omega and\
          Cornell IEEE. While not in class, Crystal can be found\
          napping, playing Pentris, or designing stickers.",
        iconSize: [50, 50],
        source: "/images/alumni/crystal.png",
      },
      geometry: {
        type: "Point",
        coordinates: [-73.80713416114955, 41.58028319040764],
      },
    },
    // {
    //   type: "Feature",
    //   properties: {
    //     name: "Daniel Tuan | Business and Operations | Class of 2024",
    //     title: "Businessman at IB Inc.",
    //     description:
    //       "Daniel is from Germantown, Maryland (about an hour away\
    //       from D.C.). Outside of CUSail, he is involved with CSA. In\
    //       his free time, he enjoys finding new restaurants, learning\
    //       about entrepreneurship, golfing, and being overly\
    //       competitive about the NYT Daily Mini crossword.",
    //     iconSize: [50, 50],
    //     source: "/images/headshots/daniel.jpg",
    //   },
    //   geometry: {
    //     type: "Point",
    //     coordinates: [-87.63720465675507, 41.88312422552314],
    //   },
    // },
    {
      type: "Feature",
      properties: {
        name: "Fabrizio Casanova | Navigation | Class of 2023",
        title: "Subteam Lead at CUSail",
        description: "Fabrizio is from Venezuela by way of Miami, Florida. You\
        can usually find him napping in Olin in between Calculus sets. Outside\
        of CUSail, he enjoys bowling, hiking, and arguing that Terraria is\
        better than Minecraft.",
        iconSize: [50, 50],
        source: "/images/alumni/fabrizio.png",
      },
      geometry: {
        type: "Point",
        coordinates: [-96.79293585792696, 32.77026063269015],
      },
    },
  ],
};

const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/cusail/cktg9k29a0pee18oaq1u4qk8f", // style URL
  center: [-100, 40], // starting position [lng, lat]
  zoom: 3, // starting zoom
});

map.addControl(new mapboxgl.NavigationControl({showCompass: false}));

// Add markers to the map.
for (const marker of geojson.features) {
  // Create a DOM element for each marker.
  const el = document.createElement("div");
  const width = marker.properties.iconSize[0];
  const height = marker.properties.iconSize[1];
  const source = marker.properties.source;
  const coord = marker.geometry.coordinates;
  el.className = "marker";
  el.style.backgroundImage = `url(${source})`;
  el.style.width = `${width}px`;
  el.style.height = `${height}px`;
  el.style.backgroundSize = "100%";

  el.addEventListener("click", (e) => {
    const popup = document.getElementsByClassName("mapboxgl-popup"); //Closes any other popup
    if (popup.length) {
      popup[0].remove();
    }

    new mapboxgl.Popup({ offset: [0, -15] }, { closeOnClick: true })
      .setLngLat(coord)
      .setHTML(
        `
        <strong class="Name">${marker.properties.name}</strong> <br>
        <strong class="Title">${marker.properties.title}</strong>
        <a target="_blank" href="https://www.linkedin.com/in/cj-lee/">
          <img class="linkedin-logo" src="../images/alumni/linkedinlogo.svg" alt="LinkedIn Logo">
        </a>
        <p style="font-size:12px"}>${marker.properties.description}</p>
        `
      )
      .addTo(map);
    e.stopPropagation(); // Needed to get popup to show up cuz of weird bug https://github.com/mapbox/mapbox-gl-js/issues/5289

    map.flyTo({
      speed: 1.5,
      center: coord,
      zoom: 12,
      essential: true, // this animation is considered essential with respect to prefers-reduced-motion
    });
  });

  // Add markers to the map.
  new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .addTo(map);
    
}