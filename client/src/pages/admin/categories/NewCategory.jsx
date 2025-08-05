import { AdminPageTitle } from "../../../components/AdminPageTilte";
import { AdminCategoryForm } from "../../../components/forms/AdminCategoryForm";

export function AdminNewCategoryPage() {
    return ( 
        <main>
            <AdminPageTitle title={'New category'} />

            <div className="container">
                <div className="row">
                    <AdminCategoryForm />
                </div>
            </div>
        </main>
    );
}