
function InputTest({ name, state, setState }) {

    return (
        <>
            <label>{name || 'Campo a ser preenchido'}</label>
            <input
                value={state}
                onChange={(e) => setState(e.target.value)}
                style={{ width: '150px' }}
            />
            {/* <p>{estado || 'Digite algo...'}</p> */}
        </>
    )
}

export default InputTest