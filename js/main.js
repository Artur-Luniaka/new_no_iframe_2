// Main JavaScript file
document.addEventListener("DOMContentLoaded", () => {
  console.log("Crazy Parking Jam website loaded!");

  // Import page-specific JavaScript
  const currentPage = window.location.pathname;

  if (currentPage.endsWith("index.html") || currentPage.endsWith("/")) {
    import("./command-center.js");
  } else if (currentPage.includes("warzone-updates.html")) {
    import("./warzone-updates.js");
  } else if (currentPage.includes("mission-briefing.html")) {
    import("./mission-briefing.js");
  } else if (currentPage.includes("secure-comms.html")) {
    import("./secure-comms.js");
  } else if (currentPage.includes("intel-protocols.html")) {
    import("./intel-protocols.js");
  } else if (currentPage.includes("arsenal-loadout.html")) {
    import("./arsenal-loadout.js");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const bar = document.getElementById("cookie-bar");
  const btn = document.getElementById("cookie-accept");

  if (!localStorage.getItem("cookieAccepted")) {
    bar.style.display = "flex";
  }

  btn.addEventListener("click", () => {
    localStorage.setItem("cookieAccepted", "true");
    bar.style.display = "none";
  });
});
