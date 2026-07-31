
function InputTest({ estado, setEstado }) {

    return (
        <>
            <h1>{estado || 'Digite algo...'}</h1>
            <input value={estado} onChange={(e) => setEstado(e.target.value)} />
        </>
    )
}

export default InputTest