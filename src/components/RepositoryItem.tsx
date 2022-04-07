interface RepositoryItemProps {
    repository: {
        name: string;
        description: string;
        html_url: string;
    }
}

export function RepositoryItem(props: RepositoryItemProps) {
    return(
        <li className="item">
            <strong className="name">{props.repository.name}</strong>
            <p className="description">{props.repository.description}</p>
            <a href={props.repository.html_url} target="_blank">Acessar</a>
        </li>
    );
}