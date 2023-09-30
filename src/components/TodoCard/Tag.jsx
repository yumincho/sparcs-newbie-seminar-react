import "./Tag.css"

const Tag = ({name}) => {
    return <div className={`tag ${name}`}>
        {name}
    </div>
}

export default Tag;