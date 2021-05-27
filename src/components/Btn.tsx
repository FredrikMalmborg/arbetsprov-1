import './Btn.style.css'

interface Props {
    label: string,
    type?: "inline" | "block"
    disabled?: boolean
    onClick: () => any
}

export default function Btn({ label, type = "block", onClick, disabled }: Props) {

    const handleOnClick = () => !disabled && onClick()

    if (type === "inline") return (
        <span className="btn" onClick={handleOnClick} style={{ opacity: disabled ? ".3" : "1" }}>
            {label}
        </span>)

    return (
        <div className="btn" onClick={handleOnClick} style={{ opacity: disabled ? ".3" : "1" }}>
            {label}
        </div>
    )
}
