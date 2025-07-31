import { Outlet } from "react-router"

export function PublicLayout() {
    return (
        <>
            <header>Header Content</header>
            <Outlet />
            <footer>Footer Content</footer>
        </>
    )
}