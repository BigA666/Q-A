function mapDispatchToProps (dispatch){
    return {
        update_gender: function(sex){
            dispatch({
                type: 'update_gender',
                data: sex
            })
            

        }
    }
}
export default mapDispatchToProps