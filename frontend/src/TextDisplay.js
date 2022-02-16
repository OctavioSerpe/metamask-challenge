const TextDisplay = (props) => {
    return (
        <div>
            <h3>
                {props.title}
            </h3>
            <h1>
                <strong>
                    {props.text}
                </strong>
            </h1>
        </div>
    );
};

export default TextDisplay;