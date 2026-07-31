
function InputTest({ estado, setEstado }) {

    return (
        <>
            <input value={estado} onChange={(e) => setEstado(e.target.value)} />
            {/* <p>{estado || 'Digite algo...'}</p> */}
        </>
    )
}

export default InputTest