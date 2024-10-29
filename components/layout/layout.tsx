import { Fragment, ReactNode } from "react";
import MainNavigation from "./main-navigation";

export default function Layout(props:{children: ReactNode}) {
    return <Fragment>
        <MainNavigation/>
        <main>
            {props.children}
        </main>
    </Fragment>
}