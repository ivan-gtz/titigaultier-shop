


export const generatePaginationNumbers = ( currentPage: number, totalPages: number ) => {


    if ( totalPages <= 7 ) {
        return Array.from({ length: totalPages }, (_, i) => i + 1); // [1,2,3,4,5,6,7];
    }

    // si la página actual está entre las primeras 3 páginas
    // mostrar las primeras 3, puntos supensivos y las ultimas 2

    if ( currentPage <= 3 ) {
        return [1,2,3,'...', totalPages -1, totalPages];
    }

    // mostrar las primeras 2, puntos suspensivos, las últimas 3 páginas
    if ( currentPage >= totalPages -2 ) {
        return [1,2,'...', totalPages -2, totalPages -1, totalPages];
    }

    //mostrat la primera página , puntos suspensivos, la pagina actual y vecinos
    return [
        1,
        '...',
        currentPage -1,
        currentPage,
        currentPage +1,
        totalPages

    ]
}