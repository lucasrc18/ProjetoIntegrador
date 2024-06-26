import { HTMLAttributes } from 'react';

import './styles/progressbar.scss';

type ProgressBarProps = HTMLAttributes<HTMLDivElement> & {
    bg: string,
    progress: number,
    title?: string
}

export default function ProgressBar({bg, progress, title, ...props}: ProgressBarProps) {
    if(!title)
        title = `Progresso: ${progress}%`;
    else
        title = `${title}: ${progress}%`;

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