const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '194026999601d24215363e12f623bf46',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;