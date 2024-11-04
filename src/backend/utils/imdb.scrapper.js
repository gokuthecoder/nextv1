
export async function imdb(imdbId) {

    try {
        // Build the IMDb URL with the provided ID
        const response = await fetch(`https://www.imdb.com/title/${imdbId}`);

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const html = await response.text();

        // Extract JSON data from the <script type="application/ld+json"> tag
        const regex = /<script type="application\/ld\+json">(.*?)<\/script>/s;
        const match = html.match(regex);

        if (!match) {
            throw new Error('No JSON content found');
        }

        const jsonData = JSON.parse(match[1]);

        return jsonData;
    } catch (error) {
        console.error('Error:', error.message);
        return null; // Return null if there’s an error
    }
}
