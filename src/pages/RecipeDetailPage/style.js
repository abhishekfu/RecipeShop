const styles = (theme) => ({
    container: {
       position:'absolute',
        top:100,
        padding:theme.spacing(5),
        marginLeft:theme.spacing(5)
      },
      root:{
        marginTop:theme.spacing(3) 
      },
      title:{
          fontWeight:'bold'
      },
      description:{
          lineHeight:2,
          fontSize:20,
          fontWeight:'500'
      },
      author:{
        marginLeft:theme.spacing(1),
        fontSize:20
      }
})

export default styles;