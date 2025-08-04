import imgUrl from '../assets/hero.png';

export function MovieCard({ movie }) {
    return (
        <div className="col-12 col-md-6">
            <div
                className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col-12 col-lg-8 p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-primary-emphasis">Crime</strong>
                    <h3 className="mb-0">The Godfather</h3>
                    <p className="card-text mb-auto">The aging patriarch of an organized crime dynasty transfers
                        control of his clandestine empire to his reluctant son.
                    </p>
                    <div className="mb-1 text-body-secondary">Released: 1972-06-16</div>
                    <div className="mb-1 text-body-secondary">Duration: 2 hours 55 minutes</div>
                    <div className="mb-1 text-body-secondary">Rating: 5.0 ⭐</div>
                    <a href="/movies/godfather" className="icon-link gap-1 icon-link-hover stretched-link">
                        Continue reading
                    </a>
                </div>
                <div className="col-4 d-none d-lg-block">
                    <img className="w-100 h-100 object-fit-cover"
                        src={imgUrl} alt="The Godfather" />
                </div>
            </div>
        </div>
    );
}