// 作用是为了将redux里的数据拿到页面，进行实时更新，也可对数据进行一些操作，但并不会影响到数据源
// 属性名会绑定到this.props 可通过其获取
function mapStateToProps (state){ 
    return {
        gender: state.update_gender
    }
}
export default mapStateToProps