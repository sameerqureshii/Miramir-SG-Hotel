  const parser = new DOMParser();

  async function initMap() {
  // Request needed libraries.
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary(
    "marker",
  );
  const map = new Map(document.getElementById("map"), {
    center: { lat: 34.28355888900147, lng: 0 },
    zoom: 2,
    mapId: "4504f8b37365c3d0"
  });
  // Each PinElement is paired with a MarkerView to demonstrate setting each parameter.
  // Default marker with title text (no PinElement).
// Adjust the scale.
  const pinScaled = new PinElement({
    scale: 1.5,
  });
  const markerViewWithText = new AdvancedMarkerElement({
    map, 
    position: { lat: 36.320518021141474, lng: 74.65036957909375 },
    title: "Miramir Hotel, Hunza Valley, Pakistan",
    content: pinScaled.element,
  });
  const Iceland = new AdvancedMarkerElement({
    map,
    position: { lat: 64.15435915112778, lng: -21.86618588113325 },
    title: "Miramir Hotel, Reykjavík, Iceland",
  });
  // Change the background color.
//   const pinBackground = new PinElement({
//     background: "#FBBC04",
//   });
  const Maldives = new AdvancedMarkerElement({
    map,
    position: { lat: 4.213379484918697, lng: 73.54452191950787 },
    title: "Miramir Hotel, Hulhumale, Maldives",
    // content: pinBackground.element,
  });
  // Change the border color.
//   const pinBorder = new PinElement({
//     borderColor: "#137333",
//   });
  const Switzerland = new AdvancedMarkerElement({
    map,
    position: { lat: 47.351134657809865, lng: 8.534328171379666 },
    title: "Miramir Hotel, Zürich, Switzerland",
    // content: pinBorder.element,
  });
  // Change the glyph color.
//   const pinGlyph = new PinElement({
//     glyphColor: "white",
//   });
  const Australia = new AdvancedMarkerElement({
    map,
    position: { lat: -33.701690600671874, lng: 151.3054353991364302 },
    title: "Miramir Hotel, Sydney, Australia",
    // content: pinGlyph.element,
  });
  // Hide the glyph.
//   const pinNoGlyph = new PinElement({
//     glyph: "",
//   });
  const Africa = new AdvancedMarkerElement({
    map,
    position: { lat: -34.098205563761134, lng: 18.36462339134375 },
    title: "Miramir Hotel, Cape Town, South Africa",
    // content: pinNoGlyph.element,
  });
  const Argentina = new AdvancedMarkerElement({
    map, 
    position: { lat: -34.55409459276377, lng: -58.42713705578115 },
    title: "Miramir Hotel, Buenos Aires, Argentina",
  });
  const Canada = new AdvancedMarkerElement({
    map, 
    position: { lat: 53.679725361558404, lng: -129.9151853981082 },
    title: "Miramir Hotel, Pitt Island, Canada",
  });
  const USA = new AdvancedMarkerElement({
    map, 
    position: { lat: 40.757966544570685, lng: -73.98553187564623 },
    title: "Miramir Hotel, Times Square, NY, USA",
  });
  const Japan = new AdvancedMarkerElement({
    map, 
    position: { lat: 35.65776976567908, lng: 139.7455401835494 },
    title: "Miramir Hotel, Tokyo, Japan",
  });
  const Russia = new AdvancedMarkerElement({
    map, 
    position: { lat: 55.688008151576106, lng: 37.76434543493652 },
    title: "Miramir Hotel, Moscow, Russia",
  });
  const China = new AdvancedMarkerElement({
    map, 
    position: { lat: 22.568774550012808, lng: 114.20347982916671 },
    title: "Miramir Hotel, Shenzhen, China",
  });
  const Finland = new AdvancedMarkerElement({
    map, 
    position: { lat: 65.23538821875104, lng: 25.40935514314614 },
    title: "Miramir Hotel, Oulu, Finland",
  });
  const Brazil = new AdvancedMarkerElement({
    map, 
    position: { lat: -22.997249891728423, lng: -43.362295684864094 },
    title: "Miramir Hotel, Rio de Janeiro, Brazil",
  });
  const Turkey = new AdvancedMarkerElement({
    map, 
    position: { lat: 39.76001254989892, lng: 32.7407193622451 },
    title: "Miramir Hotel, Ankara, Turkey",
  });
  const UAE = new AdvancedMarkerElement({
    map, 
    position: { lat: 25.182894125791705, lng: 55.26104755234085 },
    title: "Miramir Hotel, Dubai, UAE",
  });

  const NewZealand = new AdvancedMarkerElement({
    map, 
    position: { lat: -36.97464079188568, lng: 174.9408825482842 },
    title: "Miramir Hotel, Auckland, New Zealand",
  });

  const Malaysia = new AdvancedMarkerElement({
    map, 
    position: { lat: 3.208423422565151, lng: 101.65606715960344 },
    title: "Miramir Hotel, Kuala Lumpur, Malaysia",
  });

  const Spain = new AdvancedMarkerElement({
    map, 
    position: { lat: 40.379802256150136, lng: -3.6575821186749873 },
    title: "Miramir Hotel, Madrid, Spain",
  });

  const Peru = new AdvancedMarkerElement({
    map, 
    position: { lat: -11.973917846503086, lng: -76.7104369103998 },
    title: "Miramir Hotel, Lima, Peru",
  });
}    
initMap();