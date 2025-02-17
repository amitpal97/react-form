import "./container.css"
export const Container = ({ children, className, ...rest }) => {
    return (<>
        <div className={`container ${className} ${{ ...rest }}`}>
            {children}
        </div>
    </>)
}