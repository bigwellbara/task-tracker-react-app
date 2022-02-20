import PropTypes from 'prop-types'
const Header = ({title}) => {
  return (
    <header className='Header'>
        <h1>
     
        {title}
        </h1>
        <button className="">Add</button>
       
        </header>
  )
}
Header.defaultProps={
    title: 'Task Tracker',
}

Header.propTypes={
    title: PropTypes.string,
}

//CSS in JS
// const headingStyle={
//     color:'red',
//     backgroundColor:'black',
// }

export default Header