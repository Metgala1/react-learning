type CounterButtonProps = {
    onIncrease: () => void
}

function CounterButton({onIncrease} : CounterButtonProps) {

    return (
        <button onClick={onIncrease}>Increase</button>
    )
    
}


export default CounterButton