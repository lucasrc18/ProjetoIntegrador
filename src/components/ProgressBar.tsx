import { HTMLAttributes } from 'react';

import './styles/progressbar.scss';

type ProgressBarProps = HTMLAttributes<HTMLDivElement> & {
    bg: string,
    progress: number
}

export default function ProgressBar({bg, progress, ...props}: ProgressBarProps) {
    const title = `Progresso: ${progress}%`;
    
    return (
        <div title={title} className="progress-bar">
            <div 
                className="inner-bar" title={title}
                style={{ backgroundColor: bg, width: `${progress}%` }} {...props}>
                &nbsp;
                </div>
        </div>
    )
}