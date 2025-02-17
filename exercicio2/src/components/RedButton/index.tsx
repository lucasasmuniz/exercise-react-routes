import "./styles.css"

type Props = {
    name : string
}

export default function RedButton({name} : Props){
    return(
        <button className="btn-red">
            {name}
        </button>
    );
}