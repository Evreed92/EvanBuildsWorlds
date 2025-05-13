import Link from 'next/link'
import radialStyles from '../appComponents/radialStyles.module.css'

export default function RadialMenu(){ 
    const radius = 250;
    const menuItems = ['FIRST', 'SECOND','THIRD', 'FOURTH', 'FIFTH'];

    
    return(
        <div>
                {menuItems.map((item, index) => 
                    {
                        const angle = (index/menuItems.length)*2*Math.PI;
                        const x = radius * Math.cos(angle);
                        const y = radius * Math.sin(angle);
                        return(
                            <Link 
                                href='blog'
                                className={radialStyles.listElement}
                                style={{ transform: `translate(${x}px, ${y}px)`}}
                            >
                                {item}
                            </Link>
                        )   
                    }
                )}
        </div>
    )
}