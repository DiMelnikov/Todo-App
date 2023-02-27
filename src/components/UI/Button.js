import styles from './Button.module.css'
function Button({ children, disabled = false, onClick, title }) {
	return (
		<button
			className={styles.button}
			onClick={onClick}
			title={title}
			disabled={disabled}
		>
			{children}
		</button>
	)
}

export default Button
