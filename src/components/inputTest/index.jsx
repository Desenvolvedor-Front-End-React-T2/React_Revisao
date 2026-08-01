
function InputTest({ name, state, setState }) {

    return (
        <>
            <label>{name || 'Campo a ser preenchido'}</label>
            <input
                value={state.name}
                onChange={(e) => setState(state, name, e.target.value)}
                style={{ width: '150px' }}
            />
            <p>{state.name || 'Digite algo...'}</p>
        </>
    )
}

export default InputTest