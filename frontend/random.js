export default async function fetchData (compSymbol) {
    console.log("gggg")
    try {
      const data = await fetch("https://nepshareext.vercel.app/scrapeshare", {
    //   const data = await axios.post("http://localhost:4000/scrapeshare", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ symbol: compSymbol }),
      });
      const res = await data.json()
      return res;
    } catch (error) {
      console.log(error);
    }
  };