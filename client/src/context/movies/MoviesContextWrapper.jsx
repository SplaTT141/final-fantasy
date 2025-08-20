import { useContext, useEffect, useState } from "react";
import { MoviesContext } from "./MoviesContext";
import { initialMoviesContext } from "./initialMoviesContext";
import { UserContext } from "../user/UserContext";
import { SERVER_ADDRESS } from "../../env";

export function MoviesContextWrapper(props) {
    const [publicMovies, setPublicMovies] = useState(initialMoviesContext.publicMovies);
    const [adminMovies, setAdminMovies] = useState(initialMoviesContext.adminMovies);

    const { isLoggedIn } = useContext(UserContext);

    function updatePublicMovies() {
        fetch(SERVER_ADDRESS + '/api/movies', {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    setPublicMovies(() => data.movies);
                }
            })
            .catch(console.error);
    }

    function updateAdminMovies() {
        fetch(SERVER_ADDRESS + '/api/admin/movies', {
            method: 'GET',
            credentials: 'include',
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    setAdminMovies(() => data.movies);
                }
            })
            .catch(console.error);
    }

    function deletePublicCategory(urlSlug) {
        setPublicMovies(currentList => [...currentList.filter(c => c.url_slug !== urlSlug)]);
    }

    function deleteAdminCategory(urlSlug) {
        setAdminMovies(currentList => [...currentList.filter(c => c.url_slug !== urlSlug)]);
    }

    function getPublicCategoryByUrlSlug(url) {
        return publicMovies.find(cat => cat.url_slug === url);
    }

    function getAdminCategoryByUrlSlug(url) {
        return adminMovies.find(cat => cat.url_slug === url);
    }

    useEffect(updatePublicMovies, []);

    useEffect(() => {
        if (isLoggedIn) {
            updateAdminMovies();
        } else {
            setAdminMovies(() => initialMoviesContext.adminMovies);
        }
    }, [isLoggedIn]);

    const values = {
        publicMovies,
        adminMovies,
        getPublicCategoryByUrlSlug,
        getAdminCategoryByUrlSlug,
        updatePublicMovies,
        updateAdminMovies,
        deletePublicCategory,
        deleteAdminCategory,
    };

    return (
        <MoviesContext.Provider value={values}>
            {props.children}
        </MoviesContext.Provider>
    )
}