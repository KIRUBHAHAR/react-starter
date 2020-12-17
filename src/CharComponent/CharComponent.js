const charStyle = {
    display:'inline-block',
    padding: '16px',
    margin: '16px',
    border: '2px solid'
  }

const CharComponent = (prop) =>{
    return (
            <p onClick={prop.clickDelete} style={charStyle} value={prop.letter}>
                {prop.letter}</p>
    );
}

export default CharComponent;