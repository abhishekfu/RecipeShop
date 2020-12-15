const styles = (theme) => ({
    container:{
        paddingTop:theme.spacing(15),
        padding:theme.spacing(5)
    },
    title:{
        textTransform:'uppercase',
        textDecoration:'underline'
    },
    btn:{
        marginTop:theme.spacing(22),
        padding:theme.spacing(1,6,1,6),
        backgroundColor:'#556B2F',
        fontSize:20,
        '&:hover':{
            backgroundColor:'#006400'
        }
    }
})

export default styles;