import { HTMLAttributes } from "react";
import { Link } from "react-router-dom";

import './styles/routed-linked-button.scss';

type RouteLinkedButtonProps = HTMLAttributes<HTMLAnchorElement> & {
    route?: string,
    label?: string,
    children?: string
}

export default function RouteLinkedButton({route, label, children, ...props}: RouteLinkedButtonProps) {
    if(route == undefined || route == "")
        route = "/"
    
    if(children)
        if (label)
            if(route == "/")
                label = "Home"
            else
                label = route
    else
        label = children
    
    const currentRoute = window.location.pathname

    if(route == currentRoute)
        return (
            <Link className="RoutedLinkedButton current" {...props} to={route}>
                <p>
                    {label}
                </p>
            </Link>
        )
    
    return (
        <Link className="RoutedLinkedButton" {...props} to={route}>
            <p>
                {label}
            </p>
        </Link>
    );
}