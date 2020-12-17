
const ValidationComponent = (prop) =>{
    let lengthDescription = prop.length > 0 ? prop.length > 5 ? <p>Lenth is too long</p> : <p>Lenth is too Short</p> : <p>String is empty !</p>;

    return (
        <div>
            {lengthDescription}
        </div>
    );
}

export default ValidationComponent;