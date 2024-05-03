import colorNames from 'colornames'

const Input = ({ 
    colorValue, setColorValue, setHexValue , isDarkText, setIsDarkText
}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <label>Add Color NAme:</label>
        <input
           autoFocus
           type="text"
           placeholder="Add Color Name"
           required
           valjue={colorValue}
           onChange={(e) => {
               setColorValue(e.target.value);
               setHexValue(colorNames(e.target.value));
               }}
           />
        <button
           type='button'
           onClick={() => setIsDarkText(!isDarkText)}
           >
            Toggle Text Color
           </button>
    </form>
  )
}

export default Input