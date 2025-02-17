import "./styles.css"

type Props = {
    name : string;
}

export default function MainCard({name}: Props) {

    return (
        <div className="card">
            <h2>{name}</h2>
        </div>
    );
}