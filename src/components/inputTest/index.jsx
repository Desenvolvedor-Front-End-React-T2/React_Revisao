
function InputTest({ estado, setEstado }) {

    return (
        <>
            <input
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
                style={{ width: '150px' }}
            />
            {/* <p>{estado || 'Digite algo...'}</p> */}
        </>
    )
}

export default InputTest