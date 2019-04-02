export const DetailsDiv = props => {
    const { data } = props
    return (
        <div className='pt-3'>
            {data ?
                <div>
                    <h3>Title:&nbsp;
                {data.name.title}
                    </h3>
                    <h3>First:&nbsp;
                {data.name.first}
                    </h3>
                    <h3>Last:&nbsp;
                {data.name.last}
                    </h3>
                </div>
                : <h3>Loading...</h3>}
        </div>
    )
}