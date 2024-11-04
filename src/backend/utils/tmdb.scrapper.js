export async function tmdb(imdbId) {
    try {
        console.log('TMDB Token:', process.env.TMDBTOKEN);
        // Build the TMDB URL with the provided ID
        const response = await fetch(`https://api.themoviedb.org/3/find/${imdbId}?external_source=imdb_id&language=en`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${process.env.TMDBTOKEN}`, // Replace with your actual token
                'Content-Type': 'application/json'
            }
        });


        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const jsonData = await response.json();
        console.log(response.headers);
        console.log(jsonData);
        return jsonData;
    } catch (error) {
        console.error('Error:', error.message);
        return null;
    }
};
