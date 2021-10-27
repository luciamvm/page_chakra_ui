export default function ColoredLine(color, height) {
    return (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: height
        }}
    />
    )
}