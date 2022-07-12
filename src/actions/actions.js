export const SET_MOVIES='SET_MOVIES';
export const SET_FILTERS='SET_FILTERS';

export const setMovies=(value)=>{
    return {type:SET_MOVIES, value}
}

export const setFilters=(value)=>{
    return {type:SET_FILTERS, value}
}