function Faculty(props)
{
    return(
       <div>
        <h2>Fac-Name : {props.name}</h2>
        <h2>Subject : {props.subject}</h2>
        <h2>Experience: {props.exp}</h2>
       </div>
    )
};

export default Faculty;