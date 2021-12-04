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
        name: "Nick Allen | Mech Lead | Class of 2021",
        title: "Submarine Officer | US Navy",
        description:
          "Nick was formerly the mechanical subteam lead on CUSail, where he \
          worked mainly on sail design and manufacturing. He is now in Navy \
          Nuclear Power School, learning how to operate a nuclear powered \
          submarine.",
        iconSize: [50, 50],
        source: "/images/alumni/nick.png",
      },
      geometry: {
        type: "Point",
        coordinates: [-79.947364, 32.958598],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Halle Buescher | Mech | Class of 2021",
        title: "Aeronautical Engineer | HX5",
        description:
          "Halle was on the CU Sail mech team for 2 years. She is now living in \
          Cleveland and working as a contractor at HX5 at NASA Glenn Research \
          Center.",
        iconSize: [50, 50],
        source: "/images/alumni/halle.png",
      },
      geometry: {
        type: "Point",
        coordinates: [-81.85820951791449, 41.41623812805598],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Courtney McBeth | Nav Lead | Class of 2021",
        title: "Ph.D Candidate in Computer Science | University of Illinois Urbana-Champaign",
        description:
          "Courtney was previously the CUSail Navigation subteam lead. On the \
          team, she primarily worked on developing the navigation algorithm and \
          sensor integration. She is currently a graduate student at UIUC, \
          where she does research into multi-robot motion planning problems.",
        iconSize: [50, 50],
        source: "/images/alumni/courtney.png",
      },
      geometry: {
        type: "Point",
        coordinates: [-88.22496957475917, 40.113958675193565],
      },
    },

    {
      type: "Feature",
      properties: {
        name: "Devin Dean | Mech | Class of 2021",
        title: "Ph.D in Applied Physics | Stanford University",
        description:
          "",
        iconSize: [50, 50],
        source: "/images/alumni/devin.png",
      },
      geometry: {
        type: "Point",
        coordinates: [-122.17372440028963, 37.42890813674901],
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