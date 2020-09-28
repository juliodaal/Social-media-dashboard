import React from 'react'

// import handleClick from '../functions/handleClick'
// Styles
import '../../assets/css/Header.css'

class  Header extends React.Component {
    constructor(props){
        super(props)
        this.button = React.createRef();
    }
    handleClick(e) {
        e.target.classList.toggle('active');
        document.body.classList.toggle('light')
        if(document.body.classList.contains('light')){
            localStorage.setItem('dark-mode','true')
        } else {
            localStorage.setItem('dark-mode','false')
        }
    }
    componentDidMount(){
        if(localStorage.getItem('dark-mode') === 'true'){
            document.body.classList.add('light')
            this.button.current.classList.add('active');
        } else {
            document.body.classList.remove('light')
            this.button.current.classList.remove('active');
        }
    }
    render() {
        return(
            <header>
                <div className="container">
                    <h1>
                        Social Media Dashboard
                        <span>Total Followers: 0</span>
                    </h1>
                    
                    <div className="dark-mode-button">
                        Dark Mode
                        <button className="" ref={this.button} onClick={this.handleClick} /> 
                    </div>
                </div>
            </header>
        )
    }
}

export default Header