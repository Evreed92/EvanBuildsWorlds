import Link from 'next/link'
import radialStyles from '../appComponents/radialStyles.module.css'


export default function RadialMenu(){ 
    const radius = 250;
    const menuItems = ['Blog', 'Verisium', 'CV', 'Eteria'];
    
    return(
        <div className={radialStyles.centerWrapper}>
            <div className={radialStyles.center}>Logo</div>
                {menuItems.map((item, index) => 
                    {
                        const angleDegrees = (360/menuItems.length)*index - 90;
                        const angle = (angleDegrees * Math.PI)/180;
                        const x = radius * Math.cos(angle);
                        const y = radius * Math.sin(angle);
                        return(
                            <Link 
                                key={item}
                                href={item.toLowerCase()}
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