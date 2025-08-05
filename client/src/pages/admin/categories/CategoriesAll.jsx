import { AdminCategoriesTable } from "../../../components/AdminCategoriesTable";
import { AdminPageTitle } from "../../../components/AdminPageTilte";

export function AdminCategoriesAllPage() {
    return ( 
        <main>
            <AdminPageTitle title={'All categories'} />
            <AdminCategoriesTable />
        </main>
    );
}