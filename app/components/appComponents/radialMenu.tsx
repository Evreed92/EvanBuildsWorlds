import Link from 'next/link'
import radialStyles from '../appComponents/radialStyles.module.css'

export default function RadialMenu(){ 
    const radius = 200;
    const menuItems = ['FIRST', 'SECOND','THIRD', 'FOURTH', 'FIFTH'];

    
    return(
        <div className={radialStyles.centerWrapper}>
                {menuItems.map((item, index) => 
                    {
                        const angleDegrees = (360/menuItems.length)*index;
                        const angle = (angleDegrees * Math.PI)/180;
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