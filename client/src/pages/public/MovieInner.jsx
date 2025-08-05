import imgUrl from '../../assets/hero.png';

export function MovieInner() {
    return (
        <main className='min-page-height'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6 mb-5">
                        <strong className="d-inline-block mb-2 text-primary-emphasis">Horror</strong>
                        <h1 className="display-2">Saw</h1>
                        <p className="card-text mb-5">Two men awaken to find themselves on the opposite sides of a dead body, each with specific instructions to kill the other, escape or face the consequences. These two are the latest contestants in Jigsaw's games.</p>
                        <div className="mb-1 text-body-secondary">Released: 1972-06-16</div>
                        <div className="mb-1 text-body-secondary">Duration: 1 hour 4 minutes</div>
                        <div className="mb-1 text-body-secondary">Rating: 5.0 ⭐</div>
                    </div>
                    <img src={imgUrl} alt="Movie thumbnail" className="col-12 col-lg-4 object-fit-contain" />
                </div>
            </div>
        </main>
    );
}