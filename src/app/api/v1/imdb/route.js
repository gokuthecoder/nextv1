import { imdb } from "../../../../backend/utils/imdb.scrapper";

// app/api/users/route.js
export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const imdbId = searchParams.get("id");

  if (!imdbId) {
    return new Response(JSON.stringify({ error: "IMDb ID is required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

 try {
    // Fetch IMDb data
    const imdbData = await imdb(imdbId);
    delete imdbData["@context"];

    return new Response(JSON.stringify({ message: "IMDB data loaded !", data: imdbData }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
