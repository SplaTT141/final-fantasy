import { createContext } from "react";
import { initialMoviesContext } from "./initialCategoriesContext";

export const MoviesContext = createContext(initialMoviesContext);