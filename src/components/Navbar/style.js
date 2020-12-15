const styles = (theme) => ({
    container:{
        padding:theme.spacing(2),
        backgroundColor:'#3A473A',
        position:'fixed',
        zIndex:40
    },
    brandname:{
        fontWeight:'bold',
        letterSpacing:'0.5px',
        color:'#fff',
        fontSize:30
    },
    button:{
        backgroundColor:'#fff',
        marginRight:theme.spacing(3),
        marginTop:theme.spacing(2)
    },
    img:{
        width:theme.spacing(5),
        height:theme.spacing(5),
        marginLeft:theme.spacing(3)
    },
    rightAligned:{
        color:'#fff',
        marginRight:theme.spacing(3)
    },
    icon:{
        color:'#fff',
        marginRight:theme.spacing(1)
    },
    username:{
        color:'#fff',
    }
})

export default styles;