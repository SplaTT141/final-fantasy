import { AdminMoviesTable } from "../../../components/AdminMoviesTable";
import { AdminPageTitle } from "../../../components/AdminPageTilte";

export function AdminMoviesAllPage() {
    return ( 
        <main>
            <AdminPageTitle title={'All movies'} />
            <AdminMoviesTable />
        </main>
    );
}