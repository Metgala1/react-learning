import type { ReactNode } from "react";

//Testiing how children can be used as props
function Card({children} : {children : ReactNode}) {
        
    return (
        <div>
            {children}
        </div>
    )
}

export default Card