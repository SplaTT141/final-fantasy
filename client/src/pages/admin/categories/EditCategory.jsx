import { AdminPageTitle } from "../../../components/AdminPageTilte";

export function AdminEditCategoryPage() {
    return ( 
        <main>
            <AdminPageTitle title={'All categories'} />
            
            <div className="container">
                <div className="row">
                    <AdminCategoryForm />
                </div>
            </div>
        </main>
    );
}