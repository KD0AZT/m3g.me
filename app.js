const { useState } = React;

const Test = () => {
    const [color, setColor] = useState('');
    const [colorName, setColorName] = useState('rgba(0, 0, 255, .3)');

    const handleChangeColor = event => {
        setColor(event.target.value);
    };

    const handleClickColor = event => {
        event.preventDefault();
        document.getElementById('bottom').style.backgroundColor = color;
        setColorName(color);
    }

    return (
        <div>
            <div className='item'>
                <p id='top' >Hello there!</p>
            </div>
            <div className='item' id='middle' >
                <p id='midTopText'>Welcome to my ReactJS test page.</p>
                <p id='midBotText'>This is where I will test what I&lsquo;ve learned in React and will be updated semi-regularly.</p>
            </div>
            <div className='item' id='bottom'>
                <div id='form'>
                    <label htmlFor='backgroundColor'>Change Box Color:</label>
                    <input type='text' name='backgroundColor' id='backgroundColor' onChange={handleChangeColor} />
                    <button type='submit' onClick={handleClickColor}>Submit</button>
                </div>
                <p id='colorIndicator'>Current Color: {colorName}</p>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('test-area'));
root.render(<Test />);
