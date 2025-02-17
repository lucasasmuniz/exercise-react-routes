import "./styles.css"

type Props = {
    name : String;
}

export default function MainCard({name}: Props) {

    return (
        <div className="container card">
            <h2>{name}</h2>
        </div>
    );
}