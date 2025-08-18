import { PublicPageTitle } from '../../components/PublicPageTitle';
import { MovieCard } from '../../components/MovieCard';
import { useContext } from 'react';
import { CategoriesContext } from '../../context/categories/CategoriesContext';
import { useParams } from 'react-router';

export function CategoryInnerPage() {
    const { publicCategories } = useContext(CategoriesContext);
    const { category } = useParams();

    const categoryData = publicCategories.find(c => c.url_slug === category);

    if (!categoryData) {
        return (
            <main className='min-page-height'>
                <PublicPageTitle title="Kategorija nerasta" />

                <div className="container">
                    <div className="row">
                        <p>Norima kategorija "{category}" neegzistuoja.</p>
                    </div>
                </div>
            </main>
        );
    }

    const moviesData = [{}, {}];

    return (
        <main className='min-page-height'>
            <PublicPageTitle title={categoryData.title} />

            <div className="container">
                <div className="row">
                    {moviesData.map((movie, index) => <MovieCard key={index} movie={movie} />)}
                </div>
            </div>
        </main>
    );
}