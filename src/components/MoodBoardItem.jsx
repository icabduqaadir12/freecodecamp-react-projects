export function MoodBoardItem({color, image, description}) {
    return (
        <div style={{
            backgroundColor: color
        }} className="mood-board-item">
            <img src={image} alt="" className="mood-board-image" />
            <h3 className="mood-board-text">{description}</h3>
        </div>
    )
}