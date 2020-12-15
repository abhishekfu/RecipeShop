const styles = (theme) => ({
   img:{
       width:theme.spacing(80),
       height:theme.spacing(80)
   },
   tile:{
    width:theme.spacing(7),
    height:theme.spacing(7),
    marginLeft:theme.spacing(2),
    marginBottom:theme.spacing(2),
    cursor:'pointer'
   },
   tileHighlighted:{
    width:theme.spacing(7),
    height:theme.spacing(7),
    marginLeft:theme.spacing(2),
    marginBottom:theme.spacing(2),
    cursor:'pointer',
    borderStyle:'solid',
    borderColor:'#228B22',
    borderWidth:theme.spacing(1),
    boxSizing:'border-box'
   }
})

export default styles;