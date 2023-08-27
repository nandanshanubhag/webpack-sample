export async function getJoke() {
  try {
    const res = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    });
    const data = await res.json();
    document.getElementById("joke").innerHTML = data.joke;
  } catch (error) {}
}
